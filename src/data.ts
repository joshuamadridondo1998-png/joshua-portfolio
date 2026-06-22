import { ServiceItem, ExperienceItem, PreviousWorkItem, TestimonialItem } from "./types";

export const PERSONAL_INFO = {
  name: "Joshua M. Albaña",
  title: "Operations, Logistics & Administrative Specialist",
  location: "Riyadh, Saudi Arabia",
  phone: "+966 55 938 9853",
  email: "joshuamadridondo24@gmail.com",
  linkedin: "https://www.linkedin.com/in/joshua-albana",
  linkedinLabel: "linkedin.com/in/joshua-albana",
  visaStatus: "Office Supervisor (Transferable Iqama)",
  availability: "Sponsor-Approved Transfer • Immediate Availability",
  summary: "Highly motivated and adaptable operations professional with extensive expertise in administrative support, fleet coordination, data integrity, and logistics. Proven track record in high-velocity, fast-paced environments managing complex scheduling, cross-functional communications, and system workflows. Specializes in operational efficiency, Excel data modeling, and modern Zapier automation.",
};

export const SERVICES: ServiceItem[] = [
  {
    id: "admin-support",
    title: "Operations & Administrative Support",
    description: "End-to-end executive assistance and staff supervision to maximize daily business performance and streamline critical priorities.",
    iconName: "Briefcase",
    features: [
      "Executive assistance & schedule stewardship",
      "Confidential documentation and records safeguard",
      "Billing, invoice monitoring, and contract tracking",
      "Professional CV preparation and staffing alignment",
    ],
  },
  {
    id: "logistics-fleet",
    title: "Logistics & Fleet Coordination",
    description: "Strategic vessel and vehicle dispatching, routing analytics, and performance measurement for high-occupancy service grids.",
    iconName: "Truck",
    features: [
      "Dynamic routing and schedule management",
      "Liaison between driver pools and customer service",
      "Operational report synthesis and metric reviews",
      "Regulatory alignment and safety adherence",
    ],
  },
  {
    id: "data-management",
    title: "Data Management & Excel Analytics",
    description: "High-accuracy, detail-driven information pipeline management, dashboard auditing, and spreadsheet design.",
    iconName: "Database",
    features: [
      "Advanced spreadsheets and status databases",
      "Discrepancy inspection and correction cycles",
      "Stock inventory tracking and delivery receipt flows",
      "Internal ERP and legacy systems operations",
    ],
  },
  {
    id: "automation-ai",
    title: "Zapier Automation & Workflows",
    description: "Implementing automation processes to link distinct digital tools, eliminate administrative loops, and accelerate response rates.",
    iconName: "Cpu",
    features: [
      "Multi-step automated email workflows",
      "Spreadsheet-to-database automatic triggers",
      "AI-driven task notifications and alerts",
      "Workflow bottleneck troubleshooting",
    ],
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Administrative Assistant",
    company: "Helpful Agency — Maryam Jaber Bint Hassan al-Qaisi",
    location: "Riyadh, Saudi Arabia",
    period: "Dec 2025 — Apr 2026",
    bullets: [
      "Provided direct high-level support to Owner/Management, managing client communication and operational agendas to elevate overall enterprise throughput.",
      "Oversaw daily personnel schedules, verified attendance reports, and monitored staff compliance with policies.",
      "Created and formatted tailored, professional CVs precisely adjusted to recruiter demands, ensuring exceptional clarity and quality.",
      "Managed invoice issuance, tracked contract renewals, audited pending accounts receivables, and followed up on client renewals.",
      "Developed web content updates and deployed targeted social media assets with visual assets, boosting engagement.",
    ],
  },
  {
    id: "exp-2",
    role: "Fleet Coordinator",
    company: "Transportify Philippines",
    location: "Metro Manila, Philippines",
    period: "Sep 2023 — Oct 2024",
    bullets: [
      "Coordinated daily dispatch logistics for large vehicle networks, optimizing delivery timeliness and vehicle capacity utilization.",
      "Monitored traffic models and urgent timelines to reorganize active routing, preventing delivery delay incidents.",
      "Maintained real-time logs of fleet utilization, vehicle downtime, driver safety metrics, and customer service satisfaction scores.",
      "Partnered with customer care and driver councils to diffuse logistics friction points, resolving vehicle emergencies immediately.",
    ],
  },
  {
    id: "exp-3",
    role: "Data Encoder",
    company: "Aero-Pack Industries, Inc.",
    location: "Laguna, Philippines",
    period: "Sep 2022 — Aug 2023",
    bullets: [
      "Audited stock orders and worked directly with warehouse managers to regulate inventory quantities, protecting against inventory stockouts.",
      "Generated, reviewed, and authorized freight shipping receipts, ensuring flawless records for heavy cargo operations.",
      "Inputted bulk logistical records into local databases of client profiles, with 99.8% precision.",
      "Collaborated on reconciliation projects to trace misplaced inventory transactions and resolve differences quickly.",
    ],
  },
];

export const EDUCATION = [
  {
    degree: "Bachelor of Science in Entrepreneurship",
    school: "Daehan College and Business Technology",
    period: "2019 — 2022",
    details: "Focused on business administration, logistics structure, and operational systems.",
  },
  {
    degree: "Bachelor of Science in Information Technology",
    school: "Polytechnic University of the Philippines",
    period: "2018 — 2019",
    details: "Basic computer science foundation, database concepts, and system architecture.",
  },
  {
    degree: "Ladderized Healthcare Training Certificate",
    school: "SEED Training Center (Riyadh, Saudi Arabia)",
    period: "Nov 2025 — Jan 2026",
    details: "Caregiver, Nursing Assistant, and Infant Care modules. Practical nursing assistance and safety ethics training.",
  }
];

export const CERTIFICATIONS = [
  {
    name: "Microsoft Excel Certification (Basic to Intermediate)",
    issuer: "Coursera",
    year: "2025",
    badgeColor: "emerald",
  },
  {
    name: "Logistics & Supply Chain Fundamentals",
    issuer: "Coursera",
    year: "2025",
    badgeColor: "blue",
  },
  {
    name: "Zapier AI Automation Specialist",
    issuer: "Technical Virtual Assistant AI",
    year: "2026",
    badgeColor: "amber",
  }
];

export const PREVIOUS_WORKS: PreviousWorkItem[] = [
  {
    id: "work-excel",
    title: "Interactive Operations & Fleet Dashboard",
    category: "Excel & Data Analytics",
    description: "An advanced operations monitoring model simulating vehicle logs, dispatch counts, and delivery completion statuses.",
    problem: "Manual scheduling resulted in overlapping driver allocations, delayed turnaround, and untracked idle time.",
    solution: "Developed an dynamic Excel template equipped with interactive metric filtering, allowing swift auditing of critical performance metrics.",
    interactiveType: "excel",
  },
  {
    id: "work-zapier",
    title: "Zapier Client Renewal Automation",
    category: "Workflow Automation",
    description: "An automated trigger-action structure mapping email updates and client account tracking.",
    problem: "Administrative staff spent 5+ hours weekly tracking contract expiration dates and emailing renewal requests manually.",
    solution: "Configured multi-stage workflows triggering automatic renewal communications, updating Excel tables and notifying management.",
    interactiveType: "zapier",
  },
  {
    id: "work-cv",
    title: "Tailored Professional CV Builder Engine",
    category: "Administrative & HR Systems",
    description: "An interactive utility generating tailored, crisp CV experience statements based on specific job descriptions.",
    problem: "Reviewing company candidate histories and adjusting summaries for various roles is highly repetitive.",
    solution: "Built a structured custom experience generator that reformats skill bullet points to match diverse industries dynamically.",
    interactiveType: "cv",
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "t-1",
    name: "Maryam Jaber Bint Hassan",
    role: "Owner & Managing Director",
    company: "Helpful Agency",
    quote: "Joshua has been an indispensable pillar of our Riyadh administrative operations. His capability to coordinate between our international staff, draft professional custom CVs, and track payments with flawless accuracy kept our business running beautifully. He learns incredibly fast.",
    tags: ["Reliability", "Client Liaison", "Excel Analytics"],
  },
  {
    id: "t-2",
    name: "Leonardo Santos",
    role: "Operations Supervisor",
    company: "Transportify Hub",
    quote: "In the quick-moving logistics environment, Joshua's coordination was exemplary. He stayed calm under pressure, solved driver dispatch issues instantly, and optimized our travel routes with precise reports. Any logistics company will be lucky to have him.",
    tags: ["Fleet Coordination", "Problem Solving", "Rapid Routing"],
  },
  {
    id: "t-3",
    name: "Elena Ramos",
    role: "Logistics Manager",
    company: "Aero-Pack Industries",
    quote: "Accuracy is non-negotiable for freight data, and Joshua consistently maintained a near-perfect entry record. His analytical work on inventory levels and delivery logs prevented multiple warehouse shortages. He is proactive and highly trustworthy.",
    tags: ["Data Integrity", "Stock Audits", "Process Adherence"],
  },
];
