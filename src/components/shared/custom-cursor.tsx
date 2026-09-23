"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { usePathname } from "next/navigation";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    // Disable on touch devices or if user prefers reduced motion
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    
    if (isTouchDevice || prefersReducedMotion) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    // Make the cursor follow the mouse using GSAP quickTo for performance
    const xTo = gsap.quickTo(cursor, "x", { duration: 0.2, ease: "power3" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.2, ease: "power3" });

    let isHovering = false;

    const handleMouseMove = (e: MouseEvent) => {
      // Offset by half the width/height to center the cursor
      xTo(e.clientX - 16);
      yTo(e.clientY - 16);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if hovering over a clickable element
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("cursor-pointer")
      ) {
        if (!isHovering) {
          isHovering = true;
          gsap.to(cursor, { scale: 2, backgroundColor: "rgba(var(--primary), 0.1)", border: "1px solid rgba(var(--primary), 1)", duration: 0.3, ease: "power2.out" });
        }
      } else {
        if (isHovering) {
          isHovering = false;
          gsap.to(cursor, { scale: 1, backgroundColor: "transparent", border: "2px solid rgba(var(--primary), 1)", duration: 0.3, ease: "power2.out" });
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    // Initial state
    gsap.set(cursor, { x: window.innerWidth / 2, y: window.innerHeight / 2, opacity: 1 });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [pathname]); // Re-bind if page changes significantly

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-primary pointer-events-none z-9999 opacity-0 mix-blend-difference hidden md:block"
      style={{
        transform: "translate(-50%, -50%)"
      }}
    />
  );
}
