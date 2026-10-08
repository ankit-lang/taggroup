const fs = require('fs');

const pradipEn = `
    mr_pradip: {
      breadcrumb: { home: "Home", leadership: "Leadership", name: "MR Pradip" },
      hero: { role: "Associate Partner", name: "MR Pradip", desc: "Legal, Regulatory & Dispute Resolution · India" },
      tags: ["Commercial litigation", "Tax disputes", "Insolvency", "FEMA / AML"],
      nav: {
        profile: "Profile", overview: "Overview", expertise: "Areas of expertise", experience: "Experience", credentials: "Credentials",
        get_in_touch: "Get in touch", email: "Email MR Pradip", download: "Download profile (PDF)"
      },
      overview: {
        title: "Overview",
        desc: "MR Pradip is an Associate Partner at TAG Group, dual-qualified in law and accountancy. He advises and appears in corporate and commercial disputes, tax litigation, insolvency matters, transaction structuring and white-collar regulatory proceedings. Training under a Senior Advocate of the Supreme Court together with a financial background allows him to address matters that combine legal strategy with commercial and tax complexity.",
        stats: [
          { val: "CA + LL.B.", lbl: "Dual professional qualification" },
          { val: "SC / HC", lbl: "Court exposure" },
          { val: "Tax + Legal", lbl: "Integrated advisory" }
        ]
      },
      expertise: {
        title: "Areas of expertise",
        areas: [
          { title: "Disputes & litigation", items: ["Corporate and commercial litigation", "Tax disputes, structuring and transaction advice", "Appears before tribunals, High Courts and the Supreme Court of India"] },
          { title: "Insolvency & restructuring", items: ["Insolvency and restructuring law", "Creditor and debtor-side strategy", "Transaction and enforcement support"] },
          { title: "Regulatory & white-collar", items: ["FEMA, anti-money-laundering and white-collar matters", "Regulatory representation and advisory", "Legal pleadings combined with accounting and tax analysis"] }
        ]
      },
      experience: {
        title: "Experience",
        timeline: [
          { period: "Current", role: "Associate Partner, TAG Group — Legal & Regulatory", desc: "Leads legal, regulatory and dispute-resolution mandates for multinational and technology-led businesses." },
          { period: "Practice", role: "Litigation counsel", desc: "Trained under a Senior Advocate of the Supreme Court; advises and appears across commercial, tax and insolvency matters." }
        ]
      },
      credentials: {
        title: "Credentials & qualifications",
        list: ["LL.B., Campus Law Centre, University of Delhi", "Chartered Accountant (ICAI)", "B.Com. (Hons.)", "Litigation counsel"],
        sector_title: "Sector experience",
        sectors: ["Technology", "Manufacturing", "Financial services", "Multinational groups"]
      },
      cta: {
        title: "Work with MR Pradip",
        desc: "Reach out directly, or send a general enquiry and we'll connect you with the right team.",
        btn1: "pradip@taggroup.in", btn2: "Contact TAG Group"
      }
    },
`;

const pradipKo = `
    mr_pradip: {
      breadcrumb: { home: "홈", leadership: "리더십", name: "MR 프라딥" },
      hero: { role: "어소시에이트 파트너", name: "MR 프라딥", desc: "법률, 규제 및 분쟁 해결 · 인도" },
      tags: ["상업 소송", "세금 분쟁", "파산", "FEMA / AML"],
      nav: {
        profile: "프로필", overview: "개요", expertise: "전문 분야", experience: "경험", credentials: "자격 증명",
        get_in_touch: "연락하기", email: "MR 프라딥에게 이메일 보내기", download: "프로필 다운로드 (PDF)"
      },
      overview: {
        title: "개요",
        desc: "MR Pradip은 TAG Group의 부파트너(Associate Partner)이며 법률 및 회계 분야의 이중 자격을 갖추고 있습니다. 그는 기업 및 상사 분쟁, 조세 소송, 파산 사건, 거래 구조화 및 화이트 칼라 규제 절차에서 조언하고 출석합니다. 대법원의 수석 변호사 산하에서의 교육과 재무 배경을 통해 법률 전략과 상업 및 세금 복잡성을 결합한 문제를 해결할 수 있습니다.",
        stats: [
          { val: "CA + LL.B.", lbl: "이중 전문 자격" },
          { val: "SC / HC", lbl: "법원 노출" },
          { val: "세금 + 법률", lbl: "통합 자문" }
        ]
      },
      expertise: {
        title: "전문 분야",
        areas: [
          { title: "분쟁 및 소송", items: ["기업 및 상업 소송", "세금 분쟁, 구조화 및 거래 자문", "법원, 고등 법원 및 인도 대법원에 출석"] },
          { title: "파산 및 구조 조정", items: ["파산 및 구조 조정법", "채권자 및 채무자 측 전략", "거래 및 집행 지원"] },
          { title: "규제 및 화이트 칼라", items: ["FEMA, 자금 세탁 방지 및 화이트 칼라 문제", "규제 대리 및 자문", "회계 및 세무 분석이 결합된 법적 변론"] }
        ]
      },
      experience: {
        title: "경험",
        timeline: [
          { period: "현재", role: "어소시에이트 파트너, TAG Group — 법률 및 규제", desc: "다국적 및 기술 주도 기업의 법률, 규제 및 분쟁 해결을 주도합니다." },
          { period: "실습", role: "소송 변호사", desc: "대법원 선임 변호사 밑에서 교육을 받았으며 상업, 세무 및 파산 사건 전반에 걸쳐 자문하고 출석합니다." }
        ]
      },
      credentials: {
        title: "자격 증명 및 자격",
        list: ["델리 대학교 캠퍼스 법률 센터 LL.B.", "공인 회계사 (ICAI)", "상업 학사 (우등)", "소송 변호사"],
        sector_title: "분야 경험",
        sectors: ["기술", "제조업", "금융 서비스", "다국적 그룹"]
      },
      cta: {
        title: "MR Pradip과 함께 일하기",
        desc: "직접 연락하거나 일반 문의 사항을 보내주시면 올바른 팀과 연결해 드립니다.",
        btn1: "pradip@taggroup.in", btn2: "TAG Group에 문의하기"
      }
    },
`;

let localesFile = fs.readFileSync('src/data/locales.ts', 'utf8');

// Insert english
let enIndex = localesFile.indexOf('contact_page: {');
localesFile = localesFile.slice(0, enIndex) + pradipEn + localesFile.slice(enIndex);

// Insert korean
let koIndex = localesFile.lastIndexOf('contact_page: {');
localesFile = localesFile.slice(0, koIndex) + pradipKo + localesFile.slice(koIndex);

fs.writeFileSync('src/data/locales.ts', localesFile);
console.log("Translated MR Pradip and updated locales.ts");
