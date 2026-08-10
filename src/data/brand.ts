/**
 * SINGLE SOURCE OF TRUTH for template rebrands.
 * Employees: use Brand Studio at http://localhost:4321/brand-studio/ during `astro dev`.
 * Do not scatter brand strings across components.
 */
export const brand = {
	/** Public brand name (nav, footer, H1 hero, schema Organization) */
	name: 'Warzone Hacks',
	/** Short product label if needed */
	shortName: 'Warzone',
	/** Canonical origin — no trailing slash */
	url: 'https://warzonehacks.net',
	locale: 'en',
	market: 'Worldwide',
	supportEmail: 'support@warzonehacks.net',
	checkoutUrl: 'https://zadeyo.com/go/AMAN?to=%2Fproducts%2Fwarzone',

	/** Game this template instance targets */
	game: 'Warzone',
	/** Anti-cheat name used in Status / FAQ copy */
	antiCheat: 'RICOCHET',

	logo: '/images/warzone-hacks-logo.webp',
	logoRaster: '/images/warzone-hacks-logo.png',
	logoRasterWidth: 512,
	logoRasterHeight: 512,
	logoAlt: 'Warzone hacks logo',
	defaultOgImage: '/images/hero-banner.webp',
	heroImage: '/images/hero-banner.webp',

	plans: [
		{ id: 'monthly', label: 'Monthly', price: 35, duration: 'P30D' },
		{ id: 'lifetime', label: 'Lifetime', price: 150, duration: 'P99Y' },
	] as const,
	currency: 'USD',
	platforms: ['Windows PC', 'Controllers'] as const,

	/**
	 * Site color tones — accent + canvas + soft/deep/hover/panel.
	 * Edit in Brand Studio → Colors (tones are fully customizable).
	 */
	theme: {
		accent: '#682df0',
		bg: '#0d0d0d',
		soft: '#7e4bf7',
		deep: '#27027e',
		hover: '#7a44f8',
		panel: '#09080c',
	},

	/**
	 * Keyword system — primary drives titles; list feeds schema / light targeting.
	 * Keep 5–8 terms.
	 */
	keywords: {
		primary: 'warzone hacks',
		list: [
			'warzone hacks',
			'warzone esp',
			'warzone aimbot',
			'warzone wallhack',
			'warzone radar',
			'undetected warzone hacks',
			'best warzone hacks',
		] as const,
	},

	/**
	 * Editable SEO meta — tokens: {brand} {game} {antiCheat} {email} {primaryKeyword}
	 * Aim ~50–60 chars titles, ~140–160 chars descriptions.
	 */
	seo: {
		homeTitle: '{brand} | Undetected {primaryKeyword}',
		homeDescription: '{primaryKeyword} for Windows PC - ESP, aimbot, and ESP with {antiCheat} maintenance. Compare plans and buy.',
		featuresTitle: '{game} Features | {brand}',
		featuresDescription: 'Everything in one {game} license for Windows PC -- ESP, aimbot, radar, and patch updates.',
		storeTitle: '{game} Store | {brand}',
		storeDescription: 'Monthly and lifetime {game} plans. Same features. Instant delivery after payment.',
		statusTitle: '{game} Status | {brand}',
		statusDescription: 'Live status for {brand} after {game} or {antiCheat} patches. Check before you queue.',
		previewTitle: '{game} Preview | {brand}',
		previewDescription: 'Quick preview of {brand} -- ESP, aimbot, ESP, and updates after {game} patches.',
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
		tagline: 'Undetected {primaryKeyword} -- ESP, aimbot, and ESP for PC',
		summary: '{brand} is an undetected {game} cheat package for Windows PC. Includes ESP, soft aim, and ESP, with {antiCheat} maintenance after patches.',
		heroLede: 'Hacks and cheats available - 0% detection.',
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
		chipRadar: '2D ESP',
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
		blogImageTitle: '{brand} blog',
		blogImageCaption: 'Tips and updates for {primaryKeyword}',
		reviewsImageTitle: '{brand} reviews',
		reviewsImageCaption: 'What buyers say about {primaryKeyword}',
		images: [
			{
				src: '/images/warzone-esp-player-tags.webp',
				title: '{primaryKeyword} ESP',
				caption: 'See players with {primaryKeyword}',
			},
			{
				src: '/images/warzone-wallhack-skeleton.webp',
				title: '{primaryKeyword} wallhack',
				caption: 'See through walls with {primaryKeyword}',
			},
			{
				src: '/images/warzone-aimbot-sniper.webp',
				title: '{primaryKeyword} aimbot',
				caption: 'Aimbot in {primaryKeyword}',
			},
			{
				src: '/images/warzone-aimbot-skeleton.webp',
				title: '{primaryKeyword} aimbot view',
				caption: 'Aimbot bone view in {primaryKeyword}',
			},
			{
				src: '/images/warzone-esp-radar.webp',
				title: '{primaryKeyword} radar',
				caption: 'Radar map in {primaryKeyword}',
			},
			{
				src: '/images/warzone-cheats-combat.webp',
				title: '{primaryKeyword} in a fight',
				caption: 'Fight view with {primaryKeyword}',
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

/** Keep descriptions short; tokens allowed. */
export function seoDescription(template: string): string {
	const text = fillBrandTokens(template).trim();
	return text.length <= 160 ? text : `${text.slice(0, 157).trim()}…`;
}

/** Resolved EN home meta from brand.seo (title clamp lives in site-core.seoPageTitle). */
export function homeSeo() {
	return {
		title: fillBrandTokens(brand.seo.homeTitle),
		description: seoDescription(brand.seo.homeDescription),
	};
}
