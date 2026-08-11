'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Compass, Home, Car, CalendarDays, Phone } from 'lucide-react';
import { useTheme } from '@/components/ThemeProvider';

export default function NotFound() {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  return (
    <div className={`min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden transition-colors duration-300 ${
      isLight ? 'bg-[#FAF8F5] text-[#1A1108]' : 'bg-[#0B0B0D] text-[#F8F5EE]'
    }`}>
      {/* Ambient background glow */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] blur-[160px] rounded-full pointer-events-none ${
        isLight ? 'bg-amber-400/15' : 'bg-[#D4AF37]/8'
      }`} />

      <div className="max-w-2xl w-full text-center relative z-10 space-y-8">
        {/* Animated Compass Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex justify-center"
        >
          <div className={`relative w-24 h-24 rounded-3xl flex items-center justify-center shadow-xl transition-all duration-300 ${
            isLight
              ? 'bg-gradient-to-br from-[#F5D77F] via-[#D4AF37] to-[#A16207] shadow-[0_8px_30px_rgba(212,175,55,0.35)]'
              : 'icon-container-gold shadow-[0_0_40px_rgba(212,175,55,0.4)]'
          }`}>
            <Compass className="w-12 h-12 text-[#0B0B0D] animate-spin-slow" strokeWidth={1.5} />
          </div>
        </motion.div>

        {/* Text Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="space-y-3"
        >
          <span className={`text-xs font-mono font-bold uppercase tracking-widest block ${
            isLight ? 'text-[#B45309]' : 'text-[#D4AF37]'
          }`}>
            Error 404 — Page Not Found
          </span>
          <h1 className={`font-serif text-3.5xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight ${
            isLight ? 'text-[#1A1108]' : 'text-white'
          }`}>
            Journey Off the{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#B45309] to-[#78350F] dark:from-[#F5D77F] dark:via-[#D4AF37] dark:to-[#A16207]">
              Route
            </span>
          </h1>
          <p className={`text-sm sm:text-base max-w-lg mx-auto font-sans font-normal leading-relaxed ${
            isLight ? 'text-[#5C4A2A]' : 'text-[#F8F5EE]/75'
          }`}>
            The page or destination you are looking for has been moved, renamed, or does not exist. Let&apos;s get you back on track.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-3.5 pt-2"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#F5D77F] to-[#A16207] text-[#0B0B0D] font-extrabold text-xs uppercase tracking-widest shadow-[0_4px_20px_rgba(212,175,55,0.35)] hover:scale-105 transition-all duration-300"
          >
            <Home className="w-4 h-4" />
            <span>Return Home</span>
          </Link>

          <Link
            href="/book"
            className={`inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-widest transition-all duration-300 ${
              isLight
                ? 'bg-amber-500/10 border border-[#B45309]/40 text-[#78350F] hover:bg-amber-500/20'
                : 'bg-[#1A1A1D] border border-[#D4AF37]/35 text-[#F5D77F] hover:border-[#D4AF37]'
            }`}
          >
            <CalendarDays className="w-4 h-4" />
            <span>Book a Trip</span>
          </Link>

          <Link
            href="/fleet"
            className={`inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-medium text-xs transition-all duration-300 ${
              isLight
                ? 'bg-white border border-amber-200 text-[#1A1108] hover:border-amber-400 shadow-sm'
                : 'bg-[#1A1A1D] border border-[#D4AF37]/20 text-white hover:border-[#D4AF37]/60'
            }`}
          >
            <Car className="w-4 h-4 text-[#D4AF37]" />
            <span>Explore Fleet</span>
          </Link>
        </motion.div>

        {/* Immediate Direct Contact */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className={`pt-6 border-t text-xs font-mono flex flex-wrap items-center justify-center gap-2 ${
            isLight ? 'border-amber-200/80 text-[#78350F]' : 'border-[#D4AF37]/15 text-[#A1A1AA]'
          }`}
        >
          <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>Need instant assistance? Call S. Ramesh directly:</span>
          <a
            href="tel:+919677384267"
            className={`font-bold transition-colors ${
              isLight ? 'text-[#78350F] hover:text-[#B45309]' : 'text-white hover:text-[#F5D77F]'
            }`}
          >
            +91 96773 84267
          </a>
        </motion.div>
      </div>
    </div>
  );
}
