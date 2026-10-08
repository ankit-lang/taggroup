const fs = require('fs');

let localesFile = fs.readFileSync('src/data/locales.ts', 'utf8');

const koGauravKeys = `
      people: {
        gaurav: {
          breadcrumb: { home: "홈", leadership: "리더십" },
          title: "대표 파트너",
          name: "가우라브 샤르마",
          subtitle: "직접세 및 국제 조세 · 구조화 및 CFO 자문 · 인도 구루그람",
          chips: { c1: "국제 조세", c2: "이전 가격", c3: "국경 간", c4: "가상 CFO", c5: "M&A", c6: "이사회 자문" },
          nav: { profile: "프로필", overview: "개요", expertise: "전문 분야", experience: "경험", credentials: "자격 요건", get_in_touch: "연락하기", email: "가우라브에게 이메일 보내기", download: "프로필 다운로드 (PDF)" },
          overview: { title: "개요", desc: "가우라브는 TAG Group의 대표 파트너이자 세무, 국경 간 및 CFO 업무의 원동력입니다. 14년 이상의 기간 동안 그는 Big Four 자문 회사에서 고위 사내 리더십으로 이동하여 유럽 인프라 및 에너지 다국적 기업에서 APAC 지역 세무 및 동남아시아 재무를 이끌었으며 이후 TAG Group의 통합 자문 플랫폼을 설립했습니다. 그는 국경 간 투자, M&A, 재무 혁신 및 세금 논쟁에 대해 창업자, CFO 및 이사회의 신뢰할 수 있는 고문이며 독립 이사로 활동하고 있습니다. 그는 약 1억 200만 달러의 국부펀드 자본을 지원했고, 약 1,070만 달러의 세금 환급액을 회수했으며, 20명 이상의 팀을 이끌면서 30개 기업 포트폴리오를 관리했습니다.", s1: "지원되는 국부펀드 자본", s2: "회수된 세금 환급액", s3: "관리되는 기업 포트폴리오", s4: "교육받은 공인회계사" },
          expertise: { title: "전문 분야", h1: "국제 조세 및 이전 가격", h1_l1: "국제 조세, 이전 가격 및 조약 해석", h1_l2: "국경 간 투자, 자금 조달 및 자금 송환 구조", h1_l3: "고정 사업장 및 POEM 자문", h1_l4: "원천 징수 및 해외 송금 지원", h2: "재무 리더십 및 CFO", h2_l1: "가상 CFO, 컨트롤러십 및 재무 혁신", h2_l2: "재무 감독, MIS, 예산 책정 및 현금 흐름 관리", h2_l3: "다중 엔티티 그룹 전체의 거버넌스 프레임워크", h3: "거래 및 구조화", h3_l1: "M&A 세무, 실사 및 거래 후 통합", h3_l2: "거래 구조화, 구조 조정 및 자금 송환", h3_l3: "아시아 전역의 고가 입찰을 위한 전략적 가격 책정 및 재무 모델", h4: "세금 논쟁 및 회수", h4_l1: "세무 소송 및 분쟁 관리", h4_l2: "환급 거버넌스 및 회수", h4_l3: "기소, 복리 및 탈세 방지 문제" },
          experience: { title: "경험", p1: "2025 – 현재", r1: "대표 파트너, TAG Group", d1: "TAG Group의 세무, 국경 간 및 CFO 실무를 설립하고 이끌며 인도 및 다국적 고객을 위한 통합 파트너 주도 플랫폼을 구축하고 이사회에 구조화, 거래 및 거버넌스에 대해 조언합니다.", p2: "지역 리더십", r2: "재무 컨트롤러, 동남아시아 — 유럽 인프라 & 에너지 다국적 기업", d2: "해당 지역에 대한 완전한 재무 소유권을 보유하고 인도 및 남아시아 전역의 보고, 감사, MIS 및 상업적 결정을 주도하고 전략에 대해 지역 리더십과 파트너 관계를 맺습니다.", p3: "지역 리더십", r3: "세무 부서 책임자, APAC — 유럽 다국적 기업", d3: "인도, 싱가포르, 베트남, 인도네시아, 필리핀, 한국 등 6개국의 세무 전략과 리스크를 소유하여 그룹의 국경 간 및 조약 포지션을 형성했습니다.", p4: "인도 & 남아시아", r4: "세무 책임자 — 인프라 & 에너지 그룹", d4: "20개 이상의 기업 포트폴리오에 대한 세무 거버넌스를 지시하여 약 1,070만 달러의 환급액을 회수하고 조세 심판원에서 약 7,500만 달러의 분쟁을 방어했습니다.", p5: "초기 경력", r5: "Big Four 회사", d5: "선도적인 글로벌 고객을 위한 이전 가격 및 국제 조세에 대한 기술적 기반(문서화, 경제 분석 및 논쟁)을 구축했습니다." },
          cred: { title: "자격 요건 및 자격", c1: "공인회계사 (ICAI)", c2: "IIM Indore (졸업생)", c3: "독립 이사", c4: "IFRS 디플로마", c5: "CPA (호주)", c6: "MBA (NMIMS)", c7: "14년 이상의 경험", sector: "산업 경험", s1: "인프라", s2: "재생 에너지", s3: "엔지니어링 & EPC", s4: "기술 & 서비스", s5: "국방", s6: "스타트업 & 전자상거래" },
          cta: { title: "가우라브와 함께 일하기", desc: "직접 연락하거나 일반 문의 사항을 보내주시면 적합한 팀을 연결해 드립니다.", btn: "TAG Group 연락하기" }
        }
      },
`;

let koServicesIndex = localesFile.lastIndexOf('    services: {');
if (koServicesIndex === -1) koServicesIndex = localesFile.lastIndexOf('\\nservices: {');
if (koServicesIndex === -1) koServicesIndex = localesFile.lastIndexOf('\\n    services: {');

localesFile = localesFile.slice(0, koServicesIndex) + koGauravKeys + '\\n' + localesFile.slice(koServicesIndex);

fs.writeFileSync('src/data/locales.ts', localesFile);
console.log("Injected Korean translations for gaurav.");
