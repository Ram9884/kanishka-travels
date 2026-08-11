'use client';

import React, { createContext, useContext, useRef, ReactNode } from 'react';

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
  // All refs kept so existing components don't break, but no GSAP/scroll animations
  const videoRef          = useRef<HTMLDivElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const videoOverlayRef   = useRef<HTMLDivElement>(null);
  const heroSectionRef    = useRef<HTMLElement>(null);
  const heroContentRef    = useRef<HTMLDivElement>(null);
  const ctaSectionRef     = useRef<HTMLElement>(null);

  return (
    <ControllerContext.Provider
      value={{ videoRef, videoContainerRef, videoOverlayRef, heroSectionRef, heroContentRef, ctaSectionRef }}
    >
      {children}
    </ControllerContext.Provider>
  );
}
