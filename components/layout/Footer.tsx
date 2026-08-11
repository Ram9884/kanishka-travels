'use client';

import React from 'react';
import Link from 'next/link';
import {
  Crown,
  Phone,
  MapPin,
  ShieldCheck,
  ArrowUpRight,
  Sparkles
} from 'lucide-react';

const QUICK_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'About Kanishka Travels', href: '/about' },
  { name: 'Fleet Showroom', href: '/fleet' },
  { name: 'Our Services', href: '/services' },
  { name: 'Book Your Trip', href: '/book' },
  { name: 'My Bookings Portal', href: '/my-bookings' },
];

const POPULAR_ROUTES = [
  { name: 'Chennai → Pondicherry Cab', href: '/routes/chennai-to-pondicherry-cab' },
  { name: 'Chennai → Tirupati Taxi', href: '/routes/chennai-to-tirupati-taxi' },
  { name: 'Chennai Airport 24/7 Taxi', href: '/routes/chennai-airport-taxi' },
  { name: 'Chennai → Bangalore Cab', href: '/routes/chennai-to-bangalore-cab' },
  { name: 'Chennai → Vellore Taxi', href: '/routes/chennai-to-vellore-taxi' },
];

export default function Footer() {
  return (
    <footer className="relative w-full border-t overflow-hidden" aria-label="Site Footer">
      {/* Top 2px Gold Accent Hairline Sheen */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#F5D77F]/80 to-transparent z-20" />

      {/* Soft Ambient Radial Light Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[350px] bg-[#D4AF37]/6 blur-[170px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-safe-dock relative z-10">
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-[#D4AF37]/20">

          {/* Column 1: Brand & Personal Promise (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="inline-flex items-center gap-3 group" aria-label="Kanishka Travels Homepage">
              <div className="w-11 h-11 rounded-2xl icon-container-gold flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                <Crown className="w-6 h-6 text-slate-950" />
              </div>
              <div>
                <span className="footer-brand-title font-serif text-2xl font-bold tracking-tight block leading-none">
                  Kanishka <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5D77F] via-[#D4AF37] to-[#A16207]">Travels</span>
                </span>
                <span className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-widest block mt-1 font-semibold">
                  PROPRIETOR: S. RAMESH · CHENNAI
                </span>
              </div>
            </Link>

            <p className="font-sans text-xs sm:text-sm footer-text-muted leading-relaxed font-normal max-w-sm">
              Chennai’s premier luxury travel & outstation cab service. Operating clean, executive vehicles managed personally by proprietor S. Ramesh in Iyyappanthangal.
            </p>

            {/* Direct owner live status pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full footer-card text-xs text-[#D4AF37] font-mono font-medium shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
              <span>Direct Owner Coordination · 24/7 Available</span>
            </div>
          </div>

          {/* Column 2: Navigation Links (2 cols) */}
          <nav className="lg:col-span-2 space-y-4" aria-label="Footer Navigation">
            <h3 className="font-serif text-xs font-bold text-[#D4AF37] uppercase tracking-widest flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
              Navigation
            </h3>
            <ul className="space-y-2.5 text-xs font-sans">
              {QUICK_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-[#D4AF37] transition-colors duration-200 flex items-center gap-1 group font-medium"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-[#D4AF37]" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Column 3: Popular Routes (3 cols) */}
          <nav className="lg:col-span-3 space-y-4" aria-label="Popular Routes Navigation">
            <h3 className="font-serif text-xs font-bold text-[#D4AF37] uppercase tracking-widest flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
              Popular Routes
            </h3>
            <ul className="space-y-2.5 text-xs font-sans">
              {POPULAR_ROUTES.map((route) => (
                <li key={route.href}>
                  <Link
                    href={route.href}
                    className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors duration-200 font-medium"
                  >
                    <span className="text-[#D4AF37] font-mono font-bold">›</span>
                    <span>{route.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Column 4: Contact & Location Cards (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-serif text-xs font-bold text-[#D4AF37] uppercase tracking-widest flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
              Contact & Location
            </h3>

            <div className="space-y-2.5 text-xs">
              {/* Office Location Card */}
              <div className="footer-card flex items-start gap-2.5 p-2.5 sm:p-3 rounded-md border border-[#D4AF37]/30">
                <div className="p-1.5 rounded-sm bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#D4AF37] shrink-0 mt-0.5">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <div>
                  <p className="footer-card-title text-[10px] font-mono text-[#D4AF37] uppercase tracking-wider font-semibold">Main Office</p>
                  <p className="footer-card-text font-medium font-sans mt-0.5 leading-snug">
                    Iyyappanthangal, Chennai.<br />
                  </p>
                </div>
              </div>

              {/* Phone Contacts Card */}
              <div className="footer-card flex items-start gap-2.5 p-2.5 sm:p-3 rounded-md border border-[#D4AF37]/30">
                <div className="p-1.5 rounded-sm bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#D4AF37] shrink-0 mt-0.5">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <div>
                  <p className="footer-card-title text-[10px] font-mono text-[#D4AF37] uppercase tracking-wider font-semibold">Proprietor Phone</p>
                  <div className="flex flex-wrap items-center gap-x-1 mt-0.5 font-mono text-xs font-semibold">
                    <a href="tel:+919677384267" aria-label="Call S. Ramesh at 9677384267" className="footer-card-text hover:text-[#D4AF37] transition-colors">
                      96773 84267
                    </a>
                    <span className="footer-card-text">,</span>
                    <a href="tel:+919884517451" aria-label="Call S. Ramesh at 9884517451" className="footer-card-text hover:text-[#D4AF37] transition-colors">
                      98845 17451
                    </a>
                  </div>
                </div>
              </div>

              {/* Zero Advance Guarantee Pill */}
              <div className="flex items-center gap-2 text-xs text-[#D4AF37] font-semibold pt-0.5">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Zero Advance Payment Required</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Policy Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs footer-bottom-text gap-4 font-mono">
          <p>© {new Date().getFullYear()} Kanishka Travels. All Rights Reserved.</p>
          <div className="text-center font-serif font-bold text-xs tracking-widest uppercase text-[#D4AF37] flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>CURATED BY RAM</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-[#D4AF37] transition-colors font-medium">Privacy Policy</Link>
            <span className="text-[#D4AF37]/50">•</span>
            <Link href="/terms" className="hover:text-[#D4AF37] transition-colors font-medium">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
