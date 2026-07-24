'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Car, Route, Users, Crown, Award } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const MILESTONES = [
  {
    year: '2012',
    icon: Car,
    title: 'The First Sedan in Iyyappanthangal',
    desc: 'S. Ramesh purchases his first Maruti Dzire sedan in Iyyappanthangal, starting local Chennai transfers with a commitment to punctuality and neatness.',
  },
  {
    year: '2015',
    icon: Route,
    title: 'Expanding South Indian Outstation Trips',
    desc: 'Added Toyota Innova MUVs to answer growing demand for long-distance family pilgrimages to Tirupati, Ooty, Kodaikanal, and Coorg.',
  },
  {
    year: '2018',
    icon: Users,
    title: 'Group Mobility & Wedding Convoys',
    desc: 'Introduced 14-seater Force Tempo Travellers, enabling large extended families and corporate teams to travel together comfortably.',
  },
  {
    year: '2022',
    icon: Crown,
    title: 'VIP & Luxury Fleet Upgrade',
    desc: 'Inducted Toyota Innova Crysta SUVs into the fleet, serving executive delegations, VIP airport connections, and premium family road trips.',
  },
  {
    year: 'Present',
    icon: Award,
    title: '5,000+ Journeys & 7 Executive Vehicles',
    desc: 'Now operating 7 immaculately maintained vehicles across 5 South Indian states — with S. Ramesh personally managing every single booking.',
  },
];

export default function AboutTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const line = containerRef.current?.querySelector('.timeline-gold-line');
      if (line) {
        gsap.from(line, {
          scaleY: 0,
          transformOrigin: 'top center',
          duration: 1.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full py-24 bg-transparent px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono font-bold text-[#D4AF37] uppercase tracking-widest block">
            Our History
          </span>
          <h2 className="about-timeline-title font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            Journey Through the{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5D77F] via-[#D4AF37] to-[#A16207]">
              Years
            </span>
          </h2>
          <p className="about-timeline-subtitle text-sm sm:text-base text-[#F8F5EE]/65 font-light">
            Over a decade of steady growth, built customer by customer in Chennai.
          </p>
        </div>

        {/* Timeline structure */}
        <div className="relative">
          {/* Vertical central gold line with glow */}
          <div className="timeline-gold-line absolute left-4 sm:left-1/2 top-0 bottom-0 w-[3px] bg-gradient-to-b from-[#F5D77F] via-[#D4AF37] to-transparent -translate-x-1/2 shadow-[0_0_18px_rgba(212,175,55,0.6)]" />

          <div className="space-y-12 sm:space-y-16">
            {MILESTONES.map((m, idx) => {
              const isEven = idx % 2 === 0;
              const Icon = m.icon;
              return (
                <div key={idx} className="relative flex flex-col sm:flex-row items-start sm:items-center">
                  {/* Glowing Milestone Node */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 z-10 w-11 h-11 rounded-full icon-container-gold flex items-center justify-center font-bold">
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Card Container */}
                  <div className={`w-full sm:w-1/2 pl-14 sm:pl-0 ${isEven ? 'sm:pr-14 sm:text-right' : 'sm:pl-14 sm:ml-auto sm:text-left'}`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      className="card-editorial p-7 sm:p-8 rounded-2xl group overflow-hidden"
                    >
                      <span className="inline-block px-3.5 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#F5D77F] font-mono text-xs font-extrabold mb-3 shadow-[0_0_12px_rgba(212,175,55,0.2)]">
                        {m.year}
                      </span>
                      <h3 className="about-timeline-card-title text-base sm:text-lg font-bold text-white mb-2 leading-snug">
                        {m.title}
                      </h3>
                      <p className="about-timeline-card-desc text-xs sm:text-sm text-[#A1A1AA] leading-relaxed font-sans font-light">
                        {m.desc}
                      </p>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
