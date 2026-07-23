'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

interface ScrollRevealProps {
  children: React.ReactNode;
  stagger?: number;
  yOffset?: number;
  duration?: number;
  className?: string;
  delay?: number;
  blur?: boolean;
}

export default function ScrollReveal({
  children,
  stagger = 0.1,
  yOffset = 28,
  duration = 0.72,
  className = '',
  delay = 0,
  blur = false,
}: ScrollRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!containerRef.current) return;

    if (prefersReducedMotion) {
      gsap.set(containerRef.current.children, { opacity: 1, y: 0 });
      return;
    }

    const targets = containerRef.current.children.length > 0
      ? Array.from(containerRef.current.children)
      : [containerRef.current];

    // Blur filter reveal
    if (blur) {
      gsap.fromTo(
        targets,
        { opacity: 0, y: yOffset, filter: 'blur(10px)' },
        {
          opacity: 1, y: 0, filter: 'blur(0px)',
          duration,
          delay,
          stagger: targets.length > 1 ? stagger : 0,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
        }
      );
    } else {
      gsap.fromTo(
        targets,
        { opacity: 0, y: yOffset },
        {
          opacity: 1, y: 0,
          duration,
          delay,
          stagger: targets.length > 1 ? stagger : 0,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
        }
      );
    }
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}
