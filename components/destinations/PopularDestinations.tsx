'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { MapPin, Clock, ArrowRight, Sparkles } from 'lucide-react';
import { POPULAR_DESTINATIONS, Destination } from '@/data/destinations';

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
  return (
    <section className="relative w-full py-20 bg-[#0A1128] overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#D4AF37]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-semibold tracking-wider uppercase mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curated South India Journeys</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight"
          >
            Popular <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5D77F] via-[#D4AF37] to-[#A16207]">Destinations</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-300 font-normal leading-relaxed"
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
      className={`group relative rounded-2xl overflow-hidden glass-dark border border-white/10 hover:border-[#D4AF37]/60 shadow-xl transition-all duration-300 flex flex-col justify-between ${
        isLarge ? 'md:col-span-2 lg:col-span-1' : ''
      }`}
    >
      {/* Image Container with Zoom Effect */}
      <div className="relative w-full h-64 sm:h-72 overflow-hidden bg-slate-950">
        <Image
          src={destination.image}
          alt={destination.name}
          fill
          unoptimized={destination.image.startsWith('http')}
          className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Dark Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128] via-[#0A1128]/40 to-transparent" />

        {/* Subtitle Badge */}
        <div className="absolute top-4 left-4 z-10">
          <span className="px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/15 text-[11px] font-medium text-[#F5D77F] tracking-wide">
            {destination.subtitle}
          </span>
        </div>

        {/* Travel Time Tag */}
        <div className="absolute top-4 right-4 z-10 flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/15 text-[11px] font-mono text-slate-300">
          <Clock className="w-3 h-3 text-[#D4AF37]" />
          <span>{destination.travelTime}</span>
        </div>

        {/* Floating Price Tag */}
        <div className="absolute bottom-4 left-4 z-10">
          <span className="text-xs text-slate-400 font-mono block">Starting From</span>
          <span className="text-xl font-bold font-mono text-white tracking-tight group-hover:text-[#F5D77F] transition-colors">
            {destination.startingPrice}
          </span>
        </div>
      </div>

      {/* Content Body */}
      <div className="p-6 flex-1 flex flex-col justify-between bg-slate-900/50 backdrop-blur-lg">
        <div>
          <h3 className="text-xl font-bold text-white group-hover:text-[#F5D77F] transition-colors duration-300 flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0" />
            <span>{destination.name}</span>
          </h3>
          <p className="mt-2.5 text-sm text-slate-300 leading-relaxed line-clamp-2">
            {destination.description}
          </p>
        </div>

        {/* Action Button */}
        <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
          <Link
            href={`/book?destination=${destination.id}`}
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-[#D4AF37]/20 border border-white/10 hover:border-[#D4AF37]/50 text-xs font-semibold text-white group-hover:text-[#F5D77F] transition-all duration-300"
          >
            <span>Explore Packages</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
