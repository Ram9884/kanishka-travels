'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
} from 'lucide-react';
import WhatsAppButton from '@/components/WhatsAppButton';
import CallButton from '@/components/CallButton';

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#0B0B0D] text-slate-300 border-t border-[#D4AF37]/20 overflow-hidden">
      {/* Soft Ambient Radial Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#D4AF37]/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#D4AF37]/15">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2">
              <span className="font-serif text-3xl font-extrabold text-[#F8F5EE] tracking-tight">
                Kanishka <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5D77F] via-[#D4AF37] to-[#A16207]">Travels</span>
              </span>
            </Link>

            <p className="font-sans text-xs text-[#A1A1AA] leading-relaxed max-w-sm font-normal">
              Chennai’s premier luxury travel & outstation cab service, managed personally by proprietor S. Ramesh. Operating clean, executive vehicles with polite highway chauffeurs.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <WhatsAppButton variant="inline" label="WhatsApp Us" />
              <CallButton variant="outline" label="Call Now" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h3 className="font-serif text-base font-bold text-[#F5D77F] uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2 text-xs text-[#A1A1AA] font-normal">
              <li>
                <Link href="/" className="hover:text-[#F5D77F] transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#F5D77F] transition-colors">About Kanishka Travels</Link>
              </li>
              <li>
                <Link href="/fleet" className="hover:text-[#F5D77F] transition-colors">Featured Vehicles</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#F5D77F] transition-colors">Our Services</Link>
              </li>
              <li>
                <Link href="/book" className="hover:text-[#F5D77F] transition-colors">Book Your Trip</Link>
              </li>
              <li>
                <Link href="/my-bookings" className="hover:text-[#F5D77F] transition-colors">My Bookings</Link>
              </li>
            </ul>
          </div>

          {/* Fleet Models */}
          <div className="space-y-3">
            <h3 className="font-serif text-base font-bold text-[#F5D77F] uppercase tracking-wider">
              Fleet Roster
            </h3>
            <ul className="space-y-2 text-xs text-[#A1A1AA] font-normal">
              <li>Toyota Innova Crysta</li>
              <li>Maruti Ertiga</li>
              <li>Toyota Etios</li>
              <li>Maruti Swift Dzire</li>
              <li>Force Tempo Traveller</li>
              <li>Executive Mini Bus</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h3 className="font-serif text-base font-bold text-[#F5D77F] uppercase tracking-wider">
              Contact & Address
            </h3>
            <ul className="space-y-3 text-xs text-[#A1A1AA] font-normal">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span className="text-[#F8F5EE]">Iyyappanthangal, Chennai, Tamil Nadu - 600056</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a href="tel:+919677384267" className="text-[#F8F5EE] hover:text-[#F5D77F] transition-colors font-mono">+91 96773 84267</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a href="mailto:support@kanishkatravels.com" className="hover:text-[#F5D77F] transition-colors">support@kanishkatravels.com</a>
              </li>
              <li className="flex items-center gap-1.5 pt-1 text-[#F5D77F] font-semibold">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                <span>Direct Owner Coordination</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#A1A1AA] gap-4 font-mono">
          <p>© {new Date().getFullYear()} Kanishka Travels. All Rights Reserved. Managed by S. Ramesh.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-[#F5D77F] transition-colors">Privacy Policy</Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-[#F5D77F] transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
