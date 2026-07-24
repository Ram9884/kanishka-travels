import React from 'react';
import FleetShowcase from '@/components/fleet/FleetShowcase';

export const metadata = {
  title: 'Featured Vehicles & Fleet | Kanishka Travels — Swift Dzire, Ertiga, Innova Crysta, Tempo Traveller',
  description: 'Explore Kanishka Travels fleet: Swift Dzire, Ertiga, Etios, Innova, Innova Crysta, Tempo Traveller, and Mini Bus with professional chauffeurs.',
};

export default function FleetPage() {
  return (
    <main className="pt-20">
      <FleetShowcase />
    </main>
  );
}
