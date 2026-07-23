import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface PremiumButtonProps {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
}
/**
 * Premium CTA button with gold sweep hover effect.
 * Uses the .cta-sweep utility from globals.css.
 */
export default function PremiumButton({ href, onClick, children, className }: PremiumButtonProps) {
  const content = (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        'inline-flex items-center gap-2.5 px-8 py-3 rounded-xl font-semibold text-sm text-white cta-sweep',
        className,
      )}
    >
      {children}
    </motion.button>
  );

  if (href) {
    return (
      <a href={href} onClick={onClick} className="focus-visible:outline-none">
        {content}
      </a>
    );
  }
  return content;
}
