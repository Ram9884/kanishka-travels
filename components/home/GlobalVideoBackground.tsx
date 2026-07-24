'use client';

import React from 'react';
import { useScrollStoryController } from '@/components/animation/ScrollStoryController';

export default function GlobalVideoBackground() {
  const { videoRef, videoContainerRef, videoOverlayRef } = useScrollStoryController();

  return (
    <div ref={videoContainerRef} className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover scale-100 transition-transform"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/hero-poster.jpg"
        aria-hidden="true"
      >
        <source src="/videos/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Dynamic Master Overlay */}
      <div
        ref={videoOverlayRef}
        className="absolute inset-0 bg-black opacity-35"
        style={{
          background: 'linear-gradient(to bottom, rgba(8,14,31,0.50) 0%, rgba(8,14,31,0.35) 30%, rgba(8,14,31,0.92) 100%)',
        }}
      />
      {/* Ambient Vignette Overlay */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.45) 100%)' }} />
    </div>
  );
}
