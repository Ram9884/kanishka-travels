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

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Kanishka Travels',
  alternateName: 'Kanishka Travels Chennai',
  url: 'https://kanishkatravels.in',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://kanishkatravels.in/?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
};

const taxiServiceJsonLd = {
  '@context': 'https://schema.org',
  '@type': ['TaxiService', 'LocalBusiness'],
  name: 'Kanishka Travels',
  alternateName: 'Kanishka Travels Chennai',
  description: 'Kanishka Travels is a Chennai-based taxi service offering local, airport and outstation travel, including one-way and round trips, corporate travel and tours.',
  url: 'https://kanishkatravels.in',
  telephone: '+91-9884588664',
  email: 'kanishkaoct2011@gmail.com',
  logo: 'https://kanishkatravels.in/icon.png',
  image: 'https://kanishkatravels.in/icon.png',
  founder: {
    '@type': 'Person',
    name: 'S. Ramesh',
  },
  foundingDate: '2014',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Iyyappanthangal',
    addressLocality: 'Chennai',
    addressRegion: 'Tamil Nadu',
    postalCode: '600056',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 13.0275,
    longitude: 80.1565,
  },
  areaServed: [
    { '@type': 'City', name: 'Chennai', sameAs: 'https://www.wikidata.org/wiki/Q1352' },
    { '@type': 'State', name: 'Tamil Nadu', sameAs: 'https://www.wikidata.org/wiki/Q1445' },
  ],
  serviceType: ['Airport Transfer', 'Outstation Cab', 'Local Taxi', 'Corporate Travel', 'Temple Tours'],
  currenciesAccepted: 'INR',
  paymentAccepted: 'Cash, UPI',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '00:00',
    closes: '23:59',
  },
  sameAs: [
    'https://wa.me/919884588664',
  ],
};

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
