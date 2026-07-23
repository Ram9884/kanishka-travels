'use client';

import React from 'react';
import ScrollReveal from '@/components/motion/ScrollReveal';
import TiltCard from '@/components/motion/TiltCard';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

const REVIEWS = [
  {
    name: 'K. Parthiban',
    initial: 'P',
    location: 'Chennai to Tirupati Temple Trip',
    quote: 'Booked Innova Crysta for our family Tirupati trip. Driver Murugan was very patient and driving was safe. Ramesh sir arranged everything smoothly over WhatsApp.',
    rating: 5,
    tag: 'Verified Trip',
  },
  {
    name: 'S. Ananya & Family',
    initial: 'A',
    location: 'Airport Drop & Outstation Pondicherry',
    quote: 'Punctual airport pickup at 4 AM from Porur. Vehicle was extremely clean and AC working great. Highly recommended taxi service in Chennai!',
    rating: 5,
    tag: 'Verified Trip',
  },
  {
    name: 'V. Rajesh Kumar',
    initial: 'R',
    location: 'Corporate Monthly Rental',
    quote: 'We use Kanishka Travels for executive pickup in Sriperumbudur. Reliable billing, well-mannered drivers, and Ramesh handles all last-minute changes instantly.',
    rating: 5,
    tag: 'Corporate Account',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-28 bg-[#0A1128] text-white px-4 sm:px-6 lg:px-8 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal yOffset={20}>
          <div className="text-center space-y-3 mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#A16207]/15 border border-[#A16207]/40 text-[#F5D77F] text-xs font-mono font-medium">
              <Star className="w-3.5 h-3.5 fill-current text-[#D4AF37]" />
              <span>Customer Experience</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif text-white tracking-tight">
              What Our Travelers Say
            </h2>
            <p className="text-slate-300 text-sm max-w-xl mx-auto font-sans leading-relaxed">
              Real feedback from families, temple tour groups, and corporate travelers across Tamil Nadu.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review, index) => (
            <ScrollReveal key={index} yOffset={30} delay={index * 0.08}>
              <TiltCard className="h-full">
                <div className="rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-[#A16207]/60 p-8 relative h-full flex flex-col justify-between shadow-2xl transition-all duration-300 backdrop-blur-xl group">
                  <Quote className="w-10 h-10 text-[#D4AF37]/20 absolute top-6 right-6" />

                  <div className="space-y-4">
                    {/* Rating & Tag */}
                    <div className="flex items-center justify-between">
                      <div className="flex gap-1 text-[#D4AF37]">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current text-[#D4AF37]" />
                        ))}
                      </div>
                      <span className="text-[10px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" />
                        {review.tag}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic font-sans">
                      &quot;{review.quote}&quot;
                    </p>
                  </div>

                  <div className="pt-5 border-t border-slate-800/80 mt-6 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1E3A8A] to-[#A16207] p-0.5 flex items-center justify-center shrink-0">
                      <div className="w-full h-full bg-slate-900 rounded-full flex items-center justify-center font-bold text-sm text-[#F5D77F] font-serif">
                        {review.initial}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white font-serif group-hover:text-[#F5D77F] transition-colors">
                        {review.name}
                      </h3>
                      <p className="text-[11px] text-[#A16207] font-mono">{review.location}</p>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
