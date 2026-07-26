'use client';

import React from 'react';

export default function GlobalVideoBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Background Video Bounded to Hero */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      >
        <source src="/videos/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Dynamic Master Overlay */}
      <div
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
