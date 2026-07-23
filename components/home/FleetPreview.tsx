'use client';

import React from 'react';
import Link from 'next/link';
import ScrollReveal from '@/components/motion/ScrollReveal';
import TiltCard from '@/components/motion/TiltCard';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Users, Briefcase, Snowflake, CheckCircle2, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

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
  },
];

export default function FleetPreview() {
  return (
    <section id="fleet" className="py-28 bg-[#0F172A] text-white px-4 sm:px-6 lg:px-8 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal yOffset={20}>
          <div className="text-center space-y-3 mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#A16207]/15 border border-[#A16207]/40 text-[#F5D77F] text-xs font-mono font-medium">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Sanitized & Well-Maintained Vehicles</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif text-white tracking-tight">
              Choose Your Vehicle Category
            </h2>
            <p className="text-slate-300 text-sm max-w-xl mx-auto font-sans leading-relaxed">
              Select your vehicle category when booking. S. Ramesh assigns the specific clean, verified vehicle upon confirmation.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FLEET_TYPES.map((vehicle, index) => (
            <ScrollReveal key={vehicle.id} yOffset={30} delay={index * 0.08}>
              <TiltCard className="h-full">
                <div className="rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-[#A16207]/60 p-7 h-full flex flex-col justify-between shadow-2xl transition-all duration-300 backdrop-blur-xl group">
                  <div>
                    {/* Category badge */}
                    <div className="flex justify-between items-center mb-5">
                      <span className="text-[11px] font-mono uppercase px-3.5 py-1 rounded-full bg-[#1E3A8A] text-[#F5D77F] border border-[#A16207]/40 font-bold shadow-md">
                        {vehicle.category}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs text-emerald-400 font-mono font-semibold">
                        <Snowflake className="w-3.5 h-3.5" /> Full AC
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold font-serif text-white group-hover:text-[#F5D77F] transition-colors mb-3">
                      {vehicle.name}
                    </h3>

                    {/* Specs Grid */}
                    <div className="flex items-center gap-5 py-3 border-y border-slate-800 text-xs text-slate-300 mb-4 font-mono font-semibold">
                      <div className="flex items-center gap-1.5">
                        <Users className="w-4 h-4 text-[#D4AF37]" />
                        <span>{vehicle.seating} Seats</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Briefcase className="w-4 h-4 text-[#D4AF37]" />
                        <span>{vehicle.luggage}</span>
                      </div>
                    </div>

                    <p className="text-xs text-slate-300 mb-5 leading-relaxed font-sans">
                      <strong className="text-slate-100">Best for:</strong> {vehicle.bestFor}
                    </p>

                    {/* Key features */}
                    <ul className="space-y-2.5 mb-6">
                      {vehicle.features.map((feat, i) => (
                        <li key={i} className="text-xs text-slate-300 flex items-center gap-2 font-sans">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Actions */}
                  <div className="pt-5 border-t border-slate-800/80 space-y-2.5">
                    <Link
                      href={`/book?vehicle=${vehicle.id}`}
                      className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#1E3A8A] to-[#152e72] hover:from-[#152e72] hover:to-[#1E3A8A] text-white text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer border border-blue-500/20 shadow-md"
                    >
                      <span>Select Vehicle in Booking</span>
                      <ArrowRight className="w-4 h-4" />
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
