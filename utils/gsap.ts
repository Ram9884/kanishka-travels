// utils/gsap.ts
// Centralized GSAP ScrollTrigger helpers for Cinematic Scroll Storytelling

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Helper to check prefers-reduced-motion
const isReducedMotion = () => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// 1. Pinned Hero Scroll Storytelling & Seamless Transition
export const initPinnedHeroScroll = (
  sectionRef: React.RefObject<HTMLElement | null>,
  videoRef: React.RefObject<HTMLVideoElement | HTMLDivElement | null>,
  contentRef: React.RefObject<HTMLDivElement | null>,
  overlayRef: React.RefObject<HTMLDivElement | null>,
  bookingCardRef?: React.RefObject<HTMLDivElement | null>
) => {
  if (typeof window === 'undefined' || isReducedMotion() || !sectionRef.current) return;

  const ctx = gsap.context(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: '+=100%',
        pin: true,
        pinSpacing: true,
        scrub: 0.6,
        anticipatePin: 1,
      },
    });

    // 1. Video Scale 1.0 -> 1.15
    if (videoRef.current) {
      tl.to(videoRef.current, { scale: 1.15, ease: 'none' }, 0);
    }

    // 2. Headline & Content Move Upward with Parallax
    if (contentRef.current) {
      tl.to(contentRef.current, { yPercent: -30, opacity: 0.6, ease: 'none' }, 0);
    }

    // 3. Dark Overlay Darkens (0.2 -> 0.75)
    if (overlayRef.current) {
      tl.to(overlayRef.current, { opacity: 0.75, ease: 'none' }, 0);
    }

    // 4. Booking Card Fade & Translate
    if (bookingCardRef?.current) {
      tl.to(bookingCardRef.current, { y: -25, opacity: 0.7, ease: 'none' }, 0);
    }
  }, sectionRef);

  return () => ctx.revert();
};

// 2. Destinations Section Parallax & Stagger
export const initDestinationsScroll = (
  containerRef: React.RefObject<HTMLDivElement | null>,
  cardsSelector: string
) => {
  if (typeof window === 'undefined' || isReducedMotion() || !containerRef.current) return;

  const ctx = gsap.context(() => {
    gsap.from(cardsSelector, {
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 85%',
      },
    });
  }, containerRef);

  return () => ctx.revert();
};

// 3. Featured Vehicles Fleet Scroll
export const initFleetScroll = (
  containerRef: React.RefObject<HTMLDivElement | null>,
  cardsSelector: string
) => {
  if (typeof window === 'undefined' || isReducedMotion() || !containerRef.current) return;

  const ctx = gsap.context(() => {
    gsap.from(cardsSelector, {
      x: 35,
      opacity: 0,
      duration: 0.7,
      stagger: 0.12,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 85%',
      },
    });
  }, containerRef);

  return () => ctx.revert();
};

// 4. Booking Timeline Scroll Line
export const initTimelineScroll = (
  containerRef: React.RefObject<HTMLDivElement | null>,
  lineRef: React.RefObject<HTMLDivElement | null>
) => {
  if (typeof window === 'undefined' || isReducedMotion() || !containerRef.current) return;

  const ctx = gsap.context(() => {
    if (lineRef.current) {
      gsap.fromTo(
        lineRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 70%',
            end: 'bottom 60%',
            scrub: 0.5,
          },
        }
      );
    }
  }, containerRef);

  return () => ctx.revert();
};

// 5. Gallery Parallax
export const initGalleryScroll = (
  containerRef: React.RefObject<HTMLDivElement | null>,
  imagesSelector: string
) => {
  if (typeof window === 'undefined' || isReducedMotion() || !containerRef.current) return;

  const ctx = gsap.context(() => {
    gsap.to(imagesSelector, {
      yPercent: -12,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 0.5,
      },
    });
  }, containerRef);

  return () => ctx.revert();
};
