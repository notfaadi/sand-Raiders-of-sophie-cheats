#!/usr/bin/env node
/**
 * One-time migration: Warzone Hacks → Sand Raiders Cheats.
 * Run from project root: node scripts/adapt-sand-raiders.mjs
 */
import { readFile, writeFile, readdir, rename, access } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const RENAME_PAGE_DIRS = [
	['warzone-aimbot', 'sand-raiders-aimbot'],
	['warzone-esp', 'sand-raiders-esp'],
	['warzone-wallhack', 'sand-raiders-wallhack'],
	['warzone-radar-hack', 'sand-raiders-radar-hack'],
	['undetected-warzone-cheats', 'undetected-sand-raiders-cheats'],
	['warzone-cheats-2026', 'sand-raiders-cheats-2026'],
	['ricochet-bypass', 'eac-bypass'],
	['warzone-hacks', 'sand-raiders-hacks'],
	['warzone-cheat-download', 'sand-raiders-cheat-download'],
	['warzone-mod-menu', 'sand-raiders-mod-menu'],
	['warzone-soft-aim', 'sand-raiders-soft-aim'],
	['best-warzone-cheats', 'best-sand-raiders-cheats'],
	['warzone-aimbot-hack', 'sand-raiders-aimbot-hack'],
	['warzone-esp-hack', 'sand-raiders-esp-hack'],
	['warzone-unlock-all', 'sand-raiders-unlock-all'],
];

const REPLACEMENTS = [
	['warzonehacks.net', 'sandraiderscheats.net'],
	['support@warzonehacks.net', 'support@sandraiderscheats.net'],
	['/products/warzone', '/products/sand-raiders'],
	['undetected-warzone-cheats', 'undetected-sand-raiders-cheats'],
	['warzone-cheats-2026', 'sand-raiders-cheats-2026'],
	['warzone-radar-hack', 'sand-raiders-radar-hack'],
	['warzone-wallhack', 'sand-raiders-wallhack'],
	['ricochet-bypass', 'eac-bypass'],
	['warzone-cheat-download', 'sand-raiders-cheat-download'],
	['warzone-mod-menu', 'sand-raiders-mod-menu'],
	['warzone-soft-aim', 'sand-raiders-soft-aim'],
	['best-warzone-cheats', 'best-sand-raiders-cheats'],
	['warzone-unlock-all', 'sand-raiders-unlock-all'],
	['warzone-aimbot-hack', 'sand-raiders-aimbot-hack'],
	['warzone-esp-hack', 'sand-raiders-esp-hack'],
	['warzone-hacks', 'sand-raiders-hacks'],
	['warzone-aimbot', 'sand-raiders-aimbot'],
	['warzone-esp', 'sand-raiders-esp'],
	["'ricochet'", "'eac-bypass'"],
	['| ricochet', '| eac-bypass'],
	['Warzone Hacks', 'Sand Raiders Cheats'],
	['Warzone Cheats', 'Sand Raiders Cheats'],
	['Warzone cheats', 'Sand Raiders cheats'],
	['Warzone cheat', 'Sand Raiders cheat'],
	['WarzoneCheatsSite', 'SandRaidersCheatsSite'],
	['Warzone Intel', 'Sand Raiders Intel'],
	['Ricochet anti-cheat', 'Easy Anti-Cheat'],
	['Ricochet maintenance', 'Easy Anti-Cheat maintenance'],
	['Ricochet bypass', 'EAC bypass'],
	['Ricochet Bypass', 'EAC Bypass'],
	['Ricochet patches', 'Easy Anti-Cheat patches'],
	['Ricochet patch', 'Easy Anti-Cheat patch'],
	['Ricochet updates', 'Easy Anti-Cheat updates'],
	['Ricochet update', 'Easy Anti-Cheat update'],
	['after Ricochet', 'after Easy Anti-Cheat'],
	['RICOCHET', 'Easy Anti-Cheat'],
	['Ricochet', 'Easy Anti-Cheat'],
	['warzone hacks', 'sand raiders cheats'],
	['warzone cheats', 'sand raiders cheats'],
	['Verdansk, Urzikstan, and Rebirth Island', 'the dunes, ruins, and extract points'],
	['Verdansk, Urzikstan and Rebirth Island', 'the dunes, ruins and extract points'],
	['/images/', '/img/'],
	['Allow: /images/', 'Allow: /img/'],
	['warzone-hacks-logo', 'sand-raiders-logo'],
	['hero-banner.webp', 'hero-banner.webp'],
];

const SKIP_DIRS = new Set(['node_modules', 'dist', '.git', '.astro', 'img']);
const TEXT_EXT = new Set([
	'.ts',
	'.tsx',
	'.astro',
	'.js',
	'.mjs',
	'.cjs',
	'.json',
	'.md',
	'.txt',
	'.toml',
	'.html',
	'.css',
	'.svg',
	'.webmanifest',
]);

async function exists(p) {
	try {
		await access(p);
		return true;
	} catch {
		return false;
	}
}

async function walk(dir, out = []) {
	const entries = await readdir(dir, { withFileTypes: true });
	for (const e of entries) {
		if (SKIP_DIRS.has(e.name)) continue;
		const full = path.join(dir, e.name);
		if (e.isDirectory()) await walk(full, out);
		else if (TEXT_EXT.has(path.extname(e.name))) out.push(full);
	}
	return out;
}

function applyReplacements(text) {
	let next = text;
	for (const [from, to] of REPLACEMENTS) {
		if (next.includes(from)) next = next.split(from).join(to);
	}
	return next;
}

async function renamePages() {
	const pages = path.join(ROOT, 'src', 'pages');
	for (const [from, to] of RENAME_PAGE_DIRS) {
		const src = path.join(pages, from);
		const dest = path.join(pages, to);
		if (await exists(src)) {
			if (await exists(dest)) {
				console.log('skip rename (dest exists):', to);
				continue;
			}
			await rename(src, dest);
			console.log('renamed', from, '→', to);
		}
	}
}

async function patchFiles() {
	const files = await walk(ROOT);
	let changed = 0;
	for (const file of files) {
		// Don't rewrite this script's own replacement table into sand-raiders mid-run wrongly
		if (file.endsWith('adapt-sand-raiders.mjs')) continue;
		if (file.endsWith('adapt-warzone.mjs')) continue;
		const before = await readFile(file, 'utf8');
		const after = applyReplacements(before);
		if (after !== before) {
			await writeFile(file, after, 'utf8');
			changed++;
			console.log('patched', path.relative(ROOT, file));
		}
	}
	console.log(`patched ${changed} files`);
}

await renamePages();
await patchFiles();
console.log('Sand Raiders adapt complete');
