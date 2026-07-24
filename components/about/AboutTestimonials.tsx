'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '@/data/testimonials';

export default function AboutTestimonials() {
  return (
    <section className="relative w-full py-20 bg-transparent px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-mono font-bold text-[#D4AF37] uppercase tracking-widest block">
            Guest Testimonials
          </span>
          <h2 className="about-testi-title font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            Trusted by Families for Over a{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5D77F] via-[#D4AF37] to-[#A16207]">
              Decade
            </span>
          </h2>
          <p className="about-testi-subtitle text-sm sm:text-base text-[#F8F5EE]/65 font-light">
            Real experiences shared by guests who rely on S. Ramesh for their journeys.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="card-feature p-8 rounded-2xl flex flex-col justify-between group overflow-hidden"
            >
              <Quote className="w-8 h-8 text-[#D4AF37]/20 absolute top-6 right-6" />

              <div className="space-y-4">
                {/* Rating stars */}
                <div className="flex items-center gap-1.5">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37] drop-shadow-[0_0_6px_rgba(212,175,55,0.5)]" />
                  ))}
                  <span className="ml-2.5 text-xs font-mono text-[#D4AF37] font-semibold">{t.tripType}</span>
                </div>

                <p className="about-testi-text text-sm text-[#F8F5EE]/85 leading-relaxed font-sans font-light italic">
                  &quot;{t.review}&quot;
                </p>
              </div>

              {/* Author details */}
              <div className="mt-6 pt-5 border-t border-[#D4AF37]/15 flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-[#D4AF37]/50 shrink-0 bg-[#0B0B0D] shadow-[0_0_12px_rgba(212,175,55,0.2)]">
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      fill
                      className="object-cover"
                      sizes="44px"
                    />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white flex items-center gap-1.5">
                      {t.name}
                      {t.verified && <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" />}
                    </h3>
                    <p className="text-[11px] text-[#A1A1AA]">{t.role} · {t.location}</p>
                  </div>
                </div>
                <span className="text-[10px] font-mono text-[#D4AF37]/70">{t.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
