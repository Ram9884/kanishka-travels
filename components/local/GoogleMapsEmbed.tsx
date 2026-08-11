'use client';

import React from 'react';
import { MapPin, Phone, MessageSquare, Navigation, Clock } from 'lucide-react';
import { siteConfig } from '@/lib/seo.config';
import { useTheme } from '@/components/ThemeProvider';

export default function GoogleMapsEmbed({ className = '' }: { className?: string }) {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  return (
    <div
      className={`rounded-2xl overflow-hidden space-y-4 p-5 ${className}`}
      style={{
        background: isLight ? 'rgba(255,247,230,0.95)' : 'rgba(11,11,13,0.9)',
        border: isLight ? '1px solid rgba(217,119,6,0.22)' : '1px solid rgba(212,175,55,0.2)',
        boxShadow: isLight ? '0 4px 20px rgba(0,0,0,0.07)' : 'none',
      }}
    >
      {/* Title & Status */}
      <div
        className="flex items-center justify-between pb-3"
        style={{ borderBottom: isLight ? '1px solid rgba(217,119,6,0.15)' : '1px solid rgba(212,175,55,0.15)' }}
      >
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4" style={{ color: isLight ? '#D97706' : '#D4AF37' }} />
          <span
            className="font-serif font-bold text-sm"
            style={{ color: isLight ? '#1A1108' : '#FFFFFF' }}
          >
            Office Location & Directions
          </span>
        </div>
        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[10px] font-mono text-emerald-600">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          24/7 Open
        </span>
      </div>

      {/* Map Embed Iframe */}
      <div
        className="relative w-full h-64 rounded-xl overflow-hidden"
        style={{ border: isLight ? '1px solid rgba(217,119,6,0.15)' : '1px solid rgba(212,175,55,0.15)' }}
      >
        <iframe
          title="Kanishka Travels Location Map"
          src={siteConfig.googleMapsEmbedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full opacity-90 hover:opacity-100 transition-all duration-300"
        />
      </div>

      {/* Text Address & Business Hours */}
      <div className="space-y-2 text-xs">
        <p
          className="font-sans font-medium flex items-start gap-1.5"
          style={{ color: isLight ? '#1A1108' : '#FFFFFF' }}
        >
          <MapPin
            className="w-3.5 h-3.5 shrink-0 mt-0.5"
            style={{ color: isLight ? '#D97706' : '#D4AF37' }}
          />
          <span>
            {siteConfig.siteName} — {siteConfig.address.streetAddress}, {siteConfig.address.addressLocality}, {siteConfig.address.addressRegion} – {siteConfig.address.postalCode} ({siteConfig.address.landmark})
          </span>
        </p>
        <p
          className="font-mono text-[11px] flex items-center gap-1.5"
          style={{ color: isLight ? '#B45309' : '#F5D77F' }}
        >
          <Clock
            className="w-3.5 h-3.5 shrink-0"
            style={{ color: isLight ? '#D97706' : '#D4AF37' }}
          />
          <span>Business Hours: 24 Hours / 365 Days Available</span>
        </p>
      </div>

      {/* Action CTA Links */}
      <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-2.5">
        <a
          href={siteConfig.googleMapsDirectionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl font-bold text-xs transition-all"
          style={{
            background: isLight ? 'rgba(217,119,6,0.1)' : 'rgba(212,175,55,0.15)',
            border: isLight ? '1px solid rgba(217,119,6,0.3)' : '1px solid rgba(212,175,55,0.3)',
            color: isLight ? '#92400E' : '#F5D77F',
          }}
        >
          <Navigation className="w-3.5 h-3.5" style={{ color: isLight ? '#D97706' : '#D4AF37' }} />
          <span>Get Directions</span>
        </a>
        <a
          href={`tel:${siteConfig.rawPhone}`}
          className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl font-bold text-xs transition-all"
          style={{
            background: isLight ? 'rgba(255,255,255,0.8)' : 'rgba(30,30,35,0.8)',
            border: isLight ? '1px solid rgba(0,0,0,0.12)' : '1px solid rgba(75,75,85,1)',
            color: isLight ? '#1A1108' : '#FFFFFF',
          }}
        >
          <Phone className="w-3.5 h-3.5" style={{ color: isLight ? '#D97706' : '#D4AF37' }} />
          <span>Call Owner</span>
        </a>
        <a
          href={`https://wa.me/${siteConfig.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl font-bold text-xs transition-all"
          style={{
            background: 'rgba(34,197,94,0.1)',
            border: '1px solid rgba(34,197,94,0.3)',
            color: isLight ? '#15803D' : '#4ade80',
          }}
        >
          <MessageSquare className="w-3.5 h-3.5" style={{ color: isLight ? '#16a34a' : '#4ade80' }} />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
