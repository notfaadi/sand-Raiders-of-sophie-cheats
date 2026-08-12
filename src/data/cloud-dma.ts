import { fillBrandTokens, seoDescription, seoTitle } from './brand';
import { brandCopy } from './site-core';
import type { SimplePageCopy, SimpleSection } from './i18n/simple-pages';

function page(copy: SimplePageCopy): SimplePageCopy {
	return {
		...copy,
		title: copy.title.length <= 70 ? copy.title : copy.title.slice(0, 70),
		description: seoDescription(copy.description),
		intro: fillBrandTokens(copy.intro),
		sections: copy.sections.map((section: SimpleSection) => ({
			...section,
			h2: fillBrandTokens(section.h2),
			paragraphs: section.paragraphs.map(fillBrandTokens),
			list: section.list?.map(fillBrandTokens),
		})),
	};
}

export type CloudDmaPageId =
	| 'about'
	| 'setup'
	| 'hardware'
	| 'status'
	| 'plans';

/** English paths for Cloud DMA service pages (root routes, no /en/ prefix). */
export const cloudDmaPaths: Record<CloudDmaPageId, string> = {
	about: '/cloud-dma/',
	setup: '/cloud-dma-setup/',
	hardware: '/cloud-dma-hardware/',
	status: '/cloud-dma-status/',
	plans: '/cloud-dma-plans/',
};

export const cloudDmaPages: Record<CloudDmaPageId, SimplePageCopy> = {
	about: page({
		title: seoTitle('Cloud DMA'),
		description:
			'What Cloud DMA means in {primaryKeyword} for Windows PC. How it differs from kernel-only tools, and why players pick it with ESP and aimbot.',
		h1: 'Cloud DMA',
		intro: 'Plain-language look at Cloud DMA in {brand} for {game} on Windows PC.',
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'Cloud DMA setup',
		ctaSecondaryHref: '/cloud-dma-setup/',
		galleryTitle: 'In-game look',
		sections: [
			{
				h2: 'What it is',
				paragraphs: [
					'Cloud DMA is how {brand} runs part of the cheat stack off your main game PC. Your Windows PC still plays {game}. The heavy work sits on a remote DMA path instead of a kernel-only inject on the same box.',
				],
				list: [
					'Built for Windows 10 / 11',
					'Pairs with ESP, soft aim, and radar',
					'Support can help after you buy',
				],
			},
			{
				h2: 'Why players use it',
				paragraphs: [
					'Many buyers switch after a kernel-only tool got flagged after an {antiCheat} patch. Cloud DMA keeps the same features with a different risk profile and clearer setup help.',
				],
				list: [
					'Less reliance on a single local kernel driver',
					'Status notes after game or {antiCheat} patches',
					'<a href="/reviews/">Cloud DMA buyer reviews</a>',
				],
			},
			{
				h2: 'Related services',
				paragraphs: ['Short guides for setup, hardware, status, and plans.'],
				list: [
					'<a href="/cloud-dma-setup/">Cloud DMA setup</a>',
					'<a href="/cloud-dma-hardware/">Hardware guidance</a>',
					'<a href="/cloud-dma-status/">Status & maintenance</a>',
					'<a href="/cloud-dma-plans/">Lifetime vs monthly</a>',
				],
			},
		],
	}),
	setup: page({
		title: seoTitle('Cloud DMA Setup'),
		description:
			'Cloud DMA setup help for {primaryKeyword} on Windows PC. Activate your license, follow short steps, and get support with your order ID.',
		h1: 'Cloud DMA setup',
		intro: 'Install help for Cloud DMA with {brand} after you buy. Keep steps short and check status first.',
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'Full setup guide',
		ctaSecondaryHref: '/setup/',
		galleryTitle: 'In-game look',
		sections: [
			{
				h2: 'Before you start',
				paragraphs: ['Buy a plan first. You get a license by email.'],
				list: [
					'Windows 10 / 11 PC ready',
					'Order email and license key',
					'Read <a href="/cloud-dma/">About Cloud DMA</a> if you are new',
				],
			},
			{
				h2: 'Setup flow',
				paragraphs: [
					'Follow the delivery email, then use our general setup page. Cloud DMA adds a short remote path check before you launch {game}.',
				],
				list: [
					'Download from your delivery email',
					'Paste your license key',
					'Confirm Cloud DMA is linked',
					'Launch {game} on Windows PC',
				],
			},
			{
				h2: 'If something fails',
				paragraphs: ['Check Status after a patch. Email {email} with your order ID.'],
				list: [
					'<a href="/cloud-dma-status/">Cloud DMA status</a>',
					'<a href="/updates/">Product status</a>',
					'<a href="/support/">Support</a>',
				],
			},
		],
	}),
	hardware: page({
		title: seoTitle('Cloud DMA Hardware'),
		description:
			'High-level Cloud DMA hardware guidance for {primaryKeyword} on Windows PC. What you need, what we help with, and what stays on support chat.',
		h1: 'Cloud DMA hardware',
		intro: 'High-level hardware notes for Cloud DMA with {brand}. Marketing-level guidance only — detailed wiring stays with support after purchase.',
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'Cloud DMA setup',
		ctaSecondaryHref: '/cloud-dma-setup/',
		galleryTitle: 'In-game look',
		sections: [
			{
				h2: 'What you need',
				paragraphs: [
					'Cloud DMA expects a normal Windows gaming PC for {game}, plus the DMA path we assign with your license. You do not need to reverse-engineer anything yourself.',
				],
				list: [
					'Windows 10 / 11 game PC',
					'Stable internet for the cloud path',
					'License from Store after checkout',
				],
			},
			{
				h2: 'What we help with',
				paragraphs: [
					'After you buy, support walks you through the approved parts list and connection checklist for your order. We keep that in Discord or email — not as public exploit steps.',
				],
				list: [
					'Approved hardware checklist',
					'Fit check for your PC case / slots',
					'Link help when the cloud path fails',
				],
			},
			{
				h2: 'What we do not publish',
				paragraphs: [
					'We do not post firmware dumps, bypass PoCs, or kernel exploit guides on this site. Buy, then open Support with your order ID.',
				],
				list: [
					'<a href="/support/">Contact support</a>',
					'<a href="/cloud-dma/">About Cloud DMA</a>',
					'<a href="/faq/">FAQ</a>',
				],
			},
		],
	}),
	status: page({
		title: seoTitle('Cloud DMA Status'),
		description:
			'Cloud DMA status for {primaryKeyword} after {game} or {antiCheat} patches. Check before you queue so you stay on a current build.',
		h1: 'Cloud DMA status',
		intro: 'Check Cloud DMA health after a {game} or {antiCheat} patch before you play.',
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'Product status',
		ctaSecondaryHref: '/updates/',
		galleryTitle: 'In-game look',
		sections: [
			{
				h2: 'After a patch',
				paragraphs: [
					'Big {game} or {antiCheat} updates can pause Cloud DMA until we rebuild. Wait for our note, then launch. Do not play on an old build.',
				],
				list: [
					'Read the latest Status note',
					'Confirm Cloud DMA is live again',
					'Then queue on Windows PC',
				],
			},
			{
				h2: 'What we maintain',
				paragraphs: [
					'Active monthly and lifetime licenses get Cloud DMA rebuilds with the rest of the {brand} package — ESP, soft aim, and radar.',
				],
				list: [
					'<a href="/updates/">Full status page</a>',
					'<a href="/eac-bypass/">{antiCheat} maintenance</a>',
					'<a href="/undetected-sand-raiders-cheats/">Undetected guide</a>',
				],
			},
			{
				h2: 'Need help',
				paragraphs: ['Email {email} with your order ID if Cloud DMA stays down after a posted rebuild.'],
				list: ['<a href="/support/">Support</a>', '<a href="/cloud-dma-setup/">Setup help</a>'],
			},
		],
	}),
	plans: page({
		title: seoTitle('Cloud DMA Plans'),
		description:
			'Cloud DMA on monthly or lifetime {primaryKeyword} plans for Windows PC. Same features on both — pick the billing that fits you.',
		h1: 'Cloud DMA plans',
		intro: 'Cloud DMA is included with {brand} plans. Same features on monthly and lifetime.',
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'Open store',
		ctaSecondaryHref: '/pricing/',
		galleryTitle: 'In-game look',
		sections: [
			{
				h2: 'What both plans include',
				paragraphs: ['Full package access on Windows PC, including Cloud DMA.'],
				list: [
					'ESP, soft aim, and radar',
					'Cloud DMA path while active',
					'Patch rebuilds while your license is active',
				],
			},
			{
				h2: 'Monthly vs lifetime',
				paragraphs: [
					'Monthly is flexible if you play in short seasons. Lifetime is a one-time buy if you stay on {game} long term — many Cloud DMA buyers prefer it.',
				],
				list: [
					'Monthly — renew each cycle',
					'Lifetime — one payment, rebuilds while we support the product',
					'<a href="/pricing/">Compare prices on Store</a>',
				],
			},
			{
				h2: 'Before checkout',
				paragraphs: ['Read status and refunds if you need them.'],
				list: [
					'<a href="/cloud-dma-status/">Cloud DMA status</a>',
					'<a href="/refund-policy/">Refund policy</a>',
					'<a href="/faq/">FAQ</a>',
				],
			},
		],
	}),
};

export const cloudDmaNavLinks = [
	{ label: 'Cloud DMA', href: cloudDmaPaths.about },
	{ label: 'Cloud DMA setup', href: cloudDmaPaths.setup },
	{ label: 'Hardware', href: cloudDmaPaths.hardware },
	{ label: 'Cloud DMA status', href: cloudDmaPaths.status },
	{ label: 'Cloud DMA plans', href: cloudDmaPaths.plans },
] as const;
