'use client';

import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
}

export default function ThreeDBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = canvas.offsetWidth;
    let height = canvas.offsetHeight;
    let pixelRatio = window.devicePixelRatio || 1;
    let pointerX = 0;
    let pointerY = 0;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      pixelRatio = window.devicePixelRatio || 1;
      canvas.width = Math.max(1, Math.floor(width * pixelRatio));
      canvas.height = Math.max(1, Math.floor(height * pixelRatio));
      ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointerX = (e.clientX - rect.left - width / 2) * 0.018;
      pointerY = (e.clientY - rect.top - height / 2) * 0.018;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const particleCount = prefersReducedMotion ? 18 : 52;
    const particles: Particle[] = [];
    const colors = ['rgba(212, 175, 55, ', 'rgba(30, 58, 138, ', 'rgba(161, 98, 7, '];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: (Math.random() - 0.5) * width,
        y: (Math.random() - 0.5) * height,
        z: Math.random() * 500 + 100,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        radius: Math.random() * 2 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    const routePaths = [
      { y: 0.28, amp: 42, speed: 0.00032, color: 'rgba(245, 215, 127, 0.44)' },
      { y: 0.52, amp: 58, speed: 0.00022, color: 'rgba(96, 165, 250, 0.24)' },
      { y: 0.72, amp: 34, speed: 0.00028, color: 'rgba(212, 175, 55, 0.24)' },
    ];

    const drawRoute = (time: number, route: (typeof routePaths)[number]) => {
      ctx.beginPath();
      for (let x = -40; x <= width + 40; x += 18) {
        const wave = Math.sin(x * 0.012 + time * route.speed) * route.amp;
        const y = height * route.y + wave + pointerY;
        if (x === -40) {
          ctx.moveTo(x + pointerX, y);
        } else {
          ctx.lineTo(x + pointerX, y);
        }
      }
      ctx.strokeStyle = route.color;
      ctx.lineWidth = 1.4;
      ctx.shadowBlur = 18;
      ctx.shadowColor = '#D4AF37';
      ctx.stroke();

      const progress = ((time * route.speed * 120) % (width + 160)) - 80;
      const sparkleY = height * route.y + Math.sin(progress * 0.012 + time * route.speed) * route.amp + pointerY;
      const gradient = ctx.createRadialGradient(progress + pointerX, sparkleY, 0, progress + pointerX, sparkleY, 18);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 0.95)');
      gradient.addColorStop(0.35, 'rgba(245, 215, 127, 0.45)');
      gradient.addColorStop(1, 'rgba(245, 215, 127, 0)');
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(progress + pointerX, sparkleY, 18, 0, Math.PI * 2);
      ctx.fill();
    };

    const render = (time = 0) => {
      ctx.clearRect(0, 0, width, height);

      const sweep = ctx.createLinearGradient(0, 0, width, height);
      sweep.addColorStop(0, 'rgba(7, 11, 24, 0.08)');
      sweep.addColorStop(0.5, 'rgba(30, 58, 138, 0.16)');
      sweep.addColorStop(1, 'rgba(161, 98, 7, 0.12)');
      ctx.fillStyle = sweep;
      ctx.fillRect(0, 0, width, height);

      routePaths.forEach((route) => drawRoute(time, route));

      const centerX = width / 2 + pointerX;
      const centerY = height / 2 + pointerY;

      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        if (!prefersReducedMotion) {
          p1.x += p1.vx;
          p1.y += p1.vy;
        }

        if (p1.x < -width / 2) p1.x = width / 2;
        if (p1.x > width / 2) p1.x = -width / 2;
        if (p1.y < -height / 2) p1.y = height / 2;
        if (p1.y > height / 2) p1.y = -height / 2;

        const scale1 = 400 / (400 + p1.z);
        const x1 = centerX + p1.x * scale1;
        const y1 = centerY + p1.y * scale1;

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 160) {
            const scale2 = 400 / (400 + p2.z);
            const x2 = centerX + p2.x * scale2;
            const y2 = centerY + p2.y * scale2;
            const alpha = (1 - dist / 160) * 0.18;

            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.strokeStyle = `rgba(212, 175, 55, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        const alpha = Math.min(1, scale1 * 0.9);
        ctx.beginPath();
        ctx.arc(x1, y1, p1.radius * scale1 * 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `${p1.color}${alpha})`;
        ctx.shadowBlur = 10;
        ctx.shadowColor = '#D4AF37';
        ctx.fill();
      }

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(7,11,24,0.94)_0%,rgba(12,20,44,0.78)_38%,rgba(7,11,24,0.94)_100%)]" />
      <div className="hero-cinematic-sheen absolute inset-0 opacity-70" />
      <canvas ref={canvasRef} className="relative block h-full w-full opacity-80" aria-hidden="true" />
    </div>
  );
}
