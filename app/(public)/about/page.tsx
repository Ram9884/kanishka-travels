import React from 'react';
import AboutHero from '@/components/about/AboutHero';
import AboutStory from '@/components/about/AboutStory';
import AboutPillars from '@/components/about/AboutPillars';
import AboutTimeline from '@/components/about/AboutTimeline';
import AboutTestimonials from '@/components/about/AboutTestimonials';
import AboutFounderCard from '@/components/about/AboutFounderCard';
import AboutCTA from '@/components/about/AboutCTA';

export const metadata = {
  title: 'About Us — S. Ramesh & Kanishka Travels Chennai',
  description: 'Learn the story of Kanishka Travels, Chennai’s premier luxury cab service personally operated by S. Ramesh in Iyyappanthangal since 2012.',
};

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-transparent overflow-hidden">
      {/* 1. Hero Header */}
      <AboutHero />

      {/* 2. The Founder's Story & Message */}
      <AboutStory />

      {/* 3. 4 Core Service Principles */}
      <AboutPillars />

      {/* 4. Heritage Timeline (2012 - Present) */}
      <AboutTimeline />

      {/* 5. Guest Testimonials */}
      <AboutTestimonials />

      {/* 6. Founder Profile & Contact Card */}
      <AboutFounderCard />

      {/* 7. Conversion CTA */}
      <AboutCTA />
    </main>
  );
}
