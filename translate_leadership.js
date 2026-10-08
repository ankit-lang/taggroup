const fs = require('fs');

const leadershipEn = `
    leadership_page: {
      breadcrumb: { home: "Home", leadership: "Leadership" },
      hero: { eyebrow: "Leadership & partners", title: "Integrated professional expertise across every capability.", desc: "Core partners are supported by specialist associates and an international network for mandates that cross functional or jurisdictional boundaries. Select any leader to view their full profile and experience." },
      sections: {
        partners: "Partners & practice leads",
        international: "International desks"
      },
      people: {
        gaurav: {
          role: "Managing Partner",
          name: "Gaurav Sharma",
          title: "Direct & International Tax · Structuring & CFO Advisory",
          desc: "Gaurav is the Managing Partner of TAG Group and the driving force behind its tax, cross-border and CFO practice. Over 14+ years he has moved from Big Four advisory into senior in-house leadership — heading tax for the APAC region and finance for South-East Asia at European infrastructure and energy multinationals — before founding TAG Group's integrated advisory platform.",
          tags: ["International tax", "Transfer pricing", "Cross-border", "Fractional CFO", "M&A", "Board advisory"]
        },
        vishnu: { role: "Partner", name: "K. Vishnu Sharma", title: "Audit, Assurance & Finance Transformation" },
        sumit: { role: "Partner", name: "Sumit Goyal", title: "Indirect Tax" },
        pradip: { role: "Associate Partner", name: "MR Pradip", title: "Legal, Regulatory & Dispute Resolution" },
        ishita: { role: "Partner", name: "Ishita Sharma", title: "Human Resources & Organisation Capability" },
        naresh: { role: "Partner", name: "Naresh Kumar Goel", title: "Audit & Assurance" },
        jai: { role: "Partner", name: "Jai Prakash", title: "Indirect Tax" },
        karuna: { role: "Partner", name: "Karuna Sharma", title: "Legal, Regulatory & Foreign Exchange Regulations" },
        manuj: { role: "Associate Partner", name: "Manuj Singhal", title: "Valuation" },
        sushil: { role: "Associate Partner", name: "Sushil Sharma", title: "IT Infrastructure, Systems & Security" },
        amit: { role: "Strategic Associate", name: "Amit Sood", title: "Real Estate & Workforce Solutions" },
        vishal: { role: "Partner — UAE Desk", name: "Vishal Tayal", title: "UAE Desk · India–UAE Tax, VAT & Structuring" },
        awen: { role: "International Desk — Singapore", name: "Awen Lee", title: "Corporate Services · Accounting & Compliance" },
        hasina: { role: "International Desk — Mauritius", name: "Hasina Bahemia", title: "Corporate Administration & Governance" },
        us: { role: "International Desk — United States", name: "Coming soon", title: "Cross-border tax, entity and finance support for US–India groups" }
      },
      actions: {
        view_full: "View full profile",
        download: "Download profile",
        view_profile: "View profile",
        about_us: "About the US desk"
      },
      cta: {
        title: "Speak with the right partner for your issue.",
        desc: "Tell us what you're working on and we'll connect you with the relevant capability.",
        btn: "Contact page"
      }
    },
`;

const leadershipKo = `
    leadership_page: {
      breadcrumb: { home: "홈", leadership: "리더십" },
      hero: { eyebrow: "리더십 및 파트너", title: "모든 역량에 걸친 통합 전문 지식.", desc: "핵심 파트너는 기능 또는 관할 경계를 넘는 명령을 위해 전문 어소시에이트 및 국제 네트워크의 지원을 받습니다. 전체 프로필과 경험을 보려면 리더를 선택하세요." },
      sections: {
        partners: "파트너 및 실무 책임자",
        international: "국제 데스크"
      },
      people: {
        gaurav: {
          role: "대표 파트너",
          name: "가우라브 샤르마",
          title: "직접 및 국제 세금 · 구조화 및 CFO 자문",
          desc: "Gaurav는 TAG Group의 관리 파트너이자 세금, 국경 간 및 CFO 관행의 원동력입니다. 14년 이상 동안 그는 Big Four 자문에서 고위 사내 리더십으로 이동하여 TAG Group의 통합 자문 플랫폼을 설립하기 전에 유럽 인프라 및 에너지 다국적 기업에서 APAC 지역 세금 및 동남아시아 재무를 이끌었습니다.",
          tags: ["국제 세금", "이전 가격", "국경 간", "분할 CFO", "M&A", "이사회 자문"]
        },
        vishnu: { role: "파트너", name: "K. 비슈누 샤르마", title: "감사, 보증 및 재무 혁신" },
        sumit: { role: "파트너", name: "수밋 고얄", title: "간접세" },
        pradip: { role: "어소시에이트 파트너", name: "MR 프라딥", title: "법률, 규제 및 분쟁 해결" },
        ishita: { role: "파트너", name: "이시타 샤르마", title: "인적 자원 및 조직 역량" },
        naresh: { role: "파트너", name: "나레쉬 쿠마르 고엘", title: "감사 및 보증" },
        jai: { role: "파트너", name: "자이 프라카쉬", title: "간접세" },
        karuna: { role: "파트너", name: "카루나 샤르마", title: "법률, 규제 및 외환 규제" },
        manuj: { role: "어소시에이트 파트너", name: "마누즈 싱할", title: "가치 평가" },
        sushil: { role: "어소시에이트 파트너", name: "수실 샤르마", title: "IT 인프라, 시스템 및 보안" },
        amit: { role: "전략적 어소시에이트", name: "아밋 수드", title: "부동산 및 인력 솔루션" },
        vishal: { role: "파트너 — UAE 데스크", name: "비샬 타얄", title: "UAE 데스크 · 인도-UAE 세금, VAT 및 구조화" },
        awen: { role: "국제 데스크 — 싱가포르", name: "아웬 리", title: "기업 서비스 · 회계 및 규정 준수" },
        hasina: { role: "국제 데스크 — 모리셔스", name: "하시나 바헤미아", title: "기업 관리 및 거버넌스" },
        us: { role: "국제 데스크 — 미국", name: "출시 예정", title: "미국-인도 그룹을 위한 국경 간 세금, 법인 및 재무 지원" }
      },
      actions: {
        view_full: "전체 프로필 보기",
        download: "프로필 다운로드",
        view_profile: "프로필 보기",
        about_us: "미국 데스크 소개"
      },
      cta: {
        title: "문제에 적합한 파트너와 상의하십시오.",
        desc: "작업 중인 내용을 알려주시면 관련 기능과 연결해 드립니다.",
        btn: "연락처 페이지"
      }
    },
`;


let localesFile = fs.readFileSync('src/data/locales.ts', 'utf8');

// Insert english
let enIndex = localesFile.indexOf('contact_page: {');
localesFile = localesFile.slice(0, enIndex) + leadershipEn + localesFile.slice(enIndex);

// Insert korean
let koIndex = localesFile.lastIndexOf('contact_page: {');
localesFile = localesFile.slice(0, koIndex) + leadershipKo + localesFile.slice(koIndex);

fs.writeFileSync('src/data/locales.ts', localesFile);
console.log("Translated Leadership and updated locales.ts");
