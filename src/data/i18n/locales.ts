export type LocaleCode =
	| 'en'
	| 'es'
	| 'fr'
	| 'de'
	| 'pt'
	| 'it'
	| 'nl'
	| 'pl'
	| 'ru'
	| 'tr'
	| 'ar'
	| 'ja'
	| 'ko'
	| 'zh'
	| 'hi'
	| 'id'
	| 'th'
	| 'vi'
	| 'uk'
	| 'cs'
	| 'ro'
	| 'sv';

export type LocaleMeta = {
	code: LocaleCode;
	name: string;
	nativeName: string;
	hreflang: string;
	ogLocale: string;
	dir: 'ltr' | 'rtl';
	region: string;
};

/** 22 locales for global Sand Raiders Cheats blog SEO coverage. */
export const locales: LocaleMeta[] = [
	{ code: 'en', name: 'English', nativeName: 'English', hreflang: 'en', ogLocale: 'en_US', dir: 'ltr', region: 'Worldwide' },
	{ code: 'es', name: 'Spanish', nativeName: 'Español', hreflang: 'es', ogLocale: 'es_ES', dir: 'ltr', region: 'Worldwide' },
	{ code: 'fr', name: 'French', nativeName: 'Français', hreflang: 'fr', ogLocale: 'fr_FR', dir: 'ltr', region: 'Worldwide' },
	{ code: 'de', name: 'German', nativeName: 'Deutsch', hreflang: 'de', ogLocale: 'de_DE', dir: 'ltr', region: 'Worldwide' },
	{ code: 'pt', name: 'Portuguese', nativeName: 'Português', hreflang: 'pt', ogLocale: 'pt_BR', dir: 'ltr', region: 'Worldwide' },
	{ code: 'it', name: 'Italian', nativeName: 'Italiano', hreflang: 'it', ogLocale: 'it_IT', dir: 'ltr', region: 'Worldwide' },
	{ code: 'nl', name: 'Dutch', nativeName: 'Nederlands', hreflang: 'nl', ogLocale: 'nl_NL', dir: 'ltr', region: 'Worldwide' },
	{ code: 'pl', name: 'Polish', nativeName: 'Polski', hreflang: 'pl', ogLocale: 'pl_PL', dir: 'ltr', region: 'Worldwide' },
	{ code: 'ru', name: 'Russian', nativeName: 'Русский', hreflang: 'ru', ogLocale: 'ru_RU', dir: 'ltr', region: 'Worldwide' },
	{ code: 'tr', name: 'Turkish', nativeName: 'Türkçe', hreflang: 'tr', ogLocale: 'tr_TR', dir: 'ltr', region: 'Worldwide' },
	{ code: 'ar', name: 'Arabic', nativeName: 'العربية', hreflang: 'ar', ogLocale: 'ar_SA', dir: 'rtl', region: 'Worldwide' },
	{ code: 'ja', name: 'Japanese', nativeName: '日本語', hreflang: 'ja', ogLocale: 'ja_JP', dir: 'ltr', region: 'Worldwide' },
	{ code: 'ko', name: 'Korean', nativeName: '한국어', hreflang: 'ko', ogLocale: 'ko_KR', dir: 'ltr', region: 'Worldwide' },
	{ code: 'zh', name: 'Chinese', nativeName: '中文', hreflang: 'zh', ogLocale: 'zh_CN', dir: 'ltr', region: 'Worldwide' },
	{ code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', hreflang: 'hi', ogLocale: 'hi_IN', dir: 'ltr', region: 'Worldwide' },
	{ code: 'id', name: 'Indonesian', nativeName: 'Bahasa Indonesia', hreflang: 'id', ogLocale: 'id_ID', dir: 'ltr', region: 'Worldwide' },
	{ code: 'th', name: 'Thai', nativeName: 'ไทย', hreflang: 'th', ogLocale: 'th_TH', dir: 'ltr', region: 'Worldwide' },
	{ code: 'vi', name: 'Vietnamese', nativeName: 'Tiếng Việt', hreflang: 'vi', ogLocale: 'vi_VN', dir: 'ltr', region: 'Worldwide' },
	{ code: 'uk', name: 'Ukrainian', nativeName: 'Українська', hreflang: 'uk', ogLocale: 'uk_UA', dir: 'ltr', region: 'Worldwide' },
	{ code: 'cs', name: 'Czech', nativeName: 'Čeština', hreflang: 'cs', ogLocale: 'cs_CZ', dir: 'ltr', region: 'Worldwide' },
	{ code: 'ro', name: 'Romanian', nativeName: 'Română', hreflang: 'ro', ogLocale: 'ro_RO', dir: 'ltr', region: 'Worldwide' },
	{ code: 'sv', name: 'Swedish', nativeName: 'Svenska', hreflang: 'sv', ogLocale: 'sv_SE', dir: 'ltr', region: 'Worldwide' },
];

export const defaultLocale: LocaleCode = 'en';

export const localeCodes = locales.map((l) => l.code);

export const localeMap = Object.fromEntries(locales.map((l) => [l.code, l])) as Record<
	LocaleCode,
	LocaleMeta
>;

export function isLocaleCode(value: string): value is LocaleCode {
	return localeCodes.includes(value as LocaleCode);
}

export function getLocale(code: string): LocaleMeta | undefined {
	return isLocaleCode(code) ? localeMap[code] : undefined;
}

/** UI strings for blog index pages per locale. */
export const blogUi: Record<
	LocaleCode,
	{
		blogTitle: string;
		blogDescription: string;
		blogH1: string;
		blogIntro: string;
		readMore: string;
		published: string;
		updated: string;
		relatedPosts: string;
		allPosts: string;
		home: string;
		language: string;
	}
> = {
	en: {
		blogTitle: 'Sand Raiders Cheats Blog | ESP, Cheats & Meta Tips',
		blogDescription:
			'Warzone hacks and sand raiders cheats guides — ESP, aimbot, ranked meta, loot routes, and Easy Anti-Cheat updates. Global English blog at sandraiderscheats.net/blog/.',
		blogH1: 'Sand Raiders Cheats Intel',
		blogIntro:
			'Actionable Call of Duty: Warzone guides for Battle Royale and Resurgence — meta breakdowns, loot routes, weapon tiers, and pro warmup routines. Pair these tips with our sand raiders cheats pages for ESP boxes, soft aim, and cloud DMA when you need in-match tools.',
		readMore: 'Read guide',
		published: 'Published',
		updated: 'Updated',
		relatedPosts: 'Related Call of Duty: Warzone guides',
		allPosts: 'All blog posts',
		home: 'Sand Raiders Cheats home',
		language: 'Language',
	},
	es: {
		blogTitle: 'Blog Sand Raiders Cheats 2026 | Guías en 22 idiomas',
		blogDescription:
			'Blog de Sand Raiders Cheats con guías de trucos indetectables, ESP wallhack, radar y Aimbot para Call of Duty: Warzone en PC Windows.',
		blogH1: 'Blog Sand Raiders Cheats — Guías globales',
		blogIntro:
			'Guías SEO de trucos Call of Duty: Warzone indetectables, ESP wallhack, radar hack, Aimbot y mantenimiento Easy Anti-Cheat en 22 idiomas.',
		readMore: 'Leer guía',
		published: 'Publicado',
		updated: 'Actualizado',
		relatedPosts: 'Guías Call of Duty: Warzone relacionadas',
		allPosts: 'Todos los artículos',
		home: 'Inicio Sand Raiders Cheats',
		language: 'Idioma',
	},
	fr: {
		blogTitle: 'Blog Sand Raiders Cheats 2026 | Guides en 22 langues',
		blogDescription:
			'Blog Sand Raiders Cheats : triches indétectables, ESP wallhack, radar et Aimbot pour Call of Duty: Warzone sur PC Windows.',
		blogH1: 'Blog Sand Raiders Cheats — Guides mondiaux',
		blogIntro:
			'Guides SEO triches Call of Duty: Warzone indétectables, ESP wallhack, radar hack, Aimbot et Easy Anti-Cheat en 22 langues.',
		readMore: 'Lire le guide',
		published: 'Publié',
		updated: 'Mis à jour',
		relatedPosts: 'Guides Call of Duty: Warzone associés',
		allPosts: 'Tous les articles',
		home: 'Accueil Sand Raiders Cheats',
		language: 'Langue',
	},
	de: {
		blogTitle: 'Sand Raiders Cheats Blog 2026 | Guides in 22 Sprachen',
		blogDescription:
			'Sand Raiders Cheats Blog mit undetected ESP, Wallhack, Radar und Aimbot Guides für Call of Duty: Warzone auf Windows PC.',
		blogH1: 'Sand Raiders Cheats Blog — Globale Guides',
		blogIntro:
			'SEO-Guides für undetected Sand Raiders Cheats, ESP Wallhack, Radar Hack, Aimbot und Easy Anti-Cheat in 22 Sprachen.',
		readMore: 'Guide lesen',
		published: 'Veröffentlicht',
		updated: 'Aktualisiert',
		relatedPosts: 'Verwandte Call of Duty: Warzone Guides',
		allPosts: 'Alle Beiträge',
		home: 'Sand Raiders Cheats Start',
		language: 'Sprache',
	},
	pt: {
		blogTitle: 'Blog Sand Raiders Cheats 2026 | Guias em 22 idiomas',
		blogDescription:
			'Blog Sand Raiders Cheats com guias de cheats indetectáveis, ESP wallhack, radar e Aimbot para Call of Duty: Warzone no PC.',
		blogH1: 'Blog Sand Raiders Cheats — Guias globais',
		blogIntro:
			'Guias SEO de cheats Call of Duty: Warzone indetectáveis, ESP wallhack, radar hack, Aimbot e Easy Anti-Cheat em 22 idiomas.',
		readMore: 'Ler guia',
		published: 'Publicado',
		updated: 'Atualizado',
		relatedPosts: 'Guias Call of Duty: Warzone relacionados',
		allPosts: 'Todos os posts',
		home: 'Início Sand Raiders Cheats',
		language: 'Idioma',
	},
	it: {
		blogTitle: 'Blog Sand Raiders Cheats 2026 | Guide in 22 lingue',
		blogDescription:
			'Blog Sand Raiders Cheats con guide cheat indetectable, ESP wallhack, radar e Aimbot per Call of Duty: Warzone su PC Windows.',
		blogH1: 'Blog Sand Raiders Cheats — Guide globali',
		blogIntro:
			'Guide SEO cheat Call of Duty: Warzone indetectable, ESP wallhack, radar hack, Aimbot e Easy Anti-Cheat in 22 lingue.',
		readMore: 'Leggi guida',
		published: 'Pubblicato',
		updated: 'Aggiornato',
		relatedPosts: 'Guide Call of Duty: Warzone correlate',
		allPosts: 'Tutti gli articoli',
		home: 'Home Sand Raiders Cheats',
		language: 'Lingua',
	},
	nl: {
		blogTitle: 'Sand Raiders Cheats Blog 2026 | Gidsen in 22 talen',
		blogDescription:
			'Sand Raiders Cheats blog met undetected ESP, wallhack, radar en Aimbot gidsen voor Call of Duty: Warzone op Windows PC.',
		blogH1: 'Sand Raiders Cheats Blog — Wereldwijde gidsen',
		blogIntro:
			'SEO-gidsen voor undetected Sand Raiders cheats, ESP wallhack, radar hack, Aimbot en Easy Anti-Cheat in 22 talen.',
		readMore: 'Lees gids',
		published: 'Gepubliceerd',
		updated: 'Bijgewerkt',
		relatedPosts: 'Gerelateerde Call of Duty: Warzone gidsen',
		allPosts: 'Alle posts',
		home: 'Sand Raiders Cheats home',
		language: 'Taal',
	},
	pl: {
		blogTitle: 'Blog Sand Raiders Cheats 2026 | Poradniki w 22 językach',
		blogDescription:
			'Blog Sand Raiders Cheats z poradnikami undetected ESP, wallhack, radar i Aimbot dla Call of Duty: Warzone na PC.',
		blogH1: 'Blog Sand Raiders Cheats — Globalne poradniki',
		blogIntro:
			'Poradniki SEO undetected cheatów Call of Duty: Warzone, ESP wallhack, radar hack, Aimbot i Easy Anti-Cheat w 22 językach.',
		readMore: 'Czytaj poradnik',
		published: 'Opublikowano',
		updated: 'Zaktualizowano',
		relatedPosts: 'Powiązane poradniki Call of Duty: Warzone',
		allPosts: 'Wszystkie artykuły',
		home: 'Strona główna Sand Raiders Cheats',
		language: 'Język',
	},
	ru: {
		blogTitle: 'Блог Sand Raiders Cheats 2026 | Гайды на 22 языках',
		blogDescription:
			'Блог Sand Raiders Cheats: undetected ESP, wallhack, radar и Aimbot для Call of Duty: Warzone на Windows PC.',
		blogH1: 'Блог Sand Raiders Cheats — Глобальные гайды',
		blogIntro:
			'SEO-гайды по undetected читам Call of Duty: Warzone, ESP wallhack, radar hack, Aimbot и Easy Anti-Cheat на 22 языках.',
		readMore: 'Читать гайд',
		published: 'Опубликовано',
		updated: 'Обновлено',
		relatedPosts: 'Похожие гайды Call of Duty: Warzone',
		allPosts: 'Все статьи',
		home: 'Главная Sand Raiders Cheats',
		language: 'Язык',
	},
	tr: {
		blogTitle: 'Sand Raiders Cheats Blog 2026 | 22 dilde rehberler',
		blogDescription:
			'Sand Raiders Cheats blog: undetected ESP, wallhack, radar ve Aimbot rehberleri Call of Duty: Warzone Windows PC.',
		blogH1: 'Sand Raiders Cheats Blog — Küresel rehberler',
		blogIntro:
			'Undetected Call of Duty: Warzone hileleri, ESP wallhack, radar hack, Aimbot ve Easy Anti-Cheat SEO rehberleri 22 dilde.',
		readMore: 'Rehberi oku',
		published: 'Yayınlandı',
		updated: 'Güncellendi',
		relatedPosts: 'İlgili Call of Duty: Warzone rehberleri',
		allPosts: 'Tüm yazılar',
		home: 'Sand Raiders Cheats ana sayfa',
		language: 'Dil',
	},
	ar: {
		blogTitle: 'مدونة Sand Raiders Cheats 2026 | أدلة بـ 22 لغة',
		blogDescription:
			'مدونة Sand Raiders Cheats: غش undetected وESP wallhack ورadar وAimbot لـ Call of Duty: Warzone على Windows PC.',
		blogH1: 'مدونة Sand Raiders Cheats — أدلة عالمية',
		blogIntro:
			'أدلة SEO لغش Call of Duty: Warzone undetected وESP wallhack ورadar hack وAimbot وEasy Anti-Cheat بـ 22 لغة.',
		readMore: 'اقرأ الدليل',
		published: 'نُشر',
		updated: 'تم التحديث',
		relatedPosts: 'أدلة Call of Duty: Warzone ذات صلة',
		allPosts: 'جميع المقالات',
		home: 'الرئيسية Sand Raiders Cheats',
		language: 'اللغة',
	},
	ja: {
		blogTitle: 'Sand Raiders Cheats ブログ 2026 | 22言語ガイド',
		blogDescription:
			'Sand Raiders Cheatsブログ：undetected ESP、wallhack、radar、Aimbotガイド。Call of Duty: Warzone Windows PC向け。',
		blogH1: 'Sand Raiders Cheats ブログ — グローバルガイド',
		blogIntro:
			'undetected Call of Duty: Warzoneチート、ESP wallhack、radar hack、Aimbot、Easy Anti-CheatのSEOガイドを22言語で提供。',
		readMore: 'ガイドを読む',
		published: '公開日',
		updated: '更新日',
		relatedPosts: '関連Call of Duty: Warzoneガイド',
		allPosts: 'すべての記事',
		home: 'Sand Raiders Cheats ホーム',
		language: '言語',
	},
	ko: {
		blogTitle: 'Sand Raiders Cheats 블로그 2026 | 22개 언어 가이드',
		blogDescription:
			'Sand Raiders Cheats 블로그: undetected ESP, wallhack, radar, Aimbot 가이드. Call of Duty: Warzone Windows PC.',
		blogH1: 'Sand Raiders Cheats 블로그 — 글로벌 가이드',
		blogIntro:
			'undetected Call of Duty: Warzone 치트, ESP wallhack, radar hack, Aimbot, Easy Anti-Cheat SEO 가이드를 22개 언어로 제공.',
		readMore: '가이드 읽기',
		published: '게시일',
		updated: '업데이트',
		relatedPosts: '관련 Call of Duty: Warzone 가이드',
		allPosts: '모든 게시물',
		home: 'Sand Raiders Cheats 홈',
		language: '언어',
	},
	zh: {
		blogTitle: 'Sand Raiders Cheats 博客 2026 | 22种语言指南',
		blogDescription:
			'Sand Raiders Cheats博客：undetected ESP、wallhack、radar和Aimbot指南，适用于Call of Duty: Warzone Windows PC。',
		blogH1: 'Sand Raiders Cheats 博客 — 全球指南',
		blogIntro:
			'undetected Call of Duty: Warzone作弊、ESP wallhack、radar hack、Aimbot和Easy Anti-Cheat的SEO指南，共22种语言。',
		readMore: '阅读指南',
		published: '发布',
		updated: '更新',
		relatedPosts: '相关Call of Duty: Warzone指南',
		allPosts: '所有文章',
		home: 'Sand Raiders Cheats 首页',
		language: '语言',
	},
	hi: {
		blogTitle: 'Sand Raiders Cheats ब्लॉग 2026 | 22 भाषाओं में गाइड',
		blogDescription:
			'Sand Raiders Cheats ब्लॉग: undetected ESP, wallhack, radar और Aimbot गाइड Call of Duty: Warzone Windows PC के लिए।',
		blogH1: 'Sand Raiders Cheats ब्लॉग — वैश्विक गाइड',
		blogIntro:
			'undetected Sand Raiders cheats, ESP wallhack, radar hack, Aimbot और Easy Anti-Cheat SEO गाइड 22 भाषाओं में।',
		readMore: 'गाइड पढ़ें',
		published: 'प्रकाशित',
		updated: 'अपडेट',
		relatedPosts: 'संबंधित Call of Duty: Warzone गाइड',
		allPosts: 'सभी पोस्ट',
		home: 'Sand Raiders Cheats होम',
		language: 'भाषा',
	},
	id: {
		blogTitle: 'Blog Sand Raiders Cheats 2026 | Panduan 22 bahasa',
		blogDescription:
			'Blog Sand Raiders Cheats: panduan undetected ESP, wallhack, radar dan Aimbot untuk Call of Duty: Warzone di PC Windows.',
		blogH1: 'Blog Sand Raiders Cheats — Panduan global',
		blogIntro:
			'Panduan SEO cheat Call of Duty: Warzone undetected, ESP wallhack, radar hack, Aimbot dan Easy Anti-Cheat dalam 22 bahasa.',
		readMore: 'Baca panduan',
		published: 'Dipublikasikan',
		updated: 'Diperbarui',
		relatedPosts: 'Panduan Call of Duty: Warzone terkait',
		allPosts: 'Semua artikel',
		home: 'Beranda Sand Raiders Cheats',
		language: 'Bahasa',
	},
	th: {
		blogTitle: 'บล็อก Sand Raiders Cheats 2026 | คู่มือ 22 ภาษา',
		blogDescription:
			'บล็อก Sand Raiders Cheats: คู่มือ undetected ESP, wallhack, radar และ Aimbot สำหรับ Call of Duty: Warzone บน PC',
		blogH1: 'บล็อก Sand Raiders Cheats — คู่มือทั่วโลก',
		blogIntro:
			'คู่มือ SEO สำหรับ cheat Call of Duty: Warzone undetected, ESP wallhack, radar hack, Aimbot และ Easy Anti-Cheat 22 ภาษา',
		readMore: 'อ่านคู่มือ',
		published: 'เผยแพร่',
		updated: 'อัปเดต',
		relatedPosts: 'คู่มือ Call of Duty: Warzone ที่เกี่ยวข้อง',
		allPosts: 'บทความทั้งหมด',
		home: 'หน้าแรก Sand Raiders Cheats',
		language: 'ภาษา',
	},
	vi: {
		blogTitle: 'Blog Sand Raiders Cheats 2026 | Hướng dẫn 22 ngôn ngữ',
		blogDescription:
			'Blog Sand Raiders Cheats: hướng dẫn undetected ESP, wallhack, radar và Aimbot cho Call of Duty: Warzone trên PC.',
		blogH1: 'Blog Sand Raiders Cheats — Hướng dẫn toàn cầu',
		blogIntro:
			'Hướng dẫn SEO cheat Call of Duty: Warzone undetected, ESP wallhack, radar hack, Aimbot và Easy Anti-Cheat bằng 22 ngôn ngữ.',
		readMore: 'Đọc hướng dẫn',
		published: 'Xuất bản',
		updated: 'Cập nhật',
		relatedPosts: 'Hướng dẫn Call of Duty: Warzone liên quan',
		allPosts: 'Tất cả bài viết',
		home: 'Trang chủ Sand Raiders Cheats',
		language: 'Ngôn ngữ',
	},
	uk: {
		blogTitle: 'Блог Sand Raiders Cheats 2026 | Гайди 22 мовами',
		blogDescription:
			'Блог Sand Raiders Cheats: undetected ESP, wallhack, radar та Aimbot для Call of Duty: Warzone на Windows PC.',
		blogH1: 'Блог Sand Raiders Cheats — Глобальні гайди',
		blogIntro:
			'SEO-гайди з undetected читів Call of Duty: Warzone, ESP wallhack, radar hack, Aimbot та Easy Anti-Cheat 22 мовами.',
		readMore: 'Читати гайд',
		published: 'Опубліковано',
		updated: 'Оновлено',
		relatedPosts: "Пов'язані гайди Call of Duty: Warzone",
		allPosts: 'Усі статті',
		home: 'Головна Sand Raiders Cheats',
		language: 'Мова',
	},
	cs: {
		blogTitle: 'Blog Sand Raiders Cheats 2026 | Průvodce ve 22 jazycích',
		blogDescription:
			'Blog Sand Raiders Cheats: undetected ESP, wallhack, radar a Aimbot pro Call of Duty: Warzone na Windows PC.',
		blogH1: 'Blog Sand Raiders Cheats — Globální průvodce',
		blogIntro:
			'SEO průvodce undetected Sand Raiders cheaty, ESP wallhack, radar hack, Aimbot a Easy Anti-Cheat ve 22 jazycích.',
		readMore: 'Číst průvodce',
		published: 'Publikováno',
		updated: 'Aktualizováno',
		relatedPosts: 'Související Call of Duty: Warzone průvodce',
		allPosts: 'Všechny články',
		home: 'Domů Sand Raiders Cheats',
		language: 'Jazyk',
	},
	ro: {
		blogTitle: 'Blog Sand Raiders Cheats 2026 | Ghiduri în 22 de limbi',
		blogDescription:
			'Blog Sand Raiders Cheats: ghiduri undetected ESP, wallhack, radar și Aimbot pentru Call of Duty: Warzone pe PC.',
		blogH1: 'Blog Sand Raiders Cheats — Ghiduri globale',
		blogIntro:
			'Ghiduri SEO cheat-uri Call of Duty: Warzone undetected, ESP wallhack, radar hack, Aimbot și Easy Anti-Cheat în 22 de limbi.',
		readMore: 'Citește ghidul',
		published: 'Publicat',
		updated: 'Actualizat',
		relatedPosts: 'Ghiduri Call of Duty: Warzone related',
		allPosts: 'Toate articolele',
		home: 'Acasă Sand Raiders Cheats',
		language: 'Limbă',
	},
	sv: {
		blogTitle: 'Sand Raiders Cheats Blogg 2026 | Guider på 22 språk',
		blogDescription:
			'Sand Raiders Cheats blogg med undetected ESP, wallhack, radar och Aimbot guider för Call of Duty: Warzone på PC.',
		blogH1: 'Sand Raiders Cheats Blogg — Globala guider',
		blogIntro:
			'SEO-guider för undetected Sand Raiders cheats, ESP wallhack, radar hack, Aimbot och Easy Anti-Cheat på 22 språk.',
		readMore: 'Läs guide',
		published: 'Publicerad',
		updated: 'Uppdaterad',
		relatedPosts: 'Relaterade Call of Duty: Warzone guider',
		allPosts: 'Alla inlägg',
		home: 'Sand Raiders Cheats hem',
		language: 'Språk',
	},
};
