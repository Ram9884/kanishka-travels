import type { Metadata } from 'next';
import { siteConfig } from './seo.config';

export interface PageSeoOptions {
  title?: string;
  description?: string;
  path?: string;
  keywords?: string[];
  ogImage?: {
    url: string;
    width?: number;
    height?: number;
    alt?: string;
    type?: string;
  };
  noIndex?: boolean;
}

export function generatePageMetadata(options: PageSeoOptions = {}): Metadata {
  const {
    title,
    description = siteConfig.description,
    path = '',
    keywords = [],
    ogImage,
    noIndex = false,
  } = options;

  const canonicalUrl = `${siteConfig.url}${path.startsWith('/') ? path : `/${path}`}`;
  const fullTitle = title
    ? `${title} | ${siteConfig.siteName}`
    : `${siteConfig.siteName} | Luxury Outstation Cabs & Taxi Service in Chennai`;

  const mergedKeywords = Array.from(
    new Set([...keywords, ...siteConfig.defaultKeywords])
  );

  const imageObj = ogImage || siteConfig.ogImage;
  const ogImageUrl = imageObj.url.startsWith('http')
    ? imageObj.url
    : `${siteConfig.url}${imageObj.url.startsWith('/') ? imageObj.url : `/${imageObj.url}`}`;

  return {
    title: fullTitle,
    description,
    keywords: mergedKeywords,
    authors: [{ name: siteConfig.owner }],
    creator: siteConfig.siteName,
    publisher: siteConfig.siteName,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: canonicalUrl,
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl,
      siteName: siteConfig.siteName,
      locale: 'en_IN',
      type: 'website',
      images: [
        {
          url: ogImageUrl,
          width: imageObj.width || 1200,
          height: imageObj.height || 630,
          alt: imageObj.alt || `${siteConfig.siteName} Preview`,
          type: imageObj.type || 'image/jpeg',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      creator: siteConfig.siteName,
      images: [ogImageUrl],
    },
    verification: {
      google: siteConfig.verification.google || undefined,
      other: {
        ...(siteConfig.verification.bing ? { 'msvalidate.01': siteConfig.verification.bing } : {}),
        ...(siteConfig.verification.pinterest ? { 'p:domain_verify': siteConfig.verification.pinterest } : {}),
        ...(siteConfig.verification.yandex ? { yandex: siteConfig.verification.yandex } : {}),
      },
    },
    icons: {
      icon: '/icon.png',
      shortcut: '/icon.png',
      apple: '/apple-touch-icon.png',
    },
  };
}
