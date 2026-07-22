import React from 'react';
import ServicesSection from '@/components/home/ServicesSection';

export const metadata = {
  title: 'Services | Kanishka Travels — Taxi, Outstation & Tours',
  description: 'Explore taxi, airport pickup, outstation round-trip tours, and temple packages by Kanishka Travels in Chennai.',
};

export default function ServicesPage() {
  return (
    <div className="py-8">
      <ServicesSection />
    </div>
  );
}
