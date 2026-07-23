'use client';

import React from 'react';
import { motion } from 'framer-motion';
import WhatsAppButton from '@/components/WhatsAppButton';
import CallButton from '@/components/CallButton';
import { Crown, ShieldCheck, Clock, UserCheck, PhoneCall, Quote } from 'lucide-react';

const REASONS = [
  {
    icon: PhoneCall,
    title: 'Personal Attention by S. Ramesh',
    description: 'Every booking request is personally reviewed, confirmed, and coordinated by S. Ramesh — zero automated call centers or chatbots.',
  },
  {
    icon: ShieldCheck,
    title: 'Zero Hidden Charges',
    description: 'Transparent trip terms discussed upfront before departure. Clear agreement on tolls, state permits, and driver bata.',
  },
  {
    icon: UserCheck,
    title: 'Experienced Highway Drivers',
    description: 'Polite, verified drivers with extensive route knowledge across Tamil Nadu, Andhra Pradesh, Karnataka, and Kerala.',
  },
  {
    icon: Clock,
    title: '100% Punctuality Guarantee',
    description: 'On-time pickup guaranteed for early 4 AM airport flights and long-distance outstation pilgrimages.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative w-full py-24 bg-gradient-to-b from-[#0A1128] via-[#0E1738] to-[#0A1128] text-white px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[350px] bg-[#D4AF37]/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-semibold uppercase tracking-wider mb-4">
                <Crown className="w-4 h-4 text-[#D4AF37]" strokeWidth={2} />
                <span>Our Service Heritage</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
                Why Travelers Trust <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5D77F] via-[#D4AF37] to-[#A16207]">
                  Kanishka Travels
                </span>
              </h2>

              <p className="mt-4 text-slate-300 text-base leading-relaxed font-normal">
                Operating out of Iyyappanthangal, Chennai, we believe travel is not just about moving between places — it is about personal trust, safety, and care for your family.
              </p>

              {/* Quote Card */}
              <div className="relative rounded-2xl glass-dark border border-[#D4AF37]/30 p-6 shadow-2xl space-y-3 my-8 backdrop-blur-xl group hover:border-[#D4AF37]/60 transition-colors">
                <Quote className="w-8 h-8 text-[#D4AF37]/30 absolute top-4 right-4" />
                <p className="text-sm italic text-[#F5D77F] leading-relaxed pr-6">
                  &quot;We don&apos;t just rent cabs. We take personal responsibility for making your journey safe, punctual, and memorable.&quot;
                </p>
                <div className="flex items-center gap-3 pt-3 border-t border-white/10">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#A16207] flex items-center justify-center text-slate-950 font-bold text-xs">
                    R
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">S. Ramesh</p>
                    <p className="text-[10px] text-slate-400 font-mono">Proprietor • Kanishka Travels</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <WhatsAppButton variant="inline" label="Connect on WhatsApp" />
                <CallButton variant="primary" label="Call S. Ramesh" />
              </div>
            </motion.div>
          </div>

          {/* Right Column Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {REASONS.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="p-7 rounded-2xl glass-dark border border-white/10 hover:border-[#D4AF37]/60 transition-all duration-300 shadow-xl group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-slate-950/80 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] mb-5 group-hover:scale-110 group-hover:border-[#D4AF37] transition-all duration-300">
                      <Icon className="w-6 h-6" strokeWidth={2} />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#F5D77F] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
