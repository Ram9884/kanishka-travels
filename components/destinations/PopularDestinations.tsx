'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { MapPin, Clock, ArrowRight, Sparkles, Navigation } from 'lucide-react';
import { POPULAR_DESTINATIONS, Destination } from '@/data/destinations';
import { initDestinationsScroll } from '@/utils/gsap';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

export default function PopularDestinations() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    return initDestinationsScroll(sectionRef, '.destination-card-gsap');
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full py-20 bg-transparent overflow-hidden">
      {/* Subtle Ambient Gold Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#D4AF37]/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-semibold tracking-wider uppercase mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curated South India Journeys</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#F8F5EE] tracking-tight leading-tight"
          >
            Signature <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5D77F] via-[#D4AF37] to-[#A16207]">Journeys</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-[#F8F5EE] font-medium leading-relaxed"
          >
            Handpicked pilgrimage, hill station, and heritage routes from Chennai with dedicated luxury drivers.
          </motion.p>
        </div>

        {/* Destinations Grid with Visual Rhythm */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
        >
          {POPULAR_DESTINATIONS.map((dest, idx) => (
            <DestinationCard key={dest.id} destination={dest} index={idx} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function DestinationCard({ destination, index }: { destination: Destination; index: number }) {
  const isLarge = destination.featured;

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className={`destination-card-gsap group relative rounded-2xl overflow-hidden bg-[#1A1A1D]/90 backdrop-blur-2xl border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 shadow-[0_15px_35px_rgba(0,0,0,0.6)] hover:shadow-[0_20px_50px_rgba(212,175,55,0.15)] transition-all duration-300 flex flex-col justify-between ${
        isLarge ? 'md:col-span-2 lg:col-span-1' : ''
      }`}
    >
      {/* Image Container with Zoom Effect */}
      <div className="relative w-full h-64 sm:h-72 overflow-hidden bg-[#0B0B0D]">
        <Image
          src={destination.image}
          alt={destination.name}
          fill
          unoptimized={destination.image.startsWith('http')}
          className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Dark Charcoal Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1D] via-[#1A1A1D]/40 to-transparent" />

        {/* Subtitle Badge */}
        <div className="absolute top-4 left-4 z-10">
          <span className="px-3 py-1 rounded-full bg-[#0B0B0D]/90 backdrop-blur-md border border-[#D4AF37]/30 text-[11px] font-medium text-[#F5D77F] tracking-wide shadow-md">
            {destination.subtitle}
          </span>
        </div>

        {/* Travel Time Tag */}
        <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0B0B0D]/90 backdrop-blur-md border border-[#D4AF37]/30 text-[11px] font-mono text-[#F8F5EE] shadow-md">
          <Clock className="w-3 h-3 text-[#D4AF37]" />
          <span>{destination.travelTime}</span>
        </div>

        {/* Real Distance Tag from Chennai */}
        <div className="absolute bottom-4 left-4 z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#0B0B0D]/90 backdrop-blur-md border border-[#D4AF37]/40 shadow-lg">
          <Navigation className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span className="text-xs font-mono font-bold text-[#F8F5EE] tracking-wide">
            {destination.distance}
          </span>
        </div>
      </div>

      {/* Content Body — Luxury Charcoal #1A1A1D */}
      <div className="p-6 flex-1 flex flex-col justify-between bg-[#1A1A1D] border-t border-[#D4AF37]/15">
        <div>
          <h3 className="text-xl font-extrabold text-[#F5D77F] group-hover:text-white transition-colors duration-300 flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0" />
            <span className="text-[#F5D77F] tracking-wide">{destination.name}</span>
          </h3>
          <p className="mt-3 text-sm text-[#A1A1AA] leading-relaxed line-clamp-2 font-normal">
            {destination.description}
          </p>
        </div>

        {/* Action Button */}
        <div className="mt-6 pt-4 border-t border-[#D4AF37]/15 flex items-center justify-between">
          <Link
            href={`/book?destination=${destination.id}`}
            className="w-full inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl bg-[#25262B] hover:bg-gradient-to-r hover:from-[#D4AF37] hover:to-[#A16207] border border-[#D4AF37]/30 hover:border-[#D4AF37] text-xs font-bold uppercase tracking-wider text-[#F8F5EE] hover:text-slate-950 transition-all duration-300 shadow-md group-hover:shadow-[#D4AF37]/20"
          >
            <span>Explore Packages</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37] group-hover:text-slate-950 group-hover:translate-x-1 transition-all" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
