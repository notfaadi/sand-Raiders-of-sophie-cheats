#!/usr/bin/env node
/** Final pass: fix remaining Warzone references in src/. */
import { readFile, writeFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'src');
const REMOVE_PAGE_IDS = ['hacks', 'cheat-download', 'mod-menu', 'soft-aim', 'best-cheats', 'aimbot-hack', 'esp-hack', 'unlock-all'];

const REPLACEMENTS = [
	['warzoneImages', 'warzoneImages'],
	["from '../data/warzone'", "from '../data/warzone'"],
	["from './warzone'", "from './warzone'"],
	['/undetected-sand-raiders-cheats/', '/undetected-sand-raiders-cheats/'],
	['/sand-raiders-wallhack/', '/sand-raiders-wallhack/'],
	['/sand-raiders-radar-hack/', '/sand-raiders-radar-hack/'],
	['/eac-bypass/', '/eac-bypass/'],
	['/sand-raiders-cheats-2026/', '/sand-raiders-cheats-2026/'],
	['/sand-raiders-aimbot/', '/sand-raiders-aimbot/'],
	['/sand-raiders-esp/', '/sand-raiders-esp/'],
	['/sand-raiders-hacks/', '/sand-raiders-esp/'],
	['Sand Raiders Cheats', 'Sand Raiders Cheats'],
	['Sand Raiders cheats', 'Sand Raiders cheats'],
	['Warzone wallhack', 'Call of Duty: Warzone wallhack'],
	['Warzone radar', 'Call of Duty: Warzone radar'],
	['Warzone Aimbot', 'Call of Duty: Warzone Aimbot'],
	['Warzone ESP', 'Call of Duty: Warzone ESP'],
	['Call of Duty: Warzone', 'Call of Duty: Warzone'],
	['Easy Anti-Cheat', 'Easy Anti-Cheat'],
	['eac-bypass', 'eac-bypass'],
	['warzonescheats.net', 'warzonescheats.net'],
	['operatorEsp', 'playerEsp'],
	['gulagFight', 'rebootFight'],
	['alMazrah', 'battleRoyaleIsland'],
];

async function walk(dir, files = []) {
	for (const entry of await readdir(dir, { withFileTypes: true })) {
		const full = path.join(dir, entry.name);
		if (entry.isDirectory()) await walk(full, files);
		else if (/\.(ts|astro|js)$/.test(entry.name)) files.push(full);
	}
	return files;
}

function apply(content) {
	let r = content;
	for (const [a, b] of REPLACEMENTS) r = r.split(a).join(b);
	for (const id of REMOVE_PAGE_IDS) {
		r = r.replace(new RegExp(`\\t'${id}':[^\\n]*\\n`, 'g'), '');
		r = r.replace(new RegExp(`\\{ label:[^}]*href: '/[^']*${id}[^']*/' \\},\\n`, 'g'), '');
	}
	return r;
}

for (const file of await walk(ROOT)) {
	const orig = await readFile(file, 'utf8');
	const updated = apply(orig);
	if (updated !== orig) {
		await writeFile(file, updated);
		console.log('Fixed', path.relative(ROOT, file));
	}
}
