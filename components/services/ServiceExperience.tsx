'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  ArrowUpRight, 
  Plane, 
  Navigation, 
  Briefcase, 
  Landmark, 
  Heart, 
  CalendarDays,
  ShieldCheck,
  Clock,
  Sparkles,
  CheckCircle2
} from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const EXPERIENCES = [
  {
    id: 'airport-transfer',
    title: 'Executive Airport Transfers',
    description: 'Punctual 24/7 airport pickups and drops at Chennai International Airport (MAA). Personally tracked by S. Ramesh to synchronize with flight delay adjustments.',
    image: '/images/gallery/airport.jpg',
    icon: Plane,
    badge: '24/7 Available',
    highlights: [
      'Real-Time Flight Tracking',
      'Professional Meet & Greet',
      'Luggage Handling Assistance',
      'Zero Delay Guarantee'
    ]
  },
  {
    id: 'outstation-trips',
    title: 'Bespoke Outstation Journeys',
    description: 'Custom round-trips and one-way interstate travel across Tamil Nadu, Puducherry, Andhra Pradesh, and Karnataka. Explore the highways with absolute peace of mind.',
    image: '/images/destinations/pondicherry.png',
    icon: Navigation,
    badge: 'Popular Choice',
    highlights: [
      'Experienced Highway Drivers',
      'Flexible Custom Itineraries',
      'Pre-arranged State Permits',
      'Spotless Premium Fleet'
    ]
  },
  {
    id: 'corporate-travel',
    title: 'Corporate Mobility Solutions',
    description: 'Executive transfer services, corporate event delegations, and long-term business mobility packages with transparent GST billing and priority support.',
    image: '/images/gallery/corporate_travel.jpg',
    icon: Briefcase,
    badge: 'Corporate Tier',
    highlights: [
      'Transparent Monthly Invoicing',
      'Vetted English-speaking Chauffeurs',
      'Delegate Fleet Management',
      'Airport VIP Coordination'
    ]
  },
  {
    id: 'temple-tours',
    title: 'Sacred Temple Packages',
    description: 'Specially planned spiritual travel itineraries to Tirupati, Madurai, Rameswaram, and Thanjavur. Structured specifically to support senior citizens and family comfort.',
    image: '/images/destinations/tirupati.png',
    icon: Landmark,
    badge: 'Spiritual Heritage',
    highlights: [
      'Darshan Timing Coordination',
      'Comfortable Multi-Day Stops',
      'Pure Vegetarian Dining Stops',
      'Driver Hill Route Mastery'
    ]
  },
  {
    id: 'wedding-travel',
    title: 'Luxury Wedding Convoys',
    description: 'Elegant sedans and matched multi-vehicle executive fleets to transport family and guests comfortably, coordinated directly by Ramesh during the event.',
    image: '/images/gallery/wedding_convoy.jpg',
    icon: Heart,
    badge: 'Special Occasions',
    highlights: [
      'Coordinated Fleet Arrival',
      'Decorated Chauffeur Sedans',
      'Guest Shuttle Logistical Sync',
      '24/7 Dedicated Event Captain'
    ]
  },
  {
    id: 'monthly-rentals',
    title: 'Premium Monthly Rentals',
    description: 'Get a clean, premium vehicle complete with a dedicated professional chauffeur for personal, family, or business use on a flexible monthly contract basis.',
    image: '/images/gallery/monthly_rental.jpg',
    icon: CalendarDays,
    badge: 'Long-Term Contract',
    highlights: [
      'Assigned Chauffeur Dedication',
      'Zero Maintenance Overhead',
      'Substitute Driver Availability',
      'Flexible Mileage Tiers'
    ]
  }
];

export default function ServiceExperience() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      const blocks = gsap.utils.toArray('.experience-block');
      blocks.forEach((block: any) => {
        const image = block.querySelector('.parallax-img');
        if (image) {
          gsap.to(image, {
            yPercent: 12,
            ease: 'none',
            scrollTrigger: {
              trigger: block,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          });
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="w-full relative z-10 space-y-32 py-16">
      {EXPERIENCES.map((exp, idx) => {
        const Icon = exp.icon;
        const isEven = idx % 2 === 0;

        return (
          <section
            key={exp.id}
            className="experience-block max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
          >
            {/* Image Box (Alternating layout) */}
            <div className={`lg:col-span-6 relative overflow-hidden rounded-3xl border border-[#D4AF37]/20 group shadow-2xl h-[350px] sm:h-[450px] ${
              isEven ? 'lg:order-1' : 'lg:order-2'
            }`}>
              <div className="absolute inset-0 bg-black/35 z-10 group-hover:bg-black/20 transition-colors duration-500" />
              <img
                src={exp.image}
                alt={exp.title}
                className="parallax-img absolute top-[-10%] left-0 w-full h-[120%] object-cover scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-5 left-5 z-20">
                <span className="px-3.5 py-1.5 rounded-full bg-[#0B0B0D]/90 border border-[#D4AF37]/35 text-[#F5D77F] text-xs font-mono tracking-widest uppercase">
                  {exp.badge}
                </span>
              </div>
            </div>

            {/* Content Box (Alternating layout) */}
            <div className={`lg:col-span-6 space-y-6 ${
              isEven ? 'lg:order-2' : 'lg:order-1'
            }`}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#1A1A1D]/90 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono font-bold text-[#D4AF37] uppercase tracking-widest">
                  Service Experience 0{idx + 1}
                </span>
              </div>

              <h2 className="service-exp-title font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
                {exp.title}
              </h2>

              <p className="service-exp-desc text-sm sm:text-base text-[#F8F5EE]/75 leading-relaxed font-sans font-light">
                {exp.description}
              </p>

              {/* Highlights Bullet Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                {exp.highlights.map((highlight) => (
                  <div key={highlight} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                    <span className="service-exp-bullet text-xs sm:text-sm text-[#F8F5EE]/85 font-medium">{highlight}</span>
                  </div>
                ))}
              </div>

              {/* Book Button */}
              <div className="pt-6">
                <Link
                  href={`/book?service=${exp.id}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#1A1A1D] border border-[#D4AF37]/45 text-xs font-bold text-[#F5D77F] hover:border-[#D4AF37] hover:bg-[#D4AF37]/15 transition-all duration-300 shadow-md group/btn"
                >
                  <span>Reserve {exp.id === 'airport-transfer' ? 'Airport Cab' : 'Service'}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#D4AF37] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
