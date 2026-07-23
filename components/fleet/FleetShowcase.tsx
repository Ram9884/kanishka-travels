'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ChevronLeft, 
  ChevronRight, 
  Users, 
  Briefcase, 
  Wind, 
  Sparkles,
  ArrowRight,
  Shield
} from 'lucide-react';
import { FEATURED_VEHICLES, Vehicle } from '@/data/fleet';

export default function FleetShowcase() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full py-20 bg-gradient-to-b from-[#0A1128] via-[#0D1535] to-[#0A1128] overflow-hidden">
      {/* Subtle Background Radial Glow */}
      <div className="absolute top-1/3 right-10 w-[600px] h-[350px] bg-[#D4AF37]/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-semibold uppercase tracking-wider mb-3"
            >
              <Shield className="w-3.5 h-3.5" />
              <span>Chauffeur-Driven Luxury</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight"
            >
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5D77F] via-[#D4AF37] to-[#A16207]">Vehicles</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-3 text-base text-slate-300 max-w-xl"
            >
              Immaculately maintained, fully insured luxury cabs with courteous professional drivers.
            </motion.p>
          </div>

          {/* Carousel Arrow Controls */}
          <div className="flex items-center gap-3 self-end">
            <button
              onClick={() => scroll('left')}
              aria-label="Scroll left"
              className="p-3 rounded-full bg-slate-900/80 border border-white/10 text-white hover:border-[#D4AF37] hover:text-[#F5D77F] hover:bg-[#D4AF37]/10 transition-all duration-300 cursor-pointer shadow-lg active:scale-95"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              aria-label="Scroll right"
              className="p-3 rounded-full bg-slate-900/80 border border-white/10 text-white hover:border-[#D4AF37] hover:text-[#F5D77F] hover:bg-[#D4AF37]/10 transition-all duration-300 cursor-pointer shadow-lg active:scale-95"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Snap Netflix-Style Carousel */}
        <div
          ref={carouselRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar py-4 px-1"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {FEATURED_VEHICLES.map((vehicle, idx) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

function VehicleCard({ vehicle, index }: { vehicle: Vehicle; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="snap-start shrink-0 w-[300px] sm:w-[350px] md:w-[380px] rounded-2xl overflow-hidden glass-dark border border-white/10 hover:border-[#D4AF37]/60 shadow-2xl transition-all duration-300 flex flex-col justify-between group"
    >
      {/* Large Image Container */}
      <div className="relative w-full h-56 sm:h-64 overflow-hidden bg-slate-950">
        <Image
          src={vehicle.image}
          alt={vehicle.name}
          fill
          unoptimized={vehicle.image.startsWith('http')}
          className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
          sizes="(max-width: 768px) 300px, 380px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128] via-transparent to-black/30" />

        {/* Category & Tag */}
        <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-slate-900/85 backdrop-blur-md border border-white/15 text-[11px] font-medium text-slate-200">
            {vehicle.category}
          </span>
          {vehicle.tag && (
            <span className="px-2.5 py-1 rounded-full bg-[#D4AF37] text-slate-950 font-extrabold text-[10px] uppercase tracking-wider shadow-md">
              {vehicle.tag}
            </span>
          )}
        </div>

        {/* Rate Tag */}
        <div className="absolute bottom-3 right-4 z-10 px-3 py-1 rounded-lg bg-slate-950/80 backdrop-blur-md border border-[#D4AF37]/40 text-[#F5D77F] font-mono text-sm font-bold">
          {vehicle.ratePerKm}
        </div>
      </div>

      {/* Content Details */}
      <div className="p-6 flex-1 flex flex-col justify-between bg-slate-900/60 backdrop-blur-xl">
        <div>
          <h3 className="text-xl font-bold text-white group-hover:text-[#F5D77F] transition-colors duration-300">
            {vehicle.name}
          </h3>

          {/* Specs List */}
          <div className="mt-4 grid grid-cols-2 gap-3 text-xs text-slate-300">
            <div className="flex items-center gap-2 bg-slate-800/40 p-2 rounded-lg border border-white/5">
              <Users className="w-4 h-4 text-[#D4AF37] shrink-0" strokeWidth={2} />
              <span>{vehicle.passengers}</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-800/40 p-2 rounded-lg border border-white/5">
              <Briefcase className="w-4 h-4 text-[#D4AF37] shrink-0" strokeWidth={2} />
              <span>{vehicle.luggage}</span>
            </div>
            <div className="col-span-2 flex items-center gap-2 bg-slate-800/40 p-2 rounded-lg border border-white/5">
              <Wind className="w-4 h-4 text-[#D4AF37] shrink-0" strokeWidth={2} />
              <span className="truncate">{vehicle.ac}</span>
            </div>
          </div>

          {/* Best For Tagline */}
          <div className="mt-4 pt-3 border-t border-slate-800/80">
            <span className="text-[11px] uppercase tracking-wider text-slate-400 font-medium block">Ideal For:</span>
            <p className="text-xs text-slate-200 mt-1 font-medium leading-relaxed">
              {vehicle.bestFor}
            </p>
          </div>
        </div>

        {/* Book Now Action */}
        <div className="mt-6">
          <Link
            href={`/book?vehicle=${vehicle.id}`}
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#A16207] hover:from-[#F5D77F] hover:to-[#D4AF37] text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-[#D4AF37]/20 transition-all duration-300 cursor-pointer"
          >
            <span>Book This Vehicle</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
