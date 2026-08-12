export interface ResponsiveWidth {
	src: string;
	width: number;
}

/** Build a srcset string from width-tagged image paths. */
export function buildSrcSet(widths: ResponsiveWidth[]): string {
	return widths.map(({ src, width }) => `${src} ${width}w`).join(', ');
}

/** Build srcset for content images that have -480w / -960w variants. */
export function contentSrcSet(baseSrc: string): string | undefined {
	const match = baseSrc.match(/^(.+\/)(.+)\.webp$/i);
	if (!match) return undefined;

	const [, dir, name] = match;
	if (/-\d+w$/i.test(name)) {
		return undefined;
	}

	return buildSrcSet(
		contentWidths.map((width) => ({
			src: `${dir}${name}-${width}w.webp`,
			width,
		})),
	);
}

/** Desktop/full hero srcset — keep filenames in sync with `npm run optimize:images`. */
export const heroResponsive: ResponsiveWidth[] = [
	{ src: '/img/sand-raiders-hero-480w.webp', width: 480 },
	{ src: '/img/sand-raiders-hero-640w.webp', width: 640 },
	{ src: '/img/sand-raiders-hero-960w.webp', width: 960 },
	{ src: '/img/sand-raiders-hero.webp', width: 1920 },
];

/** Desktop srcset (mobile uses a dedicated `<picture>` source — see Hero / PageLayout). */
export const heroDesktopResponsive: ResponsiveWidth[] = heroResponsive;

/** Full-bleed homepage hero banner (fallback src). */
export const heroSrc = '/img/sand-raiders-hero.webp';
export const heroSrcSet = buildSrcSet(heroResponsive);
export const heroSizes = '100vw';

/** LCP preload for homepage / page banners (mobile-first). */
export const heroPreloadSrc = '/img/sand-raiders-hero-480w.webp';

/** Intrinsic dimensions for hero LCP (matches sand-raiders-hero.webp). */
export const heroWidth = 1920;
export const heroHeight = 767;

/** Responsive widths for below-fold content images. */
export const contentWidths = [480, 960] as const;

export const galleryFeaturedSizes = '(max-width: 560px) 100vw, (max-width: 900px) 90vw, 640px';
export const galleryTileSizes = '(max-width: 560px) 100vw, (max-width: 900px) 45vw, 320px';
export const productMainSizes = '(max-width: 900px) 100vw, 640px';
export const productThumbSizes = '160px';
