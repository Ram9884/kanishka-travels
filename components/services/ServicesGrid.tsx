'use client';

import React from 'react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { PREMIUM_SERVICES, ServiceItem } from '@/data/services';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function ServicesGrid() {
  return (
    <section className="relative w-full py-20 bg-[#0A1128] overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#D4AF37]/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Tailored Mobility Solutions</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight"
          >
            Our Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5D77F] via-[#D4AF37] to-[#A16207]">Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-300 font-normal leading-relaxed"
          >
            Designed for ultimate comfort, reliability, and peace of mind whether traveling locally or across South India.
          </motion.p>
        </div>

        {/* Services Responsive Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {PREMIUM_SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: ServiceItem }) {
  const Icon = service.icon;

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -6, scale: 1.02 }}
      className="group relative p-8 rounded-2xl glass-dark border border-white/10 hover:border-[#D4AF37]/60 shadow-xl hover:shadow-[0_0_25px_rgba(212,175,55,0.15)] transition-all duration-300 flex flex-col justify-between"
    >
      <div>
        {/* Header with Icon and Badge */}
        <div className="flex items-center justify-between mb-6">
          <div className="p-3.5 rounded-xl bg-slate-950/80 border border-[#D4AF37]/30 group-hover:border-[#D4AF37] group-hover:bg-[#D4AF37]/10 transition-all duration-300">
            <Icon className="w-7 h-7 text-[#D4AF37] group-hover:scale-110 transition-transform" strokeWidth={2} />
          </div>
          {service.badge && (
            <span className="px-3 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#F5D77F] text-[11px] font-semibold tracking-wide">
              {service.badge}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white group-hover:text-[#F5D77F] transition-colors duration-300">
          {service.title}
        </h3>

        {/* Description */}
        <p className="mt-3 text-sm text-slate-300 leading-relaxed font-normal">
          {service.description}
        </p>
      </div>

      {/* Action Link */}
      <div className="mt-8 pt-4 border-t border-slate-800/80 flex items-center justify-between">
        <Link
          href={`/book?service=${service.id}`}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 group-hover:text-[#F5D77F] transition-colors"
        >
          <span>Book This Service</span>
          <ArrowUpRight className="w-4 h-4 text-[#D4AF37] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
}
