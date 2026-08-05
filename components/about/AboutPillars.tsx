'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, UserCheck, Receipt, Sparkles } from 'lucide-react';
import { useTheme } from '@/components/ThemeProvider';

const PRINCIPLES = [
  {
    icon: UserCheck,
    num: '01',
    title: 'Every Booking, Personally Reviewed',
    desc: "S. Ramesh personally logs, plans, and coordinates every trip — your route, your schedule, your needs. Not a platform. A person.",
  },
  {
    icon: ShieldCheck,
    num: '02',
    title: 'Direct Line to the Owner',
    desc: "No automated systems, no call queues, no bots. You get S. Ramesh's number. Call or WhatsApp any time before, during, or after your journey.",
  },
  {
    icon: Receipt,
    num: '03',
    title: 'Transparent Pricing. Always.',
    desc: 'Km rates, toll charges, and driver bata communicated before departure. What you agree to is exactly what you pay — nothing more.',
  },
  {
    icon: Sparkles,
    num: '04',
    title: 'Verified, Immaculate Vehicles',
    desc: 'Each vehicle is sanitised, mechanically inspected, and paired with an experienced chauffeur. You arrive in comfort and confidence.',
  },
];

export default function AboutPillars() {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  const gold = isLight ? '#B45309' : '#D4AF37';
  const goldBorder = isLight ? 'rgba(217,119,6,0.2)' : 'rgba(212,175,55,0.18)';

  return (
    <section className="relative w-full py-28 bg-transparent px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div
          className="w-[700px] h-[400px] blur-[120px]"
          style={{ background: isLight ? 'radial-gradient(ellipse, rgba(217,119,6,0.1), transparent 70%)' : 'radial-gradient(ellipse, rgba(212,175,55,0.1), transparent 70%)' }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-20 space-y-4"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12" style={{ background: `linear-gradient(to left, ${goldBorder}, transparent)` }} />
            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.25em]" style={{ color: gold }}>Our Commitments</span>
            <div className="h-px w-12" style={{ background: `linear-gradient(to right, ${goldBorder}, transparent)` }} />
          </div>
          <h2
            className="font-serif text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight"
            style={{ color: isLight ? '#1A1108' : '#FFFFFF' }}
          >
            Four Promises We{' '}
            <span
              className="italic"
              style={{
                backgroundImage: isLight
                  ? 'linear-gradient(135deg, #78350F 0%, #B45309 40%, #D97706 70%, #92400E 100%)'
                  : 'linear-gradient(135deg, #FFF099 0%, #F5D77F 35%, #D4AF37 70%, #F59E0B 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: isLight ? 'drop-shadow(0 2px 8px rgba(180,83,9,0.2))' : 'drop-shadow(0 2px 12px rgba(212,175,55,0.3))',
              }}
            >
              Never Break.
            </span>
          </h2>
          <p
            className="text-sm sm:text-base font-light leading-relaxed"
            style={{ color: isLight ? '#5C4A2A' : 'rgba(255,255,255,0.55)' }}
          >
            Every trip we operate across South India is governed by these four non-negotiable principles.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          {PRINCIPLES.map((p, idx) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.num}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="relative group rounded-3xl p-8 sm:p-10 overflow-hidden flex flex-col gap-6 cursor-default"
                style={{
                  background: isLight
                    ? 'linear-gradient(135deg, rgba(255,247,230,0.95), rgba(254,243,199,0.9))'
                    : 'linear-gradient(135deg, rgba(26,26,29,0.95), rgba(11,11,13,0.95))',
                  border: isLight ? '1px solid rgba(217,119,6,0.18)' : '1px solid rgba(212,175,55,0.15)',
                  boxShadow: isLight ? '0 4px 24px rgba(0,0,0,0.07)' : '0 8px 40px rgba(0,0,0,0.5)',
                  transition: 'border-color 0.3s, box-shadow 0.3s',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = isLight ? 'rgba(217,119,6,0.45)' : 'rgba(212,175,55,0.45)';
                  (e.currentTarget as HTMLElement).style.boxShadow = isLight
                    ? '0 8px 32px rgba(0,0,0,0.12)'
                    : '0 12px 60px rgba(0,0,0,0.7), 0 0 40px rgba(212,175,55,0.08)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = isLight ? 'rgba(217,119,6,0.18)' : 'rgba(212,175,55,0.15)';
                  (e.currentTarget as HTMLElement).style.boxShadow = isLight ? '0 4px 24px rgba(0,0,0,0.07)' : '0 8px 40px rgba(0,0,0,0.5)';
                }}
              >
                {/* Top shimmer */}
                <div
                  className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: isLight ? 'linear-gradient(to right, transparent, rgba(217,119,6,0.4), transparent)' : 'linear-gradient(to right, transparent, rgba(245,215,127,0.4), transparent)' }}
                />

                {/* Number + icon row */}
                <div className="flex items-start justify-between">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                    style={{
                      background: isLight ? 'rgba(217,119,6,0.1)' : 'linear-gradient(135deg, rgba(212,175,55,0.18), rgba(212,175,55,0.06))',
                      border: isLight ? '1px solid rgba(217,119,6,0.25)' : '1px solid rgba(212,175,55,0.3)',
                    }}
                  >
                    <Icon className="w-5 h-5" strokeWidth={1.8} style={{ color: isLight ? '#D97706' : '#D4AF37' }} />
                  </div>
                  <span
                    className="text-4xl font-extrabold font-serif"
                    style={{ color: isLight ? 'rgba(180,83,9,0.08)' : 'rgba(212,175,55,0.08)' }}
                  >
                    {p.num}
                  </span>
                </div>

                {/* Text */}
                <div className="space-y-3">
                  <div
                    className="w-8 h-[1.5px] group-hover:w-14 transition-all duration-500"
                    style={{ background: isLight ? 'rgba(180,83,9,0.4)' : 'rgba(212,175,55,0.5)' }}
                  />
                  <h3
                    className="text-lg font-bold leading-snug"
                    style={{ color: isLight ? '#1A1108' : '#FFFFFF' }}
                  >
                    {p.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed font-light"
                    style={{ color: isLight ? '#5C4A2A' : 'rgba(255,255,255,0.5)' }}
                  >
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
