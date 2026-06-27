import React, { useState } from "react";
import { X, Printer, Copy, Check, Download, Mail, Phone, MapPin, Linkedin, Calendar, GraduationCap, Award, Info } from "lucide-react";

interface PrintCVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PrintCVModal({ isOpen, onClose }: PrintCVModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const cvText = `JOSHUA M. ALBAÑA
Riyadh, Saudi Arabia
Phone: +966 55 938 9853
Email: joshuamadridondo24@gmail.com
LinkedIn: www.linkedin.com/in/joshua-albana

PROFESSIONAL SUMMARY
Highly motivated and adaptable professional with strong experience in administrative support, coordination, logistics, and customer service. Proven ability to work in fast-paced environments, handle multiple tasks, and communicate effectively with teams and clients. Known for reliability, strong work ethic, and willingness to learn new skills quickly. Currently based in Riyadh with a transferable Iqama (sponsor-approved transfer), work visa under Office Supervisor, and available to start immediately. Seeking any suitable role where I can contribute to operational efficiency and deliver excellent results.

CORE COMPETENCIES
- Operations & Administrative Support
- Scheduling & Coordination
- Data Management & Reporting
- Inventory & Documentation Control
- Compliance & Process Adherence
- Cross-Functional Communication
- MS Excel, Word & Office Tools
- ERP / Internal Systems (Basic–Intermediate)

PROFESSIONAL EXPERIENCE

Administrative Assistant
Helpful Agency – Maryam Jaber Bint Hassan al-Qaisi | December 2025 – April 2026
- Provided direct administrative and operational support to the Owner/Management, ensuring smooth day-to-day business operations and timely execution of priorities.
- Acted as the primary point of coordination between the Owner/Management, employees, and clients, maintaining clear communication and efficient workflow.
- Created and formatted professional CVs tailored to client job requirements, ensuring accuracy, quality, and strong presentation.
- Managed and supervised staff, including task delegation, scheduling, attendance monitoring, and performance follow-up.
- Handled and resolved employee concerns and workplace issues professionally while escalating critical matters to management when necessary.
- Maintained organized employee records, confidential documents, and administrative files to support efficient operations.
- Prepared invoices, monitored payments, and ensured accurate billing and timely processing.
- Tracked monthly client contract renewals, coordinated follow-ups, and helped maintain long-term client relationships.
- Utilized Microsoft Excel to prepare reports, manage databases, and maintain accurate administrative records.
- Prepared and monitored staff attendance reports to ensure compliance with company policies.
- Developed and managed social media marketing content to promote agency services and improve online engagement.
- Assisted in maintaining and updating the company website to ensure accurate information and a professional online presence.
- Supported management with ad hoc administrative tasks, reports, documentation, and operational coordination to improve business efficiency.

Fleet Coordinator
Transportify Philippines | September 2023 – October 2024
- Coordinated and monitored day-to-day fleet operations to ensure efficient vehicle utilization, on-time deliveries, and high service quality.
- Managed vehicle scheduling, dispatching, and routing based on customer requirements, traffic conditions, and delivery priorities to meet strict timelines.
- Tracked fleet performance metrics such as delivery turnaround time, vehicle availability, and service efficiency, identifying opportunities for operational improvement.
- Liaised with internal teams (operations, customer support) and external partners (drivers, vendors) to resolve fleet-related issues promptly and minimize service disruptions.
- Ensured compliance with company policies, safety standards, and applicable transport regulations.
- Prepared and submitted regular operational reports to management, providing insights on fleet performance, challenges, and improvement recommendations.

Data Encoder
Aero-Pack Industries, Inc. | September 2022 – August 2023
- Monitored stock orders and coordinated closely with the warehouse team to ensure accurate inventory levels and timely order fulfillment.
- Prepared, printed, and verified delivery receipts and related documentation in line with company procedures.
- Maintained accurate records of dispatched and delivered orders, including items released through company delivery trucks.
- Entered, updated, and maintained data in internal systems with a high level of accuracy and attention to detail.
- Reviewed and verified data for completeness and correctness, identifying discrepancies and coordinating corrective actions.
- Collaborated with team members to resolve data and inventory issues, supporting smooth logistics and delivery operations.

EDUCATION & PROFESSIONAL TRAINING

Bachelor of Science in Entrepreneurship
Daehan College and Business Technology | 2019 – 2022

Bachelor of Science in Information Technology
Polytechnic University of the Philippines | 2018 – 2019

Ladderized Healthcare Training Program (Caregiver • Nursing Assistant • Infant Care)
SEED Training Center – Riyadh, Saudi Arabia | November 2025 – January 2026
- Completed structured training covering basic patient care, elderly care, infant care, and nursing assistance fundamentals.
- Gained practical knowledge in hygiene standards, safety procedures, and professional care ethics.
- Trained in documentation, monitoring, and support functions aligned with healthcare and caregiving environments.

CERTIFICATIONS & SKILLS DEVELOPMENT
- Microsoft Excel Certification – Basic to Intermediate (Coursera – 2025)
- Logistics & Supply Chain Fundamentals Certification (Coursera – 2025)
- Zapier AI Automation Certificate (Technical Virtual Assistant AI – 2026)

ADDITIONAL INFORMATION
- Languages: English (Fluent), Filipino (Native), Arabic (Beginner)
- Work Visa Occupation: Office Supervisor
- Transfer Status: Sponsor-approved to a new employer
- Availability: Immediately available`;

    navigator.clipboard.writeText(cvText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/75 backdrop-blur-sm overflow-y-auto">
      
      {/* Printable Area - Rendered offscreen on web but perfectly visible for window.print() */}
      <div id="printable-cv" className="hidden print:block text-zinc-950 bg-white font-serif max-w-4xl mx-auto text-xs leading-relaxed">
        <div className="border-b border-zinc-300 pb-5 mb-5 text-center">
          <h1 className="text-3xl font-bold tracking-tight mb-2 text-zinc-900">Joshua M. Albaña</h1>
          <p className="text-zinc-600 font-sans text-xs flex justify-center items-center gap-4 flex-wrap">
            <span>Riyadh, Saudi Arabia</span>
            <span>•</span>
            <span>+966 55 938 9853</span>
            <span>•</span>
            <span>joshuamadridondo24@gmail.com</span>
            <span>•</span>
            <span>linkedin.com/in/joshua-albana</span>
          </p>
        </div>

        <div className="space-y-5">
          <section>
            <h2 className="text-sm font-bold uppercase tracking-wider text-zinc-900 border-b border-zinc-200 pb-1 mb-2">Professional Summary</h2>
            <p className="text-justify text-zinc-800">
              Highly motivated and adaptable professional with strong experience in administrative support, coordination, logistics, and customer service. Proven ability to work in fast-paced environments, handle multiple tasks, and communicate effectively with teams and clients. Known for reliability, strong work ethic, and willingness to learn new skills quickly. Currently based in Riyadh with a transferable Iqama (sponsor-approved transfer), work visa under Office Supervisor, and available to start immediately. Seeking any suitable role where I can contribute to operational efficiency and deliver excellent results.
            </p>
          </section>

          <section>
            <h2 className="text-sm font-bold uppercase tracking-wider text-zinc-900 border-b border-zinc-200 pb-1 mb-2">Core Competencies</h2>
            <div className="grid grid-cols-2 gap-y-1 gap-x-6 text-zinc-800 font-sans">
              <div>• Operations & Administrative Support</div>
              <div>• Scheduling & Coordination</div>
              <div>• Data Management & Reporting</div>
              <div>• Inventory & Documentation Control</div>
              <div>• Compliance & Process Adherence</div>
              <div>• Cross-Functional Communication</div>
              <div>• MS Excel, Word & Office Tools</div>
              <div>• ERP / Internal Systems (Basic–Intermediate)</div>
            </div>
          </section>

          <section>
            <h2 className="text-sm font-bold uppercase tracking-wider text-zinc-900 border-b border-zinc-200 pb-1 mb-3">Professional Experience</h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-baseline font-bold text-zinc-900">
                  <h3 className="text-xs">Administrative Assistant</h3>
                  <span className="text-[11px] font-sans text-zinc-550">Dec 2025 – Apr 2026</span>
                </div>
                <div className="text-zinc-700 italic text-[11px] mb-1.5">Helpful Agency – Maryam Jaber Bint Hassan al-Qaisi (Riyadh, Saudi Arabia)</div>
                <ul className="list-disc pl-4 space-y-1 text-zinc-800 text-[11px]">
                  <li>Provided direct administrative and operational support to the Owner/Management, ensuring smooth day-to-day business operations and timely execution of priorities.</li>
                  <li>Acted as the primary point of coordination between the Owner/Management, employees, and clients, maintaining clear communication and efficient workflow.</li>
                  <li>Created and formatted professional CVs tailored to client job requirements, ensuring accuracy, quality, and strong presentation.</li>
                  <li>Managed and supervised staff, including task delegation, scheduling, attendance monitoring, and performance follow-up.</li>
                  <li>Handled and resolved employee concerns and workplace issues professionally while escalating critical matters to management when necessary.</li>
                  <li>Maintained organized employee records, confidential documents, and administrative files to support efficient operations.</li>
                  <li>Prepared invoices, monitored payments, and ensured accurate billing and timely processing.</li>
                  <li>Tracked monthly client contract renewals, coordinated follow-ups, and helped maintain long-term client relationships.</li>
                  <li>Utilized Microsoft Excel to prepare reports, manage databases, and maintain accurate administrative records.</li>
                  <li>Prepared and monitored staff attendance reports to ensure compliance with company policies.</li>
                  <li>Developed and managed social media marketing content to promote agency services and improve online engagement.</li>
                  <li>Assisted in maintaining and updating the company website to ensure accurate information and a professional online presence.</li>
                  <li>Supported management with ad hoc administrative tasks, reports, documentation, and operational coordination to improve business efficiency.</li>
                </ul>
              </div>

              <div className="no-break">
                <div className="flex justify-between items-baseline font-bold text-zinc-900">
                  <h3 className="text-xs">Fleet Coordinator</h3>
                  <span className="text-[11px] font-sans text-zinc-550">Sep 2023 – Oct 2024</span>
                </div>
                <div className="text-zinc-700 italic text-[11px] mb-1.5">Transportify Philippines</div>
                <ul className="list-disc pl-4 space-y-1 text-zinc-800 text-[11px]">
                  <li>Coordinated and monitored day-to-day fleet operations to ensure efficient vehicle utilization, on-time deliveries, and high service quality.</li>
                  <li>Managed vehicle scheduling, dispatching, and routing based on customer requirements, traffic conditions, and delivery priorities to meet strict timelines.</li>
                  <li>Tracked fleet performance metrics such as delivery turnaround time, vehicle availability, and service efficiency, identifying opportunities for operational improvement.</li>
                  <li>Liaised with internal teams (operations, customer support) and external partners (drivers, vendors) to resolve fleet-related issues promptly and minimize service disruptions.</li>
                  <li>Ensured compliance with company policies, safety standards, and applicable transport regulations.</li>
                  <li>Prepared and submitted regular operational reports to management, providing insights on fleet performance, challenges, and improvement recommendations.</li>
                </ul>
              </div>

              <div className="no-break">
                <div className="flex justify-between items-baseline font-bold text-zinc-900">
                  <h3 className="text-xs">Data Encoder</h3>
                  <span className="text-[11px] font-sans text-zinc-550">Sep 2022 – Aug 2023</span>
                </div>
                <div className="text-zinc-700 italic text-[11px] mb-1.5">Aero-Pack Industries, Inc.</div>
                <ul className="list-disc pl-4 space-y-1 text-zinc-800 text-[11px]">
                  <li>Monitored stock orders and coordinated closely with the warehouse team to ensure accurate inventory levels and timely order fulfillment.</li>
                  <li>Prepared, printed, and verified delivery receipts and related documentation in line with company procedures.</li>
                  <li>Maintained accurate records of dispatched and delivered orders, including items released through company delivery trucks.</li>
                  <li>Entered, updated, and maintained data in internal systems with a high level of accuracy and attention to detail.</li>
                  <li>Reviewed and verified data for completeness and correctness, identifying discrepancies and coordinating corrective actions.</li>
                  <li>Collaborated with team members to resolve data and inventory issues, supporting smooth logistics and delivery operations.</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="no-break">
            <h2 className="text-sm font-bold uppercase tracking-wider text-zinc-900 border-b border-zinc-200 pb-1 mb-2">Education & Professional Training</h2>
            <div className="space-y-3 text-zinc-800">
              <div className="flex justify-between items-baseline font-bold text-zinc-900">
                <h3 className="text-xs">Bachelor of Science in Entrepreneurship</h3>
                <span className="text-[11px] font-sans">2019 – 2022</span>
              </div>
              <div className="text-[11px] text-zinc-700">Daehan College and Business Technology</div>

              <div className="flex justify-between items-baseline font-bold text-zinc-900">
                <h3 className="text-xs">Bachelor of Science in Information Technology</h3>
                <span className="text-[11px] font-sans">2018 – 2019</span>
              </div>
              <div className="text-[11px] text-zinc-700">Polytechnic University of the Philippines</div>

              <div className="flex justify-between items-baseline font-bold text-zinc-900">
                <h3 className="text-xs">Ladderized Healthcare Training Program (Caregiver • Nursing Assistant • Infant Care)</h3>
                <span className="text-[11px] font-sans">Nov 2025 – Jan 2026</span>
              </div>
              <div className="text-[11px] text-zinc-700">SEED Training Center – Riyadh, Saudi Arabia</div>
              <ul className="list-disc pl-4 space-y-0.5 text-zinc-800 text-[10.5px]">
                <li>Completed structured training covering basic patient care, elderly care, infant care, and nursing assistance fundamentals.</li>
                <li>Gained practical knowledge in hygiene standards, safety procedures, and professional care ethics.</li>
                <li>Trained in documentation, monitoring, and support functions aligned with healthcare and caregiving environments.</li>
              </ul>
            </div>
          </section>

          <section className="no-break">
            <h2 className="text-sm font-bold uppercase tracking-wider text-zinc-900 border-b border-zinc-200 pb-1 mb-2">Certifications & Skills Development</h2>
            <ul className="list-disc pl-4 space-y-1 text-zinc-800">
              <li><strong>Microsoft Excel Certification – Basic to Intermediate</strong> | Coursera – 2025</li>
              <li><strong>Logistics & Supply Chain Fundamentals Certification</strong> | Coursera – 2025</li>
              <li><strong>Zapier AI Automation Certificate</strong> | Technical Virtual Assistant AI – 2026</li>
            </ul>
          </section>

          <section className="no-break">
            <h2 className="text-sm font-bold uppercase tracking-wider text-zinc-900 border-b border-zinc-200 pb-1 mb-2">Additional Information</h2>
            <div className="grid grid-cols-2 gap-y-1.5 text-zinc-800 text-[11px]">
              <div><strong>Languages:</strong> English (Fluent), Filipino (Native), Arabic (Beginner)</div>
              <div><strong>Work Visa Occupation:</strong> Office Supervisor</div>
              <div><strong>Transfer Status:</strong> Sponsor-approved to a new employer</div>
              <div><strong>Availability:</strong> Immediately available</div>
            </div>
          </section>
        </div>
      </div>

      {/* Screen Presentation (Beautiful Modal) */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#F4F2EB] dark:bg-[#121110] border-2 border-zinc-950 dark:border-zinc-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-250 select-none">
        
        {/* Modal Top Bar */}
        <div className="px-5 py-4 bg-zinc-950 text-white flex items-center justify-between border-b-2 border-zinc-950">
          <div className="flex items-center space-x-2">
            <div className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#f59e0b]">Official CV Document Preview</span>
          </div>
          <button 
            onClick={onClose}
            className="p-1 hover:bg-zinc-800 rounded-lg transition-colors text-zinc-400 hover:text-white cursor-pointer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Modal Toolbar (Sticky) */}
        <div className="px-6 py-3 bg-white dark:bg-[#1C1B19] border-b-2 border-zinc-950 dark:border-zinc-800 flex flex-wrap gap-3 items-center justify-between">
          <div className="flex items-center space-x-1.5 text-xs font-semibold text-zinc-550 dark:text-zinc-400">
            <Info className="h-4 w-4 text-[#f59e0b]" />
            <span>Format matches original layout. Click "Print" to print a clean paper copy.</span>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={handleCopyText}
              className="px-3.5 py-1.5 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-850 text-zinc-800 dark:text-zinc-200 text-xs font-bold rounded-lg border border-zinc-300 dark:border-zinc-700 flex items-center space-x-1.5 transition-all cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5 text-emerald-600" />
                  <span>Text Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" />
                  <span>Copy Plain Text</span>
                </>
              )}
            </button>
            <button
              onClick={handlePrint}
              className="px-4 py-1.5 bg-[#f59e0b] hover:bg-[#d97706] text-zinc-950 font-black text-xs rounded-lg border border-zinc-950 flex items-center space-x-1.5 shadow-[2px_2px_0px_0px_rgba(24,24,27,1)] transition-all cursor-pointer"
            >
              <Printer className="h-3.5 w-3.5" />
              <span>Print CV</span>
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body containing CV page render */}
        <div className="flex-1 overflow-y-auto p-6 md:p-10 space-y-6">
          <div className="bg-white dark:bg-[#181715] border-2 border-zinc-950 dark:border-zinc-800 rounded-xl p-6 md:p-10 shadow-[4px_4px_0px_0px_rgba(24,24,27,1)] text-zinc-900 dark:text-zinc-100 font-serif leading-relaxed text-xs">
            
            {/* Header section inside screen CV */}
            <div className="border-b-2 border-[#f59e0b] pb-6 mb-6 text-center">
              <h1 className="text-3xl font-sans font-black uppercase tracking-tight text-zinc-950 dark:text-white">Joshua M. Albaña</h1>
              <p className="mt-2.5 text-zinc-550 dark:text-zinc-400 font-sans text-xs flex justify-center items-center gap-2 flex-wrap font-semibold">
                <span className="flex items-center gap-1"><MapPin className="h-3 w-3 text-[#f59e0b]" /> Riyadh, Saudi Arabia</span>
                <span>•</span>
                <span className="flex items-center gap-1"><Phone className="h-3 w-3 text-[#f59e0b]" /> +966 55 938 9853</span>
                <span>•</span>
                <span className="flex items-center gap-1"><Mail className="h-3 w-3 text-[#f59e0b]" /> joshuamadridondo24@gmail.com</span>
                <span>•</span>
                <span className="flex items-center gap-1"><Linkedin className="h-3 w-3 text-[#f59e0b]" /> linkedin.com/in/joshua-albana</span>
              </p>
            </div>

            {/* Content Body */}
            <div className="space-y-6">
              
              {/* Summary */}
              <section className="space-y-2">
                <h2 className="text-sm font-sans font-black uppercase tracking-wider text-zinc-950 dark:text-white border-b border-zinc-200 dark:border-zinc-800 pb-1 flex items-center gap-1.5">
                  <span className="h-2 w-2 bg-[#f59e0b] rounded-full"></span>
                  <span>Professional Summary</span>
                </h2>
                <p className="text-justify text-zinc-700 dark:text-zinc-350 font-sans text-xs leading-relaxed">
                  Highly motivated and adaptable professional with strong experience in administrative support, coordination, logistics, and customer service. Proven ability to work in fast-paced environments, handle multiple tasks, and communicate effectively with teams and clients. Known for reliability, strong work ethic, and willingness to learn new skills quickly. Currently based in Riyadh with a transferable Iqama (sponsor-approved transfer), work visa under Office Supervisor, and available to start immediately. Seeking any suitable role where I can contribute to operational efficiency and deliver excellent results.
                </p>
              </section>

              {/* Competencies */}
              <section className="space-y-2">
                <h2 className="text-sm font-sans font-black uppercase tracking-wider text-zinc-950 dark:text-white border-b border-zinc-200 dark:border-zinc-800 pb-1 flex items-center gap-1.5">
                  <span className="h-2 w-2 bg-[#f59e0b] rounded-full"></span>
                  <span>Core Competencies</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-1.5 font-sans text-xs font-semibold text-zinc-700 dark:text-zinc-350">
                  <div className="flex items-center gap-1.5">✓ Operations & Administrative Support</div>
                  <div className="flex items-center gap-1.5">✓ Scheduling & Coordination</div>
                  <div className="flex items-center gap-1.5">✓ Data Management & Reporting</div>
                  <div className="flex items-center gap-1.5">✓ Inventory & Documentation Control</div>
                  <div className="flex items-center gap-1.5">✓ Compliance & Process Adherence</div>
                  <div className="flex items-center gap-1.5">✓ Cross-Functional Communication</div>
                  <div className="flex items-center gap-1.5">✓ MS Excel, Word & Office Tools</div>
                  <div className="flex items-center gap-1.5">✓ ERP / Internal Systems (Basic–Intermediate)</div>
                </div>
              </section>

              {/* Experience */}
              <section className="space-y-4">
                <h2 className="text-sm font-sans font-black uppercase tracking-wider text-zinc-950 dark:text-white border-b border-zinc-200 dark:border-zinc-800 pb-1 flex items-center gap-1.5">
                  <span className="h-2 w-2 bg-[#f59e0b] rounded-full"></span>
                  <span>Professional Experience</span>
                </h2>
                
                {/* Exp 1 */}
                <div className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                    <h3 className="text-xs font-sans font-black uppercase tracking-wide text-zinc-900 dark:text-white">Administrative Assistant</h3>
                    <span className="text-[10px] font-mono font-bold text-[#f59e0b] uppercase bg-zinc-100 dark:bg-zinc-900 px-2 py-0.5 rounded border border-zinc-300 dark:border-zinc-800 mt-1 sm:mt-0 w-fit">Dec 2025 – Apr 2026</span>
                  </div>
                  <div className="text-xs text-[#f59e0b] font-sans font-extrabold flex items-center gap-1">
                    Helpful Agency – Maryam Jaber Bint Hassan al-Qaisi <span className="text-zinc-400 dark:text-zinc-600">•</span> <span className="text-zinc-550 dark:text-zinc-400 font-semibold font-sans text-[11px]">Riyadh, Saudi Arabia</span>
                  </div>
                  <ul className="list-disc pl-4 space-y-1 text-zinc-650 dark:text-zinc-350 font-sans text-[11px] leading-relaxed">
                    <li>Provided direct administrative and operational support to the Owner/Management, ensuring smooth day-to-day business operations and timely execution of priorities.</li>
                    <li>Acted as the primary point of coordination between the Owner/Management, employees, and clients, maintaining clear communication and efficient workflow.</li>
                    <li>Created and formatted professional CVs tailored to client job requirements, ensuring accuracy, quality, and strong presentation.</li>
                    <li>Managed and supervised staff, including task delegation, scheduling, attendance monitoring, and performance follow-up.</li>
                    <li>Handled and resolved employee concerns and workplace issues professionally while escalating critical matters to management when necessary.</li>
                    <li>Maintained organized employee records, confidential documents, and administrative files to support efficient operations.</li>
                    <li>Prepared invoices, monitored payments, and ensured accurate billing and timely processing.</li>
                    <li>Tracked monthly client contract renewals, coordinated follow-ups, and helped maintain long-term client relationships.</li>
                    <li>Utilized Microsoft Excel to prepare reports, manage databases, and maintain accurate administrative records.</li>
                    <li>Prepared and monitored staff attendance reports to ensure compliance with company policies.</li>
                    <li>Developed and managed social media marketing content to promote agency services and improve online engagement.</li>
                    <li>Assisted in maintaining and updating the company website to ensure accurate information and a professional online presence.</li>
                    <li>Supported management with ad hoc administrative tasks, reports, documentation, and operational coordination to improve business efficiency.</li>
                  </ul>
                </div>

                {/* Exp 2 */}
                <div className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                    <h3 className="text-xs font-sans font-black uppercase tracking-wide text-zinc-900 dark:text-white">Fleet Coordinator</h3>
                    <span className="text-[10px] font-mono font-bold text-[#f59e0b] uppercase bg-zinc-100 dark:bg-zinc-900 px-2 py-0.5 rounded border border-zinc-300 dark:border-zinc-800 mt-1 sm:mt-0 w-fit">Sep 2023 – Oct 2024</span>
                  </div>
                  <div className="text-xs text-[#f59e0b] font-sans font-extrabold flex items-center gap-1">
                    Transportify Philippines
                  </div>
                  <ul className="list-disc pl-4 space-y-1 text-zinc-650 dark:text-zinc-350 font-sans text-[11px] leading-relaxed">
                    <li>Coordinated and monitored day-to-day fleet operations to ensure efficient vehicle utilization, on-time deliveries, and high service quality.</li>
                    <li>Managed vehicle scheduling, dispatching, and routing based on customer requirements, traffic conditions, and delivery priorities to meet strict timelines.</li>
                    <li>Tracked fleet performance metrics such as delivery turnaround time, vehicle availability, and service efficiency, identifying opportunities for operational improvement.</li>
                    <li>Liaised with internal teams (operations, customer support) and external partners (drivers, vendors) to resolve fleet-related issues promptly and minimize service disruptions.</li>
                    <li>Ensured compliance with company policies, safety standards, and applicable transport regulations.</li>
                    <li>Prepared and submitted regular operational reports to management, providing insights on fleet performance, challenges, and improvement recommendations.</li>
                  </ul>
                </div>

                {/* Exp 3 */}
                <div className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                    <h3 className="text-xs font-sans font-black uppercase tracking-wide text-zinc-900 dark:text-white">Data Encoder</h3>
                    <span className="text-[10px] font-mono font-bold text-[#f59e0b] uppercase bg-zinc-100 dark:bg-zinc-900 px-2 py-0.5 rounded border border-zinc-300 dark:border-zinc-800 mt-1 sm:mt-0 w-fit">Sep 2022 – Aug 2023</span>
                  </div>
                  <div className="text-xs text-[#f59e0b] font-sans font-extrabold flex items-center gap-1">
                    Aero-Pack Industries, Inc.
                  </div>
                  <ul className="list-disc pl-4 space-y-1 text-zinc-650 dark:text-zinc-350 font-sans text-[11px] leading-relaxed">
                    <li>Monitored stock orders and coordinated closely with the warehouse team to ensure accurate inventory levels and timely order fulfillment.</li>
                    <li>Prepared, printed, and verified delivery receipts and related documentation in line with company procedures.</li>
                    <li>Maintained accurate records of dispatched and delivered orders, including items released through company delivery trucks.</li>
                    <li>Entered, updated, and maintained data in internal systems with a high level of accuracy and attention to detail.</li>
                    <li>Reviewed and verified data for completeness and correctness, identifying discrepancies and coordinating corrective actions.</li>
                    <li>Collaborated with team members to resolve data and inventory issues, supporting smooth logistics and delivery operations.</li>
                  </ul>
                </div>
              </section>

              {/* Education */}
              <section className="space-y-3">
                <h2 className="text-sm font-sans font-black uppercase tracking-wider text-zinc-950 dark:text-white border-b border-zinc-200 dark:border-zinc-800 pb-1 flex items-center gap-1.5">
                  <span className="h-2 w-2 bg-[#f59e0b] rounded-full"></span>
                  <span>Education & Professional Training</span>
                </h2>
                <div className="space-y-3 font-sans text-xs text-zinc-700 dark:text-zinc-350">
                  <div className="border-l-2 border-[#f59e0b] pl-3">
                    <div className="flex justify-between items-baseline font-bold text-zinc-900 dark:text-white">
                      <span>Bachelor of Science in Entrepreneurship</span>
                      <span className="text-[10px] text-zinc-400">2019 – 2022</span>
                    </div>
                    <div className="text-[11px] font-semibold text-zinc-550 dark:text-zinc-400 mt-0.5">Daehan College and Business Technology</div>
                  </div>

                  <div className="border-l-2 border-[#f59e0b] pl-3">
                    <div className="flex justify-between items-baseline font-bold text-zinc-900 dark:text-white">
                      <span>Bachelor of Science in Information Technology</span>
                      <span className="text-[10px] text-zinc-400">2018 – 2019</span>
                    </div>
                    <div className="text-[11px] font-semibold text-zinc-550 dark:text-zinc-400 mt-0.5">Polytechnic University of the Philippines</div>
                  </div>

                  <div className="border-l-2 border-[#f59e0b] pl-3">
                    <div className="flex justify-between items-baseline font-bold text-zinc-900 dark:text-white">
                      <span>Ladderized Healthcare Training Program (Caregiver • Nursing Assistant • Infant Care)</span>
                      <span className="text-[10px] text-zinc-400">Nov 2025 – Jan 2026</span>
                    </div>
                    <div className="text-[11px] font-semibold text-[#f59e0b] mt-0.5">SEED Training Center – Riyadh, Saudi Arabia</div>
                    <ul className="list-disc pl-4 mt-1.5 space-y-0.5 text-zinc-650 dark:text-zinc-400 text-[10.5px]">
                      <li>Completed structured training covering basic patient care, elderly care, infant care, and nursing assistance fundamentals.</li>
                      <li>Gained practical knowledge in hygiene standards, safety procedures, and professional care ethics.</li>
                      <li>Trained in documentation, monitoring, and support functions aligned with healthcare and caregiving environments.</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Certifications */}
              <section className="space-y-2">
                <h2 className="text-sm font-sans font-black uppercase tracking-wider text-zinc-950 dark:text-white border-b border-zinc-200 dark:border-zinc-800 pb-1 flex items-center gap-1.5">
                  <span className="h-2 w-2 bg-[#f59e0b] rounded-full"></span>
                  <span>Certifications & Skills Development</span>
                </h2>
                <ul className="list-disc pl-4 space-y-1 text-zinc-700 dark:text-zinc-300 font-sans text-xs">
                  <li><strong>Microsoft Excel Certification – Basic to Intermediate</strong> <span className="text-zinc-400 dark:text-zinc-600">|</span> Coursera – 2025</li>
                  <li><strong>Logistics & Supply Chain Fundamentals Certification</strong> <span className="text-zinc-400 dark:text-zinc-600">|</span> Coursera – 2025</li>
                  <li><strong>Zapier AI Automation Certificate</strong> <span className="text-zinc-400 dark:text-zinc-600">|</span> Technical Virtual Assistant AI – 2026</li>
                </ul>
              </section>

              {/* Additional Information */}
              <section className="space-y-2">
                <h2 className="text-sm font-sans font-black uppercase tracking-wider text-zinc-950 dark:text-white border-b border-zinc-200 dark:border-zinc-800 pb-1 flex items-center gap-1.5">
                  <span className="h-2 w-2 bg-[#f59e0b] rounded-full"></span>
                  <span>Additional Information</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 font-sans text-xs text-zinc-700 dark:text-zinc-350">
                  <div className="p-2.5 bg-zinc-50 dark:bg-[#1C1B19] rounded-lg border border-zinc-200 dark:border-zinc-850">
                    <strong className="text-zinc-950 dark:text-white font-black block text-[10px] uppercase mb-0.5 tracking-wider">Languages</strong>
                    English (Fluent), Filipino (Native), Arabic (Beginner)
                  </div>
                  <div className="p-2.5 bg-zinc-50 dark:bg-[#1C1B19] rounded-lg border border-zinc-200 dark:border-zinc-850">
                    <strong className="text-zinc-950 dark:text-white font-black block text-[10px] uppercase mb-0.5 tracking-wider">Work Visa Occupation</strong>
                    Office Supervisor
                  </div>
                  <div className="p-2.5 bg-zinc-50 dark:bg-[#1C1B19] rounded-lg border border-zinc-200 dark:border-zinc-850">
                    <strong className="text-zinc-950 dark:text-white font-black block text-[10px] uppercase mb-0.5 tracking-wider">Transfer Status</strong>
                    Sponsor-approved to a new employer
                  </div>
                  <div className="p-2.5 bg-zinc-50 dark:bg-[#1C1B19] rounded-lg border border-zinc-200 dark:border-zinc-850">
                    <strong className="text-zinc-950 dark:text-white font-black block text-[10px] uppercase mb-0.5 tracking-wider">Availability</strong>
                    Immediately available
                  </div>
                </div>
              </section>

            </div>

          </div>
        </div>

        {/* Modal Bottom Bar */}
        <div className="px-5 py-3.5 bg-zinc-950 text-white flex items-center justify-end border-t-2 border-zinc-950">
          <button 
            onClick={onClose}
            className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white text-xs font-bold rounded-lg border border-zinc-700 transition-colors cursor-pointer"
          >
            Close Preview
          </button>
        </div>

      </div>

    </div>
  );
}
