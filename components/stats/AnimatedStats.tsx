'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Trophy, Users, Award, Star, Building2, ShieldCheck } from 'lucide-react';
import { MILESTONE_STATS, StatItem } from '@/data/stats';

export default function AnimatedStats() {
  return (
    <section className="relative w-full py-20 bg-gradient-to-b from-[#0A1128] via-[#0E1738] to-[#0A1128] overflow-hidden border-y border-[#D4AF37]/15">
      {/* Subtle Ambient Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[#D4AF37]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-semibold uppercase tracking-wider mb-3"
          >
            <Trophy className="w-3.5 h-3.5" strokeWidth={2} />
            <span>Proven Excellence</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Numbers That Define <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5D77F] via-[#D4AF37] to-[#A16207]">Our Reputation</span>
          </motion.h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {MILESTONE_STATS.map((stat, idx) => (
            <StatCard key={stat.id} stat={stat} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({ stat, index }: { stat: StatItem; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = stat.value;
    const duration = 1500; // ms
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, stat.value]);

  const icons = [Users, Award, Star, Building2, ShieldCheck];
  const Icon = icons[index % icons.length];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4, scale: 1.02 }}
      className="p-6 rounded-2xl glass-dark border border-white/10 hover:border-[#D4AF37]/50 shadow-xl transition-all duration-300 flex flex-col items-center text-center group"
    >
      <div className="w-12 h-12 rounded-xl bg-slate-950/80 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] mb-4 group-hover:scale-110 group-hover:border-[#D4AF37] transition-all duration-300">
        <Icon className="w-6 h-6" strokeWidth={2} />
      </div>

      <div className="text-2xl sm:text-3xl font-extrabold font-mono text-white tracking-tight group-hover:text-[#F5D77F] transition-colors">
        {stat.value % 1 !== 0 ? count.toFixed(1) : Math.floor(count).toLocaleString()}
        <span className="text-[#D4AF37] font-sans ml-0.5">{stat.suffix}</span>
      </div>

      <h3 className="mt-2 text-xs font-bold text-slate-200 tracking-wide uppercase">
        {stat.label}
      </h3>
      <p className="mt-1 text-[11px] text-slate-400 leading-relaxed">
        {stat.description}
      </p>
    </motion.div>
  );
}
