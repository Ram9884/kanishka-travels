'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

interface ParallaxLayerProps {
  children: React.ReactNode;
  speed?: number; // negative moves up faster, positive moves down slower
  className?: string;
}

export default function ParallaxLayer({
  children,
  speed = -10,
  className = '',
}: ParallaxLayerProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !containerRef.current) return;

    gsap.to(containerRef.current, {
      yPercent: speed,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current.parentElement || containerRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 0.5,
      },
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className={`parallax-layer will-change-transform ${className}`}>
      {children}
    </div>
  );
}
