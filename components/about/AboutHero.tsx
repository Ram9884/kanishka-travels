'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Crown, MapPin, Heart, ShieldCheck } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutHero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!heroRef.current || !titleRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(titleRef.current, {
        yPercent: -15,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative w-full min-h-[50vh] flex flex-col items-center justify-center pt-36 pb-16 overflow-hidden bg-transparent"
    >
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        {/* Location badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="about-hero-badge inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/35 text-[#F5D77F] text-xs font-mono tracking-widest uppercase"
        >
          <Crown className="w-3.5 h-3.5" />
          <span>Iyyappanthangal, Chennai · Est. 2012</span>
        </motion.div>

        {/* Main title */}
        <motion.h1
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="about-hero-title font-serif text-4xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight leading-tight"
        >
          A Decade of{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5D77F] via-[#D4AF37] to-[#A16207]">
            Personal Dedication
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="about-hero-subtitle text-base sm:text-lg md:text-xl text-[#F8F5EE]/75 max-w-3xl mx-auto leading-relaxed font-sans font-light"
        >
          Founded and personally managed by <strong className="text-white font-semibold">S. Ramesh</strong> — built on a single timeless promise:{' '}
          <em className="text-[#F5D77F] font-serif not-italic font-medium">&quot;Your Trip... Our Responsibility!&quot;</em>
        </motion.p>

        {/* Trust pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex flex-wrap items-center justify-center gap-3 pt-4"
        >
          {[
            { icon: MapPin, label: 'Based in Iyyappanthangal' },
            { icon: Heart, label: '100% Owner-Managed' },
            { icon: ShieldCheck, label: '5,000+ Journeys Served' },
          ].map(({ icon: Icon, label }) => (
            <span
              key={label}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#1A1A1D]/80 border border-[#D4AF37]/25 text-[#F8F5EE]/80 text-xs font-medium"
            >
              <Icon className="w-3 h-3 text-[#D4AF37]" />
              {label}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
