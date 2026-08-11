'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Crown, ShieldCheck, Clock, UserCheck, PhoneCall } from 'lucide-react';

const HIGHLIGHTS = [
  {
    icon: PhoneCall,
    title: 'Coordination by Ramesh',
    description: 'Every booking request is personally reviewed, confirmed, and coordinated by proprietor S. Ramesh.',
  },
  {
    icon: ShieldCheck,
    title: 'Zero Hidden Permits',
    description: 'Transparent terms discussed upfront before departure. Clear billing on state permits and tolls.',
  },
  {
    icon: UserCheck,
    title: 'Experienced Drivers',
    description: 'Polite, verified highway chauffeurs with extensive regional route mastery across South India.',
  },
  {
    icon: Clock,
    title: '100% Punctuality Check',
    description: 'On-time pickup guarantee for early 4 AM airport flights and long-distance outstation package travel.',
  },
];

export default function WhyChooseServices() {
  return (
    <section className="relative w-full py-24 bg-transparent px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="services-why-badge inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <Crown className="w-3.5 h-3.5" />
            <span>Service Excellence</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="services-why-title font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight"
          >
            Uncompromising <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5D77F] via-[#D4AF37] to-[#A16207]">Standards</span>
          </motion.h2>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {HIGHLIGHTS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                className="card-feature p-8 rounded-2xl flex flex-col justify-between group overflow-hidden"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl icon-container-gold flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6" strokeWidth={2} />
                  </div>
                  <h3 className="services-why-card-title text-lg font-bold text-[#F5D77F] mb-3 group-hover:text-white transition-colors">
                    {item.title}
                  </h3>
                  <div className="w-8 h-[1.5px] bg-[#D4AF37]/30 mb-3 group-hover:w-16 group-hover:bg-[#D4AF37] transition-all duration-300" />
                  <p className="services-why-card-desc text-sm text-[#A1A1AA] leading-relaxed">
                    {item.description}
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
