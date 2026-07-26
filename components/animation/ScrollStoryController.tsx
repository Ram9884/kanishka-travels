'use client';

import React, { createContext, useContext, useRef, useEffect, ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTheme } from '@/components/ThemeProvider';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface ControllerContextType {
  videoRef: React.RefObject<HTMLDivElement | null>;
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
  const { theme } = useTheme();
  const videoRef = useRef<HTMLDivElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const videoOverlayRef = useRef<HTMLDivElement>(null);
  const heroSectionRef = useRef<HTMLElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const ctaSectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    if (theme === 'light') {
      ScrollTrigger.refresh();
      return;
    }

    // Respect prefers-reduced-motion
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReducedMotion) return;

    // Refresh ScrollTrigger after DOM renders
    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 400);

    const ctx = gsap.context(() => {
      // 1. Pinned Hero Section Scroll Animation
      if (heroSectionRef.current && heroContentRef.current) {
        gsap.timeline({
          scrollTrigger: {
            trigger: heroSectionRef.current,
            start: 'top top',
            end: '+=100%',
            pin: true,
            pinSpacing: true,
            scrub: 0.8,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        })
          .to(heroContentRef.current, { yPercent: -45, opacity: 0, scale: 0.94, ease: 'power2.in' }, 0)
          .to(videoRef.current, { scale: 1.25, ease: 'none' }, 0)
          .to(videoOverlayRef.current, { opacity: 0.95, ease: 'none' }, 0);
      }

      // 2. Video Container Fade Timeline when scrolling past Hero section
      if (videoContainerRef.current && heroSectionRef.current) {
        gsap.timeline({
          scrollTrigger: {
            trigger: heroSectionRef.current,
            start: 'top top',
            end: '+=100%',
            scrub: 0.8,
            invalidateOnRefresh: true,
          },
        }).to(videoContainerRef.current, { opacity: 0, ease: 'power2.inOut' });
      }
    });

    return () => {
      clearTimeout(refreshTimer);
      ctx.revert();
    };
  }, [theme]);

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
