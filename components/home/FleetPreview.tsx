'use client';

import React from 'react';
import Link from 'next/link';
import ScrollReveal from '@/components/motion/ScrollReveal';
import TiltCard from '@/components/motion/TiltCard';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Users, Briefcase, Snowflake, CheckCircle2, ArrowRight } from 'lucide-react';

const FLEET_TYPES = [
  {
    id: 'sedan',
    name: 'Maruti Suzuki Dzire',
    category: 'Executive Sedan',
    seating: 4,
    luggage: '2 Large Bags',
    ac: true,
    bestFor: 'Airport Pickups, Local Chennai Rides, Small Family Outstation Trips',
    features: ['Comfortable Pushback Seats', 'Dual Airbags & ABS', 'Chilled Air Conditioning', 'Clean & Hygienic Interior'],
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'suv',
    name: 'Toyota Innova Crysta',
    category: 'Luxury SUV',
    seating: 7,
    luggage: '4 Large Bags',
    ac: true,
    bestFor: 'Outstation Highways, Temple Pilgrimages, Family Vacations, VIP Corporate',
    features: ['Captain Seats Available', 'Rear AC Vents', 'Superior Highway Suspension', 'Ample Legroom'],
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'tempo',
    name: 'Tempo Traveller',
    category: 'Group Luxury Van',
    seating: 12,
    luggage: '6+ Large Bags',
    ac: true,
    bestFor: 'Wedding Group Travel, Pilgrimage Groups, College/School Tours',
    features: ['Reclining Pushback Seats', 'Individual Reading Lights', 'High Roof & Aisles', 'Audio System'],
    image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&q=80&w=800',
  },
];

export default function FleetPreview() {
  return (
    <section id="fleet" className="py-24 bg-[#0A1128] text-white px-4 relative">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal yOffset={20}>
          <div className="text-center space-y-3 mb-16">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#A16207]">
              Well-Maintained Fleet
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-white">
              Choose Your Vehicle Category
            </h2>
            <p className="text-slate-400 text-sm max-w-xl mx-auto">
              Select your vehicle type when booking. S. Ramesh assigns the specific clean, verified vehicle upon confirmation.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FLEET_TYPES.map((vehicle, index) => (
            <ScrollReveal key={vehicle.id} yOffset={30} delay={index * 0.08}>
              <TiltCard className="h-full">
                <div className="rounded-2xl bg-slate-900 border border-[#A16207]/30 hover:border-[#A16207] p-6 h-full flex flex-col justify-between shadow-xl transition-all duration-300">
                  <div>
                    {/* Category badge */}
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-[11px] font-mono uppercase px-3 py-1 rounded-full bg-[#1E3A8A] text-[#F5D77F] border border-[#A16207]/40 font-semibold">
                        {vehicle.category}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-emerald-400 font-mono">
                        <Snowflake className="w-3.5 h-3.5" /> Full AC
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold font-serif text-white mb-2">{vehicle.name}</h3>

                    {/* Specs Grid */}
                    <div className="flex items-center gap-4 py-3 border-y border-slate-800 text-xs text-slate-300 mb-4 font-mono">
                      <div className="flex items-center gap-1.5">
                        <Users className="w-4 h-4 text-[#A16207]" />
                        <span>{vehicle.seating} Seats</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Briefcase className="w-4 h-4 text-[#A16207]" />
                        <span>{vehicle.luggage}</span>
                      </div>
                    </div>

                    <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                      <strong className="text-slate-200">Best for:</strong> {vehicle.bestFor}
                    </p>

                    {/* Key features */}
                    <ul className="space-y-2 mb-6">
                      {vehicle.features.map((feat, i) => (
                        <li key={i} className="text-xs text-slate-300 flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#A16207] shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-slate-800 space-y-2.5">
                    <Link
                      href={`/book?vehicle=${vehicle.id}`}
                      className="w-full py-3 rounded-lg bg-[#1E3A8A] hover:bg-[#152e72] text-white text-xs font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer"
                    >
                      <span>Select Vehicle in Booking</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <WhatsAppButton
                      variant="inline"
                      label={`WhatsApp Enquiry for ${vehicle.name}`}
                      message={`Hi Ramesh, I'd like to check vehicle availability for ${vehicle.name}.`}
                      className="w-full text-xs justify-center"
                    />
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
