import { siteConfig } from './site';

/** User-provided Warzone cheat/ESP screenshots — six unique keyword SEO filenames. */
export const warzoneImages = {
	hero: '/images/warzone-esp-player-tags.webp',
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
		{ src: '/images/warzone-esp-player-tags.webp', alt: 'Warzone ESP player tags hack' },
		{ src: '/images/warzone-wallhack-skeleton.webp', alt: 'Warzone wallhack skeleton ESP' },
		{ src: '/images/warzone-aimbot-sniper.webp', alt: 'Warzone aimbot sniper kill' },
		{ src: '/images/warzone-aimbot-skeleton.webp', alt: 'Warzone aimbot skeleton targeting' },
		{ src: '/images/warzone-esp-radar.webp', alt: 'Warzone ESP radar hack' },
		{ src: '/images/warzone-cheats-combat.webp', alt: 'Warzone cheats ADS combat' },
	],
	gallery: [
		{ src: '/images/warzone-cheats-combat.webp', alt: 'Warzone cheats combat aimbot', featured: true },
		{ src: '/images/warzone-esp-player-tags.webp', alt: 'Warzone ESP player tags' },
		{ src: '/images/warzone-wallhack-skeleton.webp', alt: 'Warzone wallhack skeleton' },
		{ src: '/images/warzone-aimbot-sniper.webp', alt: 'Warzone aimbot sniper scope' },
		{ src: '/images/warzone-esp-radar.webp', alt: 'Warzone ESP radar overlay' },
	],
	sitemap: [
		{
			src: '/images/warzone-esp-player-tags.webp',
			title: 'Warzone ESP player tags',
			caption: 'Warzone ESP player tags hack',
		},
		{
			src: '/images/warzone-wallhack-skeleton.webp',
			title: 'Warzone wallhack skeleton',
			caption: 'Warzone wallhack skeleton ESP',
		},
		{
			src: '/images/warzone-aimbot-sniper.webp',
			title: 'Warzone aimbot sniper',
			caption: 'Warzone aimbot sniper kill',
		},
		{
			src: '/images/warzone-aimbot-skeleton.webp',
			title: 'Warzone aimbot skeleton',
			caption: 'Warzone aimbot skeleton targeting',
		},
		{
			src: '/images/warzone-esp-radar.webp',
			title: 'Warzone ESP radar hack',
			caption: 'Warzone ESP radar wireframe',
		},
		{
			src: '/images/warzone-cheats-combat.webp',
			title: 'Warzone cheats combat',
			caption: 'Warzone cheats ADS aimbot',
		},
	],
} as const;
