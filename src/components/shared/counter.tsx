"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring, useTransform, motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CounterProps {
  value: number;
  direction?: "up" | "down";
  className?: string;
  delay?: number;
  formatter?: (value: number) => string;
}

export function Counter({
  value,
  direction = "up",
  className,
  delay = 0,
  formatter = (v) => Intl.NumberFormat("en-US").format(v),
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  
  const startingValue = direction === "up" ? 0 : value + 100;
  const motionValue = useMotionValue(startingValue);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });
  
  const formattedValue = useTransform(springValue, (latest) => 
    formatter(Math.round(latest))
  );

  useEffect(() => {
    if (isInView) {
      setTimeout(() => {
        motionValue.set(value);
      }, delay * 1000);
    }
  }, [isInView, value, motionValue, delay]);

  return (
    <motion.span ref={ref} className={cn("inline-block", className)}>
      {formattedValue}
    </motion.span>
  );
}
