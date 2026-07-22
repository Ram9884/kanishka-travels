'use client';

import React from 'react';
import ScrollReveal from '@/components/motion/ScrollReveal';
import WhatsAppButton from '@/components/WhatsAppButton';
import CallButton from '@/components/CallButton';
import { Crown, ShieldCheck, Clock, UserCheck, HeartHandshake, PhoneCall } from 'lucide-react';

const REASONS = [
  {
    icon: PhoneCall,
    title: 'Personalized Service by S. Ramesh',
    description: 'Every booking is personally reviewed, confirmed, and managed by S. Ramesh — no middleman or automated call center.',
  },
  {
    icon: ShieldCheck,
    title: 'No Surprise Charges',
    description: 'Transparent booking terms discussed upfront before trip departure. Clear agreement on tolls, permits, and driver bata.',
  },
  {
    icon: UserCheck,
    title: 'Experienced Highway Drivers',
    description: 'Polite, well-trained drivers who know Tamil Nadu, AP, Karnataka, and Kerala routes inside out.',
  },
  {
    icon: Clock,
    title: '100% Punctuality Guarantee',
    description: 'On-time pickup for early morning airport flights and long-distance outstation pilgrimages.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-[#0F172A] text-white px-4 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-6">
            <ScrollReveal yOffset={20}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#A16207]/15 border border-[#A16207]/40 text-[#F5D77F] text-xs font-mono">
                <Crown className="w-4 h-4 text-[#A16207]" />
                <span>Our Heritage & Trust</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold font-serif leading-tight">
                Why Chennai Families & Corporates Trust <span className="text-[#A16207]">Kanishka Travels</span>
              </h2>

              <p className="text-slate-300 text-sm leading-relaxed">
                Operating out of Iyyappanthangal, Chennai, we believe travel is not just about moving between places — it is about trust, safety, and personal care for your loved ones.
              </p>

              <blockquote className="border-l-2 border-[#A16207] pl-4 py-2 my-4 text-xs italic text-[#F5D77F] bg-[#1E3A8A]/20 rounded-r-lg font-serif">
                &quot;We don&apos;t just rent cars. We take personal responsibility for making your journey smooth, comfortable, and memorable.&quot;
                <footer className="not-italic text-slate-400 font-mono text-[10px] mt-1">— S. Ramesh, Proprietor</footer>
              </blockquote>

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
                  <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-[#A16207]/50 transition-all duration-300">
                    <div className="w-10 h-10 rounded-lg bg-[#1E3A8A]/40 border border-[#A16207]/30 flex items-center justify-center text-[#A16207] mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-white font-serif mb-2">{item.title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">{item.description}</p>
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
