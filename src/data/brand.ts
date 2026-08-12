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
	checkoutUrl: 'https://zadeyo.com/go/AMAN?to=%2Fproducts%2Fsand-raiders',

	/** Game this template instance targets */
	game: 'Sand Raiders',
	/** Anti-cheat name used in Status / FAQ copy */
	antiCheat: 'Easy Anti-Cheat',

	logo: '/img/sand-raiders-logo.webp',
	logoRaster: '/img/sand-raiders-logo.png',
	logoRasterWidth: 512,
	logoRasterHeight: 512,
	logoAlt: 'Sand Raiders Cheats logo',
	defaultOgImage: '/img/sand-raiders-combat.webp',
	heroImage: '/img/sand-raiders-combat.webp',

	plans: [
		{ id: 'monthly', label: 'Monthly', price: 35, duration: 'P30D' },
		{ id: 'lifetime', label: 'Lifetime', price: 150, duration: 'P99Y' },
	] as const,
	currency: 'USD',
	platforms: ['Windows PC', 'Controllers'] as const,

	/**
	 * Site color tones — neon cyan on deep blue-black canvas.
	 * Edit in Brand Studio → Colors (tones are fully customizable).
	 */
	theme: {
		accent: '#00e5ff',
		bg: '#050a12',
		soft: '#67e8f9',
		deep: '#0284c7',
		hover: '#22d3ee',
		panel: '#0a1220',
	},

	/**
	 * Keyword system — primary drives titles; list feeds <meta name="keywords">.
	 */
	keywords: {
		primary: 'sandraiders cheats',
		list: [
			'sandraiderscheats.net',
			'sandraiders cheats',
			'escape from tarkov hacks',
			'tarkov cheats',
			'eft hacks',
			'sandraiders aimbot',
			'sandraiders esp',
			'escape from tarkov anti-cheat bypass',
			'tarkov undetected hacks',
			'sandraiders review',
			'best escape from tarkov hack provider',
			'sandraiders wallhack',
			'sandraiders radar',
			'tarkov arena hacks',
			'eft exploits',
			'sandraiders undetected',
			'sandraiders safe',
			'sandraiders tutorial',
			'sandraiders price',
			'buy sandraiders',
		] as const,
	},

	/**
	 * Editable SEO meta — tokens: {brand} {game} {antiCheat} {email} {primaryKeyword}
	 * Aim ~50–60 chars titles, ~140–160 chars descriptions.
	 */
	seo: {
		homeTitle: 'Undetected {primaryKeyword} | {brand}',
		homeDescription:
			'SandraidersCheats.net - Premium undetected Escape from Tarkov cheats with aimbot, ESP, wallhack and radar. 24/7 support, instant delivery and regular updates. Join thousands of satisfied users worldwide.',
		featuresTitle: '{game} Features | {brand}',
		featuresDescription:
			'Everything in {primaryKeyword} for Windows PC. ESP, aimbot, radar, Cloud DMA, and rebuilds after {antiCheat} patches.',
		storeTitle: '{game} Store | {brand}',
		storeDescription:
			'Buy {primaryKeyword} for Windows PC. Monthly and lifetime plans include ESP, aimbot, radar, and Cloud DMA. Instant delivery after payment.',
		statusTitle: '{game} Status | {brand}',
		statusDescription:
			'Live status for {primaryKeyword} after {game} or {antiCheat} patches. Check before you queue so you stay on a current build.',
		previewTitle: '{game} Preview | {brand}',
		previewDescription:
			'The #1 Escape from Tarkov hack provider - SandraidersCheats.net offers advanced EFT cheats with aimbot, ESP, no recoil and more. Undetected, secure and updated for the latest Tarkov patches.',
		setupTitle: '{game} Setup | {brand}',
		setupDescription:
			'Install and launch {primaryKeyword} on Windows PC after you buy. Short setup steps help you start ESP, aimbot, and radar the right way.',
		supportTitle: '{game} Support | {brand}',
		supportDescription:
			'Need help with {primaryKeyword}? Email {email} with your order ID for setup, license, delivery, or update questions.',
		faqTitle: '{game} FAQ | {brand}',
		faqDescription:
			'FAQ for {primaryKeyword}: safety, detection, Windows setup, Tarkov patches, refunds, monthly vs lifetime, and Cloud DMA on PC.',
		reviewsTitle: '{brand} Reviews | Buyer Feedback',
		reviewsDescription:
			'Real buyer reviews for {primaryKeyword}. Read honest feedback on ESP, soft aim, radar, support quality, and patch updates on Windows PC.',
		blogTitle: '{game} Intel | {brand}',
		blogDescription:
			'Read guides and tips for {primaryKeyword}: meta play, ESP and aimbot settings, and {antiCheat} update notes for Windows PC players.',
	},

	/** On-page marketing copy (tokens allowed) */
	copy: {
		tagline: 'Undetected {primaryKeyword} with 24/7 support — ESP, aimbot, and radar for PC',
		summary:
			'{brand} delivers undetected sandraiders cheats and escape from tarkov hacks for Windows PC. ESP, soft aim, and radar with {antiCheat} maintenance and 24/7 support.',
		heroLede:
			'Undetected sandraiders cheats for Escape from Tarkov — ESP, aimbot & radar, plus 24/7 support.',
		blogLabel: '{game} Intel',
		ctaBuy: 'Buy now',
		ctaBuyShort: 'Buy',
		featuresIntro: 'Everything included in one {primaryKeyword} license for Windows PC.',
		storeIntro: 'Pick a plan. Same features on both. Instant delivery after payment.',
		statusIntro: 'Check here after a Tarkov or {antiCheat} patch before you raid.',
		previewIntro: 'A quick look at {primaryKeyword} — ESP, aimbot, radar, and updates after patches.',
		setupIntro: 'Install {brand} on Windows PC after you buy. Follow these short steps.',
		supportIntro: 'Need help with {brand}? Email {email} with your order ID — 24/7 support.',
		faqIntro: 'Short answers on safety, setup, patches, refunds, and package differences.',
		reviewsIntro: 'Real feedback from {brand} buyers — security, updates, support, and Tarkov raids.',
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
		contentLastmod: '2026-08-12',
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

/** Keep descriptions short; tokens allowed. */
export function seoDescription(template: string): string {
	const text = fillBrandTokens(template).trim();
	return text.length <= 160 ? text : `${text.slice(0, 157).trim()}…`;
}

/** Resolved EN home meta from brand.seo (title clamp lives in site-core.seoPageTitle). */
export function homeSeo() {
	return {
		title: fillBrandTokens(brand.seo.homeTitle),
		/** Home description is not length-clamped so explicit brand.seo.homeDescription can render in full. */
		description: fillBrandTokens(brand.seo.homeDescription).trim(),
	};
}
