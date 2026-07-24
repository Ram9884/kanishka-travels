import React from 'react';
import FleetHero from '@/components/fleet/FleetHero';
import FleetPhilosophy from '@/components/fleet/FleetPhilosophy';
import FleetVehicleSpotlight from '@/components/fleet/FleetVehicleSpotlight';
import FleetWhyUs from '@/components/fleet/FleetWhyUs';
import FleetStats from '@/components/fleet/FleetStats';
import FleetCTA from '@/components/fleet/FleetCTA';

export const metadata = {
  title: 'Premium Fleet — Luxury Vehicles | Kanishka Travels Chennai',
  description: 'Explore Kanishka Travels\' 7 premium vehicles: Innova Crysta, Tempo Traveller, Ertiga, Swift Dzire, Toyota Etios, and Executive Mini Bus — all with professional chauffeurs across South India.',
};

export default function FleetPage() {
  return (
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
  );
}
