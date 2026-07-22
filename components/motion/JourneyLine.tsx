'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Car } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function JourneyLine() {
  const lineRef = useRef<SVGPathElement>(null);
  const carRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !lineRef.current || !carRef.current) return;

    const path = lineRef.current;
    const length = path.getTotalLength();

    // Set up path stroke dash array
    gsap.set(path, {
      strokeDasharray: length,
      strokeDashoffset: length,
    });

    gsap.to(path, {
      strokeDashoffset: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.5,
        onUpdate: (self) => {
          const progress = self.progress;
          const point = path.getPointAtLength(progress * length);
          if (carRef.current) {
            carRef.current.style.transform = `translate3d(${point.x - 16}px, ${point.y - 16}px, 0)`;
          }
        },
      },
    });
  }, []);

  return (
    <div className="hidden min-[1040px]:block fixed left-6 top-0 bottom-0 z-30 w-12 pointer-events-none opacity-40 hover:opacity-100 transition-opacity">
      <svg className="w-full h-full" viewBox="0 0 48 1000" preserveAspectRatio="none">
        <path
          d="M 24 0 Q 36 250 24 500 T 24 1000"
          fill="none"
          stroke="rgba(161, 98, 7, 0.2)"
          strokeWidth="2"
        />
        <path
          ref={lineRef}
          d="M 24 0 Q 36 250 24 500 T 24 1000"
          fill="none"
          stroke="#A16207"
          strokeWidth="3"
          strokeDasharray="6 4"
        />
      </svg>
      <div
        ref={carRef}
        className="absolute left-0 top-0 w-8 h-8 rounded-full bg-[#1E3A8A] border-2 border-[#A16207] flex items-center justify-center text-[#A16207] shadow-lg transition-transform duration-75"
      >
        <Car className="w-4 h-4" />
      </div>
    </div>
  );
}
