'use client';

import React from 'react';
import { useTheme } from '@/components/ThemeProvider';

export default function GlobalVideoBackground() {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">

      {/* Dark theme — hero.mp4 */}
      <video
        key="dark-video"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${isLight ? 'opacity-0' : 'opacity-100'}`}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Light theme — hero-light.mp4 */}
      <video
        key="light-video"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${isLight ? 'opacity-100' : 'opacity-0'}`}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      >
        <source src="/videos/hero-light.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay — keeps text readable */}
      {!isLight && (
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(5,5,8,0.55) 0%, rgba(5,5,8,0.30) 40%, rgba(5,5,8,0.88) 100%)',
          }}
        />
      )}

      {/* Light overlay */}
      {isLight && (
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, rgba(255,251,235,0.25) 0%, rgba(254,243,199,0.18) 50%, rgba(255,237,213,0.35) 100%)',
          }}
        />
      )}

      {/* Vignette edges */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, transparent 45%, rgba(0,0,0,0.40) 100%)' }}
      />
    </div>
  );
}
