'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import ScrollReveal from '@/components/motion/ScrollReveal';
import WhatsAppButton from '@/components/WhatsAppButton';
import { MapPin, Clock, Car, ArrowRight, Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';

const POPULAR_CALCULATOR_ROUTES = [
  {
    id: 'tirupati',
    from: 'Chennai',
    to: 'Tirupati Temple',
    distance: '135 km',
    time: '3.5 Hours',
    recommended: 'Toyota Innova Crysta / Dzire',
    tag: 'Holy Pilgrimage',
  },
  {
    id: 'pondicherry',
    from: 'Chennai',
    to: 'Pondicherry (Puducherry)',
    distance: '150 km',
    time: '3.0 Hours (via ECR)',
    recommended: 'Maruti Dzire / Innova Crysta',
    tag: 'Coastal Weekend',
  },
  {
    id: 'ooty',
    from: 'Chennai',
    to: 'Ooty (Nilgiris)',
    distance: '540 km',
    time: '10.0 Hours',
    recommended: 'Toyota Innova Crysta / Tempo Traveller',
    tag: 'Hill Station',
  },
  {
    id: 'kanchipuram',
    from: 'Chennai',
    to: 'Kanchipuram Silk City',
    distance: '75 km',
    time: '2.0 Hours',
    recommended: 'Maruti Dzire Sedan',
    tag: 'Temple & Shopping',
  },
  {
    id: 'vellore',
    from: 'Chennai',
    to: 'Vellore Golden Temple',
    distance: '140 km',
    time: '3.0 Hours',
    recommended: 'Innova Crysta / Dzire',
    tag: 'Golden Temple Tour',
  },
];

export default function InteractiveRouteCalculator() {
  const [selectedRouteId, setSelectedRouteId] = useState('tirupati');
  const route = POPULAR_CALCULATOR_ROUTES.find((r) => r.id === selectedRouteId) || POPULAR_CALCULATOR_ROUTES[0];

  return (
    <section className="py-24 bg-[#0F172A] text-white px-4 sm:px-6 lg:px-8 relative border-t border-slate-800/80 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(7,11,24,0.5),rgba(30,58,138,0.18)_42%,rgba(161,98,7,0.16))]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#F5D77F]/45 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal yOffset={20}>
          <div className="text-center space-y-3 mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#A16207]/15 border border-[#A16207]/40 text-[#F5D77F] text-xs font-mono font-medium">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Instant Route & Vehicle Matcher</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif text-white tracking-tight">
              Select Your Travel Route
            </h2>
            <p className="text-slate-300 text-sm max-w-xl mx-auto font-sans leading-relaxed">
              Choose your destination to view route distance, estimated travel time, and recommended vehicle.
            </p>
          </div>
        </ScrollReveal>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {POPULAR_CALCULATOR_ROUTES.map((r) => (
            <button
              key={r.id}
              onClick={() => setSelectedRouteId(r.id)}
              className={`min-h-11 px-5 py-3 rounded-2xl text-xs font-bold transition-all duration-300 cursor-pointer border ${
                selectedRouteId === r.id
                  ? 'bg-gradient-to-r from-[#1E3A8A] to-[#A16207] text-white border-[#D4AF37] shadow-xl'
                  : 'bg-slate-900/90 text-slate-300 border-slate-800 hover:border-slate-700'
              }`}
            >
              {r.from} to {r.to}
            </button>
          ))}
        </div>

        <ScrollReveal yOffset={20}>
          <div className="max-w-4xl mx-auto rounded-3xl bg-slate-900/95 border border-[#A16207]/40 p-8 sm:p-12 shadow-2xl backdrop-blur-2xl grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 space-y-6">
              <div className="inline-block px-3 py-1 rounded-full bg-[#1E3A8A]/60 border border-[#A16207]/40 text-[#F5D77F] font-mono text-xs font-bold">
                {route.tag}
              </div>

              <div>
                <h3 className="text-3xl font-extrabold font-serif text-white mb-2">
                  {route.from} <span className="text-[#D4AF37]">to</span> {route.to}
                </h3>
                <p className="text-xs text-slate-300 font-sans">
                  Round-trip outstation travel coordinated personally by S. Ramesh with experienced highway drivers.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 py-4 border-y border-slate-800/80 font-mono text-xs">
                <div className="space-y-1">
                  <span className="text-slate-400 uppercase text-[10px]">Est. Distance</span>
                  <div className="flex items-center gap-1.5 font-bold text-white text-base">
                    <MapPin className="w-4 h-4 text-[#D4AF37]" />
                    <span>{route.distance}</span>
                  </div>
                </div>

                <div className="space-y-1">
                  <span className="text-slate-400 uppercase text-[10px]">Est. Travel Time</span>
                  <div className="flex items-center gap-1.5 font-bold text-white text-base">
                    <Clock className="w-4 h-4 text-[#D4AF37]" />
                    <span>{route.time}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-1.5 text-xs text-slate-300 font-sans">
                <p className="flex items-center gap-2">
                  <Car className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span><strong className="text-white">Recommended Vehicle:</strong> {route.recommended}</span>
                </p>
                <p className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span><strong className="text-white">Includes:</strong> Toll and driver bata discussed upfront before trip</span>
                </p>
              </div>
            </div>

            <div className="md:col-span-5 space-y-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 p-6 text-center">
              <span className="text-xs font-mono text-[#F5D77F] uppercase tracking-wider block font-semibold">Ready to Travel?</span>
              <h4 className="text-lg font-bold font-serif text-white">Get Direct Quote from Ramesh</h4>

              <Link
                href={`/book?pickup=${encodeURIComponent(route.from)}&drop=${encodeURIComponent(route.to)}&service=outstation`}
                className="premium-cta w-full min-h-12 rounded-xl bg-gradient-to-r from-[#A16207] via-[#D4AF37] to-[#A16207] text-white font-bold text-xs shadow-xl hover:brightness-110 transition-all cursor-pointer flex items-center justify-center gap-2 border border-amber-300/30"
              >
                <span>Book This Route</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <WhatsAppButton
                variant="inline"
                label="Check Availability on WhatsApp"
                message={`Hi S. Ramesh, I'd like to check vehicle availability and quote for ${route.from} to ${route.to}.`}
                className="w-full text-xs justify-center"
              />

              <p className="text-[10px] text-slate-400 flex items-center justify-center gap-1 pt-1">
                <ShieldCheck className="w-3 h-3 text-emerald-400" />
                <span>Zero advance payment online</span>
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
