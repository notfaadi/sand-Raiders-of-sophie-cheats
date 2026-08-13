#!/usr/bin/env node
/**
 * Syncs public SEO files from src/data/brand.ts (single source of truth).
 * Run: npm run sync:brand  (also runs before build)
 */
import { readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

function readBrand() {
	const src = readFileSync(path.join(ROOT, 'src/data/brand.ts'), 'utf8');
	const str = (key) => {
		const m = src.match(new RegExp(`${key}:\\s*'([^']*)'`));
		if (!m) throw new Error(`brand.ts missing string field: ${key}`);
		return m[1];
	};
	const optionalStr = (key, fallback = '') => {
		const m = src.match(new RegExp(`${key}:\\s*'([^']*)'`));
		return m ? m[1] : fallback;
	};
	const themeBlock = src.match(/theme:\s*\{([\s\S]*?)\n\t\},/);
	const themeField = (key, fallback) => {
		if (!themeBlock) return fallback;
		const m = themeBlock[1].match(new RegExp(`${key}:\\s*'([^']*)'`));
		return m ? m[1] : fallback;
	};
	const name = str('name');
	return {
		name,
		shortName: optionalStr('shortName', name),
		url: str('url').replace(/\/$/, ''),
		supportEmail: str('supportEmail'),
		game: str('game'),
		antiCheat: str('antiCheat'),
		primary: (() => {
			const m = src.match(/primary:\s*'([^']*)'/);
			if (!m) throw new Error('brand.ts missing keywords.primary');
			return m[1];
		})(),
		themeBg: themeField('bg', '#08090a'),
		themeAccent: themeField('accent', '#c026d3'),
	};
}

const brand = readBrand();
const description = `Undetected ${brand.primary} — ESP, aimbot, and radar for PC`;

writeFileSync(
	path.join(ROOT, 'public/robots.txt'),
	`User-agent: *
Allow: /
Allow: /img/
Disallow: /brand-studio/
Disallow: /brand-studio
Disallow: /__brand/
Disallow: /__brand

# Primary sitemap for Google Search Console — index covers EN, locale, and image sitemaps.
Sitemap: ${brand.url}/sitemap.xml
`,
	'utf8',
);

writeFileSync(
	path.join(ROOT, 'public/site.webmanifest'),
	`${JSON.stringify(
		{
			name: brand.name,
			short_name: brand.shortName || brand.name,
			description,
			start_url: '/',
			display: 'standalone',
			background_color: brand.themeBg,
			theme_color: brand.themeBg,
			icons: [
				{ src: '/favicon.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
				{ src: '/favicon.png', sizes: '192x192', type: 'image/png', purpose: 'maskable' },
				{ src: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
			],
		},
		null,
		2,
	)}\n`,
	'utf8',
);

const astroPath = path.join(ROOT, 'astro.config.mjs');
let astro = readFileSync(astroPath, 'utf8');
const nextAstro = astro.replace(/site:\s*'[^']*'/, `site: '${brand.url}'`);
if (nextAstro === astro && !astro.includes(`site: '${brand.url}'`)) {
	throw new Error('Could not update site URL in astro.config.mjs');
}
writeFileSync(astroPath, nextAstro, 'utf8');

/** Keep Cloudflare middleware + Worker apex redirects aligned with brand.url. */
function syncCanonicalHosts(filePath) {
	let source = readFileSync(filePath, 'utf8');
	const brandHost = new URL(brand.url).hostname;
	const next = source
		.replace(/const CANONICAL_ORIGIN = '[^']*';/, `const CANONICAL_ORIGIN = '${brand.url}';`)
		.replace(/const APEX_HOST = '[^']*';/, `const APEX_HOST = '${brandHost}';`)
		.replace(/const WWW_HOST = '[^']*';/, `const WWW_HOST = 'www.${brandHost}';`);
	if (
		!next.includes(`CANONICAL_ORIGIN = '${brand.url}'`) ||
		!next.includes(`APEX_HOST = '${brandHost}'`) ||
		!next.includes(`WWW_HOST = 'www.${brandHost}'`)
	) {
		throw new Error(`Could not update canonical hosts in ${path.relative(ROOT, filePath)}`);
	}
	writeFileSync(filePath, next, 'utf8');
}

try {
	syncCanonicalHosts(path.join(ROOT, 'functions/_middleware.js'));
	syncCanonicalHosts(path.join(ROOT, 'workers/site.js'));
} catch (err) {
	throw new Error(`sync-brand middleware update failed: ${err instanceof Error ? err.message : err}`);
}

console.log(`sync-brand: ${brand.name} → ${brand.url} (robots Sitemap + Astro site + HTTPS middleware)`);
