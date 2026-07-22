'use client';

import React, { useState } from 'react';
import ScrollReveal from '@/components/motion/ScrollReveal';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQS = [
  {
    q: 'How are bookings confirmed after submitting the online form?',
    a: 'After you submit your booking request online, S. Ramesh personally reviews your trip details and contacts you via Phone or WhatsApp within minutes to confirm vehicle assignment, pickup time, and total fare details.',
  },
  {
    q: 'Is any advance online payment required on this website?',
    a: 'No. There is no online payment gateway or credit card requirement on our website. All payment arrangements (cash, UPI, or bank transfer) are settled directly with S. Ramesh or the driver.',
  },
  {
    q: 'Can I book a one-way outstation trip?',
    a: 'No. Outstation trips (outside Chennai city limits) are strictly round-trip only. This ensures our drivers return safely with the assigned vehicle.',
  },
  {
    q: 'What vehicle types can I choose from?',
    a: 'You can choose between Maruti Suzuki Dzire (Executive 4-Seater Sedan), Toyota Innova Crysta (Luxury 7-Seater SUV), and Tempo Traveller (12-14 Seater Van). All vehicles are fully air-conditioned.',
  },
  {
    q: 'Why is a customer login required before booking?',
    a: 'Creating a quick customer account ensures your phone number and booking history are securely logged in our system so S. Ramesh can easily track your trip status and vehicle details.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-[#0F172A] text-white px-4 border-t border-slate-800">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal yOffset={20}>
          <div className="text-center space-y-3 mb-16">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#A16207]">
              Clear Policies
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-400 text-sm max-w-xl mx-auto">
              Everything you need to know about booking with Kanishka Travels.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <ScrollReveal key={index} yOffset={20} delay={index * 0.04}>
                <div className="rounded-xl bg-slate-900 border border-slate-800 overflow-hidden transition-colors">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-serif text-base font-semibold text-white hover:text-[#F5D77F] transition-colors cursor-pointer"
                  >
                    <span className="flex items-center gap-3">
                      <HelpCircle className="w-5 h-5 text-[#A16207] shrink-0" />
                      <span>{faq.q}</span>
                    </span>
                    <ChevronDown className={`w-5 h-5 text-[#A16207] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs text-slate-300 border-t border-slate-800/60 leading-relaxed font-sans">
                      {faq.a}
                    </div>
                  )}
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
