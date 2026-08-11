// animations/parallax.ts
import { Variants } from 'framer-motion';

/**
 * Simple parallax scale for background elements.
 * Used for the hero video scaling on scroll.
 */
export const videoParallax: Variants = {
  initial: { scale: 1 },
  animate: {
    scale: 1.14,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};
