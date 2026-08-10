/**
 * Sitemap labels + lastmod bump — driven by brand.sitemap with safe defaults.
 * XML endpoints stay generated; this only supplies brand-aware strings / dates.
 */
import { brand, fillBrandTokens } from './brand';
import type { PageId } from './i18n/routing';

export type BrandSitemapImage = {
	src: string;
	title: string;
	caption: string;
};

const defaultImages: BrandSitemapImage[] = [
	{
		src: '/images/warzone-esp-player-tags.webp',
		title: '{game} ESP player tags',
		caption: '{game} ESP player tags hack',
	},
	{
		src: '/images/warzone-wallhack-skeleton.webp',
		title: '{game} wallhack skeleton',
		caption: '{game} wallhack skeleton ESP',
	},
	{
		src: '/images/warzone-aimbot-sniper.webp',
		title: '{game} aimbot sniper',
		caption: '{game} aimbot sniper kill',
	},
	{
		src: '/images/warzone-aimbot-skeleton.webp',
		title: '{game} aimbot skeleton',
		caption: '{game} aimbot skeleton targeting',
	},
	{
		src: '/images/warzone-esp-radar.webp',
		title: '{game} ESP radar hack',
		caption: '{game} ESP radar wireframe',
	},
	{
		src: '/images/warzone-cheats-combat.webp',
		title: '{game} cheats combat',
		caption: '{game} cheats ADS aimbot',
	},
];

/** Per-page image title/caption templates for the English urlset. */
const pageImageTemplates: Record<PageId, { title: string; caption: string }> = {
	home: { title: '{brand} ESP & Aimbot', caption: '{game} ESP player tags with distances and HUD' },
	'warzone-esp': { title: '{game} ESP player tags', caption: '{game} ESP radar wireframe with multi-player tags' },
	'warzone-aimbot': { title: '{game} aimbot sniper', caption: '{game} aimbot sniper scope elimination' },
	features: { title: '{game} aimbot skeleton', caption: '{game} aimbot skeleton overlay on enemy at range' },
	pricing: { title: '{game} cheats pricing', caption: '{game} cheats ADS combat with ESP player tags' },
	setup: { title: '{game} ESP radar setup', caption: '{game} ESP radar wireframe with multi-player tags' },
	updates: { title: '{brand} updates', caption: '{game} ESP player tags for patch-day checks' },
	faq: { title: '{brand} FAQ', caption: '{game} aimbot skeleton targeting preview' },
	support: { title: '{brand} support', caption: '{game} cheats combat support reference' },
	undetected: { title: 'Undetected {game} cheats', caption: '{game} wallhack skeleton ESP for undetected visibility' },
	wallhack: { title: '{game} wallhack skeleton', caption: '{game} wallhack skeleton ESP through cover' },
	radar: { title: '{game} radar hack', caption: '{game} ESP radar wireframe overlay' },
	ricochet: { title: '{antiCheat} bypass guide', caption: '{game} aimbot sniper scope elimination preview' },
	'cheats-2026': { title: '{game} cheats 2026', caption: '{game} ESP player tags for 2026 buyer guide' },
	hacks: { title: '{brand} pillar', caption: '{game} cheats ADS combat with ESP tags' },
	'cheat-download': { title: '{game} cheat download', caption: '{game} cheats combat download preview' },
	'mod-menu': { title: '{game} mod menu', caption: '{game} ESP radar overlay for in-client toggles' },
	'soft-aim': { title: '{game} soft aim', caption: '{game} aimbot skeleton soft aim targeting' },
	'best-cheats': { title: 'Best {game} cheats', caption: '{game} ESP player tags best cheats guide' },
	'aimbot-hack': { title: '{game} aimbot hack', caption: '{game} aimbot skeleton hack overlay' },
	'esp-hack': { title: '{game} ESP hack', caption: '{game} wallhack skeleton ESP hack preview' },
	'unlock-all': { title: '{game} unlock all', caption: '{game} ESP radar player tag overlay' },
	privacy: { title: '{brand} privacy', caption: '{game} privacy policy visual' },
	refund: { title: '{brand} refund', caption: '{game} refund policy visual' },
	terms: { title: '{brand} terms', caption: '{game} terms of use visual' },
};

const sitemapDefaults = {
	contentLastmod: '2026-08-10',
	blogImageTitle: '{brand} Intel blog',
	blogImageCaption: '{game} tips, meta guides, and {antiCheat} notes',
	reviewsImageTitle: '{brand} customer reviews',
	reviewsImageCaption: 'Buyer reviews for {primaryKeyword}',
	images: defaultImages,
} as const;

type SitemapShape = {
	contentLastmod: string;
	blogImageTitle: string;
	blogImageCaption: string;
	reviewsImageTitle: string;
	reviewsImageCaption: string;
	images: BrandSitemapImage[];
};

const raw = brand as typeof brand & { sitemap?: Partial<SitemapShape> };

function normalizeImages(input: unknown): BrandSitemapImage[] {
	if (!Array.isArray(input) || input.length < 1) return defaultImages.map((i) => ({ ...i }));
	const out: BrandSitemapImage[] = [];
	for (const item of input) {
		if (!item || typeof item !== 'object') continue;
		const row = item as Record<string, unknown>;
		const src = typeof row.src === 'string' ? row.src.trim() : '';
		const title = typeof row.title === 'string' ? row.title.trim() : '';
		const caption = typeof row.caption === 'string' ? row.caption.trim() : '';
		if (!src.startsWith('/images/') || !title || !caption) continue;
		out.push({ src, title, caption });
	}
	return out.length ? out : defaultImages.map((i) => ({ ...i }));
}

export const brandSitemap: SitemapShape = {
	contentLastmod: raw.sitemap?.contentLastmod?.trim() || sitemapDefaults.contentLastmod,
	blogImageTitle: raw.sitemap?.blogImageTitle?.trim() || sitemapDefaults.blogImageTitle,
	blogImageCaption: raw.sitemap?.blogImageCaption?.trim() || sitemapDefaults.blogImageCaption,
	reviewsImageTitle: raw.sitemap?.reviewsImageTitle?.trim() || sitemapDefaults.reviewsImageTitle,
	reviewsImageCaption: raw.sitemap?.reviewsImageCaption?.trim() || sitemapDefaults.reviewsImageCaption,
	images: normalizeImages(raw.sitemap?.images),
};

/** Prefer the later of page lastmod vs brand contentLastmod (Brand Studio bump). */
export function sitemapLastmod(pageLastmod: string): string {
	const bump = brandSitemap.contentLastmod;
	return bump && bump > pageLastmod ? bump : pageLastmod;
}

export function resolvedSitemapImages(): BrandSitemapImage[] {
	return brandSitemap.images.map((entry) => ({
		src: entry.src,
		title: fillBrandTokens(entry.title),
		caption: fillBrandTokens(entry.caption),
	}));
}

export function pageSitemapImageLabels(pageId: PageId): { title: string; caption: string } {
	const tpl = pageImageTemplates[pageId];
	return {
		title: fillBrandTokens(tpl.title),
		caption: fillBrandTokens(tpl.caption),
	};
}

export function blogSitemapImageMeta() {
	return {
		title: fillBrandTokens(brandSitemap.blogImageTitle),
		caption: fillBrandTokens(brandSitemap.blogImageCaption),
	};
}

export function reviewsSitemapImageMeta() {
	return {
		title: fillBrandTokens(brandSitemap.reviewsImageTitle),
		caption: fillBrandTokens(brandSitemap.reviewsImageCaption),
	};
}

export { sitemapDefaults, pageImageTemplates };
