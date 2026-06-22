import React from "react";
import { Quote, Star, ArrowRight } from "lucide-react";
import { TESTIMONIALS } from "../data";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-24 bg-[#EAE7E1] dark:bg-[#181715] border-y-2 border-zinc-950 dark:border-zinc-800 scroll-mt-12 transition-colors duration-300 overflow-hidden">
      
      {/* Giant Background Outline Title */}
      <div 
        className="absolute top-8 left-1/2 -translate-x-1/2 text-center text-transparent text-8xl md:text-[8rem] lg:text-[10rem] font-black tracking-widest leading-none pointer-events-none opacity-20 dark:opacity-10 select-none uppercase font-black"
        style={{ WebkitTextStroke: "2px currentColor" }}
      >
        REVIEWS
      </div>

      {/* Sideways branding stamp on the right side */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center space-y-2 select-none pointer-events-none z-10">
        <span className="text-[11px] font-mono tracking-[0.25em] text-zinc-400 dark:text-zinc-550 uppercase rotate-90 origin-center translate-y-24 font-bold">
          ENDORSEMENTS • CLIENTS © 2026
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 relative">
          <div className="inline-block px-3 py-1.5 bg-[#f59e0b] text-zinc-950 text-[10px] font-mono uppercase tracking-widest font-black rounded-lg rotate-[-1deg] mb-4 select-none">
            Endorsements
          </div>
          <h3 className="text-4xl sm:text-5xl font-sans font-black tracking-tight text-zinc-950 dark:text-white uppercase leading-tight">
            Supervisor & Partner Testimonials
          </h3>
          <p className="mt-4 text-sm font-semibold text-zinc-700 dark:text-zinc-350 max-w-xl mx-auto">
            Endorsements from previous supervisors, business owners, and operations managers validating my dedication, integrity, and operational execution speed.
          </p>
        </div>

        {/* Testimonials Grid Layout with raw paper boards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white dark:bg-[#1C1B19] border-2 border-zinc-950 dark:border-zinc-800 p-6 sm:p-8 rounded-2xl flex flex-col justify-between shadow-[4px_4px_0px_0px_rgba(24,24,27,1)] dark:shadow-[4px_4px_0px_0px_rgba(242,169,0,0.7)] hover:-translate-y-1.5 hover:shadow-[8px_8px_0px_0px_rgba(242,169,0,1)] transition-all duration-300 group"
            >
              <div className="space-y-6 text-left">
                {/* Five star indicator & Quote Icon */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4.5 w-4.5 fill-[#f59e0b] text-[#f59e0b] stroke-1" />
                    ))}
                  </div>
                  <Quote className="h-6 w-6 text-zinc-300 dark:text-zinc-700 group-hover:text-[#f59e0b] group-hover:scale-110 transition-all duration-300" />
                </div>

                {/* Endorsement quote text */}
                <p className="text-zinc-700 dark:text-zinc-300 text-sm leading-relaxed italic font-medium">
                  "{testimonial.quote}"
                </p>
              </div>

              {/* Endorsement author details */}
              <div className="mt-8 pt-6 border-t-2 border-zinc-100 dark:border-zinc-800 text-left">
                <span className="block font-black text-zinc-950 dark:text-white uppercase tracking-tight text-lg">
                  {testimonial.name}
                </span>
                <span className="block text-xs font-bold text-[#f59e0b] uppercase font-mono mt-0.5">
                  {testimonial.role} &mdash; {testimonial.company}
                </span>
                
                {/* Author specialized tags */}
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {testimonial.tags.map((tag, idx) => (
                    <span key={idx} className="text-[9px] font-mono font-bold text-zinc-950 bg-zinc-100 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 px-2 py-0.5 rounded shadow-[1px_1px_0px_0px_rgba(24,24,27,1)]">
                      #{tag.toUpperCase()}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Riyadh Transfer Note Callout in Typewriter Block Accent */}
        <div className="mt-16 text-center max-w-2xl mx-auto p-5 bg-zinc-950 text-white rounded-2xl border-2 border-zinc-950 dark:border-zinc-800 shadow-[4px_4px_0px_0px_rgba(242,169,0,1)] flex items-start space-x-3.5">
          <Star className="h-5 w-5 text-[#f59e0b] shrink-0 mt-0.5 fill-[#f59e0b] animate-pulse" />
          <p className="text-xs text-left font-semibold text-zinc-350 leading-relaxed">
            <strong className="text-white block uppercase tracking-wider mb-0.5">Official Reference Letters</strong>
            Detailed, signed reference certificates from Mrs. Maryam Jaber and former operations superiors can be dispatched in PDF form upon interview scheduling requests.
          </p>
        </div>

      </div>

      {/* Styled bottom zine divider matching arrow structure in the attached image */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 md:mt-24 pointer-events-none">
        <div className="relative flex items-center justify-between border-t border-zinc-400 dark:border-zinc-800">
          <span className="text-[10px] font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-widest py-3">Section 04 / Endorsements</span>
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
