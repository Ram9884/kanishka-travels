'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CalendarDays, MessageSquare, Sparkles } from 'lucide-react';
import { useTheme } from '@/components/ThemeProvider';

export default function AboutCTA() {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  return (
    <section
      className="relative w-full py-28 overflow-hidden"
      style={{
        background: isLight
          ? 'linear-gradient(180deg, transparent 0%, rgba(254,243,199,0.6) 20%, rgba(255,247,230,0.8) 100%)'
          : 'linear-gradient(180deg, transparent 0%, rgba(11,11,13,1) 20%)',
      }}
    >
      {/* Centered ambient radial glow */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div
          className="w-[1000px] h-[400px] blur-[160px]"
          style={{ background: isLight ? 'radial-gradient(ellipse, rgba(217,119,6,0.12), transparent 65%)' : 'radial-gradient(ellipse, rgba(212,175,55,0.08), transparent 65%)' }}
        />
      </div>

      {/* Top border line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: isLight ? 'linear-gradient(to right, transparent 0%, rgba(217,119,6,0.3) 50%, transparent 100%)' : 'linear-gradient(to right, transparent 0%, rgba(212,175,55,0.3) 50%, transparent 100%)' }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-10" style={{ background: isLight ? 'linear-gradient(to left, rgba(217,119,6,0.5), transparent)' : 'linear-gradient(to left, rgba(212,175,55,0.5), transparent)' }} />
            <span
              className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] flex items-center gap-1.5"
              style={{ color: isLight ? '#B45309' : '#D4AF37' }}
            >
              <Sparkles className="w-3 h-3" />
              Begin Your Journey
            </span>
            <div className="h-px w-10" style={{ background: isLight ? 'linear-gradient(to right, rgba(217,119,6,0.5), transparent)' : 'linear-gradient(to right, rgba(212,175,55,0.5), transparent)' }} />
          </div>

          {/* Heading */}
          <h2
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight"
            style={{ color: isLight ? '#1A1108' : '#FFFFFF' }}
          >
            Travel That Feels{' '}
            <span
              className="block sm:inline italic"
              style={{
                backgroundImage: isLight
                  ? 'linear-gradient(135deg, #78350F 0%, #B45309 40%, #D97706 70%, #92400E 100%)'
                  : 'linear-gradient(135deg, #FFF099 0%, #F5D77F 35%, #D4AF37 70%, #F59E0B 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: isLight ? 'drop-shadow(0 2px 12px rgba(180,83,9,0.2))' : 'drop-shadow(0 4px 20px rgba(212,175,55,0.3))',
              }}
            >
              Personal.
            </span>
          </h2>

          {/* Subtitle */}
          <p
            className="text-base sm:text-lg max-w-xl mx-auto leading-relaxed font-sans font-light"
            style={{ color: isLight ? '#5C4A2A' : 'rgba(255,255,255,0.55)' }}
          >
            No advance payment. No algorithms. Just S. Ramesh personally coordinating your trip from start to finish — every time.
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-12"
        >
          <Link
            href="/book"
            className="group inline-flex items-center justify-center gap-3 px-10 py-4 rounded-2xl font-extrabold text-sm uppercase tracking-widest transition-all duration-300 hover:scale-105 active:scale-95"
            style={{
              background: isLight
                ? 'linear-gradient(135deg, #B45309 0%, #D97706 50%, #92400E 100%)'
                : 'linear-gradient(135deg, #D4AF37 0%, #F5D77F 50%, #A16207 100%)',
              color: isLight ? '#FFFFFF' : '#0B0B0D',
              boxShadow: isLight ? '0 6px 30px rgba(180,83,9,0.3)' : '0 6px 30px rgba(212,175,55,0.35)',
            }}
          >
            <CalendarDays className="w-4 h-4" />
            <span>Book Your Trip</span>
          </Link>

          <a
            href="https://wa.me/919677384267"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 px-10 py-4 rounded-2xl font-bold text-sm uppercase tracking-widest transition-all duration-300 hover:scale-105 active:scale-95"
            style={{
              background: isLight ? 'rgba(255,247,230,0.8)' : 'transparent',
              border: isLight ? '1px solid rgba(180,83,9,0.4)' : '1px solid rgba(212,175,55,0.4)',
              color: isLight ? '#B45309' : '#F5D77F',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.background = isLight ? 'rgba(255,247,230,1)' : 'rgba(212,175,55,0.1)';
              (e.currentTarget as HTMLElement).style.borderColor = isLight ? 'rgba(180,83,9,0.7)' : 'rgba(212,175,55,0.75)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.background = isLight ? 'rgba(255,247,230,0.8)' : 'transparent';
              (e.currentTarget as HTMLElement).style.borderColor = isLight ? 'rgba(180,83,9,0.4)' : 'rgba(212,175,55,0.4)';
            }}
          >
            <MessageSquare className="w-4 h-4" />
            <span>WhatsApp Ramesh</span>
          </a>
        </motion.div>

        {/* Bottom caption */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xs font-mono mt-8 tracking-widest"
          style={{ color: isLight ? 'rgba(92,74,42,0.4)' : 'rgba(255,255,255,0.3)' }}
        >
          ₹0 ADVANCE · ZERO HIDDEN CHARGES · 5,000+ JOURNEYS COMPLETED
        </motion.p>
      </div>
    </section>
  );
}
