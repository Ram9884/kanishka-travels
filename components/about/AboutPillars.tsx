'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, UserCheck, Receipt, Sparkles } from 'lucide-react';

const PRINCIPLES = [
  {
    icon: UserCheck,
    title: 'Every booking is personally reviewed',
    desc: 'S. Ramesh personally logs, plans, and coordinates every trip to match your specific route, date, and family preferences.',
  },
  {
    icon: ShieldCheck,
    title: 'You speak directly with the owner',
    desc: 'Zero automated call centers, chatbots, or generic support queue. S. Ramesh is directly reachable before, during, and after your trip.',
  },
  {
    icon: Receipt,
    title: 'Transparent pricing before departure',
    desc: 'All km rates, driver bata, and toll terms are clearly communicated upfront — zero hidden surcharges or surprise extras.',
  },
  {
    icon: Sparkles,
    title: 'Clean, verified luxury vehicles',
    desc: 'Every sedan, MUV, and Tempo Traveller is sanitized, mechanically inspected, and paired with an experienced highway chauffeur.',
  },
];

export default function AboutPillars() {
  return (
    <section className="relative w-full py-24 bg-transparent px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono font-bold text-[#D4AF37] uppercase tracking-widest block">
            Our Commitments
          </span>
          <h2 className="about-pillars-title font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            Our Service{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5D77F] via-[#D4AF37] to-[#A16207]">
              Principles
            </span>
          </h2>
          <p className="about-pillars-subtitle text-sm sm:text-base text-[#F8F5EE]/65 font-light">
            Four promises that govern every single trip we operate across South India.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {PRINCIPLES.map((p, idx) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="card-feature p-8 rounded-2xl flex flex-col justify-between group overflow-hidden"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl icon-container-gold flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6" strokeWidth={1.8} />
                  </div>
                  <h3 className="about-pillar-card-title text-base font-bold text-[#F5D77F] mb-3 leading-snug">
                    {p.title}
                  </h3>
                  <div className="w-8 h-[1.5px] bg-[#D4AF37]/30 mb-3 group-hover:w-16 group-hover:bg-[#D4AF37] transition-all duration-300" />
                  <p className="about-pillar-card-desc text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
