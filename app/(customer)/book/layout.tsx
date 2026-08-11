import React from 'react';
import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo';
import { getBreadcrumbSchema } from '@/lib/jsonld';
import JsonLdScript from '@/components/JsonLdScript';

export const metadata: Metadata = generatePageMetadata({
  title: 'Book Your Outstation Cab & Taxi | Kanishka Travels Chennai',
  description:
    'Book Innova Crysta, Hycross, Swift Dzire, or Tempo Traveller with zero advance payment. Direct owner confirmation with S. Ramesh in Chennai.',
  path: '/book',
  keywords: [
    'Book outstation cab Chennai',
    'Innova Crysta booking Chennai',
    'Airport taxi booking',
    'Kanishka Travels booking',
  ],
});

export default function BookLayout({ children }: { children: React.ReactNode }) {
  const breadcrumbSchema = getBreadcrumbSchema('/book');

  return (
    <>
      <JsonLdScript data={breadcrumbSchema} id="book-breadcrumb-schema" />
      {children}
    </>
  );
}
