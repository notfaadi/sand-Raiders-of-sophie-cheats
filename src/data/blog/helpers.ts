import { siteConfig } from '../site';
import { warzoneImages } from '../warzone';
import {
	defaultLocale,
	localeCodes,
	type LocaleCode,
	locales,
} from '../i18n/locales';
import { resolvePageContextFromPath } from '../i18n/routing';
import type { BlogImageKey, BlogPostDefinition, BlogTranslation, ResolvedBlogPost } from './types';
import { blogPosts as rawBlogPosts } from './posts.generated';

const imageMap: Record<BlogImageKey, string> = {
	hero: warzoneImages.hero,
	espWallhack: warzoneImages.espWallhack,
	aimbotCombat: warzoneImages.aimbotCombat,
	squadFight: warzoneImages.aimbotSkeleton,
	headerArt: warzoneImages.playerEsp,
	cheatsPackage: warzoneImages.cheatsCombat,
	playerEsp: warzoneImages.playerEsp,
	rebootFight: warzoneImages.aimbotCombat,
	battleRoyaleCombat: warzoneImages.cheatsCombat,
	battleRoyaleIslandMap: warzoneImages.hero,
};

function expandTranslations(
	translations: Partial<Record<LocaleCode, BlogTranslation>> & { en: BlogTranslation },
): Record<LocaleCode, BlogTranslation> {
	const en = translations.en;
	const full = {} as Record<LocaleCode, BlogTranslation>;
	for (const code of localeCodes) {
		full[code] = translations[code] ?? { ...en };
	}
	return full;
}

export const blogPosts: BlogPostDefinition[] = rawBlogPosts.map((post) => ({
	...post,
	translations: expandTranslations(post.translations as Partial<Record<LocaleCode, BlogTranslation>> & { en: BlogTranslation }),
}));

export function getBlogImageSrc(key: BlogImageKey): string {
	return imageMap[key];
}

export function getBlogBasePath(locale: LocaleCode): string {
	return locale === defaultLocale ? '/blog/' : `/${locale}/blog/`;
}

export function isBlogPath(pathname: string): boolean {
	const context = resolvePageContextFromPath(pathname);
	return Boolean(context.isBlogIndex || context.blogSlug);
}

export function findPostBySlug(slug: string, locale?: LocaleCode): BlogPostDefinition | undefined {
	return blogPosts.find((post) => {
		if (locale) {
			return post.translations[locale]?.slug === slug;
		}
		return localeCodes.some((code) => post.translations[code]?.slug === slug);
	});
}

/** Target URL for the same blog index or post in another locale. */
export function getBlogLocaleSwitchHref(pathname: string, targetLocale: LocaleCode): string {
	const context = resolvePageContextFromPath(pathname);

	if (context.blogSlug) {
		const post = findPostBySlug(context.blogSlug, context.locale);
		if (post) {
			return getBlogPostPath(targetLocale, post.translations[targetLocale].slug);
		}
	}

	return getBlogBasePath(targetLocale);
}

export function getBlogPostPath(locale: LocaleCode, slug: string): string {
	const base = getBlogBasePath(locale);
	return `${base}${slug}/`;
}

export function absoluteBlogUrl(locale: LocaleCode, slug?: string): string {
	const path = slug ? getBlogPostPath(locale, slug) : getBlogBasePath(locale);
	return new URL(path, siteConfig.url).href;
}

export function resolvePost(post: BlogPostDefinition, locale: LocaleCode): ResolvedBlogPost {
	const translation = post.translations[locale];
	return {
		...post,
		locale,
		translation,
		imageSrc: getBlogImageSrc(post.imageKey),
		canonicalPath: getBlogPostPath(locale, translation.slug),
	};
}

export function getAllPostsForLocale(locale: LocaleCode): ResolvedBlogPost[] {
	return blogPosts
		.map((post) => resolvePost(post, locale))
		.sort((a, b) => (a.published < b.published ? 1 : -1));
}

export function getFeaturedPosts(locale: LocaleCode, limit = 3): ResolvedBlogPost[] {
	const all = getAllPostsForLocale(locale);
	const featured = all.filter((p) => p.featured);
	return (featured.length >= limit ? featured : all).slice(0, limit);
}

export function getPostBySlug(locale: LocaleCode, slug: string): ResolvedBlogPost | undefined {
	const post = blogPosts.find((p) => p.translations[locale]?.slug === slug);
	return post ? resolvePost(post, locale) : undefined;
}

/**
 * ⚠️ QUARANTINED — DO NOT USE YET.
 * Builds hreflang alternates pointing at localized blog URLs (`/{lang}/blog/…`)
 * that DO NOT EXIST as routes: only English blog pages are built today.
 * Wiring this into pages would emit hreflang links to 404s (GSC indexing errors).
 * Keep unused until localized blog routes actually ship.
 */
export function getHreflangAlternates(post: BlogPostDefinition) {
	return [
		...localeCodes.map((code) => ({
			hreflang: locales.find((l) => l.code === code)!.hreflang,
			href: absoluteBlogUrl(code, post.translations[code].slug),
		})),
		{
			hreflang: 'x-default',
			href: absoluteBlogUrl(defaultLocale, post.translations[defaultLocale].slug),
		},
	];
}

/**
 * ⚠️ QUARANTINED — DO NOT USE YET.
 * Generates static paths for localized blog routes (`/{lang}/blog/{slug}/`)
 * that are not implemented — no `src/pages/[lang]/blog/` route exists.
 * Do not wire into getStaticPaths (or sitemaps) until localized blog routes exist,
 * otherwise sitemaps/links would reference pages that are never built.
 */
export function getAllBlogStaticPaths(): { params: { lang?: string; slug: string }; props: { locale: LocaleCode } }[] {
	const paths: { params: { lang?: string; slug: string }; props: { locale: LocaleCode } }[] = [];
	for (const post of blogPosts) {
		for (const locale of localeCodes) {
			const slug = post.translations[locale].slug;
			if (locale === defaultLocale) {
				paths.push({ params: { slug }, props: { locale } });
			} else {
				paths.push({ params: { lang: locale, slug }, props: { locale } });
			}
		}
	}
	return paths;
}

/** Blog sitemap entries for one locale (index + all posts). */
export function getBlogSitemapEntriesForLocale(locale: LocaleCode) {
	const indexLastmod = blogPosts.reduce(
		(max, post) => (post.updated > max ? post.updated : max),
		blogPosts[0]?.updated ?? new Date().toISOString().slice(0, 10),
	);

	const entries: {
		path: string;
		lastmod: string;
		priority: number;
		changefreq: 'daily' | 'weekly' | 'monthly';
		images: { url: string; title: string; caption: string }[];
	}[] = [
		{
			path: getBlogBasePath(locale),
			lastmod: indexLastmod,
			priority: locale === defaultLocale ? 0.92 : 0.9,
			changefreq: 'daily',
			images: [
				{
					url: new URL(siteConfig.defaultOgImage, siteConfig.url).href,
					title: 'Warzone Hacks Intel blog',
					caption: 'Warzone Intel blog covering meta guides, ESP, Aimbot, and Ricochet notes',
				},
			],
		},
	];

	for (const post of blogPosts) {
		const t = post.translations[locale];
		const imageSrc = getBlogImageSrc(post.imageKey);
		const isProductPost = /Warzone Hacks|Warzone Cheats|Aimbot|ESP|Undetected|Comparisons/i.test(
			post.category,
		);
		entries.push({
			path: getBlogPostPath(locale, t.slug),
			lastmod: post.updated,
			priority: isProductPost ? (locale === defaultLocale ? 0.95 : 0.93) : locale === defaultLocale ? 0.88 : 0.86,
			changefreq: 'weekly',
			images: [
				{
					url: new URL(imageSrc, siteConfig.url).href,
					title: t.title,
					caption: t.imageAlt,
				},
			],
		});
	}

	return entries;
}

/** English blog routes in the primary sitemap (localized posts live in per-locale sitemaps). */
export function getBlogSitemapEntries() {
	return getBlogSitemapEntriesForLocale(defaultLocale);
}
