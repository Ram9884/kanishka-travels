import React from 'react';
import { cn } from '@/lib/utils'; // utility for className concatenation, assume exists

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Reusable glassmorphism card component.
 * Uses the design system variables defined in globals.css.
 * Supports both light and dark themes via the `.glass-light` and `.glass-dark` utilities.
 */
export default function GlassCard({ children, className }: GlassCardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl backdrop-blur-2xl border border-[var(--border)] bg-[var(--bg-card)] shadow-xl',
        className,
      )}
    >
      {children}
    </div>
  );
}
