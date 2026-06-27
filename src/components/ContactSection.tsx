import React, { useState } from "react";
import { Mail, Phone, Copy, Linkedin } from "lucide-react";
import { PERSONAL_INFO } from "../data";
import { useLanguage } from "../context/LanguageContext";

export default function ContactSection() {
  const { t } = useLanguage();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id="contact" className="relative py-24 bg-[#F4F2EB] dark:bg-[#121110] border-t-2 border-zinc-950 dark:border-zinc-800 scroll-mt-12 text-left transition-colors duration-300 overflow-hidden">
      
      {/* Giant Background Outline Title */}
      <div 
        className="absolute top-8 left-1/2 -translate-x-1/2 text-center text-transparent text-8xl md:text-[8rem] lg:text-[10rem] font-black tracking-widest leading-none pointer-events-none opacity-20 dark:opacity-10 select-none uppercase font-black"
        style={{ WebkitTextStroke: "2px currentColor" }}
      >
        CONTACT
      </div>

      {/* Sideways branding stamp on the right side */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center space-y-2 select-none pointer-events-none z-10">
        <span className="text-[11px] font-mono tracking-[0.25em] text-zinc-400 dark:text-zinc-550 uppercase rotate-90 origin-center translate-y-24 font-bold font-mono">
          COMMUNICATION • PORTAL © 2026
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 relative">
          <div className="inline-block px-3 py-1.5 bg-[#f59e0b] text-zinc-950 text-[10px] font-mono uppercase tracking-widest font-black rounded-lg rotate-1 mb-4 select-none">
            {t("contact_label")}
          </div>
          <h3 className="text-4xl sm:text-5xl font-sans font-black tracking-tight text-zinc-950 dark:text-white uppercase leading-tight">
            {t("contact_title")}
          </h3>
          <p className="mt-4 text-sm font-semibold text-zinc-700 dark:text-zinc-350 max-w-xl mx-auto">
            {t("contact_desc")}
          </p>
        </div>

        {/* Centered Directory Card */}
        <div className="max-w-xl mx-auto space-y-6 w-full">
          <h4 className="text-xs font-mono font-bold uppercase text-[#f59e0b] tracking-wider text-center">{t("contact_directory")}</h4>
          
          {/* Rapid Info Card */}
          <div className="bg-white dark:bg-[#1C1B19] p-8 border-2 border-zinc-950 dark:border-zinc-800 rounded-2xl shadow-[4px_4px_0px_0px_rgba(24,24,27,1)] space-y-6">
            
            {/* Email block */}
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-red-100 dark:bg-red-955/45 border-2 border-zinc-955 rounded-xl text-red-600 shrink-0">
                <Mail className="h-5 w-5 stroke-2" />
              </div>
              <div className="space-y-1 flex-1">
                <span className="text-[10px] font-mono tracking-wider font-extrabold text-zinc-400 dark:text-zinc-550 block uppercase">{t("official_email")}</span>
                <a href={`mailto:${PERSONAL_INFO.email}`} className="text-sm font-black text-zinc-900 dark:text-white hover:text-[#f59e0b] break-all transition-colors font-mono">
                  {PERSONAL_INFO.email}
                </a>
                <button 
                  onClick={copyEmail}
                  className="text-[10px] text-[#f59e0b] font-bold flex items-center space-x-1 mt-1.5 outline-none cursor-pointer tracking-wide uppercase hover:underline"
                >
                  <Copy className="h-3.5 w-3.5" />
                  <span>{copiedEmail ? t("copied") : t("copy_address")}</span>
                </button>
              </div>
            </div>

            <div className="border-t border-zinc-100 dark:border-zinc-800"></div>

            {/* Phone block */}
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-emerald-100 dark:bg-emerald-955/35 border-2 border-zinc-955 rounded-xl text-emerald-600 shrink-0">
                <Phone className="h-5 w-5 stroke-2" />
              </div>
              <div className="space-y-1 flex-1">
                <span className="text-[10px] font-mono tracking-wider font-extrabold text-zinc-400 dark:text-zinc-550 block uppercase">{t("direct_riyadh_contact")}</span>
                <a href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, "")}`} className="text-sm font-black text-zinc-900 dark:text-white hover:text-[#f59e0b] transition-colors font-mono">
                  {PERSONAL_INFO.phone}
                </a>
                <button 
                  onClick={copyPhone}
                  className="text-[10px] text-[#f59e0b] font-bold flex items-center space-x-1 mt-1.5 outline-none cursor-pointer tracking-wide uppercase hover:underline"
                >
                  <Copy className="h-3.5 w-3.5" />
                  <span>{copiedPhone ? t("copied") : t("copy_phone")}</span>
                </button>
              </div>
            </div>

            <div className="border-t border-zinc-100 dark:border-zinc-800"></div>

            {/* LinkedIn block */}
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-blue-100 dark:bg-blue-955/35 border-2 border-zinc-955 rounded-xl text-blue-600 shrink-0">
                <Linkedin className="h-5 w-5 stroke-2" />
              </div>
              <div className="space-y-1 flex-1">
                <span className="text-[10px] font-mono tracking-wider font-extrabold text-zinc-400 dark:text-zinc-555 block uppercase">{t("professional_network")}</span>
                <a 
                  href="https://www.linkedin.com/in/joshua-albana" 
                  target="_blank" 
                  referrerPolicy="no-referrer"
                  className="text-sm font-black text-zinc-900 dark:text-white hover:text-[#f59e0b] transition-colors block mt-0.5"
                >
                  linkedin.com/in/joshua-albana
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
