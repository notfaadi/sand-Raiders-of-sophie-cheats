/**
 * SINGLE SOURCE OF TRUTH for template rebrands.
 * Employees: use Brand Studio at http://localhost:4321/brand-studio/ during `astro dev`.
 * Do not scatter brand strings across components.
 */
export const brand = {
	/** Public brand name (nav, footer, H1 hero, schema Organization) */
	name: 'Sand Raiders Cheats',
	/** Short product label if needed */
	shortName: 'Sand Raiders',
	/** Canonical origin — no trailing slash */
	url: 'https://sandraiderscheats.net',
	locale: 'en',
	market: 'Worldwide',
	supportEmail: 'support@sandraiderscheats.net',
	checkoutUrl: 'https://zadeyo.com/go/AMAN?to=%2Fproducts%2Fsand-raiders-of-sophie-cheats',

	/** Game this template instance targets */
	game: 'SAND: Raiders of Sophie',
	/** Anti-cheat name used in Status / FAQ copy */
	antiCheat: 'Easy Anti-Cheat',

	logo: '/img/sand-raiders-logo.webp',
	logoRaster: '/img/sand-raiders-logo.png',
	logoRasterWidth: 512,
	logoRasterHeight: 512,
	logoAlt: 'Sand Raiders Cheats logo',
	defaultOgImage: '/img/sand-raiders-hero.webp',
	heroImage: '/img/sand-raiders-hero.webp',

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
		accent: '#c026d3',
		bg: '#000000',
		soft: '#d789e1',
		deep: '#7b1588',
		hover: '#cc51db',
		panel: '#0f0f10',
	},

	/**
	 * Keyword system — primary drives titles; list feeds meta keywords / schema.
	 * Keep terms unique; no on-page keyword spam (not baked into hero art).
	 */
	keywords: {
		primary: 'sand raiders of sophie cheats',
		list: [
			'sand raiders of sophie cheats',
			'sand sophie cheats',
			'sophie cheats',
			'cheats of sand raiders',
			'cheats for sand raiders',
			'sand raiders hacks',
			'undetected sand raiders cheats',
			'buy sand raiders cheats',
			'sand raiders aimbot',
			'sand raiders esp',
			'sand raiders wallhack',
			'sand raiders cloud dma',
			'sandraiders cheats',
			'sand raiders of sophie hacks',
			'buy sand raiders of sophie cheats',
		] as const,
	},

	/**
	 * Editable SEO meta — tokens: {brand} {game} {antiCheat} {email} {primaryKeyword}
	 * Aim ~50–60 chars titles, ~140–155 chars descriptions (Seobility pixel budget).
	 */
	seo: {
		homeTitle: '{primaryKeyword} | {brand}',
		homeDescription:
			'{primaryKeyword} for Windows PC — ESP, aimbot, wallhack, and radar. Instant delivery plus 24/7 support.',
		featuresTitle: '{game} Features | {brand}',
		featuresDescription:
			'Everything in {primaryKeyword} for Windows PC. ESP, aimbot, radar, Cloud DMA, and rebuilds after {antiCheat} patches.',
		storeTitle: '{game} Store | {brand}',
		storeDescription:
			'Buy {primaryKeyword} for Windows PC. Monthly and lifetime plans include ESP, aimbot, radar, and Cloud DMA.',
		statusTitle: '{game} Status | {brand}',
		statusDescription:
			'Live status for {primaryKeyword} after {game} or {antiCheat} patches. Check before you queue.',
		previewTitle: '{game} Preview | {brand}',
		previewDescription:
			'Quick preview of {primaryKeyword} — ESP, aimbot, radar, and updates after {game} patches on Windows PC.',
		setupTitle: '{game} Setup | {brand}',
		setupDescription:
			'Install and launch {primaryKeyword} on Windows PC after you buy. Short steps for ESP, aimbot, and radar.',
		supportTitle: '{game} Support | {brand}',
		supportDescription:
			'Need help with {primaryKeyword}? Email {email} with your order ID for setup, license, or updates.',
		faqTitle: '{game} FAQ | {brand}',
		faqDescription:
			'FAQ for {primaryKeyword}: safety, detection, Windows setup, patches, refunds, plans, and Cloud DMA.',
		reviewsTitle: '{brand} Reviews | Buyer Feedback',
		reviewsDescription:
			'Real buyer reviews for {primaryKeyword}. Feedback on ESP, soft aim, radar, support, and patch updates.',
		blogTitle: '{game} Intel | {brand}',
		blogDescription:
			'Guides for {primaryKeyword}: meta tips, ESP and aimbot settings, and {antiCheat} update notes.',
	},

	/** On-page marketing copy (tokens allowed) */
	copy: {
		tagline: 'Undetected {primaryKeyword} with 24/7 support — ESP, aimbot, and radar for PC',
		summary:
			'{brand} delivers undetected {primaryKeyword} for Windows PC. ESP, soft aim, and radar with {antiCheat} maintenance and 24/7 support.',
		heroLede: 'Aimbot, wallhack ESP, and 2D radar for SAND: Raiders of Sophie — Cloud DMA option available.',
		blogLabel: '{game} Intel',
		ctaBuy: 'Buy now',
		ctaBuyShort: 'Buy',
		featuresIntro: 'Everything included in one {primaryKeyword} license for Windows PC.',
		storeIntro: 'Pick a plan. Same features on both. Instant delivery after payment.',
		statusIntro: 'Check here after a {game} or {antiCheat} patch before you play.',
		previewIntro: 'A quick look at {primaryKeyword} — ESP, aimbot, radar, and updates after patches.',
		setupIntro: 'Install {brand} on Windows PC after you buy. Follow these short steps.',
		supportIntro: 'Need help with {brand}? Email {email} with your order ID — 24/7 support.',
		faqIntro: 'Short answers on safety, setup, patches, refunds, and package differences.',
		reviewsIntro: 'Real feedback from {brand} buyers — security, updates, support, and matches.',
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
		contentLastmod: '2026-08-13',
		blogImageTitle: '{brand} blog',
		blogImageCaption: 'Tips and updates for {primaryKeyword}',
		reviewsImageTitle: '{brand} reviews',
		reviewsImageCaption: 'What buyers say about {primaryKeyword}',
		images: [
			{
				src: '/img/sand-raiders-trampler.webp',
				title: '{primaryKeyword} ESP',
				caption: 'See players with {primaryKeyword}',
			},
			{
				src: '/img/sand-raiders-combat.webp',
				title: '{primaryKeyword} wallhack',
				caption: 'See through walls with {primaryKeyword}',
			},
			{
				src: '/img/sand-raiders-desert.webp',
				title: '{primaryKeyword} aimbot',
				caption: 'Aimbot in {primaryKeyword}',
			},
			{
				src: '/img/sand-raiders-storm.webp',
				title: '{primaryKeyword} aimbot view',
				caption: 'Aimbot bone view in {primaryKeyword}',
			},
			{
				src: '/img/sand-raiders-loot.webp',
				title: '{primaryKeyword} radar',
				caption: 'Radar map in {primaryKeyword}',
			},
			{
				src: '/img/sand-raiders-extract.webp',
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

/** Keep descriptions short; tokens allowed. Prefer exact strings under 155 chars (no ellipsis junk). */
export function seoDescription(template: string): string {
	const text = fillBrandTokens(template).trim().replace(/\s+/g, ' ');
	if (text.length <= 155) return text;
	const cut = text.slice(0, 155);
	const lastSpace = cut.lastIndexOf(' ');
	return (lastSpace > 110 ? cut.slice(0, lastSpace) : cut).trim();
}

/** Resolved EN home meta from brand.seo (title clamp lives in site-core.seoPageTitle). */
export function homeSeo() {
	return {
		title: fillBrandTokens(brand.seo.homeTitle),
		description: seoDescription(brand.seo.homeDescription),
	};
}
