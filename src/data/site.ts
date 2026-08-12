export {
	brand,
	blogLabel,
	fillBrandTokens,
	homeSeo,
	seoDescription,
	seoPageTitle,
	seoTitle,
	siteConfig,
	seoKeywords,
	productInfo,
} from './site-core';

import { fillBrandTokens } from './brand';

function faq<T extends { question: string; answer: string; seoTitle: string; seoDescription: string }>(item: T): T {
	return {
		...item,
		question: fillBrandTokens(item.question),
		answer: fillBrandTokens(item.answer),
		seoTitle: fillBrandTokens(item.seoTitle),
		seoDescription: fillBrandTokens(item.seoDescription),
	};
}

function reviewMeta<T extends { seoTitle: string; seoDescription: string }>(item: T): T {
	return {
		...item,
		seoTitle: fillBrandTokens(item.seoTitle),
		seoDescription: fillBrandTokens(item.seoDescription),
	};
}

export const trustSignals = {
	status: 'Online',
	statusNote: fillBrandTokens('{brand} is live for {game} on Windows PC.'),
	delivery: 'Instant digital delivery',
	platform: 'Windows 10 & 11',
	antiCheat: fillBrandTokens('{antiCheat} maintenance supported'),
} as const;

export const seoLandingPages = [
	{ label: fillBrandTokens('{game} hacks'), href: '/sand-raiders-hacks/' },
	{ label: fillBrandTokens('{game} cheats'), href: '/sand-raiders-cheats-2026/' },
	{ label: fillBrandTokens('{game} esp'), href: '/sand-raiders-esp/' },
	{ label: fillBrandTokens('{game} aimbot'), href: '/sand-raiders-aimbot/' },
	{ label: fillBrandTokens('{game} hack download'), href: '/sand-raiders-cheat-download/' },
	{ label: fillBrandTokens('Undetected {primaryKeyword}'), href: '/undetected-sand-raiders-cheats/' },
	{ label: fillBrandTokens('{game} wallhack'), href: '/sand-raiders-wallhack/' },
	{ label: fillBrandTokens('{game} radar hack'), href: '/sand-raiders-radar-hack/' },
	{ label: 'Cloud DMA', href: '/cloud-dma/' },
	{ label: 'Cloud DMA setup', href: '/cloud-dma-setup/' },
] as const;

export const mainNav = [
	{ label: 'Home', href: '/' },
	{ label: 'Hacks', href: '/sand-raiders-hacks/' },
	{ label: 'Aimbot', href: '/sand-raiders-aimbot/' },
	{ label: 'ESP', href: '/sand-raiders-esp/' },
	{ label: 'Features', href: '/features/' },
	{ label: 'Pricing', href: '/pricing/' },
	{ label: 'Setup', href: '/setup/' },
	{ label: 'Updates', href: '/updates/' },
	{ label: 'FAQ', href: '/faq/' },
] as const;

export const footerNav = [
	{ label: fillBrandTokens('{game} hack update log'), href: '/updates/' },
	{ label: fillBrandTokens('Contact {brand} support'), href: '/support/' },
	{ label: 'Refund policy details', href: '/refund-policy/' },
	{ label: 'Privacy policy details', href: '/privacy-policy/' },
	{ label: 'Terms of use', href: '/terms/' },
] as const;

export const footerExplore = [
	{ label: fillBrandTokens('{brand} home'), href: '/' },
	{ label: fillBrandTokens('{game} hacks pillar'), href: '/sand-raiders-hacks/' },
	{ label: fillBrandTokens('Undetected {game} hacks'), href: '/undetected-sand-raiders-cheats/' },
	{ label: fillBrandTokens('{game} wallhack ESP'), href: '/sand-raiders-wallhack/' },
	{ label: fillBrandTokens('{game} radar hack'), href: '/sand-raiders-radar-hack/' },
	{ label: fillBrandTokens('{antiCheat} bypass guide'), href: '/eac-bypass/' },
	{ label: 'Cloud DMA', href: '/cloud-dma/' },
	{ label: 'Cloud DMA setup', href: '/cloud-dma-setup/' },
	{ label: 'Cloud DMA hardware', href: '/cloud-dma-hardware/' },
	{ label: fillBrandTokens('{game} cheats 2026'), href: '/sand-raiders-cheats-2026/' },
	{ label: fillBrandTokens('{game} Aimbot controls'), href: '/sand-raiders-aimbot/' },
	{ label: fillBrandTokens('{game} ESP overlays'), href: '/sand-raiders-esp/' },
	{ label: fillBrandTokens('Full {game} hack feature list'), href: '/features/' },
	{ label: 'Monthly & lifetime pricing', href: '/pricing/' },
	{ label: fillBrandTokens('{game} hack setup guide'), href: '/setup/' },
	{ label: fillBrandTokens('{game} hacks FAQ'), href: '/faq/' },
] as const;

export type FaqItem = {
	question: string;
	answer: string;
	slug: string;
	seoTitle: string;
	seoDescription: string;
};

export const homeFaqs: readonly FaqItem[] = [
	faq({
		question: 'What is {brand}?',
		answer:
			'{brand} is an undetected sandraiders cheats package for Escape from Tarkov on Windows PC — also searched as escape from tarkov hacks. It includes ESP wallhack, 2D radar, and aimbot controls, with {antiCheat} maintenance and 24/7 setup support.',
		slug: 'what-are-sand-raiders-hacks',
		seoTitle: 'What is {brand}? | FAQ',
		seoDescription:
			'{brand} explained: undetected ESP, radar, and aimbot for Escape from Tarkov on Windows PC with {antiCheat} maintenance.',
	}),
	faq({
		question: 'Are {primaryKeyword} undetected in 2026?',
		answer:
			'{brand} is maintained for Escape from Tarkov with rebuilds after {antiCheat} and game patches. Check the Status page before you raid. No cheat can guarantee permanent undetected status — maintenance, current builds, and responsible use matter.',
		slug: 'are-sand-raiders-hacks-undetected-in-2026',
		seoTitle: 'Are {brand} Undetected in 2026? | FAQ',
		seoDescription:
			'How {brand} stays maintained after Tarkov / {antiCheat} patches in 2026 — and why no cheat can promise permanent undetected status.',
	}),
	faq({
		question: 'Does this work in the main Tarkov maps?',
		answer:
			'Yes. ESP, radar, and aimbot are built for Escape from Tarkov raid flow — reading players, spotting loot, and staying aware before extracts.',
		slug: 'battle-royale-and-resurgence',
		seoTitle: 'Tarkov Map Support | FAQ',
		seoDescription:
			'{brand} works across main Escape from Tarkov maps — ESP, radar, and aimbot for Windows PC.',
	}),
	faq({
		question: 'What is included — ESP, wallhack, radar, or Aimbot?',
		answer:
			'{brand} bundles ESP wallhack, loot markers, 2D radar cues, and configurable Aimbot in one license. See Features for the full list.',
		slug: 'esp-wallhack-radar-or-aimbot',
		seoTitle: 'What Is Included: ESP, Wallhack, Radar, Aimbot | FAQ',
		seoDescription:
			'One {brand} license includes ESP wallhack, loot markers, 2D radar cues, and configurable Aimbot for Windows PC.',
	}),
	faq({
		question: 'What is Cloud DMA in {brand}?',
		answer:
			'Cloud DMA runs part of the stack off your main Windows PC instead of a kernel-only tool alone. You still play {game} on PC. ESP, soft aim, and radar stay in one license.',
		slug: 'what-is-cloud-dma-home',
		seoTitle: 'What Is Cloud DMA in {brand}? | FAQ',
		seoDescription:
			'Cloud DMA in {brand}: a remote path for {game} on Windows PC with ESP, soft aim, and radar in one license.',
	}),
	faq({
		question: 'How are licenses delivered?',
		answer:
			'After payment is confirmed, {brand} license details are delivered digitally through checkout. Timing can vary by payment method and order review. Keep your order confirmation ready if you contact support.',
		slug: 'how-are-licenses-delivered',
		seoTitle: 'How Are {brand} Licenses Delivered? | FAQ',
		seoDescription:
			'{brand} licenses are delivered digitally after payment confirmation. Timing varies by payment method and order review.',
	}),
	faq({
		question: 'Where do I check updates after a Tarkov or {antiCheat} patch?',
		answer:
			'Maintenance notes are posted on the Status page when an Escape from Tarkov or {antiCheat} update affects sandraiders cheats. That is the fastest place to confirm whether a new {brand} build is live and compatible.',
		slug: 'where-to-check-updates',
		seoTitle: 'Where to Check Tarkov / {antiCheat} Updates | FAQ',
		seoDescription:
			'Check the Status page after Tarkov or {antiCheat} patches to confirm the latest {brand} build status.',
	}),
	faq({
		question: 'How do I contact support?',
		answer:
			'Use the Support page or email {email} — 24/7 coverage for setup, delivery, and patch questions. Include your order details, package length, and a clear description of the issue so replies can be faster.',
		slug: 'how-to-contact-support',
		seoTitle: 'How to Contact {brand} Support | FAQ',
		seoDescription:
			'Contact {brand} 24/7 support via the Support page or {email} with your order details for faster help.',
	}),
	faq({
		question: 'Is Sandraiders legit?',
		answer:
			'Yes. {brand} sells real digital licenses for Windows PC with public Status notes, Setup help, and support at {email}. Read Reviews and the refund policy before you buy if you want more proof.',
		slug: 'is-sandraiders-legit',
		seoTitle: 'Is Sandraiders Legit? | FAQ',
		seoDescription:
			'Is Sandraiders legit? {brand} sells real Windows PC licenses with Status updates, Setup help, and support at {email}.',
	}),
	faq({
		question: 'How to use Sandraiders?',
		answer:
			'Buy a plan, open your delivery email, then follow the Setup page on Windows 10 or 11. Launch only after Status shows the build is live. Email {email} with your order ID if you get stuck.',
		slug: 'how-to-use-sandraiders',
		seoTitle: 'How to Use Sandraiders? | FAQ',
		seoDescription:
			'How to use Sandraiders: buy, follow Setup on Windows PC, check Status, then contact {email} if you need help.',
	}),
	faq({
		question: 'Is {brand} safe to use?',
		answer:
			'{brand} is maintained for {antiCheat} on Windows PC and rebuilt after risky patches. No cheat is risk-free forever. Check Status before you play and use responsible settings.',
		slug: 'is-sandraiders-safe',
		seoTitle: 'Is {brand} Safe? | FAQ',
		seoDescription:
			'Is {brand} safe? It is maintained for {antiCheat} on Windows PC. Check Status before you queue — no cheat is risk-free forever.',
	}),
	faq({
		question: 'Do you offer refunds?',
		answer:
			'Refund rules are listed on the Refund policy page. Digital licenses often have limits after delivery or activation. Read that page before checkout, or email {email} with your order ID.',
		slug: 'do-you-offer-refunds',
		seoTitle: 'Do You Offer Refunds? | FAQ',
		seoDescription:
			'{brand} refund rules are on the Refund policy page. Digital licenses may have limits after delivery — email {email} with your order ID.',
	}),
	faq({
		question: 'What is the difference between monthly and lifetime?',
		answer:
			'Monthly and lifetime include the same features while active — ESP, aimbot, radar, and Cloud DMA. Monthly renews each billing cycle. Lifetime is a one-time buy for long-term play. Compare both on Pricing.',
		slug: 'monthly-vs-lifetime',
		seoTitle: 'Monthly vs Lifetime | FAQ',
		seoDescription:
			'{brand} monthly vs lifetime: same ESP, aimbot, radar, and Cloud DMA while active. Pick billing that fits on Pricing.',
	}),
] as const;

export const seoFaqs: readonly FaqItem[] = [
	...homeFaqs,
	faq({
		question: 'What is a {game} wallhack?',
		answer:
			'A {game} wallhack is an ESP overlay that shows enemy players, vehicles, and loot through walls. {brand} includes distance readouts, team colours, and toggleable categories.',
		slug: 'what-is-a-sand-raiders-wallhack',
		seoTitle: 'What Is a {game} Wallhack? | FAQ',
		seoDescription:
			'A {game} wallhack is ESP that reveals players, vehicles, and loot through walls — with distance, team colours, and category toggles.',
	}),
	faq({
		question: 'Does {brand} include a radar hack?',
		answer:
			'Yes. {brand} includes 2D radar overlays that highlight nearby threats outside your view — useful for flanks and late-game fights.',
		slug: 'does-sand-raiders-hacks-include-radar-hack',
		seoTitle: 'Does {brand} Include a Radar Hack? | FAQ',
		seoDescription:
			'Yes — {brand} includes 2D radar overlays for nearby threats outside your FOV.',
	}),
	faq({
		question: 'How does {antiCheat} affect {primaryKeyword}?',
		answer:
			'{antiCheat} monitors {game} on Windows PC. {brand} posts maintenance notes after patches that may need a rebuild. Check Status before you queue.',
		slug: 'ricochet-anti-cheat-and-sand-raiders-hacks',
		seoTitle: 'How {antiCheat} Affects {brand} | FAQ',
		seoDescription:
			'{antiCheat} may require {brand} rebuilds after patches. Status notes explain the update workflow.',
	}),
	faq({
		question: 'Can I buy undetected {game} cheats for Windows PC?',
		answer:
			'Yes — {brand} sells monthly and lifetime licenses for Windows PC with ESP, radar, and aimbot in one stack. Compare plans on Store before checkout.',
		slug: 'buy-undetected-sand-raiders-cheats-windows-pc',
		seoTitle: 'Buy Undetected {game} Cheats for Windows PC | FAQ',
		seoDescription:
			'Buy monthly or lifetime {brand} licenses for Windows PC — ESP, radar, and aimbot in one stack. Compare pricing before checkout.',
	}),
	faq({
		question: 'Does Cloud DMA work after {antiCheat} patches?',
		answer:
			'We rebuild Cloud DMA with the rest of {brand} after big {game} or {antiCheat} patches. Check Cloud DMA status and the Status page before you queue. No cheat is permanently safe forever.',
		slug: 'cloud-dma-after-eac-patches',
		seoTitle: 'Cloud DMA After {antiCheat} Patches | FAQ',
		seoDescription:
			'How {brand} maintains Cloud DMA after {antiCheat} patches — check status before you queue on Windows PC.',
	}),
	faq({
		question: 'What is the detection rate for {brand}?',
		answer:
			'{brand} does not publish a fake permanent detection rate. Risk changes after {game} and {antiCheat} updates. We post Status notes and rebuild when needed. Check Status before you queue.',
		slug: 'sandraiders-detection-rate',
		seoTitle: 'What Is the Detection Rate for {brand}? | FAQ',
		seoDescription:
			'{brand} detection risk changes after {antiCheat} patches. Check Status before you queue — no permanent rate is honest.',
	}),
	faq({
		question: 'Is {brand} undetected right now?',
		answer:
			'Check the Status page for the current build note. {brand} is maintained for {antiCheat} on Windows PC, but patch days can pause play until a rebuild is posted.',
		slug: 'is-sandraiders-undetected-right-now',
		seoTitle: 'Is {brand} Undetected Right Now? | FAQ',
		seoDescription:
			'Is {brand} undetected right now? Check Status for the current {antiCheat} build note before you play on Windows PC.',
	}),
	faq({
		question: 'Does {brand} work on Windows 10 and 11?',
		answer:
			'Yes. {brand} is built for Windows 10 and Windows 11 PCs. Controllers are supported where listed. Follow Setup after purchase.',
		slug: 'windows-10-and-11-compatibility',
		seoTitle: 'Does {brand} Work on Windows 10 and 11? | FAQ',
		seoDescription:
			'{brand} works on Windows 10 and 11 PC. Follow Setup after you buy; email {email} if install fails.',
	}),
	faq({
		question: 'Does {brand} work with the latest Escape from Tarkov patches?',
		answer:
			'{brand} is rebuilt after major Escape from Tarkov and {antiCheat} updates that affect the package. Wait for a Status note before you queue on an old build.',
		slug: 'tarkov-patch-compatibility',
		seoTitle: 'Tarkov Patch Compatibility | FAQ',
		seoDescription:
			'{brand} rebuilds after Escape from Tarkov and {antiCheat} patches. Check Status before you play on Windows PC.',
	}),
	faq({
		question: 'How do I install {brand}?',
		answer:
			'After checkout, open your delivery email and follow the Setup page. Use a clean Windows PC, keep antivirus exclusions only as support directs, and launch only when Status is green. Full wiring details stay with support after purchase.',
		slug: 'how-to-install-sandraiders',
		seoTitle: 'How Do I Install {brand}? | FAQ',
		seoDescription:
			'Install {brand} on Windows PC: use your delivery email, follow Setup, and check Status before launch. Support helps via {email}.',
	}),
	faq({
		question: 'What if Windows Defender flags the loader?',
		answer:
			'Some security tools flag cheat loaders by heuristic. Pause, follow the Setup notes from your delivery email, and email {email} with your order ID if the file is removed. Do not download from random mirrors.',
		slug: 'loader-flagged-by-windows-defender',
		seoTitle: 'Loader Flagged by Windows Defender | FAQ',
		seoDescription:
			'If Windows Defender flags the {brand} loader, follow Setup notes and email {email} with your order ID. Do not use random mirrors.',
	}),
	faq({
		question: 'What if {brand} will not start?',
		answer:
			'Confirm your license is active, Windows is 10 or 11, and Status shows the build is live. Restart the loader after closing the game fully. If it still fails, email {email} with your order ID and Windows version.',
		slug: 'sandraiders-will-not-start',
		seoTitle: 'What If {brand} Will Not Start? | FAQ',
		seoDescription:
			'{brand} will not start? Check license, Status, and Windows version, then email {email} with your order ID.',
	}),
	faq({
		question: 'What should I do after a game or {antiCheat} patch?',
		answer:
			'Do not launch an old build. Open Status (and Cloud DMA status if you use that path). Wait for a rebuild note, then update from your delivery instructions before you queue.',
		slug: 'what-to-do-after-a-patch',
		seoTitle: 'What to Do After a Patch | FAQ',
		seoDescription:
			'After a {game} or {antiCheat} patch, check Status before launching {brand}. Wait for the rebuild note on Windows PC.',
	}),
	faq({
		question: 'How does payment and delivery work?',
		answer:
			'Pay at checkout, then wait for order confirmation. License details arrive by email after payment clears. Timing can vary by payment method. Keep the receipt if you contact {email}.',
		slug: 'payment-and-delivery',
		seoTitle: 'Payment and Delivery | FAQ',
		seoDescription:
			'{brand} payment clears at checkout; license details arrive by email. Timing varies — contact {email} with your receipt if needed.',
	}),
	faq({
		question: 'What is the difference between Cloud DMA and standard?',
		answer:
			'Standard runs on your game PC path. Cloud DMA moves part of the stack off your main Windows PC while you still play {game} locally. Features stay in one license. See Cloud DMA pages for setup and hardware notes.',
		slug: 'cloud-dma-vs-standard',
		seoTitle: 'Cloud DMA vs Standard | FAQ',
		seoDescription:
			'Cloud DMA vs standard in {brand}: remote path vs local-only stack, same ESP and aimbot license for {game} on Windows PC.',
	}),
	faq({
		question: 'What is the difference between ESP and aimbot packages?',
		answer:
			'{brand} is one package, not separate ESP-only and aimbot-only SKUs. ESP wallhack and radar help awareness; aimbot / soft aim helps tracking. Both ship together — see Features for toggles.',
		slug: 'esp-vs-aimbot-packages',
		seoTitle: 'ESP vs Aimbot Packages | FAQ',
		seoDescription:
			'{brand} includes ESP and aimbot in one license for {game} on Windows PC — not separate paid SKUs. See Features.',
	}),
	faq({
		question: 'Can I use {brand} with a controller?',
		answer:
			'Yes where listed. Soft aim can work with a pad after you tune FOV and profiles. Menu navigation on controller may feel slower than mouse — see Setup tips after purchase.',
		slug: 'controller-support',
		seoTitle: 'Controller Support | FAQ',
		seoDescription:
			'{brand} supports controllers on Windows PC where listed. Soft aim works with pad after FOV and profile tweaks.',
	}),
	faq({
		question: 'How long does {brand} license delivery take?',
		answer:
			'Most orders deliver soon after payment confirms. Bank checks or manual review can take longer. If nothing arrives, check spam and email {email} with your order ID.',
		slug: 'how-long-does-delivery-take',
		seoTitle: 'How Long Does Delivery Take? | FAQ',
		seoDescription:
			'{brand} license delivery is usually fast after payment. Contact {email} with your order ID if the email is missing.',
	}),
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
	reviewMeta({
		handle: 'xKrypt0_EFT',
		rating: 5,
		text: 'soft aim in close dorms fights feels cracked ngl. took me like 20 mins to figure out the menu tho lol. once u get it its smooth — and support answered at like 3am when i got stuck',
		short: 'soft aim in close dorms fights feels cracked. support answered at like 3am when i got stuck',
		slug: 'sand-raiders-soft-aim-review-xkrypt0',
		seoTitle: 'Soft Aim Review by @xKrypt0_EFT — 5/5 | {brand}',
		seoDescription:
			'Real Tarkov soft aim review from @xKrypt0_EFT: 5/5 for close-range aimbot feel in {brand}, plus late-night support help on Windows PC.',
		date: '2026-07-24',
		tag: 'Soft aim',
	}),
	reviewMeta({
		handle: 'buildsR4K',
		rating: 4,
		text: "esp boxes on customs are actually useful, can see who's holding dorms before u push. radar could be bigger on 1080p — wish there was a size slider. still worth it for sandraiders cheats at this price",
		short: "esp boxes on customs are actually useful, can see who's holding dorms before u push. still worth it",
		slug: 'sand-raiders-esp-resurgence-review-buildsr4k',
		seoTitle: 'ESP Customs Review by @buildsR4K — 4/5 | {brand}',
		seoDescription:
			'Tarkov ESP review from @buildsR4K: 4/5 for player boxes on Customs with radar feedback. Honest take on sandraiders cheats pricing and value.',
		date: '2026-07-19',
		tag: 'ESP',
	}),
	reviewMeta({
		handle: 'dma_wizard',
		rating: 5,
		text: 'switched from a kernel only tool last wipe. cloud dma setup was easier than i expected, support walked me through on discord. survived the last eac update while my old sub got flagged. lifetime was the move for escape from tarkov hacks',
		short: 'cloud dma setup was easier than i expected. survived the last eac update while my old sub got flagged',
		slug: 'warzone-cloud-dma-review-dma-wizard',
		seoTitle: 'Cloud DMA Review by @dma_wizard — 5/5 | {brand}',
		seoDescription:
			'Cloud DMA escape from tarkov hacks review from @dma_wizard: 5/5 after surviving an {antiCheat} update that flagged a kernel-only cheat. Setup help and lifetime license.',
		date: '2026-06-27',
		tag: 'Cloud DMA',
	}),
	reviewMeta({
		handle: 'ctrl_player99',
		rating: 4,
		text: "finally eft cheats that don't feel like garbage on controller. soft aim with xbox pad works, had to tweak fov a bit. menu with pad is kinda awkward but doable for late night raids",
		short: "finally eft cheats that don't feel like garbage on controller. soft aim with xbox pad works",
		slug: 'warzone-controller-soft-aim-review-ctrl-player99',
		seoTitle: 'Controller Soft Aim by @ctrl_player99 — 4/5 | {brand}',
		seoDescription:
			'Controller Tarkov cheats review from @ctrl_player99: 4/5 for soft aim on an Xbox pad, FOV tweaks, and menu navigation in the {brand} package.',
		date: '2026-07-11',
		tag: 'Controller',
	}),
	reviewMeta({
		handle: 'stormChaser_07',
		rating: 3,
		text: 'features are good when it works. first launch took forever bc windows defender flagged the loader — not their fault but annoying. support replied in like 2 hours and sent a fix. esp and loot markers solid on reserve, just wish setup docs were clearer upfront',
		short: 'features are good when it works. esp and loot markers solid on reserve — support replied in 2 hours',
		slug: 'warzone-hack-setup-review-stormchaser07',
		seoTitle: 'Setup Review by @stormChaser_07 — 3/5 | {brand}',
		seoDescription:
			'Honest 3/5 Tarkov hacks review from @stormChaser_07: ESP and loot markers solid on Reserve, but first launch and setup docs needed support help.',
		date: '2026-06-15',
		tag: 'Setup',
	}),
	reviewMeta({
		handle: 'lootGoblinx',
		rating: 5,
		text: 'loot esp alone pays for monthly imo. marked room markers + distance readouts = way faster extracts. never asked for my tarkov login which calmed me down about security',
		short: 'loot esp alone pays for monthly. never asked for my tarkov login which calmed me down about security',
		slug: 'warzone-loot-esp-review-lootgoblinx',
		seoTitle: 'Loot ESP Review by @lootGoblinx — 5/5 | {brand}',
		seoDescription:
			'Tarkov loot ESP review from @lootGoblinx: 5/5 for marked-room markers and account-safety peace of mind with {brand}.',
		date: '2026-08-01',
	}),
	reviewMeta({
		handle: 'rankedGrind42',
		rating: 4,
		text: 'been using since last wipe. soft aim profiles per weapon is nice — smg vs ar actually makes a diff in dorms. only complaint is updates page could show eta when eac patches hit, had to wait a day once',
		short: 'soft aim profiles per weapon is nice — only wish updates showed eta after eac patches',
		slug: 'sand-raiders-soft-aim-ranked-review-rankedgrind42',
		seoTitle: 'Wipe Soft Aim by @rankedGrind42 — 4/5 | {brand}',
		seoDescription:
			'Tarkov soft aim review from @rankedGrind42: 4/5 for per-weapon aimbot profiles, with feedback on {antiCheat} patch-day updates.',
		date: '2026-07-07',
		tag: 'Aimbot',
	}),
	reviewMeta({
		handle: 'vanLifeEFT',
		rating: 5,
		text: 'radar saved me so many times on streets. seeing the third party before they swing in is huge in trios. boxes + radar combo is clean for sandraiders cheats',
		short: 'radar saved me so many times on streets. boxes + radar combo is clean',
		slug: 'sand-raiders-radar-hack-review-vanlifewz',
		seoTitle: 'Radar Hack Review by @vanLifeEFT — 5/5 | {brand}',
		seoDescription:
			'Tarkov radar hack review from @vanLifeEFT: 5/5 for 2D radar on Streets and spotting third parties in trios with ESP boxes.',
		date: '2026-07-28',
		tag: 'Radar',
	}),
	reviewMeta({
		handle: 'patchDayMike',
		rating: 4,
		text: 'every cheat goes down on patch day, thats life. difference here is they actually posted on updates within a few hours last tarkov patch. was back online next morning. my old provider left me hanging for 4 days once so yeah — 24/7 support helped too',
		short: 'they posted on updates within a few hours last tarkov patch. was back online next morning',
		slug: 'warzone-ricochet-update-review-patchdaymike',
		seoTitle: '{antiCheat} Patch Review by @patchDayMike — 4/5 | {brand}',
		seoDescription:
			'Tarkov patch-day review from @patchDayMike: 4/5 for how fast {brand} posts maintenance updates and gets escape from tarkov hacks back online.',
		date: '2026-06-09',
		tag: 'Easy Anti-Cheat updates',
	}),
	reviewMeta({
		handle: 'snipezOnly_',
		rating: 5,
		text: 'bolt-action soft aim + esp for tags across woods = chef kiss. dont @ me. still undetected after the last wipe update',
		short: 'bolt-action soft aim + esp for tags across woods = chef kiss. still undetected after the last wipe',
		slug: 'warzone-sniper-soft-aim-review-snipezonly',
		seoTitle: 'Sniper Soft Aim by @snipezOnly_ — 5/5 | {brand}',
		seoDescription:
			'Tarkov sniper soft aim review from @snipezOnly_: 5/5 for the bolt-action aimbot profile paired with ESP tagging in the {brand} package.',
		date: '2026-08-01',
	}),
] as const satisfies readonly CustomerReview[];

export const customerReviewStats = {
	averageRating: 4.4,
	totalCount: customerReviews.length,
} as const;
