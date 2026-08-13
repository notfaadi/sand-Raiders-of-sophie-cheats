/**
 * Workers static-assets entry (used by `npx wrangler deploy`).
 * Mirrors functions/_middleware.js: redirects + security headers, then ASSETS.
 * Keep in sync with functions/_middleware.js when changing redirect/header rules.
 */
const CANONICAL_ORIGIN = 'https://sandraiderscheats.net';
const APEX_HOST = 'sandraiderscheats.net';
const WWW_HOST = 'www.sandraiderscheats.net';

/** Legacy domains → canonical apex (301). */
const LEGACY_HOSTS = new Set([
	'fortnitehack.net',
	'www.fortnitehack.net',
	'fortnitecheats.xyz',
	'www.fortnitecheats.xyz',
	'fortnitecheats.net',
	'www.fortnitecheats.net',
	'fortnitecheats.com',
	'www.fortnitecheats.com',
	'warzonescheats.net',
	'www.warzonescheats.net',
	'warzonescheats.com',
	'www.warzonescheats.com',
	'warzonescheats.xyz',
	'www.warzonescheats.xyz',
]);

// Keep in sync with public/_redirects (which preserves query strings by default, as we do below).
const PATH_REDIRECTS = {
	'/sitemap-0.xml': '/sitemap.xml',
	'/sitemap-index.xml': '/sitemap.xml',
	'/sitemap.xml/': '/sitemap.xml',
	'/sitemap-en.xml/': '/sitemap-en.xml',
	'/sitemap-i18n.xml/': '/sitemap-i18n.xml',
	'/sitemap-images.xml/': '/sitemap-images.xml',
	'/call-of-duty-warzone-cheats': '/',
	'/call-of-duty-warzone-cheats/': '/',
	'/sand-raiders-cheats-2026': '/sand-raiders-cheats-2026/',
	'/warzone-cheats': '/sand-raiders-cheats-2026/',
	'/warzone-cheats/': '/sand-raiders-cheats-2026/',
	'/fortnite-aimbot': '/sand-raiders-aimbot/',
	'/fortnite-aimbot/': '/sand-raiders-aimbot/',
	'/fortnite-esp': '/sand-raiders-esp/',
	'/fortnite-esp/': '/sand-raiders-esp/',
	'/fortnite-hacks': '/sand-raiders-hacks/',
	'/fortnite-hacks/': '/sand-raiders-hacks/',
	'/eac-bypass': '/eac-bypass/',
	'/eac-bypass/': '/eac-bypass/',
	'/eac-bypass-fortnite': '/eac-bypass/',
	'/eac-bypass-fortnite/': '/eac-bypass/',
	'/blog/patch-notes-buffs-nerfs-vaults': '/blog/warzone-patch-notes-guide/',
	'/blog/patch-notes-buffs-nerfs-vaults/': '/blog/warzone-patch-notes-guide/',
	'/blog/chapter-7-season-3-skin-leaks-vbucks': '/blog/warzone-skin-leaks-guide/',
	'/blog/chapter-7-season-3-skin-leaks-vbucks/': '/blog/warzone-skin-leaks-guide/',
	'/blog/hammer-ar-s-tier-data-analysis': '/blog/warzone-weapon-tier-list/',
	'/blog/hammer-ar-s-tier-data-analysis/': '/blog/warzone-weapon-tier-list/',
	'/blog/zero-build-meta-broken-aggressive-strategies': '/blog/warzone-resurgence-aggressive-strategies/',
	'/blog/zero-build-meta-broken-aggressive-strategies/': '/blog/warzone-resurgence-aggressive-strategies/',
	'/blog/fncs-meta-watch-tournament-drops': '/blog/warzone-tournament-meta-guide/',
	'/blog/fncs-meta-watch-tournament-drops/': '/blog/warzone-tournament-meta-guide/',
	'/blog/secret-loot-routes-full-gold': '/blog/warzone-loot-routes-guide/',
	'/blog/secret-loot-routes-full-gold/': '/blog/warzone-loot-routes-guide/',
	'/blog/bugha-settings-pro-setup': '/blog/warzone-pro-settings-guide/',
	'/blog/bugha-settings-pro-setup/': '/blog/warzone-pro-settings-guide/',
	'/blog/creative-warmup-maps-pros-use': '/blog/warzone-warmup-maps-ranked/',
	'/blog/creative-warmup-maps-pros-use/': '/blog/warzone-warmup-maps-ranked/',
	'/reviews/sand-raiders-esp-zero-build-review-buildsr4k': '/reviews/sand-raiders-esp-resurgence-review-buildsr4k/',
	'/reviews/sand-raiders-esp-zero-build-review-buildsr4k/': '/reviews/sand-raiders-esp-resurgence-review-buildsr4k/',
	'/reviews/sand-raiders-radar-hack-review-vanlifefn': '/reviews/sand-raiders-radar-hack-review-vanlifewz/',
	'/reviews/sand-raiders-radar-hack-review-vanlifefn/': '/reviews/sand-raiders-radar-hack-review-vanlifewz/',
};

const SECURITY_HEADERS = {
	'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload',
	'X-Content-Type-Options': 'nosniff',
	'Referrer-Policy': 'strict-origin-when-cross-origin',
	'X-Frame-Options': 'DENY',
	'Cross-Origin-Opener-Policy': 'same-origin',
	'Cross-Origin-Resource-Policy': 'same-origin',
	'Cross-Origin-Embedder-Policy': 'credentialless',
	'Origin-Agent-Cluster': '?1',
	'Permissions-Policy':
		'accelerometer=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=()',
	'Content-Security-Policy': [
		"default-src 'self'",
		"base-uri 'self'",
		"object-src 'none'",
		"frame-ancestors 'none'",
		"form-action 'self' https://zadeyo.com",
		"img-src 'self' data: blob: https:",
		"font-src 'self' data:",
		"style-src 'self' 'unsafe-inline'",
		"script-src 'self'",
		"connect-src 'self'",
		"upgrade-insecure-requests",
		"trusted-types default",
		"require-trusted-types-for 'script'",
	].join('; '),
};

function getClientProtocol(request) {
	const visitor = request.headers.get('cf-visitor');
	if (visitor) {
		try {
			const scheme = JSON.parse(visitor).scheme;
			if (scheme) return String(scheme).toLowerCase();
		} catch {
			// ignore malformed cf-visitor
		}
	}

	const forwarded = request.headers.get('x-forwarded-proto');
	if (forwarded) {
		return forwarded.split(',')[0].trim().toLowerCase();
	}

	return new URL(request.url).protocol.replace(':', '').toLowerCase();
}

function applySecurityHeaders(headers, { html = false } = {}) {
	for (const [key, value] of Object.entries(SECURITY_HEADERS)) {
		headers.set(key, value);
	}

	if (html) {
		const contentType = headers.get('Content-Type') || '';
		if (!/charset=/i.test(contentType)) {
			headers.set('Content-Type', 'text/html; charset=utf-8');
		}
		headers.set('Cache-Control', 'public, max-age=0, must-revalidate');
		headers.set('CDN-Cache-Control', 'no-store');
		headers.set('Cloudflare-CDN-Cache-Control', 'no-store');
	}
}

/** Brand Studio / legacy __brand — never publicly routable (was _redirects 404; Workers reject that). */
function isBlockedPath(pathname) {
	return (
		pathname === '/brand-studio' ||
		pathname.startsWith('/brand-studio/') ||
		pathname === '/__brand' ||
		pathname.startsWith('/__brand/')
	);
}

/** Flat .xml sitemaps — redirect any other *.xml/ trailing-slash URL (locale sitemaps). */
function xmlTrailingSlashRedirect(pathname) {
	if (!pathname.endsWith('.xml/')) return null;
	return pathname.slice(0, -1);
}

/** Add trailing slash for directory-style paths (matches Astro trailingSlash: 'always'). */
function trailingSlashRedirect(pathname) {
	if (!pathname || pathname === '/' || pathname.includes('.') || pathname.endsWith('/')) {
		return null;
	}
	return `${pathname}/`;
}

export default {
	async fetch(request, env) {
		const url = new URL(request.url);
		const host = url.hostname.toLowerCase();
		const proto = getClientProtocol(request);

		const isLegacyHost = LEGACY_HOSTS.has(host);
		const isProductionHost = host === APEX_HOST || host === WWW_HOST || isLegacyHost;
		const needsHostRedirect = host === WWW_HOST || isLegacyHost;
		const needsHttpsRedirect = isProductionHost && proto === 'http';

		if (needsHostRedirect || needsHttpsRedirect) {
			const mappedPath = PATH_REDIRECTS[url.pathname] ?? url.pathname;
			const target = new URL(mappedPath + url.search, CANONICAL_ORIGIN);
			const headers = new Headers({
				Location: target.toString(),
				'Cache-Control': 'no-store',
				'CDN-Cache-Control': 'no-store',
				'Cloudflare-CDN-Cache-Control': 'no-store',
			});
			applySecurityHeaders(headers);
			return new Response(null, { status: 301, headers });
		}

		if (isBlockedPath(url.pathname)) {
			const notFoundUrl = new URL('/404.html', url.origin);
			const assetResponse = await env.ASSETS.fetch(new Request(notFoundUrl, request));
			const headers = new Headers(assetResponse.headers);
			applySecurityHeaders(headers, { html: true });
			return new Response(assetResponse.body, {
				status: 404,
				statusText: 'Not Found',
				headers,
			});
		}

		const pathRedirect =
			PATH_REDIRECTS[url.pathname] ??
			xmlTrailingSlashRedirect(url.pathname) ??
			trailingSlashRedirect(url.pathname);
		if (pathRedirect) {
			const headers = new Headers({
				Location: new URL(pathRedirect + url.search, CANONICAL_ORIGIN).toString(),
				'Cache-Control': 'no-store',
			});
			applySecurityHeaders(headers);
			return new Response(null, { status: 301, headers });
		}

		const response = await env.ASSETS.fetch(request);
		const headers = new Headers(response.headers);
		const contentType = headers.get('Content-Type') || '';
		const isHtml = contentType.includes('text/html');

		applySecurityHeaders(headers, { html: isHtml });

		return new Response(response.body, {
			status: response.status,
			statusText: response.statusText,
			headers,
		});
	},
};
