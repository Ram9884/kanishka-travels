'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Quote, UserCheck } from 'lucide-react';
import { useTheme } from '@/components/ThemeProvider';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}



export default function AboutStory() {
  const { theme } = useTheme();
  const isLight = theme === 'light';
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !imageRef.current) return;
    const ctx = gsap.context(() => {
      gsap.to(imageRef.current, {
        yPercent: 8,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full py-28 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-14"
        >
          <span
            className="text-[10px] font-mono font-bold uppercase tracking-[0.25em]"
            style={{ color: isLight ? '#B45309' : '#D4AF37' }}
          >
            Our Story
          </span>
          <div
            className="flex-1 h-px max-w-[80px]"
            style={{ background: isLight ? 'linear-gradient(to right, rgba(180,83,9,0.5), transparent)' : 'linear-gradient(to right, rgba(212,175,55,0.5), transparent)' }}
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">

          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-10"
          >
            <div className="space-y-5">
              <h2
                className="font-serif text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight"
                style={{ color: isLight ? '#1A1108' : '#FFFFFF' }}
              >
                Built When Accountability{' '}
                <span
                  style={{
                    backgroundImage: isLight
                      ? 'linear-gradient(135deg, #78350F 0%, #B45309 40%, #D97706 70%, #92400E 100%)'
                      : 'linear-gradient(135deg, #FFF099 0%, #F5D77F 35%, #D4AF37 70%, #F59E0B 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Still Mattered.
                </span>
              </h2>
              <p
                className="text-base leading-relaxed font-sans font-light"
                style={{ color: isLight ? '#5C4A2A' : 'rgba(248,245,238,0.65)' }}
              >
                In 2014, when automated apps began replacing the human element in travel, S. Ramesh chose a different path — one where every passenger receives personal attention, and every vehicle is dispatched with full accountability.
              </p>
              <p
                className="text-base leading-relaxed font-sans font-light"
                style={{ color: isLight ? '#5C4A2A' : 'rgba(248,245,238,0.65)' }}
              >
                Whether it is a 4 AM airport run from Porur, a Tirupati pilgrimage with elderly parents, or a 14-seater for a grand wedding — the proprietor personally logs, plans, and confirms every single trip.
              </p>
            </div>

            {/* Founder quote */}
            <div
              className="relative rounded-2xl p-6 sm:p-8 overflow-hidden"
              style={{
                background: isLight
                  ? 'linear-gradient(135deg, rgba(255,247,230,0.95), rgba(254,243,199,0.95))'
                  : 'linear-gradient(135deg, rgba(24,24,28,0.95), rgba(11,11,13,0.95))',
                border: isLight ? '1px solid rgba(217,119,6,0.3)' : '1px solid rgba(212,175,55,0.3)',
                boxShadow: isLight
                  ? '0 8px 30px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.8)'
                  : '0 20px 60px rgba(0,0,0,0.7), inset 0 1px 0 rgba(245,215,127,0.12)',
              }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{ background: isLight ? 'linear-gradient(to right, transparent, rgba(217,119,6,0.4), transparent)' : 'linear-gradient(to right, transparent, rgba(245,215,127,0.45), transparent)' }}
              />
              <Quote
                className="w-7 h-7 absolute top-5 right-5"
                style={{ color: isLight ? 'rgba(217,119,6,0.3)' : 'rgba(212,175,55,0.25)' }}
              />

              <p
                className="text-sm sm:text-base font-serif italic leading-loose pr-8"
                style={{ color: isLight ? '#78350F' : '#F5D77F' }}
              >
                &quot;When a family trusts us with their journey, it is never just a ride — it is a pilgrimage, a reunion, or a cherished celebration. I ensure every driver arrives on time, every vehicle is spotless, and every guest feels genuinely valued.&quot;
              </p>

              <div
                className="mt-5 pt-4 flex items-center gap-3"
                style={{ borderTop: isLight ? '1px solid rgba(217,119,6,0.15)' : '1px solid rgba(212,175,55,0.15)' }}
              >
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center"
                  style={{
                    background: isLight ? 'rgba(217,119,6,0.12)' : 'rgba(212,175,55,0.15)',
                    border: isLight ? '1px solid rgba(217,119,6,0.3)' : '1px solid rgba(212,175,55,0.35)',
                  }}
                >
                  <UserCheck className="w-4 h-4" style={{ color: isLight ? '#D97706' : '#D4AF37' }} />
                </div>
                <div>
                  <p className="text-xs font-bold" style={{ color: isLight ? '#1A1108' : '#FFFFFF' }}>S. Ramesh</p>
                  <p
                    className="text-[10px] font-mono mt-0.5 uppercase tracking-widest"
                    style={{ color: isLight ? 'rgba(180,83,9,0.6)' : 'rgba(212,175,55,0.6)' }}
                  >
                    Founder & Proprietor · Kanishka Travels
                  </p>
                </div>
              </div>
            </div>

          </motion.div>

          {/* Right — image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-6 relative"
          >
            <div
              className="absolute -inset-4 rounded-[2.5rem] opacity-20 blur-3xl pointer-events-none"
              style={{ background: isLight ? 'radial-gradient(ellipse, rgba(217,119,6,0.6), transparent 70%)' : 'radial-gradient(ellipse, #D4AF37, transparent 70%)' }}
            />
            <div
              ref={imageRef}
              className="relative w-full h-[420px] sm:h-[560px] rounded-3xl overflow-hidden group"
              style={{ border: isLight ? '1px solid rgba(217,119,6,0.2)' : '1px solid rgba(212,175,55,0.2)' }}
            >
              <Image
                src="/images/fleet/innova-crysta.jpg"
                alt="Kanishka Travels Innova Crysta — flagship vehicle"
                fill
                quality={80}
                className="object-cover object-center scale-105 group-hover:scale-110 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(11,11,13,0.55) 0%, transparent 55%)' }} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
