import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import PopularDestinations from '@/components/destinations/PopularDestinations';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import BookingTimeline from '@/components/timeline/BookingTimeline';
import AnimatedStats from '@/components/stats/AnimatedStats';
import PremiumTestimonials from '@/components/testimonials/PremiumTestimonials';
import FAQAccordion from '@/components/faq/FAQAccordion';
import SectionDivider from '@/components/ui/SectionDivider';

export default function HomePage() {
  return (
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
  );
}
