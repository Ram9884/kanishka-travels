'use client';

import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import WhatsAppButton from '@/components/WhatsAppButton';
import CallButton from '@/components/CallButton';
import BookingCard from '@/components/ui/BookingCard';
import { Crown, ShieldCheck, ArrowRight, Star, Award, Clock, Sparkles } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13, delayChildren: 0.3 } },
};

const fadeUp = {
  hidden:   { opacity: 0, y: 30, filter: 'blur(10px)' },
  visible:  { opacity: 1, y: 0,  filter: 'blur(0px)',  transition: { duration: 0.75, ease: 'easeOut' as const } },
};

import { useScrollStoryController } from '@/components/animation/ScrollStoryController';

export default function HeroSection() {
  const { heroSectionRef, heroContentRef } = useScrollStoryController();

  return (
    <section
      ref={heroSectionRef}
      className="relative w-full min-h-[100svh] flex flex-col items-center justify-center overflow-hidden border-none"
    >
      {/* Ambient visual accents */}
      <div className="ambient-gold" style={{ top: '-20%', left: '60%' }} />
      <div className="ambient-navy" style={{ bottom: '-30%', right: '-10%' }} />
      {/* Subtle noise texture */}
      <div className="absolute inset-0 z-[5] opacity-5 pointer-events-none" style={{ backgroundImage: 'url(/images/hero-noise.svg)', backgroundSize: '8px 8px' }} />
      {/* ── Overlays ──────────────────────────────────────────────────── */}
      {/* 1 — Base density */}
      <div className="absolute inset-0 z-[1] bg-black/48" />
      {/* 2 — Cinematic top-heavy gradient */}
      <div className="absolute inset-0 z-[2]" style={{
        background: 'linear-gradient(to bottom, rgba(8,14,31,0.68) 0%, rgba(8,14,31,0.22) 50%, rgba(8,14,31,0.80) 100%)',
      }} />

      {/* Transparent section over GlobalVideoBackground */}

      {/* 3 — Ambient gold bloom bottom-right */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[400px] z-[2] opacity-30 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at bottom right, rgba(202,138,4,0.35), transparent 70%)' }} />
      {/* 4 — Scroll darken */}
      <div className="absolute inset-0 z-[3] bg-black opacity-20 pointer-events-none" />
      {/* Vignette overlay */}
      <div className="absolute inset-0 z-[4] pointer-events-none" style={{ background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.12), transparent 70%)' }} />
      {/* 5 — Subtle gold dot grid */}
      <div className="absolute inset-0 z-[4] pointer-events-none opacity-35"
        style={{ backgroundImage: 'radial-gradient(rgba(202,138,4,0.5) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      {/* ── Content ───────────────────────────────────────────────────── */}
      <motion.div
        ref={heroContentRef}
        className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 flex flex-col items-center"
      >
        <motion.div
          className="w-full flex flex-col items-center text-center space-y-8"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >

          {/* Headline — dark mode: white + gold, light mode: espresso + gold via CSS */}
          <div className="relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[280px] bg-[#D4AF37]/15 blur-[120px] rounded-full pointer-events-none z-0" />
            <motion.h1
              variants={fadeUp}
              className="relative z-10 font-serif text-5xl sm:text-6xl lg:text-[5.5rem] font-bold text-white leading-[1.05] tracking-tight max-w-4xl"
            >
              <span className="dark:text-[#F5D77F]">Your Trip...</span>{' '}
              <br className="hidden sm:block" />
              <span
                className="bg-gradient-to-r from-[#F5D77F] via-[#CA8A04] to-[#EAB308] bg-clip-text text-transparent hero-headline-gradient"
                style={{ fontStyle: 'italic' }}
              >
                Our Responsibility!
              </span>
            </motion.h1>
          </div>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            className="text-base sm:text-lg max-w-2xl leading-relaxed"
            style={{ color: 'rgba(240,235,225,0.72)', fontFamily: 'var(--font-sans)', fontWeight: 300, letterSpacing: '0.01em' }}
          >
            Executive airport transfers, local Chennai rides, outstation tour packages,
            and sacred temple pilgrimages — personally coordinated by S. Ramesh with care.
          </motion.p>

          {/* Trust pills */}
          <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center gap-3">
            {[
              { icon: <Award className="w-3.5 h-3.5" style={{ color: '#CA8A04' }} />, label: '100% Punctuality' },
              { icon: <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />, label: 'Verified Cabs' },
              { icon: <Sparkles className="w-3.5 h-3.5" style={{ color: '#CA8A04' }} />, label: 'Zero Advance Fees' },
            ].map(({ icon, label }) => (
              <span key={label}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono backdrop-blur-sm transition-all duration-300 hover:scale-105 cursor-default"
                style={{
                  background: 'rgba(255,255,255,0.07)',
                  border: '1px solid rgba(255,255,255,0.14)',
                  color: 'rgba(240,235,225,0.88)',
                }}>
                {icon}{label}
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <BookingCard />

          {/* Trust metrics */}
          <motion.div
            variants={fadeUp}
            className="w-full max-w-md pt-7 grid grid-cols-3 gap-6"
            style={{ borderTop: '1px solid rgba(202,138,4,0.20)' }}
          >
            {[
              { icon: <Award className="w-3.5 h-3.5" />, value: '100%', label: 'Punctuality' },
              { icon: <Star className="w-3.5 h-3.5 fill-current" />, value: '4.9 / 5.0', label: 'Customer Rating' },
              { icon: <Clock className="w-3.5 h-3.5" />, value: '24 / 7', label: 'Direct Assistance' },
            ].map(({ icon, value, label }) => (
              <div key={label} className="flex flex-col items-center gap-1.5">
                <div className="flex items-center gap-1.5 font-semibold text-lg"
                  style={{ color: '#F5D77F', fontFamily: 'var(--font-serif)' }}>
                  <span style={{ color: '#CA8A04' }}>{icon}</span>
                  <span>{value}</span>
                </div>
                <p className="text-[10px] uppercase tracking-widest font-semibold"
                  style={{ color: 'rgba(240,235,225,0.42)', fontFamily: 'var(--font-mono)' }}>
                  {label}
                </p>
              </div>
            ))}
          </motion.div>

        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-7 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5"
        animate={{ y: [0, 7, 0] }}
        transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
      >
        <span className="text-[9px] font-mono uppercase tracking-[0.2em]"
          style={{ color: 'rgba(245,215,127,0.45)' }}>Scroll</span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
          style={{ color: 'rgba(202,138,4,0.55)' }}>
          <path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="1.5"
            strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.div>
    </section>
  );
}
