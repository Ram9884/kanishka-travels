'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import { TESTIMONIALS, Testimonial } from '@/data/testimonials';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function PremiumTestimonials() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full py-24 bg-transparent overflow-hidden">
      {/* Radial Background Glow */}
      <div className="absolute top-1/3 left-1/3 w-[600px] h-[350px] bg-[#D4AF37]/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Google Rating Badge */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-semibold uppercase tracking-wider mb-3"
            >
              <ShieldCheck className="w-3.5 h-3.5" strokeWidth={2} />
              <span>Authentic Client Reviews</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight"
            >
              Stories from <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5D77F] via-[#D4AF37] to-[#A16207]">Our Travellers</span>
            </motion.h2>

            {/* Google Rating Summary Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 inline-flex items-center gap-3 px-4 py-2 rounded-xl glass-dark border border-white/15"
            >
              <div className="flex items-center gap-1 text-[#F5D77F]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                ))}
              </div>
              <span className="text-xs font-bold text-white font-mono">4.9 / 5.0</span>
              <span className="text-xs text-slate-400">Based on 350+ Google Reviews</span>
            </motion.div>
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

        {/* Carousel Container */}
        <div
          ref={carouselRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar py-4 px-1"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {TESTIMONIALS.map((testimonial, idx) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial, index }: { testimonial: Testimonial; index: number }) {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="snap-start shrink-0 w-[310px] sm:w-[360px] md:w-[400px] p-7 rounded-2xl bg-[#1A1A1D]/90 border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 shadow-[0_15px_35px_rgba(0,0,0,0.6)] hover:shadow-[0_20px_50px_rgba(212,175,55,0.15)] transition-all duration-300 flex flex-col justify-between group relative"
    >
      <Quote className="w-14 h-14 text-[#D4AF37]/15 group-hover:text-[#D4AF37]/35 group-hover:scale-105 transition-all duration-300 absolute top-5 right-5 pointer-events-none" />

      <div>
        {/* Rating Stars */}
        <div className="flex items-center gap-1 mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
          ))}
        </div>

        {/* Review Text */}
        <p className="text-xs sm:text-sm text-[#F8F5EE] leading-relaxed font-normal italic pr-4">
          &quot;{testimonial.review}&quot;
        </p>
      </div>

      {/* User Footer Info */}
      <div className="mt-6 pt-4 border-t border-[#D4AF37]/15 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#D4AF37]/40 shrink-0">
            <Image
              src={testimonial.avatar}
              alt={testimonial.name}
              fill
              unoptimized={testimonial.avatar.startsWith('http')}
              className="object-cover"
              sizes="40px"
            />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <h3 className="text-xs font-bold text-white group-hover:text-[#F5D77F] transition-colors">
                {testimonial.name}
              </h3>
              {testimonial.verified && (
                <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" />
              )}
            </div>
            <p className="text-[11px] text-slate-400 font-mono">
              {testimonial.role} • {testimonial.location}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
