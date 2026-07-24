'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, CalendarDays, Compass } from 'lucide-react';

export default function ServicesCTA() {
  return (
    <section className="relative w-full py-28 bg-[#0B0B0D] overflow-hidden border-t border-[#D4AF37]/20">
      {/* Soft Ambient Radial Gold Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[#D4AF37]/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        <div className="flex justify-center">
          <div className="w-12 h-12 rounded-full bg-[#1A1A1D] border border-[#D4AF37]/35 flex items-center justify-center text-[#D4AF37]">
            <Compass className="w-6 h-6 animate-pulse" />
          </div>
        </div>

        <h2 className="services-cta-title font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
          Ready for Your Next <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5D77F] via-[#D4AF37] to-[#A16207]">Luxury Journey?</span>
        </h2>

        <p className="services-cta-desc text-sm sm:text-base text-[#F8F5EE]/75 max-w-xl mx-auto leading-relaxed">
          Coordinate directly with Ramesh. Secure your premium outstation itinerary, airport shuttle, or monthly chauffeur contract immediately.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/book"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#F5D77F] to-[#A16207] text-slate-950 font-extrabold text-xs uppercase tracking-widest shadow-[0_4px_25px_rgba(212,175,55,0.3)] hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            <CalendarDays className="w-4 h-4 text-slate-950" />
            <span>Book Chauffeur Service</span>
          </Link>
          <Link
            href="/fleet"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-transparent border border-[#D4AF37]/40 text-[#F5D77F] font-bold text-xs uppercase tracking-widest hover:bg-[#D4AF37]/10 transition-all duration-300 cursor-pointer"
          >
            <span>Explore Vehicles</span>
            <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
          </Link>
        </div>
      </div>
    </section>
  );
}
