'use client';

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import GlobalVideoBackground from '@/components/home/GlobalVideoBackground';
import BookingCard from '@/components/ui/BookingCard';
import { ShieldCheck, Star, Award, Clock, Sparkles } from 'lucide-react';
import { useScrollStoryController } from '@/components/animation/ScrollStoryController';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HeroSection() {
  const { heroSectionRef, heroContentRef } = useScrollStoryController();
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const pillsRef = useRef<HTMLDivElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroSectionRef.current) return;

    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // 1. Headline GSAP 3D Entrance Reveal
      if (headlineRef.current) {
        const headlineLines = headlineRef.current.querySelectorAll('.hero-gsap-line');
        tl.fromTo(
          headlineLines,
          { opacity: 0, y: 45, rotateX: 30, filter: 'blur(8px)' },
          { opacity: 1, y: 0, rotateX: 0, filter: 'blur(0px)', stagger: 0.18, duration: 1.1 }
        );
      }

      // 2. Subtitle GSAP Fade Up
      if (subtitleRef.current) {
        tl.fromTo(
          subtitleRef.current,
          { opacity: 0, y: 25, filter: 'blur(6px)' },
          { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.8 },
          '-=0.6'
        );
      }

      // 3. Trust Pills GSAP Stagger
      if (pillsRef.current) {
        tl.fromTo(
          pillsRef.current.children,
          { opacity: 0, y: 20, scale: 0.92 },
          { opacity: 1, y: 0, scale: 1, stagger: 0.1, duration: 0.7 },
          '-=0.5'
        );
      }

      // 4. Trust Metrics GSAP Stagger
      if (metricsRef.current) {
        tl.fromTo(
          metricsRef.current.children,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, stagger: 0.12, duration: 0.7 },
          '-=0.4'
        );
      }
    }, heroSectionRef);

    return () => ctx.revert();
  }, [heroSectionRef]);

  return (
    <section
      ref={heroSectionRef}
      className="relative w-full min-h-[100svh] flex flex-col items-center justify-center overflow-hidden border-none"
    >
      {/* Video Background bounded strictly inside Hero Section */}
      <GlobalVideoBackground />

      {/* Ambient visual accents */}
      <div className="ambient-gold" style={{ top: '-20%', left: '60%' }} />
      <div className="ambient-navy" style={{ bottom: '-30%', right: '-10%' }} />
      
      {/* Subtle noise texture */}
      <div
        className="absolute inset-0 z-[5] opacity-5 pointer-events-none"
        style={{ backgroundImage: 'url(/images/hero-noise.svg)', backgroundSize: '8px 8px' }}
      />

      {/* Overlays */}
      <div className="absolute inset-0 z-[1] bg-black/48" />
      <div
        className="absolute inset-0 z-[2]"
        style={{
          background:
            'linear-gradient(to bottom, rgba(8,14,31,0.68) 0%, rgba(8,14,31,0.22) 50%, rgba(8,14,31,0.80) 100%)',
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-[600px] h-[400px] z-[2] opacity-30 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at bottom right, rgba(202,138,4,0.35), transparent 70%)' }}
      />
      <div className="absolute inset-0 z-[3] bg-black opacity-20 pointer-events-none" />
      <div
        className="absolute inset-0 z-[4] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.12), transparent 70%)' }}
      />
      <div
        className="absolute inset-0 z-[4] pointer-events-none opacity-35"
        style={{
          backgroundImage: 'radial-gradient(rgba(202,138,4,0.5) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Content */}
      <div
        ref={heroContentRef}
        className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 flex flex-col items-center"
      >
        <div className="w-full flex flex-col items-center text-center space-y-8">
          
          {/* Headline */}
          <div className="relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[280px] bg-[#D4AF37]/15 blur-[120px] rounded-full pointer-events-none z-0" />
            <h1
              ref={headlineRef}
              className="relative z-10 font-serif text-5xl sm:text-6xl lg:text-[5.5rem] font-bold text-white leading-[1.05] tracking-tight max-w-4xl perspective-1000"
            >
              <span className="hero-gsap-line block dark:text-[#F5D77F]">Your Trip...</span>
              <span
                className="hero-gsap-line block bg-gradient-to-r from-[#F5D77F] via-[#CA8A04] to-[#EAB308] bg-clip-text text-transparent italic hero-headline-gradient"
              >
                Our Responsibility!
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <p
            ref={subtitleRef}
            className="text-base sm:text-lg max-w-2xl leading-relaxed font-sans font-light"
            style={{ color: 'rgba(240,235,225,0.85)', letterSpacing: '0.01em' }}
          >
            Executive airport transfers, local Chennai rides, outstation tour packages, and sacred temple pilgrimages — personally coordinated by proprietor <strong className="text-white font-semibold">S. Ramesh</strong> with care.
          </p>

          {/* Trust pills */}
          <div ref={pillsRef} className="flex flex-wrap items-center justify-center gap-3">
            {[
              { icon: <Award className="w-3.5 h-3.5" style={{ color: '#CA8A04' }} />, label: '100% Punctuality' },
              { icon: <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />, label: 'Verified Cabs' },
              { icon: <Sparkles className="w-3.5 h-3.5" style={{ color: '#CA8A04' }} />, label: 'Zero Advance Fees' },
            ].map(({ icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono backdrop-blur-md transition-all duration-300 hover:scale-105 cursor-default shadow-md"
                style={{
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(212,175,55,0.30)',
                  color: 'rgba(240,235,225,0.92)',
                }}
              >
                {icon}
                {label}
              </span>
            ))}
          </div>

          {/* Booking Card */}
          <BookingCard />

          {/* Trust metrics */}
          <div
            ref={metricsRef}
            className="w-full max-w-md pt-7 grid grid-cols-3 gap-6"
            style={{ borderTop: '1px solid rgba(202,138,4,0.25)' }}
          >
            {[
              { icon: <Award className="w-3.5 h-3.5" />, value: '100%', label: 'Punctuality' },
              { icon: <Star className="w-3.5 h-3.5 fill-current" />, value: '4.9 / 5.0', label: 'Customer Rating' },
              { icon: <Clock className="w-3.5 h-3.5" />, value: '24 / 7', label: 'Direct Assistance' },
            ].map(({ icon, value, label }) => (
              <div key={label} className="flex flex-col items-center gap-1.5">
                <div
                  className="flex items-center gap-1.5 font-semibold text-lg"
                  style={{ color: '#F5D77F', fontFamily: 'var(--font-serif)' }}
                >
                  <span style={{ color: '#CA8A04' }}>{icon}</span>
                  <span>{value}</span>
                </div>
                <p
                  className="text-[10px] uppercase tracking-widest font-semibold"
                  style={{ color: 'rgba(240,235,225,0.55)', fontFamily: 'var(--font-mono)' }}
                >
                  {label}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 animate-bounce">
        <span
          className="text-[9px] font-mono uppercase tracking-[0.2em]"
          style={{ color: 'rgba(245,215,127,0.60)' }}
        >
          Scroll
        </span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{ color: 'rgba(202,138,4,0.75)' }}>
          <path
            d="M12 5v14M5 12l7 7 7-7"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
}
