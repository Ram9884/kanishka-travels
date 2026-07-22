'use client';

import React from 'react';
import ScrollReveal from '@/components/motion/ScrollReveal';
import { Star, Quote } from 'lucide-react';

const REVIEWS = [
  {
    name: 'K. Parthiban',
    location: 'Chennai to Tirupati Temple Trip',
    quote: 'Booked Innova Crysta for our family Tirupati trip. Driver Murugan was very patient and driving was safe. Ramesh sir arranged everything smoothly over WhatsApp.',
    rating: 5,
  },
  {
    name: 'S. Ananya & Family',
    location: 'Airport Drop & Outstation Pondicherry',
    quote: 'Punctual airport pickup at 4 AM from Porur. Vehicle was extremely clean and AC working great. Highly recommended taxi service in Chennai!',
    rating: 5,
  },
  {
    name: 'V. Rajesh Kumar',
    location: 'Corporate Monthly Rental',
    quote: 'We use Kanishka Travels for executive pickup in Sriperumbudur. Reliable billing, well-mannered drivers, and Ramesh handles all last-minute changes instantly.',
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-[#0A1128] text-white px-4 relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal yOffset={20}>
          <div className="text-center space-y-3 mb-16">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#A16207]">
              Customer Experience
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-white">
              What Our Travelers Say
            </h2>
            <p className="text-slate-400 text-sm max-w-xl mx-auto">
              Real feedback from families, temple tour groups, and corporate travelers across Tamil Nadu.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review, index) => (
            <ScrollReveal key={index} yOffset={30} delay={index * 0.08}>
              <div className="rounded-2xl bg-slate-900 border border-slate-800 p-7 relative h-full flex flex-col justify-between hover:border-[#A16207]/40 transition-colors">
                <Quote className="w-8 h-8 text-[#A16207]/30 absolute top-6 right-6" />

                <div className="space-y-4">
                  <div className="flex gap-1 text-[#D4AF37]">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed italic">
                    &quot;{review.quote}&quot;
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800 mt-6">
                  <h3 className="text-sm font-bold text-white font-serif">{review.name}</h3>
                  <p className="text-[11px] text-[#A16207] font-mono">{review.location}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
