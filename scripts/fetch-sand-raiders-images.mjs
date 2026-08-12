#!/usr/bin/env node
/**
 * Download official SAND: Raiders of Sophie Steam screenshots into public/img/
 * and emit webp + png hero assets used by the template.
 */
import { mkdir, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const IMG = path.join(ROOT, 'public', 'img');

const STEAM = 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1431300';

/** Curated set — desert mechs, combat, trampler builds (best visual variety). */
const ASSETS = [
	{
		file: 'hero-banner',
		url: `${STEAM}/library_hero.jpg`,
		width: 1920,
		height: 620,
	},
	{
		file: 'sand-raiders-logo',
		url: `${STEAM}/cb9c54133c4f0bcada158d2da8cb47575914e89d/header.jpg`,
		width: 512,
		height: 512,
		square: true,
	},
	{
		file: 'sand-raiders-esp',
		url: `${STEAM}/8e83589a795a24e544cc2c28e792ae5722145e4a/ss_8e83589a795a24e544cc2c28e792ae5722145e4a.1920x1080.jpg`,
		width: 1280,
		height: 720,
	},
	{
		file: 'sand-raiders-wallhack',
		url: `${STEAM}/4811b25ef71699a50fea6baf666e101892fbce03/ss_4811b25ef71699a50fea6baf666e101892fbce03.1920x1080.jpg`,
		width: 1280,
		height: 720,
	},
	{
		file: 'sand-raiders-aimbot',
		url: `${STEAM}/f8eb35bb25b343ba2c1ff65ebb53b455dd2d281f/ss_f8eb35bb25b343ba2c1ff65ebb53b455dd2d281f.1920x1080.jpg`,
		width: 1280,
		height: 720,
	},
	{
		file: 'sand-raiders-combat',
		url: `${STEAM}/ss_3a83f48f921ea0d674eb5aae4107174769a934cf.1920x1080.jpg`,
		width: 1280,
		height: 720,
	},
	{
		file: 'sand-raiders-radar',
		url: `${STEAM}/3f7c7729bdf2b5258f2f6f355e1127a04e245c35/ss_3f7c7729bdf2b5258f2f6f355e1127a04e245c35.1920x1080.jpg`,
		width: 1280,
		height: 720,
	},
	{
		file: 'sand-raiders-trampler',
		url: `${STEAM}/ss_945b69263e0ea57b7b8287e77fdd18548cb6e74e.1920x1080.jpg`,
		width: 1280,
		height: 720,
	},
	{
		file: 'reviews-banner',
		url: `${STEAM}/ss_ae984445e249b9c74aee69933232ac6126a58446.1920x1080.jpg`,
		width: 1280,
		height: 480,
	},
];

async function fetchBuffer(url) {
	const res = await fetch(url, {
		headers: { 'User-Agent': 'Mozilla/5.0 (compatible; SandRaidersCheats/1.0)' },
	});
	if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
	return Buffer.from(await res.arrayBuffer());
}

async function processAsset({ file, url, width, height, square }) {
	const raw = await fetchBuffer(url);
	let pipeline = sharp(raw).rotate();
	if (square) {
		pipeline = pipeline.resize(width, height, { fit: 'cover', position: 'centre' });
	} else {
		pipeline = pipeline.resize(width, height, { fit: 'cover', position: 'centre' });
	}

	const webpPath = path.join(IMG, `${file}.webp`);
	const pngPath = path.join(IMG, `${file}.png`);
	await pipeline.clone().webp({ quality: 82 }).toFile(webpPath);
	await pipeline.clone().png({ compressionLevel: 8 }).toFile(pngPath);

	// Responsive widths for gallery / product cards
	for (const w of [480, 960]) {
		if (w >= width) continue;
		await sharp(raw)
			.rotate()
			.resize(w, Math.round((height / width) * w), { fit: 'cover' })
			.webp({ quality: 78 })
			.toFile(path.join(IMG, `${file}-${w}w.webp`));
	}

	console.log(`✓ ${file}`);
}

await rm(IMG, { recursive: true, force: true });
await mkdir(IMG, { recursive: true });

for (const asset of ASSETS) {
	try {
		await processAsset(asset);
	} catch (err) {
		console.error(`✗ ${asset.file}:`, err.message);
		process.exitCode = 1;
	}
}

// Favicon from logo crop
try {
	const logo = await fetchBuffer(ASSETS.find((a) => a.file === 'sand-raiders-logo').url);
	const sizes = [
		{ out: path.join(ROOT, 'public', 'favicon.png'), size: 192 },
		{ out: path.join(ROOT, 'public', 'apple-touch-icon.png'), size: 180 },
		{ out: path.join(ROOT, 'public', 'favicon-32x32.png'), size: 32 },
		{ out: path.join(ROOT, 'public', 'favicon-16x16.png'), size: 16 },
	];
	for (const { out, size } of sizes) {
		await sharp(logo).resize(size, size, { fit: 'cover' }).png().toFile(out);
	}
	console.log('✓ favicons');
} catch (err) {
	console.warn('favicon skip:', err.message);
}

await writeFile(
	path.join(IMG, 'README.txt'),
	'Official SAND: Raiders of Sophie store imagery (Steam app 1431300). Used for sandraiderscheats.net marketing pages only.\n',
	'utf8',
);

console.log(`Done → ${IMG}`);
