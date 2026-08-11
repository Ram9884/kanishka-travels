import React, { ReactNode } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface PremiumButtonProps {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
  'aria-label'?: string;
}

/**
 * Premium CTA button with gold sweep hover effect.
 * Uses the .cta-sweep utility from globals.css.
 */
export default function PremiumButton({ href, onClick, children, className, 'aria-label': ariaLabel }: PremiumButtonProps) {
  const baseClasses = cn(
    'inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl font-semibold text-sm text-white cta-sweep whitespace-nowrap cursor-pointer transition-all duration-300',
    className
  );

  if (href) {
    return (
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn('inline-block', className?.includes('w-full') && 'w-full', className?.includes('sm:flex-1') && 'sm:flex-1')}
      >
        <Link
          href={href}
          onClick={onClick}
          aria-label={ariaLabel}
          className={cn(baseClasses, 'w-full h-full')}
        >
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      aria-label={ariaLabel}
      className={baseClasses}
    >
      {children}
    </motion.button>
  );
}
