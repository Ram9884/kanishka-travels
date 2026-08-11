import React from 'react';
import { Metadata } from 'next';
import FleetHero from '@/components/fleet/FleetHero';
import FleetPhilosophy from '@/components/fleet/FleetPhilosophy';
import FleetVehicleSpotlight from '@/components/fleet/FleetVehicleSpotlight';
import FleetWhyUs from '@/components/fleet/FleetWhyUs';
import FleetStats from '@/components/fleet/FleetStats';
import FleetCTA from '@/components/fleet/FleetCTA';
import { generatePageMetadata } from '@/lib/seo';
import { getBreadcrumbSchema } from '@/lib/jsonld';
import JsonLdScript from '@/components/JsonLdScript';

export const metadata: Metadata = generatePageMetadata({
  title: 'Premium Fleet — Innova Crysta, Hycross & Tempo Traveller Rental Chennai',
  description:
    'Explore Kanishka Travels\' luxury vehicle fleet: Innova Crysta, Hycross, Tempo Traveller, Ertiga, Swift Dzire, and Executive Coaches — all with professional chauffeurs across South India.',
  path: '/fleet',
  keywords: [
    'Innova Crysta rental Chennai',
    'Innova Hycross rental Chennai',
    'Tempo Traveller rental Chennai',
    'Swift Dzire outstation cab',
    'Luxury cab fleet Chennai',
  ],
});

export default function FleetPage() {
  const breadcrumbSchema = getBreadcrumbSchema('/fleet');

  return (
    <>
      <JsonLdScript data={breadcrumbSchema} id="fleet-breadcrumb-schema" />
      <main className="relative min-h-screen bg-transparent overflow-hidden">
        {/* 1. Cinematic GSAP Hero */}
        <FleetHero />

        {/* 2. Travel Philosophy Card */}
        <FleetPhilosophy />

        {/* 3. Per-Vehicle Cinematic Spotlights */}
        <FleetVehicleSpotlight />

        {/* 4. Why Trust This Fleet */}
        <FleetWhyUs />

        {/* 5. Animated Stats Counter Panel */}
        <FleetStats />

        {/* 6. Luxury CTA */}
        <FleetCTA />
      </main>
    </>
  );
}
