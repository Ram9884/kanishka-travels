'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import { TESTIMONIALS, Testimonial } from '@/data/testimonials';

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
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (carouselRef.current) {
      const { scrollLeft, clientWidth } = carouselRef.current;
      const cardWidth = 360 + 24; // card width + gap
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(Math.min(Math.max(index, 0), TESTIMONIALS.length - 1));
    }
  };

  const scrollToCard = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = 360 + 24;
      carouselRef.current.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth',
      });
      setActiveIndex(index);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -384 : 384;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full py-24 bg-transparent overflow-hidden">
      {/* Radial Background Glow */}
      <div className="absolute top-1/3 left-1/3 w-[600px] h-[350px] bg-[#D4AF37]/8 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-semibold uppercase tracking-wider mb-3 shadow-[0_0_15px_rgba(212,175,55,0.15)]"
            >
              <ShieldCheck className="w-3.5 h-3.5" strokeWidth={2} />
              <span>Authentic Client Reviews</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="testimonial-section-title font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight"
            >
              Stories from <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5D77F] via-[#D4AF37] to-[#A16207]">Our Travellers</span>
            </motion.h2>

            {/* Google Rating Summary Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="google-rating-badge mt-4 inline-flex items-center gap-3 px-4 py-2.5 rounded-xl shadow-md"
            >
              <div className="flex items-center gap-1 text-[#F5D77F]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37] drop-shadow-[0_0_6px_rgba(212,175,55,0.6)]" />
                ))}
              </div>
              <span className="google-rating-score text-xs font-bold font-mono">4.9 / 5.0</span>
              <span className="google-rating-text text-xs font-medium">Based on 350+ Google Reviews</span>
            </motion.div>
          </div>
        </div>

        {/* Carousel Container */}
        <div
          ref={carouselRef}
          onScroll={handleScroll}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar py-6 px-1"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {TESTIMONIALS.map((testimonial, idx) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} index={idx} />
          ))}
        </div>

        {/* Bottom Navigation & Controls */}
        <div className="mt-8 pt-6 border-t border-[#D4AF37]/20 flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Active Counter Indicator */}
          <div className="flex items-center gap-2.5">
            <span className="text-xs font-mono font-bold text-[#D4AF37] tracking-wider uppercase">
              0{activeIndex + 1} / 0{TESTIMONIALS.length}
            </span>
            <span className="h-3 w-[1px] bg-[#D4AF37]/30" />
            <span className="text-xs font-medium text-slate-400">
              {TESTIMONIALS[activeIndex]?.tripType || 'Guest Review'}
            </span>
          </div>

          {/* Center Dot Indicators */}
          <div className="flex items-center gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToCard(i)}
                aria-label={`Go to review slide ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  activeIndex === i
                    ? 'w-8 bg-gradient-to-r from-[#F5D77F] to-[#D4AF37] shadow-[0_0_12px_rgba(212,175,55,0.7)]'
                    : 'w-2 bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>

          {/* Right Side Move Arrow Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll('left')}
              aria-label="Previous review"
              className="testimonial-move-btn p-3.5 rounded-full transition-all duration-300 cursor-pointer active:scale-95 flex items-center justify-center"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              aria-label="Next review"
              className="testimonial-move-btn p-3.5 rounded-full transition-all duration-300 cursor-pointer active:scale-95 flex items-center justify-center"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
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
      whileHover={{ y: -6, scale: 1.015 }}
      className="premium-testimonial-card snap-start shrink-0 w-[310px] sm:w-[360px] md:w-[400px] p-7 sm:p-8 rounded-2xl flex flex-col justify-between group relative overflow-hidden"
    >
      {/* Background Decorative Accent Glow */}
      <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#D4AF37]/10 rounded-full blur-2xl pointer-events-none group-hover:bg-[#D4AF37]/20 transition-all duration-500" />
      <Quote className="w-14 h-14 text-[#D4AF37]/15 group-hover:text-[#D4AF37]/30 group-hover:rotate-6 group-hover:scale-110 transition-all duration-500 absolute top-5 right-5 pointer-events-none" />

      <div className="relative z-10 space-y-4">
        {/* Rating Stars & Trip Type Pill Tag */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-1">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37] drop-shadow-[0_0_8px_rgba(212,175,55,0.6)]" />
            ))}
          </div>
          <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold uppercase tracking-wider bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#D4AF37] shrink-0">
            {testimonial.tripType}
          </span>
        </div>

        {/* Review Body Text */}
        <p className="testimonial-review-text text-sm sm:text-[15px] text-[#F8F5EE] leading-relaxed font-sans font-light italic pt-1 pr-2">
          &quot;{testimonial.review}&quot;
        </p>
      </div>

      {/* User Footer Profile Info */}
      <div className="mt-8 pt-5 border-t border-[#D4AF37]/20 flex items-center justify-between relative z-10">
        <div className="flex items-center gap-3.5">
          <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-[#D4AF37]/50 shrink-0 shadow-[0_0_14px_rgba(212,175,55,0.25)] bg-[#121316]">
            <Image
              src={testimonial.avatar}
              alt={testimonial.name}
              fill
              unoptimized={testimonial.avatar.startsWith('http')}
              className="object-cover"
              sizes="44px"
            />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <h3 className="testimonial-author-name text-xs sm:text-sm font-bold text-white group-hover:text-[#F5D77F] transition-colors">
                {testimonial.name}
              </h3>
              {testimonial.verified && (
                <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" />
              )}
            </div>
            <p className="testimonial-author-role text-[11px] text-slate-400 font-sans mt-0.5">
              {testimonial.role} • {testimonial.location}
            </p>
          </div>
        </div>
        <span className="text-[10px] font-mono text-[#D4AF37]/80 shrink-0 font-medium">{testimonial.date}</span>
      </div>
    </motion.div>
  );
}

