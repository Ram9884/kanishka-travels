'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPin, Phone, MessageSquare, ArrowRight, Crown } from 'lucide-react';
import WhatsAppButton from '@/components/WhatsAppButton';
import CallButton from '@/components/CallButton';
import { useTheme } from '@/components/ThemeProvider';

const CREDENTIALS = [
  { label: 'Years Operating', value: '10+' },
  { label: 'Fleet Size', value: '9 Vehicles' },
  { label: 'Service Area', value: 'South India' },
  { label: 'Availability', value: '24 / 7' },
];

export default function AboutFounderCard() {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  return (
    <section className="relative w-full py-24 bg-transparent px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div
          className="w-[800px] h-[450px] blur-[140px]"
          style={{ background: isLight ? 'radial-gradient(ellipse, rgba(217,119,6,0.12), transparent 70%)' : 'radial-gradient(ellipse, rgba(212,175,55,0.12), transparent 70%)' }}
        />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-14"
        >
          <span
            className="text-[10px] font-mono font-bold uppercase tracking-[0.25em]"
            style={{ color: isLight ? '#B45309' : '#D4AF37' }}
          >
            The Person Behind It All
          </span>
          <div
            className="flex-1 h-px max-w-[80px]"
            style={{ background: isLight ? 'linear-gradient(to right, rgba(180,83,9,0.5), transparent)' : 'linear-gradient(to right, rgba(212,175,55,0.5), transparent)' }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden"
          style={{
            background: isLight
              ? 'linear-gradient(135deg, rgba(255,251,235,0.98), rgba(254,243,199,0.98))'
              : 'linear-gradient(135deg, rgba(20,20,23,0.97), rgba(11,11,13,0.97))',
            border: isLight ? '1px solid rgba(217,119,6,0.25)' : '1px solid rgba(212,175,55,0.25)',
            boxShadow: isLight
              ? '0 16px 60px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.9)'
              : '0 30px 80px rgba(0,0,0,0.8), inset 0 1px 0 rgba(245,215,127,0.1)',
          }}
        >
          {/* Top shimmer */}
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{ background: isLight ? 'linear-gradient(to right, transparent, rgba(217,119,6,0.5), transparent)' : 'linear-gradient(to right, transparent, rgba(245,215,127,0.5), transparent)' }}
          />

          <div className="p-8 sm:p-12 lg:p-16 space-y-10">
            {/* Header row */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="flex items-center gap-5">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0"
                  style={{
                    background: isLight ? 'rgba(217,119,6,0.12)' : 'linear-gradient(135deg, rgba(212,175,55,0.2), rgba(212,175,55,0.06))',
                    border: isLight ? '1px solid rgba(217,119,6,0.35)' : '1px solid rgba(212,175,55,0.4)',
                    boxShadow: isLight ? '0 0 20px rgba(217,119,6,0.1)' : '0 0 24px rgba(212,175,55,0.15)',
                  }}
                >
                  <Crown className="w-8 h-8" style={{ color: isLight ? '#D97706' : '#D4AF37' }} />
                </div>
                <div>
                  <h2
                    className="font-serif text-3xl sm:text-4xl font-extrabold tracking-tight"
                    style={{ color: isLight ? '#1A1108' : '#FFFFFF' }}
                  >
                    S. Ramesh
                  </h2>
                  <p
                    className="text-xs font-mono uppercase tracking-[0.2em] mt-1"
                    style={{ color: isLight ? '#B45309' : '#D4AF37' }}
                  >
                    Founder & Proprietor · Kanishka Travels
                  </p>
                </div>
              </div>

              <span
                className="text-[10px] font-extrabold font-mono px-4 py-2 rounded-full uppercase tracking-widest shrink-0"
                style={{
                  background: isLight ? 'rgba(217,119,6,0.1)' : 'rgba(212,175,55,0.12)',
                  border: isLight ? '1px solid rgba(217,119,6,0.3)' : '1px solid rgba(212,175,55,0.35)',
                  color: isLight ? '#B45309' : '#F5D77F',
                  boxShadow: isLight ? '0 0 12px rgba(217,119,6,0.1)' : '0 0 16px rgba(212,175,55,0.15)',
                }}
              >
                Direct Access
              </span>
            </div>

            {/* Credential stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {CREDENTIALS.map(({ label, value }) => (
                <div
                  key={label}
                  className="flex flex-col items-center gap-1 py-4 px-2 rounded-xl text-center"
                  style={{
                    background: isLight ? 'rgba(255,247,230,0.9)' : 'rgba(11,11,13,0.8)',
                    border: isLight ? '1px solid rgba(217,119,6,0.15)' : '1px solid rgba(212,175,55,0.12)',
                  }}
                >
                  <span
                    className="text-xl font-extrabold font-serif"
                    style={{
                      backgroundImage: isLight ? 'linear-gradient(135deg, #B45309, #D97706)' : 'linear-gradient(135deg, #F5D77F, #D4AF37)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    {value}
                  </span>
                  <span
                    className="text-[10px] font-mono uppercase tracking-widest"
                    style={{ color: isLight ? '#92400E' : 'rgba(255,255,255,0.4)' }}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div
              className="h-px"
              style={{ background: isLight ? 'linear-gradient(to right, transparent, rgba(217,119,6,0.25), transparent)' : 'linear-gradient(to right, transparent, rgba(212,175,55,0.2), transparent)' }}
            />

            {/* Contact info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div
                className="flex items-start gap-4 p-5 rounded-2xl"
                style={{
                  background: isLight ? 'rgba(255,247,230,0.8)' : 'rgba(11,11,13,0.7)',
                  border: isLight ? '1px solid rgba(217,119,6,0.15)' : '1px solid rgba(212,175,55,0.12)',
                }}
              >
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" style={{ color: isLight ? '#D97706' : '#D4AF37' }} />
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-widest mb-1" style={{ color: isLight ? 'rgba(92,74,42,0.5)' : 'rgba(255,255,255,0.35)' }}>Office Location</p>
                  <p className="text-sm font-medium leading-snug" style={{ color: isLight ? '#1A1108' : '#FFFFFF' }}>Iyyappanthangal, Chennai, Tamil Nadu — 600056</p>
                </div>
              </div>
              <div
                className="flex items-start gap-4 p-5 rounded-2xl"
                style={{
                  background: isLight ? 'rgba(255,247,230,0.8)' : 'rgba(11,11,13,0.7)',
                  border: isLight ? '1px solid rgba(217,119,6,0.15)' : '1px solid rgba(212,175,55,0.12)',
                }}
              >
                <Phone className="w-4 h-4 shrink-0 mt-0.5" style={{ color: isLight ? '#D97706' : '#D4AF37' }} />
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-widest mb-1" style={{ color: isLight ? 'rgba(92,74,42,0.5)' : 'rgba(255,255,255,0.35)' }}>Direct Numbers</p>
                  <p className="text-sm font-medium leading-snug" style={{ color: isLight ? '#1A1108' : '#FFFFFF' }}>+91 96773 84267 · +91 98845 17451</p>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <WhatsAppButton
                variant="inline"
                label="WhatsApp S. Ramesh"
                className="flex-1 py-4 text-xs font-bold uppercase tracking-widest justify-center shadow-lg"
              />
              <CallButton
                variant="primary"
                label="Call S. Ramesh Now"
                className="flex-1 py-4 text-xs font-bold uppercase tracking-widest justify-center shadow-lg"
              />
            </div>

            {/* Bottom CTA link */}
            <div className="text-center pt-2">
              <Link
                href="/book"
                className="inline-flex items-center gap-2.5 text-sm font-semibold group transition-colors duration-200"
                style={{ color: isLight ? '#B45309' : '#F5D77F' }}
              >
                <span>Ready to travel? Reserve your vehicle online</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
