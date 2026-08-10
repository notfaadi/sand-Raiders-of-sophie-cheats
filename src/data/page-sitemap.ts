import { siteConfig } from './site';
import { warzoneImages } from './warzone';
import { englishPaths, pageIds, type PageId } from './i18n/routing';
import { pageSitemapMeta } from './sitemap-meta';
import {
	pageSitemapImageLabels,
	resolvedSitemapImages,
	sitemapLastmod,
} from './brand-sitemap';

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
	'warzone-esp': warzoneImages.playerEsp,
	'warzone-aimbot': warzoneImages.aimbotCombat,
	features: warzoneImages.aimbotSkeleton,
	pricing: warzoneImages.cheatsCombat,
	setup: warzoneImages.playerEsp,
	updates: warzoneImages.hero,
	faq: warzoneImages.aimbotSkeleton,
	support: warzoneImages.cheatsCombat,
	undetected: warzoneImages.espWallhack,
	wallhack: warzoneImages.espWallhack,
	radar: warzoneImages.playerEsp,
	ricochet: warzoneImages.aimbotCombat,
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

/**
 * Canonical English sitemap entries — always includes every pageId from routing.
 * Absolute locs use siteConfig.url (from brand.url).
 */
export const pageSitemapEntries: PageSitemapEntry[] = pageIds.map((pageId) => {
	const meta = pageSitemapMeta[pageId];
	const labels = pageSitemapImageLabels(pageId);
	return {
		path: englishPaths[pageId],
		priority: meta.priority,
		changefreq: meta.changefreq,
		lastmod: sitemapLastmod(meta.lastmod),
		images: [img(pageImageSrcById[pageId], labels.title, labels.caption)],
	};
});

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
