# Deploy sandraiderscheats.net

Step-by-step guide to deploy the Sand Raiders Cheats static site to **sandraiderscheats.net** on Cloudflare Pages, configure DNS, and submit to Google Search Console.

## Cloudflare Pages settings (required)

| Setting | Value |
|---------|--------|
| **Build command** | `npm run build` |
| **Build output directory** | `dist` |
| **Deploy command** | *(leave empty)* — Pages deploys `dist` after the build |
| **Node.js version** | `22` (`NODE_VERSION=22`) |

`npm run build` runs `prebuild` (`sync:brand`) → `astro build` → `postbuild` (strip Brand Studio).

**Do not** set the deploy/build command to `npx wrangler deploy` alone. That is a Workers command; it skips the Astro build and fails when `dist/` is missing. For CLI uploads use `npm run deploy` (build + `wrangler pages deploy`).

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

## 2. Cloudflare Pages project

### Option A — Git-connected (recommended)

1. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com) → **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**.
2. Select this repository (`sand-Raiders-of-sophie-cheats`).
3. Configure build settings:
   - **Project name:** `sand-raiders-of-sophie-cheats`
   - **Production branch:** `main`
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Deploy command:** leave empty (do **not** use `npx wrangler deploy`)
   - **Node.js version:** 22 (set via environment variable `NODE_VERSION=22` if needed)
4. Save and deploy. Cloudflare runs `npm run build` on each push, then publishes `dist`.

### Option B — Direct upload / Wrangler CLI

```bash
npm run build:validate
npm run deploy
```

This runs `npm run build` then `wrangler pages deploy dist --project-name=sand-raiders-of-sophie-cheats` (see `wrangler.toml` / `package.json`).
## 3. Custom domain and DNS

Add **warzonescheats.net** as the primary custom domain on the Pages project.

### Apex (warzonescheats.net)

In **Cloudflare DNS** for the zone:

| Type  | Name | Content              | Proxy |
|-------|------|----------------------|-------|
| CNAME | `@`  | `<pages-subdomain>.pages.dev` | Proxied (orange cloud) |

Cloudflare CNAME flattening handles apex records automatically.

### www → apex redirect

1. Add a DNS record for `www` pointing to the same Pages project (proxied CNAME or A record).
2. In **Rules** → **Redirect Rules** (or Bulk Redirects), create:
   - **Source:** `www.warzonescheats.net/*`
   - **Target:** `https://warzonescheats.net/${1}`
   - **Status:** 301

The deployed `functions/_middleware.js` also enforces apex canonical host, legacy domain redirects (`warzonescheats.xyz`, `.net`, `.com`), and legacy path redirects.

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

Verify redirects:

- `http://sandraiderscheats.net` → `https://sandraiderscheats.net` (301)
- `https://www.sandraiderscheats.net` → `https://sandraiderscheats.net` (301)
- Legacy domains (e.g. `warzonescheats.net`) → `https://sandraiderscheats.net` (301)
- `/sitemap-index.xml` → `/sitemap.xml` (301)
- Legacy paths (e.g. `/fortnite-hacks/`) → Warzone equivalents (301)

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
| Redeploy | Push to Git (auto) or `npm run deploy` |

## Checklist

- [ ] `npm run build:validate` passes locally
- [ ] Cloudflare Pages project attached to this repo
- [ ] Custom domain `sandraiderscheats.net` attached and active
- [ ] `www` redirects to apex
- [ ] Legacy domains 301 to `sandraiderscheats.net`
- [ ] Always Use HTTPS enabled
- [ ] `robots.txt` and sitemaps serve from `https://sandraiderscheats.net`
- [ ] Google Search Console domain verified
- [ ] `sitemap.xml` submitted in GSC
- [ ] Homepage and `/sand-raiders-hacks/` requested for indexing
