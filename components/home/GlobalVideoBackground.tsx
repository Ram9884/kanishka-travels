'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function GlobalVideoBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Respect prefers-reduced-motion
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReducedMotion) return;

    const ctx = gsap.context(() => {
      // Master GSAP Timeline controlling Global Cinematic Journey (Hero -> FAQ -> CTA)
      const masterTl = gsap.timeline({
        scrollTrigger: {
          trigger: 'body',
          start: 'top top',
          end: '+=6800px', // Spans through Hero down to FAQ, fading before FinalCTA
          scrub: 0.6,
        },
      });

      // 1. Video Scale: 1.00 -> 1.15 continuous zoom
      if (videoRef.current) {
        masterTl.to(videoRef.current, { scale: 1.15, ease: 'none' }, 0);
      }

      // 2. Dark Overlay Opacity: 0.35 -> 0.95 (gradually darkens for text contrast)
      if (overlayRef.current) {
        masterTl.to(overlayRef.current, { opacity: 0.95, ease: 'none' }, 0);
      }

      // 3. Smoothly Fade Video Opacity to 0 right before Final CTA
      if (containerRef.current) {
        masterTl.to(
          containerRef.current,
          { opacity: 0, ease: 'power2.inOut' },
          0.85 // Reaches 0 opacity right before CTA section
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
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
        ref={overlayRef}
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
