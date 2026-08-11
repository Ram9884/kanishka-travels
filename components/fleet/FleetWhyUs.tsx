'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Crown, Shield, MapPin, Clock } from 'lucide-react';

const WHY_ITEMS = [
  {
    icon: Crown,
    title: 'Owner-Operated Fleet',
    desc: 'Every vehicle is directly owned and maintained by S. Ramesh — not sub-contracted or aggregated.',
  },
  {
    icon: Shield,
    title: 'All Permits Handled',
    desc: 'Commercial insurance, inter-state permits, and road tax fully taken care of for your journey.',
  },
  {
    icon: MapPin,
    title: 'Serving All South India',
    desc: 'Operating expertly across Tamil Nadu, Andhra Pradesh, Karnataka, Kerala, and Puducherry.',
  },
  {
    icon: Clock,
    title: '24/7 Coordination',
    desc: 'S. Ramesh is personally reachable round-the-clock for last-minute changes and emergency support.',
  },
];

export default function FleetWhyUs() {
  return (
    <section className="relative w-full py-24 bg-transparent px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="fleet-why-badge inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <Crown className="w-3.5 h-3.5" />
            <span>Fleet Promise</span>
          </motion.div>
          <h2 className="fleet-why-title font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
            Why Trust This{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5D77F] via-[#D4AF37] to-[#A16207]">
              Fleet
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {WHY_ITEMS.map((item, idx) => {
            const Icon = item.icon;
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
                    <Icon className="w-6 h-6" strokeWidth={2} />
                  </div>
                  <h3 className="fleet-why-card-title text-base sm:text-lg font-bold text-[#F5D77F] mb-3 group-hover:text-white transition-colors">
                    {item.title}
                  </h3>
                  <div className="w-8 h-[1.5px] bg-[#D4AF37]/30 mb-3 group-hover:w-16 group-hover:bg-[#D4AF37] transition-all duration-300" />
                  <p className="fleet-why-card-desc text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
                    {item.desc}
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
