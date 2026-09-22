"use client";

import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface MarqueeProps {
  children: ReactNode;
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  speed?: "slow" | "normal" | "fast";
}

export function Marquee({
  children,
  className,
  reverse = false,
  pauseOnHover = true,
  speed = "normal",
}: MarqueeProps) {
  const speedClasses = {
    slow: "duration-[60s]",
    normal: "duration-[40s]",
    fast: "duration-[20s]",
  };

  return (
    <div
      className={cn(
        "group flex overflow-hidden p-2 [--gap:1rem] gap-(--gap) w-full",
        className
      )}
    >
      <div
        className={cn(
          "flex shrink-0 justify-around gap-(--gap) min-w-full animate-marquee",
          speedClasses[speed],
          reverse && "direction-reverse",
          pauseOnHover && "group-hover:paused"
        )}
      >
        {children}
      </div>
      <div
        aria-hidden="true"
        className={cn(
          "flex shrink-0 justify-around gap-(--gap) min-w-full animate-marquee",
          speedClasses[speed],
          reverse && "direction-reverse",
          pauseOnHover && "group-hover:paused"
        )}
      >
        {children}
      </div>
    </div>
  );
}
