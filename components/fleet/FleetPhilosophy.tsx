'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ShieldCheck, BadgeCheck } from 'lucide-react';

const PRINCIPLES = [
  {
    icon: ShieldCheck,
    title: 'Immaculately Maintained',
    desc: 'Every vehicle is professionally cleaned, serviced, and inspected before each trip.',
  },
  {
    icon: BadgeCheck,
    title: 'Fully Insured & Permitted',
    desc: 'Commercial insurance, inter-state permits, and compliance fully handled by us.',
  },
  {
    icon: Sparkles,
    title: 'Zero Advance Payment',
    desc: 'No upfront charges. Pay only after your journey is completed to your satisfaction.',
  },
];

export default function FleetPhilosophy() {
  return (
    <section className="relative w-full py-16 bg-transparent overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="fleet-philosophy-card relative rounded-3xl p-8 sm:p-12 bg-[#1A1A1D]/90 border border-[#D4AF37]/20 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.7)]"
        >
          {/* Top gold hairline accent */}
          <div className="absolute top-0 left-1/4 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />

          <div className="text-center mb-10">
            <h2 className="fleet-philosophy-title font-serif text-3xl sm:text-4xl font-bold text-white">
              Every Journey Deserves the{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5D77F] via-[#D4AF37] to-[#A16207]">
                Right Vehicle
              </span>
            </h2>
            <p className="fleet-philosophy-desc mt-3 text-sm sm:text-base text-[#F8F5EE]/65 max-w-xl mx-auto font-light">
              Kanishka Travels operates seven premium vehicles handpicked for different travel needs — each driven by a trusted, experienced professional.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {PRINCIPLES.map((p, idx) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="fleet-philosophy-item flex flex-col items-center text-center gap-3 p-5 rounded-2xl bg-[#0B0B0D]/60 border border-[#D4AF37]/15"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#1A1A1D] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="fleet-philosophy-item-title text-sm font-bold text-[#F5D77F]">{p.title}</h3>
                  <p className="fleet-philosophy-item-desc text-xs text-[#F8F5EE]/60 leading-relaxed">{p.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
