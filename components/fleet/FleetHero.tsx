'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Car, Shield, Star } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function FleetHero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!heroRef.current || !titleRef.current || !subtitleRef.current) return;

    const ctx = gsap.context(() => {
      // Subtle parallax on scroll — title drifts upward gently
      gsap.to(titleRef.current, {
        yPercent: -18,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      gsap.to(subtitleRef.current, {
        yPercent: -10,
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
      className="relative w-full min-h-[55vh] flex flex-col items-center justify-center pt-36 pb-20 overflow-hidden bg-transparent"
    >
      {/* Top gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-transparent pointer-events-none z-0" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/35 text-[#F5D77F] text-xs font-mono tracking-widest uppercase"
        >
          <Car className="w-3.5 h-3.5" />
          <span>7 Premium Vehicles · Fully Insured</span>
        </motion.div>

        {/* Main title */}
        <motion.h1
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="fleet-hero-title font-serif text-5xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight leading-tight"
        >
          The Right Vehicle{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5D77F] via-[#D4AF37] to-[#A16207]">
            for Every Journey
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          ref={subtitleRef}
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="fleet-hero-subtitle text-base sm:text-lg md:text-xl text-[#F8F5EE]/75 max-w-2xl mx-auto leading-relaxed font-sans font-light"
        >
          From swift city sedans to grand group minibuses — each vehicle immaculately maintained, personally coordinated by S. Ramesh.
        </motion.p>

        {/* Trust pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex flex-wrap items-center justify-center gap-3 pt-4"
        >
          {[
            { icon: Shield, label: 'Fully Insured Fleet' },
            { icon: Star, label: 'Zero Advance Booking' },
            { icon: Car, label: 'Professional Chauffeurs' },
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
