# Deploy sandraiderscheats.net

Step-by-step guide to deploy the Sand Raiders Cheats static site to **sandraiderscheats.net** on Cloudflare, configure DNS, and submit to Google Search Console.

## Cloudflare dashboard (Workers Builds — current setup)

Your project currently runs **Deploy command:** `npx wrangler deploy`. That path is supported by `wrangler.toml`:

| Setting | Value |
|---------|--------|
| **Build command** | `npm run build` *(or leave empty — wrangler `[build]` also runs it)* |
| **Deploy command** | `npx wrangler deploy` *(works as-is)* |
| **Node.js version** | `22` (`NODE_VERSION=22`) |

`wrangler.toml` sets:

- `[build] command = "npm run build"` — Astro build before upload
- `[assets] directory = "./dist"` — static output for Workers assets
- `main = "./workers/site.js"` — redirects + security headers (same rules as `functions/_middleware.js`)

### Recommended if you can edit Deploy command (Pages Functions)

`functions/_middleware.js` only runs on **Pages** deploy. For that path:

| Setting | Value |
|---------|--------|
| **Build command** | `npm run build` |
| **Deploy command** | `npx wrangler pages deploy ./dist --project-name=sand-raiders-of-sophie-cheats` |
| **Build output directory** | `dist` *(Pages UI)* |

Or leave **Deploy command** empty on classic Pages Git builds (Pages publishes `dist` after the build).

`npm run build` runs `prebuild` (`sync:brand`) → `astro build` → `postbuild` (strip Brand Studio).

## Prerequisites

- Node.js **≥ 22.12.0**
- Cloudflare account with access to **sandraiderscheats.net** DNS
- Wrangler CLI (included as dev dependency): `npx wrangler login`

## 1. Build and validate locally

From the project root:

```bash
npm install
npm run generate:i18n
node scripts/generate-blog-posts.mjs
npm run build:validate
```

`build:validate` runs brand sync, `astro build`, strip Brand Studio, then `scripts/validate-sitemaps.mjs`. All sitemap checks must pass before deploying.

## 2. Cloudflare project

### Option A — Workers Builds + `npx wrangler deploy` (matches locked dashboard)

1. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com) → **Workers & Pages** → this project.
2. Settings → Builds:
   - **Build command:** `npm run build` (optional if wrangler `[build]` runs)
   - **Deploy command:** `npx wrangler deploy`
   - **Node.js version:** 22 (`NODE_VERSION=22`)
3. Push to `main`. Cloudflare runs deploy; wrangler builds then uploads `./dist` + `workers/site.js`.

Local dry-run:

```bash
npm run build
npx wrangler deploy --dry-run
```

### Option B — Pages + `wrangler pages deploy` (keeps `functions/`)

1. **Build command:** `npm run build`
2. **Deploy command:** `npx wrangler pages deploy ./dist --project-name=sand-raiders-of-sophie-cheats`
3. Or classic Pages Git: Deploy command empty, output directory `dist`.

### Option C — CLI from your machine

```bash
npm run build:validate
npm run deploy
```

`npm run deploy` uses Pages upload (`wrangler pages deploy`). For the Workers path locally: `npx wrangler deploy`.

## 3. Custom domain and DNS

Attach **both** hostnames to the Worker (apex + www). Code-only Host redirects cannot run if `www` never resolves or never hits the Worker — Seobility then reports **status null** (not a failed 301).

`wrangler.toml` declares Custom Domains for:

- `sandraiderscheats.net`
- `www.sandraiderscheats.net`

`npx wrangler deploy` provisions them when Cloudflare credentials are available and the zone is on the same account. If deploy cannot add www automatically, do the dashboard steps below.

### Apex (sandraiderscheats.net)

In **Cloudflare DNS** for the zone (or rely on Worker Custom Domains auto-DNS):

| Type  | Name | Content              | Proxy |
|-------|------|----------------------|-------|
| CNAME | `@`  | `<workers-custom-domain target>` | Proxied (orange cloud) |

Cloudflare CNAME flattening handles apex records automatically.

### www DNS + Redirect Rule (required for Seobility)

**Why Seobility fails:** Redirect checkers need `https://www.sandraiderscheats.net/` to **respond**, then **301** to `https://sandraiderscheats.net/`. No DNS / no Worker route → connection fails → status null. Apex https and http→https can look fine while www is broken.

#### A. DNS (must exist, Proxied)

In **DNS** → **Records** for `sandraiderscheats.net`:

| Type  | Name | Content | Proxy |
|-------|------|---------|-------|
| CNAME | `www` | `sandraiderscheats.net` **or** the Worker/Pages target hostname | **Proxied (orange cloud)** |

Alternatively: Workers & Pages → this Worker → **Settings** → **Domains & Routes** → **Add** → Custom Domain → `www.sandraiderscheats.net` (Cloudflare creates the DNS + cert).

#### B. Worker must receive www traffic

Confirm **Domains & Routes** lists:

1. `sandraiderscheats.net`
2. `www.sandraiderscheats.net`

Without (2), `workers/site.js` never sees Host `www…` and cannot 301.

#### C. Backup: Cloudflare Redirect Rule (if Worker route is delayed)

**Rules** → **Redirect Rules** → **Create rule**:

| Field | Value |
|-------|--------|
| **Rule name** | `www → apex 301` |
| **If** | Custom filter expression |
| **Expression** | `(http.host eq "www.sandraiderscheats.net")` |
| **Then** | Dynamic redirect |
| **Expression** | `concat("https://sandraiderscheats.net", http.request.uri.path)` |
| **Status code** | `301` |
| **Preserve query string** | On (if the UI offers it; otherwise append `http.request.uri.query` in the concat) |

Worker + Pages middleware also enforce www / legacy / http→https → apex when the request reaches them.

### SSL / HTTPS

1. **SSL/TLS** → **Overview** → set mode to **Full (strict)**.
2. **Edge Certificates** → enable **Always Use HTTPS**.
3. After enabling, **Caching** → **Configuration** → **Purge Everything** once.

## 4. Post-deploy smoke test

Verify these URLs return **200** with correct content:

- `https://sandraiderscheats.net/`
- `https://sandraiderscheats.net/es/`
- `https://sandraiderscheats.net/sand-raiders-hacks/`
- `https://sandraiderscheats.net/sand-raiders-aimbot/`
- `https://sandraiderscheats.net/sitemap.xml`
- `https://sandraiderscheats.net/robots.txt`

Verify redirects (must return a real **301** + **Location**, not DNS/timeout failure):

- `http://sandraiderscheats.net` → `https://sandraiderscheats.net` (301)
- `https://www.sandraiderscheats.net` → `https://sandraiderscheats.net` (301) — required for Seobility redirect checker
- Legacy domains (e.g. `warzonescheats.net`) → `https://sandraiderscheats.net` (301)
- `/sitemap-index.xml` → `/sitemap.xml` (301)
- Legacy paths (e.g. `/fortnite-hacks/`) → Sand Raiders equivalents (301)

Quick check:

```bash
curl -sI https://www.sandraiderscheats.net/ | findstr /I "HTTP Location"
# Expect: HTTP/2 301  and  Location: https://sandraiderscheats.net/
```

## 5. Google Search Console

1. Go to [Google Search Console](https://search.google.com/search-console).
2. **Add property** → choose **Domain** → enter `sandraiderscheats.net`.
3. Verify ownership via the **DNS TXT record** Cloudflare provides (add in Cloudflare DNS, wait for propagation, then confirm in GSC).
4. After verification, open **Sitemaps** and submit:
   ```
   https://sandraiderscheats.net/sitemap.xml
   ```
   Remove any legacy submissions (`sitemap-index.xml`, old `warzonescheats.net` URLs).
5. Use **URL Inspection** to request indexing for:
   - Homepage (`/`)
   - Pillar page (`/sand-raiders-hacks/`)
   - Key landing pages (`/sand-raiders-aimbot/`, `/sand-raiders-esp/`, `/sand-raiders-cheats-2026/`, etc.)
   - A sample of locale homepages (`/es/`, `/de/`, `/fr/`)
6. Monitor **Pages** (Coverage), **Core Web Vitals**, and **International targeting** (hreflang) over the following weeks.

## 6. Ongoing maintenance

| Task | Command / action |
|------|------------------|
| Regenerate i18n content | `npm run generate:i18n` (after editing `scripts/i18n-data/*`) |
| Regenerate blog posts | `node scripts/generate-blog-posts.mjs` |
| Full build + SEO validation | `npm run build:validate` |
| Refresh gallery images | `npm run fetch:images` then `npm run optimize:images` |
| Redeploy | Push to Git (auto) or `npm run deploy` / `npx wrangler deploy` |

## Checklist

- [ ] `npm run build:validate` passes locally
- [ ] Cloudflare project attached to this repo
- [ ] Custom domain `sandraiderscheats.net` attached and active
- [ ] Custom domain `www.sandraiderscheats.net` attached (or proxied CNAME + Redirect Rule)
- [ ] `curl -sI https://www…` returns **301** to apex (Seobility needs this — not status null)
- [ ] SSL Full (strict) + Always Use HTTPS
- [ ] Legacy domains 301 to `sandraiderscheats.net`
- [ ] `robots.txt` and sitemaps serve from `https://sandraiderscheats.net`
- [ ] Google Search Console domain verified
- [ ] `sitemap.xml` submitted in GSC
- [ ] Homepage and `/sand-raiders-hacks/` requested for indexing
