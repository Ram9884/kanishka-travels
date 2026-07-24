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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-[#D4AF37]/4 blur-[150px] rounded-full pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_ITEMS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="fleet-why-card p-7 rounded-2xl bg-[#1A1A1D]/90 border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 transition-colors duration-300 shadow-[0_15px_35px_rgba(0,0,0,0.6)] hover:shadow-[0_20px_50px_rgba(212,175,55,0.15)] group"
              >
                <div className="fleet-why-icon w-11 h-11 rounded-xl bg-[#0B0B0D]/90 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] mb-5 group-hover:scale-110 group-hover:border-[#D4AF37] transition-all duration-300">
                  <Icon className="w-5 h-5" strokeWidth={2} />
                </div>
                <h3 className="fleet-why-card-title text-base font-bold text-[#F5D77F] mb-2">
                  {item.title}
                </h3>
                <p className="fleet-why-card-desc text-sm text-[#A1A1AA] leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
