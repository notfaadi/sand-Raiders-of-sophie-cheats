import { siteConfig } from '../site';
import {
	defaultLocale,
	isLocaleCode,
	localeCodes,
	localeMap,
	type LocaleCode,
	locales,
} from './locales';

/** Canonical page identifiers shared across all locales. */
export type PageId =
	| 'home'
	| 'sand-raiders-esp'
	| 'sand-raiders-aimbot'
	| 'features'
	| 'pricing'
	| 'setup'
	| 'updates'
	| 'faq'
	| 'support'
	| 'undetected'
	| 'wallhack'
	| 'radar'
	| 'eac-bypass'
	| 'cheats-2026'
	| 'hacks'
	| 'cheat-download'
	| 'mod-menu'
	| 'soft-aim'
	| 'best-cheats'
	| 'aimbot-hack'
	| 'esp-hack'
	| 'unlock-all'
	| 'privacy'
	| 'refund'
	| 'terms';

/** English (official) paths — served at site root without /en/ prefix. */
export const englishPaths: Record<PageId, string> = {
	home: '/',
	'sand-raiders-esp': '/sand-raiders-esp/',
	'sand-raiders-aimbot': '/sand-raiders-aimbot/',
	features: '/features/',
	pricing: '/pricing/',
	setup: '/setup/',
	updates: '/updates/',
	faq: '/faq/',
	support: '/support/',
	undetected: '/undetected-sand-raiders-cheats/',
	wallhack: '/sand-raiders-wallhack/',
	radar: '/sand-raiders-radar-hack/',
	'eac-bypass': '/eac-bypass/',
	'cheats-2026': '/sand-raiders-cheats-2026/',
	hacks: '/sand-raiders-hacks/',
	'cheat-download': '/sand-raiders-cheat-download/',
	'mod-menu': '/sand-raiders-mod-menu/',
	'soft-aim': '/sand-raiders-soft-aim/',
	'best-cheats': '/best-sand-raiders-cheats/',
	'aimbot-hack': '/sand-raiders-aimbot-hack/',
	'esp-hack': '/sand-raiders-esp-hack/',
	'unlock-all': '/sand-raiders-unlock-all/',
	privacy: '/privacy-policy/',
	refund: '/refund-policy/',
	terms: '/terms/',
};

/**
 * Localized URL slugs (path after /{lang}/).
 * English uses englishPaths at root; other locales use these slugs under /{lang}/.
 */
export const localizedSlugs: Record<PageId, Record<LocaleCode, string>> = {
	home: {
		en: '',
		es: '',
		fr: '',
		de: '',
		pt: '',
		it: '',
		nl: '',
		pl: '',
		ru: '',
		tr: '',
		ar: '',
		ja: '',
		ko: '',
		zh: '',
		hi: '',
		id: '',
		th: '',
		vi: '',
		uk: '',
		cs: '',
		ro: '',
		sv: '',
	},
	'sand-raiders-esp': {
		en: 'sand-raiders-esp',
		es: 'trucos-sand-raiders-esp',
		fr: 'triche-sand-raiders-esp',
		de: 'sand-raiders-esp-wallhack',
		pt: 'cheats-sand-raiders-esp',
		it: 'trucchi-sand-raiders-esp',
		nl: 'sand-raiders-esp-wallhack',
		pl: 'cheaty-sand-raiders-esp',
		ru: 'sand-raiders-esp-chity',
		tr: 'sand-raiders-esp-hile',
		ar: 'sand-raiders-esp-wallhack',
		ja: 'sand-raiders-esp-wallhack',
		ko: 'sand-raiders-esp-wallhack',
		zh: 'sand-raiders-esp-wallhack',
		hi: 'sand-raiders-esp-wallhack',
		id: 'sand-raiders-esp-wallhack',
		th: 'sand-raiders-esp-wallhack',
		vi: 'sand-raiders-esp-wallhack',
		uk: 'sand-raiders-esp-chity',
		cs: 'sand-raiders-esp-wallhack',
		ro: 'sand-raiders-esp-wallhack',
		sv: 'sand-raiders-esp-wallhack',
	},
	'sand-raiders-aimbot': {
		en: 'sand-raiders-aimbot',
		es: 'trucos-sand-raiders-aimbot',
		fr: 'triche-sand-raiders-aimbot',
		de: 'sand-raiders-aimbot',
		pt: 'cheats-sand-raiders-aimbot',
		it: 'trucchi-sand-raiders-aimbot',
		nl: 'sand-raiders-aimbot',
		pl: 'cheaty-sand-raiders-aimbot',
		ru: 'sand-raiders-aimbot-chity',
		tr: 'sand-raiders-aimbot-hile',
		ar: 'sand-raiders-aimbot',
		ja: 'sand-raiders-aimbot',
		ko: 'sand-raiders-aimbot',
		zh: 'sand-raiders-aimbot',
		hi: 'sand-raiders-aimbot',
		id: 'sand-raiders-aimbot',
		th: 'sand-raiders-aimbot',
		vi: 'sand-raiders-aimbot',
		uk: 'sand-raiders-aimbot-chity',
		cs: 'sand-raiders-aimbot',
		ro: 'sand-raiders-aimbot',
		sv: 'sand-raiders-aimbot',
	},
	features: {
		en: 'features',
		es: 'caracteristicas-trucos-warzone',
		fr: 'fonctionnalites-triche-warzone',
		de: 'call-of-duty-warzone-cheats-funktionen',
		pt: 'recursos-cheats-warzone',
		it: 'funzioni-trucchi-warzone',
		nl: 'call-of-duty-warzone-cheats-functies',
		pl: 'funkcje-cheatow-warzone',
		ru: 'funkcii-chitov-warzone',
		tr: 'warzone-hile-ozellikleri',
		ar: 'call-of-duty-warzone-cheats-features',
		ja: 'call-of-duty-warzone-cheats-features',
		ko: 'call-of-duty-warzone-cheats-features',
		zh: 'call-of-duty-warzone-cheats-features',
		hi: 'call-of-duty-warzone-cheats-features',
		id: 'call-of-duty-warzone-cheats-features',
		th: 'call-of-duty-warzone-cheats-features',
		vi: 'call-of-duty-warzone-cheats-features',
		uk: 'funkcii-chitiv-warzone',
		cs: 'call-of-duty-warzone-cheats-funkce',
		ro: 'functii-cheats-warzone',
		sv: 'call-of-duty-warzone-cheats-funktioner',
	},
	pricing: {
		en: 'pricing',
		es: 'precios-trucos-warzone',
		fr: 'prix-triche-warzone',
		de: 'call-of-duty-warzone-cheats-preise',
		pt: 'precos-cheats-warzone',
		it: 'prezzi-trucchi-warzone',
		nl: 'call-of-duty-warzone-cheats-prijzen',
		pl: 'ceny-cheatow-warzone',
		ru: 'ceny-chitov-warzone',
		tr: 'warzone-hile-fiyatlari',
		ar: 'call-of-duty-warzone-cheats-pricing',
		ja: 'call-of-duty-warzone-cheats-pricing',
		ko: 'call-of-duty-warzone-cheats-pricing',
		zh: 'call-of-duty-warzone-cheats-pricing',
		hi: 'call-of-duty-warzone-cheats-pricing',
		id: 'call-of-duty-warzone-cheats-pricing',
		th: 'call-of-duty-warzone-cheats-pricing',
		vi: 'call-of-duty-warzone-cheats-pricing',
		uk: 'ciny-chitiv-warzone',
		cs: 'call-of-duty-warzone-cheats-ceny',
		ro: 'preturi-cheats-warzone',
		sv: 'call-of-duty-warzone-cheats-priser',
	},
	setup: {
		en: 'setup',
		es: 'instalacion-trucos-warzone',
		fr: 'installation-triche-warzone',
		de: 'call-of-duty-warzone-cheats-installation',
		pt: 'instalacao-cheats-warzone',
		it: 'installazione-trucchi-warzone',
		nl: 'call-of-duty-warzone-cheats-installatie',
		pl: 'instalacja-cheatow-warzone',
		ru: 'ustanovka-chitov-warzone',
		tr: 'warzone-hile-kurulum',
		ar: 'call-of-duty-warzone-cheats-setup',
		ja: 'call-of-duty-warzone-cheats-setup',
		ko: 'call-of-duty-warzone-cheats-setup',
		zh: 'call-of-duty-warzone-cheats-setup',
		hi: 'call-of-duty-warzone-cheats-setup',
		id: 'call-of-duty-warzone-cheats-setup',
		th: 'call-of-duty-warzone-cheats-setup',
		vi: 'call-of-duty-warzone-cheats-setup',
		uk: 'vstanovka-chitiv-warzone',
		cs: 'call-of-duty-warzone-cheats-instalace',
		ro: 'instalare-cheats-warzone',
		sv: 'call-of-duty-warzone-cheats-installation',
	},
	updates: {
		en: 'updates',
		es: 'actualizaciones-trucos-warzone',
		fr: 'mises-a-jour-triche-warzone',
		de: 'call-of-duty-warzone-cheats-updates',
		pt: 'atualizacoes-cheats-warzone',
		it: 'aggiornamenti-trucchi-warzone',
		nl: 'call-of-duty-warzone-cheats-updates',
		pl: 'aktualizacje-cheatow-warzone',
		ru: 'obnovleniya-chitov-warzone',
		tr: 'warzone-hile-guncellemeleri',
		ar: 'call-of-duty-warzone-cheats-updates',
		ja: 'call-of-duty-warzone-cheats-updates',
		ko: 'call-of-duty-warzone-cheats-updates',
		zh: 'call-of-duty-warzone-cheats-updates',
		hi: 'call-of-duty-warzone-cheats-updates',
		id: 'call-of-duty-warzone-cheats-updates',
		th: 'call-of-duty-warzone-cheats-updates',
		vi: 'call-of-duty-warzone-cheats-updates',
		uk: 'onovlennya-chitiv-warzone',
		cs: 'call-of-duty-warzone-cheats-aktualizace',
		ro: 'actualizari-cheats-warzone',
		sv: 'call-of-duty-warzone-cheats-uppdateringar',
	},
	faq: {
		en: 'faq',
		es: 'preguntas-trucos-warzone',
		fr: 'faq-triche-warzone',
		de: 'call-of-duty-warzone-cheats-faq',
		pt: 'faq-cheats-warzone',
		it: 'faq-trucchi-warzone',
		nl: 'call-of-duty-warzone-cheats-faq',
		pl: 'faq-cheatow-warzone',
		ru: 'faq-chitov-warzone',
		tr: 'warzone-hile-sss',
		ar: 'call-of-duty-warzone-cheats-faq',
		ja: 'call-of-duty-warzone-cheats-faq',
		ko: 'call-of-duty-warzone-cheats-faq',
		zh: 'call-of-duty-warzone-cheats-faq',
		hi: 'call-of-duty-warzone-cheats-faq',
		id: 'call-of-duty-warzone-cheats-faq',
		th: 'call-of-duty-warzone-cheats-faq',
		vi: 'call-of-duty-warzone-cheats-faq',
		uk: 'faq-chitiv-warzone',
		cs: 'call-of-duty-warzone-cheats-faq',
		ro: 'faq-cheats-warzone',
		sv: 'call-of-duty-warzone-cheats-faq',
	},
	support: {
		en: 'support',
		es: 'soporte-trucos-warzone',
		fr: 'support-triche-warzone',
		de: 'call-of-duty-warzone-cheats-support',
		pt: 'suporte-cheats-warzone',
		it: 'supporto-trucchi-warzone',
		nl: 'call-of-duty-warzone-cheats-support',
		pl: 'wsparcie-cheatow-warzone',
		ru: 'podderzhka-chitov-warzone',
		tr: 'warzone-hile-destek',
		ar: 'call-of-duty-warzone-cheats-support',
		ja: 'call-of-duty-warzone-cheats-support',
		ko: 'call-of-duty-warzone-cheats-support',
		zh: 'call-of-duty-warzone-cheats-support',
		hi: 'call-of-duty-warzone-cheats-support',
		id: 'call-of-duty-warzone-cheats-support',
		th: 'call-of-duty-warzone-cheats-support',
		vi: 'call-of-duty-warzone-cheats-support',
		uk: 'pidtrymka-chitiv-warzone',
		cs: 'call-of-duty-warzone-cheats-podpora',
		ro: 'suport-cheats-warzone',
		sv: 'call-of-duty-warzone-cheats-support',
	},
	undetected: {
		en: 'undetected-sand-raiders-cheats',
		es: 'trucos-warzone-indetectables',
		fr: 'triche-warzone-indetectable',
		de: 'unentdeckte-call-of-duty-warzone-cheats',
		pt: 'cheats-warzone-indetectaveis',
		it: 'trucchi-warzone-indetectabili',
		nl: 'undetected-sand-raiders-cheats',
		pl: 'niewykrywalne-cheats-warzone',
		ru: 'nedecektiruemye-chity-warzone',
		tr: 'tespit-edilemeyen-warzone-hileleri',
		ar: 'undetected-sand-raiders-cheats',
		ja: 'undetected-sand-raiders-cheats',
		ko: 'undetected-sand-raiders-cheats',
		zh: 'undetected-sand-raiders-cheats',
		hi: 'undetected-sand-raiders-cheats',
		id: 'undetected-sand-raiders-cheats',
		th: 'undetected-sand-raiders-cheats',
		vi: 'undetected-sand-raiders-cheats',
		uk: 'nedecektovani-chity-warzone',
		cs: 'undetected-sand-raiders-cheats',
		ro: 'cheats-warzone-nedetectabile',
		sv: 'undetected-sand-raiders-cheats',
	},
	wallhack: {
		en: 'sand-raiders-wallhack',
		es: 'wallhack-trucos-warzone',
		fr: 'wallhack-triche-warzone',
		de: 'sand-raiders-wallhack',
		pt: 'wallhack-cheats-warzone',
		it: 'wallhack-trucchi-warzone',
		nl: 'sand-raiders-wallhack',
		pl: 'wallhack-cheatow-warzone',
		ru: 'wallhack-chity-warzone',
		tr: 'sand-raiders-wallhack-hile',
		ar: 'sand-raiders-wallhack',
		ja: 'sand-raiders-wallhack',
		ko: 'sand-raiders-wallhack',
		zh: 'sand-raiders-wallhack',
		hi: 'sand-raiders-wallhack',
		id: 'sand-raiders-wallhack',
		th: 'sand-raiders-wallhack',
		vi: 'sand-raiders-wallhack',
		uk: 'wallhack-chity-warzone',
		cs: 'sand-raiders-wallhack',
		ro: 'wallhack-cheats-warzone',
		sv: 'sand-raiders-wallhack',
	},
	radar: {
		en: 'sand-raiders-radar-hack',
		es: 'radar-hack-trucos-warzone',
		fr: 'radar-hack-triche-warzone',
		de: 'sand-raiders-radar-hack',
		pt: 'radar-hack-cheats-warzone',
		it: 'radar-hack-trucchi-warzone',
		nl: 'sand-raiders-radar-hack',
		pl: 'radar-hack-cheatow-warzone',
		ru: 'radar-hack-chity-warzone',
		tr: 'sand-raiders-radar-hack',
		ar: 'sand-raiders-radar-hack',
		ja: 'sand-raiders-radar-hack',
		ko: 'sand-raiders-radar-hack',
		zh: 'sand-raiders-radar-hack',
		hi: 'sand-raiders-radar-hack',
		id: 'sand-raiders-radar-hack',
		th: 'sand-raiders-radar-hack',
		vi: 'sand-raiders-radar-hack',
		uk: 'radar-hack-chity-warzone',
		cs: 'sand-raiders-radar-hack',
		ro: 'radar-hack-cheats-warzone',
		sv: 'sand-raiders-radar-hack',
	},
	'eac-bypass': {
		en: 'eac-bypass',
		es: 'eac-bypass-trucos',
		fr: 'eac-bypass-triche',
		de: 'eac-bypass',
		pt: 'eac-bypass-cheats',
		it: 'eac-bypass-trucchi',
		nl: 'eac-bypass',
		pl: 'eac-bypass-cheatow',
		ru: 'eac-bypass-chity',
		tr: 'eac-bypass',
		ar: 'eac-bypass',
		ja: 'eac-bypass',
		ko: 'eac-bypass',
		zh: 'eac-bypass',
		hi: 'eac-bypass',
		id: 'eac-bypass',
		th: 'eac-bypass',
		vi: 'eac-bypass',
		uk: 'eac-bypass-chity',
		cs: 'eac-bypass',
		ro: 'eac-bypass-cheats',
		sv: 'eac-bypass',
	},
	'cheats-2026': {
		en: 'sand-raiders-cheats-2026',
		es: 'trucos-warzone-2026',
		fr: 'triche-warzone-2026',
		de: 'sand-raiders-cheats-2026',
		pt: 'cheats-warzone-2026',
		it: 'trucchi-warzone-2026',
		nl: 'sand-raiders-cheats-2026',
		pl: 'cheaty-warzone-2026',
		ru: 'chity-warzone-2026',
		tr: 'warzone-hileleri-2026',
		ar: 'sand-raiders-cheats-2026',
		ja: 'sand-raiders-cheats-2026',
		ko: 'sand-raiders-cheats-2026',
		zh: 'sand-raiders-cheats-2026',
		hi: 'sand-raiders-cheats-2026',
		id: 'sand-raiders-cheats-2026',
		th: 'sand-raiders-cheats-2026',
		vi: 'sand-raiders-cheats-2026',
		uk: 'chity-warzone-2026',
		cs: 'sand-raiders-cheats-2026',
		ro: 'cheats-warzone-2026',
		sv: 'sand-raiders-cheats-2026',
	},
	hacks: {
		en: 'sand-raiders-hacks',
		es: 'hacks-trucos-warzone',
		fr: 'hacks-triche-warzone',
		de: 'sand-raiders-hacks',
		pt: 'hacks-cheats-warzone',
		it: 'hacks-trucchi-warzone',
		nl: 'sand-raiders-hacks',
		pl: 'hacks-cheatow-warzone',
		ru: 'haksy-chity-warzone',
		tr: 'warzone-hile-hacks',
		ar: 'sand-raiders-hacks',
		ja: 'sand-raiders-hacks',
		ko: 'sand-raiders-hacks',
		zh: 'sand-raiders-hacks',
		hi: 'sand-raiders-hacks',
		id: 'sand-raiders-hacks',
		th: 'sand-raiders-hacks',
		vi: 'sand-raiders-hacks',
		uk: 'haksy-chity-warzone',
		cs: 'sand-raiders-hacks',
		ro: 'hacks-cheats-warzone',
		sv: 'sand-raiders-hacks',
	},
	'cheat-download': {
		en: 'sand-raiders-cheat-download',
		es: 'descarga-trucos-warzone',
		fr: 'telechargement-triche-warzone',
		de: 'sand-raiders-cheat-download',
		pt: 'download-cheats-warzone',
		it: 'download-trucchi-warzone',
		nl: 'sand-raiders-cheat-download',
		pl: 'pobieranie-cheatow-warzone',
		ru: 'skachat-chity-warzone',
		tr: 'warzone-hile-indir',
		ar: 'sand-raiders-cheat-download',
		ja: 'sand-raiders-cheat-download',
		ko: 'sand-raiders-cheat-download',
		zh: 'sand-raiders-cheat-download',
		hi: 'sand-raiders-cheat-download',
		id: 'sand-raiders-cheat-download',
		th: 'sand-raiders-cheat-download',
		vi: 'sand-raiders-cheat-download',
		uk: 'zavantazhennya-chitiv-warzone',
		cs: 'sand-raiders-cheat-download',
		ro: 'descarcare-cheats-warzone',
		sv: 'sand-raiders-cheat-download',
	},
	'mod-menu': {
		en: 'sand-raiders-mod-menu',
		es: 'menu-mod-trucos-warzone',
		fr: 'menu-mod-triche-warzone',
		de: 'sand-raiders-mod-menu',
		pt: 'menu-mod-cheats-warzone',
		it: 'menu-mod-trucchi-warzone',
		nl: 'sand-raiders-mod-menu',
		pl: 'menu-mod-cheatow-warzone',
		ru: 'mod-menu-chity-warzone',
		tr: 'sand-raiders-mod-menu',
		ar: 'sand-raiders-mod-menu',
		ja: 'sand-raiders-mod-menu',
		ko: 'sand-raiders-mod-menu',
		zh: 'sand-raiders-mod-menu',
		hi: 'sand-raiders-mod-menu',
		id: 'sand-raiders-mod-menu',
		th: 'sand-raiders-mod-menu',
		vi: 'sand-raiders-mod-menu',
		uk: 'mod-menu-chity-warzone',
		cs: 'sand-raiders-mod-menu',
		ro: 'meniu-mod-cheats-warzone',
		sv: 'sand-raiders-mod-menu',
	},
	'soft-aim': {
		en: 'sand-raiders-soft-aim',
		es: 'soft-aim-trucos-warzone',
		fr: 'soft-aim-triche-warzone',
		de: 'sand-raiders-soft-aim',
		pt: 'soft-aim-cheats-warzone',
		it: 'soft-aim-trucchi-warzone',
		nl: 'sand-raiders-soft-aim',
		pl: 'soft-aim-cheatow-warzone',
		ru: 'soft-aim-chity-warzone',
		tr: 'sand-raiders-soft-aim',
		ar: 'sand-raiders-soft-aim',
		ja: 'sand-raiders-soft-aim',
		ko: 'sand-raiders-soft-aim',
		zh: 'sand-raiders-soft-aim',
		hi: 'sand-raiders-soft-aim',
		id: 'sand-raiders-soft-aim',
		th: 'sand-raiders-soft-aim',
		vi: 'sand-raiders-soft-aim',
		uk: 'soft-aim-chity-warzone',
		cs: 'sand-raiders-soft-aim',
		ro: 'soft-aim-cheats-warzone',
		sv: 'sand-raiders-soft-aim',
	},
	'best-cheats': {
		en: 'best-sand-raiders-cheats',
		es: 'mejores-trucos-warzone',
		fr: 'meilleures-triches-warzone',
		de: 'beste-call-of-duty-warzone-cheats',
		pt: 'melhores-cheats-warzone',
		it: 'migliori-trucchi-warzone',
		nl: 'beste-call-of-duty-warzone-cheats',
		pl: 'najlepsze-cheats-warzone',
		ru: 'luchshie-chity-warzone',
		tr: 'en-iyi-warzone-hileleri',
		ar: 'best-sand-raiders-cheats',
		ja: 'best-sand-raiders-cheats',
		ko: 'best-sand-raiders-cheats',
		zh: 'best-sand-raiders-cheats',
		hi: 'best-sand-raiders-cheats',
		id: 'best-sand-raiders-cheats',
		th: 'best-sand-raiders-cheats',
		vi: 'best-sand-raiders-cheats',
		uk: 'naykrashchi-chity-warzone',
		cs: 'nejlepsi-call-of-duty-warzone-cheats',
		ro: 'cele-mai-bune-cheats-warzone',
		sv: 'basta-call-of-duty-warzone-cheats',
	},
	'aimbot-hack': {
		en: 'sand-raiders-aimbot-hack',
		es: 'aimbot-hack-trucos-warzone',
		fr: 'aimbot-hack-triche-warzone',
		de: 'sand-raiders-aimbot-hack',
		pt: 'aimbot-hack-cheats-warzone',
		it: 'aimbot-hack-trucchi-warzone',
		nl: 'sand-raiders-aimbot-hack',
		pl: 'aimbot-hack-cheatow-warzone',
		ru: 'aimbot-hack-chity-warzone',
		tr: 'sand-raiders-aimbot-hack',
		ar: 'sand-raiders-aimbot-hack',
		ja: 'sand-raiders-aimbot-hack',
		ko: 'sand-raiders-aimbot-hack',
		zh: 'sand-raiders-aimbot-hack',
		hi: 'sand-raiders-aimbot-hack',
		id: 'sand-raiders-aimbot-hack',
		th: 'sand-raiders-aimbot-hack',
		vi: 'sand-raiders-aimbot-hack',
		uk: 'aimbot-hack-chity-warzone',
		cs: 'sand-raiders-aimbot-hack',
		ro: 'aimbot-hack-cheats-warzone',
		sv: 'sand-raiders-aimbot-hack',
	},
	'esp-hack': {
		en: 'sand-raiders-esp-hack',
		es: 'esp-hack-trucos-warzone',
		fr: 'esp-hack-triche-warzone',
		de: 'sand-raiders-esp-hack',
		pt: 'esp-hack-cheats-warzone',
		it: 'esp-hack-trucchi-warzone',
		nl: 'sand-raiders-esp-hack',
		pl: 'esp-hack-cheatow-warzone',
		ru: 'esp-hack-chity-warzone',
		tr: 'sand-raiders-esp-hack',
		ar: 'sand-raiders-esp-hack',
		ja: 'sand-raiders-esp-hack',
		ko: 'sand-raiders-esp-hack',
		zh: 'sand-raiders-esp-hack',
		hi: 'sand-raiders-esp-hack',
		id: 'sand-raiders-esp-hack',
		th: 'sand-raiders-esp-hack',
		vi: 'sand-raiders-esp-hack',
		uk: 'esp-hack-chity-warzone',
		cs: 'sand-raiders-esp-hack',
		ro: 'esp-hack-cheats-warzone',
		sv: 'sand-raiders-esp-hack',
	},
	'unlock-all': {
		en: 'sand-raiders-unlock-all',
		es: 'unlock-all-trucos-warzone',
		fr: 'unlock-all-triche-warzone',
		de: 'sand-raiders-unlock-all',
		pt: 'unlock-all-cheats-warzone',
		it: 'unlock-all-trucchi-warzone',
		nl: 'sand-raiders-unlock-all',
		pl: 'unlock-all-cheatow-warzone',
		ru: 'unlock-all-chity-warzone',
		tr: 'sand-raiders-unlock-all',
		ar: 'sand-raiders-unlock-all',
		ja: 'sand-raiders-unlock-all',
		ko: 'sand-raiders-unlock-all',
		zh: 'sand-raiders-unlock-all',
		hi: 'sand-raiders-unlock-all',
		id: 'sand-raiders-unlock-all',
		th: 'sand-raiders-unlock-all',
		vi: 'sand-raiders-unlock-all',
		uk: 'unlock-all-chity-warzone',
		cs: 'sand-raiders-unlock-all',
		ro: 'unlock-all-cheats-warzone',
		sv: 'sand-raiders-unlock-all',
	},
	privacy: {
		en: 'privacy-policy',
		es: 'politica-privacidad',
		fr: 'politique-confidentialite',
		de: 'datenschutz',
		pt: 'politica-privacidade',
		it: 'privacy-policy',
		nl: 'privacybeleid',
		pl: 'polityka-prywatnosci',
		ru: 'politika-konfidencialnosti',
		tr: 'gizlilik-politikasi',
		ar: 'privacy-policy',
		ja: 'privacy-policy',
		ko: 'privacy-policy',
		zh: 'privacy-policy',
		hi: 'privacy-policy',
		id: 'privacy-policy',
		th: 'privacy-policy',
		vi: 'privacy-policy',
		uk: 'polityka-konfidentsijnosti',
		cs: 'ochrana-osobnich-udaju',
		ro: 'politica-confidentialitate',
		sv: 'integritetspolicy',
	},
	refund: {
		en: 'refund-policy',
		es: 'politica-reembolso',
		fr: 'politique-remboursement',
		de: 'rueckerstattung',
		pt: 'politica-reembolso',
		it: 'politica-rimborso',
		nl: 'terugbetalingsbeleid',
		pl: 'polityka-zwrotow',
		ru: 'politika-vozvrata',
		tr: 'iade-politikasi',
		ar: 'refund-policy',
		ja: 'refund-policy',
		ko: 'refund-policy',
		zh: 'refund-policy',
		hi: 'refund-policy',
		id: 'refund-policy',
		th: 'refund-policy',
		vi: 'refund-policy',
		uk: 'polityka-povorennya',
		cs: 'refund-policy',
		ro: 'politica-rambursare',
		sv: 'aterbetalningspolicy',
	},
	terms: {
		en: 'terms',
		es: 'terminos-uso',
		fr: 'conditions-utilisation',
		de: 'nutzungsbedingungen',
		pt: 'termos-uso',
		it: 'termini-uso',
		nl: 'gebruiksvoorwaarden',
		pl: 'regulamin',
		ru: 'usloviya-ispolzovaniya',
		tr: 'kullanim-kosullari',
		ar: 'terms',
		ja: 'terms',
		ko: 'terms',
		zh: 'terms',
		hi: 'terms',
		id: 'terms',
		th: 'terms',
		vi: 'terms',
		uk: 'umovy-vykorystannya',
		cs: 'podminky-uziti',
		ro: 'termeni-utilizare',
		sv: 'anvandarvillkor',
	},
};

export const pageIds = Object.keys(englishPaths) as PageId[];

export function getLocalizedPath(pageId: PageId, locale: LocaleCode): string {
	if (locale === defaultLocale) {
		return englishPaths[pageId] ?? '/';
	}
	const slug = localizedSlugs[pageId]?.[locale];
	return slug ? `/${locale}/${slug}/` : `/${locale}/`;
}

/** Map English root paths to the correct locale URL (for CTAs and inline links). */
export function localizeInternalHref(href: string, locale: LocaleCode): string {
	if (!href || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('#')) {
		return href;
	}
	const trimmed = href.replace(/\/+$/, '') || '/';
	const withSlash = trimmed === '/' ? '/' : `${trimmed}/`;
	for (const pageId of pageIds) {
		const english = englishPaths[pageId];
		if (english === withSlash || english.replace(/\/+$/, '') === trimmed) {
			return getLocalizedPath(pageId, locale);
		}
	}
	return href;
}

/** Canonical absolute URL — always https apex with trailing slash (matches Layout.astro). */
export function buildCanonicalUrl(path: string): string {
	const normalized =
		!path || path === '/'
			? '/'
			: path.endsWith('/') || path.includes('.')
				? path
				: `${path}/`;
	return new URL(normalized, siteConfig.url).href;
}

export function absoluteLocalizedUrl(pageId: PageId, locale: LocaleCode): string {
	return buildCanonicalUrl(getLocalizedPath(pageId, locale));
}

export type HreflangAlternate = { hreflang: string; href: string };

/** Self-referential hreflang for single-locale pages (reviews, 404). */
export function getSelfHreflangAlternates(
	path: string,
	locale: LocaleCode = defaultLocale,
): HreflangAlternate[] {
	const href = buildCanonicalUrl(path);
	return [
		{ hreflang: localeMap[locale].hreflang, href },
		{ hreflang: 'x-default', href },
	];
}

export function getHreflangAlternates(pageId: PageId, currentLocale: LocaleCode = defaultLocale) {
	const byLocale = localeCodes.map((code) => ({
		hreflang: localeMap[code].hreflang,
		href: absoluteLocalizedUrl(pageId, code),
		code,
	}));
	const self = byLocale.find((alt) => alt.code === currentLocale)!;
	const others = byLocale.filter((alt) => alt.code !== currentLocale);
	const xDefault = {
		hreflang: 'x-default' as const,
		href: absoluteLocalizedUrl(pageId, defaultLocale),
	};
	// Self-referential hreflang first — required by Google/Seobility for the active locale.
	return [
		{ hreflang: self.hreflang, href: self.href },
		...others.map(({ hreflang, href }) => ({ hreflang, href })),
		xDefault,
	];
}

export function resolvePageIdFromPath(path: string): PageId | undefined {
	const normalized = path.endsWith('/') ? path : `${path}/`;
	for (const id of pageIds) {
		if (englishPaths[id] === normalized) return id;
	}
	return undefined;
}

/** Parsed locale + page from any site URL (English root or /{lang}/…). */
export type PageContext = {
	locale: LocaleCode;
	pageId?: PageId;
	isBlogIndex?: boolean;
	blogSlug?: string;
};

function normalizePathname(pathname: string): string {
	if (!pathname || pathname === '/') return '/';
	if (pathname.includes('.') || pathname.endsWith('/')) return pathname;
	return `${pathname}/`;
}

/** Resolve locale and page/blog context from the current URL path. */
export function resolvePageContextFromPath(pathname: string): PageContext {
	const path = normalizePathname(pathname);

	if (path === '/') {
		return { locale: defaultLocale, pageId: 'home' };
	}

	const segments = path.split('/').filter(Boolean);
	let locale: LocaleCode = defaultLocale;
	let offset = 0;

	if (segments.length > 0 && isLocaleCode(segments[0]) && segments[0] !== defaultLocale) {
		locale = segments[0];
		offset = 1;
	}

	const rest = segments.slice(offset);

	if (rest.length === 0) {
		return { locale, pageId: 'home' };
	}

	if (rest[0] === 'blog') {
		if (rest.length === 1) {
			return { locale, isBlogIndex: true };
		}
		return { locale, blogSlug: rest[1] };
	}

	if (locale === defaultLocale) {
		return { locale, pageId: resolvePageIdFromPath(path) };
	}

	return { locale, pageId: resolvePageFromLocalizedPath(locale, rest[0]) };
}

/** Target URL for the same page in another locale (non-blog pages). */
export function getPageLocaleSwitchHref(context: PageContext, targetLocale: LocaleCode): string {
	if (context.pageId) {
		return getLocalizedPath(context.pageId, targetLocale);
	}
	return getLocalizedPath('home', targetLocale);
}

export function hreflangLinksXml(pageId: PageId, escapeXml: (v: string) => string): string {
	return getHreflangAlternates(pageId)
		.map(
			(alt) =>
				`    <xhtml:link rel="alternate" hreflang="${escapeXml(alt.hreflang)}" href="${escapeXml(alt.href)}"/>`,
		)
		.join('\n');
}

export function resolvePageFromLocalizedPath(
	locale: LocaleCode,
	slug: string | undefined,
): PageId | undefined {
	if (!slug) return 'home';
	for (const pageId of pageIds) {
		if (localizedSlugs[pageId][locale] === slug) return pageId;
	}
	return undefined;
}

/** Map Accept-Language header to preferred locale (region-aware). */
export function localeFromAcceptLanguage(header: string | null): LocaleCode {
	if (!header) return defaultLocale;
	const prefs = header
		.split(',')
		.map((part) => {
			const [tag, qPart] = part.trim().split(';');
			const q = qPart?.startsWith('q=') ? Number.parseFloat(qPart.slice(2)) : 1;
			return { tag: tag.toLowerCase(), q };
		})
		.sort((a, b) => b.q - a.q);

	for (const { tag } of prefs) {
		const primary = tag.split('-')[0];
		if (localeCodes.includes(primary as LocaleCode)) return primary as LocaleCode;
	}
	return defaultLocale;
}

export function getNavForLocale(locale: LocaleCode, labels: Record<string, string>) {
	const items: { label: string; href: string; pageId?: PageId }[] = [
		{ label: labels.home, href: getLocalizedPath('home', locale), pageId: 'home' },
	{ label: labels.hacks ?? 'Hacks', href: getLocalizedPath('hacks', locale), pageId: 'hacks' },
		{ label: labels.aimbot, href: getLocalizedPath('sand-raiders-aimbot', locale), pageId: 'sand-raiders-aimbot' },
		{ label: labels.esp, href: getLocalizedPath('sand-raiders-esp', locale), pageId: 'sand-raiders-esp' },
		{ label: 'Blog', href: locale === defaultLocale ? '/blog/' : `/${locale}/blog/` },
		{ label: labels.features, href: getLocalizedPath('features', locale), pageId: 'features' },
		{ label: labels.pricing, href: getLocalizedPath('pricing', locale), pageId: 'pricing' },
		{ label: labels.setup, href: getLocalizedPath('setup', locale), pageId: 'setup' },
		{ label: labels.updates, href: getLocalizedPath('updates', locale), pageId: 'updates' },
		{ label: labels.faq, href: getLocalizedPath('faq', locale), pageId: 'faq' },
	];
	return items;
}
