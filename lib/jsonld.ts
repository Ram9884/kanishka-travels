import { siteConfig } from './seo.config';
import { TESTIMONIALS } from '@/data/testimonials';
import { FAQ_ITEMS, FAQItem } from '@/data/faq';

export function getTaxiServiceSchema() {
  const reviews = TESTIMONIALS.map((t) => ({
    '@type': 'Review',
    author: {
      '@type': 'Person',
      name: t.name,
    },
    datePublished: '2026-01-01',
    reviewBody: t.review,
    reviewRating: {
      '@type': 'Rating',
      ratingValue: t.rating,
      bestRating: 5,
      worstRating: 1,
    },
  }));

  const totalRatingSum = TESTIMONIALS.reduce((acc, curr) => acc + curr.rating, 0);
  const avgRating = (totalRatingSum / (TESTIMONIALS.length || 1)).toFixed(1);

  const servedAreas = siteConfig.serviceAreas.map((area) => ({
    '@type': 'Place',
    name: `${area}, Chennai`,
  }));

  return {
    '@context': 'https://schema.org',
    '@type': 'TaxiService',
    '@id': `${siteConfig.url}/#taxiservice`,
    name: siteConfig.siteName,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    priceRange: siteConfig.priceRange,
    slogan: siteConfig.slogan,
    image: siteConfig.ogImage.url,
    logo: `${siteConfig.url}/favicon.ico`,
    openingHours: siteConfig.openingHours,
    openingHoursSpecification: siteConfig.openingHoursSpecification.map((spec) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: spec.dayOfWeek,
      opens: spec.opens,
      closes: spec.closes,
    })),
    geo: {
      '@type': 'GeoCoordinates',
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.streetAddress,
      addressLocality: siteConfig.address.addressLocality,
      addressRegion: siteConfig.address.addressRegion,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.addressCountry,
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Chennai',
      },
      {
        '@type': 'State',
        name: 'Tamil Nadu',
      },
      ...servedAreas,
    ],
    provider: {
      '@type': 'LocalBusiness',
      name: siteConfig.siteName,
      founder: siteConfig.owner,
      telephone: siteConfig.phone,
      email: siteConfig.email,
      address: {
        '@type': 'PostalAddress',
        streetAddress: siteConfig.address.streetAddress,
        addressLocality: siteConfig.address.addressLocality,
        addressRegion: siteConfig.address.addressRegion,
        postalCode: siteConfig.address.postalCode,
        addressCountry: siteConfig.address.addressCountry,
      },
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: siteConfig.rating.ratingValue.toString(),
      reviewCount: siteConfig.rating.reviewCount,
      bestRating: siteConfig.rating.bestRating.toString(),
      worstRating: siteConfig.rating.worstRating.toString(),
    },
    review: reviews,
  };
}

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteConfig.url}/#organization`,
    name: siteConfig.siteName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/favicon.ico`,
    founder: siteConfig.owner,
    foundingDate: `${siteConfig.foundingYear}`,
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: siteConfig.phone,
        contactType: 'customer service',
        areaServed: 'IN',
        availableLanguage: ['en', 'ta'],
      },
    ],
    sameAs: siteConfig.socialLinks,
  };
}

export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.siteName,
    description: siteConfig.description,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteConfig.url}/services?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

export function getBreadcrumbSchema(pathname: string = '/') {
  const cleanPath = pathname.split('?')[0].split('#')[0];
  const segments = cleanPath.split('/').filter(Boolean);

  const itemListElement = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: siteConfig.url,
    },
  ];

  let currentPath = '';

  segments.forEach((seg, index) => {
    currentPath += `/${seg}`;
    const formattedName = seg
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    itemListElement.push({
      '@type': 'ListItem',
      position: index + 2,
      name: formattedName,
      item: `${siteConfig.url}${currentPath}`,
    });
  });

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement,
  };
}

export function getFAQPageSchema(customFaqs?: FAQItem[]) {
  const faqsToUse = customFaqs && customFaqs.length > 0 ? customFaqs : FAQ_ITEMS;

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqsToUse.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function getServiceSchema({
  name,
  description,
  serviceType = 'Outstation Cab Rental',
}: {
  name: string;
  description: string;
  serviceType?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    serviceType,
    provider: {
      '@type': 'LocalBusiness',
      name: siteConfig.siteName,
      telephone: siteConfig.phone,
      url: siteConfig.url,
      address: {
        '@type': 'PostalAddress',
        streetAddress: siteConfig.address.streetAddress,
        addressLocality: siteConfig.address.addressLocality,
        addressRegion: siteConfig.address.addressRegion,
        postalCode: siteConfig.address.postalCode,
        addressCountry: siteConfig.address.addressCountry,
      },
    },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'Chennai, Tamil Nadu, India',
    },
  };
}
