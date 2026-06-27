import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "ar";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  dir: "ltr" | "rtl";
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Header & Badges
    riyadh_based: "RIYADH BASED • IQAMA READY TO TRANSFER",
    transfer_status: "Transfer Status",
    transfer_status_val: "Sponsor-Approved Transfer • Immediate Availability",
    visa_status: "Visa Status",
    visa_status_val: "Office Supervisor Position",
    available_immediately: "Available Immediately",
    hire_immediately: "Hire Immediately",
    print_resume: "Print CV",
    ask_joshua: "Ask Joshua",
    services: "Services",
    experience: "Experience",
    testimonials: "Testimonials",
    contact: "Contact",
    core_contributions: "Core Contributions",
    administrative_solutions: "Specialized Operations & Administrative Solutions",
    maximizing_output: "Maximizing business output through disciplined logistics systems, spreadsheet auditing, workflow automation, and structured office support functions.",
    verified_standard: "Service standard verified",
    need_custom_process: "Need a customized administrative process configured?",
    specialize_adapting: "I specialize in adapting quickly to proprietary software, setting up automation triggers, and cleaning legacy data tables manually. Direct supervisor reference letters are available.",

    // Hero Section
    joshua: "JOSHUA",
    albana: "ALBAÑA.",
    specialized_ops: "Specialized Operations",
    ops_specialist: "Operations, Logistics & Administrative Specialist",
    bio: "Currently based in Riyadh with a transferable Iqama (sponsor-approved transfer) and a valid work visa under Office Supervisor. Highly motivated, reliable, and equipped with certification in advanced Microsoft Excel, logistical operations, and Zapier automated pipelines to scale company efficiency.",
    profile_overview: "Profile-Overview.json",
    current_location: "Current Location",
    location_val: "Riyadh, Saudi Arabia",
    primary_email: "Primary Email",
    saudi_contact: "Saudi Contact",
    office_skills: "Office Skills",
    automation_systems: "Automation Systems",
    key_certifications: "Key Certifications",
    languages: "Languages",
    english_lvl: "Fluent",
    filipino_lvl: "Native",
    arabic_lvl: "Beginner",
    english: "English",
    filipino: "Filipino",
    arabic: "Arabic",

    // Services Section
    "admin-support_title": "Operations & Administrative Support",
    "admin-support_desc": "End-to-end executive assistance and staff supervision to maximize daily business performance and streamline critical priorities.",
    "admin-support_feature_0": "Executive assistance & schedule stewardship",
    "admin-support_feature_1": "Confidential documentation and records safeguard",
    "admin-support_feature_2": "Billing, invoice monitoring, and contract tracking",
    "admin-support_feature_3": "Professional CV preparation and staffing alignment",

    "logistics-fleet_title": "Logistics & Fleet Coordination",
    "logistics-fleet_desc": "Strategic vessel and vehicle dispatching, routing analytics, and performance measurement for high-occupancy service grids.",
    "logistics-fleet_feature_0": "Dynamic routing and schedule management",
    "logistics-fleet_feature_1": "Liaison between driver pools and customer service",
    "logistics-fleet_feature_2": "Operational report synthesis and metric reviews",
    "logistics-fleet_feature_3": "Regulatory alignment and safety adherence",

    "data-management_title": "Data Management & Excel Analytics",
    "data-management_desc": "High-accuracy, detail-driven information pipeline management, dashboard auditing, and spreadsheet design.",
    "data-management_feature_0": "Advanced spreadsheets and status databases",
    "data-management_feature_1": "Discrepancy inspection and correction cycles",
    "data-management_feature_2": "Stock inventory tracking and delivery receipt flows",
    "data-management_feature_3": "Internal ERP and legacy systems operations",

    "automation-ai_title": "Zapier Automation & Workflows",
    "automation-ai_desc": "Implementing automation processes to link distinct digital tools, eliminate administrative loops, and accelerate response rates.",
    "automation-ai_feature_0": "Multi-step automated email workflows",
    "automation-ai_feature_1": "Spreadsheet-to-database automatic triggers",
    "automation-ai_feature_2": "AI-driven task notifications and alerts",
    "automation-ai_feature_3": "Workflow bottleneck troubleshooting",

    // Zapier Workflows
    "homecare-lead_title": "Homecare Lead Automation",
    "homecare-lead_subtitle": "Lead Capture & Dynamic Notification Dispatch Pipeline",
    "homecare-lead_challenge": "Incoming patient/care requests from Google Forms required manual review, slow formatting, manual CRM copy-pasting, and delayed staff alerts.",
    "homecare-lead_impact": "Reduces client response delay from 4 hours to under 30 seconds with 100% data integrity.",
    "homecare-lead_step_0": "1. Google Forms: Triggers instantly upon form submission.",
    "homecare-lead_step_1": "2. Formatter by Zapier (Text): Cleans and formats name fields to Standard Title Case.",
    "homecare-lead_step_2": "3. Formatter by Zapier (Numbers): Cleans telephone inputs to global Saudi/International standards.",
    "homecare-lead_step_3": "4. Formatter by Zapier (Date/Time): Standardizes timestamps to match the local timezone.",
    "homecare-lead_step_4": "5. Google Sheets: Automatically logs organized client profiles to the master audit roster.",
    "homecare-lead_step_5": "6. Gmail: Automatically dispatches a structured operational briefing to the regional team.",
    "homecare-lead_step_6": "7. WhatsApp Notifications: Sends instant confirmation text alerts to designated caregivers.",
    "homecare-lead_step_7": "8. Gmail: Follows up automatically with the client with official brochures.",

    "dept-routing_title": "Multi-Branch Department Routing",
    "dept-routing_subtitle": "Intelligent Inquiry Classification & Path Filtering Routing",
    "dept-routing_challenge": "Inquiries from multiple company divisions arrived in a single inbox, causing extensive sorting delay and misrouted assignments.",
    "dept-routing_impact": "Divides administrative sorting workload by 100% and routes files directly to stakeholders instantly.",
    "dept-routing_step_0": "1. Google Forms: Customer fills out inquiry form selecting department.",
    "dept-routing_step_1": "2. Formatter by Zapier: Standardizes the client's full name to Title Case.",
    "dept-routing_step_2": "3. Filter by Zapier: Only processes valid form entries containing verified contacts.",
    "dept-routing_step_3": "4. Paths by Zapier (Sales, Finance, HR, Tech Support): Splitting the flow 4-ways.",
    "dept-routing_step_4": "5. Branches (e.g. Sales branch): Checks condition ➔ Sends customized Gmail, updates Google Sheets row in Sales tab, and notifies Sales Manager.",

    "leads-email_title": "Possible Leads on Email",
    "leads-email_subtitle": "High-Velocity Lead Logging & Automated Autoresponder Setup",
    "leads-email_challenge": "Prospective customer leads on email were forgotten or logged inconsistently into spreadsheets, leading to lost conversion opportunities.",
    "leads-email_impact": "Saves 5+ hours of manual data entry weekly and guarantees 100% of leads receive immediate welcome letters.",
    "leads-email_step_0": "1. Google Forms: Prospective lead fills out inquiry or booking form.",
    "leads-email_step_1": "2. Formatter by Zapier: Trims white space from email addresses to prevent sending failures.",
    "leads-email_step_2": "3. Formatter by Zapier: Capitalizes the client's first name for personal greetings.",
    "leads-email_step_3": "4. Google Sheets: Appends the lead data with specific source tags to spreadsheet.",
    "leads-email_step_4": "5. Gmail: Automatically fires a personalized introductory email response to the lead.",
    
    "zapier-workflow_title": "AI-Assisted Support & Dispatch",
    "zapier-workflow_subtitle": "Real-Time Support Routing & Ticketing Automation",
    "zapier-workflow_challenge": "Customer inquiries and operational help requests were handled manually in silos, causing delays and inconsistent service levels.",
    "zapier-workflow_impact": "Ensures zero lost inquiries, reducing response time to under 5 minutes with automatic tracking.",
    "zapier-workflow_step_0": "1. Customer Inquiry: Received in central inbox from multiple channels.",
    "zapier-workflow_step_1": "2. Formatter by Zapier: Identifies key customer parameters and cleans input data.",
    "zapier-workflow_step_2": "3. Filter & Router: Validates fields and automatically separates tasks into priority queues.",
    "zapier-workflow_step_3": "4. Automated Notifications: Delivers instantaneous Slack/WhatsApp alert to the support team.",
    "zapier-workflow_step_4": "5. CRM/Sheets Update: Creates or updates records in central system for real-time audit logs.",

    portfolio_showcase: "Portfolio Showcase",
    reference_screenshot: "Reference Screenshot",
    diagram_captured: "Diagram captured directly from Joshua's live Zapier workspace.",
    operational_friction: "Operational Friction",
    action_nodes: "Action Nodes & Data Formatting",
    business_optimization: "Business Optimization Impact",
    next_diagram: "Next Diagram",
    live_workflows_portfolio: "📁 Live Workflows Portfolio (Click to View)",

    // Experience Section
    work_history: "Work History",
    study: "Education",
    certs: "Certificates",
    qualifications_label: "Qualifications",
    qualifications_title: "Professional Timeline & Credentials",
    qualifications_desc: "A comprehensive record of my professional experience, academic background, and technical certifications.",
    riyadh_healthcare_alignment: "Riyadh Healthcare & Corporate Alignment",
    riyadh_healthcare_alignment_desc: "The Caregiver & infant training courses acquired in Riyadh (SEED Training Center) equip me with strong compliance, safety, high-hygiene standards, and detailed log monitoring qualifications, translating directly to structured corporate wellness and workplace support roles.",
    certification: "Certification",

    "exp-1_role": "Administrative Assistant",
    "exp-1_company": "Helpful Agency — Maryam Jaber Bint Hassan al-Qaisi",
    "exp-1_location": "Riyadh, Saudi Arabia",
    "exp-1_period": "Dec 2025 — Apr 2026",
    "exp-1_bullet_0": "Provided direct high-level support to Owner/Management, managing client communication and operational agendas to elevate overall enterprise throughput.",
    "exp-1_bullet_1": "Oversaw daily personnel schedules, verified attendance reports, and monitored staff compliance with policies.",
    "exp-1_bullet_2": "Created and formatted tailored, professional CVs precisely adjusted to recruiter demands, ensuring exceptional clarity and quality.",
    "exp-1_bullet_3": "Managed invoice issuance, tracked contract renewals, audited pending accounts receivables, and followed up on client renewals.",
    "exp-1_bullet_4": "Developed web content updates and deployed targeted social media assets with visual assets, boosting engagement.",

    "exp-2_role": "Fleet Coordinator",
    "exp-2_company": "Transportify Philippines",
    "exp-2_location": "Metro Manila, Philippines",
    "exp-2_period": "Sep 2023 — Oct 2024",
    "exp-2_bullet_0": "Coordinated daily dispatch logistics for large vehicle networks, optimizing delivery timeliness and vehicle capacity utilization.",
    "exp-2_bullet_1": "Monitored traffic models and urgent timelines to reorganize active routing, preventing delivery delay incidents.",
    "exp-2_bullet_2": "Maintained real-time logs of fleet utilization, vehicle downtime, driver safety metrics, and customer service satisfaction scores.",
    "exp-2_bullet_3": "Partnered with customer care and driver councils to diffuse logistics friction points, resolving vehicle emergencies immediately.",

    "exp-3_role": "Data Encoder",
    "exp-3_company": "Aero-Pack Industries, Inc.",
    "exp-3_location": "Laguna, Philippines",
    "exp-3_period": "Sep 2022 — Aug 2023",
    "exp-3_bullet_0": "Audited stock orders and worked directly with warehouse managers to regulate inventory quantities, protecting against inventory stockouts.",
    "exp-3_bullet_1": "Generated, reviewed, and authorized freight shipping receipts, ensuring flawless records for heavy cargo operations.",
    "exp-3_bullet_2": "Inputted bulk logistical records into local databases of client profiles, with 99.8% precision.",
    "exp-3_bullet_3": "Collaborated on reconciliation projects to trace misplaced inventory transactions and resolve differences quickly.",

    "edu_degree_0": "Bachelor of Science in Entrepreneurship",
    "edu_school_0": "Daehan College and Business Technology",
    "edu_period_0": "2019 — 2022",
    "edu_details_0": "Focused on business administration, logistics structure, and operational systems.",

    "edu_degree_1": "Bachelor of Science in Information Technology",
    "edu_school_1": "Polytechnic University of the Philippines",
    "edu_period_1": "2018 — 2019",
    "edu_details_1": "Basic computer science foundation, database concepts, and system architecture.",

    "edu_degree_2": "Ladderized Healthcare Training Certificate",
    "edu_school_2": "SEED Training Center (Riyadh, Saudi Arabia)",
    "edu_period_2": "Nov 2025 — Jan 2026",
    "edu_details_2": "Caregiver, Nursing Assistant, and Infant Care modules. Practical nursing assistance and safety ethics training.",

    "cert_name_0": "Microsoft Excel Certification (Basic to Intermediate)",
    "cert_issuer_0": "Coursera",
    "cert_name_1": "Logistics & Supply Chain Fundamentals",
    "cert_issuer_1": "Coursera",
    "cert_name_2": "Zapier AI Automation Specialist",
    "cert_issuer_2": "Technical Virtual Assistant AI",

    // Testimonials
    endorsements: "Endorsements",
    supervisor_testimonials: "Supervisor & Partner Testimonials",
    endorsements_desc: "Endorsements from previous supervisors, business owners, and operations managers validating my dedication, integrity, and operational execution speed.",
    official_reference_letters: "Official Reference Letters",
    official_reference_letters_desc: "Detailed, signed reference certificates from Mrs. Maryam Jaber and former operations superiors can be dispatched in PDF form upon interview scheduling requests.",

    "t-1_name": "Maryam Jaber Bint Hassan",
    "t-1_role": "Owner & Managing Director",
    "t-1_company": "Helpful Agency",
    "t-1_quote": "Joshua has been an indispensable pillar of our Riyadh administrative operations. His capability to coordinate between our international staff, draft professional custom CVs, and track payments with flawless accuracy kept our business running beautifully. He learns incredibly fast.",
    "t-1_tag_0": "Reliability",
    "t-1_tag_1": "Client Liaison",
    "t-1_tag_2": "Excel Analytics",

    "t-2_name": "Leonardo Santos",
    "t-2_role": "Operations Supervisor",
    "t-2_company": "Transportify Hub",
    "t-2_quote": "In the quick-moving logistics environment, Joshua's coordination was exemplary. He stayed calm under pressure, solved driver dispatch issues instantly, and optimized our travel routes with precise reports. Any logistics company will be lucky to have him.",
    "t-2_tag_0": "Fleet Coordination",
    "t-2_tag_1": "Problem Solving",
    "t-2_tag_2": "Rapid Routing",

    "t-3_name": "Elena Ramos",
    "t-3_role": "Logistics Manager",
    "t-3_company": "Aero-Pack Industries",
    "t-3_quote": "Accuracy is non-negotiable for freight data, and Joshua consistently maintained a near-perfect entry record. His analytical work on inventory levels and delivery logs prevented multiple warehouse shortages. He is proactive and highly trustworthy.",
    "t-3_tag_0": "Data Integrity",
    "t-3_tag_1": "Stock Audits",
    "t-3_tag_2": "Process Adherence",

    // Contact
    contact_label: "Contacts",
    contact_title: "Contacts",
    contact_desc: "Submit a message directly through my digital portal, or reach out using the official direct credentials below. Immediate responses guaranteed.",
    direct_connect: "Direct Connect",
    initiate_interview: "Initiate Interview Coordination",
    submit_message_desc: "Submit a message directly through my digital portal, or reach out using the official direct credentials below. Immediate responses guaranteed.",
    contact_directory: "Contact Directory",
    official_email: "Official Email",
    copy_address: "Copy Address",
    copied: "Copied!",
    direct_riyadh_contact: "Direct Riyadh Contact",
    copy_phone: "Copy Phone",
    professional_network: "Professional Network",
    official_credentials_only: "Official Credentials Only",
    official_credentials_desc: "Iqama details, professional training records from SEED and Helpful Agency templates can be fully validated via Qiwa / Absher during corporate screening phases.",
    secure_message_composer: "Secure Message Composer",
    full_name: "Full Name",
    email_address: "Email Address",
    enter_fullname: "Enter full name",
    email_placeholder: "name@company.com",
    message_subject: "Message Subject",
    subject_placeholder: "e.g. Schedule Interview/Operations Inquiry",
    message_body: "Message Body",
    message_placeholder: "Hey Joshua, we would love to review your background...",
    success_message: "Inquiry sent successfully! Thank you.",
    sending_inquiry: "Sending Inquiry...",
    send_inquiry: "Send Inquiry Message",

    // Footer
    rights_reserved: "All rights reserved.",
    footer_specialist: "Operations & Systems Support Specialist",
    footer_iqama: "Transferable Iqama (Sponsor Approved) • Based in Riyadh, Saudi Arabia",
  },
  ar: {
    // Header & Badges
    riyadh_based: "مقيم في الرياض • الإقامة قابلة للتحويل فوراً",
    transfer_status: "حالة نقل الكفالة",
    transfer_status_val: "موافقة الكفيل جاهزة • متاح للعمل فوراً",
    visa_status: "حالة التأشيرة",
    visa_status_val: "مهنة مشرف مكتب (تأشيرة عمل صالحة)",
    available_immediately: "متاح للعمل فوراً",
    hire_immediately: "توظيف فوري",
    print_resume: "طباعة السيرة الذاتية",
    ask_joshua: "اسأل جوشوا",
    services: "الخدمات",
    experience: "الخبرة المهنية",
    testimonials: "التوصيات",
    contact: "اتصل بي",
    core_contributions: "المساهمات الأساسية",
    administrative_solutions: "العمليات المتخصصة والحلول الإدارية",
    maximizing_output: "زيادة إنتاجية الأعمال من خلال الأنظمة اللوجستية المنضبطة، وتدقيق جداول البيانات، وأتمتة سير العمل، ووظائف الدعم المكتبي المنظمة.",
    verified_standard: "معايير الخدمة معتمدة",
    need_custom_process: "هل تحتاج إلى تهيئة عملية إدارية مخصصة؟",
    specialize_adapting: "أنا متخصص في التكيف بسرعة مع البرامج الخاصة بالشركات، وإعداد محفزات الأتمتة، وتنظيف الجداول يدوياً. خطابات التوصية من الإدارة المباشرة متاحة.",

    // Hero Section
    joshua: "جوشوا",
    albana: "البانيا.",
    specialized_ops: "العمليات المتخصصة",
    ops_specialist: "أخصائي العمليات والخدمات اللوجستية والإدارية",
    bio: "أنا متواجد حالياً في الرياض ومعي إقامة قابلة للتحويل (نقل كفالة معتمد من الكفيل) وتأشيرة عمل صالحة بمهنة مشرف مكتب. أمتلك حافزاً عالياً وموثوقية، ومجهز بشهادات معتمدة في مايكروسوفت إكسل المتقدم، والعمليات اللوجستية، ومسارات أتمتة زابيير (Zapier) لزيادة كفاءة الشركة وتسريع الإنتاجية.",
    profile_overview: "لمحة-عامة-الملف.json",
    current_location: "الموقع الحالي",
    location_val: "الرياض، المملكة العربية السعودية",
    primary_email: "البريد الإلكتروني",
    saudi_contact: "رقم الاتصال (السعودية)",
    office_skills: "المهارات المكتبية",
    automation_systems: "أنظمة الأتمتة",
    key_certifications: "الشهادات الرئيسية",
    languages: "اللغات",
    english_lvl: "طلاقة كاملة",
    filipino_lvl: "اللغة الأم",
    arabic_lvl: "مبتدئ",
    english: "الإنجليزية",
    filipino: "الفلبينية",
    arabic: "العربية",

    // Services Section
    "admin-support_title": "العمليات والدعم الإداري",
    "admin-support_desc": "مساعدة تنفيذية شاملة وإشراف على الموظفين لزيادة أداء الأعمال اليومي وتبسيط الأولويات الهامة.",
    "admin-support_feature_0": "المساعدة التنفيذية وإدارة المواعيد والأجندة",
    "admin-support_feature_1": "حماية الوثائق والسجلات السرية وتأمينها",
    "admin-support_feature_2": "الفواتير، ومراقبة المدفوعات، وتتبع العقود",
    "admin-support_feature_3": "إعداد السير الذاتية المهنية وتنسيق شؤون الموظفين",

    "logistics-fleet_title": "الخدمات اللوجستية وتنسيق الأسطول",
    "logistics-fleet_desc": "التوجيه الاستراتيجي للمركبات، وتحليل المسارات، وقياس الأداء لشبكات الخدمة ذات الإشغال العالي.",
    "logistics-fleet_feature_0": "التوجيه الديناميكي للمركبات وإدارة الجداول الزمنية",
    "logistics-fleet_feature_1": "التنسيق والربط بين السائقين وخدمة العملاء",
    "logistics-fleet_feature_2": "إعداد تقارير العمليات ومراجعة مؤشرات الأداء",
    "logistics-fleet_feature_3": "الالتزام بالأنظمة وتطبيق معايير السلامة والأمان",

    "data-management_title": "إدارة البيانات وتحليلات إكسل",
    "data-management_desc": "إدارة دقيقة لخطوط تدفق البيانات، وتدقيق لوحات المؤشرات، وتصميم جداول البيانات المتقدمة.",
    "data-management_feature_0": "تطوير جداول بيانات متقدمة وقواعد بيانات الحالة",
    "data-management_feature_1": "فحص الاختلافات وإطلاق دورات تصحيح الأخطاء",
    "data-management_feature_2": "متابعة مخزون السلع وتدفق إيصالات التسليم",
    "data-management_feature_3": "تشغيل نظام تخطيط موارد المؤسسات (ERP) والأنظمة القديمة",

    "automation-ai_title": "أتمتة العمليات وسير عمل زابيير (Zapier)",
    "automation-ai_desc": "تنفيذ عمليات الأتمتة لربط الأدوات الرقمية المختلفة، وإلغاء التكرار الإداري، وتسريع معدلات الاستجابة.",
    "automation-ai_feature_0": "مسارات عمل بريدية مؤتمتة متعددة الخطوات",
    "automation-ai_feature_1": "مشغلات تلقائية لنقل البيانات من الجداول إلى قواعد البيانات",
    "automation-ai_feature_2": "إشعارات وتنبيهات المهام المدعومة بالذكاء الاصطناعي",
    "automation-ai_feature_3": "استكشاف أخطاء مسارات العمل وإصلاح الاختناقات",

    // Zapier Workflows
    "homecare-lead_title": "أتمتة عملاء الرعاية المنزلية",
    "homecare-lead_subtitle": "مسار التقاط البيانات وتوزيع الإشعارات الديناميكية",
    "homecare-lead_challenge": "كانت طلبات المرضى/الرعاية الواردة من نماذج Google تتطلب مراجعة يدوية، وتنسيقاً بطيئاً، ونسخاً يدوياً إلى نظام إدارة العملاء، وتنبيهات متأخرة للموظفين.",
    "homecare-lead_impact": "يقلل من تأخر استجابة العملاء من 4 ساعات إلى أقل من 30 ثانية مع ضمان سلامة البيانات بنسبة 100٪.",
    "homecare-lead_step_0": "1. نماذج جوجل: يبدأ مسار العمل فور إرسال النموذج.",
    "homecare-lead_step_1": "2. أداة التنسيق من زابيير (نصوص): تنظف وتنسق حقول الاسم إلى الحالة القياسية.",
    "homecare-lead_step_2": "3. أداة التنسيق من زابيير (أرقام): تنظف مدخلات الهاتف لتطابق المعايير السعودية والدولية.",
    "homecare-lead_step_3": "4. أداة التنسيق من زابيير (التاريخ والوقت): توحد الطوابع الزمنية لتطابق التوقيت المحلي.",
    "homecare-lead_step_4": "5. جداول جوجل: تسجل تلقائياً ملفات العملاء المنظمة في سجل التدقيق الرئيسي.",
    "homecare-lead_step_5": "6. جيميل: يرسل تلقائياً إيجازاً تشغيلياً مهيكلاً إلى الفريق الإقليمي.",
    "homecare-lead_step_6": "7. إشعارات واتساب: ترسل تنبيهات نصية فورية لتأكيد الخدمة إلى مقدمي الرعاية المحددين.",
    "homecare-lead_step_7": "8. جيميل: يتابع تلقائياً مع العميل بإرسال الكتيبات والبروشورات الرسمية.",

    "dept-routing_title": "توجيه الأقسام لعدة فروع",
    "dept-routing_subtitle": "التصنيف الذكي للاستفسارات وتصفية مسارات التوجيه",
    "dept-routing_challenge": "كانت الاستفسارات من أقسام الشركة المختلفة تصل إلى صندوق بريد واحد، مما يسبب تأخيراً كبيراً في الفرز والتوجيه الخاطئ.",
    "dept-routing_impact": "يلغي عبء الفرز الإداري اليدوي تماماً ويوجه الملفات مباشرة إلى أصحاب العلاقة فوراً.",
    "dept-routing_step_0": "1. نماذج جوجل: يملأ العميل نموذج الاستفسار ويختار القسم المطلوب.",
    "dept-routing_step_1": "2. منسق زابيير: يوحد الاسم الكامل للعميل وتنسيقه.",
    "dept-routing_step_2": "3. فلتر زابيير: يعالج فقط المدخلات الصالحة التي تحتوي على جهات اتصال تم التحقق منها.",
    "dept-routing_step_3": "4. مسارات زابيير (المبيعات، المالية، الموارد البشرية، الدعم الفني): تقسيم التدفق إلى 4 اتجاهات.",
    "dept-routing_step_4": "5. الفروع (مثل فرع المبيعات): يتحقق من الشرط ➔ يرسل بريداً مخصصاً، ويحدث صف جدول جوجل في علامة تبويب المبيعات، وينبه مدير المبيعات.",

    "leads-email_title": "تنبيهات العملاء المحتملين عبر البريد",
    "leads-email_subtitle": "تسجيل العملاء المحتملين عالي السرعة والرد التلقائي",
    "leads-email_challenge": "كان يُنسى العملاء المحتملون عبر البريد الإلكتروني أو يتم تسجيلهم بشكل غير متسق في جداول البيانات، مما يؤدي إلى فقدان فرص التحويل.",
    "leads-email_impact": "يوفر أكثر من 5 ساعات من إدخال البيانات يدوياً أسبوعياً ويضمن حصول 100٪ من العملاء المحتملين على رسائل ترحيب فورية.",
    "leads-email_step_0": "1. نماذج جوجل: يملأ العميل المحتمل نموذج الاستفسار أو الحجز.",
    "leads-email_step_1": "2. منسق زابيير: يزيل المسافات الزائدة من عناوين البريد لتجنب فشل الإرسال.",
    "leads-email_step_2": "3. منسق زابيير: يجعل الحرف الأول كبيراً (للاسم الإنجليزي) لتوجيه تحية شخصية دافئة.",
    "leads-email_step_3": "4. جداول جوجل: يضيف بيانات العميل المحتمل مع علامات المصدر المحددة في جدول البيانات.",
    "leads-email_step_4": "5. جيميل: يرسل تلقائياً بريداً ترحيبياً وتعريفياً مخصصاً إلى العميل المحتمل.",
    
    "zapier-workflow_title": "أتمتة خدمة العملاء والتوجيه الذكي",
    "zapier-workflow_subtitle": "أتمتة تذاكر الدعم وتوجيه طلبات الخدمة في الوقت الفعلي",
    "zapier-workflow_challenge": "كانت استفسارات العملاء وطلبات الدعم التشغيلي تتم معالجتها يدوياً، مما تسبب في تأخير الرد وتفاوت جودة الخدمة المقدمة.",
    "zapier-workflow_impact": "يضمن عدم ضياع أي استفسار، مع تقليل وقت الاستجابة إلى أقل من 5 دقائق بالتتبع التلقائي.",
    "zapier-workflow_step_0": "1. استلام الاستفسار: من قنوات متعددة في صندوق وارد مركزي واحد.",
    "zapier-workflow_step_1": "2. معالج زابيير (Formatter): تحديد معايير العميل الرئيسية وتنظيف البيانات المدخلة.",
    "zapier-workflow_step_2": "3. التصفية والتوجيه (Router): التحقق من الحقول وفصل المهام تلقائياً إلى صفوف الأولوية.",
    "zapier-workflow_step_3": "4. التنبيهات التلقائية: إرسال إشعار فوري عبر سلاك أو واتساب لفريق العمل المتاح.",
    "zapier-workflow_step_4": "5. تحديث السجلات: إنشاء أو تحديث سجلات العملاء في النظام المركزي والتقارير في الوقت الفعلي.",

    portfolio_showcase: "معرض أعمال الأتمتة والعمليات",
    reference_screenshot: "لقطة شاشة مرجعية",
    diagram_captured: "تم التقاط المخطط مباشرة من مساحة العمل الحية الخاصة بجوشوا على زابيير (Zapier).",
    operational_friction: "المشكلة والخلل التشغيلي",
    action_nodes: "خطوات التنفيذ وتنسيق البيانات",
    business_optimization: "أثر تحسين وتبسيط الأعمال",
    next_diagram: "المخطط التالي",
    live_workflows_portfolio: "📁 معرض مسارات العمل الحية (انقر للمشاهدة)",

    // Experience Section
    work_history: "سجل العمل المهني",
    study: "التعليم والدراسة",
    certs: "الشهادات المعتمدة",
    qualifications_label: "المؤهلات والخبرات",
    qualifications_title: "الجدول الزمني المهني والمؤهلات",
    qualifications_desc: "سجل شامل وموثق لخبرتي المهنية وخلفيتي الأكاديمية والشهادات الفنية المعتمدة.",
    riyadh_healthcare_alignment: "المواءمة والربط بين الرعاية الصحية والشركات بالرياض",
    riyadh_healthcare_alignment_desc: "الدورات التدريبية في مجال رعاية المرضى ورعاية الأطفال التي حصلت عليها في الرياض (مركز SEED للتدريب) تؤهلني بمعايير امتثال وسلامة ونظافة عالية وتدقيق تفصيلي للسجلات، مما ينعكس مباشرة على أدوار دعم بيئة العمل والعافية المؤسسية بالمملكة.",
    certification: "شهادة معتمدة",

    "exp-1_role": "مساعد إداري",
    "exp-1_company": "مكتب خدمات تقديم الرعاية والخدمات المنزلية — مريم جابر بنت حسن القيسي",
    "exp-1_location": "الرياض، المملكة العربية السعودية",
    "exp-1_period": "ديسمبر 2025 — أبريل 2026",
    "exp-1_bullet_0": "تقديم دعم مباشر رفيع المستوى للمالك/الإدارة، وإدارة اتصالات العملاء والمهام التشغيلية لرفع الكفاءة العامة للوكالة.",
    "exp-1_bullet_1": "الإشراف على الجداول اليومية للموظفين، والتحقق من تقارير الحضور والانصراف، ومراقبة التزام الكوادر بالسياسات والتعليمات.",
    "exp-1_bullet_2": "إنشاء وتنسيق سير ذاتية احترافية ومخصصة لتطابق متطلبات مكاتب التوظيف بدقة تامة وبأعلى مستويات الجودة.",
    "exp-1_bullet_3": "إدارة إصدار الفواتير ومتابعة العقود، وتدقيق الحسابات المدينة المعلقة، ومتابعة تجديد الاشتراكات مع العملاء.",
    "exp-1_bullet_4": "تحديث وإعداد المحتوى الرقمي للمواقع وشبكات التواصل مع تصميم منشورات مرئية لزيادة التفاعل وجذب المستفيدين.",

    "exp-2_role": "منسق حركة أسطول سيارات وشاحنات",
    "exp-2_company": "ترانسبورتيفاي الفلبين (Transportify Philippines)",
    "exp-2_location": "مانيلا، الفلبين",
    "exp-2_period": "سبتمبر 2023 — أكتوبر 2024",
    "exp-2_bullet_0": "تنسيق عمليات الشحن والخدمات اللوجستية اليومية لشبكات مركبات النقل الكبيرة لضمان التسليم في الوقت المحدد والاستغلال الأمثل للحمولات والموارد.",
    "exp-2_bullet_1": "تحليل أنماط الحركة المرورية والجداول الزمنية العاجلة لتعديل التوجيه النشط للمركبات وتلافي أي تأخير تشغيلي.",
    "exp-2_bullet_2": "حفظ تقارير حية حول تشغيل الأسطول وأعطال المركبات ومقاييس سلامة السائقين ومستويات رضا المستفيدين بدقة عالية.",
    "exp-2_bullet_3": "التعاون الوثيق مع خدمات العملاء وممثلي السائقين لحل نقاط الاحتكاك اللوجستي والتعامل مع الطوارئ المرورية فوراً.",

    "exp-3_role": "مدخل بيانات ومراجع سجلات",
    "exp-3_company": "إيرو باك للصناعات (Aero-Pack Industries, Inc.)",
    "exp-3_location": "لاغونا، الفلبين",
    "exp-3_period": "سبتمبر 2022 — أغسطس 2023",
    "exp-3_bullet_0": "تدقيق طلبات الشراء والمخزون والتنسيق مع مديري المستودعات لتنظيم كميات المنتجات وتفادي نفاد السلع.",
    "exp-3_bullet_1": "إنشاء ومراجعة واعتماد إيصالات شحن البضائع الثقيلة لضمان خلو السجلات من الأخطاء وتسهيل التدقيق والتحقق التشغيلي.",
    "exp-3_bullet_2": "إدخال سجلات لوجستية ضخمة لملفات العملاء في قواعد البيانات المحلية بدقة استثنائية بلغت 99.8٪.",
    "exp-3_bullet_3": "المشاركة في مشاريع المطابقة والتسوية لتتبع حركات المخزون المفقودة وإيجاد الفروق وتسويتها وحل العقبات بسرعة.",

    "edu_degree_0": "بكالوريوس العلوم في ريادة الأعمال",
    "edu_school_0": "كلية دايهان لإدارة الأعمال والتكنولوجيا",
    "edu_period_0": "2019 — 2022",
    "edu_details_0": "دراسة متخصصة تركز على إدارة الأعمال، وهيكلة الخدمات اللوجستية، والأنظمة التشغيلية للشركات.",

    "edu_degree_1": "بكالوريوس العلوم في تكنولوجيا المعلومات",
    "edu_school_1": "جامعة الفلبين التقنية (Polytechnic University)",
    "edu_period_1": "2018 — 2019",
    "edu_details_1": "دراسة أساسيات علوم الكمبيوتر وقواعد البيانات وهندسة البرمجيات والأنظمة التقنية.",

    "edu_degree_2": "شهادة التدريب المتكامل على تقديم الرعاية الصحية",
    "edu_school_2": "مركز SEED للتدريب المهني (الرياض، المملكة العربية السعودية)",
    "edu_period_2": "نوفمبر 2025 — يناير 2026",
    "edu_details_2": "شملت رعاية المرضى والممرض المساعد ورعاية الأطفال والمواليد والتعامل الفعال مع اشتراطات السلامة والتعقيم المهني المعتمد.",

    "cert_name_0": "شهادة مايكروسوفت إكسل المعتمدة (من الأساسي إلى المتقدم)",
    "cert_issuer_0": "منصة كورسيرا العالمية (Coursera)",
    "cert_name_1": "أساسيات إدارة الخدمات اللوجستية وسلاسل الإمداد",
    "cert_issuer_1": "منصة كورسيرا العالمية (Coursera)",
    "cert_name_2": "أخصائي أتمتة العمليات والذكاء الاصطناعي على زابيير (Zapier)",
    "cert_issuer_2": "معهد المساعد الافتراضي التقني للذكاء الاصطناعي",

    // Testimonials
    endorsements: "شهادات وتوصيات",
    supervisor_testimonials: "شهادات وتوصيات المشرفين والشركاء والعملاء",
    endorsements_desc: "توصيات مهنية من مشرفين سابقين ومسؤولين إداريين تؤكد تفاني وموثوقيتي وسرعة تنفيذ العمليات اللوجستية والإدارية.",
    official_reference_letters: "خطابات التوصية والخطابات الرسمية الموثقة",
    official_reference_letters_desc: "يمكن تزويدكم بنسخ موقعة وموثقة من خطابات التوصية من السيدة مريم جابر ومسؤولي العمليات السابقين بصيغة PDF بناءً على طلبكم لجدولة المقابلات.",

    "t-1_name": "مريم جابر بنت حسن القيسي",
    "t-1_role": "المالك والمدير العام",
    "t-1_company": "مكتب ومؤسسة خدمات تقديم الرعاية",
    "t-1_quote": "لقد كان جوشوا ركيزة أساسية لا غنى عنها في عملياتنا الإدارية بالرياض. قدرته الفائقة على التنسيق والربط بين كوادرنا المتنوعة وصياغة السير الذاتية المهنية وتدقيق الفواتير بدقة متناهية حافظت على انسيابية عملنا الإداري بكفاءة عالية. إنه يتعلم بسرعة مذهلة وموثوق جداً.",
    "t-1_tag_0": "الموثوقية والالتزام",
    "t-1_tag_1": "التواصل مع العملاء",
    "t-1_tag_2": "تحليلات وجداول إكسل",

    "t-2_name": "ليوناردو سانتوس",
    "t-2_role": "مشرف العمليات التشغيلية",
    "t-2_company": "ترانسبورتيفاي هوب (Transportify Hub)",
    "t-2_quote": "في بيئة العمل اللوجستية السريعة للغاية، كان تنسيق جوشوا نموذجاً يُحتذى به. لقد حافظ على هدوئه التام تحت الضغط، وحل مشكلات توجيه وحركة السائقين فوراً، وحسّن مسارات التسليم بتقارير دقيقة ومثالية. أي شركة لوجستية ستكون محظوظة بوجوده معها.",
    "t-2_tag_0": "تنسيق حركة الأسطول",
    "t-2_tag_1": "حل المشكلات الفوري",
    "t-2_tag_2": "توجيه المسارات السريع",

    "t-3_name": "إيلينا راموس",
    "t-3_role": "مديرة العمليات اللوجستية",
    "t-3_company": "إيرو باك للصناعات (Aero-Pack Industries)",
    "t-3_quote": "الدقة هي أمر لا يقبل المساومة في سجلات وبيانات الشحن، وقد حافظ جوشوا باستمرار على سجل إدخال شبه خالٍ من الأخطاء. منعت جهوده التحليلية في مراقبة كميات المخزون وسجلات التسليم حدوث عجز في المستودعات لعدة مرات. إنه مبادر وموثوق جداً.",
    "t-3_tag_0": "سلامة ودقة البيانات",
    "t-3_tag_1": "تدقيق المخزون السلعي",
    "t-3_tag_2": "الالتزام التام بالتعليمات",

    // Contact
    contact_label: "جهات الاتصال",
    contact_title: "جهات الاتصال",
    contact_desc: "أرسل رسالة فورية ومباشرة من خلال بوابتي الرقمية، أو تواصل معي عبر بيانات الاتصال المباشرة المبينة أدناه. أضمن لك الرد في أسرع وقت.",
    direct_connect: "اتصال مباشر وسريع",
    initiate_interview: "بدء تنسيق المقابلة والتوظيف",
    submit_message_desc: "أرسل رسالة فورية ومباشرة من خلال بوابتي الرقمية، أو تواصل معي عبر بيانات الاتصال المباشرة المبينة أدناه. أضمن لك الرد في أسرع وقت.",
    contact_directory: "دليل جهات الاتصال",
    official_email: "البريد الإلكتروني الرسمي",
    copy_address: "نسخ البريد",
    copied: "تم النسخ!",
    direct_riyadh_contact: "رقم الاتصال المباشر (الرياض)",
    copy_phone: "نسخ الرقم",
    professional_network: "الشبكة المهنية (لينكد إن)",
    official_credentials_only: "المستندات والمعلومات الرسمية فقط",
    official_credentials_desc: "معلومات الإقامة، وسجلات التدريب المهني من مركز SEED ووكالة مريم جابر لتقديم الخدمات يمكن التحقق منها بشكل رسمي وموثق عبر منصتي (قوى / أبشر) خلال مراحل التقييم الوظيفي.",
    secure_message_composer: "محرر وبوابة إرسال الرسائل الآمنة",
    full_name: "الاسم الكامل",
    email_address: "البريد الإلكتروني",
    enter_fullname: "أدخل اسمك الكامل",
    email_placeholder: "name@company.com",
    message_subject: "موضوع الرسالة والاستفسار",
    subject_placeholder: "مثال: تحديد موعد مقابلة شخصية / استفسار تشغيلي",
    message_body: "نص وتفاصيل الرسالة",
    message_placeholder: "مرحباً جوشوا، نود مراجعة ملفك وتحديد موعد لمقابلتك الشخصية...",
    success_message: "تم إرسال الاستفسار بنجاح! شكراً جزيلاً لتواصلك.",
    sending_inquiry: "جاري الإرسال الآن...",
    send_inquiry: "إرسال الرسالة الإدارية",

    // Footer
    rights_reserved: "جميع الحقوق محفوظة.",
    footer_specialist: "أخصائي دعم العمليات وتطوير الأنظمة والإدارة",
    footer_iqama: "إقامة قابلة لنقل الكفالة (موافقة الكفيل جاهزة) • مقيم في الرياض، السعودية",
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("language") as Language) || "en";
    }
    return "en";
  });

  const dir = language === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    localStorage.setItem("language", language);
    document.documentElement.dir = dir;
    document.documentElement.lang = language;
  }, [language, dir]);

  const t = (key: string): string => {
    return translations[language][key] || translations["en"][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, dir, t }}>
      <div dir={dir} className={language === "ar" ? "font-sans font-medium" : "font-sans"}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
