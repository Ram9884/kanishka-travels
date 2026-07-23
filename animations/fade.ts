// animations/fade.ts
import { Variants } from 'framer-motion';

/**
 * Fade‑in with upward movement.
 * Duration 0.6s, easeOutExpo, used for most entrance animations.
 */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};
