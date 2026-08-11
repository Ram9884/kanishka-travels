'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Star, ShieldCheck, CalendarCheck } from 'lucide-react';
import { useTheme } from '@/components/ThemeProvider';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const STATS = [
  { value: '12+', label: 'Years of Service' },
  { value: '1,500+', label: 'Journeys Completed' },
  { value: '100%', label: 'Owner Operated' },
  { value: '₹0', label: 'Advance Required' },
];

export default function AboutHero() {
  const { theme } = useTheme();
  const isLight = theme === 'light';
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current || !contentRef.current) return;
    const ctx = gsap.context(() => {
      gsap.to(contentRef.current, {
        yPercent: -12,
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
      className="relative w-full min-h-[75vh] flex flex-col items-center justify-center pt-28 sm:pt-36 pb-20 overflow-hidden bg-transparent"
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] blur-[140px]"
          style={{
            background: isLight
              ? 'radial-gradient(ellipse, rgba(217,119,6,0.15), transparent 70%)'
              : 'radial-gradient(ellipse, rgba(212,175,55,0.2), transparent 70%)',
          }}
        />
      </div>

      <div ref={contentRef} className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">

        {/* Eyebrow badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border text-xs font-mono tracking-[0.2em] uppercase"
          style={{
            background: isLight
              ? 'rgba(217,119,6,0.08)'
              : 'linear-gradient(135deg, rgba(212,175,55,0.08), rgba(212,175,55,0.03))',
            borderColor: isLight ? 'rgba(217,119,6,0.35)' : 'rgba(212,175,55,0.4)',
            color: isLight ? '#92400E' : '#F5D77F',
          }}
        >
          <MapPin className="w-3 h-3" />
          <span>Iyyappanthangal, Chennai · Est. 2014</span>
        </motion.div>

        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="space-y-3"
        >
          <h1
            className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-extrabold tracking-tight leading-[1.05]"
            style={{ color: isLight ? '#1A1108' : '#FFFFFF' }}
          >
            More Than a{' '}
            <span
              className="block italic"
              style={{
                backgroundImage: isLight
                  ? 'linear-gradient(135deg, #78350F 0%, #B45309 40%, #D97706 70%, #92400E 100%)'
                  : 'linear-gradient(135deg, #FFF099 0%, #F5D77F 35%, #D4AF37 70%, #F59E0B 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: isLight
                  ? 'drop-shadow(0 2px 10px rgba(180,83,9,0.2))'
                  : 'drop-shadow(0 4px 20px rgba(212,175,55,0.3))',
              }}
            >
              Cab Service.
            </span>
          </h1>
          <p
            className="text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed font-sans font-light pt-2"
            style={{ color: isLight ? '#5C4A2A' : 'rgba(248,245,238,0.7)' }}
          >
            We are a family-run travel house built on one promise — every passenger is treated like an honoured guest, not a transaction.
          </p>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 max-w-3xl mx-auto"
        >
          {STATS.map(({ value, label }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-1 p-4 rounded-2xl"
              style={{
                background: isLight ? 'rgba(255,247,230,0.85)' : 'linear-gradient(135deg, rgba(26,26,29,0.9), rgba(11,11,13,0.9))',
                border: isLight ? '1px solid rgba(217,119,6,0.2)' : '1px solid rgba(212,175,55,0.18)',
                boxShadow: isLight ? '0 2px 12px rgba(0,0,0,0.06)' : 'none',
              }}
            >
              <span
                className="text-2xl sm:text-3xl font-extrabold font-serif"
                style={{
                  backgroundImage: isLight
                    ? 'linear-gradient(135deg, #B45309, #D97706)'
                    : 'linear-gradient(135deg, #F5D77F, #D4AF37)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {value}
              </span>
              <span
                className="text-[10px] font-mono uppercase tracking-widest text-center"
                style={{ color: isLight ? '#92400E' : 'rgba(255,255,255,0.5)' }}
              >
                {label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Trust pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-wrap items-center justify-center gap-2.5 pt-2"
        >
          {[
            { icon: ShieldCheck, label: 'Fully Insured Fleet' },
            { icon: Star, label: 'Direct Owner Contact' },
            { icon: CalendarCheck, label: 'Zero Advance Payment' },
          ].map(({ icon: Icon, label }) => (
            <span
              key={label}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium"
              style={{
                background: isLight ? 'rgba(255,247,230,0.9)' : 'rgba(26,26,29,0.8)',
                border: isLight ? '1px solid rgba(217,119,6,0.2)' : '1px solid rgba(212,175,55,0.2)',
                color: isLight ? '#78350F' : 'rgba(248,245,238,0.75)',
                boxShadow: isLight ? '0 2px 8px rgba(0,0,0,0.06)' : 'none',
              }}
            >
              <Icon className="w-3.5 h-3.5" style={{ color: isLight ? '#D97706' : '#D4AF37' }} />
              {label}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
