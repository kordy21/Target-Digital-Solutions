"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { Button } from "@/components/ui/button";
import { useParams } from "next/navigation";

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
      className="hidden sm:flex items-center gap-2 bg-muted/50 px-3 py-1.5 rounded-full cursor-pointer hover:bg-muted transition-colors font-cairo font-semibold h-10 text-sm"
    >
      {locale === "ar" ? "EN" : "عربي"}
    </Button>
  );
}
