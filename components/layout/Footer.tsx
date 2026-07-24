'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Crown, 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  ArrowUpRight,
  Clock
} from 'lucide-react';
import WhatsAppButton from '@/components/WhatsAppButton';
import CallButton from '@/components/CallButton';

const QUICK_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'About Kanishka Travels', href: '/about' },
  { name: 'Fleet Showroom', href: '/fleet' },
  { name: 'Our Services', href: '/services' },
  { name: 'Book Your Trip', href: '/book' },
  { name: 'My Bookings Portal', href: '/my-bookings' },
];

const POPULAR_ROUTES = [
  'Chennai → Tirupati Pilgrimage',
  'Chennai → Ooty Hill Station',
  'Chennai → Pondicherry Tour',
  'Chennai → Kodaikanal Escape',
  'MAA Airport 24/7 Drop',
];

const FLEET_ROSTER = [
  'Maruti Suzuki Swift Dzire',
  'Maruti Suzuki Ertiga',
  'Toyota Etios',
  'Toyota Innova',
  'Toyota Innova Crysta',
  'Force Tempo Traveller',
  'Executive Mini Bus',
];

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#0B0B0D] text-[#F8F5EE] border-t border-[#D4AF37]/25 overflow-hidden">
      {/* Top 2px Gold Accent Hairline Sheen */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#F5D77F]/80 to-transparent z-20" />

      {/* Soft Ambient Radial Light Sheen */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[350px] bg-[#D4AF37]/6 blur-[170px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-[#D4AF37]/15">
          
          {/* Column 1: Brand & Personal Promise (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="w-11 h-11 rounded-2xl icon-container-gold flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                <Crown className="w-6 h-6 text-slate-950" />
              </div>
              <div>
                <span className="font-serif text-2xl font-bold tracking-tight text-white group-hover:text-[#F5D77F] transition-colors block leading-none">
                  Kanishka <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5D77F] via-[#D4AF37] to-[#A16207]">Travels</span>
                </span>
                <span className="text-[10px] font-mono text-[#D4AF37]/80 uppercase tracking-widest block mt-1">
                  Proprietor: S. Ramesh · Chennai
                </span>
              </div>
            </Link>

            <p className="font-sans text-xs sm:text-sm text-[#A1A1AA] leading-relaxed font-light max-w-sm">
              Chennai’s premier luxury travel & outstation cab service. Operating clean, executive vehicles managed personally by S. Ramesh in Iyyappanthangal.
            </p>

            {/* Direct owner live status pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A1A1D] border border-[#D4AF37]/30 text-xs text-[#F5D77F] font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              <span>Direct Owner Coordination · 24/7 Available</span>
            </div>


          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-serif text-sm font-bold text-[#F5D77F] uppercase tracking-widest flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
              Navigation
            </h3>
            <ul className="space-y-2.5 text-xs text-[#A1A1AA] font-sans">
              {QUICK_LINKS.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="hover:text-[#F5D77F] transition-colors duration-200 flex items-center gap-1 group"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-[#D4AF37]" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Popular Routes (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-serif text-sm font-bold text-[#F5D77F] uppercase tracking-widest flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
              Popular Routes
            </h3>
            <ul className="space-y-2.5 text-xs text-[#A1A1AA] font-sans">
              {POPULAR_ROUTES.map((route) => (
                <li key={route} className="flex items-center gap-2 hover:text-white transition-colors duration-200">
                  <span className="text-[#D4AF37]/60 font-mono">›</span>
                  <span>{route}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Office (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-serif text-sm font-bold text-[#F5D77F] uppercase tracking-widest flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
              Contact & Location
            </h3>
            
            <div className="space-y-3.5 text-xs text-[#A1A1AA]">
              <div className="flex items-start gap-3 p-3 rounded-xl bg-[#1A1A1D]/80 border border-[#D4AF37]/15">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <p className="text-[10px] font-mono text-[#D4AF37]/80 uppercase">Main Office</p>
                  <p className="text-white font-medium font-sans mt-0.5">Iyyappanthangal, Chennai, TN – 600056</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-[#1A1A1D]/80 border border-[#D4AF37]/15">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <p className="text-[10px] font-mono text-[#D4AF37]/80 uppercase">Proprietor Phone</p>
                  <div className="flex flex-wrap items-center gap-x-1.5 gap-y-0.5 mt-0.5 font-mono text-xs">
                    <a href="tel:+919677384267" className="text-white hover:text-[#F5D77F] transition-colors font-medium">
                      +91 96773 84267
                    </a>
                    <span className="text-[#D4AF37] font-bold">,</span>
                    <a href="tel:+919884517451" className="text-white hover:text-[#F5D77F] transition-colors font-medium">
                      +91 98845 17451
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-[#F5D77F]">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span className="font-semibold">Zero Advance Payment Required</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#A1A1AA] gap-4 font-mono">
          <p>© {new Date().getFullYear()} Kanishka Travels. All Rights Reserved.</p>
          <div className="text-center text-[#F5D77F] font-serif font-semibold text-xs tracking-widest uppercase">
            Curated by Ram
          </div>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-[#F5D77F] transition-colors">Privacy Policy</Link>
            <span className="text-[#D4AF37]/40">•</span>
            <Link href="/terms" className="hover:text-[#F5D77F] transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
