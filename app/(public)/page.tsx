import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import TrustedBy from '@/components/home/TrustedBy';
import PopularDestinations from '@/components/destinations/PopularDestinations';
import FleetShowcase from '@/components/fleet/FleetShowcase';
import ServicesGrid from '@/components/services/ServicesGrid';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import BookingTimeline from '@/components/timeline/BookingTimeline';
import TravelMoments from '@/components/gallery/TravelMoments';
import AnimatedStats from '@/components/stats/AnimatedStats';
import PremiumTestimonials from '@/components/testimonials/PremiumTestimonials';
import InteractiveRouteMap from '@/components/map/InteractiveRouteMap';
import FAQAccordion from '@/components/faq/FAQAccordion';
import FinalCTA from '@/components/cta/FinalCTA';
import SectionDivider from '@/components/ui/SectionDivider';

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section */}
      <HeroSection />

      <SectionDivider />

      {/* 2. Trusted By Banner */}
      <TrustedBy />

      <SectionDivider />

      {/* 3. Popular Destinations */}
      <PopularDestinations />

      <SectionDivider />

      {/* 4. Featured Vehicles (Fleet Showcase) */}
      <FleetShowcase />

      <SectionDivider />

      {/* 5. Premium Services */}
      <ServicesGrid />

      <SectionDivider />

      {/* 6. Why Kanishka Travels */}
      <WhyChooseUs />

      <SectionDivider />

      {/* 7. Booking Timeline */}
      <BookingTimeline />

      <SectionDivider />

      {/* 8. Travel Moments Gallery */}
      <TravelMoments />

      <SectionDivider />

      {/* 9. Animated Statistics */}
      <AnimatedStats />

      <SectionDivider />

      {/* 10. Premium Testimonials */}
      <PremiumTestimonials />

      <SectionDivider />

      {/* 11. Interactive Tamil Nadu Route Map */}
      <InteractiveRouteMap />

      <SectionDivider />

      {/* 12. Premium FAQ Accordion */}
      <FAQAccordion />

      <SectionDivider />

      {/* 13. Final Luxury CTA */}
      <FinalCTA />
    </>
  );
}
