import { siteConfig } from './site';
import { warzoneImages } from './warzone';
import { englishPaths, pageIds, type PageId } from './i18n/routing';
import { pageSitemapMeta } from './sitemap-meta';

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
 * One screenshot per page — aligned with HERO_IMAGES in scripts/i18n-data/constants.mjs.
 * Six source assets; primary feature pages each get a distinct file.
 */
const pageImagesById: Record<PageId, SitemapImage[]> = {
	home: [img(warzoneImages.hero, 'Warzone Hacks ESP & Aimbot', 'Warzone ESP player tags with distances and gas circle HUD')],
	'warzone-esp': [img(warzoneImages.playerEsp, 'Warzone ESP player tags', 'Warzone ESP radar wireframe with multi-player tags')],
	'warzone-aimbot': [img(warzoneImages.aimbotCombat, 'Warzone aimbot sniper', 'Warzone aimbot sniper scope 70m one-shot kill')],
	features: [img(warzoneImages.aimbotSkeleton, 'Warzone aimbot skeleton', 'Warzone aimbot skeleton overlay on enemy at range')],
	pricing: [img(warzoneImages.cheatsCombat, 'Warzone cheats pricing', 'Warzone cheats ADS combat with ESP player tags')],
	setup: [img(warzoneImages.playerEsp, 'Warzone ESP radar setup', 'Warzone ESP radar wireframe with multi-player tags')],
	updates: [img(warzoneImages.hero, 'Warzone hacks updates', 'Warzone ESP player tags tactical HUD for patch-day checks')],
	faq: [img(warzoneImages.aimbotSkeleton, 'Warzone hacks FAQ', 'Warzone aimbot skeleton targeting preview')],
	support: [img(warzoneImages.cheatsCombat, 'Warzone hacks support', 'Warzone cheats combat firefight support reference')],
	undetected: [img(warzoneImages.espWallhack, 'Undetected warzone cheats', 'Warzone wallhack skeleton ESP for undetected visibility')],
	wallhack: [img(warzoneImages.espWallhack, 'Warzone wallhack skeleton', 'Warzone wallhack skeleton ESP through scope and cover')],
	radar: [img(warzoneImages.playerEsp, 'Warzone radar hack', 'Warzone ESP radar wireframe overlay')],
	ricochet: [img(warzoneImages.aimbotCombat, 'Ricochet bypass guide', 'Warzone aimbot sniper scope elimination preview')],
	'cheats-2026': [img(warzoneImages.hero, 'Warzone cheats 2026', 'Warzone ESP player tags for 2026 buyer guide')],
	hacks: [img(warzoneImages.cheatsCombat, 'Warzone hacks pillar', 'Warzone cheats ADS combat with ESP tags')],
	'cheat-download': [img(warzoneImages.cheatsCombat, 'Warzone cheat download', 'Warzone cheats combat download preview')],
	'mod-menu': [img(warzoneImages.playerEsp, 'Warzone mod menu', 'Warzone ESP radar overlay for in-client toggles')],
	'soft-aim': [img(warzoneImages.aimbotSkeleton, 'Warzone soft aim', 'Warzone aimbot skeleton soft aim targeting')],
	'best-cheats': [img(warzoneImages.hero, 'Best warzone cheats', 'Warzone ESP player tags best cheats guide')],
	'aimbot-hack': [img(warzoneImages.aimbotSkeleton, 'Warzone aimbot hack', 'Warzone aimbot skeleton hack overlay')],
	'esp-hack': [img(warzoneImages.espWallhack, 'Warzone ESP hack', 'Warzone wallhack skeleton ESP hack preview')],
	'unlock-all': [img(warzoneImages.playerEsp, 'Warzone unlock all', 'Warzone ESP radar player tag overlay')],
	privacy: [img(warzoneImages.aimbotCombat, 'Warzone hacks privacy', 'Warzone aimbot sniper privacy policy visual')],
	refund: [img(warzoneImages.cheatsCombat, 'Warzone hacks refund', 'Warzone cheats combat refund policy visual')],
	terms: [img(warzoneImages.aimbotSkeleton, 'Warzone hacks terms', 'Warzone aimbot skeleton terms of use visual')],
};

for (const pageId of pageIds) {
	if (!pageImagesById[pageId]?.length) {
		throw new Error(`[sitemap] No images configured for pageId: ${pageId}`);
	}
}

/**
 * Canonical English sitemap entries — always includes every pageId from routing.
 */
export const pageSitemapEntries: PageSitemapEntry[] = pageIds.map((pageId) => {
	const meta = pageSitemapMeta[pageId];
	return {
		path: englishPaths[pageId],
		priority: meta.priority,
		changefreq: meta.changefreq,
		lastmod: meta.lastmod,
		images: pageImagesById[pageId],
	};
});

/** Unique keyword images for the dedicated image sitemap. */
export const imageSitemapEntries: SitemapImage[] = warzoneImages.sitemap.map((entry) =>
	img(entry.src, entry.title, entry.caption),
);

export function absolutePageUrl(path: string): string {
	return abs(path);
}

export function absoluteAssetUrl(path: string): string {
	return abs(path);
}
