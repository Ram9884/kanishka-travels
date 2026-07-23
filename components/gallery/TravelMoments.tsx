'use client';

import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { Camera, MapPin, Sparkles } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '@/data/gallery';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function TravelMoments() {
  return (
    <section className="relative w-full py-24 bg-[#0A1128] overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#D4AF37]/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <Camera className="w-3.5 h-3.5 text-[#D4AF37]" strokeWidth={2} />
            <span>Captured Journeys</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight"
          >
            Travel <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5D77F] via-[#D4AF37] to-[#A16207]">Moments</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-300 font-normal leading-relaxed"
          >
            Real glimpse of airport transfers, family pilgrimages, and hill station excursions handled by Kanishka Travels.
          </motion.p>
        </div>

        {/* Gallery Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {GALLERY_ITEMS.map((item) => (
            <GalleryCard key={item.id} item={item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function GalleryCard({ item }: { item: GalleryItem }) {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -6, scale: 1.02 }}
      className="group relative rounded-2xl overflow-hidden glass-dark border border-white/10 hover:border-[#D4AF37]/60 shadow-xl transition-all duration-300 h-72 sm:h-80 flex flex-col justify-end"
    >
      <Image
        src={item.image}
        alt={item.title}
        fill
        className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out opacity-85 group-hover:opacity-100"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128] via-[#0A1128]/30 to-transparent z-10" />

      {/* Category Badge */}
      <div className="absolute top-4 left-4 z-20">
        <span className="px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/15 text-[11px] font-semibold text-[#F5D77F] tracking-wide">
          {item.category}
        </span>
      </div>

      {/* Footer Details */}
      <div className="relative z-20 p-6">
        <h3 className="text-lg font-bold text-white group-hover:text-[#F5D77F] transition-colors leading-snug">
          {item.title}
        </h3>
        <p className="mt-2 text-xs text-slate-300 flex items-center gap-1.5 font-medium">
          <MapPin className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" strokeWidth={2} />
          <span>{item.location}</span>
        </p>
      </div>
    </motion.div>
  );
}
