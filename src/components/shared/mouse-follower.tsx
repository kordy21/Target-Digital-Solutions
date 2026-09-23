"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function MouseFollower() {
  const [isVisible, setIsVisible] = useState(false);

  // Raw mouse coordinates
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Spring configuration for the outer ring (slower, floating effect)
  const outerSpringConfig = { damping: 25, stiffness: 120, mass: 0.5 };
  const outerX = useSpring(mouseX, outerSpringConfig);
  const outerY = useSpring(mouseY, outerSpringConfig);

  // Spring configuration for the inner dot (fast, snappy effect)
  const innerSpringConfig = { damping: 20, stiffness: 300, mass: 0.1 };
  const innerX = useSpring(mouseX, innerSpringConfig);
  const innerY = useSpring(mouseY, innerSpringConfig);

  useEffect(() => {
    // Hide custom cursor on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;
    
    // Defer state update to avoid cascading render warning
    const timerId = setTimeout(() => setIsVisible(true), 0);

    const updateMousePosition = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      clearTimeout(timerId);
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, [mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 rounded-full border border-primary/40 shadow-[0_0_10px_rgba(var(--primary),0.2)] pointer-events-none z-9999"
        style={{
          x: outerX,
          y: outerY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
      
      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-primary pointer-events-none z-9999"
        style={{
          x: innerX,
          y: innerY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </>
  );
}
