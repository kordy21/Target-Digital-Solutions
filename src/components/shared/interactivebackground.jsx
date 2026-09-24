'use client';

import React, { useEffect, useState, useCallback, useMemo } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { motion, useMotionValue, useSpring } from 'framer-motion';

/**
 * InteractiveBackground
 * ----------------------------------------------------------------------
 * Combines:
 *  1. A dark-blue tsParticles background with a "repulse" hover effect.
 *  2. A custom hollow-yellow-circle cursor that smoothly follows the
 *     mouse using framer-motion springs.
 *
 * Usage: drop <InteractiveBackground /> once, near the root of your page
 * (e.g. in app/layout.tsx or a top-level page component). It renders a
 * fixed, full-screen background layer + the custom cursor overlay.
 * ----------------------------------------------------------------------
 */
export default function InteractiveBackground() {
  const [particlesReady, setParticlesReady] = useState(false);

  // ---- 1. Init the tsParticles engine (once) ----------------------------
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // loadSlim gives us the interactivity (hover/repulse) + basic shapes
      // without pulling in the full particle preset bundle.
      await loadSlim(engine);
    }).then(() => {
      setParticlesReady(true);
    });
  }, []);

  const particlesLoaded = useCallback(async () => {
    // Optional callback fired once the particles container is ready.
  }, []);

  // ---- Particle configuration -------------------------------------------
  const options = useMemo(
    () => ({
      background: {
        color: {
          value: '#0B132B', // dark blue background
        },
      },
      fpsLimit: 120,
      fullScreen: {
        enable: false, // we control sizing via the wrapping <div>
      },
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: 'repulse',
          },
          onClick: {
            enable: false,
          },
          resize: true,
        },
        modes: {
          repulse: {
            distance: 120, // radius of the repulse circle
            duration: 0.4, // how long particles take to "settle" back
            factor: 100,
            speed: 1,
            easing: 'ease-out-quad',
          },
        },
      },
      particles: {
        color: {
          value: '#ffffff',
        },
        links: {
          enable: false, // static dots only, no connecting lines
        },
        move: {
          enable: true,
          speed: 0.3, // very slow drift so dots feel "static"
          direction: 'none',
          random: true,
          straight: false,
          outModes: {
            default: 'out',
          },
        },
        number: {
          value: 90,
          density: {
            enable: true,
            area: 900,
          },
        },
        opacity: {
          value: { min: 0.2, max: 0.6 },
        },
        shape: {
          type: 'circle',
        },
        size: {
          value: { min: 1, max: 2.5 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  return (
    <>
      {/* ---- Particle Background ---- */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 0,
          pointerEvents: 'auto',
        }}
      >
        {particlesReady && (
          <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={options}
            style={{ width: '100%', height: '100%' }}
          />
        )}
      </div>

      {/* ---- Custom Animated Cursor ---- */}
      <CustomCursor />
    </>
  );
}

/**
 * CustomCursor
 * ----------------------------------------------------------------------
 * A hollow yellow ring that tracks the mouse with a spring-based lag,
 * and hides the native browser cursor globally while mounted.
 * ----------------------------------------------------------------------
 */
function CustomCursor() {
  // Raw mouse position
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Spring-smoothed position so the ring "catches up" to the cursor
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  const [isVisible, setIsVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      // Detect if we're hovering a clickable element, to optionally
      // grow the ring (nice extra touch, safe to remove).
      const target = e.target;
      const clickable =
        target instanceof Element &&
        !!target.closest('a, button, [role="button"], input, textarea, select');
      setIsPointer(clickable);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Hide the native cursor everywhere while this component is mounted.
    const previousCursor = document.body.style.cursor;
    document.body.style.cursor = 'none';

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.body.style.cursor = previousCursor;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible]);

  return (
    <motion.div
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        x: cursorX,
        y: cursorY,
        translateX: '-50%',
        translateY: '-50%',
        pointerEvents: 'none',
        zIndex: 9999,
        width: isPointer ? 40 : 28,
        height: isPointer ? 40 : 28,
        borderRadius: '50%',
        border: '1.5px solid #FFD60A', // thin yellow border, hollow center
        backgroundColor: 'transparent',
        opacity: isVisible ? 1 : 0,
        transition: 'width 0.2s ease, height 0.2s ease, opacity 0.15s ease',
      }}
    />
  );
}