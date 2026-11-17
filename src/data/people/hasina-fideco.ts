/**
 * Hasina Bahemia profile — Fideco Global content (English + Korean).
 * Source: fidecoglobal.com (services, company profile and team pages).
 */
type Group = { title: string; items: string[] }
type Content = {
  externalProfile: string
  panel: { eyebrow: string; name: string; paragraphs: string[] }
  expertiseIntro: string
  groups: Group[]
  experience: { role: string; desc: string }
  credentials: string[]
  sectors: string[]
  marketsTitle: string
  markets: string[]
}

export const HASINA_FIDECO: Record<'en' | 'ko', Content> = {
  en: {
    externalProfile: 'External profile',
    panel: {
      eyebrow: 'Management company',
      name: 'FIDECO GLOBAL',
      paragraphs: [
        'Established in 1993, Fideco Global is an independent, FSC-licensed management company in Mauritius, bringing over three decades of experience in corporate and fiduciary services. Fideco provides corporate administration, trust and fiduciary services, company secretarial support and regulatory compliance solutions.',
        "Combining longstanding local expertise with an international outlook, Fideco offers TAG Advisors' clients a trusted and experienced Mauritian partner, ensuring their structures are professionally established, administered and maintained.",
      ],
    },
    expertiseIntro: 'Services delivered through Fideco Global, Mauritius.',
    groups: [
      {
        title: 'Structure',
        items: [
          'Company formation & structuring: choice of vehicle, incorporation and licensing',
          'Management & administration: corporate secretarial, governance, filings and FSC licence management',
          'Trusteeship & fiduciary services: trusts, foundations and ongoing trustee administration',
        ],
      },
      {
        title: 'Finance & compliance',
        items: [
          'Financial accounting: bookkeeping, financial statements and audit coordination',
          'Tax advisory: tax planning, treaty guidance and substance advisory',
          'Mauritius Revenue Authority (MRA) filings and liaison',
        ],
      },
      {
        title: 'Investment & mobility',
        items: [
          'Freeport & international trade: Freeport-licensed entities and EDB applications',
          'Real estate & property investment: PDS, IRS, RES, Smart City and G+2 schemes',
          'Expatriate & relocation: occupation, residence and dependent permits',
        ],
      },
      {
        title: 'Operational support',
        items: ['Outsourced accounting and payroll', 'Outsourced compliance and secretarial functions', 'Outsourced back-office functions'],
      },
    ],
    experience: {
      role: 'Chief Operations Officer, Fideco Global Business Services Ltd (Mauritius)',
      desc: "Oversees the firm's day-to-day operations, client onboarding and service delivery, with a focus on client relationships, operations and strategic development. Part of Fideco's next generation of leadership, working closely with the Chairman on the firm's strategic direction.",
    },
    credentials: [
      'Chief Operations Officer, Fideco Global Business Services Ltd',
      'Fideco Global: FSC-licensed management company, Mauritius',
      'Fideco Global: independent and Mauritian-owned since 1993',
      'Fideco Global: based in Port Louis, Mauritius',
    ],
    sectors: [
      'International investors',
      'Businesses',
      'Families & wealth structures',
      'Freeport & international trade',
      'Real estate investment',
      'Expatriates & relocation',
    ],
    marketsTitle: 'Markets connected through Mauritius',
    markets: ['Africa', 'Asia', 'Europe', 'Middle East'],
  },

  ko: {
    externalProfile: '외부 프로필',
    panel: {
      eyebrow: '관리 회사',
      name: 'FIDECO GLOBAL',
      paragraphs: [
        '1993년에 설립된 Fideco Global은 모리셔스 금융서비스위원회(FSC)의 인가를 받은 독립 관리 회사로, 30년 이상 기업 및 수탁 서비스 분야의 경험을 보유하고 있습니다. Fideco는 기업 관리, 신탁 및 수탁 서비스, 회사 비서 업무 지원, 규제 준수 솔루션을 제공합니다.',
        'Fideco는 오랜 현지 전문성과 국제적 시각을 결합하여 TAG Advisors 고객에게 신뢰할 수 있고 경험이 풍부한 모리셔스 파트너로서, 고객의 법인 구조가 전문적으로 설립·관리·유지되도록 지원합니다.',
      ],
    },
    expertiseIntro: '모리셔스 Fideco Global을 통해 제공되는 서비스입니다.',
    groups: [
      {
        title: '법인 구조',
        items: [
          '회사 설립 및 구조 설계: 적합한 법인 형태 선정, 설립 및 인허가',
          '관리 및 운영: 회사 비서 업무, 거버넌스, 신고 및 FSC 라이선스 관리',
          '신탁 및 수탁 서비스: 신탁·재단 설립 및 지속적인 수탁 관리',
        ],
      },
      {
        title: '재무 및 컴플라이언스',
        items: [
          '재무 회계: 장부 기장, 재무제표 작성 및 감사 대응',
          '세무 자문: 세무 계획, 조세조약 자문 및 경제적 실체(Substance) 자문',
          '모리셔스 국세청(MRA) 신고 및 대응',
        ],
      },
      {
        title: '투자 및 이주',
        items: [
          '자유무역항(Freeport) 및 국제 무역: Freeport 인가 법인 및 EDB 신청 지원',
          '부동산 투자: PDS, IRS, RES, Smart City, G+2 제도',
          '해외 인력 및 이주: 취업 허가, 거주 허가 및 가족 동반 허가',
        ],
      },
      {
        title: '운영 지원',
        items: ['회계 및 급여 아웃소싱', '컴플라이언스 및 회사 비서 업무 아웃소싱', '백오피스 업무 아웃소싱'],
      },
    ],
    experience: {
      role: '최고운영책임자(COO), Fideco Global Business Services Ltd (모리셔스)',
      desc: '회사의 일상 운영, 고객 온보딩 및 서비스 제공을 총괄하며, 고객 관계, 운영 및 전략 개발에 중점을 두고 있습니다. Fideco의 차세대 리더십의 일원으로서 회장과 긴밀히 협력하여 회사의 전략적 방향을 수립합니다.',
    },
    credentials: [
      '최고운영책임자(COO), Fideco Global Business Services Ltd',
      'Fideco Global: 모리셔스 FSC 인가 관리 회사',
      'Fideco Global: 1993년부터 모리셔스 자본의 독립 회사',
      'Fideco Global: 모리셔스 포트루이스 소재',
    ],
    sectors: ['해외 투자자', '기업', '가족 및 자산 관리 구조', '자유무역항 및 국제 무역', '부동산 투자', '해외 인력 및 이주'],
    marketsTitle: '모리셔스를 통해 연결되는 시장',
    markets: ['아프리카', '아시아', '유럽', '중동'],
  },
}
