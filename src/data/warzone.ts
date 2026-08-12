import { siteConfig } from './site';

/** Screenshots used across product pages — Sand Raiders gameplay from /img. */
export const warzoneImages = {
	hero: '/img/sand-raiders-hero.webp',
	espWallhack: '/img/sand-raiders-combat.webp',
	aimbotCombat: '/img/sand-raiders-desert.webp',
	aimbotSkeleton: '/img/sand-raiders-storm.webp',
	playerEsp: '/img/sand-raiders-loot.webp',
	cheatsCombat: '/img/sand-raiders-extract.webp',
	logo: siteConfig.logo,
	/** @deprecated Blog / legacy aliases — each maps to one of the assets above */
	cover: '/img/sand-raiders-extract.webp',
	loadoutBuilder: '/img/sand-raiders-loot.webp',
	squadFight: '/img/sand-raiders-storm.webp',
	cheatsPackage: '/img/sand-raiders-trampler.webp',
	headerArt: '/img/sand-raiders-ruins.webp',
	battleRoyaleCombat: '/img/sand-raiders-extract.webp',
	gulagFight: '/img/sand-raiders-desert.webp',
	rebootFight: '/img/sand-raiders-desert.webp',
	resurgenceCombat: '/img/sand-raiders-combat.webp',
	resurgenceMode: '/img/sand-raiders-trampler.webp',
	battleRoyaleIsland: '/img/sand-raiders-trampler.webp',
	product: [
		{ src: '/img/sand-raiders-trampler.webp', alt: 'Sandraiders ESP overlay on a Trampler — sandraiderscheats.net' },
		{ src: '/img/sand-raiders-combat.webp', alt: 'Sand Raiders Cheats wallhack in combat on Windows PC' },
		{ src: '/img/sand-raiders-desert.webp', alt: 'Sandraiders aimbot across dunes — Sand Raiders Cheats preview' },
		{ src: '/img/sand-raiders-storm.webp', alt: 'Sandraiders soft aim in a sandstorm — sandraiderscheats.net' },
		{ src: '/img/sand-raiders-loot.webp', alt: 'Sand Raiders Cheats ESP and loot radar on the map' },
		{ src: '/img/sand-raiders-extract.webp', alt: 'Sandraiders cheats during extract — Sand Raiders Cheats' },
	],
	gallery: [
		{ src: '/img/sand-raiders-extract.webp', alt: 'Sandraiders cheats during extract — sandraiderscheats.net', featured: true },
		{ src: '/img/sand-raiders-trampler.webp', alt: 'Sandraiders ESP overlay on a Trampler — Sand Raiders Cheats' },
		{ src: '/img/sand-raiders-combat.webp', alt: 'Sand Raiders Cheats wallhack in combat on Windows PC' },
		{ src: '/img/sand-raiders-desert.webp', alt: 'Sandraiders aimbot across dunes — Sand Raiders Cheats preview' },
		{ src: '/img/sand-raiders-loot.webp', alt: 'Sand Raiders Cheats 2D radar and loot ESP on the map' },
	],
	/**
	 * @deprecated Prefer brand.sitemap.images via brand-sitemap / page-sitemap.
	 * Kept as path aliases for older imports; titles come from Brand Studio.
	 */
	sitemap: [
		{ src: '/img/sand-raiders-trampler.webp', title: '', caption: '' },
		{ src: '/img/sand-raiders-combat.webp', title: '', caption: '' },
		{ src: '/img/sand-raiders-desert.webp', title: '', caption: '' },
		{ src: '/img/sand-raiders-storm.webp', title: '', caption: '' },
		{ src: '/img/sand-raiders-loot.webp', title: '', caption: '' },
		{ src: '/img/sand-raiders-extract.webp', title: '', caption: '' },
	],
} as const;
