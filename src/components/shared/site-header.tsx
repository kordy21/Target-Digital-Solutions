"use client";

import MenuImg from "@/assets/menu.png";
import MessengerImg from "@/assets/messanger.png";
import PhoneImg from "@/assets/phonevector.png";
import Logo from "@/assets/TargetNavBar.png";
import WhatsappImg from "@/assets/whatsapp.png";
import { StaggerContainer, StaggerItem } from "@/components/shared/animations";
import { MagneticWrapper } from "@/components/shared/animations/magnetic-wrapper";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { ChevronDown, Moon, Sun, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useState, useEffect } from "react";
import { LanguageSwitcher } from "./language-switcher";

export function SiteHeader() {
  const t = useTranslations("header");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <>
      <motion.div 
        className={cn(
          "w-full flex py-1 justify-center items-center z-50 px-6 md:px-20 fixed top-0 left-0 right-0 transition-all duration-300",
          isScrolled ? "bg-white/90 dark:bg-slate-950/90 backdrop-blur-md shadow-sm" : "bg-white dark:bg-slate-950"
        )}
      >
        <header className="w-full flex items-center">
          <div className="flex items-center justify-between lg:justify-start w-full gap-4 lg:flex-1">
            {/* Desktop Menu Icon to match screenshot */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="bg-transparent hover:bg-transparent px-0 hidden lg:flex" 
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Image src={MenuImg} alt="Menu" className="w-8 h-8 object-contain dark:invert ltr:-scale-x-100" />
            </Button>

            <div className="h-20 flex items-center justify-center">
              <Link href="/">
                <Image src={Logo} alt="Logo" width={40} height={40} priority className="dark:brightness-0 dark:invert" />
              </Link>
            </div>
            
            {/* Mobile Controls (Theme + Lang + Menu) */}
            <div className="flex lg:hidden items-center gap-1">
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-secondary/50 hover:bg-secondary text-foreground transition-colors mr-2"
              >
                {mounted ? (theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />) : <div className="w-4 h-4" />}
              </button>
              <LanguageSwitcher />
              <Button 
                variant="ghost" 
                size="icon" 
                className="bg-transparent hover:bg-transparent px-0 ml-1" 
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Image src={MenuImg} alt="Menu" className="w-7 h-7 object-contain dark:invert rtl:-scale-x-100" />
              </Button>
            </div>
          </div>

          {/* Center Pill (Desktop Only - perfectly centered) */}
          <StaggerContainer delayChildren={0.2} staggerChildren={0.1} className="hidden lg:flex items-center bg-black/5 dark:bg-white/10 rounded-[20px] px-6 py-2.5 gap-6">
            <nav className="flex items-center gap-6">
              <StaggerItem><NavLink href="/about">{t("about")}</NavLink></StaggerItem>
              <StaggerItem><NavLink href="/services">{t("services")}</NavLink></StaggerItem>
              <StaggerItem><NavLink href="/solutions">{t("solutions")}</NavLink></StaggerItem>
              <StaggerItem><NavLink href="/systems">{t("systems")}</NavLink></StaggerItem>
              <StaggerItem><NavLink href="/portfolio">{t("portfolio")}</NavLink></StaggerItem>
              <StaggerItem><NavLink href="/clients">{t("clients")}</NavLink></StaggerItem>
              <StaggerItem><NavLink href="/info">{t("info")}</NavLink></StaggerItem>
              <StaggerItem>
                <NavDropdown label={t("more")}>
                  <NavLink href="/faq">{t("faq")}</NavLink>
                  <NavLink href="/careers">{t("careers")}</NavLink>
                </NavDropdown>
              </StaggerItem>
            </nav>
            
            <div className="flex items-center gap-3">
              <StaggerItem>
                <div className="w-10 h-10 rounded-full bg-black/5 dark:bg-white/10 flex items-center justify-center cursor-pointer transition-colors hover:bg-black/10 dark:hover:bg-white/20">
                  <Image src={MessengerImg} alt="Messenger" className="w-4 h-4 object-contain dark:invert" />
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="w-10 h-10 rounded-full bg-black/5 dark:bg-white/10 flex items-center justify-center cursor-pointer transition-colors hover:bg-black/10 dark:hover:bg-white/20">
                  <Image src={WhatsappImg} alt="Whatsapp" className="w-5 h-5 object-contain dark:invert" />
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="w-10 h-10 rounded-full bg-black/5 dark:bg-white/10 flex items-center justify-center cursor-pointer transition-colors hover:bg-black/10 dark:hover:bg-white/20">
                  <Image src={PhoneImg} alt="Phone" className="w-4 h-4 object-contain dark:invert" />
                </div>
              </StaggerItem>
              <StaggerItem>
                <LanguageSwitcher />
              </StaggerItem>
            </div>
          </StaggerContainer>

          {/* Desktop CTA Button (Flex 1, End) */}
          <div className="flex-1 flex justify-end items-center">
            <div className="hidden lg:flex items-center">
              <MagneticWrapper>
                <Button className="rounded-2xl bg-foreground text-background hover:bg-foreground/80 font-cairo px-8 h-12 font-bold text-base">
                  {t("customer_area")}
                </Button>
              </MagneticWrapper>
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
          
            <StaggerContainer delayChildren={0.1} staggerChildren={0.05} className="flex flex-col gap-6 p-8 overflow-y-auto">
              <nav className="flex flex-col gap-6">
                <StaggerItem><NavLink href="/about" onClick={() => setIsMobileMenuOpen(false)}>{t("about")}</NavLink></StaggerItem>
                <StaggerItem><NavLink href="/services" onClick={() => setIsMobileMenuOpen(false)}>{t("services")}</NavLink></StaggerItem>
                <StaggerItem><NavLink href="/solutions" onClick={() => setIsMobileMenuOpen(false)}>{t("solutions")}</NavLink></StaggerItem>
                <StaggerItem><NavLink href="/systems" onClick={() => setIsMobileMenuOpen(false)}>{t("systems")}</NavLink></StaggerItem>
                <StaggerItem><NavLink href="/portfolio" onClick={() => setIsMobileMenuOpen(false)}>{t("portfolio")}</NavLink></StaggerItem>
                <StaggerItem><NavLink href="/clients" onClick={() => setIsMobileMenuOpen(false)}>{t("clients")}</NavLink></StaggerItem>
                <StaggerItem><NavLink href="/info" onClick={() => setIsMobileMenuOpen(false)}>{t("info")}</NavLink></StaggerItem>
                <StaggerItem><NavLink href="/faq" onClick={() => setIsMobileMenuOpen(false)}>{t("faq")}</NavLink></StaggerItem>
                <StaggerItem><NavLink href="/careers" onClick={() => setIsMobileMenuOpen(false)}>{t("careers")}</NavLink></StaggerItem>
                
                {/* Customer Area Button Inside Nav (Mobile) */}
                <StaggerItem>
                  <Button onClick={() => setIsMobileMenuOpen(false)} className="w-full rounded-xl bg-foreground text-background hover:bg-foreground/80 font-cairo h-12 mt-4 text-base">
                    {t("customer_area")}
                  </Button>
                </StaggerItem>
              </nav>

              <StaggerItem>
                <div className="w-full h-px bg-border my-2"></div>
              </StaggerItem>

              <StaggerItem>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-black/5 dark:bg-white/10 flex items-center justify-center cursor-pointer transition-colors hover:bg-black/10 dark:hover:bg-white/20">
                    <Image src={PhoneImg} alt="Phone" className="w-5 h-5 object-contain" />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-black/5 dark:bg-white/10 flex items-center justify-center cursor-pointer transition-colors hover:bg-black/10 dark:hover:bg-white/20">
                    <Image src={WhatsappImg} alt="Whatsapp" className="w-5 h-5 object-contain" />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-black/5 dark:bg-white/10 flex items-center justify-center cursor-pointer transition-colors hover:bg-black/10 dark:hover:bg-white/20">
                    <Image src={MessengerImg} alt="Messenger" className="w-5 h-5 object-contain" />
                  </div>
                </div>
              </StaggerItem>
            </StaggerContainer>
        </div>
      )}
    </>
  );
}

function NavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) {
  return (
    <Link href={href} onClick={onClick} className="text-[15px] font-cairo font-semibold text-foreground transition-colors">
      {children}
    </Link>
  );
}

function NavDropdown({ label, children, onClick }: { label: string; children?: React.ReactNode; onClick?: () => void }) {
  if (!children) {
    return (
      <div onClick={onClick} className="flex items-center gap-1 cursor-pointer text-[15px] font-cairo font-semibold text-foreground transition-colors group relative">
        <span>{label}</span>
        <ChevronDown className="w-3.5 h-3.5" />
      </div>
    );
  }

  return (
    <div className="flex items-center gap-1 cursor-pointer text-[15px] font-cairo font-semibold text-foreground transition-colors group relative">
      <span>{label}</span>
      <ChevronDown className="w-3.5 h-3.5" />
      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 py-4 px-6 bg-white dark:bg-slate-900 border border-border shadow-lg rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 min-w-37.5 flex flex-col gap-3">
        {children}
      </div>
    </div>
  );
}
