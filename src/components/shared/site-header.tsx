"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { Moon, Sun, ChevronDown } from "lucide-react";
import { LanguageSwitcher } from "./language-switcher";

export function SiteHeader() {
  const t = useTranslations("header");
  const { theme, setTheme } = useTheme();

  return (
    <div className="absolute top-8 left-0 w-full flex justify-center z-50 px-4">
      <header className="w-full max-w-7xl flex items-center justify-between py-3 px-6 bg-background border border-border shadow-md rounded-[40px]">
        
        {/* Logo Placeholder */}
        <div className="w-25 h-12.5 bg-muted rounded-md flex items-center justify-center">
          <span className="font-cairo text-sm text-muted-foreground font-bold">Logo</span>
        </div>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-6 bg-muted/50 rounded-full px-6 py-2">
          <NavLink href="/about">{t("about")}</NavLink>
          <NavLink href="/services">{t("services")}</NavLink>
          <NavLink href="/solutions">{t("solutions")}</NavLink>
          <NavLink href="/portfolio">{t("portfolio")}</NavLink>
          <NavLink href="/clients">{t("clients")}</NavLink>
          <NavLink href="/faq">{t("info")}</NavLink>
          <div className="flex items-center gap-1 cursor-pointer text-[18px] font-cairo hover:text-primary transition-colors">
            <span>{t("more")}</span>
            <ChevronDown className="w-4 h-4" />
          </div>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-full bg-muted/50"
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
          <LanguageSwitcher />
          <Button className="rounded-full bg-foreground text-background hover:bg-foreground/90 text-[18px] font-cairo px-6 h-10">
            {t("customer_area")}
          </Button>
        </div>
      </header>
    </div>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-[18px] font-cairo text-foreground hover:text-primary transition-colors">
      {children}
    </Link>
  );
}
