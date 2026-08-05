'use client';

import React from 'react';
import { ShieldCheck, Clock, Award, PhoneCall } from 'lucide-react';
import { siteConfig } from '@/lib/seo.config';
import { useTheme } from '@/components/ThemeProvider';

export default function LocalTrustSignals({ className = '' }: { className?: string }) {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  const cardBg = isLight ? 'rgba(255,247,230,0.9)' : 'rgba(11,11,13,0.8)';
  const cardBorder = isLight ? 'rgba(217,119,6,0.2)' : 'rgba(212,175,55,0.2)';
  const iconBg = isLight ? 'rgba(217,119,6,0.1)' : 'rgba(212,175,55,0.1)';
  const iconColor = isLight ? '#D97706' : '#D4AF37';
  const headingColor = isLight ? '#1A1108' : '#FFFFFF';
  const bodyColor = isLight ? '#5C4A2A' : '#A1A1AA';
  const cardShadow = isLight ? '0 2px 12px rgba(0,0,0,0.06)' : 'none';

  const SIGNALS = [
    {
      icon: ShieldCheck,
      title: 'Zero Advance Required',
      body: 'Pay directly after completing your trip. Personal trust & transparent travel.',
    },
    {
      icon: Award,
      title: `Established ${siteConfig.foundingYear}`,
      body: '12+ years of trusted luxury outstation travel in Chennai managed by S. Ramesh.',
    },
    {
      icon: Clock,
      title: '24/7 Operating Hours',
      body: 'Early morning 3 AM airport & pilgrimage pickups available 365 days.',
    },
    {
      icon: PhoneCall,
      title: 'Direct Owner Contact',
      body: `Talk to proprietor S. Ramesh directly for instant dispatch: ${siteConfig.phone}`,
    },
  ];

  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ${className}`}>
      {SIGNALS.map(({ icon: Icon, title, body }) => (
        <div
          key={title}
          className="p-4 rounded-2xl flex items-start gap-3"
          style={{ background: cardBg, border: `1px solid ${cardBorder}`, boxShadow: cardShadow }}
        >
          <div
            className="p-2 rounded-xl shrink-0 mt-0.5"
            style={{ background: iconBg, color: iconColor }}
          >
            <Icon className="w-5 h-5" />
          </div>
          <div>
            <h4
              className="font-serif text-xs font-bold uppercase tracking-wider"
              style={{ color: headingColor }}
            >
              {title}
            </h4>
            <p className="text-[11px] mt-1 leading-snug" style={{ color: bodyColor }}>
              {body}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
