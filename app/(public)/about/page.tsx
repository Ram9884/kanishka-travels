import React from 'react';
import { Metadata } from 'next';
import AboutHero from '@/components/about/AboutHero';
import AboutStory from '@/components/about/AboutStory';
import AboutPillars from '@/components/about/AboutPillars';
import AboutTimeline from '@/components/about/AboutTimeline';
import AboutFounderCard from '@/components/about/AboutFounderCard';
import AboutCTA from '@/components/about/AboutCTA';
import GoogleMapsEmbed from '@/components/local/GoogleMapsEmbed';
import LocalTrustSignals from '@/components/local/LocalTrustSignals';
import { generatePageMetadata } from '@/lib/seo';
import { getBreadcrumbSchema } from '@/lib/jsonld';
import JsonLdScript from '@/components/JsonLdScript';

export const metadata: Metadata = generatePageMetadata({
  title: 'About Us — S. Ramesh & Kanishka Travels Chennai',
  description:
    'Learn the story of Kanishka Travels, Chennai’s premier luxury cab service personally operated by S. Ramesh in Iyyappanthangal since 2014.',
  path: '/about',
  keywords: [
    'S Ramesh Kanishka Travels',
    'About Kanishka Travels',
    'Iyyappanthangal taxi operator',
    'Chennai travel agency story',
    'Porur cab service owner',
  ],
});

export default function AboutPage() {
  const breadcrumbSchema = getBreadcrumbSchema('/about');

  return (
    <>
      <JsonLdScript data={breadcrumbSchema} id="about-breadcrumb-schema" />
      <main className="relative min-h-screen bg-transparent overflow-hidden">
        {/* 1. Hero Header */}
        <AboutHero />

        {/* 2. The Founder's Story & Message */}
        <AboutStory />

        {/* 3. 4 Core Service Principles */}
        <AboutPillars />

        {/* 4. Heritage Timeline (2014 - Present) */}
        <AboutTimeline />

        {/* 5. Founder Profile & Contact Card */}
        <AboutFounderCard />

        {/* 6. Local Trust & Map Directions Integration */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 relative z-10">
          <LocalTrustSignals />
          <GoogleMapsEmbed />
        </div>

        {/* 7. Conversion CTA */}
        <AboutCTA />
      </main>
    </>
  );
}
