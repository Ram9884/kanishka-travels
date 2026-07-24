import React from 'react';
import FluidCanvas from '@/components/services/FluidCanvas';
import ServicesHero from '@/components/services/ServicesHero';
import ServicesIntro from '@/components/services/ServicesIntro';
import ServiceExperience from '@/components/services/ServiceExperience';
import WhyChooseServices from '@/components/services/WhyChooseServices';
import ServicesCTA from '@/components/services/ServicesCTA';

export const metadata = {
  title: 'Luxury Mobility & Chauffeur Services | Kanishka Travels',
  description: 'Explore our premium bespoke chauffeur services, including airport transfers, outstation pilgrimages, corporate fleets, and wedding convoys across South India.',
};

export default function ServicesPage() {
  return (
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
  );
}
