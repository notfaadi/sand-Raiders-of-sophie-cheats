#!/usr/bin/env node
/** Adapt pages-en.mjs and pages-i18n.mjs from Warzone source. */
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.resolve(ROOT, '..', 'amansand');

const REMOVE_PAGE_KEYS = [
	'hacks', 'cheat-download', 'mod-menu', 'soft-aim', 'best-cheats',
	'aimbot-hack', 'esp-hack', 'unlock-all',
];

const REPLACEMENTS = [
	['warzone-esp', 'warzone-esp'],
	['warzone-aimbot', 'warzone-aimbot'],
	["'ricochet'", "'ricochet'"],
	['ricochet-bypass', 'ricochet-bypass'],
	['undetected-warzone-cheats', 'undetected-warzone-cheats'],
	['warzone-wallhack', 'warzone-wallhack'],
	['warzone-radar-hack', 'warzone-radar-hack'],
	['warzone-cheats-2026', 'warzone-cheats-2026'],
	['call-of-duty-warzone-cheats', 'call-of-duty-warzone-cheats'],
	['call-of-duty-warzone', 'warzone'],
	['Call of Duty: Warzone', 'Call of Duty: Warzone'],
	['Call of Duty Warzone', 'Call of Duty: Warzone'],
	['Warzone Cheats', 'Warzone Cheats'],
	['Warzone cheats', 'Warzone cheats'],
	['Warzone cheat', 'Warzone cheat'],
	['Warzone ESP', 'Call of Duty: Warzone ESP'],
	['Warzone Aimbot', 'Call of Duty: Warzone Aimbot'],
	['Warzone wallhack', 'Call of Duty: Warzone wallhack'],
	['Warzone radar', 'Call of Duty: Warzone radar'],
	['Warzone firefights', 'Call of Duty: Warzone firefights'],
	['Warzone combat', 'Call of Duty: Warzone combat'],
	['Warzone patches', 'Call of Duty: Warzone patches'],
	['Warzone updates', 'Call of Duty: Warzone updates'],
	['Warzone setup', 'Call of Duty: Warzone setup'],
	['Warzone license', 'Call of Duty: Warzone license'],
	['Warzone licenses', 'Call of Duty: Warzone licenses'],
	['Warzone sessions', 'Call of Duty: Warzone sessions'],
	['in Warzone', 'in Call of Duty: Warzone'],
	['for Warzone', 'for Call of Duty: Warzone'],
	['Warzone on', 'Call of Duty: Warzone on'],
	['Warzone or', 'Call of Duty: Warzone or'],
	['Warzone\'s', 'Call of Duty: Warzone\'s'],
	['Warzone ', 'Call of Duty: Warzone '],
	['Ricochet anti-cheat', 'Ricochet anti-cheat'],
	['Ricochet maintenance', 'Ricochet maintenance'],
	['Ricochet bypass', 'Ricochet bypass'],
	['Ricochet Bypass', 'Ricochet Bypass'],
	['Ricochet', 'Ricochet anti-cheat'],
	['ricochet', 'ricochet'],
	['support@warzonescheats.net', 'support@warzonescheats.net'],
	['Verdansk, Urzikstan, and Rebirth Island', 'Verdansk, Urzikstan, and Rebirth Island'],
	['Verdansk, Urzikstan and Rebirth Island', 'Verdansk, Urzikstan and Rebirth Island'],
	['gulag fights', 'gulag fights'],
	['gulag fight', 'gulag fight'],
	['gulag rounds', 'gulag rounds'],
	['gulag', 'gulag'],
	['operators', 'players'],
	['operator', 'player'],
	['Operators', 'Players'],
	['Operator', 'Player'],
	['UAV', 'UAV'],
	['Resurgence and Battle Royale', 'Resurgence and Battle Royale'],
	['BR and Resurgence', 'BR and Resurgence'],
	['BR & Resurgence', 'BR & Resurgence'],
	['loadout drops', 'loadout drops'],
	['loadout drop', 'loadout drop'],
	['contracts', 'chests'],
	['contract', 'chest'],
	['Activision\'s', 'Epic Games\''],
	['Call of Duty combat pace', 'Call of Duty: Warzone combat pace'],
	['COD', 'Call of Duty: Warzone'],
];

function apply(content) {
	let r = content;
	for (const [a, b] of REPLACEMENTS) r = r.split(a).join(b);
	return r;
}

function removePageObjectBlocks(content) {
	let r = content;
	for (const key of REMOVE_PAGE_KEYS) {
		const quoted = `'${key}'`;
		const patterns = [
			new RegExp(`\\t${quoted}: \\{[\\s\\S]*?\\},\\n`, 'g'),
			new RegExp(`\\t${key.replace(/-/g, '\\-')}: \\{[\\s\\S]*?\\},\\n`, 'g'),
		];
		for (const p of patterns) r = r.replace(p, '');
	}
	return r;
}

async function adaptFile(rel) {
	let content = await readFile(path.join(SRC, rel), 'utf8');
	content = apply(content);
	content = removePageObjectBlocks(content);
	await writeFile(path.join(ROOT, rel), content);
	console.log('Adapted', rel);
}

await adaptFile('scripts/i18n-data/pages-en.mjs');
await adaptFile('scripts/i18n-data/pages-i18n.mjs');
await adaptFile('scripts/i18n-data/phrases.mjs');

// Patch phrases KW object
let phrases = await readFile(path.join(ROOT, 'scripts/i18n-data/phrases.mjs'), 'utf8');
phrases = phrases.replace(
	/const KW = \{[\s\S]*?\};/,
	`const KW = {
	esp: 'ESP wallhack',
	radar: 'radar hack',
	aimbot: 'Aimbot',
	product: 'Warzone Cheats',
	game: 'Call of Duty: Warzone',
	checkout: 'Zadeyo',
	ricochet: 'Ricochet anti-cheat',
};`,
);
phrases = phrases.replace(/KW\.ricochet/g, 'KW.ricochet');
phrases = phrases.replace(/maps: '[^']*'/g, "maps: 'Verdansk, Urzikstan, and Rebirth Island'");
await writeFile(path.join(ROOT, 'scripts/i18n-data/phrases.mjs'), phrases);

console.log('Done adapting i18n pages.');
