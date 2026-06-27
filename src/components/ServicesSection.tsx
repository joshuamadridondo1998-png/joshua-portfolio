import React, { useState } from "react";
import * as Icons from "lucide-react";
import { SERVICES } from "../data";
import { useLanguage } from "../context/LanguageContext";

// Import workflow images directly so Vite bundles and resolves them in production
import HomecareLeadImage from "../assets/images/homecare_lead_automation_1782574571333.jpg";
import DepartmentRoutingImage from "../assets/images/multi_branch_routing_1782574585786.jpg";
import PossibleLeadsImage from "../assets/images/possible_leads_email_1782574598108.jpg";
import ZapierWorkflowImage from "../assets/images/zapier_workflow_1782198710664.jpg";

interface ZapierWorkflow {
  id: string;
  title: string;
  image: string;
  subtitle: string;
  challenge: string;
  steps: string[];
  impact: string;
}

const ZAPIER_WORKFLOWS: ZapierWorkflow[] = [
  {
    id: "homecare-lead",
    title: "Homecare Lead Automation",
    image: HomecareLeadImage,
    subtitle: "Lead Capture & Dynamic Notification Dispatch Pipeline",
    challenge: "Incoming patient/care requests from Google Forms required manual review, slow formatting, manual CRM copy-pasting, and delayed staff alerts.",
    steps: [
      "1. Google Forms: Triggers instantly upon form submission.",
      "2. Formatter by Zapier (Text): Cleans and formats name fields to Standard Title Case.",
      "3. Formatter by Zapier (Numbers): Cleans telephone inputs to global Saudi/International standards.",
      "4. Formatter by Zapier (Date/Time): Standardizes timestamps to match the local timezone.",
      "5. Google Sheets: Automatically logs organized client profiles to the master audit roster.",
      "6. Gmail: Automatically dispatches a structured operational briefing to the regional team.",
      "7. WhatsApp Notifications: Sends instant confirmation text alerts to designated caregivers.",
      "8. Gmail: Follows up automatically with the client with official brochures."
    ],
    impact: "Reduces client response delay from 4 hours to under 30 seconds with 100% data integrity."
  },
  {
    id: "dept-routing",
    title: "Multi-Branch Department Routing",
    image: DepartmentRoutingImage,
    subtitle: "Intelligent Inquiry Classification & Path Filtering Routing",
    challenge: "Inquiries from multiple company divisions arrived in a single inbox, causing extensive sorting delay and misrouted assignments.",
    steps: [
      "1. Google Forms: Customer fills out inquiry form selecting department.",
      "2. Formatter by Zapier: Standardizes the client's full name to Title Case.",
      "3. Filter by Zapier: Only processes valid form entries containing verified contacts.",
      "4. Paths by Zapier (Sales, Finance, HR, Tech Support): Splitting the flow 4-ways.",
      "5. Branches (e.g. Sales branch): Checks condition ➔ Sends customized Gmail, updates Google Sheets row in Sales tab, and notifies Sales Manager."
    ],
    impact: "Divides administrative sorting workload by 100% and routes files directly to stakeholders instantly."
  },
  {
    id: "leads-email",
    title: "Possible Leads on Email",
    image: PossibleLeadsImage,
    subtitle: "High-Velocity Lead Logging & Automated Autoresponder Setup",
    challenge: "Prospective customer leads on email were forgotten or logged inconsistently into spreadsheets, leading to lost conversion opportunities.",
    steps: [
      "1. Google Forms: Prospective lead fills out inquiry or booking form.",
      "2. Formatter by Zapier: Trims white space from email addresses to prevent sending failures.",
      "3. Formatter by Zapier: Capitalizes the client's first name for personal greetings.",
      "4. Google Sheets: Appends the lead data with specific source tags to spreadsheet.",
      "5. Gmail: Automatically fires a personalized introductory email response to the lead."
    ],
    impact: "Saves 5+ hours of manual data entry weekly and guarantees 100% of leads receive immediate welcome letters."
  },
  {
    id: "zapier-workflow",
    title: "AI-Assisted Support & Dispatch",
    image: ZapierWorkflowImage,
    subtitle: "Real-Time Support Routing & Ticketing Automation",
    challenge: "Customer inquiries and operational help requests were handled manually in silos, causing delays and inconsistent service levels.",
    steps: [
      "1. Customer Inquiry: Received in central inbox from multiple channels.",
      "2. Formatter by Zapier: Identifies key customer parameters and cleans input data.",
      "3. Filter & Router: Validates fields and automatically separates tasks into priority queues.",
      "4. Automated Notifications: Delivers instantaneous Slack/WhatsApp alert to the support team.",
      "5. CRM/Sheets Update: Creates or updates records in central system for real-time audit logs."
    ],
    impact: "Ensures zero lost inquiries, reducing response time to under 5 minutes with automatic tracking."
  }
];

export default function ServicesSection() {
  const [selectedWorkflow, setSelectedWorkflow] = useState<ZapierWorkflow | null>(null);
  const { t } = useLanguage();

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
        className="absolute top-8 left-1/2 -translate-x-1/2 text-center text-[#121110]/5 dark:text-white/5 text-8xl md:text-[8rem] lg:text-[10rem] font-black tracking-widest leading-none pointer-events-none select-none uppercase"
        style={{ WebkitTextStroke: "2px currentColor" }}
      >
        SERVICES
      </div>

      {/* Sideways decorative stamp on the right side */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center space-y-2 select-none pointer-events-none z-10">
        <span className="text-[11px] font-mono tracking-[0.25em] text-zinc-400 dark:text-zinc-500 uppercase rotate-90 origin-center translate-y-24 font-bold">
          CORE CAPABILITIES • 2026
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 relative">
          <div className="inline-block px-3 py-1.5 bg-[#f59e0b] text-zinc-950 text-[10px] font-mono uppercase tracking-widest font-black rounded-lg rotate-1 mb-4 select-none">
            {t("core_contributions")}
          </div>
          <h3 className="text-4xl sm:text-5xl font-sans font-black tracking-tight text-zinc-950 dark:text-white uppercase">
            {t("administrative_solutions")}
          </h3>
          <p className="mt-4 text-sm font-semibold text-zinc-700 dark:text-zinc-350 max-w-xl mx-auto">
            {t("maximizing_output")}
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
                    {t(service.id + "_title")}
                  </h4>
                </div>

                <p className="text-zinc-650 dark:text-zinc-350 text-sm leading-relaxed mb-6 font-medium">
                  {t(service.id + "_desc")}
                </p>

                {/* Bullet details with custom geometric check-marks */}
                <ul className="space-y-3 border-t border-zinc-200 dark:border-zinc-800/85 pt-4">
                  {service.features.map((_, idx) => (
                    <li key={idx} className="flex items-start space-x-2.5 text-sm">
                      <Icons.CheckCircle2 className="h-4.5 w-4.5 text-[#f59e0b] shrink-0 mt-0.5" />
                      <span className="text-zinc-800 dark:text-zinc-300 font-bold">{t(service.id + "_feature_" + idx)}</span>
                    </li>
                  ))}
                </ul>

                {/* Specific Portfolio Item Subcard for Zapier Service Card */}
                {service.id === "automation-ai" && (
                  <div className="mt-6 p-4 bg-[#F4F2EB] dark:bg-zinc-850 rounded-xl border-2 border-dashed border-zinc-400 dark:border-zinc-700">
                    <span className="text-[10px] font-mono font-black text-[#f59e0b] uppercase tracking-wider block mb-3">
                      {t("live_workflows_portfolio")}
                    </span>
                    <div className="space-y-2">
                      {ZAPIER_WORKFLOWS.map((flow) => (
                        <button
                          key={flow.id}
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedWorkflow(flow);
                          }}
                          className="w-full text-left p-2.5 bg-white dark:bg-[#121110] hover:bg-amber-50 dark:hover:bg-zinc-900 border-2 border-zinc-950 dark:border-zinc-700 hover:border-[#f59e0b] rounded-lg transition-all flex items-center justify-between group/btn cursor-pointer shadow-[2px_2px_0px_0px_rgba(24,24,27,1)] hover:translate-x-0.5 hover:translate-y-0.5"
                        >
                          <div className="flex items-center space-x-2.5">
                            <Icons.Workflow className="h-4 w-4 text-[#f59e0b] shrink-0" />
                            <span className="text-xs font-black text-zinc-950 dark:text-white uppercase tracking-tight">
                              {t(flow.id + "_title")}
                            </span>
                          </div>
                          <Icons.Maximize2 className="h-3.5 w-3.5 text-zinc-400 group-hover/btn:text-[#f59e0b] transition-colors" />
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Decorative design highlight */}
              <div className="mt-8 pt-4 border-t border-zinc-150 dark:border-zinc-800/70 flex items-center justify-between">
                <span className="text-[10px] font-mono tracking-wider font-extrabold text-zinc-400 group-hover:text-zinc-950 dark:group-hover:text-[#f59e0b] transition-colors uppercase">
                  {t("verified_standard")}
                </span>
                <Icons.Sparkles className="h-4 w-4 text-zinc-300 dark:text-zinc-750 group-hover:text-amber-500 transition-colors" />
              </div>

            </div>
          ))}
        </div>

        {/* Competitive Advantage callout banner designed with the premium editorial look */}
        <div className="mt-16 p-8 bg-zinc-950 dark:bg-[#1C1B19] rounded-2xl border-2 border-zinc-950 dark:border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[5px_5px_0px_0px_rgba(242,169,0,1)] relative overflow-hidden">
          {/* Subtle background circle decoration */}
          <div className="absolute right-[-10%] top-[-20%] w-60 h-60 rounded-full border border-zinc-800 pointer-events-none opacity-20"></div>

          <div className="space-y-2 text-center md:text-left relative z-10">
            <h4 className="text-xl font-black text-white uppercase tracking-normal">{t("need_custom_process")}</h4>
            <p className="text-zinc-400 text-xs sm:text-sm max-w-xl font-medium">
              {t("specialize_adapting")}
            </p>
          </div>
          <a
            href="#contact"
            className="shrink-0 px-6 py-3.5 bg-[#f59e0b] border-2 border-[#f59e0b] text-zinc-950 text-xs font-black uppercase rounded-xl hover:bg-amber-500 hover:border-amber-500 transition-all flex items-center space-x-2 relative z-10"
          >
            <span>{t("ask_joshua")}</span>
            <Icons.ArrowUpRight className="h-4.5 w-4.5 text-zinc-950 stroke-[3]" />
          </a>
        </div>

      </div>

      {/* Modal Overlay for Zapier Portfolio Workflows */}
      {selectedWorkflow && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-md"
          onClick={() => setSelectedWorkflow(null)}
        >
          <div 
            className="bg-white dark:bg-[#1C1B19] rounded-2xl border-2 border-zinc-950 dark:border-zinc-800 w-full max-w-5xl max-h-[90vh] overflow-hidden flex flex-col shadow-[8px_8px_0px_0px_rgba(242,169,0,1)] animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-6 bg-[#F4F2EB] dark:bg-zinc-900 border-b-2 border-zinc-950 dark:border-zinc-800 flex items-center justify-between">
              <div>
                <div className="inline-flex items-center space-x-2 px-2.5 py-1 bg-amber-500/10 border border-amber-500/30 rounded-lg text-[#f59e0b] text-[10px] font-mono uppercase tracking-widest font-black">
                  <Icons.Workflow className="h-3.5 w-3.5 mr-1" />
                  {t("portfolio_showcase")}
                </div>
                <h4 className="text-xl sm:text-2xl font-black text-zinc-950 dark:text-white uppercase tracking-tight mt-2">
                  {t(selectedWorkflow.id + "_title")}
                </h4>
                <p className="text-xs sm:text-sm font-semibold text-zinc-600 dark:text-zinc-450 mt-1">
                  {t(selectedWorkflow.id + "_subtitle")}
                </p>
              </div>
              <button
                onClick={() => setSelectedWorkflow(null)}
                className="p-2 bg-white dark:bg-[#121110] hover:bg-rose-50 dark:hover:bg-rose-950/30 text-zinc-500 hover:text-rose-600 rounded-xl border-2 border-zinc-950 dark:border-zinc-800 transition-colors cursor-pointer shadow-[2px_2px_0px_0px_rgba(24,24,27,1)] active:translate-x-0.5 active:translate-y-0.5"
                aria-label="Close modal"
              >
                <Icons.X className="h-5 w-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto flex-grow grid grid-cols-1 lg:grid-cols-12 gap-8">
                      {/* Image Column */}
              <div className="lg:col-span-7 flex flex-col space-y-4">
                <div className="relative rounded-xl overflow-hidden border-2 border-zinc-950 dark:border-zinc-800 bg-[#F4F2EB] dark:bg-[#121110] shadow-[3px_3px_0px_0px_rgba(24,24,27,1)] flex items-center justify-center p-2">
                  <img
                    src={selectedWorkflow.image}
                    alt={t(selectedWorkflow.id + "_title")}
                    referrerPolicy="no-referrer"
                    className="w-full h-auto object-contain max-h-[45vh] lg:max-h-[55vh] rounded-lg"
                  />
                  {/* Floating visual helper */}
                  <div className="absolute bottom-3 right-3 bg-zinc-950/90 text-white text-[10px] font-mono px-2.5 py-1 rounded-md border border-zinc-800 flex items-center space-x-1">
                    <Icons.Maximize2 className="h-3 w-3 text-amber-400" />
                    <span>{t("reference_screenshot")}</span>
                  </div>
                </div>
                <span className="text-[10px] text-zinc-400 dark:text-zinc-550 font-mono text-center block">
                  {t("diagram_captured")}
                </span>
              </div>

              {/* Documentation Column */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                <div className="space-y-5">
                  
                  {/* Problem/Challenge Box */}
                  <div className="p-4 bg-rose-50/50 dark:bg-rose-950/10 rounded-xl border border-rose-200 dark:border-rose-900/30">
                    <h5 className="text-xs font-mono font-black text-rose-700 dark:text-rose-400 uppercase tracking-wider flex items-center space-x-1.5 mb-1.5">
                      <Icons.AlertTriangle className="h-3.5 w-3.5" />
                      <span>{t("operational_friction")}</span>
                    </h5>
                    <p className="text-xs text-zinc-700 dark:text-zinc-350 font-medium leading-relaxed">
                      {t(selectedWorkflow.id + "_challenge")}
                    </p>
                  </div>

                  {/* Flow Breakdown */}
                  <div className="space-y-2">
                    <h5 className="text-xs font-mono font-black text-[#f59e0b] uppercase tracking-wider flex items-center space-x-1.5">
                      <Icons.Sliders className="h-3.5 w-3.5" />
                      <span>{t("action_nodes")}</span>
                    </h5>
                    <div className="bg-[#F4F2EB]/50 dark:bg-zinc-900/40 p-4 rounded-xl border border-zinc-250 dark:border-zinc-800 max-h-[220px] overflow-y-auto space-y-2.5">
                      {selectedWorkflow.steps.map((_, idx) => (
                        <div key={idx} className="flex items-start space-x-2 text-xs">
                          <span className="h-1.5 w-1.5 rounded-full bg-amber-500 shrink-0 mt-1.5"></span>
                          <span className="text-zinc-800 dark:text-zinc-300 font-bold leading-normal">{t(selectedWorkflow.id + "_step_" + idx)}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Impact Roster */}
                <div className="p-4 bg-emerald-50/50 dark:bg-emerald-950/15 rounded-xl border border-emerald-200 dark:border-emerald-900/30 mt-auto">
                  <h5 className="text-xs font-mono font-black text-emerald-700 dark:text-emerald-400 uppercase tracking-wider flex items-center space-x-1.5 mb-1">
                    <Icons.CheckCircle className="h-3.5 w-3.5" />
                    <span>{t("business_optimization")}</span>
                  </h5>
                  <p className="text-xs text-zinc-800 dark:text-zinc-300 font-black leading-relaxed">
                    {t(selectedWorkflow.id + "_impact")}
                  </p>
                </div>

              </div>

            </div>

            {/* Modal Footer */}
            <div className="p-5 bg-[#F4F2EB] dark:bg-zinc-900 border-t-2 border-zinc-950 dark:border-zinc-800 flex items-center justify-between">
              {/* Pagination indicators */}
              <div className="flex space-x-1.5">
                {ZAPIER_WORKFLOWS.map((flow, idx) => (
                  <button
                    key={flow.id}
                    onClick={() => setSelectedWorkflow(flow)}
                    className={`h-2.5 w-2.5 rounded-full transition-all cursor-pointer ${
                      selectedWorkflow.id === flow.id ? "bg-[#f59e0b] w-6" : "bg-zinc-300 dark:bg-zinc-700 hover:bg-zinc-400"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <div className="flex items-center space-x-3">
                <button
                  onClick={() => {
                    const currentIndex = ZAPIER_WORKFLOWS.findIndex((f) => f.id === selectedWorkflow.id);
                    const nextIndex = (currentIndex + 1) % ZAPIER_WORKFLOWS.length;
                    setSelectedWorkflow(ZAPIER_WORKFLOWS[nextIndex]);
                  }}
                  className="px-4 py-2.5 bg-white dark:bg-[#121110] hover:bg-amber-50 dark:hover:bg-zinc-800 text-zinc-950 dark:text-zinc-200 text-xs font-bold uppercase rounded-lg border-2 border-zinc-950 dark:border-zinc-800 shadow-[2px_2px_0px_0px_rgba(24,24,27,1)] active:translate-x-0.5 active:translate-y-0.5 transition-all cursor-pointer flex items-center space-x-1.5"
                >
                  <span>{t("next_diagram")}</span>
                  <Icons.ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
