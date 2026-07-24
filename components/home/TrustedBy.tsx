'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, Users, Star, Building2 } from 'lucide-react';

export default function TrustedBy() {
  const stats = [
    { icon: Users, label: 'Happy Travellers', value: '15,000+' },
    { icon: Star, label: 'Rating on Google', value: '4.9 ★' },
    { icon: Building2, label: 'Corporate Clients', value: '120+' },
    { icon: Award, label: 'Years of Excellence', value: '12+ Yrs' },
    { icon: ShieldCheck, label: 'Verified Chauffeurs', value: '100%' },
  ];

  return (
    <section className="relative w-full py-8 bg-transparent border-y border-[#D4AF37]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 items-center justify-between">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col items-center justify-center p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-[#D4AF37]/30 hover:bg-white/[0.04] transition-all duration-300"
              >
                <Icon className="w-5 h-5 text-[#D4AF37] mb-1.5 shrink-0" strokeWidth={2} />
                <span className="text-lg md:text-xl font-bold font-mono text-white tracking-tight">
                  {item.value}
                </span>
                <span className="text-[11px] sm:text-xs text-slate-400 font-medium tracking-wide">
                  {item.label}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
