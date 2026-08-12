#!/usr/bin/env node
/**
 * Completes call-of-duty-warzone-cheats SEO audit: add missing pages, fix leftovers, strip Zadeyo from meta.
 * Run: node scripts/complete-seo-audit.mjs
 */
import { readFile, writeFile, mkdir, access } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const NODE = 'C:\\Program Files\\nodejs\\node.exe';

const EXTRA_PAGES = [
	{ id: 'hacks', dir: 'sand-raiders-hacks', pageId: 'hacks' },
	{ id: 'cheat-download', dir: 'sand-raiders-cheat-download', pageId: 'cheat-download' },
	{ id: 'mod-menu', dir: 'sand-raiders-mod-menu', pageId: 'mod-menu' },
	{ id: 'soft-aim', dir: 'sand-raiders-soft-aim', pageId: 'soft-aim' },
	{ id: 'best-cheats', dir: 'best-sand-raiders-cheats', pageId: 'best-cheats' },
	{ id: 'aimbot-hack', dir: 'sand-raiders-aimbot-hack', pageId: 'aimbot-hack' },
	{ id: 'esp-hack', dir: 'sand-raiders-esp-hack', pageId: 'esp-hack' },
	{ id: 'unlock-all', dir: 'sand-raiders-unlock-all', pageId: 'unlock-all' },
];

const GLOBAL_REPLACEMENTS = [
	[/warzone-warzone/g, 'warzone'],
	[/eac-bypass-warzone/g, 'eac-bypass'],
	[/Call of Duty: Warzone/g, 'Call of Duty: Warzone'],
	[/Call of Duty Warzone/g, 'Call of Duty: Warzone'],
	[/Call of Duty/g, 'Call of Duty: Warzone'],
	[/Warzone Wallhack/g, 'Call of Duty: Warzone Wallhack'],
	[/Warzone Radar Hack/g, 'Call of Duty: Warzone Radar Hack'],
	[/Warzone Cheat Features/g, 'Call of Duty: Warzone Cheat Features'],
	[/Warzone Cheat Pricing/g, 'Call of Duty: Warzone Cheat Pricing'],
	[/Warzone Cheat Setup/g, 'Call of Duty: Warzone Cheat Setup'],
	[/Warzone Cheat Status/g, 'Call of Duty: Warzone Cheat Status'],
	[/Warzone Cheat Support/g, 'Call of Duty: Warzone Cheat Support'],
	[/Warzone squad fight/g, 'Call of Duty: Warzone squad fight'],
	[/Warzone squad builder/g, 'Call of Duty: Warzone loadout builder'],
	[/Warzone store header/g, 'Call of Duty: Warzone header'],
	[/Warzone wasteland combat/g, 'Call of Duty: Warzone battle royale combat'],
	[/Warzone loadout builder/g, 'Call of Duty: Warzone loadout builder'],
	[/Warzone pricing/g, 'Call of Duty: Warzone pricing'],
	[/Warzone Easy Anti-Cheat/g, 'Call of Duty: Warzone Easy Anti-Cheat'],
	[/on Warzone/g, 'on Call of Duty: Warzone'],
	[/for Warzone/g, 'for Call of Duty: Warzone'],
	[/Warzone guides/g, 'Call of Duty: Warzone guides'],
	[/Warzone guide/g, 'Call of Duty: Warzone guide'],
	[/Warzone hileleri/g, 'Call of Duty: Warzone hileleri'],
	[/Warzone hile/g, 'Call of Duty: Warzone hile'],
	[/Warzone hileleri/g, 'Call of Duty: Warzone hileleri'],
	[/cheatów Warzone/g, 'cheatów Call of Duty: Warzone'],
	[/cheat Warzone/g, 'cheat Call of Duty: Warzone'],
	[/cheats Warzone/g, 'cheats Call of Duty: Warzone'],
	[/trucos Warzone/g, 'trucos Call of Duty: Warzone'],
	[/triche Warzone/g, 'triche Call of Duty: Warzone'],
	[/trucchi Warzone/g, 'trucchi Call of Duty: Warzone'],
	[/Wallhack Warzone/g, 'Call of Duty: Warzone Wallhack'],
	[/cheat Warzone undetected/g, 'cheat Call of Duty: Warzone undetected'],
	[/cheats Warzone undetected/g, 'cheats Call of Duty: Warzone undetected'],
	[/Verdansk beams/g, 'long-range AR beams'],
	[/Resurgence room clears/g, 'close-quarters room clears'],
	[/Verdansk and Urzikstan/g, 'Verdansk and Resurgence'],
	[/Verdansk, Urzikstan/g, 'Verdansk, Resurgence'],
	[/Battle Royale and Resurgence/g, 'Battle Royale and Resurgence'],
	[/Activision's anti-cheat/g, "Epic Games' anti-cheat"],
	[/Activision anti-cheat/g, 'Epic Games anti-cheat'],
	[/Activision ships/g, 'Epic Games ships'],
	[/Activision security/g, 'Epic Games security'],
	[/Activision bans/g, 'Epic Games bans'],
	[/Activision/g, 'Epic Games'],
	[/ricochet/gi, 'eac-bypass'],
	[/Easy Anti-Cheat/g, 'Easy Anti-Cheat'],
	[/call-of-duty-warzone-cheats/g, 'call-of-duty-warzone-cheats'],
	[/call-of-duty-warzone/g, 'warzone'],
	[/Undetected Wallhack for Call of Duty/g, 'Undetected Wallhack for Call of Duty: Warzone'],
	[/How ESP wallhack, radar, and Aimbot rebuild after Call of Duty anti-cheat/g,
		'How ESP wallhack, radar, and Aimbot rebuild after Call of Duty: Warzone anti-cheat'],
];

/** Remove Zadeyo from meta description/title strings only */
function stripZadeyoFromMeta(text) {
	return text
		.replace(/\s*[—–-]\s*checkout via Zadeyo\.?/gi, '.')
		.replace(/\s*[—–-]\s*checkout en Zadeyo\.?/gi, '.')
		.replace(/\s*[—–-]\s*checkout via Zadeyo\.?/gi, '.')
		.replace(/\s*with Zadeyo checkout\.?/gi, '.')
		.replace(/\s*via Zadeyo checkout\.?/gi, '.')
		.replace(/\s*Checkout via Zadeyo\.?/gi, '')
		.replace(/\s*Zadeyo checkout,?\s*/gi, ' ')
		.replace(/\s*Zadeyo delivery\.?/gi, 'instant digital delivery.')
		.replace(/\s*and Zadeyo delivery\.?/gi, ' and instant digital delivery.')
		.replace(/\|\s*Instant Zadeyo Delivery/g, '| Instant Digital Delivery')
		.replace(/Buy on Zadeyo/g, 'Buy Sand Raiders Cheats')
		.replace(/\s{2,}/g, ' ')
		.trim();
}

async function walkFiles(dir, exts, files = []) {
	const entries = await import('node:fs/promises').then((fs) => fs.readdir(dir, { withFileTypes: true }));
	for (const e of entries) {
		if (e.name === 'node_modules' || e.name === 'dist' || e.name === '.git') continue;
		const full = path.join(dir, e.name);
		if (e.isDirectory()) await walkFiles(full, exts, files);
		else if (exts.some((x) => e.name.endsWith(x))) files.push(full);
	}
	return files;
}

async function applyGlobalFixes() {
	const targets = await walkFiles(path.join(ROOT, 'src'), ['.ts', '.astro']);
	targets.push(
		path.join(ROOT, 'scripts', 'i18n-data', 'pages-en.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'pages-i18n.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'ui-strings-part1.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'ui-strings-part2.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'phrases.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'gallery-ui.ts'),
		path.join(ROOT, 'src', 'data', 'i18n', 'gallery-ui.ts'),
		path.join(ROOT, 'functions', '_middleware.js'),
	);

	for (const file of targets) {
		try {
			await access(file);
		} catch {
			continue;
		}
		let content = await readFile(file, 'utf8');
		const original = content;
		for (const [pattern, replacement] of GLOBAL_REPLACEMENTS) {
			content = content.replace(pattern, replacement);
		}
		if (file.endsWith('pages-en.mjs')) {
			// Strip Zadeyo from description: and title: lines
			content = content.replace(/(description:\s*['"])([^'"]+)(['"])/g, (_, pre, body, post) =>
				pre + stripZadeyoFromMeta(body) + post,
			);
			content = content.replace(/(title:\s*['"])([^'"]+)(['"])/g, (_, pre, body, post) =>
				pre + stripZadeyoFromMeta(body) + post,
			);
		}
		if (content !== original) {
			await writeFile(file, content, 'utf8');
			console.log(`Fixed: ${path.relative(ROOT, file)}`);
		}
	}
}

async function createExtraPages() {
	const template = `---
import LocalizedPage from '../../components/LocalizedPage.astro';
---

<LocalizedPage locale="en" pageId="PAGE_ID" />
`;
	for (const page of EXTRA_PAGES) {
		const dir = path.join(ROOT, 'src', 'pages', page.dir);
		await mkdir(dir, { recursive: true });
		const file = path.join(dir, 'index.astro');
		try {
			await access(file);
		} catch {
			await writeFile(file, template.replace('PAGE_ID', page.pageId), 'utf8');
			console.log(`Created page: src/pages/${page.dir}/index.astro`);
		}
	}
}

async function fixLocalesBlogUi() {
	const file = path.join(ROOT, 'src', 'data', 'i18n', 'locales.ts');
	let content = await readFile(file, 'utf8');
	content = content.replace(/Warzone guides/g, 'Call of Duty: Warzone guides');
	content = content.replace(/Warzone guide/g, 'Call of Duty: Warzone guide');
	content = content.replace(/Warzone hileleri/g, 'Call of Duty: Warzone hileleri');
	content = content.replace(/Warzone hile/g, 'Call of Duty: Warzone hile');
	content = content.replace(/cheat Warzone/g, 'cheat Call of Duty: Warzone');
	content = content.replace(/cheats Warzone/g, 'cheats Call of Duty: Warzone');
	content = content.replace(/trucos Warzone/g, 'trucos Call of Duty: Warzone');
	content = content.replace(/triche Warzone/g, 'triche Call of Duty: Warzone');
	content = content.replace(/trucchi Warzone/g, 'trucchi Call of Duty: Warzone');
	content = content.replace(/cheatów Warzone/g, 'cheatów Call of Duty: Warzone');
	content = content.replace(/читов Warzone/g, 'читов Call of Duty: Warzone');
	content = content.replace(/читів Warzone/g, 'читів Call of Duty: Warzone');
	content = content.replace(/Warzoneチート/g, 'Call of Duty: Warzoneチート');
	content = content.replace(/Warzone 치트/g, 'Call of Duty: Warzone 치트');
	content = content.replace(/Warzone作弊/g, 'Call of Duty: Warzone作弊');
	content = content.replace(/Warzone rehberleri/g, 'Call of Duty: Warzone rehberleri');
	content = content.replace(/Warzone gidsen/g, 'Call of Duty: Warzone gidsen');
	content = content.replace(/Warzone průvodce/g, 'Call of Duty: Warzone průvodce');
	content = content.replace(/Warzone guider/g, 'Call of Duty: Warzone guider');
	content = content.replace(/Warzone related/g, 'Call of Duty: Warzone related');
	content = content.replace(/Warzone ガイド/g, 'Call of Duty: Warzone ガイド');
	content = content.replace(/Warzone 가이드/g, 'Call of Duty: Warzone 가이드');
	content = content.replace(/Warzone指南/g, 'Call of Duty: Warzone指南');
	content = content.replace(/Warzone गाइड/g, 'Call of Duty: Warzone गाइड');
	content = content.replace(/Warzone panduan/g, 'Call of Duty: Warzone panduan');
	content = content.replace(/Warzone คู่มือ/g, 'Call of Duty: Warzone คู่มือ');
	content = content.replace(/Warzone hướng dẫn/g, 'Call of Duty: Warzone hướng dẫn');
	await writeFile(file, content, 'utf8');
	console.log('Fixed locales.ts blogUi');
}

console.log('=== Sand Raiders Cheats SEO completion ===\n');
await applyGlobalFixes();
await createExtraPages();
await fixLocalesBlogUi();
console.log('\nDone. Next: update routing.ts manually, then run generate:i18n, fetch:images, build:validate');
