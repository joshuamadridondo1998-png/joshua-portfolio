import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Briefcase, GraduationCap, Award, Calendar, MapPin, CheckCircle, ArrowRight } from "lucide-react";
import { EXPERIENCE, EDUCATION, CERTIFICATIONS } from "../data";
import { useLanguage } from "../context/LanguageContext";

type TabType = "experience" | "education" | "certifications";

export default function ExperienceSection() {
  const [activeTab, setActiveTab] = useState<TabType>("experience");
  const { t } = useLanguage();

  return (
    <section id="experience" className="relative py-24 bg-[#F4F2EB] dark:bg-[#121110] scroll-mt-12 transition-colors duration-300 overflow-hidden">
      
      {/* Giant Editorial Background Section Outline */}
      <div 
        className="absolute top-8 left-1/2 -translate-x-1/2 text-center text-transparent text-8xl md:text-[8rem] lg:text-[10rem] font-black tracking-widest leading-none pointer-events-none opacity-20 dark:opacity-10 select-none uppercase"
        style={{ WebkitTextStroke: "2px currentColor" }}
      >
        TIMELINE
      </div>

      {/* Sideways stamp */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center space-y-2 select-none pointer-events-none z-10">
        <span className="text-[11px] font-mono tracking-[0.25em] text-zinc-400 dark:text-zinc-550 uppercase rotate-90 origin-center translate-y-24 font-bold">
          QUALIFICATIONS • 2026
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 relative">
          <div className="inline-block px-3 py-1.5 bg-[#f59e0b] text-zinc-950 text-[10px] font-mono uppercase tracking-widest font-black rounded-lg rotate-[-1deg] mb-4 select-none">
            {t("qualifications_label")}
          </div>
          <h3 className="text-4xl sm:text-5xl font-sans font-black tracking-tight text-zinc-950 dark:text-white uppercase">
            {t("qualifications_title")}
          </h3>
          <p className="mt-4 text-sm font-semibold text-zinc-700 dark:text-zinc-350">
            {t("qualifications_desc")}
          </p>
        </div>

        {/* Tab Controls designed like mechanical switches */}
        <div className="flex justify-center mb-16 px-2">
          <div className="grid grid-cols-3 gap-2 bg-zinc-200/60 dark:bg-zinc-900 border-2 border-zinc-950 dark:border-zinc-800 p-1.5 rounded-2xl max-w-xl w-full">
            <button
              onClick={() => setActiveTab("experience")}
              className={`flex items-center justify-center space-x-2 py-3 px-2 sm:px-4 text-xs font-black rounded-xl transition-all cursor-pointer border-2 uppercase tracking-tight ${
                activeTab === "experience"
                  ? "bg-[#f59e0b] text-zinc-950 border-zinc-950 shadow-[2px_2px_0px_0px_rgba(24,24,27,1)]"
                  : "bg-transparent text-zinc-700 dark:text-zinc-400 border-transparent hover:text-zinc-950 dark:hover:text-white"
              }`}
            >
              <Briefcase className="h-4 w-4 shrink-0" />
              <span className="hidden sm:inline">{t("work_history")}</span>
              <span className="inline sm:hidden">{t("work_history")}</span>
            </button>
            <button
              onClick={() => setActiveTab("education")}
              className={`flex items-center justify-center space-x-2 py-3 px-2 sm:px-4 text-xs font-black rounded-xl transition-all cursor-pointer border-2 uppercase tracking-tight ${
                activeTab === "education"
                  ? "bg-[#f59e0b] text-zinc-950 border-zinc-950 shadow-[2px_2px_0px_0px_rgba(24,24,27,1)]"
                  : "bg-transparent text-zinc-700 dark:text-zinc-400 border-transparent hover:text-zinc-950 dark:hover:text-white"
              }`}
            >
              <GraduationCap className="h-4 w-4 shrink-0" />
              <span className="hidden sm:inline">{t("study")}</span>
              <span className="inline sm:hidden">{t("study")}</span>
            </button>
            <button
              onClick={() => setActiveTab("certifications")}
              className={`flex items-center justify-center space-x-2 py-3 px-2 sm:px-4 text-xs font-black rounded-xl transition-all cursor-pointer border-2 uppercase tracking-tight ${
                activeTab === "certifications"
                  ? "bg-[#f59e0b] text-zinc-950 border-zinc-950 shadow-[2px_2px_0px_0px_rgba(24,24,27,1)]"
                  : "bg-transparent text-zinc-700 dark:text-zinc-400 border-transparent hover:text-zinc-950 dark:hover:text-white"
              }`}
            >
              <Award className="h-4 w-4 shrink-0" />
              <span className="hidden sm:inline">{t("certs")}</span>
              <span className="inline sm:hidden">{t("certs")}</span>
            </button>
          </div>
        </div>

        {/* Tab Content Display */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            {activeTab === "experience" && (
              <motion.div
                key="experience-tab"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="space-y-12 relative before:absolute before:inset-y-1 before:left-4 sm:before:left-1/2 before:w-1 before:bg-zinc-950 dark:before:bg-zinc-800"
              >
                {EXPERIENCE.map((exp, index) => {
                  const isEven = index % 2 === 0;
                  const expIdNum = index + 1;
                  return (
                    <div
                       key={exp.id}
                       className={`flex flex-col sm:flex-row items-stretch relative ${
                         isEven ? "sm:flex-row-reverse" : ""
                       }`}
                     >
                       {/* Central Timeline Switch Node */}
                       <div className="absolute left-4 sm:left-1/2 top-4 -translate-x-1/2 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-[#f59e0b] border-2 border-zinc-950 text-zinc-950 shadow-[2px_2px_0px_0px_rgba(24,24,27,1)]">
                         <Briefcase className="h-4.5 w-4.5 stroke-[2.5]" />
                       </div>
 
                       {/* Content Card Side */}
                       <div className="w-full sm:w-1/2 pl-12 sm:pl-0 sm:px-8">
                         <div className="bg-white dark:bg-[#1C1B19] border-2 border-zinc-950 dark:border-zinc-800 p-6 rounded-2xl shadow-[3px_3px_0px_0px_rgba(24,24,27,1)] dark:shadow-[3px_3px_0px_0px_rgba(242,169,0,0.7)] hover:shadow-[5px_5px_0px_0px_rgba(242,169,0,1)] dark:hover:shadow-[5px_5px_0px_0px_rgba(242,169,0,1)] transition-all text-left">
                           
                           {/* Metadata row with custom badges */}
                           <div className="flex flex-wrap items-center gap-2 mb-3">
                             <span className="flex items-center space-x-1.5 text-xs font-mono font-bold text-zinc-950 bg-[#f59e0b] border border-zinc-950 px-2.5 py-1 rounded-md shadow-[1.5px_1.5px_0px_0px_rgba(24,24,27,1)]">
                               <Calendar className="h-3 w-3" />
                               <span>{t("exp-" + expIdNum + "_period")}</span>
                             </span>
                             <span className="flex items-center space-x-1 text-xs font-bold text-zinc-500 font-mono bg-zinc-100 dark:bg-zinc-900 border border-zinc-250 dark:border-zinc-800 px-2.5 py-1 rounded-sm">
                               <MapPin className="h-3 w-3 text-rose-500" />
                               <span>{t("exp-" + expIdNum + "_location")}</span>
                             </span>
                           </div>
 
                           {/* Role and Company */}
                           <h4 className="text-xl font-black text-zinc-900 dark:text-white uppercase tracking-tight leading-none mt-4">
                             {t("exp-" + expIdNum + "_role")}
                           </h4>
                           <span className="text-xs font-mono tracking-wider font-extrabold text-[#f59e0b] block mt-1.5 mb-4 uppercase">
                             {t("exp-" + expIdNum + "_company")}
                           </span>
 
                           {/* Bullets with custom indicators */}
                           <ul className="space-y-3 pt-3 border-t border-zinc-100 dark:border-zinc-800">
                             {exp.bullets.map((_, idx) => (
                               <li key={idx} className="flex items-start space-x-2.5 text-xs text-zinc-700 dark:text-zinc-300 font-medium leading-relaxed">
                                 <span className="h-2 w-2 rounded-full bg-[#f59e0b] mt-1 shrink-0 border border-zinc-950" />
                                 <span>{t("exp-" + expIdNum + "_bullet_" + idx)}</span>
                               </li>
                             ))}
                           </ul>
 
                         </div>
                       </div>
 
                       {/* Blank Side spacer to balance columns */}
                       <div className="hidden sm:block w-1/2" />
                     </div>
                   );
                 })}
               </motion.div>
            )}

            {activeTab === "education" && (
              <motion.div
                key="education-tab"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="space-y-6"
              >
                {EDUCATION.map((edu, idx) => (
                  <div
                    key={idx}
                    className="p-6 bg-white dark:bg-[#1C1B19] border-2 border-zinc-950 dark:border-zinc-800 rounded-2xl shadow-[4px_4px_0px_0px_rgba(24,24,27,1)] dark:shadow-[4px_4px_0px_0px_rgba(242,169,0,0.7)] hover:shadow-[6px_6px_0px_0px_rgba(242,169,0,1)] dark:hover:shadow-[6px_6px_0px_0px_rgba(242,169,0,1)] flex flex-col md:flex-row md:items-center justify-between gap-4 text-left group transition-all duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-zinc-100 dark:bg-zinc-800 border-2 border-zinc-950 dark:border-zinc-750 rounded-xl text-zinc-700 shrink-0 group-hover:bg-[#f59e0b] group-hover:text-zinc-950 transition-colors">
                        <GraduationCap className="h-6 w-6 stroke-2" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-lg font-black text-zinc-950 dark:text-white uppercase tracking-tight leading-snug">
                          {t("edu_degree_" + idx)}
                        </h4>
                        <p className="text-sm font-bold text-[#f59e0b]">
                          {t("edu_school_" + idx)}
                        </p>
                        <p className="text-xs text-zinc-550 dark:text-zinc-400 font-sans max-w-xl leading-relaxed mt-1 font-semibold">
                          {t("edu_details_" + idx)}
                        </p>
                      </div>
                    </div>

                    <div className="shrink-0 flex items-center md:flex-col md:items-end justify-between font-mono">
                      <span className="text-xs font-bold text-zinc-950 bg-[#f59e0b] border border-zinc-950 px-2.5 py-1 rounded shadow-[1.5px_1.5px_0px_0px_rgba(24,24,27,1)]">
                        {t("edu_period_" + idx)}
                      </span>
                    </div>
                  </div>
                ))}

                {/* Additional Note for Saudi healthcare alignment */}
                <div className="p-6 bg-zinc-950 dark:bg-[#1C1B19] text-white rounded-2xl border-2 border-zinc-950 flex flex-col sm:flex-row items-start space-x-0 sm:space-x-4 space-y-3 sm:space-y-0 mt-4 shadow-[4px_4px_0px_0px_rgba(242,169,0,1)]">
                  <CheckCircle className="h-5 w-5 text-[#f59e0b] shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-extrabold uppercase text-xs tracking-wider text-[#f59e0b] block mb-1">{t("riyadh_healthcare_alignment")}</strong>
                    <span className="text-xs text-zinc-300 font-medium leading-relaxed">
                      {t("riyadh_healthcare_alignment_desc")}
                    </span>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "certifications" && (
              <motion.div
                key="certifications-tab"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                {CERTIFICATIONS.map((cert, index) => {
                  let accentColorClass = "border-t-emerald-500 text-emerald-700 bg-emerald-50/40";
                  if (cert.badgeColor === "blue") {
                    accentColorClass = "border-t-[#f59e0b] text-[#f59e0b] bg-amber-50/40";
                  } else if (cert.badgeColor === "amber") {
                    accentColorClass = "border-t-amber-500 text-amber-700 bg-amber-50/40";
                  }

                  return (
                    <div
                      key={index}
                      className="p-6 bg-white dark:bg-[#1C1B19] border-2 border-zinc-950 dark:border-zinc-800 border-t-8 border-t-[#f59e0b] rounded-2xl shadow-[3px_3px_0px_0px_rgba(24,24,27,1)] dark:shadow-[3px_3px_0px_0px_rgba(242,169,0,0.7)] hover:shadow-[5px_5px_0px_0px_rgba(242,169,0,1)] hover:-translate-y-1 transition-all duration-300 text-left flex flex-col justify-between"
                    >
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-[10px] font-mono font-bold tracking-widest text-zinc-400 uppercase">
                            {t("certification")}
                          </span>
                          <Award className="h-5 w-5 text-[#f59e0b]" />
                        </div>
                        
                        <h4 className="text-base font-black text-zinc-900 dark:text-white uppercase tracking-tight leading-tight">
                          {t("cert_name_" + index)}
                        </h4>
                      </div>

                      <div className="pt-6 mt-4 border-t border-zinc-150 dark:border-zinc-805 flex items-center justify-between">
                        <span className="text-xs font-bold text-zinc-650 dark:text-zinc-400">
                          {t("cert_issuer_" + index)}
                        </span>
                        <span className="text-xs font-mono font-bold text-zinc-950 bg-[#f59e0b] border border-zinc-950 px-2.5 py-0.5 rounded shadow-[1px_1px_0px_0px_rgba(24,24,27,1)]">
                          {cert.year}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>

      {/* Styled bottom zine divider matching arrow structure in the attached image */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 md:mt-24 pointer-events-none">
        <div className="relative flex items-center justify-between border-t border-zinc-400 dark:border-zinc-800">
          <span className="text-[10px] font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-widest py-3">Section 03 / Qualifications</span>
          {/* Circled Arrow design icon intersecting the line */}
          <div className="absolute right-12 top-[-14px] bg-[#F4F2EB] dark:bg-[#121110] px-2">
            <div className="h-7 w-7 rounded-full border border-zinc-400 dark:border-zinc-700 flex items-center justify-center text-zinc-900 dark:text-zinc-100">
              <span className="text-xs font-bold font-mono">&#8594;</span>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
