import type { LocaleCode } from './locales';
import { i18nContent, type PageId } from './content.generated';

export { i18nContent };
export type { PageId, PageContent, PageSection, LocaleUi } from './content.generated';

export function getLocaleContent(locale: LocaleCode) {
	return i18nContent[locale];
}

export function getPageContent(locale: LocaleCode, pageId: PageId) {
	const pages = i18nContent[locale].pages as Record<string, (typeof i18nContent)[LocaleCode]['pages'][PageId]>;
	// Content may still use legacy `ricochet` key until the next generate:i18n pass.
	if (pageId === 'eac-bypass' && !pages[pageId] && pages.ricochet) {
		return pages.ricochet;
	}
	return pages[pageId];
}

export function getUi(locale: LocaleCode) {
	return i18nContent[locale].ui;
}
