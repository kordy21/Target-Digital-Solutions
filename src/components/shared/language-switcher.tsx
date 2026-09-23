"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLocale = () => {
    const nextLocale = locale === "ar" ? "en" : "ar";
    const url = pathname === "/" ? "" : pathname;
    // Navigate using the next-intl router, preserving the search parameters
    router.replace(
      `${url}${window.location.search}`,
      { locale: nextLocale }
    );
    
    // Optional: force a refresh if you need to ensure clean RTL/LTR layout transitions 
    // and avoid React 19 script tag errors (similar to what hard navigation did)
    router.refresh();
  };

  return (
    <Button 
      variant="ghost" 
      onClick={toggleLocale}
      className="flex items-center gap-1 bg-accent text-accent-foreground px-3 py-1.5 rounded-full cursor-pointer hover:bg-muted-foreground/20 dark:hover:bg-white/20 transition-colors font-cairo font-semibold h-9 text-sm"
    >
      <ChevronDown className="w-3 h-3" />
      <span className="mt-1">{locale === "ar" ? "EN" : "عربي"}</span>
    </Button>
  );
}
