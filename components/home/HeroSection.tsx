'use client';

import React from 'react';
import Link from 'next/link';
import ParallaxLayer from '@/components/motion/ParallaxLayer';
import ScrollReveal from '@/components/motion/ScrollReveal';
import WhatsAppButton from '@/components/WhatsAppButton';
import CallButton from '@/components/CallButton';
import { Crown, MapPin, Calendar, Compass, ShieldCheck, ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#0A1128] via-[#0F172A] to-[#1E3A8A]/30 py-20 px-4">
      {/* Background Parallax Layers */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Layer 1: Ambient Stars & Glow */}
        <ParallaxLayer speed={-5} className="absolute inset-0 opacity-40">
          <div className="absolute top-10 left-1/4 w-96 h-96 bg-[#1E3A8A]/40 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-[#A16207]/20 rounded-full blur-3xl"></div>
        </ParallaxLayer>

        {/* Layer 2: Temple Gopuram & Skyline Silhouette */}
        <ParallaxLayer speed={-12} className="absolute bottom-0 left-0 right-0 h-64 opacity-15">
          <svg className="w-full h-full text-amber-500" viewBox="0 0 1200 300" preserveAspectRatio="none" fill="currentColor">
            <path d="M0 300 h1200 v-40 h-100 v-20 h-20 v-60 h-20 v60 h-20 v20 h-40 v-100 h-30 v-80 h-20 v-40 h-10 v-20 h-10 v20 h-10 v40 h-20 v80 h-30 v100 h-150 v-30 h-40 v30 h-200 v-80 h-30 v-40 h-20 v80 h-30 v40 h-300 v-60 h-40 v60 h-150 v40 z" />
          </svg>
        </ParallaxLayer>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Brand Statement */}
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
          <ScrollReveal yOffset={20}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1E3A8A]/60 border border-[#A16207]/40 text-[#F5D77F] text-xs font-mono font-medium shadow-inner">
              <Crown className="w-4 h-4 text-[#A16207]" />
              <span>S. Ramesh Presents • Iyyappanthangal, Chennai</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-['Playfair_Display',serif] leading-tight mt-2">
              Your Trip... <br />
              <span className="bg-gradient-to-r from-[#F5D77F] via-[#D4AF37] to-[#A16207] bg-clip-text text-transparent">
                Our Responsibility!
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-sans leading-relaxed">
              Premium airport transfers, local Chennai rides, outstation tour packages, and temple pilgrimages. Personally arranged and operated with 100% reliability.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                href="/book"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#A16207] to-[#D4AF37] text-white font-bold text-base shadow-xl hover:shadow-amber-500/20 hover:scale-[1.02] transition-all cursor-pointer border border-amber-300/40"
              >
                <span>Book Your Trip</span>
                <ArrowRight className="w-5 h-5" />
              </Link>

              <WhatsAppButton variant="inline" label="Chat with S. Ramesh" />
              <CallButton variant="outline" label="Call Now" />
            </div>

            {/* Key Trust Signals */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-slate-800 max-w-lg mx-auto lg:mx-0">
              <div className="space-y-1">
                <p className="text-xs text-slate-400 font-mono uppercase">Fleet</p>
                <p className="text-sm font-semibold text-white">Sedan, SUV & Tempo</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-slate-400 font-mono uppercase">Pricing</p>
                <p className="text-sm font-semibold text-[#F5D77F]">Direct Quote</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-slate-400 font-mono uppercase">Support</p>
                <p className="text-sm font-semibold text-white">24/7 Phone</p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Right Column: Quick Booking Entry Card */}
        <div className="lg:col-span-5">
          <ScrollReveal yOffset={30} delay={0.1}>
            <div className="rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-[#A16207]/40 p-6 sm:p-8 shadow-2xl shadow-black/60 relative">
              <div className="absolute -top-3 left-6 bg-[#A16207] text-white text-[11px] font-mono px-3 py-0.5 rounded-full uppercase tracking-wider font-semibold">
                Quick Trip Request
              </div>

              <h2 className="text-xl font-bold text-white mb-1 font-serif">Where are you traveling?</h2>
              <p className="text-xs text-slate-400 mb-6">Select trip type to start booking with Ramesh</p>

              <form action="/book" method="GET" className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1 flex items-center gap-1.5">
                    <Compass className="w-3.5 h-3.5 text-[#A16207]" /> Service Type
                  </label>
                  <select
                    name="service"
                    className="w-full rounded-lg bg-slate-800 border border-slate-700 text-white px-3.5 py-2.5 text-sm focus:border-[#A16207] focus:outline-none cursor-pointer"
                  >
                    <option value="airport">Airport Pickup & Drop (MAA)</option>
                    <option value="local">Local Chennai Taxi</option>
                    <option value="outstation">Outstation Trip (Round-Trip)</option>
                    <option value="temple">Temple Tour Package</option>
                    <option value="corporate">Corporate Rental</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#A16207]" /> Pickup Location
                  </label>
                  <input
                    type="text"
                    name="pickup"
                    placeholder="e.g. Iyyappanthangal, Airport, T. Nagar"
                    className="w-full rounded-lg bg-slate-800 border border-slate-700 text-white px-3.5 py-2.5 text-sm focus:border-[#A16207] focus:outline-none placeholder:text-slate-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#A16207]" /> Travel Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    className="w-full rounded-lg bg-slate-800 border border-slate-700 text-white px-3.5 py-2.5 text-sm focus:border-[#A16207] focus:outline-none text-slate-300 cursor-pointer"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#1E3A8A] to-[#A16207] text-white font-semibold text-sm shadow-lg hover:brightness-110 transition-all cursor-pointer flex items-center justify-center gap-2 mt-2"
                >
                  <span>Proceed to Select Vehicle</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>

              <div className="mt-4 pt-4 border-t border-slate-800 text-center">
                <p className="text-[11px] text-slate-400 flex items-center justify-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>No payment required now. Ramesh confirms quote personally.</span>
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
