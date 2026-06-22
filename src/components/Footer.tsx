import { ArrowUp, Heart } from "lucide-react";
import { PERSONAL_INFO } from "../data";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-zinc-950 border-t-2 border-zinc-950 text-zinc-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand block */}
          <div className="text-center md:text-left space-y-1">
            <span className="text-sm font-black text-white tracking-widest uppercase block">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-xs text-[#f59e0b] font-mono font-bold block uppercase tracking-wider">
              Operations & Systems Support Specialist
            </span>
          </div>

          {/* Copyright details */}
          <div className="text-center text-xs space-y-2">
            <p className="flex items-center justify-center space-x-1.5 font-bold uppercase tracking-wider text-zinc-300">
              <span>© {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.</span>
            </p>
            <p className="text-[10px] text-zinc-500 font-mono font-bold uppercase">
              Transferable Iqama (Sponsor Approved) • Based in Riyadh, Saudi Arabia
            </p>
          </div>

          {/* Action trigger: Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="p-3 bg-zinc-900 hover:bg-[#f59e0b] hover:text-zinc-950 text-white border-2 border-[#181715] hover:border-zinc-950 rounded-xl transition-all outline-none cursor-pointer flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(242,169,0,0.4)]"
            aria-label="Back to top"
          >
            <ArrowUp className="h-4 w-4 stroke-[2.5]" />
          </button>

        </div>
      </div>
    </footer>
  );
}
