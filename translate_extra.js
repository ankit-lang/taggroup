const fs = require('fs');

const newsletterEn = `
    newsletter: {
      title: "Newsletters",
      heading: "Subscribe to TAG Group Insights",
      desc: "Sharp, regular reading for decision-makers — across tax, transfer pricing, startups, key rulings, geopolitics and regulatory change. Choose what you'd like to receive.",
      fields: {
        name: "Full name",
        email: "Email",
        company: "Company",
        designation: "Designation"
      },
      which: "Which newsletters?",
      choices: {
        tax: "Tax & TP Fortnightly",
        tax_f: "Fortnightly",
        startup: "Startup Fortnightly",
        startup_f: "Fortnightly",
        case: "Case Law Weekly",
        case_f: "Weekly",
        brief: "The Weekly Brief",
        brief_f: "Weekly"
      },
      consent: "I'd like to receive these newsletters from TAG Group and consent to my details being used for that purpose. I can unsubscribe at any time.",
      subscribe: "Subscribe",
      subscribing: "Subscribing...",
      note: "No spam. Unsubscribe any time."
    },
`;

const newsletterKo = `
    newsletter: {
      title: "뉴스레터",
      heading: "TAG Group 인사이트 구독",
      desc: "세금, 이전 가격, 스타트업, 주요 판결, 지정학 및 규제 변화 전반에 걸친 의사 결정자를 위한 날카롭고 정기적인 읽을거리입니다. 받고 싶은 것을 선택하세요.",
      fields: {
        name: "성명",
        email: "이메일",
        company: "회사",
        designation: "직책"
      },
      which: "어떤 뉴스레터인가요?",
      choices: {
        tax: "세금 및 TP 격주간",
        tax_f: "격주",
        startup: "스타트업 격주간",
        startup_f: "격주",
        case: "판례법 주간",
        case_f: "매주",
        brief: "주간 브리프",
        brief_f: "매주"
      },
      consent: "본인은 TAG Group으로부터 이러한 뉴스레터를 수신하고 해당 목적으로 본인의 세부 정보가 사용되는 것에 동의합니다. 언제든지 구독을 취소할 수 있습니다.",
      subscribe: "구독하다",
      subscribing: "구독 중...",
      note: "스팸이 없습니다. 언제든지 구독을 취소하세요."
    },
`;

const careersEn = `
    careers_page: {
      breadcrumb: { home: "Home", careers: "Careers" },
      hero: { title: "Do the work that shapes how businesses grow.", desc: "Join a multidisciplinary team that gives you Big-Four-grade work with boutique ownership — real client exposure, cross-border mandates and partners who mentor. Write to us at " },
      tabs: { why: "Why TAG", open: "Open Positions", life: "Life at TAG" },
      why: { 
        eyebrow: "Why TAG", title: "A place to do your best work", desc: "We pair the technical depth of large firms with the ownership, speed and visibility of a boutique.",
        cards: [
          { title: "Big-Four-grade work", desc: "Complex international tax, transfer pricing and transactions — the kind of mandates usually reserved for the largest firms." },
          { title: "Cross-border exposure", desc: "Work across India, the UAE, Singapore, Malaysia and Mauritius, and with overseas advisory firms as their delivery partner." },
          { title: "Mentorship that matters", desc: "Learn directly from partners with Big Four and MNC leadership backgrounds — not from a distance." },
          { title: "Multidisciplinary by design", desc: "Move across tax, finance, assurance, legal, HR and technology — build range, not just depth." },
          { title: "Real growth", desc: "Clear pathways, ownership early, and the room to build a practice with us." },
          { title: "Ideas over hierarchy", desc: "A problem-solving culture where the best idea wins and initiative is rewarded." }
        ]
      },
      open: {
        eyebrow: "Open positions", title: "Roles we're hiring for", desc: "Don't see an exact fit? We're always keen to meet strong people — write to us anyway.",
        apply: "Apply", send_cv: "Send us your CV",
        jobs: [
          { title: "Manager — Transfer Pricing", loc: "Gurugram / Remote", desc: "Lead multi-country TP documentation, benchmarking and economic analysis for global mandates." },
          { title: "Associate — International Tax", loc: "Gurugram", desc: "Support cross-border structuring, treaty analysis and withholding-tax advisory." },
          { title: "Executive — GST & Indirect Tax", loc: "Gurugram / New Delhi", desc: "GST compliance, reconciliations and departmental-audit support." },
          { title: "Manager — Finance & Accounting (GCC)", loc: "Gurugram", desc: "Run managed bookkeeping, close and MIS for international clients (US & UAE)." },
          { title: "HR Associate", loc: "Gurugram", desc: "Support recruitment, onboarding, L&D and HR operations across the group." }
        ]
      },
      life: {
        eyebrow: "Life at TAG", title: "People first, always", desc: "We're building a firm people are proud to belong to — where growth, well-being and camaraderie sit alongside great work.",
        cards: [
          { title: "Learn & grow", desc: "Structured learning, technical training and exposure to marquee cross-border work from day one." },
          { title: "Well-being", desc: "Flexibility, respect for your time, and a culture that looks out for its people." },
          { title: "Collaboration", desc: "Small, close-knit teams across verticals — no silos, ever." },
          { title: "Celebrate wins", desc: "We mark milestones together — client wins, exams cleared, and the moments in between." },
          { title: "Integrity", desc: "We do the right thing by our clients and each other. Always." },
          { title: "Global outlook", desc: "Work with international colleagues and clients, and think beyond borders." }
        ],
        cta_title: "Ready to build something with us?", cta_desc: "Tell us about yourself and where you'd like to grow."
      }
    },
`;

const careersKo = `
    careers_page: {
      breadcrumb: { home: "홈", careers: "채용" },
      hero: { title: "비즈니스 성장의 방향을 결정하는 일을 하세요.", desc: "부티크 오너십과 함께 Big-Four 수준의 업무를 제공하는 다학제 팀에 합류하세요 — 실제 고객 노출, 국경 간 권한 및 멘토링을 제공하는 파트너. 문의: " },
      tabs: { why: "왜 TAG인가", open: "채용 포지션", life: "TAG의 삶" },
      why: { 
        eyebrow: "왜 TAG인가", title: "최고의 작업을 수행할 수 있는 곳", desc: "우리는 대형 회사의 기술적 깊이와 부티크의 오너십, 속도 및 가시성을 결합합니다.",
        cards: [
          { title: "Big-Four 수준의 작업", desc: "복잡한 국제 세금, 이전 가격 책정 및 거래 — 일반적으로 가장 큰 회사에 예약된 종류의 명령입니다." },
          { title: "국경 간 노출", desc: "인도, UAE, 싱가포르, 말레이시아 및 모리셔스 전역에서 일하고 해외 자문 회사를 제공 파트너로 협력합니다." },
          { title: "중요한 멘토링", desc: "Big Four 및 MNC 리더십 배경을 가진 파트너로부터 멀리서가 아니라 직접 배웁니다." },
          { title: "디자인에 의한 다학제", desc: "세무, 재무, 보증, 법률, HR 및 기술 전반에 걸쳐 이동하십시오 — 깊이뿐만 아니라 범위를 구축하십시오." },
          { title: "진정한 성장", desc: "명확한 경로, 조기 오너십 및 당사와 함께 관행을 구축할 여지." },
          { title: "계층 구조보다 아이디어 우선", desc: "최고의 아이디어가 이기고 주도권이 보상받는 문제 해결 문화." }
        ]
      },
      open: {
        eyebrow: "채용 포지션", title: "채용 중인 역할", desc: "정확히 맞는 역할이 없나요? 우리는 항상 훌륭한 사람들을 만나기를 기대합니다 — 그래도 우리에게 편지를 보내주세요.",
        apply: "지원", send_cv: "이력서 보내기",
        jobs: [
          { title: "관리자 — 이전 가격", loc: "구르가온 / 원격", desc: "글로벌 명령에 대한 다중 국가 TP 문서화, 벤치마킹 및 경제 분석을 주도합니다." },
          { title: "어소시에이트 — 국제 세금", loc: "구르가온", desc: "국경 간 구조화, 조약 분석 및 원천 징수 세금 자문을 지원합니다." },
          { title: "이그제큐티브 — GST 및 간접세", loc: "구르가온 / 뉴델리", desc: "GST 규정 준수, 대사 및 부서 감사 지원." },
          { title: "관리자 — 재무 및 회계 (GCC)", loc: "구르가온", desc: "국제 고객(미국 및 아랍에미리트)을 위한 관리 장부 작성, 마감 및 MIS 실행." },
          { title: "HR 어소시에이트", loc: "구르가온", desc: "그룹 전체의 채용, 온보딩, L&D 및 HR 운영 지원." }
        ]
      },
      life: {
        eyebrow: "TAG의 삶", title: "사람 우선, 항상", desc: "우리는 훌륭한 사람들과 함께 성장, 웰빙 및 동료애가 함께하는 자랑스러운 회사를 구축하고 있습니다.",
        cards: [
          { title: "배우고 성장하다", desc: "첫날부터 체계적인 학습, 기술 교육 및 주요 국경 간 작업에 대한 노출." },
          { title: "웰빙", desc: "유연성, 시간을 존중하며 직원을 배려하는 문화." },
          { title: "협업", desc: "수직적이지 않은 소규모, 긴밀한 팀 — 사일로(격리)가 전혀 없습니다." },
          { title: "성공 축하", desc: "우리는 마일스톤을 함께 기념합니다 — 고객 성공, 시험 합격 및 그 사이의 순간들." },
          { title: "무결성", desc: "우리는 고객과 서로에게 올바른 일을 합니다. 항상." },
          { title: "글로벌 전망", desc: "국제적인 동료 및 고객과 함께 일하고 국경을 넘어 생각합니다." }
        ],
        cta_title: "저희와 함께 무언가를 만들 준비가 되셨나요?", cta_desc: "당신 자신과 성장하고 싶은 곳에 대해 이야기해주세요."
      }
    },
`;

let localesFile = fs.readFileSync('src/data/locales.ts', 'utf8');

// Insert english
let enIndex = localesFile.indexOf('contact_page: {');
localesFile = localesFile.slice(0, enIndex) + newsletterEn + careersEn + localesFile.slice(enIndex);

// Insert korean
let koIndex = localesFile.lastIndexOf('contact_page: {');
localesFile = localesFile.slice(0, koIndex) + newsletterKo + careersKo + localesFile.slice(koIndex);

fs.writeFileSync('src/data/locales.ts', localesFile);
console.log("Translated Careers and Newsletter and updated locales.ts");
