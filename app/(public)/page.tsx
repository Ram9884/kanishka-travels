import React from 'react';
import { Metadata } from 'next';
import HeroSection from '@/components/home/HeroSection';
import PopularDestinations from '@/components/destinations/PopularDestinations';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import BookingTimeline from '@/components/timeline/BookingTimeline';
import AnimatedStats from '@/components/stats/AnimatedStats';
import PremiumTestimonials from '@/components/testimonials/PremiumTestimonials';
import FAQAccordion from '@/components/faq/FAQAccordion';
import SectionDivider from '@/components/ui/SectionDivider';
import { ScrollStoryControllerProvider } from '@/components/animation/ScrollStoryController';
import { generatePageMetadata } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata({
  title: 'Kanishka Travels | Luxury Outstation Cabs & Taxi Service in Chennai',
  description:
    'Book Innova Crysta, Hycross, Swift Dzire & Tempo Traveller with Kanishka Travels. Premium outstation cabs & airport taxi service managed personally by S. Ramesh in Iyyappanthangal, Chennai.',
  path: '/',
});

export default function HomePage() {
  return (
    <ScrollStoryControllerProvider>
      <div className="relative w-full">
        {/* 1. Hero Section */}
        <HeroSection />

        <SectionDivider />

        {/* 2. Popular Destinations */}
        <PopularDestinations />

        <SectionDivider />

        {/* 4. Why Kanishka Travels */}
        <WhyChooseUs />

        <SectionDivider />

        {/* 5. Booking Timeline */}
        <BookingTimeline />

        <SectionDivider />

        {/* 6. Animated Statistics */}
        <AnimatedStats />

        <SectionDivider />

        {/* 7. Premium Testimonials */}
        <PremiumTestimonials />

        <SectionDivider />

        {/* 8. Premium FAQ Accordion */}
        <FAQAccordion />
      </div>
    </ScrollStoryControllerProvider>
  );
}
