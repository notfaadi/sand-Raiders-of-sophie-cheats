#!/usr/bin/env node
/** Fix remaining i18n key mismatches and ui-strings. */
import { readFile, writeFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.resolve(ROOT, '..', 'amansand');

const UI_REPLACEMENTS = [
	['Warzone Cheats', 'Warzone Cheats'],
	['Warzone cheats', 'Warzone cheats'],
	['Warzone Cheats', 'Warzone Cheats'],
	['Call of Duty: Warzone', 'Call of Duty: Warzone'],
	['Call of Duty Warzone', 'Call of Duty: Warzone'],
	['Call of Duty', 'Call of Duty: Warzone'],
	['Warzone PC', 'Call of Duty: Warzone PC'],
	['for Warzone', 'for Call of Duty: Warzone'],
	['Warzone ', 'Call of Duty: Warzone '],
	['warzone ', 'warzone '],
	['Ricochet maintenance', 'Ricochet maintenance'],
	['Ricochet anti-cheat', 'Ricochet anti-cheat'],
	['Ricochet', 'Ricochet anti-cheat'],
	['operatorEsp', 'playerEsp'],
	['gulagFight', 'rebootFight'],
	['alMazrah', 'battleRoyaleIsland'],
	['operators', 'players'],
	['operator', 'player'],
	['Operators', 'Players'],
	['Operator', 'Player'],
	['Al Mazrah', 'Verdansk'],
	['Verdansk', 'Verdansk'],
	['Resurgence', 'Resurgence'],
	['gulag', 'gulag'],
	['warzonescheats.net', 'warzonescheats.net'],
	['Trucos Warzone', 'Trucos Call of Duty: Warzone'],
	['Triches Warzone', 'Triches Call of Duty: Warzone'],
	['Cheats Warzone', 'Cheats Call of Duty: Warzone'],
];

function apply(content) {
	let r = content;
	for (const [a, b] of UI_REPLACEMENTS) r = r.split(a).join(b);
	return r;
}

// Rebuild ui-strings from clean source
for (const file of ['ui-strings-part1.mjs', 'ui-strings-part2.mjs']) {
	let content = await readFile(path.join(SRC, 'scripts/i18n-data', file), 'utf8');
	content = apply(content);
	await writeFile(path.join(ROOT, 'scripts/i18n-data', file), content);
	console.log('Fixed', file);
}

// Fix pages-en ricochet key
let pagesEn = await readFile(path.join(ROOT, 'scripts/i18n-data/pages-en.mjs'), 'utf8');
pagesEn = pagesEn.replace(/\tricochet: \{/, "\t'ricochet': {");
pagesEn = pagesEn.replace(/Call of Duty: Warzone Warzone/g, 'Call of Duty: Warzone');
pagesEn = pagesEn.replace(/for Call of Duty: Warzone Warzone/g, 'for Call of Duty: Warzone');
await writeFile(path.join(ROOT, 'scripts/i18n-data/pages-en.mjs'), pagesEn);

// Fix pages-i18n
let pagesI18n = await readFile(path.join(ROOT, 'scripts/i18n-data/pages-i18n.mjs'), 'utf8');
pagesI18n = apply(pagesI18n);
pagesI18n = pagesI18n.replace(/'ricochet'/g, "'ricochet'");
pagesI18n = pagesI18n.replace(/ricochet:/g, "'ricochet':");
await writeFile(path.join(ROOT, 'scripts/i18n-data/pages-i18n.mjs'), pagesI18n);

// Fix generate-i18n pages count
let gen = await readFile(path.join(ROOT, 'scripts/generate-i18n-content.mjs'), 'utf8');
gen = gen.replace('Pages per locale: 25', 'Pages per locale: 17');
await writeFile(path.join(ROOT, 'scripts/generate-i18n-content.mjs'), gen);

console.log('Fixed i18n keys.');
