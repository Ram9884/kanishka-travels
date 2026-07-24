'use client';

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { Car, Route, MapPin, Users } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const STATS = [
  { icon: Car, target: 7, suffix: '', label: 'Premium Vehicles', desc: 'Across 6 unique categories' },
  { icon: Route, target: 12, suffix: '+', label: 'Years of Service', desc: 'Serving Chennai since 2012' },
  { icon: MapPin, target: 5, suffix: '+', label: 'States Covered', desc: 'TN, AP, KA, KL & Puducherry' },
  { icon: Users, target: 5000, suffix: '+', label: 'Journeys Completed', desc: 'Families served with pride' },
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const obj = { val: 0 };
          gsap.to(obj, {
            val: target,
            duration: 2,
            ease: 'power2.out',
            onUpdate: () => setCount(Math.floor(obj.val)),
          });
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count.toLocaleString('en-IN')}
      {suffix}
    </span>
  );
}

export default function FleetStats() {
  return (
    <section className="relative w-full py-20 bg-[#0B0B0D] overflow-hidden border-t border-[#D4AF37]/10">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[250px] bg-[#D4AF37]/4 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px border border-[#D4AF37]/10 rounded-3xl overflow-hidden">
          {STATS.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="fleet-stat-cell bg-[#111114] px-6 py-10 flex flex-col items-center text-center gap-3 group hover:bg-[#1A1A1D] transition-colors duration-300"
              >
                <div className="fleet-stat-icon w-10 h-10 rounded-xl bg-[#0B0B0D] border border-[#D4AF37]/25 flex items-center justify-center text-[#D4AF37] group-hover:scale-110 group-hover:border-[#D4AF37] transition-all duration-300">
                  <Icon className="w-5 h-5" strokeWidth={2} />
                </div>
                <p className="fleet-stat-number font-serif text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#F5D77F] to-[#D4AF37]">
                  <AnimatedCounter target={stat.target} suffix={stat.suffix} />
                </p>
                <div>
                  <p className="fleet-stat-label text-sm font-bold text-white">{stat.label}</p>
                  <p className="fleet-stat-desc text-xs text-[#A1A1AA] mt-0.5">{stat.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
