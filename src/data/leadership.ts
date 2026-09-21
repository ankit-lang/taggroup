export interface CareerTimelineItem {
  date: string;
  role: string;
  description: string;
}

export interface Metric {
  value: string;
  label: string;
}

export interface LeadershipProfile {
  id: string;
  name: string;
  initials: string;
  imageUrl?: string;
  title: string;
  shortDesc: string;
  category: 'Core Partners' | 'Associate Partners' | 'Strategic Associates' | 'International Network' | 'Extended Team';
  location?: string;
  experience?: string;
  credentials?: string[];
  coreAreas?: string[];
  metrics?: Metric[];
  timeline?: CareerTimelineItem[];
  about?: string;
  industries?: string;
}

export const leadershipData: LeadershipProfile[] = [
  {
    id: 'gaurav-sharma',
    name: 'Gaurav Sharma',
    initials: 'GS',
    imageUrl: '/gaurav.png',
    title: 'Structuring Leader & Finance Transformation | Fractional CFO | International Tax',
    shortDesc: '14+ years experience in SE Asia and APAC, specializing in M&A tax, transfer pricing, and cross-border structuring.',
    category: 'Core Partners',
    location: 'Gurugram, India',
    experience: '14+ years',
    about: 'Gaurav Sharma is a seasoned finance leader with over 14+ Yrs of experience across roles viz. Virtual CFO, controllership, transformation, and structuring, having worked extensively with Big 4 firms, large MNC groups, and complex multi-entity environments. His career spans high-growth and regulated ecosystems where financial discipline, tax and governance, and predictability are critical to business outcomes.\n\nHe brings deep expertise in owning finance outcomes beyond compliance, including balance sheet integrity, month-end close discipline, MIS reliability, audit readiness, and stakeholder confidence. Gaurav has led and supported finance functions across India and international markets, working closely with auditors, and tax advisors. Operating with a risk-first, governance-led mindset, he positions finance as a business enabler while ensuring control, transparency, and scalability.\n\nHe has trained 800+ Chartered Accountants under ICAI’s GMCS program, authored multiple professional publications, a routine lecturer in esteemed universities on international tax and global policies and has been quoted in the Bloomberg Daily Tax Report.\n\nAwards & Recognitions: "Kudos" (2014), "On-the-Spot" Award (2016), "Shield Award" (2015), "Multiple Incentives" (2017-25).\n\nPublications: IFA International Tax Conference Journal (Withholding Tax Philosophy), Taxmann Special Edition (Black Money), Bloomberg Daily Tax Report (India’s GST Framework).\n\nInterests: Vibe Coding as an AI Generalist, Experimenting with Automations (Zappier, N8N, Make.Com), Listening to Music, Traveling, Spending Time with Family.',
    credentials: [
      'Chartered Accountant (ICAI, 2012)',
      'Management Development Program — IIM Indore (2022)',
      'Diploma in IFRS — Grant Thornton (2024)',
      'Member of IOV Registered Valuer Foundation — Securities/Financial Assets (ICAI, 2018)',
      'B.Com.(Hons.) — Delhi University (2008)',
      'CPA (Australia) & MBA (NMIMS) — in progress'
    ],
    coreAreas: [
      'Finance Operations & Governance: In-house team setup, SOPs & control frameworks',
      'Finance Transformation: Dummy runs, month-end close discipline, balance sheet integrity',
      'Structuring & Risk Advisory: Entity & transaction structuring, M&A due diligence',
      'International Tax: Transfer Pricing, PE Attribution, BEPS Pillar 2 & OECD',
      'Cross-Border Structuring, Treaty Interpretation, UAE, KSA & Qatar Tax'
    ],
    metrics: [
      { value: '$102M', label: 'SOVEREIGN EQUITY' },
      { value: '$10.7M', label: 'TAX REFUNDS RECOVERED' },
      { value: '$75M', label: 'LITIGATION OUTCOME' },
      { value: '30+', label: 'ENTITY PORTFOLIO' }
    ],
    timeline: [
      { date: 'JAN 2025 — Present', role: 'Partner — TAG Advisors LLP', description: 'Advises Indian and multinational clients on finance controllership, cross-border structuring, transaction support and governance. Works directly with founders, CFOs and boards.' },
      { date: 'NOV 2023 – DEC 2025', role: 'Financial Controller, Southeast Asia (Egis Group)', description: 'Led a 15-member finance team across India & Bangladesh — close governance, MIS, IFC/statutory/forensic audits, M&A due diligence, project cost control, treasury and IPO-readiness.' },
      { date: 'AUG 2021 – NOV 2023', role: 'Head of Tax Affairs — APAC (Enel Group)', description: 'Regional tax strategy, litigation and multi-jurisdiction compliance across India, Singapore, Vietnam, Indonesia, the Philippines and South Korea; tax-efficient investment & holding models for energy portfolios.' },
      { date: 'FEB 2017 – AUG 2021', role: 'Tax Head — India & Bangladesh (Egis Group)', description: 'Directed cross-border tax planning across 20+ infra/energy entities; standardised documentation, audit-readiness and internal training on PE, cost-plus attribution and AOP taxation.' },
      { date: 'SEP 2015 – FEB 2017', role: 'Assistant Manager | PwC', description: 'Led multi-sector transfer pricing and international tax engagements for global clients across infrastructure, technology, and services.' },
      { date: 'SEP 2012 – SEP 2015', role: 'Associate | KPMG (B S R & Co LLP)', description: 'TP documentation, economic analysis, cross-border supply-chain structuring, APA/MAP support, audit defence.' },
      { date: 'JUL 2012 – JUN 2015', role: 'Associate | S.R. Dinodia & Co. LLP', description: 'Core tax and statutory compliance.' },
      { date: 'JUL 2008 – JUN 2012', role: 'Intern & Associate | S.R. Dinodia & Co.', description: 'Initial articleship and foundational tax exposure.' }
    ],
    industries: 'Infrastructure · Renewable Energy · Engineering & EPC · Technology & Services · Defence · Start-ups & E-commerce'
  },
  {
    id: 'kamal-sharma',
    name: 'Kamal Sharma',
    initials: 'KS',
    title: 'Partner - Audit & Assurance',
    shortDesc: '14+ years experience in audit, financial due diligence, and virtual CFO support.',
    category: 'Core Partners',
    location: 'Gurugram, India',
    experience: '14+ years',
    about: 'Qualified Chartered Accountant with 14+ years of progressive experience leading financial controllership and accounting operations across large multinational and listed organisations — British Telecom, Samsung, Orient Electric and Motherson Sumi. Owns month-end, quarter-end and year-end close; oversees AP, AR, payroll, GL, fixed assets and treasury; and partners with CFOs on close discipline, MIS reliability, audit readiness and shared-service governance. Strong background in SOX / ICFR / Korean SOX, IND AS, IFRS, US GAAP & UK GAAP, and ERP-led process automation on SAP S/4HANA and Oracle.',
    credentials: [
      'Chartered Accountant (ICAI, 2011)',
      'B.Com. (Hons.), Delhi University (2009)',
      'VBA Certified — automation & reporting efficiency'
    ],
    coreAreas: [
      'Month-end, quarter-end & year-end close; consolidation and management reporting',
      'SOX / ICFR / Korean SOX and finance-control frameworks',
      'Statutory, tax & external audit management · IND AS 115 / 116 implementation',
      'ERP implementation (SAP S/4HANA, Oracle, Hyperion), automation & shared-service governance'
    ],
    metrics: [
      { value: '2 days', label: 'SG&A CLOSE CYCLE' },
      { value: '50%', label: 'MANUAL JOURNALS ELIMINATED' },
      { value: '3,000+', label: 'HOURS FREED / YR' },
      { value: '290', label: 'KOREAN SOX CONTROLS' }
    ],
    timeline: [
      { date: 'Oct 2023 — Present', role: 'Financial Planning & Reporting Specialist · British Telecom', description: 'Owned month-end close and corporate financial reporting for BT\'s consumer division; standardised close, cut SG&A cycle by 2 days and eliminated 50 redundant reports.' },
      { date: 'Feb 2021 — Oct 2023', role: 'Chief Manager · Samsung India Electronics', description: 'Led ICFR and Korean SOX compliance for Samsung India — 290 controls governed; coordinated statutory audits with clean audit reports.' },
      { date: 'Feb 2018 — Feb 2021', role: 'Manager, Finance · Orient Electric (Listed)', description: 'IND AS-compliant standalone and consolidated financials; global reporting to Korea HQ aligned to IFRS.' },
      { date: 'Nov 2012 — Feb 2018', role: 'Section Manager · Motherson Sumi', description: 'SAP HANA implementation and testing for financial closing, Fixed Asset, AP and other modules; process automation across finance functions.' },
      { date: 'Jun 2011 — Nov 2012', role: 'Finance Executive · Ober Group', description: 'Branch MIS and initial accounting controls.' }
    ]
  },
  {
    id: 'naresh-kumar-goel',
    name: 'Naresh Kumar Goel',
    initials: 'NG',
    title: 'Associate Partner/Director - Audit & Assurance',
    shortDesc: '30+ years experience specializing in Cost Audits and Management Accounting.',
    category: 'Core Partners',
    about: 'Naresh is listed as part of the Audit & Assurance leadership team in the TAG Advisors partner roster, working alongside Kamal Sharma on statutory audit, internal audit and assurance mandates for Indian and multinational clients.',
    coreAreas: [
      'Statutory audit under the Companies Act, 2013 (Ind AS & Ind AS 115/116)',
      'Internal audit, risk-based audit and management assurance programmes',
      'Group reporting support, consolidation reviews and IFC / ICFR reporting',
      'Assurance for listed and multinational groups with multi-entity portfolios'
    ]
  },
  {
    id: 'sumit-goyal',
    name: 'Sumit Goyal',
    initials: 'SG',
    title: 'Partner - Indirect Taxation (Gurgaon)',
    shortDesc: '6+ years post-qualification experience, specialised in Indirect Taxation Compliance & Advisory and Forensic Accounting.',
    category: 'Core Partners',
    location: 'Gurugram, India',
    experience: '6+ years',
    about: 'Mr Goyal is an Indian CPA (Chartered Accountant) based out of the Gurgaon Office. He has over 6 years of post-qualification experience in the area of Indirect Taxation Compliance & Advisory, including handling of departmental audits, tax impact analysis, and advising clients on various complex aspects. His tenure with APRA and Associates, a specialized indirect taxation advisory firm, has given him deep insight into various indirect tax-related issues and advisory services.',
    credentials: [
      'Chartered Accountant, ICAI',
      'Certificate Course — Forensic Accounting & Fraud Detection (ICAI, Dec 2016)',
      'Pursuing — Diploma in Information Systems Audit (ICAI)',
      'Pursuing — Certificate Course, Concurrent Audit of Banks (ICAI)'
    ],
    coreAreas: [
      'GST compliance reviews, monthly returns and reconciliations',
      'Departmental audits, notices and assessment support',
      'Transaction & business-model impact analysis; diagnostic reviews',
      'Forensic-accounting perspective on tax controls and fraud indicators'
    ]
  },
  {
    id: 'jai-prakash',
    name: 'Jai Prakash',
    initials: 'JP',
    title: 'Partner - Indirect Tax',
    shortDesc: 'GST & Regulatory Advisory',
    category: 'Core Partners',
    about: 'Jai is a Partner in TAG\'s Indirect Tax practice, working alongside Sumit Goyal and Vishal Tayal on GST advisory, compliance, litigation support and departmental audit representation.',
    coreAreas: [
      'GST advisory — classification, input credit and place-of-supply positions',
      'Compliance calendar management, returns and reconciliations (GSTR-1/3B/9/9C)',
      'Assessment, audit and appellate representation',
      'Transaction structuring and tax-impact reviews for new business models'
    ]
  },
  {
    id: 'vishal-tayal',
    name: 'Vishal Tayal',
    initials: 'VT',
    title: 'Partner - Indirect Taxation (New Delhi/UAE)',
    shortDesc: '15+ years experience handling Service Tax, GST, and VAT for SMEs and Fortune 100 companies.',
    category: 'International Network',
    location: 'UAE / New Delhi',
    experience: '8+ years indirect tax',
    about: 'Indian Chartered Accountant based out of New Delhi, and TAG\'s UAE office lead through Taxapolis. Seasoned professional and prolific speaker with around eight years of experience in indirect taxes — GST (India), legacy Service Tax and UAE VAT. Regular faculty on GST for the Institute of Chartered Accountants of India (ICAI) for both members and students. Clientele ranges from SMEs to Fortune 100 organisations across India and the UAE.',
    credentials: [
      'Chartered Accountant, ICAI',
      'Regular faculty for ICAI on GST (members & students)'
    ],
    coreAreas: [
      'India GST and legacy Service Tax — advisory, litigation and health-checks',
      'UAE VAT — advisory, implementation, controls & compliance frameworks',
      'Tax-efficient transaction structuring and Tax Impact Analysis',
      'Diagnostic reviews to identify opportunities & threats · Corporate tax litigation'
    ],
    industries: 'Real Estate & Infrastructure · Consultancy, Engineering & Project Management · Hospitality · Transport (Passenger & Goods)'
  },
  {
    id: 'manorath-rathi',
    name: 'Manorath Rathi',
    initials: 'MR',
    title: 'Partner - Legal, Regulatory & FEMA',
    shortDesc: 'Commercial, Corporate, Insolvency & Tax Laws, White Collar (FEMA & Anti-money laundering)',
    category: 'Associate Partners',
    about: 'Manorath is a law graduate of the prestigious Campus Law Centre, University of Delhi and is additionally a qualified Chartered Accountant from the Institute of Chartered Accountants of India and a commerce graduate of the Calcutta University. He has worked under a renowned Senior Advocate of the Supreme Court of India and groomed himself into a litigation lawyer.\n\nHe specializes in Corporate and Commercial Litigation, Tax litigation, Structuring and Transaction advisory, Insolvency laws, Anti Money Laundering laws and regularly appears before various tribunals, High Courts and the Supreme Court of India.\n\nHe presently advises a US telecom Major, two leading ECommerce giants, and a British Multinational. He also writes articles on contemporary legal issues.',
    credentials: [
      'LL.B. — Campus Law Centre, University of Delhi',
      'Chartered Accountant — ICAI',
      'B.Com. (Hons.) — Calcutta University',
      'Trained under a Senior Advocate of the Supreme Court of India'
    ],
    coreAreas: [
      'Commercial, Corporate, Insolvency & Tax Laws',
      'White Collar (FEMA & Anti-money laundering)',
      'Litigation & Arbitration',
      'Structuring and Transaction advisory'
    ]
  },
  {
    id: 'karuna-sharma',
    name: 'Karuna Sharma',
    initials: 'KR',
    title: 'Associate Partner - Legal & Regulatory',
    shortDesc: 'Legal, Regulatory & Foreign Exchange Regulations',
    category: 'Associate Partners',
    about: 'Karuna is a Partner within TAG\'s specialist legal, regulatory and foreign exchange regulations network, working alongside Manorath Rathi on regulatory advisory, FEMA-related matters and cross-border compliance.',
    coreAreas: [
      'Regulatory advisory across sectoral laws and licensing regimes',
      'Foreign Exchange Management Act (FEMA) — inbound and outbound structures',
      'Cross-border commercial and joint-venture documentation',
      'Compliance-led corporate advisory for multinational groups in India'
    ]
  },
  {
    id: 'ishita-sharma',
    name: 'Ishita Sharma',
    initials: 'IS',
    title: 'Partner - Human Resources & Organisation',
    shortDesc: 'Human Resources & Organisation Capability',
    category: 'Associate Partners',
    location: 'Gurugram, India',
    experience: '15+ years',
    about: 'Versatile HR professional with 15+ years of PAN-India experience in a listed, 500+ employee manufacturing organisation. Specialises in Learning & Development, Talent Acquisition and HR Operations. Recognised for architecting system-driven capability frameworks — moving organisations from execution-led training to data-backed, measurable learning ecosystems. Combines strategic vision with hands-on execution across TNI, LMS, PMS, payroll and compliance — consistently delivering quantifiable gains in training adoption, hiring throughput and workforce enablement.',
    credentials: [
      'MBA (HR & Operations) — ICFAI University, 2011',
      'B.Sc. (Hons.) Biotechnology — Amity University, 2009',
      'ISO Internal Auditor — OHSMS, QMS & EMS',
      'DELF A1 & Adv. Diploma in French'
    ],
    coreAreas: [
      'L&D Strategy & Architecture · Talent Acquisition & Workforce Planning',
      'Performance & Talent Management · HR Operations & Compliance',
      'HR Analytics & Stakeholder Management · ISO-linked training'
    ],
    metrics: [
      { value: '85%', label: 'L&D PLAN ADHERENCE' },
      { value: '95%', label: 'MANDATORY TRAINING' },
      { value: '4.3/5', label: 'LEARNER SATISFACTION' },
      { value: '75%', label: 'OPEN-ROLE CLOSURE' }
    ]
  },
  {
    id: 'manuj-singhal',
    name: 'Manuj Singhal, CFA',
    initials: 'MS',
    title: 'Associate Partner - Valuation',
    shortDesc: 'Business Valuation · Complex Securities · Intangibles · Real Estate',
    category: 'Associate Partners',
    experience: '15+ years',
    about: 'Manuj is a Chartered Financial Analyst and Registered Valuer with 15+ years of rich valuation experience. He has led teams of 50+ in one of the leading Silicon Valley-based analytics firms and has extensive experience providing services to large corporates, Big Four firms, US consulting firms and global companies across numerous complex engagements — from business and equity valuation to complex derivatives, intangibles, purchase-price allocations and ESOPs.',
    credentials: [
      'Chartered Financial Analyst (CFA)',
      'Financial Risk Manager (FRM)',
      'Registered Valuer',
      'MBA (Finance) · Bachelor of Technology (B.Tech)'
    ],
    coreAreas: [
      'Enterprise & equity valuation across industries with strategic modelling',
      'Debt & convertible instruments; VC/PE portfolio and complex derivatives',
      'Intangibles, Purchase Price Allocation (PPA) and ESOP valuation',
      'Real estate valuation, IBR analysis and CECL analysis'
    ]
  },
  {
    id: 'sushil-sharma',
    name: 'Sushil Sharma',
    initials: 'SS',
    title: 'Associate Partner - Technology Infrastructure',
    shortDesc: 'Enterprise IT Infrastructure · Networks, Security & Technology Operations',
    category: 'Associate Partners',
    location: 'Delhi NCR, India',
    experience: '20+ years',
    about: 'About 20 years of work experience in IT Infrastructure Management, program leadership and implementation. Extensive experience managing data-centre operations, network systems, security and servers, and information technology infrastructure planning, capacity analysis and system implementation. Presently AGM IT at Egis India Consulting Engineers, where he leads the IT team, information-security policy, procurement and PAN-India infrastructure delivery.',
    credentials: [
      'M.Sc. (Computer Science), 2004',
      'Certified Internal Auditor',
      'ITIL V3 Foundation Certified Professional',
      'VMware VCA — DCV, Cloud, Workforce Mobility',
      'Microsoft Certified Professional — Windows & Exchange'
    ],
    coreAreas: [
      'Data-centre, server, storage and network operations (LAN / WAN)',
      'Infrastructure & information-security policies; endpoint & mail security',
      'Virtualisation (VMware, Hyper-V), cloud, storage (NetApp, IBM, HP, Azure)',
      'Enterprise IT procurement, vendor management and disaster recovery'
    ]
  },
  {
    id: 'amit-sood',
    name: 'Amit Sood',
    initials: 'AS',
    title: 'Strategic Associate - Real Estate & Workforce',
    shortDesc: 'Real Estate & Workforce Solutions',
    category: 'Strategic Associates',
    location: 'Delhi NCR',
    experience: '18+ years',
    about: 'Amit Sood is a real estate and workforce-support professional with 18+ years of on-ground execution experience dating back to 2008. Through his strategic tie-up with TAG Group, he supports businesses seeking practical, locally coordinated solutions for property identification, transaction facilitation and blue-collar workforce deployment. His real estate focus is Delhi NCR, complemented by the ability to coordinate opportunities in other Indian markets. His role is grounded in market access, site-level coordination and execution support, while TAG Group adds a structured advisory interface for corporate clients.',
    coreAreas: [
      'Real Estate Advisory: Search and preliminary assessment of land parcels, office premises, industrial sites, factories, warehouses.',
      'Transaction Support: Local coordination for site visits, counterpart discussions, documentation flow and progression of a transaction.',
      'Property Management: Tenant coordination, upkeep, repairs, rent administration, occupancy and day-to-day property matters.',
      'Workforce Solutions: Coordination of blue-collar and facility-support manpower, including security personnel, guards, office boys.'
    ],
    timeline: [
      { date: 'Step 1', role: 'Define', description: 'Translate the business need into a clear location, property, budget, workforce and timeline brief.' },
      { date: 'Step 2', role: 'Source & Assess', description: 'Identify relevant options; coordinate preliminary information, market inputs and site visits.' },
      { date: 'Step 3', role: 'Support Execution', description: 'Assist with stakeholder coordination, documentation flow and implementation against agreed scope.' }
    ]
  },
  {
    id: 'awen-lee',
    name: 'Awen Lee',
    initials: 'AL',
    title: 'Executive Director (Singapore)',
    shortDesc: 'Corporate Services · Accounting, Secretarial, Payroll & Compliance',
    category: 'International Network',
    experience: '10+ years',
    about: 'Awen is Executive Director of S&A Consulting Singapore Pte. Ltd. and Grand Merge Capital Pte. Ltd. He supports accounting, company secretarial, payroll and corporate services — including practical engagement with Singapore authorities (IRAS, MOM, ACRA, CPF Board, MINDEF). His background combines seven years with an international accounting firm (Top 20 in Singapore) and two years in commercial industry, before founding S&A.',
    credentials: [
      'Member — CPA Australia',
      'Member — Institute of Singapore Chartered Accountants (ISCA)',
      'Member — Singapore Chartered Tax Professional',
      'BSc (Comm.) Accounting — Universiti Tunku Abdul Rahman'
    ],
    coreAreas: [
      'Accounting setup and ongoing compliance for Singapore entities',
      'Company secretarial and corporate services (ACRA)',
      'Payroll and employment-related administration (MOM, CPF)',
      'Regulatory coordination with IRAS, MINDEF and other authorities'
    ],
    metrics: [
      { value: 'S$40M', label: 'SUPPORTED INV. MANAGER AUM' },
      { value: '10+', label: 'YEARS PROF. EXPERIENCE' }
    ],
    timeline: [
      { date: 'Present', role: 'Executive Director', description: 'Executive Director of S&A Consulting Singapore Pte. Ltd. and Grand Merge Capital Pte. Ltd.' },
      { date: 'Recent', role: 'Compliance Leader', description: 'Oversee and assist to set up the accounting function and compliance matter for a Switzerland investment management Company with assets worth of S$40 million.' },
      { date: 'Previous', role: 'Accounting Services', description: '7 years’ accounting experience in an International accounting firm (top 20 firms in Singapore) and 2 years in commercial industries.' }
    ]
  },
  {
    id: 'hasina-bahemia',
    name: 'Hasina Bahemia',
    initials: 'HB',
    title: 'Mauritius Office Contact',
    shortDesc: 'International Network · Mauritius',
    category: 'International Network',
    about: 'Hasina is the Mauritius office contact for TAG\'s international network, operating through Fedico. She supports cross-border structures involving Mauritius — a jurisdiction commonly used for inbound investment into India and Africa — including entity administration and local compliance coordination.'
  },
  {
    id: 'ishu-goel',
    name: 'Ishu Goel',
    initials: 'IG',
    title: 'Chartered Accountant',
    shortDesc: 'Extended Professional Team',
    category: 'Extended Team',
    about: 'Ishu is a Chartered Accountant and part of the wider professional team. She supports partners across direct tax, indirect tax and audit engagements.'
  }
];
