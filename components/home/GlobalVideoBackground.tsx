'use client';

import React from 'react';
import { useScrollStoryController } from '@/components/animation/ScrollStoryController';
import { useTheme } from '@/components/ThemeProvider';

export default function GlobalVideoBackground() {
  const { videoRef, videoContainerRef, videoOverlayRef } = useScrollStoryController();
  const { theme } = useTheme();
  const isLight = theme === 'light';

  return (
    <div ref={videoContainerRef} className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      <div ref={videoRef} className="absolute inset-0 h-full w-full transform-gpu will-change-transform">
        <video
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
            isLight ? 'opacity-0' : 'opacity-100'
          }`}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>

        <video
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
            isLight ? 'opacity-100' : 'opacity-0'
          }`}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        >
          <source src="/videos/hero-light.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Dynamic Master Overlay */}
      <div
        ref={videoOverlayRef}
        className={`absolute inset-0 ${isLight ? 'opacity-100' : 'bg-black opacity-35'}`}
      >
        <div
          className={`absolute inset-0 transition-opacity duration-500 ${isLight ? 'opacity-0' : 'opacity-100'}`}
          style={{
            background: 'linear-gradient(to bottom, rgba(8,14,31,0.50) 0%, rgba(8,14,31,0.35) 30%, rgba(8,14,31,0.92) 100%)',
          }}
        />
        <div
          className={`absolute inset-0 transition-opacity duration-500 ${isLight ? 'opacity-100' : 'opacity-0'}`}
          style={{
            background: 'linear-gradient(180deg, rgba(255,251,235,0.22) 0%, rgba(254,243,199,0.18) 40%, rgba(255,237,213,0.32) 100%)',
          }}
        />
      </div>
      {/* Ambient Vignette Overlay */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.45) 100%)' }} />
    </div>
  );
}
