'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Compass } from 'lucide-react';

export default function ServicesHero() {
  return (
    <section className="relative w-full min-h-[50vh] flex flex-col items-center justify-center pt-32 pb-16 overflow-hidden bg-transparent">

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="services-hero-badge inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono tracking-widest uppercase"
        >
          <Compass className="w-3.5 h-3.5 animate-spin-slow" />
          <span>Bespoke Chauffeur Services</span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="services-hero-title font-serif text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-tight"
        >
          The Art of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5D77F] via-[#D4AF37] to-[#A16207]">Travel</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="services-hero-subtitle text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-sans font-light"
        >
          Every booking request is personally coordinated by S. Ramesh. Operating clean, premium vehicles with vetted professional highway chauffeurs.
        </motion.p>
      </div>
    </section>
  );
}
