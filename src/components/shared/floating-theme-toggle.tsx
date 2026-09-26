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
    <div className="hidden lg:flex absolute z-40 flex-col items-center bg-slate-400/40 dark:bg-slate-700/50 backdrop-blur-lg rounded-full shadow-xl border border-[#474747] bottom-4 rtl:left-4 ltr:right-4 origin-bottom-left scale-75 md:bottom-auto md:top-[53vh] md:-translate-y-1/2 md:rtl:left-12 md:ltr:right-12 md:origin-center md:scale-100 w-12">
      
      {/* Dark Mode Button */}
      <button
        onClick={() => setTheme("dark")}
        className={cn(
          "flex flex-col items-center justify-center gap-3 w-10 h-28 rounded-full transition-all duration-300",
          theme === "dark" 
            ? "bg-white text-black shadow-md" 
            : "text-black dark:text-white/90 hover:text-black dark:hover:text-white"
        )}
      >
        <Moon className="w-5 h-5" strokeWidth={1.5} />
        <span className="text-[15px] font-cairo font-medium -rotate-90 origin-center whitespace-nowrap">Dark</span>
      </button>

      {/* Light Mode Button */}
      <button
        onClick={() => setTheme("light")}
        className={cn(
          "flex flex-col items-center justify-center gap-3 w-10 h-28 rounded-full transition-all duration-300",
          theme === "light" 
            ? "bg-white text-black shadow-md" 
            : "text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white"
        )}
      >
        <Sun className="w-5 h-5" strokeWidth={1.5} />
        <span className="text-[15px] font-cairo font-medium -rotate-90 origin-center whitespace-nowrap">Light</span>
      </button>

    </div>
  );
}
