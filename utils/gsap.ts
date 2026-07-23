// utils/gsap.ts
// Centralized GSAP helpers for section reveals and subtle parallax effects.

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const reveal = (target: string | HTMLElement, options?: gsap.TweenVars) => {
  if (typeof window === 'undefined') return;
  const defaults: gsap.TweenVars = {
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: target,
      start: 'top 85%',
      toggleActions: 'play none none reverse',
    },
  };
  gsap.from(target, { ...defaults, ...options });
};

export const parallax = (target: string | HTMLElement, speed = 0.3) => {
  if (typeof window === 'undefined') return;
  gsap.to(target, {
    yPercent: -speed * 100,
    ease: 'none',
    scrollTrigger: {
      trigger: target,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    },
  });
};

export const staggerReveal = (targets: string | HTMLElement, options?: gsap.TweenVars) => {
  if (typeof window === 'undefined') return;
  const defaults: gsap.TweenVars = {
    opacity: 0,
    y: 20,
    duration: 0.6,
    ease: 'power2.out',
    stagger: 0.1,
    scrollTrigger: {
      trigger: targets,
      start: 'top 85%',
    },
  };
  gsap.from(targets, { ...defaults, ...options });
};

export const sectionFade = (target: string | HTMLElement, options?: gsap.TweenVars) => {
  if (typeof window === 'undefined') return;
  const defaults: gsap.TweenVars = {
    opacity: 0,
    duration: 1,
    ease: 'power1.out',
    scrollTrigger: {
      trigger: target,
      start: 'top 90%',
    },
  };
  gsap.from(target, { ...defaults, ...options });
};
