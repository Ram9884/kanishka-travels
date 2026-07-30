'use client';

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import BookingCard from '@/components/ui/BookingCard';
import { ShieldCheck, Award, Sparkles } from 'lucide-react';
import { useScrollStoryController } from '@/components/animation/ScrollStoryController';
import { useTheme } from '@/components/ThemeProvider';

export default function HeroSection() {
  const { theme } = useTheme();
  const isLight = theme === 'light';
  const { heroSectionRef, heroContentRef } = useScrollStoryController();
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const pillsRef   = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroSectionRef.current) return;

    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      if (headlineRef.current) {
        const lines = headlineRef.current.querySelectorAll('.hero-gsap-line');
        tl.fromTo(
          lines,
          { opacity: 0, y: 40, rotateX: 25, filter: 'blur(6px)' },
          { opacity: 1, y: 0, rotateX: 0, filter: 'blur(0px)', stagger: 0.18, duration: 1.0 }
        );
      }
      if (subtitleRef.current) {
        tl.fromTo(
          subtitleRef.current,
          { opacity: 0, y: 20, filter: 'blur(4px)' },
          { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.7 },
          '-=0.5'
        );
      }
      if (pillsRef.current) {
        tl.fromTo(
          pillsRef.current.children,
          { opacity: 0, y: 16, scale: 0.93 },
          { opacity: 1, y: 0, scale: 1, stagger: 0.1, duration: 0.6 },
          '-=0.4'
        );
      }
    }, heroSectionRef);

    return () => ctx.revert();
  }, [heroSectionRef, theme]);

  return (
    <section
      ref={heroSectionRef}
      className="relative w-full min-h-[100svh] flex flex-col items-center justify-center overflow-hidden border-none"
    >
      {/* ── Static Background ── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {isLight ? (
          /* Light: warm ivory-to-gold gradient */
          <>
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(160deg, #FAF7F0 0%, #F5EDD8 35%, #EDE5CC 65%, #E8DFC4 100%)',
              }}
            />
            {/* Warm amber glow — top right */}
            <div
              className="absolute -top-32 right-0 w-[700px] h-[600px] opacity-40 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse at top right, rgba(212,160,23,0.35), transparent 65%)' }}
            />
            {/* Warm glow — bottom left */}
            <div
              className="absolute bottom-0 left-0 w-[600px] h-[500px] opacity-30 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse at bottom left, rgba(180,83,9,0.22), transparent 65%)' }}
            />
            {/* Dot grid texture */}
            <div
              className="absolute inset-0 opacity-[0.07]"
              style={{
                backgroundImage: 'radial-gradient(rgba(146,64,14,0.6) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
              }}
            />
          </>
        ) : (
          /* Dark: Video Background with Opacity for High Contrast Readability */
          <>
            {/* Dark Base */}
            <div className="absolute inset-0 bg-[#0B0B0D]" />
            {/* Video with 70% opacity */}
            <video
              className="absolute inset-0 w-full h-full object-cover opacity-80"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
            >
              <source src="/videos/hero.mp4" type="video/mp4" />
            </video>
            {/* Dark contrast gradient overlay */}
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(to bottom, rgba(11,11,13,0.65) 0%, rgba(11,11,13,0.45) 45%, rgba(11,11,13,0.95) 100%)',
              }}
            />
            {/* Ambient vignette */}
            <div
              className="absolute inset-0"
              style={{ background: 'radial-gradient(ellipse at center, transparent 35%, rgba(0,0,0,0.65) 100%)' }}
            />
          </>
        )}
      </div>

      {/* ── Content ── */}
      <div
        ref={heroContentRef}
        className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 pb-14 sm:pb-20 flex flex-col items-center"
      >
        <div className="w-full flex flex-col items-center text-center space-y-6 sm:space-y-8">

          {/* Headline */}
          <div className="relative">
            {/* Warm glow behind headline */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none z-0"
              style={{
                width: '100%',
                maxWidth: '560px',
                height: '240px',
                background: isLight
                  ? 'radial-gradient(ellipse, rgba(217,119,6,0.12), transparent 70%)'
                  : 'radial-gradient(ellipse, rgba(212,175,55,0.10), transparent 70%)',
                filter: 'blur(60px)',
              }}
            />

            <h1
              ref={headlineRef}
              className="relative z-10 font-serif text-3.5xl sm:text-5xl md:text-6xl lg:text-[5.5rem] font-bold leading-[1.08] sm:leading-[1.05] tracking-tight max-w-4xl perspective-1000"
            >
              {/* Line 1 */}
              <span
                className="hero-gsap-line block"
                style={{ color: isLight ? '#1A1108' : '#F8F5EE' }}
              >
                Your Trip...
              </span>

              {/* Line 2 — gradient gold */}
              <span
                className="hero-gsap-line block italic"
                style={{
                  backgroundImage: isLight
                    ? 'linear-gradient(135deg, #78350F 0%, #92400E 40%, #B45309 70%, #78350F 100%)'
                    : 'linear-gradient(135deg, #F5D77F 0%, #D4AF37 45%, #EAB308 80%, #F5D77F 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Our Responsibility!
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <p
            ref={subtitleRef}
            className="text-base sm:text-lg max-w-2xl leading-relaxed font-sans"
            style={{
              color: isLight ? '#5C4A2A' : 'rgba(248,245,238,0.80)',
              letterSpacing: '0.01em',
            }}
          >
            Executive airport transfers, local Chennai rides, outstation tour packages, and sacred
            temple pilgrimages — personally coordinated by{' '}
            <strong style={{ color: isLight ? '#1A1108' : '#F8F5EE', fontWeight: 700 }}>
              S. Ramesh
            </strong>{' '}
            with care.
          </p>

          {/* Booking Card */}
          <BookingCard />

          {/* Trust pills */}
          <div ref={pillsRef} className="flex flex-wrap items-center justify-center gap-3">
            {[
              { icon: <Award className="w-3.5 h-3.5" />,      label: '100% Punctuality',  iconColor: isLight ? '#B45309' : '#CA8A04' },
              { icon: <ShieldCheck className="w-3.5 h-3.5" />, label: 'Verified Cabs',      iconColor: isLight ? '#166534' : '#34D399' },
              { icon: <Sparkles className="w-3.5 h-3.5" />,    label: 'Zero Advance Fees', iconColor: isLight ? '#B45309' : '#CA8A04' },
            ].map(({ icon, label, iconColor }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono backdrop-blur-sm transition-all duration-300 hover:scale-105 cursor-default"
                style={{
                  background: isLight
                    ? 'rgba(255,251,235,0.85)'
                    : 'rgba(255,255,255,0.07)',
                  border: isLight
                    ? '1px solid rgba(180,83,9,0.30)'
                    : '1px solid rgba(212,175,55,0.25)',
                  color: isLight ? '#3C1A08' : 'rgba(248,245,238,0.88)',
                  boxShadow: isLight
                    ? '0 2px 10px rgba(180,83,9,0.10), inset 0 1px 0 rgba(255,255,255,0.85)'
                    : '0 2px 8px rgba(0,0,0,0.25)',
                }}
              >
                <span style={{ color: iconColor }}>{icon}</span>
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 animate-bounce">
        <span
          className="text-[9px] font-mono uppercase tracking-[0.2em]"
          style={{ color: isLight ? '#92400E' : 'rgba(245,215,127,0.55)' }}
        >
          Scroll
        </span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{ color: isLight ? '#B45309' : 'rgba(202,138,4,0.70)' }}>
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