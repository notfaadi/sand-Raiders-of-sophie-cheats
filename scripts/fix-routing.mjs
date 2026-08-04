#!/usr/bin/env node
/** Rebuild routing.ts and constants.mjs from clean Warzone source. */
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.resolve(ROOT, '..', 'amansand');

const REMOVE_IDS = [
	'hacks', 'cheat-download', 'mod-menu', 'soft-aim', 'best-cheats',
	'aimbot-hack', 'esp-hack', 'unlock-all',
];

const REPLACEMENTS = [
	['warzone-esp', 'warzone-esp'],
	['warzone-aimbot', 'warzone-aimbot'],
	['ricochet', 'ricochet'],
	['undetected-warzone-cheats', 'undetected-warzone-cheats'],
	['warzone-wallhack', 'warzone-wallhack'],
	['warzone-radar-hack', 'warzone-radar-hack'],
	['warzone-cheats-2026', 'warzone-cheats-2026'],
	['ricochet-bypass', 'ricochet-bypass'],
	['warzonescheats.net', 'warzonescheats.net'],
	['trucos-warzone', 'trucos-warzone'],
	['triche-warzone', 'triche-warzone'],
	['warzone-cheats', 'call-of-duty-warzone-cheats'],
	['cheats-warzone', 'cheats-warzone'],
	['trucchi-warzone', 'trucchi-warzone'],
	['cheaty-warzone', 'cheaty-warzone'],
	['chity-warzone', 'chity-warzone'],
	['chitov-warzone', 'chitov-warzone'],
	['chitiv-warzone', 'chitiv-warzone'],
	['cheatow-warzone', 'cheatow-warzone'],
	['hile-warzone', 'hile-warzone'],
	['warzone-hile', 'warzone-hile'],
	['warzone-esp-chity', 'warzone-esp-chity'],
	['warzone-aimbot-chity', 'warzone-aimbot-chity'],
	['unentdeckte-warzone-cheats', 'unentdeckte-call-of-duty-warzone-cheats'],
	['cheats-warzone-indetectaveis', 'cheats-warzone-indetectaveis'],
	['trucchi-warzone-indetectabili', 'trucchi-warzone-indetectabili'],
	['niewykrywalne-cheats-warzone', 'niewykrywalne-cheats-warzone'],
	['nedecektiruemye-chity-warzone', 'nedecektiruemye-chity-warzone'],
	['tespit-edilemeyen-warzone-hileleri', 'tespit-edilemeyen-warzone-hileleri'],
	['nedecektovani-chity-warzone', 'nedecektovani-chity-warzone'],
	['cheats-warzone-nedetectabile', 'cheats-warzone-nedetectabile'],
	['basta-warzone-cheats', 'basta-call-of-duty-warzone-cheats'],
	['ricochet-bypass-trucos-warzone', 'ricochet-bypass-trucos-warzone'],
	['ricochet-bypass-triche-warzone', 'ricochet-bypass-triche-warzone'],
	['ricochet-bypass-cheats-warzone', 'ricochet-bypass-cheats-warzone'],
	['ricochet-bypass-chity-warzone', 'ricochet-bypass-chity-warzone'],
	['ricochet-bypass-warzone', 'ricochet-bypass'],
];

function apply(content) {
	let r = content;
	for (const [a, b] of REPLACEMENTS) r = r.split(a).join(b);
	return r;
}

function removePageBlocks(content, pageId) {
	const keyPatterns = [
		new RegExp(`\\t${pageId.replace(/-/g, '\\-')}: \\{[\\s\\S]*?\\},\\n`, 'g'),
		new RegExp(`\\t'${pageId.replace(/-/g, '\\-')}': \\{[\\s\\S]*?\\},\\n`, 'g'),
	];
	let r = content;
	for (const p of keyPatterns) r = r.replace(p, '');
	// Remove from PageId union
	r = r.replace(new RegExp(`\\s*\\|\\s*'${pageId}'`, 'g'), '');
	// Remove from englishPaths single line
	r = r.replace(new RegExp(`\\t${pageId.replace(/-/g, '\\-')}: '[^']*',\\n`, 'g'), '');
	r = r.replace(new RegExp(`\\t'${pageId.replace(/-/g, '\\-')}': '[^']*',\\n`, 'g'), '');
	return r;
}

async function fixRouting() {
	let content = await readFile(path.join(SRC, 'src/data/i18n/routing.ts'), 'utf8');
	content = apply(content);
	for (const id of REMOVE_IDS) content = removePageBlocks(content, id);
	// Fix ricochet key in englishPaths
	content = content.replace(/\tricochet: '/, "\t'ricochet': '");
	await writeFile(path.join(ROOT, 'src/data/i18n/routing.ts'), content);
	console.log('Fixed routing.ts');
}

async function fixConstants() {
	const heroImages = `/** Hero image per page topic — keyword-rich call-of-duty-warzone-cheats paths. */
export const HERO_IMAGES = {
	home: '/images/call-of-duty-warzone-cheats-hero.webp',
	'warzone-esp': '/images/call-of-duty-warzone-cheats-esp-wallhack.webp',
	'warzone-aimbot': '/images/call-of-duty-warzone-cheats-aimbot-combat.webp',
	features: '/images/call-of-duty-warzone-cheats-package.webp',
	pricing: '/images/call-of-duty-warzone-cheats-cover.webp',
	setup: '/images/warzone-loadout-builder.webp',
	updates: '/images/warzone-header-art.webp',
	faq: '/images/warzone-squad-fight.webp',
	support: '/images/call-of-duty-warzone-cheats-package.webp',
	undetected: '/images/warzone-battle-royale-combat.webp',
	wallhack: '/images/call-of-duty-warzone-cheats-esp-wallhack.webp',
	radar: '/images/warzone-player-esp.webp',
	'ricochet': '/images/warzone-reboot-van-fight.webp',
	'cheats-2026': '/images/call-of-duty-warzone-cheats-hero.webp',
	privacy: '/images/call-of-duty-warzone-cheats-aimbot-combat.webp',
	refund: '/images/call-of-duty-warzone-cheats-cover.webp',
	terms: '/images/call-of-duty-warzone-cheats-package.webp',
};`;

	let content = await readFile(path.join(SRC, 'scripts/i18n-data/constants.mjs'), 'utf8');
	content = apply(content);
	for (const id of REMOVE_IDS) {
		content = content.replace(new RegExp(`'${id}',\\s*`, 'g'), '');
	}
	content = content.replace(
		/export const PAGE_IDS = \[[\s\S]*?\];/,
		`export const PAGE_IDS = [\n\t'home', 'warzone-esp', 'warzone-aimbot', 'features', 'pricing', 'setup',\n\t'updates', 'faq', 'support', 'undetected', 'wallhack', 'radar', 'ricochet',\n\t'cheats-2026', 'privacy', 'refund', 'terms',\n];`,
	);
	content = content.replace(/\/\*\* Hero image[\s\S]*?};/, heroImages);
	content = content.replace(
		/export type PageId = [^;]+;/,
		"export type PageId = 'home' | 'warzone-esp' | 'warzone-aimbot' | 'features' | 'pricing' | 'setup' | 'updates' | 'faq' | 'support' | 'undetected' | 'wallhack' | 'radar' | 'ricochet' | 'cheats-2026' | 'privacy' | 'refund' | 'terms';",
	);
	content = content.replace(/operatorEsp/g, 'playerEsp');
	content = content.replace(/gulagFight/g, 'rebootFight');
	content = content.replace(/alMazrah/g, 'battleRoyaleIsland');
	await writeFile(path.join(ROOT, 'scripts/i18n-data/constants.mjs'), content);
	console.log('Fixed constants.mjs');
}

await fixRouting();
await fixConstants();
