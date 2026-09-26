"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function ScrollShadow() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      
      // Calculate how far we are from the bottom
      const distanceToBottom = scrollHeight - clientHeight - scrollY;

      // Show shadow if we are scrolled down a bit, BUT hide it if we are very close to the bottom (footer)
      if (scrollY > 50 && distanceToBottom > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Check initial state
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div 
      className={cn(
        "fixed bottom-0 left-0 right-0 h-32 pointer-events-none z-40 transition-opacity duration-500 backdrop-blur-xl [mask-image:linear-gradient(to_top,black,transparent)]",
        isVisible ? "opacity-100" : "opacity-0"
      )} 
    />
  );
}
