import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Mail, Phone, CheckCircle, Copy, Send, 
  ShieldCheck, Linkedin
} from "lucide-react";
import { PERSONAL_INFO } from "../data";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setLoading(true);

    // Simulate direct secure routing dispatch
    setTimeout(() => {
      // Reset
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      setLoading(false);
      setSuccess(true);

      // Auto clear success notice after 4s
      setTimeout(() => setSuccess(false), 4000);
    }, 1200);
  };

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
            Direct Connect
          </div>
          <h3 className="text-4xl sm:text-5xl font-sans font-black tracking-tight text-zinc-950 dark:text-white uppercase leading-tight">
            Initiate Interview Coordination
          </h3>
          <p className="mt-4 text-sm font-semibold text-zinc-700 dark:text-zinc-350 max-w-xl mx-auto">
            Submit a message directly through my digital portal, or reach out using the official direct credentials below. Immediate responses guaranteed.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          
          {/* Column A: Contact Details Cards */}
          <div className="lg:col-span-12 xl:col-span-5 space-y-6 w-full">
            <h4 className="text-xs font-mono font-bold uppercase text-[#f59e0b] tracking-wider">Contact Directory</h4>
            
            {/* Rapid Info Card */}
            <div className="bg-white dark:bg-[#1C1B19] p-6 border-2 border-zinc-950 dark:border-zinc-800 rounded-2xl shadow-[4px_4px_0px_0px_rgba(24,24,27,1)] space-y-5">
              
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-red-100 dark:bg-red-955/45 border-2 border-zinc-955 rounded-xl text-red-600 shrink-0">
                  <Mail className="h-5 w-5 stroke-2" />
                </div>
                <div className="space-y-1 flex-1">
                  <span className="text-[10px] font-mono tracking-wider font-extrabold text-zinc-400 dark:text-zinc-550 block uppercase">Official Email</span>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="text-sm font-black text-zinc-900 dark:text-white hover:text-[#f59e0b] break-all transition-colors font-mono">
                    {PERSONAL_INFO.email}
                  </a>
                  <button 
                    onClick={copyEmail}
                    className="text-[10px] text-[#f59e0b] font-bold flex items-center space-x-1 mt-1.5 outline-none cursor-pointer tracking-wide uppercase hover:underline"
                  >
                    <Copy className="h-3.5 w-3.5" />
                    <span>{copiedEmail ? "Copied!" : "Copy Address"}</span>
                  </button>
                </div>
              </div>

              <div className="border-t border-zinc-100 dark:border-zinc-800"></div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-emerald-100 dark:bg-emerald-955/35 border-2 border-zinc-955 rounded-xl text-emerald-600 shrink-0">
                  <Phone className="h-5 w-5 stroke-2" />
                </div>
                <div className="space-y-1 flex-1">
                  <span className="text-[10px] font-mono tracking-wider font-extrabold text-zinc-400 dark:text-zinc-550 block uppercase">Direct Riyadh Contact</span>
                  <a href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, "")}`} className="text-sm font-black text-zinc-900 dark:text-white hover:text-[#f59e0b] transition-colors font-mono">
                    {PERSONAL_INFO.phone}
                  </a>
                  <button 
                    onClick={copyPhone}
                    className="text-[10px] text-[#f59e0b] font-bold flex items-center space-x-1 mt-1.5 outline-none cursor-pointer tracking-wide uppercase hover:underline"
                  >
                    <Copy className="h-3.5 w-3.5" />
                    <span>{copiedPhone ? "Copied!" : "Copy Phone"}</span>
                  </button>
                </div>
              </div>

              <div className="border-t border-zinc-100 dark:border-zinc-800"></div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-955/35 border-2 border-zinc-955 rounded-xl text-blue-600 shrink-0">
                  <Linkedin className="h-5 w-5 stroke-2" />
                </div>
                <div className="space-y-1 flex-1">
                  <span className="text-[10px] font-mono tracking-wider font-extrabold text-zinc-400 dark:text-zinc-555 block uppercase">Professional Network</span>
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

              <div className="border-t border-zinc-100 dark:border-zinc-800"></div>

              {/* Verified Badge */}
              <div className="p-4 bg-zinc-50 dark:bg-zinc-900 border-2 border-zinc-950 dark:border-zinc-750 rounded-xl flex items-start space-x-2.5 shadow-[2px_2px_0px_0px_rgba(24,24,27,1)]">
                <ShieldCheck className="h-5 w-5 text-[#f59e0b] shrink-0 mt-0.5" />
                <p className="text-[11px] font-semibold text-zinc-650 dark:text-zinc-300 leading-normal">
                  <strong className="text-zinc-900 dark:text-white uppercase block mb-0.5 text-xs">Official Credentials Only</strong>
                  Iqama details, professional training records from SEED and Helpful Agency templates can be fully validated via Qiwa / Absher during corporate screening phases.
                </p>
              </div>

            </div>

          </div>

          {/* Column B: Interactive Composer Form */}
          <div className="lg:col-span-12 xl:col-span-7 space-y-6 w-full">
            <h4 className="text-xs font-mono font-bold uppercase text-[#f59e0b] tracking-wider">Secure Message Composer</h4>
            
            <form onSubmit={handleSubmit} className="bg-white dark:bg-[#1C1B19] p-6 sm:p-8 border-2 border-zinc-950 dark:border-zinc-800 rounded-2xl shadow-[4px_4px_0px_0px_rgba(24,24,27,1)] space-y-5">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-zinc-700 dark:text-zinc-300">Full Name</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter full name"
                    className="w-full text-xs text-zinc-850 dark:text-white px-4 py-3 bg-[#F4F2EB] dark:bg-zinc-800 rounded-xl border-2 border-zinc-300 dark:border-zinc-700 focus:outline-none focus:border-zinc-950 dark:focus:border-[#f59e0b] focus:ring-2 focus:ring-amber-200 transition-all font-sans"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-zinc-700 dark:text-zinc-300">Email Address</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full text-xs text-zinc-850 dark:text-white px-4 py-3 bg-[#F4F2EB] dark:bg-zinc-800 rounded-xl border-2 border-zinc-300 dark:border-zinc-700 focus:outline-none focus:border-zinc-950 dark:focus:border-[#f59e0b] focus:ring-2 focus:ring-amber-200 transition-all font-sans"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-zinc-700 dark:text-zinc-300">Message Subject</label>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="e.g. Schedule Interview/Operations Inquiry"
                  className="w-full text-xs text-zinc-850 dark:text-white px-4 py-3 bg-[#F4F2EB] dark:bg-zinc-800 rounded-xl border-2 border-zinc-300 dark:border-zinc-700 focus:outline-none focus:border-zinc-950 dark:focus:border-[#f59e0b] focus:ring-2 focus:ring-amber-200 transition-all font-sans"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-zinc-700 dark:text-zinc-300 font-sans">Message Body</label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Hey Joshua, we would love to review your background..."
                  className="w-full text-xs text-zinc-850 dark:text-white px-4 py-3 bg-[#F4F2EB] dark:bg-zinc-800 rounded-xl border-2 border-zinc-300 dark:border-zinc-700 focus:outline-none focus:border-zinc-950 dark:focus:border-[#f59e0b] focus:ring-2 focus:ring-amber-200 transition-all font-sans resize-none"
                ></textarea>
              </div>

              {/* Status feedback alerts */}
              <AnimatePresence>
                {success && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="p-3 bg-emerald-100 border-2 border-zinc-950 text-emerald-900 text-xs font-bold rounded-xl flex items-center space-x-2 shadow-[2px_2px_0px_0px_rgba(242,169,0,0.5)]"
                  >
                    <CheckCircle className="h-4.5 w-4.5 shrink-0 text-emerald-600" />
                    <span>Inquiry sent successfully! Thank you.</span>
                  </motion.div>
                )}
              </AnimatePresence>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 bg-zinc-950 hover:bg-zinc-800 dark:bg-[#f59e0b] dark:text-zinc-950 disabled:bg-zinc-300 text-white font-black uppercase text-xs rounded-xl border-2 border-zinc-950 dark:border-[#f59e0b] shadow-[4px_4px_0px_0px_rgba(242,169,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(24,24,27,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all flex items-center justify-center space-x-2 cursor-pointer"
              >
                {loading ? (
                  <>
                    <span className="h-3.5 w-3.5 border-2 border-white/30 border-t-white dark:border-zinc-950/30 dark:border-t-zinc-950 rounded-full animate-spin"></span>
                    <span>Sending Inquiry...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4 shrink-0" />
                    <span>Send Inquiry Message</span>
                  </>
                )}
              </button>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
