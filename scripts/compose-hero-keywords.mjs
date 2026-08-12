/**
 * Build clean full-bleed hero from soldier source (no keyword text overlay).
 * Keywords live in brand.keywords.list / meta keywords — not on the image.
 */
import { copyFile, mkdir, unlink } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const SOURCE =
	'C:/Users/Faadi Khan/.cursor/projects/c-Users-Faadi-Khan-sandraiderscheats/assets/c__Users_Faadi_Khan_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_image-dbeba54d-5468-4ccd-b7cf-fae18198c56b.png';

const OUT_DIR = path.resolve('public/img');
const BASE = 'sand-raiders-hero';
const LEGACY_BASE = 'sand-raiders-hero-keywords';
const TARGET_WIDTH = 1920;
const HERO_WIDTHS = [480, 640, 960];

async function main() {
	await mkdir(OUT_DIR, { recursive: true });

	const meta = await sharp(SOURCE).metadata();
	const srcW = meta.width ?? 1024;
	const srcH = meta.height ?? 409;
	const outW = TARGET_WIDTH;
	const outH = Math.round((srcH / srcW) * outW);

	console.log(`Source ${srcW}x${srcH} → base ${outW}x${outH} (clean, no keywords)`);

	const baseBuf = await sharp(SOURCE)
		.resize({ width: outW, height: outH, fit: 'fill' })
		.png()
		.toBuffer();

	const pngPath = path.join(OUT_DIR, `${BASE}.png`);
	const webpPath = path.join(OUT_DIR, `${BASE}.webp`);

	await sharp(baseBuf).png({ compressionLevel: 9 }).toFile(pngPath);
	await sharp(baseBuf).webp({ quality: 82, effort: 6 }).toFile(webpPath);
	console.log(`Wrote ${BASE}.png + ${BASE}.webp (${outW}x${outH})`);

	for (const width of HERO_WIDTHS) {
		if (width >= outW) continue;
		const dest = path.join(OUT_DIR, `${BASE}-${width}w.webp`);
		const quality = width <= 480 ? 58 : width <= 640 ? 70 : 78;
		await sharp(baseBuf)
			.resize({ width, withoutEnlargement: true })
			.webp({ quality, effort: 6 })
			.toFile(dest);
		console.log(`Wrote ${BASE}-${width}w.webp`);
	}

	await copyFile(SOURCE, path.join(OUT_DIR, `${BASE}-source.png`));

	// Remove legacy keyword-baked hero assets if present.
	const legacyFiles = [
		`${LEGACY_BASE}.png`,
		`${LEGACY_BASE}.webp`,
		`${LEGACY_BASE}-source.png`,
		...HERO_WIDTHS.map((w) => `${LEGACY_BASE}-${w}w.webp`),
	];
	for (const file of legacyFiles) {
		try {
			await unlink(path.join(OUT_DIR, file));
			console.log(`Removed legacy ${file}`);
		} catch {
			/* ignore missing */
		}
	}

	console.log('Done.');
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
