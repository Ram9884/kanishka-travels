import React from 'react';
import GlobalVideoBackground from '@/components/home/GlobalVideoBackground';
import HeroSection from '@/components/home/HeroSection';
import TrustedBy from '@/components/home/TrustedBy';
import PopularDestinations from '@/components/destinations/PopularDestinations';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import BookingTimeline from '@/components/timeline/BookingTimeline';
import TravelMoments from '@/components/gallery/TravelMoments';
import AnimatedStats from '@/components/stats/AnimatedStats';
import PremiumTestimonials from '@/components/testimonials/PremiumTestimonials';
import FAQAccordion from '@/components/faq/FAQAccordion';
import FinalCTA from '@/components/cta/FinalCTA';
import SectionDivider from '@/components/ui/SectionDivider';

export default function HomePage() {
  return (
    <div className="relative w-full">
      {/* 0. Global Fixed Cinematic Video Background */}
      <GlobalVideoBackground />

      {/* 1. Hero Section */}
      <HeroSection />

      <SectionDivider />

      {/* 2. Trusted By Banner */}
      <TrustedBy />

      <SectionDivider />

      {/* 3. Popular Destinations */}
      <PopularDestinations />

      <SectionDivider />

      {/* 4. Why Kanishka Travels */}
      <WhyChooseUs />

      <SectionDivider />

      {/* 5. Booking Timeline */}
      <BookingTimeline />

      <SectionDivider />

      {/* 6. Travel Moments Gallery */}
      <TravelMoments />

      <SectionDivider />

      {/* 7. Animated Statistics */}
      <AnimatedStats />

      <SectionDivider />

      {/* 8. Premium Testimonials */}
      <PremiumTestimonials />

      <SectionDivider />

      {/* 9. Premium FAQ Accordion */}
      <FAQAccordion />

      <SectionDivider />

      {/* 10. Final Luxury CTA */}
      <FinalCTA />
    </div>
  );
}
