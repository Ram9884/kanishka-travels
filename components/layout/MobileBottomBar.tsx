'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, Sparkles } from 'lucide-react';
import { useTheme } from '@/components/ThemeProvider';
import { WhatsAppIcon, PRIMARY_NUMBER } from '@/components/WhatsAppButton';
import { trackEvent } from '@/lib/analytics';

export default function MobileBottomBar() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const telUrl = `tel:+91${PRIMARY_NUMBER.slice(2)}`;
  const waUrl = `https://wa.me/${PRIMARY_NUMBER}?text=${encodeURIComponent(
    "Hi S. Ramesh, I'd like to enquire about booking a cab with Kanishka Travels."
  )}`;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 lg:hidden px-3 pt-2.5 pb-[calc(0.65rem+env(safe-area-inset-bottom,0px))] border-t transition-all duration-300 ${
        isDark
          ? 'bg-[#0B0B0D]/95 backdrop-blur-2xl border-[#D4AF37]/30 shadow-[0_-8px_25px_rgba(0,0,0,0.85)]'
          : 'bg-white/95 backdrop-blur-2xl border-[#B8860B]/25 shadow-[0_-8px_25px_rgba(184,134,11,0.15)]'
      }`}
    >
      <div className="max-w-md mx-auto grid grid-cols-3 gap-2 items-center">
        {/* 1. Phone Call Action */}
        <a
          href={telUrl}
          onClick={() => trackEvent('mobile_dock_call_click')}
          className={`flex flex-col items-center justify-center py-2 px-1 rounded-xl border transition-all active:scale-95 cursor-pointer ${
            isDark
              ? 'bg-[#1A1A1D]/90 border-[#D4AF37]/30 text-[#F5D77F] hover:bg-[#D4AF37]/15'
              : 'bg-amber-50/90 border-[#B8860B]/35 text-[#78350F] hover:bg-amber-100'
          }`}
          aria-label="Call Proprietor S. Ramesh"
        >
          <Phone className="w-4 h-4 mb-1 text-[#D4AF37]" strokeWidth={2.2} />
          <span className="text-[10px] font-bold uppercase tracking-wider leading-none">Call Now</span>
        </a>

        {/* 2. WhatsApp Action */}
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent('mobile_dock_whatsapp_click')}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#25D366]/15 border border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366]/25 transition-all active:scale-95 cursor-pointer"
          aria-label="Chat on WhatsApp with S. Ramesh"
        >
          <WhatsAppIcon className="w-4 h-4 mb-1 text-[#25D366]" />
          <span className="text-[10px] font-bold uppercase tracking-wider leading-none">WhatsApp</span>
        </a>

        {/* 3. Book Luxury Cab Action */}
        <Link
          href="/book"
          onClick={() => trackEvent('mobile_dock_book_click')}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#F5D77F] to-[#A16207] text-[#0B0B0D] font-extrabold shadow-[0_2px_12px_rgba(212,175,55,0.35)] hover:brightness-105 transition-all active:scale-95 cursor-pointer"
        >
          <div className="flex items-center gap-1 mb-1">
            <Sparkles className="w-3.5 h-3.5 fill-[#0B0B0D]" />
          </div>
          <span className="text-[10px] uppercase tracking-wider leading-none">Book Cab</span>
        </Link>
      </div>
    </div>
  );
}
