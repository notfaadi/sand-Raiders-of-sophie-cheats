import { siteConfig } from './site';

/** Screenshots used across product pages — alts use plain Warzone hacks wording. */
export const warzoneImages = {
	hero: '/images/hero-banner.webp',
	espWallhack: '/images/warzone-wallhack-skeleton.webp',
	aimbotCombat: '/images/warzone-aimbot-sniper.webp',
	aimbotSkeleton: '/images/warzone-aimbot-skeleton.webp',
	playerEsp: '/images/warzone-esp-radar.webp',
	cheatsCombat: '/images/warzone-cheats-combat.webp',
	logo: siteConfig.logo,
	/** @deprecated Blog / legacy aliases — each maps to one of the six assets above */
	cover: '/images/warzone-cheats-combat.webp',
	loadoutBuilder: '/images/warzone-esp-radar.webp',
	squadFight: '/images/warzone-aimbot-skeleton.webp',
	cheatsPackage: '/images/warzone-esp-radar.webp',
	headerArt: '/images/warzone-aimbot-skeleton.webp',
	battleRoyaleCombat: '/images/warzone-cheats-combat.webp',
	gulagFight: '/images/warzone-aimbot-sniper.webp',
	rebootFight: '/images/warzone-aimbot-sniper.webp',
	resurgenceCombat: '/images/warzone-wallhack-skeleton.webp',
	resurgenceMode: '/images/warzone-esp-player-tags.webp',
	battleRoyaleIsland: '/images/warzone-esp-player-tags.webp',
	product: [
		{ src: '/images/warzone-esp-player-tags.webp', alt: 'Warzone hacks ESP with player names' },
		{ src: '/images/warzone-wallhack-skeleton.webp', alt: 'Warzone hacks wallhack through walls' },
		{ src: '/images/warzone-aimbot-sniper.webp', alt: 'Warzone hacks aimbot on a sniper' },
		{ src: '/images/warzone-aimbot-skeleton.webp', alt: 'Warzone hacks aimbot with bone view' },
		{ src: '/images/warzone-esp-radar.webp', alt: 'Warzone hacks ESP and radar' },
		{ src: '/images/warzone-cheats-combat.webp', alt: 'Warzone hacks in a real fight' },
	],
	gallery: [
		{ src: '/images/warzone-cheats-combat.webp', alt: 'Warzone hacks in a real fight', featured: true },
		{ src: '/images/warzone-esp-player-tags.webp', alt: 'Warzone hacks ESP with player names' },
		{ src: '/images/warzone-wallhack-skeleton.webp', alt: 'Warzone hacks wallhack through walls' },
		{ src: '/images/warzone-aimbot-sniper.webp', alt: 'Warzone hacks aimbot on a sniper' },
		{ src: '/images/warzone-esp-radar.webp', alt: 'Warzone hacks radar on the map' },
	],
	/**
	 * @deprecated Prefer brand.sitemap.images via brand-sitemap / page-sitemap.
	 * Kept as path aliases for older imports; titles come from Brand Studio.
	 */
	sitemap: [
		{ src: '/images/warzone-esp-player-tags.webp', title: '', caption: '' },
		{ src: '/images/warzone-wallhack-skeleton.webp', title: '', caption: '' },
		{ src: '/images/warzone-aimbot-sniper.webp', title: '', caption: '' },
		{ src: '/images/warzone-aimbot-skeleton.webp', title: '', caption: '' },
		{ src: '/images/warzone-esp-radar.webp', title: '', caption: '' },
		{ src: '/images/warzone-cheats-combat.webp', title: '', caption: '' },
	],
} as const;
