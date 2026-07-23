'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollReveal from '@/components/motion/ScrollReveal';
import WhatsAppButton from '@/components/WhatsAppButton';
import CallButton from '@/components/CallButton';
import LocationAutocomplete from '@/components/ui/LocationAutocomplete';
import {
  Crown, MapPin, Calendar, Compass,
  ShieldCheck, ArrowRight, Star, Award, Clock, Sparkles,
} from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/* ─── Animation Variants ─────────────────────────────────────────────────── */
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};

const fadeUpBlur = {
  hidden: { opacity: 0, y: 32, filter: 'blur(8px)' },
  visible: {
    opacity: 1, y: 0, filter: 'blur(0px)',
    transition: { duration: 0.78, ease: 'easeOut' as const },
  },
};

const cardVariant = {
  hidden: { opacity: 0, x: 40, filter: 'blur(12px)' },
  visible: {
    opacity: 1, x: 0, filter: 'blur(0px)',
    transition: { duration: 0.9, ease: 'easeOut' as const, delay: 0.5 },
  },
};

/* ─── Component ──────────────────────────────────────────────────────────── */
export default function HeroSection() {
  const [pickup, setPickup] = useState('');

  const sectionRef = useRef<HTMLElement>(null);
  const videoRef   = useRef<HTMLVideoElement>(null);
  const textRef    = useRef<HTMLDivElement>(null);

  /* Framer Motion scroll-based parallax */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.18]);
  const textY      = useTransform(scrollYProgress, [0, 1], ['0%', '-14%']);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.6], [0, 0.35]);

  /* GSAP ScrollTrigger — subtle parallax for text block */
  useEffect(() => {
    if (!textRef.current) return;
    const ctx = gsap.context(() => {
      gsap.to(textRef.current, {
        y: -48,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.4,
        },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[100svh] flex items-center justify-center overflow-hidden"
    >
      {/* ── Cinematic Video Background ────────────────────────────────── */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ scale: videoScale }}
      >
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
          aria-hidden="true"
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* ── Multi-Layer Dark Overlay ──────────────────────────────────── */}
      {/* Layer 1 – Base opacity */}
      <div className="absolute inset-0 z-[1] bg-black/50" />

      {/* Layer 2 – Left-to-right cinematic gradient */}
      <div
        className="absolute inset-0 z-[2]"
        style={{
          background:
            'linear-gradient(to right, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.45) 50%, rgba(0,0,0,0.18) 100%)',
        }}
      />

      {/* Layer 3 – Bottom vignette fade into next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-48 z-[3]"
        style={{
          background:
            'linear-gradient(to bottom, transparent 0%, rgba(10,17,40,0.95) 100%)',
        }}
      />

      {/* Layer 4 – Scroll-based additional darkening */}
      <motion.div
        className="absolute inset-0 z-[3] bg-black"
        style={{ opacity: overlayOpacity }}
      />

      {/* Subtle grid dot pattern */}
      <div className="absolute inset-0 z-[4] bg-[radial-gradient(rgba(212,175,55,0.045)_1px,transparent_1px)] [background-size:34px_34px] pointer-events-none opacity-60" />

      {/* ── Hero Content ─────────────────────────────────────────────── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

        {/* Left Column */}
        <motion.div
          ref={textRef}
          className="lg:col-span-7 space-y-8 text-center lg:text-left"
          style={{ y: textY }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Status Badge */}
          <motion.div variants={fadeUpBlur} className="flex justify-center lg:justify-start">
            <span className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/8 border border-white/15 text-[#F5D77F] text-xs font-mono font-semibold shadow-lg backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4AF37]" />
              </span>
              <Crown className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>S. Ramesh Presents · Iyyappanthangal, Chennai</span>
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={fadeUpBlur}
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white font-serif leading-[1.08] tracking-tight"
          >
            Your Trip...{' '}
            <br />
            <span className="bg-gradient-to-r from-[#F5D77F] via-[#D4AF37] to-[#A16207] bg-clip-text text-transparent">
              Our Responsibility!
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeUpBlur}
            className="text-lg text-white/75 max-w-xl font-sans leading-relaxed tracking-wide"
          >
            Executive airport transfers, local Chennai rides, outstation tour packages,
            and holy temple pilgrimages — personally coordinated by S. Ramesh.
          </motion.p>

          {/* Floating Micro-Badges */}
          <motion.div
            variants={fadeUpBlur}
            className="hidden sm:flex items-center justify-center lg:justify-start gap-3 flex-wrap"
          >
            {[
              { icon: <Award className="w-4 h-4 text-[#D4AF37]" />, label: '100% Punctuality' },
              { icon: <ShieldCheck className="w-4 h-4 text-emerald-400" />, label: 'Verified Cabs' },
              { icon: <Sparkles className="w-4 h-4 text-[#D4AF37]" />, label: 'Zero Advance Fees' },
            ].map(({ icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/8 border border-white/15 backdrop-blur-sm text-xs font-mono text-white/90 hover:bg-white/12 transition-colors"
              >
                {icon}
                {label}
              </span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeUpBlur}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
          >
            {/* Primary: Gold Gradient */}
            <Link
              href="/book"
              className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-xl font-bold text-base text-white shadow-xl shadow-amber-900/30 border border-amber-300/30 bg-gradient-to-r from-[#A16207] via-[#D4AF37] to-[#A16207] hover:brightness-110 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
            >
              <span>Book Your Trip</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            {/* Secondary: Glass */}
            <WhatsAppButton variant="inline" label="Chat with S. Ramesh" />
            <CallButton variant="outline" label="Call Now" />
          </motion.div>

          {/* Trust Metrics */}
          <motion.div
            variants={fadeUpBlur}
            className="pt-8 border-t border-white/10 grid grid-cols-3 gap-6 max-w-xs sm:max-w-sm mx-auto lg:mx-0"
          >
            {[
              { icon: <Award className="w-4 h-4 text-[#A16207]" />, value: '100%', label: 'Punctuality' },
              { icon: <Star className="w-4 h-4 fill-current text-[#D4AF37]" />, value: '4.9 / 5.0', label: 'Customer Rating' },
              { icon: <Clock className="w-4 h-4 text-[#A16207]" />, value: '24 / 7', label: 'Direct Assistance' },
            ].map(({ icon, value, label }) => (
              <div key={label} className="space-y-1">
                <div className="flex items-center justify-center lg:justify-start gap-1 text-[#F5D77F] font-bold text-lg font-serif">
                  {icon}
                  <span>{value}</span>
                </div>
                <p className="text-[11px] text-white/50 font-mono uppercase tracking-wider">{label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Column — Premium Glassmorphism Booking Card */}
        <motion.div
          className="lg:col-span-5"
          variants={cardVariant}
          initial="hidden"
          animate="visible"
        >
          <div
            className="relative rounded-3xl p-7 sm:p-9 shadow-2xl shadow-black/60 overflow-hidden"
            style={{
              background: 'rgba(15, 23, 42, 0.55)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.12)',
              boxShadow: '0 32px 64px -16px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.08)',
            }}
          >
            {/* Card shine top edge */}
            <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

            {/* Badge */}
            <div className="absolute -top-3.5 left-7 bg-gradient-to-r from-[#1E3A8A] to-[#A16207] text-white text-[11px] font-mono px-4 py-1 rounded-full uppercase tracking-widest font-bold shadow-md border border-amber-300/30">
              Quick Trip Request
            </div>

            <h2 className="text-2xl font-bold text-white mb-1 font-serif tracking-tight mt-2">
              Where are you traveling?
            </h2>
            <p className="text-xs text-white/50 mb-6 font-sans">
              Select trip parameters for instant confirmation with Ramesh
            </p>

            <form action="/book" method="GET" className="space-y-4">
              {/* Service Type */}
              <div>
                <label className="block text-xs font-semibold text-white/70 mb-1.5 flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5 text-[#D4AF37]" /> Service Type
                </label>
                <select
                  name="service"
                  className="w-full rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition-all cursor-pointer"
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.14)',
                  }}
                >
                  <option value="outstation" className="bg-slate-900">Outstation Trip (Round-Trip Only)</option>
                  <option value="airport" className="bg-slate-900">Airport Pickup & Drop (MAA)</option>
                  <option value="local" className="bg-slate-900">Local Chennai Taxi</option>
                  <option value="temple" className="bg-slate-900">Temple Tour Package</option>
                  <option value="corporate" className="bg-slate-900">Corporate Rental</option>
                </select>
              </div>

              {/* Pickup Location */}
              <div>
                <label className="block text-xs font-semibold text-white/70 mb-1.5 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" /> Pickup Location
                </label>
                <LocationAutocomplete
                  name="pickup"
                  value={pickup}
                  onChange={setPickup}
                  placeholder="Type area e.g. Porur, Airport, T. Nagar"
                  required
                />
              </div>

              {/* Travel Date */}
              <div>
                <label className="block text-xs font-semibold text-white/70 mb-1.5 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" /> Travel Date
                </label>
                <input
                  type="date"
                  name="date"
                  className="w-full rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-[#D4AF37] transition-all cursor-pointer"
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.14)',
                  }}
                  required
                />
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 mt-3 rounded-xl bg-gradient-to-r from-[#1E3A8A] via-[#A16207] to-[#D4AF37] text-white font-bold text-sm shadow-xl hover:brightness-110 transition-all cursor-pointer flex items-center justify-center gap-2 border border-amber-300/25"
              >
                <span>Proceed to Select Vehicle</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </form>

            {/* Trust footnote */}
            <div className="mt-5 pt-4 border-t border-white/8 text-center">
              <p className="text-[11px] text-white/40 flex items-center justify-center gap-1.5 font-sans">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                No advance payment online. Direct Ramesh verification.
              </p>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Scroll cue arrow */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white/40">
          <path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.div>
    </section>
  );
}
