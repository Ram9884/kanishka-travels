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
}

export default function ScrollReveal({
  children,
  stagger = 0.08,
  yOffset = 24,
  duration = 0.6,
  className = '',
  delay = 0,
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

    gsap.fromTo(
      targets,
      { opacity: 0, y: yOffset },
      {
        opacity: 1,
        y: 0,
        duration,
        delay,
        stagger: targets.length > 1 ? stagger : 0,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 88%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}
