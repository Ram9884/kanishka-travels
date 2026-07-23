import React from 'react';
import GlassCard from '@/components/ui/GlassCard';
import PremiumButton from '@/components/ui/PremiumButton';

import CallButton from '@/components/CallButton';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * Reusable glass‑styled booking card shown on the hero section.
 * It keeps the existing booking flow – the "Book Your Trip" button links to the /book page.
 * The card is fully keyboard accessible and adapts to mobile.
 */
export default function BookingCard() {
  return (
    <motion.div initial={{opacity:0, y:30, scale:0.98}} animate={{opacity:1, y:0, scale:1}} transition={{duration:0.7, delay:0.25, ease:'easeOut'}}><GlassCard className="max-w-md w-full p-6 md:p-8 backdrop-blur-xl bg-white/10 border border-[var(--border)] shadow-2xl">
      <div className="flex flex-col gap-4 items-center">
        <div className="flex w-full gap-3">
          <PremiumButton href="/book" className="flex-1 bg-gradient-to-r from-[#F5D77F] to-[#CA8A04] text-[#081221] hover:brightness-110" aria-label="Book your trip">
            Book Your Trip <ArrowRight className="w-4 h-4 inline-block ml-1" />
          </PremiumButton>
          <CallButton variant="outline" label="Call Now" className="flex-1 bg-[#F5D77F]/10 text-[#F5D77F] hover:bg-[#F5D77F]/20" />
        </div>
      </div>
    </GlassCard></motion.div>
  );
}
