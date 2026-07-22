import React from 'react';
import FleetPreview from '@/components/home/FleetPreview';

export const metadata = {
  title: 'Our Fleet | Kanishka Travels — Maruti Dzire, Innova Crysta, Tempo Traveller',
  description: 'View vehicle categories available for booking with Kanishka Travels in Chennai. Clean, AC, well-maintained vehicles.',
};

export default function FleetPage() {
  return (
    <div className="py-8">
      <FleetPreview />
    </div>
  );
}
