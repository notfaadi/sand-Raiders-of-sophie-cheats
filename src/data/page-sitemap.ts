import { siteConfig } from './site';
import { warzoneImages } from './warzone';
import { englishPaths, pageIds, type PageId } from './i18n/routing';
import { pageSitemapMeta } from './sitemap-meta';
import {
	pageSitemapImageLabels,
	resolvedSitemapImages,
	sitemapLastmod,
} from './brand-sitemap';
import { cloudDmaPaths, type CloudDmaPageId } from './cloud-dma';
import { fillBrandTokens } from './brand';

export type SitemapImage = {
	url: string;
	title: string;
	caption: string;
};

export type PageSitemapEntry = {
	path: string;
	priority: number;
	changefreq: 'daily' | 'weekly' | 'monthly' | 'yearly';
	lastmod: string;
	images: SitemapImage[];
};

const abs = (path: string) => new URL(path, siteConfig.url).href;

const img = (path: string, title: string, caption: string): SitemapImage => ({
	url: abs(path),
	title,
	caption,
});

/**
 * One screenshot per page — paths stay in warzoneImages; titles/captions from brand tokens.
 */
const pageImageSrcById: Record<PageId, string> = {
	home: warzoneImages.hero,
	'sand-raiders-esp': warzoneImages.playerEsp,
	'sand-raiders-aimbot': warzoneImages.aimbotCombat,
	features: warzoneImages.aimbotSkeleton,
	pricing: warzoneImages.cheatsCombat,
	setup: warzoneImages.playerEsp,
	updates: warzoneImages.hero,
	faq: warzoneImages.aimbotSkeleton,
	support: warzoneImages.cheatsCombat,
	undetected: warzoneImages.espWallhack,
	wallhack: warzoneImages.espWallhack,
	radar: warzoneImages.playerEsp,
	'eac-bypass': warzoneImages.aimbotCombat,
	'cheats-2026': warzoneImages.hero,
	hacks: warzoneImages.cheatsCombat,
	'cheat-download': warzoneImages.cheatsCombat,
	'mod-menu': warzoneImages.playerEsp,
	'soft-aim': warzoneImages.aimbotSkeleton,
	'best-cheats': warzoneImages.hero,
	'aimbot-hack': warzoneImages.aimbotSkeleton,
	'esp-hack': warzoneImages.espWallhack,
	'unlock-all': warzoneImages.playerEsp,
	privacy: warzoneImages.aimbotCombat,
	refund: warzoneImages.cheatsCombat,
	terms: warzoneImages.aimbotSkeleton,
};

for (const pageId of pageIds) {
	if (!pageImageSrcById[pageId]) {
		throw new Error(`[sitemap] No image path configured for pageId: ${pageId}`);
	}
}

const cloudDmaSitemapMeta: Record<
	CloudDmaPageId,
	{ priority: number; changefreq: PageSitemapEntry['changefreq']; lastmod: string; title: string; caption: string }
> = {
	about: {
		priority: 0.96,
		changefreq: 'weekly',
		lastmod: '2026-08-12',
		title: 'Cloud DMA',
		caption: fillBrandTokens('Cloud DMA for {primaryKeyword} on Windows PC'),
	},
	setup: {
		priority: 0.9,
		changefreq: 'weekly',
		lastmod: '2026-08-12',
		title: 'Cloud DMA setup',
		caption: fillBrandTokens('Cloud DMA setup help for {primaryKeyword}'),
	},
	hardware: {
		priority: 0.88,
		changefreq: 'monthly',
		lastmod: '2026-08-12',
		title: 'Cloud DMA hardware',
		caption: fillBrandTokens('Cloud DMA hardware guidance for {primaryKeyword}'),
	},
	status: {
		priority: 0.94,
		changefreq: 'daily',
		lastmod: '2026-08-12',
		title: 'Cloud DMA status',
		caption: fillBrandTokens('Cloud DMA status after {antiCheat} patches'),
	},
	plans: {
		priority: 0.9,
		changefreq: 'weekly',
		lastmod: '2026-08-12',
		title: 'Cloud DMA plans',
		caption: fillBrandTokens('Cloud DMA monthly and lifetime plans'),
	},
};

const cloudDmaSitemapEntries: PageSitemapEntry[] = (Object.keys(cloudDmaPaths) as CloudDmaPageId[]).map(
	(id) => {
		const meta = cloudDmaSitemapMeta[id];
		return {
			path: cloudDmaPaths[id],
			priority: meta.priority,
			changefreq: meta.changefreq,
			lastmod: sitemapLastmod(meta.lastmod),
			images: [img(warzoneImages.aimbotCombat, meta.title, meta.caption)],
		};
	},
);

/**
 * Canonical English sitemap entries — always includes every pageId from routing.
 * Absolute locs use siteConfig.url (from brand.url).
 */
export const pageSitemapEntries: PageSitemapEntry[] = [
	...pageIds.map((pageId) => {
		const meta = pageSitemapMeta[pageId];
		const labels = pageSitemapImageLabels(pageId);
		return {
			path: englishPaths[pageId],
			priority: meta.priority,
			changefreq: meta.changefreq,
			lastmod: sitemapLastmod(meta.lastmod),
			images: [img(pageImageSrcById[pageId], labels.title, labels.caption)],
		};
	}),
	...cloudDmaSitemapEntries,
];

/** Unique keyword images for the dedicated image sitemap (editable in Brand Studio). */
export const imageSitemapEntries: SitemapImage[] = resolvedSitemapImages().map((entry) =>
	img(entry.src, entry.title, entry.caption),
);

export function absolutePageUrl(path: string): string {
	return abs(path);
}

export function absoluteAssetUrl(path: string): string {
	return abs(path);
}
