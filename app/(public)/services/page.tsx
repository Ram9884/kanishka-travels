import React from 'react';
import { Metadata } from 'next';
import FluidCanvas from '@/components/services/FluidCanvas';
import ServicesHero from '@/components/services/ServicesHero';
import ServicesIntro from '@/components/services/ServicesIntro';
import ServiceExperience from '@/components/services/ServiceExperience';
import WhyChooseServices from '@/components/services/WhyChooseServices';
import ServicesCTA from '@/components/services/ServicesCTA';
import { generatePageMetadata } from '@/lib/seo';
import { getBreadcrumbSchema, getFAQPageSchema } from '@/lib/jsonld';
import JsonLdScript from '@/components/JsonLdScript';

export const metadata: Metadata = generatePageMetadata({
  title: 'Luxury Mobility & Chauffeur Services | Outstation, Airport & Pilgrimage Taxi',
  description:
    'Explore Kanishka Travels bespoke travel services: Outstation cab rentals, 24/7 Chennai airport transfers, family pilgrimage packages, and executive corporate fleets across South India.',
  path: '/services',
  keywords: [
    'Outstation cab service Chennai',
    'Airport taxi pickup Chennai',
    'Tirupati pilgrimage taxi',
    'Corporate car rental Chennai',
    'Pondicherry outstation cab',
  ],
});

export default function ServicesPage() {
  const breadcrumbSchema = getBreadcrumbSchema('/services');
  const faqSchema = getFAQPageSchema();

  return (
    <>
      <JsonLdScript data={[breadcrumbSchema, faqSchema]} id="services-schemas" />
      <main className="relative min-h-screen bg-transparent overflow-hidden">
        {/* 1. Subtle gold particle canvas animated via anime.js */}
        <FluidCanvas />

        {/* 2. Cinematic Page Hero */}
        <ServicesHero />

        {/* 3. Brand Philosophy */}
        <ServicesIntro />

        {/* 4. Alternating Parallax Service Experiences */}
        <ServiceExperience />

        {/* 5. Feature Matrix Grid */}
        <WhyChooseServices />

        {/* 6. Redirection Conversion Panel */}
        <ServicesCTA />
      </main>
    </>
  );
}
