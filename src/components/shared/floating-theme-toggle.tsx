"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function FloatingThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed z-50 flex flex-col items-center bg-background/80 backdrop-blur-md rounded-full p-1 shadow-lg border border-border bottom-4 left-4 origin-bottom-left scale-75 md:bottom-auto md:top-1/2 md:-translate-y-1/2 md:left-6 md:origin-center md:scale-100">
      
      {/* Dark Mode Button */}
      <button
        onClick={() => setTheme("dark")}
        className={cn(
          "flex flex-col items-center justify-center gap-2 w-10 h-24 rounded-full transition-all duration-300 hover:scale-110",
          theme === "dark" 
            ? "bg-foreground text-background shadow-md" 
            : "text-muted-foreground hover:text-foreground"
        )}
      >
        <Moon className="w-4 h-4 transition-transform group-hover:rotate-12" />
        <span className="text-xs font-cairo font-semibold -rotate-90 origin-center whitespace-nowrap mt-2">Dark</span>
      </button>

      {/* Light Mode Button */}
      <button
        onClick={() => setTheme("light")}
        className={cn(
          "flex flex-col items-center justify-center gap-2 w-10 h-24 rounded-full transition-all duration-300 mt-1 hover:scale-110",
          theme === "light" 
            ? "bg-foreground text-background shadow-md" 
            : "text-muted-foreground hover:text-foreground"
        )}
      >
        <Sun className="w-4 h-4 transition-transform group-hover:rotate-90" />
        <span className="text-xs font-cairo font-semibold -rotate-90 origin-center whitespace-nowrap mt-2">Light</span>
      </button>

    </div>
  );
}
