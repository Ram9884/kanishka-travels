'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { HelpCircle, ChevronDown, Sparkles } from 'lucide-react';
import { FAQ_ITEMS, FAQItem } from '@/data/faq';

export default function FAQAccordion() {
  const [openId, setOpenId] = useState<string>('faq-1');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Booking', 'Cancellation', 'Airport Pickup', 'Payments', 'Corporate'];

  const filteredItems = activeCategory === 'All'
    ? FAQ_ITEMS
    : FAQ_ITEMS.filter((item) => item.category === activeCategory);

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? '' : id));
  };

  return (
    <section className="relative w-full py-24 bg-transparent overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[350px] bg-[#D4AF37]/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <HelpCircle className="w-3.5 h-3.5 text-[#D4AF37]" strokeWidth={2} />
            <span>Got Questions? We Have Answers</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="faq-section-title font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight"
          >
            Everything You <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5D77F] via-[#D4AF37] to-[#A16207]">Need to Know</span>
          </motion.h2>
        </div>

        {/* Category Pills Filter */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-[11px] sm:text-xs font-semibold transition-all duration-300 cursor-pointer min-h-[36px] flex items-center justify-center ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-[#D4AF37] to-[#A16207] text-slate-950 shadow-lg font-bold'
                  : 'faq-tab-inactive'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Glass Accordion Items */}
        <div className="space-y-4">
          {filteredItems.map((item) => {
            const isOpen = openId === item.id;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className={`faq-accordion-card rounded-2xl overflow-hidden ${
                  isOpen ? 'open-faq' : ''
                }`}
              >
                {/* Accordion Header */}
                <button
                  onClick={() => toggleFAQ(item.id)}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="faq-question-text font-serif text-lg sm:text-xl font-bold tracking-wide leading-snug transition-colors">
                    {item.question}
                  </span>
                  <div
                    className={`p-1.5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#D4AF37] transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-180 bg-[#D4AF37]/30' : ''
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {/* Accordion Body */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                    >
                      <div className="faq-answer-text px-6 pb-6 pt-3 text-xs sm:text-sm leading-relaxed border-t border-[#D4AF37]/15 font-normal">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
