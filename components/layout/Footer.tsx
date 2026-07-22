'use client';

import Link from 'next/link';
import WhatsAppButton, { PRIMARY_NUMBER, SECONDARY_NUMBER } from '@/components/WhatsAppButton';
import CallButton from '@/components/CallButton';
import { Crown, MapPin, Phone, Mail, ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-[#A16207]/30 bg-[#0A1128] text-slate-300 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#1E3A8A] to-[#7A1F2B] p-0.5 border border-[#A16207]/50 flex items-center justify-center">
                <Crown className="w-5 h-5 text-[#A16207]" />
              </div>
              <span className="font-serif tracking-wider text-lg font-bold text-white block">
                KANISHKA <span className="text-[#A16207]">TRAVELS</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Chennai&apos;s trusted taxi, outstation car rental, and tour partner operated by S. Ramesh. Professional drivers, safe vehicles, and 24/7 personal trip assistance.
            </p>
            <div className="inline-flex items-center gap-2 text-xs text-[#F5D77F] bg-[#1E3A8A]/30 border border-[#A16207]/30 px-3 py-1.5 rounded-full font-mono">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Tagline: &quot;Your Trip... Our Responsibility!&quot;</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white border-b border-[#A16207]/20 pb-2">
              Our Services
            </h3>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><Link href="/services#airport" className="hover:text-[#A16207] transition-colors">Airport Pickup & Drop (MAA)</Link></li>
              <li><Link href="/services#local" className="hover:text-[#A16207] transition-colors">Local Chennai Taxi</Link></li>
              <li><Link href="/services#outstation" className="hover:text-[#A16207] transition-colors">Outstation Trips (Round-trip)</Link></li>
              <li><Link href="/services#temple" className="hover:text-[#A16207] transition-colors">Pilgrimage & Temple Tours</Link></li>
              <li><Link href="/services#corporate" className="hover:text-[#A16207] transition-colors">Corporate Travel & Monthly Rental</Link></li>
            </ul>
          </div>

          {/* Fleet Categories */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white border-b border-[#A16207]/20 pb-2">
              Our Fleet
            </h3>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><Link href="/fleet#sedan" className="hover:text-[#A16207] transition-colors">Maruti Suzuki Dzire (Sedan - 4 Seater)</Link></li>
              <li><Link href="/fleet#suv" className="hover:text-[#A16207] transition-colors">Toyota Innova Crysta (SUV - 7 Seater)</Link></li>
              <li><Link href="/fleet#tempo" className="hover:text-[#A16207] transition-colors">Tempo Traveller (Luxury Van - 12+ Seater)</Link></li>
              <li><span className="text-slate-500">Full AC & Clean Vehicles</span></li>
            </ul>
          </div>

          {/* Direct Contact & WhatsApp */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white border-b border-[#A16207]/20 pb-2">
              Direct Contact
            </h3>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#A16207] shrink-0 mt-0.5" />
                <span>Iyyappanthangal, Chennai, Tamil Nadu, India</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#A16207] shrink-0" />
                <span>Proprietor: S. Ramesh</span>
              </div>
            </div>

            <div className="pt-2 space-y-2">
              <p className="text-[11px] text-slate-400 font-medium">WhatsApp Booking Lines:</p>
              <div className="flex flex-col gap-2">
                <WhatsAppButton phone={PRIMARY_NUMBER} label="Primary Line (+91 96773 84267)" variant="inline" className="w-full text-xs justify-center" />
                <WhatsAppButton phone={SECONDARY_NUMBER} label="Secondary Line (+91 98845 17451)" variant="badge" className="w-full justify-center text-xs" />
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Kanishka Travels. All rights reserved. Managed personally by S. Ramesh.</p>
          <div className="flex gap-6">
            <Link href="/about" className="hover:text-slate-400">About S. Ramesh</Link>
            <Link href="/book" className="hover:text-slate-400">Book Online</Link>
            <Link href="/login" className="hover:text-slate-400">Customer Login</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
