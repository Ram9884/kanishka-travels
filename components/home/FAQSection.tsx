'use client';

import React, { useState } from 'react';
import ScrollReveal from '@/components/motion/ScrollReveal';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';

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
    <section id="faq" className="py-28 bg-[#0F172A] text-white px-4 sm:px-6 lg:px-8 border-t border-slate-800/80">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal yOffset={20}>
          <div className="text-center space-y-3 mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#A16207]/15 border border-[#A16207]/40 text-[#F5D77F] text-xs font-mono font-medium">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Clear Booking Policies</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif text-white tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-300 text-sm max-w-xl mx-auto font-sans leading-relaxed">
              Everything you need to know about booking with Kanishka Travels.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <ScrollReveal key={index} yOffset={20} delay={index * 0.04}>
                <div className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen ? 'bg-slate-900 border-[#A16207]/60 shadow-xl' : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                }`}>
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 font-serif text-base sm:text-lg font-bold text-white hover:text-[#F5D77F] transition-colors cursor-pointer"
                  >
                    <span className="flex items-center gap-3.5">
                      <HelpCircle className={`w-5 h-5 shrink-0 transition-colors ${isOpen ? 'text-[#D4AF37]' : 'text-[#A16207]'}`} />
                      <span>{faq.q}</span>
                    </span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center bg-slate-800/80 border border-slate-700 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#1E3A8A] border-[#A16207]/50 text-[#F5D77F]' : 'text-slate-400'}`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-300 border-t border-slate-800/80 leading-relaxed font-sans">
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
