export const siteConfig = {
	name: 'Warzone Hacks',
	url: 'https://warzonehacks.net',
	locale: 'en',
	market: 'Worldwide',
	supportEmail: 'support@warzonehacks.net',
	logo: '/images/zadeyo-logo.webp',
	logoRaster: '/images/zadeyo-logo.png',
	logoRasterWidth: 453,
	logoRasterHeight: 551,
	logoAlt: 'Warzone Hacks logo',
	checkoutUrl: 'https://zadeyo.com/go/AMAN?to=%2Fproducts%2Fwarzone',
	defaultOgImage: '/images/warzone-cheats-combat.webp',
} as const;

/** Primary SEO keyword targets — used in meta tags and structured data. */
export const seoKeywords = [
	'warzone cheats',
	'warzone hacks',
	'warzone hack',
	'warzone esp',
	'call of duty warzone cheats',
	'warzone aimbot',
] as const;

export const productInfo = {
	name: 'Warzone Hacks',
	shortName: 'Warzone',
	brand: 'Warzone Hacks',
	tagline: 'Undetected warzone hacks — warzone esp, warzone aimbot, radar and cloud DMA for PC',
	summary:
		'Warzone Hacks is the undetected warzone hacks package for Windows PC in 2026 — also searched as warzone cheats and warzone hack. Includes warzone esp wallhack, soft aim, 2D radar, and cloud DMA for Verdansk, Urzikstan, and Rebirth Island, with Ricochet maintenance after every patch.',
	game: 'Warzone',
	delivery: 'Digital license delivery after purchase confirmation',
	platforms: ['Windows PC', 'Controllers'],
	updateCadence: 'Updates are published when Warzone or Ricochet anti-cheat patches require maintenance',
	supportHours: 'Support requests are reviewed daily',
	plans: [
		{ id: 'monthly', label: 'Monthly', price: 35, duration: 'P30D' },
		{ id: 'lifetime', label: 'Lifetime', price: 150, duration: 'P99Y' },
	],
	currency: 'USD',
	features: {
		esp: [
			'Enemy operator ESP wallhack for squads across Verdansk, Urzikstan, and Rebirth Island',
			'Vehicle, UAV, and threat outline cues before enemy squads push your position',
			'Loot, contract, and loadout drop markers for faster BR rotations',
			'Distance readouts and snapline options for engagement range control',
			'Toggleable ESP categories so only BR-critical wallhack overlays stay active',
			'Team and enemy colour coding for Resurgence and Battle Royale lobbies',
		],
		aimbot: [
			'Undetected-style aim assist for assault rifles, SMGs, and snipers in Warzone firefights',
			'Smoothness, FOV, and sensitivity controls tuned for Warzone combat pace',
			'Bone priority and target options for closest, lowest health, or highest-threat operators',
			'Hotkey toggles to enable or disable Aimbot mid-match without opening menus',
			'Per-weapon profile slots for long-range AR versus close-quarters SMG fights',
		],
		radar: [
			'2D radar overlay for nearby operators outside your direct line of sight',
			'Directional threat cues to read flanks during rooftop and building fights',
			'Configurable radar range for early rotation and final-circle positioning',
		],
		general: [
			'In-client toggles for ESP, radar, and Aimbot during live Warzone sessions',
			'Monthly and lifetime licenses for undetected Warzone hacks packages',
			'Ricochet maintenance notes posted when Warzone updates need rebuilds',
			'Setup, delivery, and billing support for Warzone licenses',
		],
	},
} as const;

export const trustSignals = {
	status: 'Online',
	statusNote: 'Warzone Hacks package is live for Warzone on Windows PC.',
	delivery: 'Instant digital delivery',
	platform: 'Windows 10 & 11',
	antiCheat: 'Ricochet maintenance supported',
} as const;

export const seoLandingPages = [
	{ label: 'Warzone hacks', href: '/warzone-hacks/' },
	{ label: 'Warzone cheats', href: '/warzone-cheats-2026/' },
	{ label: 'Warzone esp', href: '/warzone-esp/' },
	{ label: 'Warzone aimbot', href: '/warzone-aimbot/' },
	{ label: 'Warzone hack download', href: '/warzone-cheat-download/' },
	{ label: 'Undetected warzone hacks', href: '/undetected-warzone-cheats/' },
	{ label: 'Warzone wallhack', href: '/warzone-wallhack/' },
	{ label: 'Warzone radar hack', href: '/warzone-radar-hack/' },
] as const;

export const mainNav = [
	{ label: 'Home', href: '/' },
	{ label: 'Hacks', href: '/warzone-hacks/' },
	{ label: 'Aimbot', href: '/warzone-aimbot/' },
	{ label: 'ESP', href: '/warzone-esp/' },
	{ label: 'Features', href: '/features/' },
	{ label: 'Pricing', href: '/pricing/' },
	{ label: 'Setup', href: '/setup/' },
	{ label: 'Updates', href: '/updates/' },
	{ label: 'FAQ', href: '/faq/' },
] as const;

export const footerNav = [
	{ label: 'Warzone hack update log', href: '/updates/' },
	{ label: 'Contact Warzone Hacks support', href: '/support/' },
	{ label: 'Refund policy details', href: '/refund-policy/' },
	{ label: 'Privacy policy details', href: '/privacy-policy/' },
	{ label: 'Terms of use', href: '/terms/' },
] as const;

export const footerExplore = [
	{ label: 'Warzone Hacks home', href: '/' },
	{ label: 'Warzone hacks pillar', href: '/warzone-hacks/' },
	{ label: 'Undetected Warzone hacks', href: '/undetected-warzone-cheats/' },
	{ label: 'Warzone wallhack ESP', href: '/warzone-wallhack/' },
	{ label: 'Warzone radar hack', href: '/warzone-radar-hack/' },
	{ label: 'Ricochet bypass guide', href: '/ricochet-bypass/' },
	{ label: 'Warzone cheats 2026', href: '/warzone-cheats-2026/' },
	{ label: 'Warzone Aimbot controls', href: '/warzone-aimbot/' },
	{ label: 'Warzone ESP overlays', href: '/warzone-esp/' },
	{ label: 'Full Warzone hack feature list', href: '/features/' },
	{ label: 'Monthly & lifetime pricing', href: '/pricing/' },
	{ label: 'Warzone hack setup guide', href: '/setup/' },
	{ label: 'Warzone hacks FAQ', href: '/faq/' },
] as const;

export const homeFaqs = [
	{
		question: 'What are Warzone Hacks?',
		answer:
			'Warzone Hacks is an undetected warzone hacks package for Windows PC — also searched as warzone cheats and warzone hack. It includes warzone esp wallhack for enemy operators, vehicles, and loot, 2D radar-style awareness, plus warzone aimbot controls. Packages include Ricochet maintenance updates and setup support.',
	},
	{
		question: 'Are Warzone hacks undetected in 2026?',
		answer:
			'Warzone Hacks is maintained for Warzone with rebuilds after Ricochet anti-cheat and game patches. Check the Updates page for the latest status before you queue. No warzone hack or cheat can guarantee permanent undetected status — maintenance and responsible use matter.',
	},
	{
		question: 'Does this work with Battle Royale and Resurgence modes?',
		answer:
			'Yes. The ESP wallhack, radar overlays, and Aimbot tools are built for Warzone\'s BR loop: reading enemy squads, spotting loadout drops and contracts, and staying aware during gulag fights and final-circle rotations on Verdansk, Urzikstan, and Rebirth Island.',
	},
	{
		question: 'What is included — ESP, wallhack, radar, or Aimbot?',
		answer:
			'Warzone Hacks bundles operator ESP wallhack, loot and contract markers, 2D radar-style threat cues, and configurable Aimbot in one license. See the Features, ESP, Aimbot, wallhack, hacks, and radar pages for the full control list.',
	},
	{
		question: 'How are licenses delivered?',
		answer:
			'After payment is confirmed, Warzone Hacks license details are delivered digitally through checkout. Timing can vary by payment method and order review. Keep your order confirmation ready if you contact support.',
	},
	{
		question: 'Where do I check updates after a Warzone or Ricochet patch?',
		answer:
			'Maintenance notes are posted on the Updates page when a Warzone patch or Ricochet anti-cheat update affects package behavior. That is the fastest place to confirm whether a new Warzone Hacks build is live.',
	},
	{
		question: 'How do I contact support?',
		answer:
			'Use the Support page or email support@warzonehacks.net. Include your order details, package length, and a clear description of the Warzone setup issue so replies can be faster.',
	},
] as const;

export const seoFaqs = [
	...homeFaqs,
	{
		question: 'What is a Warzone wallhack?',
		answer:
			'A Warzone wallhack is an ESP overlay that shows enemy operators, vehicles, and loot through walls and terrain. Warzone Hacks wallhack includes distance readouts, team colours, and toggleable categories for BR and Resurgence.',
	},
	{
		question: 'Does Warzone Hacks include a radar hack?',
		answer:
			'Yes. Warzone Hacks includes 2D radar-style overlays that highlight nearby threats outside your direct view — useful for reading flanks during building fights and final-circle rotations.',
	},
	{
		question: 'How does Ricochet anti-cheat affect Warzone hacks?',
		answer:
			'Activision\'s Ricochet anti-cheat monitors Warzone on Windows PC. Warzone Hacks publishes maintenance notes after patches that may require a rebuild. Read the Ricochet bypass guide for how warzone hacks updates are handled.',
	},
	{
		question: 'Can I buy undetected Warzone cheats for Windows PC?',
		answer:
			'Yes — Warzone Hacks sells monthly and lifetime warzone cheats licenses for Windows PC with warzone esp, radar, and warzone aimbot in one stack. Compare plans on Pricing and review the undetected guide before checkout.',
	},
] as const;

export type CustomerReview = {
	handle: string;
	rating: 3 | 4 | 5;
	text: string;
	short: string;
	slug: string;
	seoTitle: string;
	seoDescription: string;
	date: string;
	tag?: string;
};

export const customerReviews = [
	{
		handle: 'xKrypt0_WZ',
		rating: 5,
		text: 'soft aim on the meta ar feels cracked ngl. took me like 20 mins to figure out the menu tho lol. once u get it its smooth',
		short: 'soft aim on the meta ar feels cracked ngl. once u get the menu its smooth',
		slug: 'warzone-soft-aim-review-xkrypt0',
		seoTitle: 'Soft Aim Review by @xKrypt0_WZ — 5/5 | Warzone Hacks',
		seoDescription:
			'Real Warzone soft aim review from @xKrypt0_WZ: 5/5 for the meta AR soft aim in Warzone Hacks. How the aimbot menu feels after setup on Windows PC.',
		date: '2026-07-24',
		tag: 'Soft aim',
	},
	{
		handle: 'buildsR4K',
		rating: 4,
		text: "esp boxes in resurgence are actually useful, can see who's holding height before u push. radar could be bigger on 1080p — wish there was a size slider. still worth it for the price",
		short: "esp boxes in resurgence are actually useful, can see who's holding height before u push. still worth it for the price",
		slug: 'warzone-esp-resurgence-review-buildsr4k',
		seoTitle: 'ESP Resurgence Review by @buildsR4K — 4/5 | Warzone Hacks',
		seoDescription:
			'Warzone ESP review from @buildsR4K: 4/5 for ESP operator boxes in Resurgence with radar feedback. Honest take on undetected Warzone hacks pricing and value.',
		date: '2026-07-19',
		tag: 'Resurgence',
	},
	{
		handle: 'dma_wizard',
		rating: 5,
		text: 'switched from a kernel only tool last season. cloud dma setup was easier than i expected, support walked me through the dma part on discord. survived the last ricochet update while my old sub got flagged. lifetime was the move',
		short: 'cloud dma setup was easier than i expected. survived the last ricochet update while my old sub got flagged',
		slug: 'warzone-cloud-dma-review-dma-wizard',
		seoTitle: 'Cloud DMA Review by @dma_wizard — 5/5 | Warzone Hacks',
		seoDescription:
			'Cloud DMA Warzone hacks review from @dma_wizard: 5/5 after surviving a Ricochet update that flagged a kernel-only cheat. Setup help and lifetime license experience.',
		date: '2026-06-27',
		tag: 'Cloud DMA',
	},
	{
		handle: 'ctrl_player99',
		rating: 4,
		text: "finally a wz cheat that doesn't feel like garbage on controller. soft aim with xbox pad works, had to tweak fov a bit. menu navigation with pad is kinda awkward but doable",
		short: "finally a wz cheat that doesn't feel like garbage on controller. soft aim with xbox pad works",
		slug: 'warzone-controller-soft-aim-review-ctrl-player99',
		seoTitle: 'Controller Soft Aim by @ctrl_player99 — 4/5 | Warzone Hacks',
		seoDescription:
			'Controller Warzone cheats review from @ctrl_player99: 4/5 for soft aim on an Xbox pad, FOV tweaks, and menu navigation in the Warzone Hacks package.',
		date: '2026-07-11',
		tag: 'Controller',
	},
	{
		handle: 'stormChaser_07',
		rating: 3,
		text: 'features are good when it works. first launch took forever bc windows defender flagged the loader — not their fault but annoying. support replied in like 2 hours and sent a fix. esp and loot markers solid in ranked, just wish setup docs were clearer upfront',
		short: 'features are good when it works. esp and loot markers solid in ranked, just wish setup docs were clearer upfront',
		slug: 'warzone-hack-setup-review-stormchaser07',
		seoTitle: 'Setup Review by @stormChaser_07 — 3/5 | Warzone Hacks',
		seoDescription:
			'Honest 3/5 Warzone hacks review from @stormChaser_07: ESP and loot markers solid in ranked, but first launch and setup docs needed support help.',
		date: '2026-06-15',
		tag: 'Setup',
	},
	{
		handle: 'lootGoblinx',
		rating: 5,
		text: 'loot esp alone pays for monthly imo. contract markers + distance readouts = way faster off spawn',
		short: 'loot esp alone pays for monthly imo. contract markers + distance readouts = way faster off spawn',
		slug: 'warzone-loot-esp-review-lootgoblinx',
		seoTitle: 'Loot ESP Review by @lootGoblinx — 5/5 | Warzone Hacks',
		seoDescription:
			'Warzone loot ESP review from @lootGoblinx: 5/5 for contract markers and distance readouts off spawn. Why loot ESP alone justifies the monthly Warzone hacks license.',
		date: '2026-08-01',
	},
	{
		handle: 'rankedGrind42',
		rating: 4,
		text: 'been using since season 3. soft aim profiles per weapon is nice — smg profile vs ar profile actually makes a diff in close fights. only complaint is updates page could show eta when ricochet patches hit, had to wait a day once',
		short: 'soft aim profiles per weapon is nice — smg profile vs ar profile actually makes a diff in close fights',
		slug: 'warzone-soft-aim-ranked-review-rankedgrind42',
		seoTitle: 'Ranked Soft Aim by @rankedGrind42 — 4/5 | Warzone Hacks',
		seoDescription:
			'Ranked Warzone soft aim review from @rankedGrind42: 4/5 for per-weapon aimbot profiles since Season 3, with feedback on Ricochet patch-day updates.',
		date: '2026-07-07',
		tag: 'Ranked',
	},
	{
		handle: 'vanLifeWZ',
		rating: 5,
		text: 'radar saved me so many times during gulag fights. seeing the third party before they slide in is huge in squads. boxes + radar combo is clean',
		short: 'radar saved me so many times during gulag fights. boxes + radar combo is clean',
		slug: 'warzone-radar-hack-review-vanlifewz',
		seoTitle: 'Radar Hack Review by @vanLifeWZ — 5/5 | Warzone Hacks',
		seoDescription:
			'Warzone radar hack review from @vanLifeWZ: 5/5 for 2D radar during gulag fights and spotting third parties in squads with ESP boxes.',
		date: '2026-07-28',
		tag: 'Squads',
	},
	{
		handle: 'patchDayMike',
		rating: 4,
		text: 'every cheat goes down on patch day, thats life. difference here is they actually posted on updates within a few hours last patch. was back online next morning. my old provider left me hanging for 4 days once so yeah',
		short: 'every cheat goes down on patch day, thats life. difference here is they actually posted on updates within a few hours',
		slug: 'warzone-ricochet-update-review-patchdaymike',
		seoTitle: 'Ricochet Patch Review by @patchDayMike — 4/5 | Warzone Hacks',
		seoDescription:
			'Ricochet patch-day review from @patchDayMike: 4/5 for how fast Warzone Hacks posts maintenance updates and gets the undetected cheat back online after patches.',
		date: '2026-06-09',
		tag: 'Ricochet updates',
	},
	{
		handle: 'snipezOnly_',
		rating: 5,
		text: 'sniper soft aim profile + esp for tag = chef kiss. dont @ me',
		short: 'sniper soft aim profile + esp for tag = chef kiss. dont @ me',
		slug: 'warzone-sniper-soft-aim-review-snipezonly',
		seoTitle: 'Sniper Soft Aim by @snipezOnly_ — 5/5 | Warzone Hacks',
		seoDescription:
			'Warzone sniper soft aim review from @snipezOnly_: 5/5 for the sniper aimbot profile paired with ESP tagging in the Warzone Hacks package.',
		date: '2026-08-01',
	},
] as const satisfies readonly CustomerReview[];

export const customerReviewStats = {
	averageRating: 4.4,
	totalCount: customerReviews.length,
} as const;
