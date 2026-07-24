'use client';

import React, { createContext, useContext, useRef, useEffect, ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface ControllerContextType {
  videoRef: React.RefObject<HTMLVideoElement | null>;
  videoContainerRef: React.RefObject<HTMLDivElement | null>;
  videoOverlayRef: React.RefObject<HTMLDivElement | null>;
  heroSectionRef: React.RefObject<HTMLElement | null>;
  heroContentRef: React.RefObject<HTMLDivElement | null>;
  ctaSectionRef: React.RefObject<HTMLElement | null>;
}

const ControllerContext = createContext<ControllerContextType | null>(null);

export function useScrollStoryController() {
  const context = useContext(ControllerContext);
  if (!context) {
    throw new Error('useScrollStoryController must be used within ScrollStoryControllerProvider');
  }
  return context;
}

export function ScrollStoryControllerProvider({ children }: { children: ReactNode }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const videoOverlayRef = useRef<HTMLDivElement>(null);
  const heroSectionRef = useRef<HTMLElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const ctaSectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Respect prefers-reduced-motion
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReducedMotion) return;

    const ctx = gsap.context(() => {
      // 1. Pinned Hero Section Animation Timeline
      if (heroSectionRef.current && heroContentRef.current) {
        gsap.timeline({
          scrollTrigger: {
            trigger: heroSectionRef.current,
            start: 'top top',
            end: '+=100%',
            pin: true,
            pinSpacing: true,
            scrub: 0.6,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        })
          .to(heroContentRef.current, { yPercent: -30, opacity: 0.5, ease: 'none' }, 0)
          .to(videoRef.current, { scale: 1.15, ease: 'none' }, 0)
          .to(videoOverlayRef.current, { opacity: 0.75, ease: 'none' }, 0);
      }

      // 2. Global Video Fade Timeline (Controlled dynamically by ctaSectionRef endTrigger)
      if (videoContainerRef.current && ctaSectionRef.current) {
        gsap.timeline({
          scrollTrigger: {
            trigger: heroSectionRef.current || 'body',
            endTrigger: ctaSectionRef.current,
            start: 'top top',
            end: 'top center',
            scrub: 0.6,
            invalidateOnRefresh: true,
          },
        }).to(videoContainerRef.current, { opacity: 0, ease: 'power2.inOut' });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <ControllerContext.Provider
      value={{
        videoRef,
        videoContainerRef,
        videoOverlayRef,
        heroSectionRef,
        heroContentRef,
        ctaSectionRef,
      }}
    >
      {children}
    </ControllerContext.Provider>
  );
}
