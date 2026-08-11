import React, { CSSProperties } from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  style?: CSSProperties;
}

/**
 * Reusable glassmorphism card component.
 * Uses the design system variables defined in globals.css.
 * Supports both light and dark themes via the `.glass-light` and `.glass-dark` utilities.
 */
export default function GlassCard({ children, className, style }: GlassCardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl backdrop-blur-2xl border border-[var(--border)] bg-[var(--bg-card)] shadow-xl',
        className,
      )}
      style={style}
    >
      {children}
    </div>
  );
}
