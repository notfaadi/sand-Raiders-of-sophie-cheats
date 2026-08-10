/**
 * SINGLE SOURCE OF TRUTH for template rebrands.
 * Employees: use Brand Studio at http://localhost:4321/brand-studio/ during `astro dev`.
 * Do not scatter brand strings across components.
 */
export const brand = {
	/** Public brand name (nav, footer, H1 hero, schema Organization) */
	name: 'The Isle Cheats',
	/** Short product label if needed */
	shortName: 'Valorant Cheats',
	/** Canonical origin — no trailing slash */
	url: 'https://warzonehacks.net',
	locale: 'en',
	market: 'Worldwide',
	supportEmail: 'support@warzonehacks.net',
	checkoutUrl: 'https://zadeyo.com/go/AMAN?to=%2Fproducts%2Fwarzone',

	/** Game this template instance targets */
	game: 'Valorant Cheats',
	/** Anti-cheat name used in Status / FAQ copy */
	antiCheat: 'Vanguard',

	logo: '/images/warzone-hacks-logo.webp',
	logoRaster: '/images/warzone-hacks-logo.png',
	logoRasterWidth: 512,
	logoRasterHeight: 512,
	logoAlt: 'Scorpio Hacks logo',
	defaultOgImage: '/images/warzone-cheats-combat.webp',
	heroImage: '/images/warzone-hero-banner.webp',

	plans: [
		{ id: 'monthly', label: 'Monthly', price: 35, duration: 'P30D' },
		{ id: 'lifetime', label: 'Lifetime', price: 150, duration: 'P99Y' },
	] as const,
	currency: 'USD',
	platforms: ['Windows PC', 'Controllers'] as const,

	/**
	 * Site color tones — accent + canvas + soft/deep/hover/panel.
	 * Edit in Brand Studio → Colors (all tones customizable).
	 */
	theme: {
		accent: '#17004d',
		bg: '#050505',
		soft: '#6b4dff',
		deep: '#0c0029',
		hover: '#3a1a8a',
		panel: '#0d0d0d',
	},

	/**
	 * Keyword system — primary drives titles; list feeds schema / light targeting.
	 * Keep 5–8 terms.
	 */
	keywords: {
		primary: 'marathon hacks',
		list: [
			'marathon hacks',
			'marathon cheats',
			'marathon hack',
			'marathon esp',
			'marathon aimbot',
		] as const,
	},

	/**
	 * Editable SEO meta — tokens: {brand} {game} {antiCheat} {email} {primaryKeyword}
	 * Aim ~50–60 chars titles, ~140–160 chars descriptions.
	 */
	seo: {
		homeTitle: '{brand} | Undetected {primaryKeyword}',
		homeDescription: '{primaryKeyword} for Windows 10 PC - Hacks, aimbot, and radar with {antiCheat} maintenance. Compare plans and buy.',
		featuresTitle: '{game} Features | {brand}',
		featuresDescription: 'Everything in one {game} license for Windows PC -- ESP, aimbot, radar, and patch updates.',
		storeTitle: '{game} Store | {brand}',
		storeDescription: 'Monthly and lifetime {game} plans. Same features. Instant delivery after payment.',
		statusTitle: '{game} Status | {brand}',
		statusDescription: 'Live status for {brand} after {game} or {antiCheat} patches. Check before you queue.',
		previewTitle: '{game} Preview | {brand}',
		previewDescription: 'Quick preview of {brand} -- ESP, aimbot, radar, and updates after {game} patches.',
		setupTitle: '{game} Setup | {brand}',
		setupDescription: 'Install and launch {brand} on Windows PC. Short setup steps after you buy.',
		supportTitle: '{game} Support | {brand}',
		supportDescription: 'Get help with {brand}. Email {email} with your order ID.',
		faqTitle: '{game} FAQ | {brand}',
		faqDescription: 'Short answers about {brand} — delivery, setup, updates, and refunds.',
		reviewsTitle: '{brand} Reviews | Buyer Feedback',
		reviewsDescription: 'Real buyer reviews for {brand} — ESP, soft aim, radar, and patch updates on Windows PC.',
		blogTitle: '{game} Intel | {brand}',
		blogDescription: 'Guides and notes for {game} — meta tips, ESP, aimbot, and {antiCheat} updates.',
	},

	/** On-page marketing copy (tokens allowed) */
	copy: {
		tagline: 'Undetected {primaryKeyword} -- ESP, aimbot, and radar for PC',
		summary: '{brand} is an undetected {game} cheat package for Windows PC. Includes ESP, soft aim, and radar, with {antiCheat} maintenance after patches.',
		heroLede: 'Hacks and cheats available -- 0% detection.',
		blogLabel: '{game} Intel',
		ctaBuy: 'Buy now',
		ctaBuyShort: 'Buy',
		featuresIntro: 'Everything included in one license for {game} on Windows PC.',
		storeIntro: 'Pick a plan. Same features on both. Instant delivery after payment.',
		statusIntro: 'Check here after a {game} or {antiCheat} patch before you play.',
		previewIntro: 'A quick look at {brand} — ESP, aimbot, radar, and updates after patches.',
		setupIntro: 'Install {brand} on Windows PC after you buy. Follow these short steps.',
		supportIntro: 'Need help with {brand}? Email {email} with your order ID.',
		faqIntro: 'Short answers about delivery, setup, updates, and refunds.',
		reviewsIntro: 'Real feedback from {brand} buyers — ESP, soft aim, radar, and support.',
		chipEsp: 'ESP / wallhack',
		chipAim: 'Soft aim',
		chipRadar: '2D radar',
		chipUpdates: 'Patch updates',
		navPreview: 'Preview',
		navFeatures: 'Features',
		navStore: 'Store',
		navStatus: 'Status',
		navReviews: 'Reviews',
	},

	/**
	 * Sitemap labels — XML is generated at build/dev from routes + these strings.
	 * Domain comes from `url` (also written to robots.txt via sync:brand).
	 * Tokens: {brand} {game} {antiCheat} {email} {primaryKeyword}
	 */
	sitemap: {
		/** YYYY-MM-DD — Brand Studio can bump this on save to refresh crawl dates */
		contentLastmod: '2026-08-10',
		blogImageTitle: '{brand} Intel blog',
		blogImageCaption: '{game} tips, meta guides, and {antiCheat} notes',
		reviewsImageTitle: '{brand} customer reviews',
		reviewsImageCaption: 'Buyer reviews for {primaryKeyword}',
		images: [
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
		],
	},
} as const;

export type Brand = typeof brand;

/** Replace {brand} {game} {antiCheat} {email} {primaryKeyword} {checkout} */
export function fillBrandTokens(input: string): string {
	return input
		.replaceAll('{brand}', brand.name)
		.replaceAll('{game}', brand.game)
		.replaceAll('{antiCheat}', brand.antiCheat)
		.replaceAll('{email}', brand.supportEmail)
		.replaceAll('{primaryKeyword}', brand.keywords.primary)
		.replaceAll('{checkout}', brand.checkoutUrl);
}

/** Locked title formula fallback: `{Game} {Topic} | {Brand}` */
export function seoTitle(topic: string): string {
	const title = `${brand.game} ${topic} | ${brand.name}`;
	return title.length <= 60 ? title : `${topic} | ${brand.name}`;
}

/** Keep titles SERP-safe after token fill (matches Brand Studio max). */
export function seoPageTitle(template: string): string {
	const text = fillBrandTokens(template).trim();
	return text.length <= 70 ? text : `${text.slice(0, 67).trim()}…`;
}

/** Keep descriptions short; tokens allowed. */
export function seoDescription(template: string): string {
	const text = fillBrandTokens(template).trim();
	return text.length <= 160 ? text : `${text.slice(0, 157).trim()}…`;
}

/** Resolved EN home meta from brand.seo */
export function homeSeo() {
	return {
		title: seoPageTitle(brand.seo.homeTitle),
		description: seoDescription(brand.seo.homeDescription),
	};
}
