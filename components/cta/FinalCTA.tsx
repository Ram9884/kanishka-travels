'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import WhatsAppButton from '@/components/WhatsAppButton';
import CallButton from '@/components/CallButton';

import { useScrollStoryController } from '@/components/animation/ScrollStoryController';

export default function FinalCTA() {
  const { ctaSectionRef } = useScrollStoryController();

  return (
    <section ref={ctaSectionRef} className="relative w-full py-28 bg-[#0B0B0D] overflow-hidden border-t border-[#D4AF37]/20">
      {/* Cinematic Golden Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[450px] bg-gradient-to-r from-[#D4AF37]/10 via-[#F5D77F]/15 to-[#A16207]/10 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="p-10 sm:p-16 rounded-3xl glass-dark border border-[#D4AF37]/40 shadow-[0_0_50px_rgba(212,175,55,0.15)] relative overflow-hidden"
        >
          {/* Subtle Golden Grid Pattern Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#F5D77F] text-xs font-mono font-semibold uppercase tracking-wider mb-6">
            <Sparkles className="w-4 h-4 text-[#D4AF37]" strokeWidth={2} />
            <span>Instant Confirmation • Direct Owner Service</span>
          </div>

          {/* Title */}
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
            Your Next Journey <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5D77F] via-[#D4AF37] to-[#A16207]">
              Begins Here
            </span>
          </h2>

          {/* Description */}
          <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
            Reserve your luxury chauffeur-driven vehicle in seconds. Enjoy 100% transparent rates, polite highway drivers, and complete peace of mind.
          </p>

          {/* CTA Buttons Row */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/book"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#F5D77F] to-[#A16207] text-slate-950 font-extrabold text-sm uppercase tracking-wider shadow-2xl hover:shadow-[#D4AF37]/30 transition-all duration-300 hover:scale-105"
            >
              <span>Reserve Your Chauffeur</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <WhatsAppButton variant="inline" label="Chat on WhatsApp" />
            <CallButton variant="primary" label="Call S. Ramesh" />
          </div>

          {/* Trust Guarantees */}
          <div className="mt-10 pt-8 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-medium">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
              <span>Zero Hidden Fees</span>
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
              <span>24/7 Airport Pickups</span>
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
              <span>100% Punctual Service</span>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
