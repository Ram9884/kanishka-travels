'use client';

import React from 'react';

interface SectionDividerProps {
  className?: string;
  glow?: boolean;
}

export default function SectionDivider({ className = '', glow = true }: SectionDividerProps) {
  return (
    <div className={`relative w-full py-6 flex items-center justify-center overflow-hidden pointer-events-none ${className}`}>
      {/* Soft Radial Gold Glow background */}
      {glow && (
        <div 
          className="absolute inset-0 flex items-center justify-center"
          aria-hidden="true"
        >
          <div className="w-[600px] h-[60px] bg-gradient-to-r from-transparent via-[#D4AF37]/15 to-transparent blur-2xl rounded-full transform -translate-y-1/2" />
        </div>
      )}

      {/* Thin Gold Gradient Line */}
      <div className="relative w-full max-w-7xl mx-auto px-6">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#D4AF37]/35 via-50% to-transparent opacity-80" />
      </div>
    </div>
  );
}
