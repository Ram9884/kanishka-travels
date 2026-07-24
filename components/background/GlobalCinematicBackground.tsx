'use client';

import React, { useEffect, useRef } from 'react';
import { useTheme } from '@/components/ThemeProvider';

interface Particle {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  radius: number;
  colorDark: string;
  colorLight: string;
}

export default function GlobalCinematicBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  const themeRef = useRef(theme);

  useEffect(() => {
    themeRef.current = theme;
  }, [theme]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let pointerX = 0;
    let pointerY = 0;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      pointerX = (e.clientX - width / 2) * 0.015;
      pointerY = (e.clientY - height / 2) * 0.015;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Create 45 ambient dust particles
    const particleCount = prefersReduced ? 15 : 42;
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: (Math.random() - 0.5) * width * 1.2,
        y: (Math.random() - 0.5) * height * 1.2,
        z: Math.random() * 400 + 100,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2 + 1,
        colorDark: Math.random() > 0.4 ? 'rgba(212, 175, 55, ' : 'rgba(96, 165, 250, ',
        colorLight: Math.random() > 0.4 ? 'rgba(184, 134, 11, ' : 'rgba(59, 130, 246, ',
      });
    }

    // 3 Highway Route Waves
    const routes = [
      { yRatio: 0.25, amp: 35, speed: 0.00025, darkColor: 'rgba(245, 215, 127, 0.22)', lightColor: 'rgba(184, 134, 11, 0.20)' },
      { yRatio: 0.55, amp: 50, speed: 0.00018, darkColor: 'rgba(96, 165, 250, 0.15)', lightColor: 'rgba(59, 130, 246, 0.14)' },
      { yRatio: 0.80, amp: 30, speed: 0.00022, darkColor: 'rgba(212, 175, 55, 0.18)', lightColor: 'rgba(184, 134, 11, 0.16)' },
    ];

    const render = (time = 0) => {
      const isLight = themeRef.current === 'light';
      ctx.clearRect(0, 0, width, height);

      // Base background color
      ctx.fillStyle = isLight ? '#FFFDF8' : '#0B0B0D';
      ctx.fillRect(0, 0, width, height);

      // Radial ambient glow in top-right & bottom-left
      const radGrad1 = ctx.createRadialGradient(
        width * 0.8 + pointerX * 2, height * 0.2 + pointerY * 2, 0,
        width * 0.8 + pointerX * 2, height * 0.2 + pointerY * 2, width * 0.5
      );
      if (isLight) {
        radGrad1.addColorStop(0, 'rgba(212, 175, 55, 0.08)');
        radGrad1.addColorStop(1, 'rgba(255, 253, 248, 0)');
      } else {
        radGrad1.addColorStop(0, 'rgba(212, 175, 55, 0.07)');
        radGrad1.addColorStop(1, 'rgba(11, 11, 13, 0)');
      }
      ctx.fillStyle = radGrad1;
      ctx.fillRect(0, 0, width, height);

      // Draw Highway Route Waves
      routes.forEach((r) => {
        ctx.beginPath();
        for (let x = -20; x <= width + 20; x += 15) {
          const wave = Math.sin(x * 0.008 + time * r.speed) * r.amp;
          const y = height * r.yRatio + wave + pointerY * 0.5;
          if (x === -20) ctx.moveTo(x + pointerX * 0.5, y);
          else ctx.lineTo(x + pointerX * 0.5, y);
        }
        ctx.strokeStyle = isLight ? r.lightColor : r.darkColor;
        ctx.lineWidth = 1.2;
        ctx.stroke();

        // Traveling sparkle along wave
        const progress = ((time * r.speed * 100) % (width + 120)) - 60;
        const sparkleY = height * r.yRatio + Math.sin(progress * 0.008 + time * r.speed) * r.amp + pointerY * 0.5;
        const sGrad = ctx.createRadialGradient(progress, sparkleY, 0, progress, sparkleY, 14);
        sGrad.addColorStop(0, isLight ? 'rgba(184, 134, 11, 0.7)' : 'rgba(245, 215, 127, 0.8)');
        sGrad.addColorStop(1, 'rgba(245, 215, 127, 0)');
        ctx.fillStyle = sGrad;
        ctx.beginPath();
        ctx.arc(progress, sparkleY, 14, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw particles & web lines
      const centerX = width / 2 + pointerX;
      const centerY = height / 2 + pointerY;

      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        if (!prefersReduced) {
          p1.x += p1.vx;
          p1.y += p1.vy;
        }

        if (p1.x < -width / 2) p1.x = width / 2;
        if (p1.x > width / 2) p1.x = -width / 2;
        if (p1.y < -height / 2) p1.y = height / 2;
        if (p1.y > height / 2) p1.y = -height / 2;

        const scale = 350 / (350 + p1.z);
        const x1 = centerX + p1.x * scale;
        const y1 = centerY + p1.y * scale;

        // Draw connecting lines between nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 140) {
            const scale2 = 350 / (350 + p2.z);
            const x2 = centerX + p2.x * scale2;
            const y2 = centerY + p2.y * scale2;
            const alpha = (1 - dist / 140) * (isLight ? 0.12 : 0.15);

            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.strokeStyle = isLight
              ? `rgba(184, 134, 11, ${alpha})`
              : `rgba(212, 175, 55, ${alpha})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }

        // Draw particle dot
        const colorBase = isLight ? p1.colorLight : p1.colorDark;
        ctx.beginPath();
        ctx.arc(x1, y1, p1.radius * scale * 1.4, 0, Math.PI * 2);
        ctx.fillStyle = `${colorBase}${scale * 0.85})`;
        ctx.fill();
      }

      if (!prefersReduced) {
        animId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <canvas ref={canvasRef} className="block w-full h-full" aria-hidden="true" />
    </div>
  );
}
