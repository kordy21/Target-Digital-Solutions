"use client";

import React, { useEffect, useRef, useState } from "react";
import LogoSvg from "@/assets/logo.svg";
import { useTheme } from "next-themes";

interface InteractiveParticlesProps {
  text?: string;
  mode?: "scatter-to-shape" | "group-to-scatter";
  particleCount?: number;
  interactionRadius?: number;
  className?: string;
  particleColor?: string;
}

class Particle {
  x: number;
  y: number;
  ox: number; // Origin X (Scatter position)
  oy: number; // Origin Y (Scatter position)
  tx: number; // Target X (Shape position)
  ty: number; // Target Y (Shape position)
  vx: number;
  vy: number;
  size: number;
  friction: number;
  ease: number;
  angle: number; // Random rotation

  constructor(x: number, y: number, tx: number, ty: number) {
    this.x = x;
    this.y = y;
    this.ox = x;
    this.oy = y;
    this.tx = tx;
    this.ty = ty;
    this.vx = 0;
    this.vy = 0;
    this.size = Math.random() * 2 + 3; // slightly larger for icons
    this.friction = Math.random() * 0.04 + 0.92;
    this.ease = Math.random() * 0.05 + 0.05;
    this.angle = Math.random() * Math.PI * 2;
  }
}

export function InteractiveParticles({
  text = "؟",
  mode = "scatter-to-shape",
  particleCount = 50,
  interactionRadius = 150,
  className = "",
  particleColor = "rgba(255, 255, 255, 0.8)",
}: InteractiveParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: -9999, y: -9999, active: false });
  const particlesRef = useRef<Particle[]>([]);
  const frameRef = useRef<number>(0);
  const isInViewRef = useRef<boolean>(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    
    // Defer the initial check to avoid synchronous setState warning
    const timer = setTimeout(() => {
      setPrefersReducedMotion(mediaQuery.matches);
    }, 0);
    
    const handleMotionChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handleMotionChange);
    
    return () => {
      clearTimeout(timer);
      mediaQuery.removeEventListener("change", handleMotionChange);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container || prefersReducedMotion) return;

    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let particles: Particle[] = [];

    // Resolve CSS variables for colors if needed
    const resolveColor = (colorStr: string) => {
      if (colorStr.startsWith("var(")) {
        const varName = colorStr.slice(4, -1).trim();
        return getComputedStyle(document.documentElement).getPropertyValue(varName).trim();
      }
      return colorStr;
    };
    const resolvedColor = resolveColor(particleColor);

    let tintedLogoCanvas: HTMLCanvasElement | null = null;
    let logoLoaded = false;
    
    const logoImg = new window.Image();
    
    const setupTintedCanvas = () => {
      const tCanvas = document.createElement("canvas");
      tCanvas.width = 48;
      tCanvas.height = 72;
      const tCtx = tCanvas.getContext("2d", { willReadFrequently: true });
      if (tCtx) {
        // Design system handles dark mode logo by inverting it to white
        if (resolvedTheme === "dark") {
          tCtx.filter = "brightness(0) invert(1)";
        }
        tCtx.drawImage(logoImg, 0, 0, 48, 72);
      }
      tintedLogoCanvas = tCanvas;
      logoLoaded = true;
    };

    logoImg.onload = setupTintedCanvas;
    // Next.js static imports usually have .src for URLs
    logoImg.src = typeof LogoSvg === "string" ? LogoSvg : (LogoSvg as { src: string }).src;
    
    if (logoImg.complete && logoImg.naturalWidth !== 0) {
      setupTintedCanvas();
    }

    // --- Core Logic ---
    const init = () => {
      width = container.clientWidth;
      height = container.clientHeight;
      if (width === 0 || height === 0) return;
      canvas.width = width;
      canvas.height = height;
      
      const targetPoints = getShapePoints(text, width, height);
      particles = [];

      // Determine actual particle count (reduce on mobile or if points are scarce)
      // Hard cap the max particles for performance
      const MAX_PARTICLES = 30;
      const actualRequestedCount = Math.min(particleCount, MAX_PARTICLES);
      const isMobile = window.innerWidth < 768;
      const count = isMobile ? Math.min(Math.floor(actualRequestedCount / 2), targetPoints.length) : Math.min(actualRequestedCount, targetPoints.length);

      for (let i = 0; i < count; i++) {
        const point = targetPoints[i];
        if (!point) continue;
        
        // Random scatter position
        const rx = Math.random() * width;
        const ry = Math.random() * height;

        if (mode === "scatter-to-shape") {
          // Starts scattered, target is shape
          particles.push(new Particle(rx, ry, point.x, point.y));
        } else {
          // Starts in shape, target is shape (will be repelled)
          const p = new Particle(point.x, point.y, point.x, point.y);
          p.ox = point.x;
          p.oy = point.y;
          particles.push(p);
        }
      }
      particlesRef.current = particles;
    };

    const getShapePoints = (txt: string, w: number, h: number) => {
      if (w === 0 || h === 0) return [];
      // Offscreen canvas to render text and extract pixel data
      const offCanvas = document.createElement("canvas");
      const offCtx = offCanvas.getContext("2d", { willReadFrequently: true });
      if (!offCtx) return [];
      
      offCanvas.width = w;
      offCanvas.height = h;

      // Draw text bold and large
      const fontSize = Math.min(w, h) * 0.5;
      offCtx.font = `900 ${fontSize}px sans-serif`;
      offCtx.fillStyle = "white";
      offCtx.textAlign = "center";
      offCtx.textBaseline = "middle";
      offCtx.fillText(txt, w / 2, h / 2);

      const imgData = offCtx.getImageData(0, 0, w, h).data;
      const points = [];
      const isMobile = window.innerWidth < 768;
      const step = isMobile ? 8 : 4; // Sample density

      for (let y = 0; y < h; y += step) {
        for (let x = 0; x < w; x += step) {
          const index = (y * w + x) * 4;
          const alpha = imgData[index + 3];
          if (alpha > 128) {
            points.push({ x, y });
          }
        }
      }

      // Shuffle points to randomly assign them to particles
      for (let i = points.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [points[i], points[j]] = [points[j], points[i]];
      }
      
      return points;
    };

    const animate = () => {
      if (!ctx) return;
      if (!isInViewRef.current) {
        frameRef.current = 0;
        return;
      }
      ctx.clearRect(0, 0, width, height);

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const isMobile = window.innerWidth < 768;
      const isMouseActive = mouseRef.current.active && !isMobile;

      particlesRef.current.forEach((p) => {
        // Calculate distance to mouse
        const dx = mx - p.x;
        const dy = my - p.y;
        const distSq = dx * dx + dy * dy;
        const radiusSq = interactionRadius * interactionRadius;

        if (mode === "scatter-to-shape") {
          // A: If mouse is close, move to target shape (tx, ty), else idle scatter (ox, oy)
          let targetX = p.ox;
          let targetY = p.oy;
          
          if (isMouseActive && distSq < radiusSq) {
            // Mouse is near, lerp to shape
            targetX = p.tx;
            targetY = p.ty;
          }

          // Gentle idle drift if not active
          if (!isMouseActive || distSq >= radiusSq) {
            targetX += Math.sin(Date.now() * 0.001 + p.tx) * 10;
            targetY += Math.cos(Date.now() * 0.001 + p.ty) * 10;
          }

          p.x += (targetX - p.x) * p.ease;
          p.y += (targetY - p.y) * p.ease;

        } else if (mode === "group-to-scatter") {
          // B: Start in shape (tx, ty). If mouse is close, repel.
          if (isMouseActive && distSq < radiusSq) {
            const dist = Math.sqrt(distSq);
            const force = (interactionRadius - dist) / interactionRadius;
            const angle = Math.atan2(dy, dx);
            
            p.vx -= Math.cos(angle) * force * 2;
            p.vy -= Math.sin(angle) * force * 2;
          }

          // Spring back to shape
          p.vx += (p.tx - p.x) * p.ease;
          p.vy += (p.ty - p.y) * p.ease;

          p.vx *= p.friction;
          p.vy *= p.friction;

          p.x += p.vx;
          p.y += p.vy;
        }

        // Draw particle as logo
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.angle);
        
        // Increased scale to make particles bigger
        const scale = p.size / 10; 
        ctx.scale(scale, scale);
        
        if (tintedLogoCanvas && logoLoaded) {
          ctx.drawImage(tintedLogoCanvas, -24, -36);
        } else {
          // Fallback while loading
          ctx.beginPath();
          ctx.arc(0, 0, 24, 0, Math.PI * 2);
          ctx.fillStyle = resolvedColor || particleColor;
          ctx.fill();
        }
        
        ctx.restore();
      });

      frameRef.current = requestAnimationFrame(animate);
    };

    // Observers & Events
    const intersectionObserver = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        isInViewRef.current = true;
        if (!frameRef.current) {
          animate();
        }
      } else {
        isInViewRef.current = false;
      }
    });
    intersectionObserver.observe(container);

    let resizeTimer: ReturnType<typeof setTimeout>;
    const resizeObserver = new ResizeObserver(() => {
      // Debounce resize
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        init();
      }, 200);
    });
    resizeObserver.observe(container);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        active: true,
      };
    };
    
    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    init();
    animate();

    return () => {
      clearTimeout(resizeTimer);
      cancelAnimationFrame(frameRef.current);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [text, mode, particleCount, interactionRadius, particleColor, prefersReducedMotion, resolvedTheme]);

  if (prefersReducedMotion) {
    return null; // Don't render complex physics for users requesting reduced motion
  }

  return (
    <div ref={containerRef} className={`w-full h-full relative ${className}`}>
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
}
