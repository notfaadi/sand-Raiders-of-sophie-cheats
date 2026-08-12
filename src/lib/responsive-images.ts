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
	if (name.endsWith('-640w') || name.endsWith('-960w') || name.endsWith('-1400w')) {
		return undefined;
	}

	return buildSrcSet(
		contentWidths.map((width) => ({
			src: `${dir}${name}-${width}w.webp`,
			width,
		})),
	);
}

export const heroResponsive: ResponsiveWidth[] = [
	{ src: '/img/hero-banner.webp', width: 1024 },
];

/** Desktop srcset (mobile uses a dedicated `<picture>` source — see Hero.astro). */
export const heroDesktopResponsive: ResponsiveWidth[] = heroResponsive;

/** Full-bleed homepage hero banner. */
export const heroSrc = heroResponsive[0].src;
export const heroSrcSet = buildSrcSet(heroResponsive);
export const heroSizes = '100vw';

/** LCP preload for homepage hero. */
export const heroPreloadSrc = heroResponsive[0].src;

/** Intrinsic dimensions for hero LCP (matches hero-banner.webp). */
export const heroWidth = 1024;
export const heroHeight = 358;

/** Responsive widths for below-fold content images. */
export const contentWidths = [480, 960] as const;

export const galleryFeaturedSizes = '(max-width: 560px) 100vw, (max-width: 900px) 90vw, 640px';
export const galleryTileSizes = '(max-width: 560px) 100vw, (max-width: 900px) 45vw, 320px';
export const productMainSizes = '(max-width: 900px) 100vw, 640px';
export const productThumbSizes = '160px';
