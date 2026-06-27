import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, CheckCircle, FileText, Phone, ArrowUpRight, Sun, Moon } from "lucide-react";
import { PERSONAL_INFO } from "../data";
import { useLanguage } from "../context/LanguageContext";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "light";
    }
    return "light";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#F4F2EB]/95 dark:bg-[#121110]/95 backdrop-blur-md shadow-sm border-b border-zinc-250 dark:border-zinc-800 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Typographic Logo */}
          <a
            href="#"
            onClick={(e) => handleLinkClick(e, "hero")}
            className="group flex flex-col focus:outline-none"
          >
            <span className="text-xl font-black tracking-tight text-zinc-900 dark:text-white group-hover:text-[#f59e0b] dark:group-hover:text-[#f59e0b] transition-colors uppercase font-sans">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-[10px] font-mono tracking-widest text-[#f59e0b] font-semibold uppercase">
              {t("ops_specialist")}
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#services"
              onClick={(e) => handleLinkClick(e, "services")}
              className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 hover:text-[#f59e0b] dark:hover:text-[#f59e0b] transition-colors uppercase tracking-wider"
            >
              {t("services")}
            </a>
            <a
              href="#experience"
              onClick={(e) => handleLinkClick(e, "experience")}
              className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 hover:text-[#f59e0b] dark:hover:text-[#f59e0b] transition-colors uppercase tracking-wider"
            >
              {t("experience")}
            </a>
            <a
              href="#testimonials"
              onClick={(e) => handleLinkClick(e, "testimonials")}
              className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 hover:text-[#f59e0b] dark:hover:text-[#f59e0b] transition-colors uppercase tracking-wider"
            >
              {t("testimonials")}
            </a>
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, "contact")}
              className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 hover:text-[#f59e0b] dark:hover:text-[#f59e0b] transition-colors uppercase tracking-wider"
            >
              {t("contact")}
            </a>
          </nav>

          {/* Call-to-Action & Status Status */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-2 bg-emerald-100/60 dark:bg-emerald-950/40 px-3 py-1.5 rounded-full border border-emerald-200 dark:border-emerald-900/40">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-bold text-emerald-900 dark:text-emerald-300 font-mono tracking-wide uppercase">
                {language === "ar" ? "إقامة قابلة للنقل جاهزة" : "Transferable Iqama Ready"}
              </span>
            </div>

            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl border border-zinc-300 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200/50 dark:hover:bg-zinc-900 transition-all outline-none cursor-pointer flex items-center justify-center"
              aria-label="Toggle theme"
            >
              {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
            </button>
            
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, "contact")}
              className="inline-flex items-center justify-center px-4 py-2 text-xs font-black text-zinc-950 bg-[#f59e0b] border-2 border-zinc-950 hover:bg-amber-500 shadow-[2px_2px_0px_0px_rgba(24,24,27,1)] transition-all group rounded-lg"
            >
              {t("hire_immediately")}
              <ArrowUpRight className="ml-1 h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>


          {/* Cellphone Menu Buttons */}
          <div className="md:hidden flex items-center space-x-2">
            <div className="bg-emerald-50 dark:bg-emerald-950/45 px-2.5 py-1 rounded-full border border-emerald-100 dark:border-emerald-900/55 flex items-center space-x-1.5">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
              </span>
              <span className="text-[10px] font-medium text-emerald-800 dark:text-emerald-300 uppercase font-mono">
                Riyadh
              </span>
            </div>

            <button
              onClick={toggleTheme}
              className="p-1.5 text-slate-650 dark:text-slate-350 bg-slate-50 dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200/50 dark:border-slate-800 rounded-lg transition-colors cursor-pointer"
              aria-label="Toggle theme"
            >
              {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-slate-650 dark:text-slate-355 bg-slate-50 dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200/50 dark:border-slate-800 rounded-lg transition-colors cursor-pointer"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="h-4.5 w-4.5" /> : <Menu className="h-4.5 w-4.5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-850 shadow-lg overflow-hidden"
          >
            <div className="px-4 pt-3 pb-6 space-y-3">
              <a
                href="#services"
                onClick={(e) => handleLinkClick(e, "services")}
                className="block px-3 py-2.5 rounded-lg text-base font-semibold text-slate-700 dark:text-slate-300 hover:bg-[#F4F2EB] dark:hover:bg-zinc-900"
              >
                {t("services")}
              </a>
              <a
                href="#experience"
                onClick={(e) => handleLinkClick(e, "experience")}
                className="block px-3 py-2.5 rounded-lg text-base font-semibold text-slate-700 dark:text-slate-300 hover:bg-[#F4F2EB] dark:hover:bg-zinc-900"
              >
                {t("experience")}
              </a>
              <a
                href="#testimonials"
                onClick={(e) => handleLinkClick(e, "testimonials")}
                className="block px-3 py-2.5 rounded-lg text-base font-semibold text-slate-700 dark:text-slate-300 hover:bg-[#F4F2EB] dark:hover:bg-zinc-900"
              >
                {t("testimonials")}
              </a>
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, "contact")}
                className="block px-3 py-2.5 rounded-lg text-base font-semibold text-slate-700 dark:text-slate-300 hover:bg-[#F4F2EB] dark:hover:bg-zinc-900"
              >
                {t("contact")}
              </a>
              <div className="pt-4 border-t border-slate-100 dark:border-slate-850 flex flex-col space-y-3 px-3">
                <div className="flex items-center space-x-2 text-xs text-slate-500 dark:text-slate-400 font-mono">
                  <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                  <span>{t("riyadh_based")}</span>
                </div>
                <a
                  href="#contact"
                  onClick={(e) => handleLinkClick(e, "contact")}
                  className="w-full py-2 px-4 bg-[#f59e0b] text-zinc-950 font-black rounded-lg text-center text-sm shadow-xs border-2 border-zinc-950"
                >
                  {t("hire_immediately")}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
