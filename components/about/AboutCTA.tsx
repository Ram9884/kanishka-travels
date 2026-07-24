'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CalendarDays, Phone, ArrowRight } from 'lucide-react';

export default function AboutCTA() {
  return (
    <section className="relative w-full py-24 bg-[#0B0B0D] overflow-hidden border-t border-[#D4AF37]/20">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[300px] bg-[#D4AF37]/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <h2 className="about-cta-title font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
            Experience the Personal Touch of{' '}
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5D77F] via-[#D4AF37] to-[#A16207]">
              Kanishka Travels
            </span>
          </h2>

          <p className="about-cta-desc text-sm sm:text-base text-[#F8F5EE]/70 max-w-xl mx-auto leading-relaxed font-sans font-light">
            Zero advance payment required. Reserve your sedan, Innova, or Tempo Traveller for your next journey today.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            href="/book"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#F5D77F] to-[#A16207] text-slate-950 font-extrabold text-xs uppercase tracking-widest shadow-[0_4px_25px_rgba(212,175,55,0.3)] hover:scale-105 transition-all duration-300"
          >
            <CalendarDays className="w-4 h-4" />
            <span>Book Your Trip</span>
          </Link>

          <a
            href="https://wa.me/919677384267"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-transparent border border-[#D4AF37]/40 text-[#F5D77F] font-bold text-xs uppercase tracking-widest hover:bg-[#D4AF37]/10 hover:border-[#D4AF37] transition-all duration-300"
          >
            <Phone className="w-4 h-4" />
            <span>WhatsApp Ramesh</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
