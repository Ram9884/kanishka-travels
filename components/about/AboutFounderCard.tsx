'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Crown, MapPin, Phone, ArrowRight } from 'lucide-react';
import WhatsAppButton from '@/components/WhatsAppButton';
import CallButton from '@/components/CallButton';

export default function AboutFounderCard() {
  return (
    <section className="relative w-full py-16 bg-transparent px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Soft gold radial glow behind card */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-[#D4AF37]/10 blur-[120px] rounded-full pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="card-luxury-glass relative rounded-3xl p-8 sm:p-14 space-y-8 overflow-hidden group hover:border-[#D4AF37]/65 transition-all duration-500"
        >
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[#D4AF37]/20 pb-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl icon-container-gold flex items-center justify-center shrink-0">
                <Crown className="w-7 h-7" />
              </div>
              <div>
                <h3 className="about-founder-name font-serif text-2xl sm:text-3xl font-bold text-white">
                  Proprietor: S. Ramesh
                </h3>
                <p className="text-xs text-[#D4AF37] font-mono tracking-widest uppercase mt-0.5">
                  Kanishka Travels · Chennai
                </p>
              </div>
            </div>

            <span className="px-4 py-1.5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#F5D77F] font-mono text-xs font-bold shrink-0 shadow-[0_0_12px_rgba(212,175,55,0.2)]">
              Direct Contact
            </span>
          </div>

          {/* Details grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-xs font-mono">
            <div className="flex items-start gap-3.5 p-5 rounded-2xl bg-[#0B0B0D]/85 border border-[#D4AF37]/20">
              <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
              <div>
                <p className="text-[#A1A1AA] uppercase tracking-widest text-[10px]">Main Office</p>
                <p className="text-white font-medium font-sans mt-0.5 text-xs sm:text-sm">
                  Iyyappanthangal, Chennai, Tamil Nadu – 600056
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 p-5 rounded-2xl bg-[#0B0B0D]/85 border border-[#D4AF37]/20">
              <Phone className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
              <div>
                <p className="text-[#A1A1AA] uppercase tracking-widest text-[10px]">Phone Assistance</p>
                <p className="text-white font-medium font-sans mt-0.5 text-xs sm:text-sm">
                  +91 96773 84267 · +91 98845 17451
                </p>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="pt-2 flex flex-col sm:flex-row gap-4">
            <WhatsAppButton
              variant="inline"
              label="WhatsApp S. Ramesh"
              className="flex-1 py-4 text-xs font-bold uppercase tracking-widest justify-center shadow-lg"
            />
            <CallButton
              variant="primary"
              label="Call S. Ramesh Now"
              className="flex-1 py-4 text-xs font-bold uppercase tracking-widest justify-center shadow-lg"
            />
          </div>

          {/* Bottom link */}
          <div className="text-center pt-2">
            <Link
              href="/book"
              className="inline-flex items-center gap-2 text-xs text-[#F5D77F] font-bold hover:text-white transition-colors duration-200"
            >
              <span>Ready to travel? Reserve your vehicle online</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
