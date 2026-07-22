'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import WhatsAppButton from '@/components/WhatsAppButton';
import CallButton from '@/components/CallButton';
import { Crown, Menu, X, User } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#A16207]/25 bg-[#0F172A]/85 backdrop-blur-xl transition-all">
      {/* Top Banner */}
      <div className="bg-[#1E3A8A] text-white text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="font-medium text-[#F5D77F]">Direct Phone & WhatsApp Booking with S. Ramesh</span>
            <span className="hidden md:inline text-white/60">| Iyyappanthangal, Chennai</span>
          </div>
          <div className="flex items-center gap-3">
            <CallButton phone="9677384267" label="96773 84267" variant="icon" className="text-white hover:text-[#F5D77F]" />
            <WhatsAppButton variant="icon" />
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group cursor-pointer">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#1E3A8A] to-[#7A1F2B] p-0.5 border border-[#A16207]/50 shadow-md group-hover:scale-105 transition-transform flex items-center justify-center">
              <div className="w-full h-full bg-[#0F172A] rounded-[10px] flex items-center justify-center">
                <Crown className="w-6 h-6 text-[#A16207] group-hover:rotate-6 transition-transform" />
              </div>
            </div>
            <div>
              <span className="font-serif tracking-wider text-xl font-bold text-white block leading-none font-['Cinzel_Decorative',serif]">
                KANISHKA <span className="text-[#A16207]">TRAVELS</span>
              </span>
              <span className="text-[10px] text-[#F5D77F]/80 uppercase tracking-widest block mt-0.5 font-mono">
                Your Trip... Our Responsibility!
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-200">
            <Link href="/" className="hover:text-[#A16207] transition-colors cursor-pointer">
              Home
            </Link>
            <Link href="/services" className="hover:text-[#A16207] transition-colors cursor-pointer">
              Services
            </Link>
            <Link href="/fleet" className="hover:text-[#A16207] transition-colors cursor-pointer">
              Fleet
            </Link>
            <Link href="/about" className="hover:text-[#A16207] transition-colors cursor-pointer">
              About
            </Link>
            <Link href="/#faq" className="hover:text-[#A16207] transition-colors cursor-pointer">
              FAQ
            </Link>
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/login"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              <User className="w-4 h-4" />
              <span>Login</span>
            </Link>
            <Link
              href="/book"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#A16207] to-[#D4AF37] text-white text-sm font-semibold shadow-md hover:brightness-110 transition-all cursor-pointer border border-amber-300/30"
            >
              Book a Trip
            </Link>
          </div>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white cursor-pointer"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#A16207]/20 bg-[#0F172A]/95 px-4 pt-2 pb-6 space-y-4">
          <nav className="flex flex-col gap-3 text-base font-medium text-slate-200">
            <Link href="/" onClick={() => setMobileMenuOpen(false)} className="py-2 hover:text-[#A16207]">
              Home
            </Link>
            <Link href="/services" onClick={() => setMobileMenuOpen(false)} className="py-2 hover:text-[#A16207]">
              Services
            </Link>
            <Link href="/fleet" onClick={() => setMobileMenuOpen(false)} className="py-2 hover:text-[#A16207]">
              Fleet
            </Link>
            <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="py-2 hover:text-[#A16207]">
              About Us
            </Link>
            <Link href="/my-bookings" onClick={() => setMobileMenuOpen(false)} className="py-2 hover:text-[#A16207]">
              My Bookings
            </Link>
          </nav>

          <div className="pt-2 flex flex-col gap-3">
            <Link
              href="/book"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 rounded-lg bg-gradient-to-r from-[#A16207] to-[#D4AF37] text-white font-semibold shadow-md"
            >
              Book a Trip
            </Link>
            <div className="flex gap-2">
              <WhatsAppButton variant="inline" className="flex-1 justify-center" label="WhatsApp Ramesh" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
