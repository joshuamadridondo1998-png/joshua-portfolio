import React from "react";
import * as Icons from "lucide-react";
import { SERVICES } from "../data";

export default function ServicesSection() {
  // Helpers to fetch icons dynamically
  const renderIcon = (name: string) => {
    const LucideIcon = (Icons as any)[name];
    if (LucideIcon) {
      return <LucideIcon className="h-6 w-6 text-[#f59e0b] dark:text-amber-400 group-hover:text-zinc-950 transition-colors" />;
    }
    return <Icons.HelpCircle className="h-6 w-6 text-[#f59e0b] dark:text-amber-400" />;
  };

  return (
    <section id="services" className="relative py-24 bg-[#EAE7E1] dark:bg-[#181715] border-y-2 border-zinc-950 dark:border-zinc-800 scroll-mt-12 transition-colors duration-300 overflow-hidden">
      
      {/* Huge Editorial Background Section Outline */}
      <div 
        className="absolute top-8 left-1/2 -translate-x-1/2 text-center text-transparent text-8xl md:text-[8rem] lg:text-[10rem] font-black tracking-widest leading-none pointer-events-none opacity-20 dark:opacity-10 select-none uppercase"
        style={{ WebkitTextStroke: "2px currentColor" }}
      >
        SERVICES
      </div>

      {/* Sideways decorative stamp on the right side */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center space-y-2 select-none pointer-events-none z-10">
        <span className="text-[11px] font-mono tracking-[0.25em] text-zinc-400 dark:text-zinc-550 uppercase rotate-90 origin-center translate-y-24 font-bold">
          CORE CAPABILITIES • 2026
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 relative">
          <div className="inline-block px-3 py-1.5 bg-[#f59e0b] text-zinc-950 text-[10px] font-mono uppercase tracking-widest font-black rounded-lg rotate-1 mb-4 select-none">
            Core Contributions
          </div>
          <h3 className="text-4xl sm:text-5xl font-sans font-black tracking-tight text-zinc-950 dark:text-white uppercase">
            Specialized Operations & Administrative Solutions
          </h3>
          <p className="mt-4 text-sm font-semibold text-zinc-700 dark:text-zinc-350 max-w-xl mx-auto">
            Maximizing business output through disciplined logistics systems, spreadsheet auditing, workflow automation, and structured office support functions.
          </p>
        </div>

        {/* Services Grid with Graphic Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-white dark:bg-[#1C1B19] rounded-2xl p-6 lg:p-8 border-2 border-zinc-950 dark:border-zinc-800 shadow-[4px_4px_0px_0px_rgba(24,24,27,1)] dark:shadow-[4px_4px_0px_0px_rgba(242,169,0,0.7)] hover:-translate-y-1.5 hover:shadow-[8px_8px_0px_0px_rgba(242,169,0,1)] dark:hover:shadow-[8px_8px_0px_0px_rgba(242,169,0,1)] transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Icon & Title */}
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-[#F4F2EB] dark:bg-zinc-800 border-2 border-zinc-950 dark:border-zinc-700 rounded-xl group-hover:bg-[#f59e0b] group-hover:text-zinc-950 dark:group-hover:text-zinc-950 transition-all">
                    {renderIcon(service.iconName)}
                  </div>
                  <h4 className="text-xl font-black text-zinc-950 dark:text-white uppercase tracking-tight">
                    {service.title}
                  </h4>
                </div>

                <p className="text-zinc-650 dark:text-zinc-300 text-sm leading-relaxed mb-6 font-medium">
                  {service.description}
                </p>

                {/* Bullet details with custom geometric check-marks */}
                <ul className="space-y-3 border-t border-zinc-200 dark:border-zinc-800/80 pt-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2.5 text-sm">
                      <Icons.CheckCircle2 className="h-4.5 w-4.5 text-[#f59e0b] shrink-0 mt-0.5" />
                      <span className="text-zinc-800 dark:text-zinc-350 font-bold">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Decorative design highlight */}
              <div className="mt-8 pt-4 border-t border-zinc-150 dark:border-zinc-800/70 flex items-center justify-between">
                <span className="text-[10px] font-mono tracking-wider font-extrabold text-zinc-400 group-hover:text-zinc-950 dark:group-hover:text-[#f59e0b] transition-colors uppercase">
                  Service standard verified
                </span>
                <Icons.Sparkles className="h-4 w-4 text-zinc-300 dark:text-zinc-700 group-hover:text-amber-500 transition-colors" />
              </div>

            </div>
          ))}
        </div>

        {/* Competitive Advantage callout banner designed with the premium editorial look */}
        <div className="mt-16 p-8 bg-zinc-950 dark:bg-[#1C1B19] rounded-2xl border-2 border-zinc-950 dark:border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[5px_5px_0px_0px_rgba(242,169,0,1)] relative overflow-hidden">
          {/* Subtle background circle decoration */}
          <div className="absolute right-[-10%] top-[-20%] w-60 h-60 rounded-full border border-zinc-850 pointer-events-none opacity-20"></div>

          <div className="space-y-2 text-center md:text-left relative z-10">
            <h4 className="text-xl font-black text-white uppercase tracking-normal">Need a customized administrative process configured?</h4>
            <p className="text-zinc-400 text-xs sm:text-sm max-w-xl font-medium">
              I specialize in adapting quickly to proprietary software, setting up automation triggers, and cleaning legacy data tables manually. Direct supervisor reference letters are available.
            </p>
          </div>
          <a
            href="#contact"
            className="shrink-0 px-6 py-3.5 bg-[#f59e0b] border-2 border-[#f59e0b] text-zinc-950 text-xs font-black uppercase rounded-xl hover:bg-amber-500 hover:border-amber-500 transition-all flex items-center space-x-2 relative z-10"
          >
            <span>Ask Joshua</span>
            <Icons.ArrowUpRight className="h-4.5 w-4.5 text-zinc-950 stroke-[3]" />
          </a>
        </div>

      </div>

      {/* Styled bottom zine divider matching arrow structure in the attached image */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 md:mt-24 pointer-events-none">
        <div className="relative flex items-center justify-between border-t border-zinc-400 dark:border-zinc-800">
          <span className="text-[10px] font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-widest py-3">Section 02 / Capabilities</span>
          {/* Circled Arrow design icon intersecting the line */}
          <div className="absolute right-12 top-[-14px] bg-[#EAE7E1] dark:bg-[#181715] px-2">
            <div className="h-7 w-7 rounded-full border border-zinc-400 dark:border-zinc-700 flex items-center justify-center text-zinc-900 dark:text-zinc-100">
              <span className="text-xs font-bold font-mono">&#8594;</span>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
