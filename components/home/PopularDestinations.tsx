'use client';

import React from 'react';
import Link from 'next/link';
import ScrollReveal from '@/components/motion/ScrollReveal';
import TiltCard from '@/components/motion/TiltCard';
import WhatsAppButton from '@/components/WhatsAppButton';
import { MapPin, Clock, Car, Compass, ArrowRight, Star } from 'lucide-react';

const TOP_THREE_DESTINATIONS = [
  {
    id: 'ooty',
    name: 'Chennai → Ooty (Nilgiris)',
    subtitle: 'Queen of Hill Stations • Mountain Package',
    distance: '540 km',
    duration: '10 Hours',
    recommendedVehicle: 'Toyota Innova Crysta / Tempo Traveller',
    highlights: 'Botanical Gardens, Ooty Lake, Doddabetta Peak, Tea Estates, Coonoor',
    badge: 'Top Hill Station',
    image: '/images/destinations/ooty.png',
  },
  {
    id: 'pondicherry',
    name: 'Chennai → Pondicherry (Puducherry)',
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
    name: 'Chennai → Tirupati Temple',
    subtitle: 'Andhra Pradesh • Sacred Pilgrimage Package',
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
    <section className="py-24 bg-[#0A1128] text-white px-4 relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal yOffset={20}>
          <div className="text-center space-y-3 mb-16">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#A16207]">
              Featured Travel Packages
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-white">
              Most Popular Destinations from Chennai
            </h2>
            <p className="text-slate-400 text-sm max-w-xl mx-auto">
              Comfortable, round-trip outstation travel arranged personally by S. Ramesh with experienced highway drivers.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TOP_THREE_DESTINATIONS.map((dest, index) => (
            <ScrollReveal key={dest.id} yOffset={30} delay={index * 0.08}>
              <TiltCard className="h-full">
                <div className="rounded-2xl bg-slate-900 border border-slate-800 hover:border-[#A16207]/60 overflow-hidden flex flex-col justify-between h-full shadow-xl transition-all duration-300 group">
                  {/* Destination Image Banner */}
                  <div className="relative h-56 w-full overflow-hidden bg-slate-950">
                    <img
                      src={dest.image}
                      alt={dest.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent"></div>

                    <div className="absolute top-3 left-3 bg-[#1E3A8A]/90 backdrop-blur-md border border-[#A16207]/40 px-3 py-1 rounded-full text-[11px] font-mono font-semibold text-[#F5D77F] flex items-center gap-1">
                      <Star className="w-3 h-3 fill-current text-[#A16207]" />
                      <span>{dest.badge}</span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center text-[11px] font-mono text-slate-200">
                      <span className="flex items-center gap-1 bg-slate-950/80 px-2.5 py-1 rounded-md border border-slate-800">
                        <MapPin className="w-3 h-3 text-[#A16207]" /> {dest.distance}
                      </span>
                      <span className="flex items-center gap-1 bg-slate-950/80 px-2.5 py-1 rounded-md border border-slate-800">
                        <Clock className="w-3 h-3 text-[#A16207]" /> {dest.duration}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold font-serif text-white group-hover:text-[#F5D77F] transition-colors mb-1">
                        {dest.name}
                      </h3>
                      <p className="text-xs text-[#A16207] font-mono mb-3">{dest.subtitle}</p>

                      <div className="space-y-2 text-xs text-slate-300 font-sans">
                        <p className="flex items-start gap-1.5">
                          <Car className="w-3.5 h-3.5 text-[#A16207] shrink-0 mt-0.5" />
                          <span><strong>Vehicle:</strong> {dest.recommendedVehicle}</span>
                        </p>
                        <p className="flex items-start gap-1.5">
                          <Compass className="w-3.5 h-3.5 text-[#A16207] shrink-0 mt-0.5" />
                          <span><strong>Key Attractions:</strong> {dest.highlights}</span>
                        </p>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-4 border-t border-slate-800 space-y-2">
                      <Link
                        href={`/book?pickup=Chennai&drop=${encodeURIComponent(dest.name.replace('Chennai → ', ''))}&service=outstation`}
                        className="w-full py-2.5 rounded-lg bg-[#1E3A8A] hover:bg-[#152e72] text-white text-xs font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer"
                      >
                        <span>Book Trip to {dest.name.split('→')[1]?.trim() || dest.name}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>

                      <WhatsAppButton
                        variant="inline"
                        label="Enquire on WhatsApp"
                        message={`Hi S. Ramesh, I'd like to check car availability & quote for ${dest.name}.`}
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
