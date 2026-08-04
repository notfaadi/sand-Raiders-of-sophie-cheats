/** Shared constants for i18n content generation. */

export const LOCALES = [
	'en', 'es', 'fr', 'de', 'pt', 'it', 'nl', 'pl', 'ru', 'tr',
	'ar', 'ja', 'ko', 'zh', 'hi', 'id', 'th', 'vi', 'uk', 'cs', 'ro', 'sv',
];

export const PAGE_IDS = [
	'home', 'warzone-esp', 'warzone-aimbot', 'features', 'pricing', 'setup',
	'updates', 'faq', 'support', 'undetected', 'wallhack', 'radar', 'ricochet',
	'cheats-2026', 'hacks', 'cheat-download', 'mod-menu', 'soft-aim', 'best-cheats',
	'aimbot-hack', 'esp-hack', 'unlock-all', 'privacy', 'refund', 'terms',
];

/** Hero image per page — six unique Warzone cheat screenshots (primary pages each get a distinct file). */
export const HERO_IMAGES = {
	home: '/images/warzone-esp-player-tags.webp',
	'warzone-esp': '/images/warzone-esp-radar.webp',
	'warzone-aimbot': '/images/warzone-aimbot-sniper.webp',
	features: '/images/warzone-aimbot-skeleton.webp',
	pricing: '/images/warzone-cheats-combat.webp',
	setup: '/images/warzone-esp-radar.webp',
	updates: '/images/warzone-esp-player-tags.webp',
	faq: '/images/warzone-aimbot-skeleton.webp',
	support: '/images/warzone-cheats-combat.webp',
	undetected: '/images/warzone-wallhack-skeleton.webp',
	wallhack: '/images/warzone-wallhack-skeleton.webp',
	radar: '/images/warzone-esp-radar.webp',
	ricochet: '/images/warzone-aimbot-sniper.webp',
	'cheats-2026': '/images/warzone-esp-player-tags.webp',
	hacks: '/images/warzone-cheats-combat.webp',
	'cheat-download': '/images/warzone-cheats-combat.webp',
	'mod-menu': '/images/warzone-esp-radar.webp',
	'soft-aim': '/images/warzone-aimbot-skeleton.webp',
	'best-cheats': '/images/warzone-esp-player-tags.webp',
	'aimbot-hack': '/images/warzone-aimbot-skeleton.webp',
	'esp-hack': '/images/warzone-wallhack-skeleton.webp',
	'unlock-all': '/images/warzone-esp-radar.webp',
	privacy: '/images/warzone-aimbot-sniper.webp',
	refund: '/images/warzone-cheats-combat.webp',
	terms: '/images/warzone-aimbot-skeleton.webp',
};

export const TS_HEADER = `import type { LocaleCode } from './locales';

export type PageSection = { h2: string; paragraphs: string[]; list?: string[] };
export type PageContent = {
\ttitle: string;
\tdescription: string;
\th1: string;
\tintro: string;
\timageAlt: string;
\tgalleryTitle: string;
\theroImage: string;
\tsections: PageSection[];
\tctaPrimary: string;
\tctaSecondary?: string;
\tctaSecondaryHref?: string;
};
export type LocaleUi = {
\tnav: { home: string; hacks: string; aimbot: string; esp: string; features: string; pricing: string; setup: string; updates: string; faq: string; buyNow: string };
\thero: { accent: string; accentShort: string; subtitle: string; subtitleShort: string; buyNow: string; seeFeatures: string };
\ttrust: { status: string; statusNote: string; statusShort: string; delivery: string; platform: string; antiCheat: string; antiCheatShort: string };
\tproduct: { title: string; addToCart: string; monthly: string; lifetime: string; available: string; gameBadge: string; platformBadge: string; statusBadge: string };
\treviews: { title: string; subtitle: string; outOf: string; countLabel: string };
\tcommon: { buyNow: string; readGuide: string; language: string; officialLanguageNote: string; relatedPages: string };
\tfooter: { explore: string; help: string; tagline: string };
\timages: {
\t\thero: string; espWallhack: string; aimbotCombat: string; squadFight: string; playerEsp: string;
\t\theaderArt: string; cheatsPackage: string; rebootFight: string; battleRoyale: string; battleRoyaleIsland: string;
\t};
};
export type PageId = 'home' | 'warzone-esp' | 'warzone-aimbot' | 'features' | 'pricing' | 'setup' | 'updates' | 'faq' | 'support' | 'undetected' | 'wallhack' | 'radar' | 'ricochet' | 'cheats-2026' | 'hacks' | 'cheat-download' | 'mod-menu' | 'soft-aim' | 'best-cheats' | 'aimbot-hack' | 'esp-hack' | 'unlock-all' | 'privacy' | 'refund' | 'terms';
`;

/** Clamp meta strings to SEO limits without ugly ellipsis. */
export function clampTitle(s) {
	if (s.length <= 60) return s;
	const trimmed = s.slice(0, 60);
	const lastSpace = trimmed.lastIndexOf(' ');
	return lastSpace > 45 ? trimmed.slice(0, lastSpace) : trimmed.slice(0, 60);
}

export function clampDesc(s) {
	if (s.length <= 160) return s;
	const trimmed = s.slice(0, 160);
	const lastSpace = trimmed.lastIndexOf(' ');
	return lastSpace > 130 ? trimmed.slice(0, lastSpace) : trimmed.slice(0, 160);
}

/** Remove Zadeyo from meta title/description strings only. */
export function stripZadeyoFromMeta(text) {
	return text
		.replace(/\s*[—–-]\s*checkout via Zadeyo\.?/gi, '.')
		.replace(/\s*[—–-]\s*checkout en Zadeyo\.?/gi, '.')
		.replace(/\s*[—–-]\s*checkout über Zadeyo\.?/gi, '.')
		.replace(/\s*with Zadeyo checkout\.?/gi, '.')
		.replace(/\s*via Zadeyo checkout\.?/gi, '.')
		.replace(/\s*Checkout via Zadeyo\.?/gi, '')
		.replace(/\s*Zadeyo checkout,?\s*/gi, ' ')
		.replace(/\s*Zadeyo delivery\.?/gi, ' instant digital delivery.')
		.replace(/\s*and Zadeyo delivery\.?/gi, ' and instant digital delivery.')
		.replace(/\|\s*Instant Zadeyo Delivery/g, '| Instant Digital Delivery')
		.replace(/Buy on Zadeyo/g, 'Buy Warzone Hacks')
		.replace(/\s{2,}/g, ' ')
		.trim();
}

/** Build a page section. Pass 2+ paragraph strings; optional trailing string[] becomes list. */
export function section(h2, ...args) {
	let list;
	const paragraphs = [...args];
	if (paragraphs.length && Array.isArray(paragraphs[paragraphs.length - 1])) {
		list = paragraphs.pop();
	}
	if (paragraphs.length < 2) {
		throw new Error(`section "${h2}" needs at least 2 paragraphs`);
	}
	const sec = { h2, paragraphs };
	if (list?.length) sec.list = list;
	return sec;
}

/** Authoritative external citation helpers (open in new tab). */
export const EXT = {
	activision: '<a href="https://www.callofduty.com/warzone" target="_blank" rel="noopener noreferrer">Call of Duty Warzone</a>',
	warzone: '<a href="https://www.callofduty.com/warzone" target="_blank" rel="noopener noreferrer">Call of Duty Warzone</a>',
	status: '<a href="https://support.activision.com/" target="_blank" rel="noopener noreferrer">Activision Support</a>',
	ricochet: '<a href="https://www.callofduty.com/ricochet" target="_blank" rel="noopener noreferrer">Ricochet Anti-Cheat</a>',
};
