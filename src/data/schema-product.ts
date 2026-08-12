/**
 * Shared Product / SoftwareApplication / AggregateRating JSON-LD helpers.
 * Keep patterns aligned with Layout.astro @graph (no nested @context).
 */
import {
	customerReviewStats,
	customerReviews,
	productInfo,
	seoKeywords,
	siteConfig,
} from './site';

const PRICE_VALID_UNTIL = '2027-12-31';

export type SchemaNode = Record<string, unknown>;

function abs(pathOrUrl: string): string {
	return new URL(pathOrUrl, siteConfig.url).href;
}

export function aggregateRatingNode(): SchemaNode {
	return {
		'@type': 'AggregateRating',
		ratingValue: customerReviewStats.averageRating.toFixed(1),
		reviewCount: customerReviewStats.totalCount,
		bestRating: '5',
		worstRating: '1',
	};
}

export function reviewNodes(limit = 3): SchemaNode[] {
	return customerReviews.slice(0, limit).map((review) => ({
		'@type': 'Review',
		author: { '@type': 'Person', name: review.handle },
		datePublished: review.date,
		reviewRating: {
			'@type': 'Rating',
			ratingValue: String(review.rating),
			bestRating: '5',
			worstRating: '1',
		},
		reviewBody: review.text,
	}));
}

export function aggregateOfferNode(): SchemaNode {
	return {
		'@type': 'AggregateOffer',
		lowPrice: Math.min(...productInfo.plans.map((p) => p.price)).toFixed(2),
		highPrice: Math.max(...productInfo.plans.map((p) => p.price)).toFixed(2),
		priceCurrency: productInfo.currency,
		offerCount: productInfo.plans.length,
		offers: productInfo.plans.map((plan) => ({
			'@type': 'Offer',
			name: `${productInfo.name} ${plan.label}`,
			price: plan.price.toFixed(2),
			priceCurrency: productInfo.currency,
			priceValidUntil: PRICE_VALID_UNTIL,
			availability: 'https://schema.org/InStock',
			url: siteConfig.checkoutUrl,
			seller: { '@id': `${siteConfig.url}/#organization` },
		})),
	};
}

export type ProductSoftwareOptions = {
	/** Canonical page URL (absolute or path) used for @id / url */
	pageUrl: string;
	/** Optional product display name override (e.g. Cloud DMA label) */
	name?: string;
	description?: string;
	image?: string;
	/** Include AggregateRating + sample reviews on Product */
	includeReviews?: boolean;
	/** Include AggregateOffer on Product and SoftwareApplication */
	includeOffers?: boolean;
	/** SoftwareApplication @id suffix (default #software) */
	softwareIdSuffix?: string;
	/** Product @id suffix (default #product) */
	productIdSuffix?: string;
};

/**
 * Product + SoftwareApplication pair for gaming software product pages.
 * WebPage.about is wired in Layout when SoftwareApplication is present.
 */
export function productSoftwareGraph(options: ProductSoftwareOptions): SchemaNode[] {
	const pageUrl = abs(options.pageUrl);
	const name = options.name ?? productInfo.name;
	const description = options.description ?? productInfo.summary;
	const image = abs(options.image ?? siteConfig.defaultOgImage);
	const includeReviews = options.includeReviews !== false;
	const includeOffers = options.includeOffers !== false;
	const productId = `${pageUrl}${options.productIdSuffix ?? '#product'}`;
	const softwareId = `${pageUrl}${options.softwareIdSuffix ?? '#software'}`;
	const offers = includeOffers ? aggregateOfferNode() : undefined;

	const product: SchemaNode = {
		'@type': 'Product',
		'@id': productId,
		name,
		description,
		image,
		brand: { '@type': 'Brand', name: productInfo.brand },
		url: pageUrl,
		category: 'GameApplication',
		...(includeReviews
			? {
					aggregateRating: aggregateRatingNode(),
					review: reviewNodes(3),
				}
			: {}),
		...(offers ? { offers } : {}),
	};

	const software: SchemaNode = {
		'@type': 'SoftwareApplication',
		'@id': softwareId,
		name,
		applicationCategory: 'GameApplication',
		operatingSystem: 'Windows',
		description,
		url: pageUrl,
		image,
		brand: { '@type': 'Brand', name: productInfo.brand },
		keywords: seoKeywords.join(', '),
		...(includeReviews ? { aggregateRating: aggregateRatingNode() } : {}),
		...(offers ? { offers } : {}),
		isRelatedTo: { '@id': productId },
	};

	return [product, software];
}
