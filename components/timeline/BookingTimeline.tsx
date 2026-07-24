'use client';

import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import { BOOKING_TIMELINE_STEPS } from '@/data/timeline';
import Link from 'next/link';
import { initTimelineScroll } from '@/utils/gsap';

export default function BookingTimeline() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    return initTimelineScroll(sectionRef, lineRef);
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full py-24 bg-transparent overflow-hidden">
      {/* Soft Radial Gold Glow Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#D4AF37]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="timeline-badge inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>4-Step Seamless Booking</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="timeline-section-title font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight"
          >
            Your Journey in <span className="timeline-section-highlight text-transparent bg-clip-text bg-gradient-to-r from-[#F5D77F] via-[#D4AF37] to-[#A16207]">Four Simple Steps</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="timeline-section-p mt-4 text-base sm:text-lg text-slate-300 font-normal leading-relaxed"
          >
            No complex app signups or automated bots. Experience direct personal service in 4 simple steps.
          </motion.p>
        </div>

        {/* Timeline Desktop (Horizontal) & Mobile (Vertical) */}
        <div className="relative">
          {/* Connecting Line Desktop */}
          <div ref={lineRef} className="timeline-line-desktop hidden lg:block absolute top-[52px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent z-0 origin-left" />

          {/* Connecting Line Mobile */}
          <div className="timeline-line-mobile lg:hidden absolute top-[40px] bottom-[40px] left-[39px] w-[2px] bg-gradient-to-b from-transparent via-[#D4AF37] to-transparent z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6 relative z-10">
            {BOOKING_TIMELINE_STEPS.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.stepNumber}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  whileHover={{ y: -6 }}
                  className="flex lg:flex-col items-start lg:items-center text-left lg:text-center group"
                >
                  {/* Step Number Circle Icon */}
                  <div className="relative shrink-0 mr-6 lg:mr-0 lg:mb-6">
                    <div className="timeline-step-circle w-20 h-20 rounded-2xl bg-[#0B0B0D]/90 border border-[#D4AF37]/40 group-hover:border-[#D4AF37] group-hover:bg-[#25262B] flex flex-col items-center justify-center text-[#D4AF37] shadow-xl transition-all duration-300">
                      <Icon className="w-7 h-7 mb-1 group-hover:scale-110 transition-transform" strokeWidth={2} />
                      <span className="text-[10px] font-mono font-bold text-[#F5D77F] tracking-widest uppercase">
                        Step 0{step.stepNumber}
                      </span>
                    </div>
                  </div>

                  {/* Step Content */}
                  <div className="timeline-step-card bg-[#1A1A1D]/90 p-6 rounded-2xl border border-[#D4AF37]/20 group-hover:border-[#D4AF37]/60 shadow-[0_15px_35px_rgba(0,0,0,0.6)] hover:shadow-[0_20px_50px_rgba(212,175,55,0.15)] transition-all duration-300 w-full">
                    <span className="text-[11px] font-mono text-[#D4AF37] block font-semibold">
                      {step.subtitle}
                    </span>
                    <h3 className="timeline-step-title text-lg font-extrabold text-[#F5D77F] mt-1 group-hover:text-white transition-colors">
                      {step.title}
                    </h3>
                    <p className="timeline-step-desc text-sm text-[#A1A1AA] mt-2 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA Banner inside Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <Link
            href="/book"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#F5D77F] to-[#A16207] text-slate-950 font-bold text-sm uppercase tracking-wider shadow-2xl hover:shadow-[#D4AF37]/30 transition-all duration-300 hover:scale-105"
          >
            <span>Start Your Booking Now</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
