import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}
/**
 * Reusable heading component with optional subtitle.
 * Applies premium typography from globals.css (Playfair/Playfair Display).
 */
export default function SectionHeading({ title, subtitle, className }: SectionHeadingProps) {
  return (
    <div className={cn('text-center mb-12', className)}>
      <h2 className="text-5xl font-serif font-bold text-white mb-4" style={{ fontFamily: 'var(--font-serif)' }}>{title}</h2>
      {subtitle && (
        <p className="text-lg text-gray-300 font-sans" style={{ fontFamily: 'var(--font-sans)' }}>{subtitle}</p>
      )}
    </div>
  );
}
