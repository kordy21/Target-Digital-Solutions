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
import { motion, useMotionValueEvent, useScroll, AnimatePresence } from "framer-motion";
import { ChevronDown, Moon, Sun, X } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useState, useEffect } from "react";
import { LanguageSwitcher } from "./language-switcher";

export function SiteHeader() {
  const t = useTranslations("header");
  const locale = useLocale();
  const isRTL = locale === "ar";
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

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.div 
        className={cn(
          "w-full py-1 justify-center items-center z-50 px-6 md:px-20 fixed top-0 left-0 right-0 transition-all duration-300",
          isScrolled ? "bg-white dark:bg-slate-950 md:bg-white/90 md:dark:bg-slate-950/90 md:backdrop-blur-md shadow-sm" : "bg-white dark:bg-slate-950",
          isMobileMenuOpen ? "hidden" : "flex"
        )}
      >
        <header className="w-full flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* Desktop Menu Icon */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="bg-transparent hover:bg-transparent px-0 hidden lg:flex" 
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Image src={MenuImg} alt="Menu" className="w-8 h-8 object-contain dark:invert ltr:-scale-x-100" />
            </Button>

            {/* Mobile Menu Icon (Before Logo) */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="bg-transparent hover:bg-transparent px-0 flex lg:hidden" 
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Image src={MenuImg} alt="Menu" className="w-7 h-7 object-contain dark:invert ltr:-scale-x-100" />
            </Button>

            <div className="h-20 flex items-center justify-center">
              <Link href="/">
                <Image src={Logo} alt="Logo" width={40} height={40} priority className="dark:brightness-0 dark:invert" />
              </Link>
            </div>
          </div>

          {/* Mobile Controls (Theme + Lang) - On the other side */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-secondary/50 hover:bg-secondary text-foreground transition-colors"
            >
              {mounted ? (theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />) : <div className="w-4 h-4" />}
            </button>
            <LanguageSwitcher />
          </div>

          {/* Center Pill (Desktop Only - perfectly centered) */}
          <StaggerContainer delayChildren={0.2} staggerChildren={0.1} className="hidden lg:flex items-center bg-black/5 dark:bg-white/10 rounded-[20px] px-6 py-2.5 gap-6 w-max mx-auto">
            <nav className="flex items-center gap-5">
              <StaggerItem><NavLink href="/about" hasDropdown>{t("about")}</NavLink></StaggerItem>
              <StaggerItem><NavLink href="/services" hasDropdown>{t("services")}</NavLink></StaggerItem>
              <StaggerItem><NavLink href="/solutions" hasDropdown>{t("solutions")}</NavLink></StaggerItem>
              <StaggerItem><NavLink href="/systems" hasDropdown>{t("systems")}</NavLink></StaggerItem>
              <StaggerItem><NavLink href="/portfolio" hasDropdown>{t("portfolio")}</NavLink></StaggerItem>
              <StaggerItem><NavLink href="/clients">{t("clients")}</NavLink></StaggerItem>
              <StaggerItem><NavLink href="/info">{t("info")}</NavLink></StaggerItem>
              <StaggerItem>
                <NavLink href="#" hasDropdown dropdownContent={
                  <>
                    <Link href="/faq" className="text-[14px] font-cairo font-semibold hover:text-primary transition-colors py-1 px-2 whitespace-nowrap block">{t("faq")}</Link>
                    <Link href="/careers" className="text-[14px] font-cairo font-semibold hover:text-primary transition-colors py-1 px-2 whitespace-nowrap block">{t("careers")}</Link>
                  </>
                }>
                  {t("more")}
                </NavLink>
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
          <div className="hidden lg:flex justify-end items-center">
            <div className="flex items-center">
              <MagneticWrapper>
                <Button className="rounded-2xl bg-foreground text-background hover:bg-foreground/80 font-cairo px-4 h-12  text-base">
                  {t("customer_area")}
                </Button>
              </MagneticWrapper>
            </div>
          </div>
        </header>
      </motion.div>

      {/* Drawer Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm touch-none"
            />
            <motion.div 
              initial={{ x: isRTL ? "100%" : "-100%" }} 
              animate={{ x: 0 }} 
              exit={{ x: isRTL ? "100%" : "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className={cn("fixed top-0 bottom-0 z-50 w-80 max-w-[80vw] flex flex-col bg-white dark:bg-slate-950 shadow-2xl overflow-hidden", isRTL ? "right-0" : "left-0")}
            >
              <div className="w-full flex items-center justify-between p-6 border-b border-border/50">
                <div className="w-10 h-10 flex items-center justify-center">
                  <Image src={Logo} alt="Logo" width={40} height={40} priority style={{ width: "auto", height: "auto" }} className="dark:brightness-0 dark:invert" />
                </div>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="rounded-full hover:bg-black/5 dark:hover:bg-white/10"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>
              
              <div className="flex-1 overflow-y-auto overflow-x-hidden p-6 flex flex-col gap-6 min-h-0 overscroll-contain [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] scrollbar-none" data-lenis-prevent="true" data-lenis-prevent-wheel="true" data-lenis-prevent-touch="true">
                <nav className="flex flex-col gap-6">
                  <NavLink href="/about" onClick={() => setIsMobileMenuOpen(false)} hasDropdown isMobile>{t("about")}</NavLink>
                  <NavLink href="/services" onClick={() => setIsMobileMenuOpen(false)} hasDropdown isMobile>{t("services")}</NavLink>
                  <NavLink href="/solutions" onClick={() => setIsMobileMenuOpen(false)} hasDropdown isMobile>{t("solutions")}</NavLink>
                  <NavLink href="/systems" onClick={() => setIsMobileMenuOpen(false)} hasDropdown isMobile>{t("systems")}</NavLink>
                  <NavLink href="/portfolio" onClick={() => setIsMobileMenuOpen(false)} hasDropdown isMobile>{t("portfolio")}</NavLink>
                  <NavLink href="/clients" onClick={() => setIsMobileMenuOpen(false)} isMobile>{t("clients")}</NavLink>
                  <NavLink href="/info" onClick={() => setIsMobileMenuOpen(false)} isMobile>{t("info")}</NavLink>
                  <NavLink href="#" hasDropdown isMobile dropdownContent={
                    <div className="flex flex-col mt-1">
                      <Link href="/faq" onClick={() => setIsMobileMenuOpen(false)} className="text-[14px] font-cairo font-semibold hover:text-primary transition-colors p-2 block">{t("faq")}</Link>
                      <Link href="/careers" onClick={() => setIsMobileMenuOpen(false)} className="text-[14px] font-cairo font-semibold hover:text-primary transition-colors p-2 block">{t("careers")}</Link>
                    </div>
                  }>
                    {t("more")}
                  </NavLink>
                  
                  {/* Customer Area Button Inside Nav (Mobile) */}
                  <Button onClick={() => setIsMobileMenuOpen(false)} className="w-full rounded-xl bg-foreground text-background hover:bg-foreground/80 font-cairo h-12 mt-4 text-base">
                    {t("customer_area")}
                  </Button>
                </nav>

                

                <div className="flex items-center gap-4 mb-4 justify-center">
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
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

function NavLink({ href, children, onClick, hasDropdown, dropdownContent, isMobile }: { href: string; children: React.ReactNode; onClick?: () => void, hasDropdown?: boolean, dropdownContent?: React.ReactNode, isMobile?: boolean }) {
  return (
    <div className="group relative flex flex-col w-max">
      <Link href={href} onClick={onClick} className="flex items-center justify-between lg:justify-start gap-1 text-[15px] font-cairo font-semibold text-foreground transition-colors group-hover:text-primary cursor-pointer">
        {children}
        {hasDropdown && <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180 opacity-70" />}
      </Link>
      
      {hasDropdown && (
        <div className={cn(
          "transition-all duration-300 z-50",
          isMobile 
            ? "mt-2 pl-4 rtl:pl-0 rtl:pr-4 border-l-2 rtl:border-l-0 rtl:border-r-2 border-primary/20 max-h-0 overflow-hidden opacity-0 group-hover:max-h-50 group-hover:opacity-100 group-hover:py-2"
            : "absolute top-full left-1/2 -translate-x-1/2 mt-6 py-2 px-4 bg-white dark:bg-slate-900 border border-border shadow-lg rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:mt-2 min-w-32 flex flex-col gap-2"
        )}>
          {/* Dropdown Content */}
          {dropdownContent || <div className="text-xs text-muted-foreground p-2"></div>}
        </div>
      )}
    </div>
  );
}
