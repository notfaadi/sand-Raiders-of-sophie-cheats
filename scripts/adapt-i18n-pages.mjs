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
	['sand-raiders-esp', 'sand-raiders-esp'],
	['sand-raiders-aimbot', 'sand-raiders-aimbot'],
	["'eac-bypass'", "'eac-bypass'"],
	['eac-bypass', 'eac-bypass'],
	['undetected-sand-raiders-cheats', 'undetected-sand-raiders-cheats'],
	['sand-raiders-wallhack', 'sand-raiders-wallhack'],
	['sand-raiders-radar-hack', 'sand-raiders-radar-hack'],
	['sand-raiders-cheats-2026', 'sand-raiders-cheats-2026'],
	['call-of-duty-warzone-cheats', 'call-of-duty-warzone-cheats'],
	['call-of-duty-warzone', 'warzone'],
	['Call of Duty: Warzone', 'Call of Duty: Warzone'],
	['Call of Duty Warzone', 'Call of Duty: Warzone'],
	['Sand Raiders Cheats', 'Sand Raiders Cheats'],
	['Sand Raiders cheats', 'Sand Raiders cheats'],
	['Sand Raiders cheat', 'Sand Raiders cheat'],
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
	['Easy Anti-Cheat', 'Easy Anti-Cheat'],
	['Easy Anti-Cheat maintenance', 'Easy Anti-Cheat maintenance'],
	['EAC bypass', 'EAC bypass'],
	['EAC Bypass', 'EAC Bypass'],
	['Easy Anti-Cheat', 'Easy Anti-Cheat'],
	['eac-bypass', 'eac-bypass'],
	['support@warzonescheats.net', 'support@warzonescheats.net'],
	['the dunes, ruins, and extract points', 'the dunes, ruins, and extract points'],
	['the dunes, ruins and extract points', 'the dunes, ruins and extract points'],
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
	product: 'Sand Raiders Cheats',
	game: 'Call of Duty: Warzone',
	checkout: 'Zadeyo',
	ricochet: 'Easy Anti-Cheat',
};`,
);
phrases = phrases.replace(/KW\.ricochet/g, 'KW.ricochet');
phrases = phrases.replace(/maps: '[^']*'/g, "maps: 'the dunes, ruins, and extract points'");
await writeFile(path.join(ROOT, 'scripts/i18n-data/phrases.mjs'), phrases);

console.log('Done adapting i18n pages.');
