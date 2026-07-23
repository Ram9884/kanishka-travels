'use client';

import React from 'react';
import ScrollReveal from '@/components/motion/ScrollReveal';
import WhatsAppButton from '@/components/WhatsAppButton';
import CallButton from '@/components/CallButton';
import { Crown, ShieldCheck, Clock, UserCheck, PhoneCall, Quote, CheckCircle2 } from 'lucide-react';

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
    <section className="py-28 bg-[#0F172A] text-white px-4 sm:px-6 lg:px-8 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-6">
            <ScrollReveal yOffset={20}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#A16207]/15 border border-[#A16207]/40 text-[#F5D77F] text-xs font-mono font-medium">
                <Crown className="w-4 h-4 text-[#D4AF37]" />
                <span>Our Service Heritage</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif leading-tight">
                Why Travelers Trust <br />
                <span className="text-[#D4AF37]">Kanishka Travels</span>
              </h2>

              <p className="text-slate-300 text-sm leading-relaxed font-sans">
                Operating out of Iyyappanthangal, Chennai, we believe travel is not just about moving between places — it is about personal trust, safety, and care for your family.
              </p>

              {/* Quote Card */}
              <div className="relative rounded-2xl bg-slate-900/90 border border-[#A16207]/40 p-6 shadow-xl space-y-3 my-6 backdrop-blur-xl">
                <Quote className="w-8 h-8 text-[#D4AF37]/30 absolute top-4 right-4" />
                <p className="text-xs sm:text-sm italic text-[#F5D77F] font-serif leading-relaxed pr-6">
                  &quot;We don&apos;t just rent cabs. We take personal responsibility for making your journey safe, punctual, and memorable.&quot;
                </p>
                <div className="flex items-center gap-2 pt-2 border-t border-slate-800">
                  <div className="w-7 h-7 rounded-full bg-[#1E3A8A] flex items-center justify-center text-[#D4AF37] font-bold text-xs font-serif">
                    R
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white font-serif">S. Ramesh</p>
                    <p className="text-[10px] text-slate-400 font-mono">Proprietor • Kanishka Travels</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <WhatsAppButton variant="inline" label="Connect on WhatsApp" />
                <CallButton variant="primary" label="Call S. Ramesh" />
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {REASONS.map((item, index) => {
              const Icon = item.icon;
              return (
                <ScrollReveal key={index} yOffset={30} delay={index * 0.06}>
                  <div className="p-7 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-[#A16207]/60 transition-all duration-300 hover:bg-slate-800/80 shadow-xl group">
                    <div className="w-12 h-12 rounded-2xl bg-[#1E3A8A]/50 border border-[#A16207]/40 flex items-center justify-center text-[#D4AF37] mb-5 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-white font-serif mb-2 group-hover:text-[#F5D77F] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed font-sans">{item.description}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
