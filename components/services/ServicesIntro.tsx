'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

export default function ServicesIntro() {
  return (
    <section className="relative w-full py-16 bg-transparent overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Soft ambient radial gold glow behind card */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#D4AF37]/12 blur-[100px] rounded-full pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="card-editorial relative p-8 sm:p-14 rounded-3xl text-center max-w-4xl mx-auto backdrop-blur-2xl group hover:border-[#D4AF37]/65 transition-all duration-500 overflow-hidden"
        >
          <div className="relative z-10 space-y-6">
            <div className="flex justify-center">
              <div className="w-14 h-14 rounded-2xl icon-container-gold flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Award className="w-7 h-7" />
              </div>
            </div>

            <h2 className="service-intro-title font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-wide leading-tight">
              Chauffeur-Driven Luxury for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5D77F] via-[#D4AF37] to-[#A16207]">Every Occasion</span>
            </h2>

            <p className="service-intro-desc text-sm sm:text-base text-[#F8F5EE]/80 max-w-2xl mx-auto leading-relaxed font-sans font-light">
              We serve corporate leaders, NRI families, wedding delegations, and devout pilgrims with equal focus. Operating out of Iyyappanthangal, Chennai, we believe travel is not just about moving between places — it is about personal trust, safety, and care for your family.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
