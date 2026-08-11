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
    <motion.div initial={{opacity:0, y:30, scale:0.98}} animate={{opacity:1, y:0, scale:1}} transition={{duration:0.7, delay:0.25, ease:'easeOut'}} className="w-full max-w-md px-2 sm:px-0">
      <GlassCard
        className="w-full p-4 sm:p-6 md:p-8 shadow-2xl"
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
        <div className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 w-full gap-3 items-stretch">
            <PremiumButton
              href="/book"
              className="w-full h-full py-3.5 px-4 justify-center bg-gradient-to-r from-[#F5D77F] via-[#D4AF37] to-[#CA8A04] text-[#081221] font-bold text-sm hover:brightness-105 min-h-[48px] shadow-[0_4px_18px_rgba(212,175,55,0.3)]"
              aria-label="Book your trip"
            >
              <span>Book Your Trip</span>
              <ArrowRight className="w-4 h-4 ml-1 shrink-0" />
            </PremiumButton>

            <CallButton
              variant="outline"
              label="Call Now"
              className={`w-full h-full py-3.5 px-4 justify-center font-bold text-sm min-h-[48px] rounded-xl transition-all duration-300 ${
                isLight
                  ? 'bg-amber-500/10 text-[#7C2D12] border border-[#B45309]/40 hover:bg-amber-500/20'
                  : 'bg-white/10 text-[#F5D77F] border border-[#D4AF37]/35 hover:bg-[#F5D77F]/20'
              }`}
            />
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}
