'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ShieldAlert, Award } from 'lucide-react';

export default function ServicesIntro() {
  return (
    <section className="relative w-full py-16 bg-transparent overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="service-intro-card relative p-8 sm:p-12 rounded-3xl bg-[#1A1A1D]/90 border border-[#D4AF37]/20 shadow-[0_20px_50px_rgba(0,0,0,0.7)] text-center max-w-4xl mx-auto backdrop-blur-xl group hover:border-[#D4AF37]/50 transition-colors duration-300"
        >
          {/* Subtle lighting accents */}
          <div className="absolute top-0 left-1/4 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />

          <div className="space-y-6">
            <div className="flex justify-center">
              <div className="w-12 h-12 rounded-full bg-[#0B0B0D]/90 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]">
                <Award className="w-6 h-6" />
              </div>
            </div>

            <h2 className="service-intro-title font-serif text-3xl sm:text-4xl font-bold text-white tracking-wide leading-tight">
              Chauffeur-Driven Luxury for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5D77F] via-[#D4AF37] to-[#A16207]">Every Occasion</span>
            </h2>

            <p className="service-intro-desc text-sm sm:text-base text-[#F8F5EE]/75 max-w-2xl mx-auto leading-relaxed font-sans font-light">
              We serve corporate leaders, NRI families, wedding delegations, and devout pilgrims with equal focus. Operating out of Iyyappanthangal, Chennai, we believe travel is not just about moving between places — it is about personal trust, safety, and care for your family.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
