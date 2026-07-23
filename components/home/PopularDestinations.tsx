'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ScrollReveal from '@/components/motion/ScrollReveal';
import TiltCard from '@/components/motion/TiltCard';
import WhatsAppButton from '@/components/WhatsAppButton';
import { MapPin, Clock, Car, Compass, ArrowRight, Star, Sparkles } from 'lucide-react';

const TOP_THREE_DESTINATIONS = [
  {
    id: 'ooty',
    name: 'Chennai to Ooty (Nilgiris)',
    subtitle: 'Queen of Hill Stations - Mountain Package',
    distance: '540 km',
    duration: '10 Hours',
    recommendedVehicle: 'Toyota Innova Crysta / Tempo Traveller',
    highlights: 'Botanical Gardens, Ooty Lake, Doddabetta Peak, Tea Estates, Coonoor',
    badge: 'Top Hill Station',
    image: '/images/destinations/ooty.png',
  },
  {
    id: 'pondicherry',
    name: 'Chennai to Pondicherry (Puducherry)',
    subtitle: 'Coastal Beach & French Quarter Tour',
    distance: '150 km',
    duration: '3 Hours (via ECR)',
    recommendedVehicle: 'Maruti Dzire / Innova Crysta',
    highlights: 'Promenade Beach, Auroville, French Colony Architecture, Paradise Beach',
    badge: 'Weekend Favorite',
    image: '/images/destinations/pondicherry.png',
  },
  {
    id: 'tirupati',
    name: 'Chennai to Tirupati Temple',
    subtitle: 'Andhra Pradesh - Sacred Pilgrimage Package',
    distance: '135 km',
    duration: '3.5 Hours',
    recommendedVehicle: 'Toyota Innova Crysta / Dzire',
    highlights: 'Lord Venkateswara Temple, Alamelu Mangapuram, Kapila Theertham',
    badge: 'Holy Pilgrimage',
    image: '/images/destinations/tirupati.png',
  },
];

export default function PopularDestinations() {
  return (
    <section className="py-28 bg-[#0A1128] text-white px-4 sm:px-6 lg:px-8 relative border-t border-slate-800/80 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(30,58,138,0.18),transparent_38%,rgba(161,98,7,0.14))]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#F5D77F]/50 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal yOffset={20}>
          <div className="text-center space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#A16207]/15 border border-[#A16207]/40 text-[#F5D77F] text-xs font-mono font-medium">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Executive Outstation Packages</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif text-white tracking-tight">
              Most Popular Destinations from Chennai
            </h2>
            <p className="text-slate-300 text-sm max-w-xl mx-auto font-sans leading-relaxed">
              Safe, round-trip outstation travel arranged personally by S. Ramesh with experienced highway drivers and clean vehicles.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TOP_THREE_DESTINATIONS.map((dest, index) => (
            <ScrollReveal key={dest.id} yOffset={30} delay={index * 0.08}>
              <TiltCard className="h-full">
                <div className="rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-[#A16207]/60 overflow-hidden flex flex-col justify-between h-full shadow-2xl transition-all duration-500 group backdrop-blur-xl">
                  <div className="relative h-60 w-full overflow-hidden bg-slate-950">
                    <Image
                      src={dest.image}
                      alt={dest.name}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent" />

                    <div className="absolute top-3.5 left-3.5 bg-[#1E3A8A]/90 backdrop-blur-md border border-[#A16207]/40 px-3.5 py-1 rounded-full text-[11px] font-mono font-semibold text-[#F5D77F] flex items-center gap-1.5 shadow-md">
                      <Star className="w-3 h-3 fill-current text-[#D4AF37]" />
                      <span>{dest.badge}</span>
                    </div>

                    <div className="absolute bottom-3.5 left-3.5 right-3.5 flex justify-between items-center text-[11px] font-mono text-slate-200">
                      <span className="flex items-center gap-1.5 bg-slate-950/85 backdrop-blur-md px-3 py-1 rounded-lg border border-slate-800">
                        <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" /> {dest.distance}
                      </span>
                      <span className="flex items-center gap-1.5 bg-slate-950/85 backdrop-blur-md px-3 py-1 rounded-lg border border-slate-800">
                        <Clock className="w-3.5 h-3.5 text-[#D4AF37]" /> {dest.duration}
                      </span>
                    </div>
                  </div>

                  <div className="p-7 space-y-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-bold font-serif text-white group-hover:text-[#F5D77F] transition-colors mb-1">
                        {dest.name}
                      </h3>
                      <p className="text-xs text-[#A16207] font-mono font-medium mb-4">{dest.subtitle}</p>

                      <div className="space-y-2.5 text-xs text-slate-300 font-sans leading-relaxed">
                        <p className="flex items-start gap-2">
                          <Car className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                          <span><strong className="text-slate-200">Vehicle:</strong> {dest.recommendedVehicle}</span>
                        </p>
                        <p className="flex items-start gap-2">
                          <Compass className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                          <span><strong className="text-slate-200">Key Attractions:</strong> {dest.highlights}</span>
                        </p>
                      </div>
                    </div>

                    <div className="pt-5 border-t border-slate-800/80 space-y-2.5">
                      <Link
                        href={`/book?pickup=Chennai&drop=${encodeURIComponent(dest.name.replace('Chennai to ', ''))}&service=outstation`}
                        className="w-full py-3 rounded-xl bg-gradient-to-r from-[#1E3A8A] to-[#152e72] hover:from-[#152e72] hover:to-[#1E3A8A] text-white text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer border border-blue-500/20 shadow-md"
                      >
                        <span>Book Trip to {dest.name.split(' to ')[1]?.trim() || dest.name}</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>

                      <WhatsAppButton
                        variant="inline"
                        label="Enquire on WhatsApp"
                        message={`Hi S. Ramesh, I'd like to check car availability and quote for ${dest.name}.`}
                        className="w-full text-xs justify-center"
                      />
                    </div>
                  </div>
                </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
