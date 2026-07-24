'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Quote, Sparkles, UserCheck } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutStory() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !imageRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(imageRef.current, {
        yPercent: 8,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full py-20 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Narrative Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-6"
          >
            <div>
              <span className="text-xs font-mono font-bold text-[#D4AF37] uppercase tracking-widest block mb-2">
                Our Story
              </span>
              <h2 className="about-story-title font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                The Story Behind{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5D77F] via-[#D4AF37] to-[#A16207]">
                  Every Journey
                </span>
              </h2>
            </div>

            <p className="about-story-p text-sm sm:text-base text-[#F8F5EE]/75 leading-relaxed font-sans font-light">
              In an era dominated by automated taxi apps, algorithmic surge pricing, and faceless call centers, Kanishka Travels was founded on a very different philosophy: <strong className="text-white font-medium">personal human accountability</strong>.
            </p>

            <p className="about-story-p text-sm sm:text-base text-[#F8F5EE]/75 leading-relaxed font-sans font-light">
              Whether you require a 4 AM airport drop from Porur, an outstation family pilgrimage to Tirupati with elderly parents, or a 14-seater Tempo Traveller for a grand South Indian wedding — proprietor <strong className="text-[#F5D77F] font-semibold">S. Ramesh</strong> personally logs, plans, and confirms every vehicle assignment.
            </p>

            {/* Founder message highlight box */}
            <div className="about-quote-box relative rounded-2xl p-6 sm:p-7 bg-gradient-to-br from-[#18181C]/95 via-[#101013]/95 to-[#0B0B0D]/95 border border-[#D4AF37]/35 shadow-[0_20px_50px_rgba(0,0,0,0.8),_inset_0_1px_1px_rgba(245,215,127,0.15)] backdrop-blur-xl group hover:border-[#D4AF37]/60 transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#F5D77F]/40 to-transparent" />
              <Quote className="w-8 h-8 text-[#D4AF37]/30 absolute top-4 right-4" />
              <p className="text-xs sm:text-sm text-[#F5D77F] font-serif italic leading-relaxed pr-6">
                &quot;When a family trusts us with their trip, it is never just a ride — it is an important occasion, a holy pilgrimage, or a long-awaited reunion. I ensure every driver arrives on time, every vehicle is spotless, and every guest feels valued.&quot;
              </p>
              <div className="mt-4 pt-3 border-t border-[#D4AF37]/15 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37]">
                  <UserCheck className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">S. Ramesh</p>
                  <p className="text-[10px] text-[#D4AF37]/70 font-mono">Founder & Proprietor · Kanishka Travels</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Visual Editorial Image Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative"
          >
            <div
              ref={imageRef}
              className="relative w-full h-[380px] sm:h-[480px] rounded-3xl overflow-hidden border border-[#D4AF37]/25 shadow-2xl group"
            >
              <Image
                src="/images/fleet/innova-hycross.jpg"
                alt="Kanishka Travels Executive Fleet"
                fill
                className="object-cover object-center scale-105 group-hover:scale-110 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D] via-transparent to-black/30" />

              {/* Floating feature card */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-[#0B0B0D]/90 border border-[#D4AF37]/35 backdrop-blur-xl flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/20 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37]">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">Direct Owner Guarantee</p>
                    <p className="text-[10px] text-[#A1A1AA]">Zero Automated Chatbots or Middlemen</p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#D4AF37] text-slate-950 font-extrabold text-[10px] uppercase tracking-wider">
                  100% Personal
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
