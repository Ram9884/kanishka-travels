'use client';

import React, { useEffect, useRef } from 'react';
import { animate } from 'animejs';

export default function FluidCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Particle Array
    const particleCount = 45;
    const particles: Array<{
      x: number;
      y: number;
      radius: number;
      opacity: number;
      driftX: number;
      driftY: number;
    }> = [];

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2 + 0.8,
        opacity: Math.random() * 0.4 + 0.15,
        driftX: (Math.random() - 0.5) * 0.35,
        driftY: (Math.random() - 0.5) * 0.35,
      });
    }

    // Resize Handler
    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Anime.js loop controller object
    const animeController = {
      progress: 0,
    };

    // Slow organic looping animation using anime.js v4
    const animeAnimation = animate(animeController, {
      progress: [0, 100],
      duration: 12000,
      loop: true,
      ease: 'linear',
      onUpdate: () => {
        if (!ctx) return;
        ctx.clearRect(0, 0, width, height);

        // Render particles
        particles.forEach((p) => {
          // Drifting movement
          p.x += p.driftX;
          p.y += p.driftY;

          // Boundary wrapping
          if (p.x < 0) p.x = width;
          if (p.x > width) p.x = 0;
          if (p.y < 0) p.y = height;
          if (p.y > height) p.y = 0;

          // Drawing glowing gold particles
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(212, 175, 55, ${p.opacity})`;
          ctx.shadowBlur = 4;
          ctx.shadowColor = '#D4AF37';
          ctx.fill();
        });
      },
    });

    return () => {
      window.removeEventListener('resize', handleResize);
      animeAnimation.pause();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[1] opacity-35"
      aria-hidden="true"
    />
  );
}
