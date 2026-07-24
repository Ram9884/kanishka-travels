import React from 'react';
import ServicesGrid from '@/components/services/ServicesGrid';

export const metadata = {
  title: 'Our Premium Services | Kanishka Travels — Chennai Taxi & Outstation',
  description: 'Explore 24/7 airport transfers, outstation round-trips, corporate mobility, temple packages, wedding travel, and monthly rentals by Kanishka Travels.',
};

export default function ServicesPage() {
  return (
    <main className="pt-20">
      <ServicesGrid />
    </main>
  );
}
