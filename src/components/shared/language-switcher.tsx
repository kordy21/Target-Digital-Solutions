"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { Button } from "@/components/ui/button";
import { useParams } from "next/navigation";
import { ChevronDown } from "lucide-react";

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  const toggleLocale = () => {
    const nextLocale = locale === "ar" ? "en" : "ar";
    router.replace(
      // @ts-expect-error -- TypeScript struggles with the generic params typing in next-intl router
      { pathname, params },
      { locale: nextLocale }
    );
  };

  return (
    <Button 
      variant="ghost" 
      onClick={toggleLocale}
      className="flex items-center gap-1 bg-[#EBEBEB] dark:bg-white/10 text-[#4A4A4A] dark:text-gray-200 px-3 py-1.5 rounded-full cursor-pointer hover:bg-muted-foreground/20 dark:hover:bg-white/20 transition-colors font-cairo font-semibold h-9 text-sm"
    >
      <ChevronDown className="w-3 h-3" />
      <span className="mt-1">{locale === "ar" ? "EN" : "عربي"}</span>
    </Button>
  );
}
