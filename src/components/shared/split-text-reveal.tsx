"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import SplitType from "split-type";
import { cn } from "@/lib/utils";

interface SplitTextRevealProps {
  text: string;
  delay?: number;
  className?: string;
  as?: React.ElementType;
}

export function SplitTextReveal({ text, delay = 0, className = "", as: Component = "span" }: SplitTextRevealProps) {
  const textRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    // Split text into words only to preserve Arabic ligatures
    const split = new SplitType(textRef.current, { types: "words" });

    // Ensure we start hidden
    gsap.set(split.words, { opacity: 0, y: 50, rotateX: -90 });

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          gsap.to(split.words, {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 0.8,
            stagger: 0.04,
            ease: "back.out(1.7)",
            delay: delay,
          });
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(textRef.current);

    return () => {
      observer.disconnect();
      split.revert();
    };
  }, [text, delay]);

  return (
    <Component ref={textRef} className={cn("dark:text-white", className)} style={{ perspective: "1000px" }}>
      {text}
    </Component>
  );
}
