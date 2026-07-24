'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Users, Briefcase, Wind, Gauge } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface VehicleSpotlight {
  id: string;
  name: string;
  tagline: string;
  category: string;
  tag?: string;
  image: string;
  passengers: string;
  luggage: string;
  ac: string;
  ratePerKm: string;
  bestFor: string;
  story: string;
  useCases: string[];
}

const SPOTLIGHTS: VehicleSpotlight[] = [
  {
    id: 'swift-dzire',
    name: 'Maruti Swift Dzire',
    tagline: 'Efficient & Elegant for the Urban Commuter',
    category: 'Premium Sedan',
    tag: 'Budget Luxury',
    image: '/images/fleet/swift-dzire.jpg',
    passengers: '4',
    luggage: '2 Large Bags',
    ac: 'Powerful Single AC',
    ratePerKm: '₹12 / km',
    bestFor: 'City Commutes, Quick Outstation Rides & Airport Drops',
    story: 'A refined compact sedan that punches above its class. The Swift Dzire delivers refined comfort for city commutes, solo executive airport runs, and short outstation trips — at the most accessible rates in the Kanishka fleet.',
    useCases: ['Airport Drop', 'Solo Business Travel', 'City Transfer', 'Short Outstation'],
  },
  {
    id: 'maruti-ertiga',
    name: 'Maruti Ertiga',
    tagline: 'Smart Family Travel, Effortlessly Comfortable',
    category: 'Family MUV',
    tag: 'Family Favorite',
    image: '/images/fleet/kia-carens.jpg',
    passengers: '6',
    luggage: '3 Bags',
    ac: 'Dual AC Vents',
    ratePerKm: '₹15 / km',
    bestFor: 'Economical Family Trips & City Tours',
    story: 'The Ertiga is the ideal balance of economy and comfort for family outings. Seating 6 in airy, well-appointed interiors with dual AC vents reaching all rows, it is the vehicle families keep requesting again — for Pondicherry weekends, temple visits, and airport runs.',
    useCases: ['Family Temple Tour', 'Pondicherry Weekend', 'Airport Transfers', 'City Sightseeing'],
  },
  {
    id: 'toyota-etios',
    name: 'Toyota Etios',
    tagline: 'Japanese Reliability, Executive Comfort',
    category: 'Executive Sedan',
    image: '/images/fleet/swift-dzire.jpg',
    passengers: '4',
    luggage: '3 Bags (Spacious Boot)',
    ac: 'Chilling AC',
    ratePerKm: '₹13 / km',
    bestFor: 'Airport Transfers & Smooth Outstation Rides',
    story: "Toyota's Etios is renowned for its almost indestructible mechanical reliability across long distances. With a particularly spacious boot and comfortable cabin, it is the go-to executive sedan for airport connections and smooth inter-city journeys.",
    useCases: ['Airport Pickup', 'Executive Transfer', 'Interstate Business', 'Outstation Day Trip'],
  },
  {
    id: 'toyota-innova',
    name: 'Toyota Innova',
    tagline: 'Dependable Power for Long Highway Stretches',
    category: 'Standard MUV',
    image: '/images/fleet/innova-hycross.jpg',
    passengers: '7',
    luggage: '4 Bags',
    ac: 'Dual AC Compressor',
    ratePerKm: '₹17 / km',
    bestFor: 'Long Highway Drives & Group Outings',
    story: 'A stalwart on South Indian highways, the Toyota Innova combines proven mechanical reliability with room for the whole family plus luggage. Preferred by business delegations and large families tackling the Chennai–Ooty or Chennai–Coorg route.',
    useCases: ['Family Road Trips', 'Outstation Trips', 'Group City Tours', 'Airport Multi-Drop'],
  },
  {
    id: 'innova-crysta',
    name: 'Toyota Innova Crysta',
    tagline: 'The Gold Standard of Indian Highway Travel',
    category: 'Luxury MUV',
    tag: 'Most Popular',
    image: '/images/fleet/innova-hycross.jpg',
    passengers: '6 – 7',
    luggage: '4 Large Bags',
    ac: 'Dual-Zone Climate Control',
    ratePerKm: '₹18 / km',
    bestFor: 'VIP Outstation, Family Road Trips & Corporate Delegations',
    story: "The Innova Crysta has earned its place as India's most trusted highway companion. With commanding presence, spacious leather interiors, and dual-zone climate control, it is the preferred choice for outstation family journeys and corporate convoys across South India.",
    useCases: ['Corporate Delegations', 'Family Outstation', 'Airport VIP', 'Wedding Convoy'],
  },
  {
    id: 'tempo-traveller',
    name: 'Force Tempo Traveller',
    tagline: 'Where Groups Travel in Comfort',
    category: 'Luxury Minibus',
    tag: 'Group Travel',
    image: '/images/fleet/tempo-traveller.jpg',
    passengers: '12 – 14',
    luggage: '8+ Bags',
    ac: 'Dual Roof AC Units',
    ratePerKm: '₹28 / km',
    bestFor: 'Group Pilgrimages, Family Excursions & Corporate Offsites',
    story: 'Designed for larger groups who refuse to compromise on comfort. The Force Tempo Traveller seats up to 14 passengers in push-back reclining chairs with dual roof AC units — ensuring everyone arrives fresh and well-rested, whether to Tirupati or Coorg.',
    useCases: ['Pilgrimage Groups', 'Corporate Offsite', 'School Tours', 'Wedding Guests'],
  },
  {
    id: 'mini-bus',
    name: 'Executive Mini Bus',
    tagline: 'Grand Gatherings, Travelling Together',
    category: 'Luxury Minibus',
    tag: 'Grand Groups',
    image: '/images/fleet/tempo-traveller.jpg',
    passengers: '21 – 26',
    luggage: '12+ Bags',
    ac: 'High-Capacity Climate System',
    ratePerKm: '₹34 / km',
    bestFor: 'Wedding Guests, School Tours & Large Corporate Delegations',
    story: 'When the occasion demands moving a crowd in style, the Executive Mini Bus rises to the challenge. Seating up to 26 in a fully air-conditioned interior, it handles the full scale of wedding guest fleets, school excursions, and major corporate team trips with ease.',
    useCases: ['Wedding Fleet', 'School Excursions', 'Corporate Team Travel', 'Pilgrimage Convoy'],
  },
];

export default function FleetVehicleSpotlight() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      const blocks = gsap.utils.toArray('.vehicle-spotlight-block');
      blocks.forEach((block: any) => {
        const img = block.querySelector('.spotlight-img');
        if (img) {
          gsap.to(img, {
            yPercent: 10,
            ease: 'none',
            scrollTrigger: {
              trigger: block,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          });
        }

        // Gold divider line draw-in
        const divider = block.querySelector('.spotlight-divider');
        if (divider) {
          gsap.from(divider, {
            scaleX: 0,
            transformOrigin: 'left center',
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: block,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          });
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="w-full space-y-28 py-16 relative z-10">
      {SPOTLIGHTS.map((vehicle, idx) => {
        const isEven = idx % 2 === 0;
        return (
          <section
            key={vehicle.id}
            className="vehicle-spotlight-block max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            {/* Section number + gold hairline */}
            <div className="flex items-center gap-4 mb-10">
              <span className="text-[10px] font-mono font-bold text-[#D4AF37] uppercase tracking-widest">
                {String(idx + 1).padStart(2, '0')}
              </span>
              <div className="spotlight-divider flex-1 h-[1px] bg-gradient-to-r from-[#D4AF37]/50 via-[#D4AF37]/20 to-transparent" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              {/* Image Column */}
              <div className={`lg:col-span-6 relative overflow-hidden rounded-3xl border border-[#D4AF37]/20 shadow-2xl h-[350px] sm:h-[460px] group ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                <div className="absolute inset-0 bg-black/30 z-10 group-hover:bg-black/15 transition-colors duration-500" />
                <Image
                  src={vehicle.image}
                  alt={vehicle.name}
                  fill
                  unoptimized={false}
                  className="spotlight-img absolute top-[-10%] left-0 w-full h-[120%] object-cover object-center scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Overlay tags */}
                <div className="absolute top-5 left-5 z-20 flex gap-2">
                  <span className="px-3 py-1.5 rounded-full bg-[#0B0B0D]/90 border border-[#D4AF37]/30 text-[#F8F5EE]/80 text-[10px] font-mono tracking-widest uppercase">
                    {vehicle.category}
                  </span>
                  {vehicle.tag && (
                    <span className="px-3 py-1.5 rounded-full bg-[#D4AF37] text-slate-950 text-[10px] font-extrabold tracking-widest uppercase shadow-md">
                      {vehicle.tag}
                    </span>
                  )}
                </div>
              </div>

              {/* Content Column */}
              <div className={`lg:col-span-6 space-y-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                <div>
                  <p className="text-xs font-mono font-bold text-[#D4AF37] uppercase tracking-widest mb-2">
                    {vehicle.category}
                  </p>
                  <h2 className="fleet-vehicle-title font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
                    {vehicle.name}
                  </h2>
                  <p className="fleet-vehicle-tagline mt-1 text-sm text-[#D4AF37]/80 font-light italic">
                    {vehicle.tagline}
                  </p>
                </div>

                {/* Emotional story */}
                <p className="fleet-vehicle-story text-sm sm:text-base text-[#F8F5EE]/70 leading-relaxed font-sans font-light">
                  {vehicle.story}
                </p>

                {/* Apple-style spec grid */}
                <div className="grid grid-cols-2 gap-px border border-[#D4AF37]/15 rounded-2xl overflow-hidden">
                  {[
                    { icon: Users, label: 'Seats', value: vehicle.passengers },
                    { icon: Briefcase, label: 'Luggage', value: vehicle.luggage },
                    { icon: Wind, label: 'Comfort', value: vehicle.ac },
                    { icon: Gauge, label: 'Rate', value: vehicle.ratePerKm },
                  ].map(({ icon: Icon, label, value }) => (
                    <div
                      key={label}
                      className="fleet-spec-cell bg-[#1A1A1D]/80 px-4 py-4 flex flex-col gap-1"
                    >
                      <div className="flex items-center gap-1.5 text-[#D4AF37]">
                        <Icon className="w-3.5 h-3.5" strokeWidth={2} />
                        <span className="text-[10px] font-mono uppercase tracking-widest text-[#D4AF37]/70">
                          {label}
                        </span>
                      </div>
                      <p className="fleet-spec-value text-sm font-bold text-white">{value}</p>
                    </div>
                  ))}
                </div>

                {/* Use Cases */}
                <div className="space-y-2">
                  <p className="text-[10px] font-mono uppercase tracking-widest text-[#D4AF37]/60">
                    Ideal For
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {vehicle.useCases.map((uc) => (
                      <span
                        key={uc}
                        className="fleet-use-case px-3 py-1 rounded-full text-xs font-medium bg-[#1A1A1D] border border-[#D4AF37]/20 text-[#F8F5EE]/75"
                      >
                        {uc}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-2">
                  <Link
                    href={`/book?vehicle=${vehicle.id}`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#1A1A1D] border border-[#D4AF37]/40 text-[#F5D77F] text-xs font-bold hover:border-[#D4AF37] hover:bg-[#D4AF37]/15 transition-all duration-300 group/btn"
                  >
                    <span>Reserve This Vehicle</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#D4AF37] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
