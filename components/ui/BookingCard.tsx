'use client';
import React from 'react';
import GlassCard from '@/components/ui/GlassCard';
import PremiumButton from '@/components/ui/PremiumButton';
import CallButton from '@/components/CallButton';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '@/components/ThemeProvider';

/**
 * Reusable glass‑styled booking card shown on the hero section.
 * It keeps the existing booking flow – the "Book Your Trip" button links to the /book page.
 * The card is fully keyboard accessible and adapts to mobile.
 */
export default function BookingCard() {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  return (
    <motion.div initial={{opacity:0, y:30, scale:0.98}} animate={{opacity:1, y:0, scale:1}} transition={{duration:0.7, delay:0.25, ease:'easeOut'}}>
      <GlassCard
        className="max-w-md w-full p-6 md:p-8 shadow-2xl"
        style={{
          background: isLight
            ? 'linear-gradient(145deg, rgba(255,252,245,0.96) 0%, rgba(250,246,238,0.94) 100%)'
            : 'linear-gradient(145deg, rgba(26,26,29,0.90) 0%, rgba(18,18,22,0.92) 100%)',
          border: isLight
            ? '1px solid rgba(184,134,11,0.30)'
            : '1px solid rgba(212,175,55,0.18)',
          boxShadow: isLight
            ? '0 8px 32px rgba(180,83,9,0.12), 0 2px 8px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.9)'
            : '0 12px 40px rgba(0,0,0,0.55), inset 0 1px 1px rgba(245,215,127,0.08)',
        }}
      >
        <div className="flex flex-col gap-4 items-center">
          <div className="flex w-full gap-2">
            <PremiumButton
              href="/book"
              className="flex-1 bg-gradient-to-r from-[#F5D77F] to-[#CA8A04] text-[#081221] hover:brightness-90"
              aria-label="Book your trip"
            >
              Book Your Trip <ArrowRight className="w-3.5 h-3.5 inline-block" />
            </PremiumButton>
            <CallButton
              variant="outline"
              label="Call Now"
              className={`flex-1 ${
                isLight
                  ? 'bg-[#92400E]/10 text-[#7C2D12] border-[#B45309]/40 hover:bg-[#92400E]/20'
                  : 'bg-white/10 text-[#F5D77F] hover:bg-[#F5D77F]/20'
              }`}
            />
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}
