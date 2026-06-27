import React, { useState } from "react";
import { motion } from "motion/react";
import { 
  MapPin, 
  FileText, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Camera, 
  Laptop, 
  Lightbulb, 
  Cpu,
  Sparkles,
  Globe
} from "lucide-react";
import { PERSONAL_INFO, CERTIFICATIONS } from "../data";
import { useLanguage } from "../context/LanguageContext";
import PrintCVModal from "./PrintCVModal";

export default function HeroSection() {
  const { language, setLanguage, t } = useLanguage();
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);

  const scrollToContact = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const element = document.getElementById("contact");
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

  const handlePrint = () => {
    setIsCVModalOpen(true);
  };

  return (
    <section id="hero" className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-[#F4F2EB] dark:bg-[#121110] transition-colors duration-300">
      
      {/* Editorial side vertical stamp matching the poster layout (Right side) */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center space-y-2 select-none pointer-events-none z-10">
        <span className="text-[11px] font-mono tracking-[0.25em] text-zinc-400 dark:text-zinc-500 uppercase rotate-90 origin-center translate-y-12">
          ALBAÑA &copy; 2026
        </span>
      </div>

      {/* Floating Graphic Doodles (Thin outlines styled like the poster illustrations) */}
      <div className="absolute top-[15%] left-[5%] animate-bounce duration-1000 opacity-20 dark:opacity-10 pointer-events-none">
        <Laptop className="h-10 w-10 text-zinc-800 dark:text-zinc-100 stroke-1" />
      </div>
      <div className="absolute top-[28%] left-[45%] animate-pulse opacity-15 dark:opacity-10 pointer-events-none hidden md:block">
        <Cpu className="h-8 w-8 text-zinc-800 dark:text-zinc-100 stroke-1" />
      </div>
      <div className="absolute bottom-[15%] left-[30%] opacity-20 dark:opacity-10 pointer-events-none">
        <Lightbulb className="h-9 w-9 text-zinc-800 dark:text-zinc-100 stroke-1 rotate-[15deg]" />
      </div>
      <div className="absolute top-[12%] right-[42%] opacity-25 dark:opacity-10 pointer-events-none hidden lg:block">
        <Camera className="h-10 w-10 text-zinc-800 dark:text-zinc-100 stroke-1 rotate-[-12deg]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Creative Poster Typography & Information */}
          <div className="lg:col-span-7 flex flex-col space-y-8">
            
            {/* Live Status Badge & Language Toggle Row */}
            <div className="flex flex-wrap items-center gap-4">
              <div className="inline-flex">
                <span className="inline-flex items-center space-x-2 bg-zinc-950 text-[#f59e0b] px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span>{t("riyadh_based")}</span>
                </span>
              </div>

              {/* Language Selection Toggle */}
              <div className="inline-flex p-1 bg-white dark:bg-[#1C1B19] rounded-xl border-2 border-zinc-950 dark:border-zinc-800 shadow-[2px_2px_0px_0px_rgba(24,24,27,1)] select-none">
                <button
                  onClick={() => setLanguage("en")}
                  className={`px-3 py-1.5 rounded-lg text-[11px] font-black uppercase tracking-wider transition-all flex items-center space-x-1 cursor-pointer ${
                    language === "en"
                      ? "bg-[#f59e0b] text-zinc-950 border border-zinc-950 shadow-[1px_1px_0px_0px_rgba(24,24,27,1)]"
                      : "text-zinc-500 hover:text-zinc-900 dark:hover:text-white border border-transparent"
                  }`}
                >
                  <span>English</span>
                </button>
                <button
                  onClick={() => setLanguage("ar")}
                  className={`px-3 py-1.5 rounded-lg text-[11px] font-black tracking-wider transition-all flex items-center space-x-1 cursor-pointer ${
                    language === "ar"
                      ? "bg-[#f59e0b] text-zinc-950 border border-zinc-950 shadow-[1px_1px_0px_0px_rgba(24,24,27,1)]"
                      : "text-zinc-500 hover:text-zinc-900 dark:hover:text-white border border-transparent"
                  }`}
                >
                  <span className="flex items-center gap-1">العربية <span className="text-[10px]">🇸🇦</span></span>
                </button>
              </div>
            </div>

            {/* Title Block matching 'PORTO FOLO.' layout */}
            <div className="relative">
              {/* Massive quotation marks */}
              <span className={`absolute -top-12 text-7xl sm:text-9xl font-serif text-[#f59e0b] select-none opacity-50 dark:opacity-30 ${language === "ar" ? "-right-8" : "-left-8"}`}>“</span>
              
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-sans font-black tracking-tight leading-none text-zinc-900 dark:text-white uppercase relative z-10 flex flex-col items-start">
                <span className="bg-[#f59e0b] text-zinc-950 px-5 py-2.5 inline-block rounded-2xl rotate-[-2deg] shadow-[4px_4px_0px_0px_rgba(24,24,27,1)] mb-2 font-black">
                  {t("joshua")}
                </span>
                <span className="block tracking-tighter text-zinc-950 dark:text-white font-black pl-1">
                  {t("albana")}
                </span>
              </h1>
              
              <span className="inline-block mt-3 px-3 py-1 bg-zinc-200/90 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-300 rounded-md text-xs font-mono font-bold uppercase tracking-wider">
                {t("specialized_ops")}
              </span>
            </div>

            {/* Current Subtitle */}
            <div className={`border-[#f59e0b] py-1 ${language === "ar" ? "border-r-4 pr-4" : "border-l-4 pl-4"}`}>
              <p className="text-lg sm:text-xl font-bold text-zinc-800 dark:text-zinc-200 leading-tight">
                {t("ops_specialist")}
              </p>
            </div>

            {/* Bio summary text */}
            <p className="text-base text-zinc-700 dark:text-zinc-300 leading-relaxed max-w-2xl font-sans">
              {t("bio")}
            </p>

            {/* Saudi Transfer Parameters Retro Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
              <div className="p-4 bg-white dark:bg-[#1C1B19] rounded-2xl border-2 border-zinc-950 dark:border-zinc-800 flex items-start space-x-3 shadow-[3px_3px_0px_0px_rgba(242,169,0,0.85)] transition-all">
                <CheckCircle2 className="h-5 w-5 text-[#f59e0b] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-widest block font-bold">{t("transfer_status")}</span>
                  <span className="text-sm font-bold text-zinc-900 dark:text-white mt-0.5 block">{t("transfer_status_val")}</span>
                </div>
              </div>
              <div className="p-4 bg-white dark:bg-[#1C1B19] rounded-2xl border-2 border-zinc-950 dark:border-zinc-800 flex items-start space-x-3 shadow-[3px_3px_0px_0px_rgba(242,169,0,0.85)] transition-all">
                <ShieldCheck className="h-5 w-5 text-[#f59e0b] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-widest block font-bold">{t("visa_status")}</span>
                  <span className="text-sm font-bold text-zinc-900 dark:text-white mt-0.5 block">{t("visa_status_val")}</span>
                </div>
              </div>
            </div>

            {/* Action buttons with brutalist offset shadow */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={scrollToContact}
                className="px-6 py-3.5 bg-zinc-950 hover:bg-zinc-800 text-white dark:bg-[#f59e0b] dark:text-zinc-950 font-black text-sm rounded-xl border-2 border-zinc-950 dark:border-[#f59e0b] shadow-[4px_4px_0px_0px_rgba(242,169,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(24,24,27,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all flex items-center space-x-2 cursor-pointer"
              >
                <span>{t("hire_immediately")}</span>
                <ArrowRight className={`h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1 ${language === "ar" ? "rotate-180" : ""}`} />
              </button>
              
              <button
                onClick={handlePrint}
                className="px-6 py-3.5 bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 hover:text-zinc-950 dark:hover:text-white font-bold text-sm rounded-xl border-2 border-zinc-900 dark:border-zinc-700 hover:bg-zinc-100 hover:border-zinc-950 dark:hover:bg-zinc-800 transition-all flex items-center space-x-2 cursor-pointer"
              >
                <FileText className="h-4 w-4 text-zinc-500 dark:text-zinc-400" />
                <span>{t("print_resume")}</span>
              </button>
            </div>

          </div>

            {/* Right Side: Elegant JSON Profile Overview Terminal */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            {/* Aesthetic offset paper stack backboard */}
            <div className="absolute inset-x-0 inset-y-0 bg-[#f59e0b] rounded-2xl transform rotate-[2deg] scale-102 -z-10 opacity-90 border-2 border-zinc-950 dark:border-zinc-800 shadow-md"></div>
            <div className="bg-zinc-950 text-zinc-100 rounded-2xl shadow-xl overflow-hidden border-2 border-zinc-950">
              
              {/* Card Header matching custom terminal view */}
              <div className="px-5 py-3.5 bg-zinc-900 flex items-center justify-between border-b-2 border-zinc-950">
                <span className="text-xs font-mono font-bold tracking-wider text-zinc-400 uppercase">{t("profile_overview")}</span>
                <div className="flex space-x-2">
                  <div className="h-2.5 w-2.5 rounded-full bg-rose-500"></div>
                  <div className="h-2.5 w-2.5 rounded-full bg-amber-500"></div>
                  <div className="h-2.5 w-2.5 rounded-full bg-emerald-500"></div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-6 font-sans">
                {/* Visual Avatar / Brand Header */}
                <div className="flex items-center space-x-4">
                  <div className="h-14 w-14 rounded-xl bg-gradient-to-tr from-[#f59e0b] to-yellow-300 flex items-center justify-center font-black text-zinc-950 text-lg tracking-wider border-2 border-zinc-950">
                    JA
                  </div>
                  <div>
                    <h4 className="text-base font-black text-white">{PERSONAL_INFO.name}</h4>
                    <span className="text-xs font-mono text-[#f59e0b] font-bold uppercase tracking-wider">{t("available_immediately")}</span>
                  </div>
                </div>

                <div className="border-t border-zinc-800 my-4"></div>

                {/* Key parameters details */}
                <div className="space-y-3.5 text-sm">
                  <div className="flex justify-between items-center py-0.5">
                    <span className="text-zinc-500 font-mono text-xs font-bold uppercase">{t("current_location")}</span>
                    <span className="text-white font-semibold flex items-center space-x-1">
                      <MapPin className="h-3.5 w-3.5 text-[#f59e0b] shrink-0" />
                      <span>{t("location_val")}</span>
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-0.5">
                    <span className="text-zinc-500 font-mono text-xs font-bold uppercase">{t("primary_email")}</span>
                    <span className="text-amber-400 hover:underline font-mono text-xs font-semibold">{PERSONAL_INFO.email}</span>
                  </div>
                  <div className="flex justify-between items-center py-0.5">
                    <span className="text-zinc-500 font-mono text-xs font-bold uppercase">{t("saudi_contact")}</span>
                    <span className="text-white font-mono text-xs font-bold">{PERSONAL_INFO.phone}</span>
                  </div>
                  <div className="flex justify-between items-center py-0.5">
                    <span className="text-zinc-500 font-mono text-xs font-bold uppercase">{t("office_skills")}</span>
                    <span className="text-[#f59e0b] font-bold text-xs uppercase tracking-wide">MS Excel, Word, ERP</span>
                  </div>
                  <div className="flex justify-between items-center py-0.5">
                    <span className="text-zinc-500 font-mono text-xs font-bold uppercase">{t("automation_systems")}</span>
                    <span className="text-white font-mono text-xs bg-zinc-800 px-2 py-0.5 rounded font-bold">Zapier AI Pipe</span>
                  </div>
                </div>

                <div className="border-t border-zinc-800 my-4"></div>

                {/* Skills/Credentials badging */}
                <div>
                  <h5 className="text-[10px] font-mono uppercase text-zinc-550 mb-3 tracking-widest font-black">{t("key_certifications")}</h5>
                  <div className="flex flex-wrap gap-2">
                    {CERTIFICATIONS.map((cert, index) => (
                      <span key={index} className="text-[11px] px-2.5 py-1 bg-zinc-900 border-2 border-zinc-800 rounded-lg text-zinc-300 font-bold tracking-tight">
                        {cert.name.split(" (")[0]}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="border-t border-zinc-800 my-4"></div>

                {/* Languages badging */}
                <div>
                  <h5 className="text-[10px] font-mono uppercase text-zinc-550 mb-2.5 tracking-widest font-black">{t("languages")}</h5>
                  <div className="grid grid-cols-3 gap-2 text-center text-xs">
                    <div className="bg-zinc-900 border border-zinc-800 p-2 rounded-lg">
                      <span className="block font-bold text-white">{t("english")}</span>
                      <span className="text-[10px] text-zinc-500 font-mono mt-0.5">{t("english_lvl")}</span>
                    </div>
                    <div className="bg-zinc-900 border border-zinc-800 p-2 rounded-lg">
                      <span className="block font-bold text-white">{t("filipino")}</span>
                      <span className="text-[10px] text-zinc-500 font-mono mt-0.5">{t("filipino_lvl")}</span>
                    </div>
                    <div className="bg-zinc-900 border border-zinc-800 p-2 rounded-lg">
                      <span className="block font-bold text-[#f59e0b]">{t("arabic")}</span>
                      <span className="text-[10px] text-zinc-500 font-mono mt-0.5">{t("arabic_lvl")}</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Styled bottom zine divider matching arrow structure in the attached image */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 md:mt-24 pointer-events-none">
        <div className="relative flex items-center justify-between border-t border-zinc-400 dark:border-zinc-800">
          <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest py-3">Section 01 / Overview</span>
          {/* Circled Arrow design icon intersecting the line */}
          <div className="absolute right-12 top-[-14px] bg-[#F4F2EB] dark:bg-[#121110] px-2">
            <div className="h-7 w-7 rounded-full border border-zinc-400 dark:border-zinc-700 flex items-center justify-center text-zinc-900 dark:text-zinc-100">
              <span className="text-xs font-bold font-mono">&#8594;</span>
            </div>
          </div>
        </div>
      </div>

      {/* CV Print/Preview Modal */}
      <PrintCVModal isOpen={isCVModalOpen} onClose={() => setIsCVModalOpen(false)} />

    </section>
  );
}
