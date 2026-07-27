// 'use client';

// import React, { useRef, useEffect } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import GlobalVideoBackground from '@/components/home/GlobalVideoBackground';
// import BookingCard from '@/components/ui/BookingCard';
// import { ShieldCheck, Star, Award, Clock, Sparkles } from 'lucide-react';
// import { useScrollStoryController } from '@/components/animation/ScrollStoryController';
// import { useTheme } from '@/components/ThemeProvider';

// if (typeof window !== 'undefined') {
//   gsap.registerPlugin(ScrollTrigger);
// }

// export default function HeroSection() {
//   const { theme } = useTheme();
//   const isLight = theme === 'light';
//   const { heroSectionRef, heroContentRef } = useScrollStoryController();
//   const headlineRef = useRef<HTMLHeadingElement>(null);
//   const subtitleRef = useRef<HTMLParagraphElement>(null);
//   const pillsRef = useRef<HTMLDivElement>(null);
//   const metricsRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (!heroSectionRef.current) return;
//     if (theme === 'light') return;

//     const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
//     if (isReducedMotion) return;

//     const ctx = gsap.context(() => {
//       const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

//       // 1. Headline GSAP 3D Entrance Reveal
//       if (headlineRef.current) {
//         const headlineLines = headlineRef.current.querySelectorAll('.hero-gsap-line');
//         tl.fromTo(
//           headlineLines,
//           { opacity: 0, y: 45, rotateX: 30, filter: 'blur(8px)' },
//           { opacity: 1, y: 0, rotateX: 0, filter: 'blur(0px)', stagger: 0.18, duration: 1.1 }
//         );
//       }

//       // 2. Subtitle GSAP Fade Up
//       if (subtitleRef.current) {
//         tl.fromTo(
//           subtitleRef.current,
//           { opacity: 0, y: 25, filter: 'blur(6px)' },
//           { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.8 },
//           '-=0.6'
//         );
//       }

//       // 3. Trust Pills GSAP Stagger
//       if (pillsRef.current) {
//         tl.fromTo(
//           pillsRef.current.children,
//           { opacity: 0, y: 20, scale: 0.92 },
//           { opacity: 1, y: 0, scale: 1, stagger: 0.1, duration: 0.7 },
//           '-=0.5'
//         );
//       }

//       // 4. Trust Metrics GSAP Stagger
//       if (metricsRef.current) {
//         tl.fromTo(
//           metricsRef.current.children,
//           { opacity: 0, y: 20 },
//           { opacity: 1, y: 0, stagger: 0.12, duration: 0.7 },
//           '-=0.4'
//         );
//       }
//     }, heroSectionRef);

//     return () => ctx.revert();
//   }, [heroSectionRef, theme]);

//   return (
//     <section
//       ref={heroSectionRef}
//       className="relative w-full min-h-[100svh] flex flex-col items-center justify-center overflow-hidden border-none"
//     >
//       {/* Video Background bounded strictly inside Hero Section */}
//       <GlobalVideoBackground />

//       {/* Ambient visual accents */}
//       {!isLight && (
//         <>
//           <div className="ambient-gold" style={{ top: '-20%', left: '60%' }} />
//           <div className="ambient-navy" style={{ bottom: '-30%', right: '-10%' }} />
//         </>
//       )}

//       {/* Subtle noise texture */}
//       <div
//         className={`absolute inset-0 z-[5] pointer-events-none ${isLight ? 'opacity-[0.025]' : 'opacity-5'}`}
//         style={{ backgroundImage: 'url(/images/hero-noise.svg)', backgroundSize: '8px 8px' }}
//       />

//       {/* Overlays */}
//       {/* Light mode: subtle warm tint — lets video breathe through */}
//       <div
//         className="absolute inset-0 z-[1] pointer-events-none"
//         style={{
//           background: isLight
//             ? 'linear-gradient(160deg, rgba(255,251,235,0.38) 0%, rgba(254,243,199,0.28) 40%, rgba(255,237,213,0.32) 70%, rgba(255,251,235,0.42) 100%)'
//             : 'rgba(0,0,0,0.48)',
//         }}
//       />
//       <div
//         className="absolute inset-0 z-[2] pointer-events-none"
//         style={{
//           background: isLight
//             ? 'linear-gradient(to bottom, rgba(120,53,15,0.08) 0%, rgba(180,83,9,0.04) 50%, rgba(120,53,15,0.14) 100%)'
//             : 'linear-gradient(to bottom, rgba(8,14,31,0.68) 0%, rgba(8,14,31,0.22) 50%, rgba(8,14,31,0.80) 100%)',
//         }}
//       />
//       {/* Gold accent glow — bottom right */}
//       <div
//         className={`absolute bottom-0 right-0 w-[600px] h-[400px] z-[2] pointer-events-none ${isLight ? 'opacity-40' : 'opacity-30'}`}
//         style={{
//           background: isLight
//             ? 'radial-gradient(ellipse at bottom right, rgba(217,119,6,0.25), transparent 70%)'
//             : 'radial-gradient(ellipse at bottom right, rgba(202,138,4,0.35), transparent 70%)',
//         }}
//       />
//       {/* Center radial polish */}
//       <div
//         className="absolute inset-0 z-[3] pointer-events-none"
//         style={{
//           background: isLight
//             ? 'radial-gradient(ellipse 70% 50% at 50% 42%, rgba(255,255,255,0.15), transparent 65%)'
//             : 'radial-gradient(ellipse at center, rgba(0,0,0,0.12), transparent 70%)',
//         }}
//       />
//       {/* Dot grid texture */}
//       <div
//         className={`absolute inset-0 z-[4] pointer-events-none ${isLight ? 'opacity-[0.12]' : 'opacity-35'}`}
//         style={{
//           backgroundImage: isLight
//             ? 'radial-gradient(rgba(146,64,14,0.45) 1px, transparent 1px)'
//             : 'radial-gradient(rgba(202,138,4,0.5) 1px, transparent 1px)',
//           backgroundSize: '40px 40px',
//         }}
//       />

//       {/* Content */}
//       <div
//         ref={heroContentRef}
//         className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 flex flex-col items-center"
//       >
//         <div className="w-full flex flex-col items-center text-center space-y-8">

//           {/* Headline */}
//           <div className="relative">
//             {/* Warm glow behind headline */}
//             <div
//               className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none z-0"
//               style={{
//                 width: '560px',
//                 height: '290px',
//                 background: isLight
//                   ? 'radial-gradient(ellipse, rgba(217,119,6,0.18), transparent 70%)'
//                   : 'radial-gradient(ellipse, rgba(212,175,55,0.15), transparent 70%)',
//                 filter: 'blur(60px)',
//               }}
//             />
//             <h1
//               ref={headlineRef}
//               className="relative z-10 font-serif text-5xl sm:text-6xl lg:text-[5.5rem] font-bold leading-[1.05] tracking-tight max-w-4xl perspective-1000"
//             >
//               <span
//                 className="hero-gsap-line block"
//                 style={{
//                   color: isLight ? '#1C1917' : '#F5D77F',
//                   textShadow: isLight ? '0 2px 12px rgba(120,53,15,0.18)' : '0 2px 24px rgba(245,215,127,0.20)',
//                 }}
//               >
//                 Your Trip...
//               </span>
//               <span
//                 className="hero-gsap-line block italic"
//                 style={{
//                   backgroundImage: isLight
//                     ? 'linear-gradient(135deg, #92400E 0%, #B45309 40%, #D97706 70%, #92400E 100%)'
//                     : 'linear-gradient(135deg, #F5D77F 0%, #CA8A04 45%, #EAB308 80%, #F5D77F 100%)',
//                   WebkitBackgroundClip: 'text',
//                   WebkitTextFillColor: 'transparent',
//                   backgroundClip: 'text',
//                   filter: isLight ? 'drop-shadow(0 2px 6px rgba(180,83,9,0.25))' : 'drop-shadow(0 2px 12px rgba(202,138,4,0.35))',
//                 }}
//               >
//                 Our Responsibility!
//               </span>
//             </h1>
//           </div>

//           {/* Subtitle */}
//           <p
//             ref={subtitleRef}
//             className="text-base sm:text-lg max-w-2xl leading-relaxed font-sans"
//             style={{
//               color: isLight ? '#292524' : 'rgba(240,235,225,0.85)',
//               letterSpacing: '0.01em',
//               fontWeight: 400,
//               textShadow: isLight ? '0 1px 4px rgba(255,251,235,0.8)' : 'none',
//             }}
//           >
//             Executive airport transfers, local Chennai rides, outstation tour packages, and sacred temple pilgrimages — personally coordinated by proprietor{' '}
//             <strong
//               style={{
//                 fontWeight: 700,
//                 color: isLight ? '#92400E' : '#ffffff',
//                 backgroundImage: isLight ? 'linear-gradient(90deg,#92400E,#D97706)' : 'none',
//                 WebkitBackgroundClip: isLight ? 'text' : 'unset',
//                 WebkitTextFillColor: isLight ? 'transparent' : 'inherit',
//                 backgroundClip: isLight ? 'text' : 'unset',
//               }}
//             >
//               S. Ramesh
//             </strong>{' '}with care.
//           </p>

//           {/* Trust pills */}
//           <div ref={pillsRef} className="flex flex-wrap items-center justify-center gap-3">
//             {[
//               { icon: <Award className="w-3.5 h-3.5" />, label: '100% Punctuality', iconColor: isLight ? '#B45309' : '#CA8A04' },
//               { icon: <ShieldCheck className="w-3.5 h-3.5" />, label: 'Verified Cabs', iconColor: isLight ? '#166534' : '#34D399' },
//               { icon: <Sparkles className="w-3.5 h-3.5" />, label: 'Zero Advance Fees', iconColor: isLight ? '#B45309' : '#CA8A04' },
//             ].map(({ icon, label, iconColor }) => (
//               <span
//                 key={label}
//                 className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono backdrop-blur-md transition-all duration-300 hover:scale-105 cursor-default"
//                 style={{
//                   background: isLight
//                     ? 'linear-gradient(135deg, rgba(255,251,235,0.92) 0%, rgba(254,243,199,0.85) 100%)'
//                     : 'rgba(255,255,255,0.08)',
//                   border: isLight
//                     ? '1px solid rgba(180,83,9,0.35)'
//                     : '1px solid rgba(212,175,55,0.30)',
//                   color: isLight ? '#1C1917' : 'rgba(240,235,225,0.92)',
//                   boxShadow: isLight
//                     ? '0 2px 12px rgba(180,83,9,0.12), inset 0 1px 0 rgba(255,255,255,0.9)'
//                     : '0 2px 8px rgba(0,0,0,0.3)',
//                 }}
//               >
//                 <span style={{ color: iconColor }}>{icon}</span>
//                 {label}
//               </span>
//             ))}
//           </div>

//           {/* Booking Card */}
//           <BookingCard />

//           {/* Trust metrics */}
//           <div
//             ref={metricsRef}
//             className="w-full max-w-md pt-7 grid grid-cols-3 gap-6"
//             style={{
//               borderTop: isLight
//                 ? '1px solid rgba(180,83,9,0.25)'
//                 : '1px solid rgba(202,138,4,0.25)',
//             }}
//           >
//             {[
//               { icon: <Award className="w-3.5 h-3.5" />, value: '100%', label: 'Punctuality' },
//               { icon: <Star className="w-3.5 h-3.5 fill-current" />, value: '4.9 / 5.0', label: 'Customer Rating' },
//               { icon: <Clock className="w-3.5 h-3.5" />, value: '24 / 7', label: 'Direct Assistance' },
//             ].map(({ icon, value, label }) => (
//               <div key={label} className="flex flex-col items-center gap-1.5">
//                 <div
//                   className="flex items-center gap-1.5 font-semibold text-lg"
//                   style={{
//                     color: isLight ? '#1C1917' : '#F5D77F',
//                     fontFamily: 'var(--font-serif)',
//                     textShadow: isLight ? '0 1px 4px rgba(255,251,235,0.6)' : 'none',
//                   }}
//                 >
//                   <span style={{ color: isLight ? '#B45309' : '#CA8A04' }}>{icon}</span>
//                   <span>{value}</span>
//                 </div>
//                 <p
//                   className="text-[10px] uppercase tracking-widest font-semibold"
//                   style={{
//                     color: isLight ? '#78350F' : 'rgba(240,235,225,0.55)',
//                     fontFamily: 'var(--font-mono)',
//                   }}
//                 >
//                   {label}
//                 </p>
//               </div>
//             ))}
//           </div>

//         </div>
//       </div>

//       {/* Scroll indicator */}
//       <div className="absolute bottom-7 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 animate-bounce">
//         <span
//           className="text-[9px] font-mono uppercase tracking-[0.2em]"
//           style={{ color: isLight ? '#92400E' : 'rgba(245,215,127,0.60)' }}
//         >
//           Scroll
//         </span>
//         <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{ color: isLight ? '#B45309' : 'rgba(202,138,4,0.75)' }}>
//           <path
//             d="M12 5v14M5 12l7 7 7-7"
//             stroke="currentColor"
//             strokeWidth="1.5"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           />
//         </svg>
//       </div>
//     </section>
//   );
// }

'use client';

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import GlobalVideoBackground from '@/components/home/GlobalVideoBackground';
import BookingCard from '@/components/ui/BookingCard';
import { ShieldCheck, Star, Award, Clock, Sparkles } from 'lucide-react';
import { useScrollStoryController } from '@/components/animation/ScrollStoryController';
import { useTheme } from '@/components/ThemeProvider';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HeroSection() {
  const { theme } = useTheme();
  const isLight = theme === 'light';
  const { heroSectionRef, heroContentRef } = useScrollStoryController();
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const pillsRef = useRef<HTMLDivElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroSectionRef.current) return;
    if (theme === 'light') return;

    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // 1. Headline GSAP 3D Entrance Reveal
      if (headlineRef.current) {
        const headlineLines = headlineRef.current.querySelectorAll('.hero-gsap-line');
        tl.fromTo(
          headlineLines,
          { opacity: 0, y: 45, rotateX: 30, filter: 'blur(8px)' },
          { opacity: 1, y: 0, rotateX: 0, filter: 'blur(0px)', stagger: 0.18, duration: 1.1 }
        );
      }

      // 2. Subtitle GSAP Fade Up
      if (subtitleRef.current) {
        tl.fromTo(
          subtitleRef.current,
          { opacity: 0, y: 25, filter: 'blur(6px)' },
          { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.8 },
          '-=0.6'
        );
      }

      // 3. Trust Pills GSAP Stagger
      if (pillsRef.current) {
        tl.fromTo(
          pillsRef.current.children,
          { opacity: 0, y: 20, scale: 0.92 },
          { opacity: 1, y: 0, scale: 1, stagger: 0.1, duration: 0.7 },
          '-=0.5'
        );
      }

      // 4. Trust Metrics GSAP Stagger
      if (metricsRef.current) {
        tl.fromTo(
          metricsRef.current.children,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, stagger: 0.12, duration: 0.7 },
          '-=0.4'
        );
      }
    }, heroSectionRef);

    return () => ctx.revert();
  }, [heroSectionRef, theme]);

  return (
    <section
      ref={heroSectionRef}
      className="relative w-full min-h-[100svh] flex flex-col items-center justify-center overflow-hidden border-none"
    >
      {/* Video Background bounded strictly inside Hero Section */}
      <GlobalVideoBackground />

      {/* Ambient visual accents */}
      {!isLight && (
        <>
          <div className="ambient-gold" style={{ top: '-20%', left: '60%' }} />
          <div className="ambient-navy" style={{ bottom: '-30%', right: '-10%' }} />
        </>
      )}

      {/* Subtle noise texture */}
      <div
        className={`absolute inset-0 z-[5] pointer-events-none ${isLight ? 'opacity-[0.025]' : 'opacity-5'}`}
        style={{ backgroundImage: 'url(/images/hero-noise.svg)', backgroundSize: '8px 8px' }}
      />

      {/* Overlays */}
      {/* Light mode: subtle warm tint — lets video breathe through */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: isLight
            ? 'linear-gradient(160deg, rgba(255,251,235,0.38) 0%, rgba(254,243,199,0.28) 40%, rgba(255,237,213,0.32) 70%, rgba(255,251,235,0.42) 100%)'
            : 'rgba(0,0,0,0.48)',
        }}
      />
      <div
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          background: isLight
            ? 'linear-gradient(to bottom, rgba(120,53,15,0.08) 0%, rgba(180,83,9,0.04) 50%, rgba(120,53,15,0.14) 100%)'
            : 'linear-gradient(to bottom, rgba(8,14,31,0.68) 0%, rgba(8,14,31,0.22) 50%, rgba(8,14,31,0.80) 100%)',
        }}
      />
      {/* Gold accent glow — bottom right */}
      <div
        className={`absolute bottom-0 right-0 w-[600px] h-[400px] z-[2] pointer-events-none ${isLight ? 'opacity-40' : 'opacity-30'}`}
        style={{
          background: isLight
            ? 'radial-gradient(ellipse at bottom right, rgba(217,119,6,0.25), transparent 70%)'
            : 'radial-gradient(ellipse at bottom right, rgba(202,138,4,0.35), transparent 70%)',
        }}
      />
      {/* Center radial polish */}
      <div
        className="absolute inset-0 z-[3] pointer-events-none"
        style={{
          background: isLight
            ? 'radial-gradient(ellipse 70% 50% at 50% 42%, rgba(255,255,255,0.15), transparent 65%)'
            : 'radial-gradient(ellipse at center, rgba(0,0,0,0.12), transparent 70%)',
        }}
      />
      {/* Dot grid texture */}
      <div
        className={`absolute inset-0 z-[4] pointer-events-none ${isLight ? 'opacity-[0.12]' : 'opacity-35'}`}
        style={{
          backgroundImage: isLight
            ? 'radial-gradient(rgba(146,64,14,0.45) 1px, transparent 1px)'
            : 'radial-gradient(rgba(202,138,4,0.5) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Content */}
      <div
        ref={heroContentRef}
        className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 flex flex-col items-center"
      >
        <div className="w-full flex flex-col items-center text-center space-y-8">

          {/* Headline */}
          <div className="relative">
            {/* Warm glow behind headline */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none z-0"
              style={{
                width: '560px',
                height: '290px',
                background: isLight
                  ? 'radial-gradient(ellipse, rgba(217,119,6,0.18), transparent 70%)'
                  : 'radial-gradient(ellipse, rgba(212,175,55,0.15), transparent 70%)',
                filter: 'blur(60px)',
              }}
            />
            <h1
              ref={headlineRef}
              className="relative z-10 font-serif text-5xl sm:text-6xl lg:text-[5.5rem] font-bold leading-[1.05] tracking-tight max-w-4xl perspective-1000"
            >
              <span
                className="hero-gsap-line block"
                style={{
                  color: isLight ? '#1C1917' : '#F5D77F',
                  textShadow: isLight ? '0 2px 12px rgba(120,53,15,0.18)' : '0 2px 24px rgba(245,215,127,0.20)',
                }}
              >
                Your Trip...
              </span>
              <span
                className="hero-gsap-line block italic"
                style={{
                  backgroundImage: isLight
                    ? 'linear-gradient(135deg, #92400E 0%, #B45309 40%, #D97706 70%, #92400E 100%)'
                    : 'linear-gradient(135deg, #F5D77F 0%, #CA8A04 45%, #EAB308 80%, #F5D77F 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  filter: isLight ? 'drop-shadow(0 2px 6px rgba(180,83,9,0.25))' : 'drop-shadow(0 2px 12px rgba(202,138,4,0.35))',
                }}
              >
                Our Responsibility!
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <p
            ref={subtitleRef}
            className="text-base sm:text-lg max-w-2xl leading-relaxed font-sans"
            style={{
              color: isLight ? '#1C1917' : 'rgba(240,235,225,0.85)',
              letterSpacing: '0.01em',
              fontWeight: isLight ? 500 : 400,
              textShadow: isLight
                ? '0 1px 3px rgba(255,255,255,0.95), 0 0 12px rgba(255,255,255,0.7)'
                : 'none',
            }}
          >
            Executive airport transfers, local Chennai rides, outstation tour packages, and sacred temple pilgrimages — personally coordinated by proprietor{' '}
            <strong
              style={{
                fontWeight: 700,
                color: isLight ? '#92400E' : '#ffffff',
                backgroundImage: isLight ? 'linear-gradient(90deg,#78350F,#B45309)' : 'none',
                WebkitBackgroundClip: isLight ? 'text' : 'unset',
                WebkitTextFillColor: isLight ? 'transparent' : 'inherit',
                backgroundClip: isLight ? 'text' : 'unset',
                filter: isLight ? 'drop-shadow(0 1px 2px rgba(255,255,255,0.9))' : 'none',
              }}
            >
              S. Ramesh
            </strong>{' '}with care.
          </p>

          {/* Trust pills */}
          <div ref={pillsRef} className="flex flex-wrap items-center justify-center gap-3">
            {[
              { icon: <Award className="w-3.5 h-3.5" />, label: '100% Punctuality', iconColor: isLight ? '#B45309' : '#CA8A04' },
              { icon: <ShieldCheck className="w-3.5 h-3.5" />, label: 'Verified Cabs', iconColor: isLight ? '#166534' : '#34D399' },
              { icon: <Sparkles className="w-3.5 h-3.5" />, label: 'Zero Advance Fees', iconColor: isLight ? '#B45309' : '#CA8A04' },
            ].map(({ icon, label, iconColor }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono backdrop-blur-md transition-all duration-300 hover:scale-105 cursor-default"
                style={{
                  background: isLight
                    ? 'linear-gradient(135deg, rgba(255,251,235,0.92) 0%, rgba(254,243,199,0.85) 100%)'
                    : 'rgba(255,255,255,0.08)',
                  border: isLight
                    ? '1px solid rgba(180,83,9,0.35)'
                    : '1px solid rgba(212,175,55,0.30)',
                  color: isLight ? '#1C1917' : 'rgba(240,235,225,0.92)',
                  boxShadow: isLight
                    ? '0 2px 12px rgba(180,83,9,0.12), inset 0 1px 0 rgba(255,255,255,0.9)'
                    : '0 2px 8px rgba(0,0,0,0.3)',
                }}
              >
                <span style={{ color: iconColor }}>{icon}</span>
                {label}
              </span>
            ))}
          </div>

          {/* Booking Card */}
          <BookingCard />

          {/* Trust metrics */}
          <div
            ref={metricsRef}
            className="w-full max-w-md pt-7 grid grid-cols-3 gap-6"
            style={{
              borderTop: isLight
                ? '1px solid rgba(180,83,9,0.25)'
                : '1px solid rgba(202,138,4,0.25)',
            }}
          >
            {[
              { icon: <Award className="w-3.5 h-3.5" />, value: '100%', label: 'Punctuality' },
              { icon: <Star className="w-3.5 h-3.5 fill-current" />, value: '4.9 / 5.0', label: 'Customer Rating' },
              { icon: <Clock className="w-3.5 h-3.5" />, value: '24 / 7', label: 'Direct Assistance' },
            ].map(({ icon, value, label }) => (
              <div key={label} className="flex flex-col items-center gap-1.5">
                <div
                  className="flex items-center gap-1.5 font-semibold text-lg"
                  style={{
                    color: isLight ? '#1C1917' : '#F5D77F',
                    fontFamily: 'var(--font-serif)',
                    textShadow: isLight
                      ? '0 1px 3px rgba(255,255,255,0.95), 0 0 10px rgba(255,255,255,0.6)'
                      : 'none',
                  }}
                >
                  <span style={{ color: isLight ? '#B45309' : '#CA8A04' }}>{icon}</span>
                  <span>{value}</span>
                </div>
                <p
                  className="text-[10px] uppercase tracking-widest font-semibold"
                  style={{
                    color: isLight ? '#78350F' : 'rgba(240,235,225,0.55)',
                    fontFamily: 'var(--font-mono)',
                  }}
                >
                  {label}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 animate-bounce">
        <span
          className="text-[9px] font-mono uppercase tracking-[0.2em]"
          style={{ color: isLight ? '#92400E' : 'rgba(245,215,127,0.60)' }}
        >
          Scroll
        </span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{ color: isLight ? '#B45309' : 'rgba(202,138,4,0.75)' }}>
          <path
            d="M12 5v14M5 12l7 7 7-7"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
}