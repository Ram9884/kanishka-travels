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
    <section ref={sectionRef} className="relative w-full py-12 sm:py-20 bg-transparent overflow-hidden">
      {/* Subtle Ambient Gold Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#D4AF37]/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] dark:text-[#F5D77F] text-[11px] sm:text-xs font-semibold tracking-wider uppercase mb-3 sm:mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curated South India Journeys</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="destinations-section-title font-serif text-2.5xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight"
          >
            Signature <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5D77F] via-[#D4AF37] to-[#A16207]">Journeys</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="destinations-section-subtitle mt-3 sm:mt-4 text-sm sm:text-lg font-medium leading-relaxed max-w-2xl mx-auto"
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch"
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
      className={`destination-card-gsap destination-card-container group relative rounded-3xl overflow-hidden border transition-all duration-300 flex flex-col justify-between ${
        isLarge ? 'md:col-span-2 lg:col-span-1' : ''
      }`}
    >
      {/* Image Container with Zoom Effect */}
      <div className="relative w-full h-56 sm:h-72 overflow-hidden bg-[#0B0B0D]">
        <Image
          src={destination.image}
          alt={destination.name}
          fill
          quality={70}
          unoptimized={destination.image.startsWith('http')}
          className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

        {/* Top Badges Bar (Flex Container prevents overlap) */}
        <div className="absolute top-3 sm:top-4 left-3 sm:left-4 right-3 sm:right-4 z-10 flex items-center justify-between gap-2">
          <span className="px-2.5 sm:px-3 py-1 rounded-full bg-[#0B0B0D]/90 backdrop-blur-md border border-[#D4AF37]/40 text-[10px] sm:text-[11px] font-semibold text-[#F5D77F] tracking-wide shadow-md truncate max-w-[65%]">
            {destination.subtitle}
          </span>
          <span className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-[#0B0B0D]/90 backdrop-blur-md border border-[#D4AF37]/40 text-[10px] sm:text-[11px] font-mono text-[#F8F5EE] shadow-md shrink-0">
            <Clock className="w-3 h-3 text-[#D4AF37]" />
            <span>{destination.travelTime}</span>
          </span>
        </div>

        {/* Distance Tag from Chennai */}
        <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#0B0B0D]/90 backdrop-blur-md border border-[#D4AF37]/40 shadow-lg">
          <Navigation className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span className="text-[11px] sm:text-xs font-mono font-bold text-[#F8F5EE] tracking-wide">
            {destination.distance}
          </span>
        </div>
      </div>

      {/* Content Body */}
      <div className="destination-card-body p-4 sm:p-6 flex-1 flex flex-col justify-between border-t border-[#D4AF37]/20">
        <div>
          <h3 className="destination-card-title text-lg sm:text-xl font-extrabold flex items-center gap-2 transition-colors duration-300">
            <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0" />
            <span className="tracking-wide">{destination.name}</span>
          </h3>
          <p className="destination-card-desc mt-2 sm:mt-3 text-xs sm:text-sm leading-relaxed line-clamp-2 font-normal">
            {destination.description}
          </p>
        </div>

        {/* Action Button */}
        <div className="mt-5 sm:mt-6 pt-3.5 sm:pt-4 border-t border-[#D4AF37]/20 flex items-center justify-between">
          <Link
            href={`/book?destination=${destination.id}`}
            className="destination-card-btn w-full inline-flex items-center justify-center gap-2.5 px-4 sm:px-5 py-3 min-h-[44px] rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all duration-300 shadow-md"
          >
            <span>Explore Packages</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
