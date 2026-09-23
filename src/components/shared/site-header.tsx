"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/button";
import { ChevronDown, MessageSquare, Phone, MessageCircle, Menu, X } from "lucide-react";
import { LanguageSwitcher } from "./language-switcher";
import Image from "next/image";
import Logo from "@/assets/TargetNavBar.png";
import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const t = useTranslations("header");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <>
      <motion.div 
        className={cn(
          "w-full flex justify-center z-40 px-6 md:px-18 fixed top-0 left-0 right-0 transition-all duration-300",
          isScrolled ? "py-3 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md shadow-sm" : "py-6 bg-white dark:bg-slate-950"
        )}
      >
        <header className="w-full flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-12 h-12 flex items-center justify-center">
              <Link href="/">
                <Image src={Logo} alt="Logo" width={48} height={48} priority style={{ width: "auto", height: "auto" }} className="dark:brightness-0 dark:invert" />
              </Link>
            </div>
          </div>

          {/* Center Pill (Desktop Only) */}
          <div className="hidden lg:flex items-center bg-accent rounded-xl px-4 py-2 gap-6">
            <nav className="flex items-center gap-5 pr-2">
              <NavLink href="/about">{t("about")}</NavLink>
              <NavLink href="/services">{t("services")}</NavLink>
              <NavDropdown label={t("solutions")} />
              <NavDropdown label={t("systems")} />
              <NavDropdown label={t("portfolio")} />
              <NavLink href="/clients">{t("clients")}</NavLink>
              <NavLink href="/info">{t("info")}</NavLink>
              <NavDropdown label={t("more")} />
            </nav>
            
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-black/5 dark:bg-white/10 flex items-center justify-center text-foreground hover:bg-black/10 dark:hover:bg-white/20 cursor-pointer transition-colors">
                <MessageSquare className="w-4 h-4" />
              </div>
              <div className="w-8 h-8 rounded-full bg-black/5 dark:bg-white/10 flex items-center justify-center text-foreground hover:bg-black/10 dark:hover:bg-white/20 cursor-pointer transition-colors">
                <MessageCircle className="w-4 h-4" />
              </div>
              <div className="w-8 h-8 rounded-full bg-black/5 dark:bg-white/10 flex items-center justify-center text-foreground hover:bg-black/10 dark:hover:bg-white/20 cursor-pointer transition-colors">
                <Phone className="w-4 h-4" />
              </div>
            </div>
            
            <LanguageSwitcher />
          </div>

          {/* Desktop CTA & Mobile Controls */}
          <div className="flex items-center gap-4">
            {/* Mobile Controls (Lang + Menu) */}
            <div className="flex lg:hidden items-center gap-2">
              <LanguageSwitcher />
              <Button 
                variant="ghost" 
                size="icon" 
                className="bg-transparent hover:bg-transparent px-0" 
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Menu className="w-8 h-8" />
              </Button>
            </div>

            {/* Desktop CTA Button */}
            <div className="hidden lg:flex items-center">
              <Button className="rounded-xl bg-black dark:bg-white text-white dark:text-black hover:bg-black/80 dark:hover:bg-white/80 text-[16px] font-cairo px-8 h-12">
                {t("customer_area")}
              </Button>
            </div>
          </div>
        </header>
      </motion.div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-white dark:bg-slate-950">
          <div className="w-full flex items-center justify-between p-6">
            <div className="w-12 h-12 flex items-center justify-center">
              <Image src={Logo} alt="Logo" width={48} height={48} priority style={{ width: "auto", height: "auto" }} className="dark:brightness-0 dark:invert" />
            </div>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X className="w-6 h-6" />
            </Button>
          </div>
          
          <div className="flex flex-col gap-6 p-8 overflow-y-auto">
            <nav className="flex flex-col gap-6">
              <NavLink href="/about" onClick={() => setIsMobileMenuOpen(false)}>{t("about")}</NavLink>
              <NavLink href="/services" onClick={() => setIsMobileMenuOpen(false)}>{t("services")}</NavLink>
              <NavDropdown label={t("solutions")} onClick={() => setIsMobileMenuOpen(false)} />
              <NavDropdown label={t("systems")} onClick={() => setIsMobileMenuOpen(false)} />
              <NavDropdown label={t("portfolio")} onClick={() => setIsMobileMenuOpen(false)} />
              <NavLink href="/clients" onClick={() => setIsMobileMenuOpen(false)}>{t("clients")}</NavLink>
              <NavLink href="/info" onClick={() => setIsMobileMenuOpen(false)}>{t("info")}</NavLink>
              <NavDropdown label={t("more")} onClick={() => setIsMobileMenuOpen(false)} />
              
              {/* Customer Area Button Inside Nav (Mobile) */}
              <Button onClick={() => setIsMobileMenuOpen(false)} className="w-full rounded-xl bg-black dark:bg-white text-white dark:text-black hover:bg-black/80 dark:hover:bg-white/80 text-[16px] font-cairo h-12 mt-4">
                {t("customer_area")}
              </Button>
            </nav>

            <div className="w-full h-px bg-border my-2"></div>

            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 rounded-full bg-black/5 dark:bg-white/10 flex items-center justify-center text-foreground cursor-pointer transition-colors hover:bg-black/10 dark:hover:bg-white/20">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 rounded-full bg-black/5 dark:bg-white/10 flex items-center justify-center text-foreground cursor-pointer transition-colors hover:bg-black/10 dark:hover:bg-white/20">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 rounded-full bg-black/5 dark:bg-white/10 flex items-center justify-center text-foreground cursor-pointer transition-colors hover:bg-black/10 dark:hover:bg-white/20">
                <Phone className="w-5 h-5" />
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
}

function NavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) {
  return (
    <Link href={href} onClick={onClick} className="text-[15px] font-cairo font-semibold text-accent-foreground hover:text-black dark:hover:text-white transition-colors">
      {children}
    </Link>
  );
}

function NavDropdown({ label, onClick }: { label: string; onClick?: () => void }) {
  return (
    <div onClick={onClick} className="flex items-center gap-1 cursor-pointer text-[15px] font-cairo font-semibold text-accent-foreground hover:text-black dark:hover:text-white transition-colors group">
      <span>{label}</span>
      <ChevronDown className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 transition-opacity" />
    </div>
  );
}
