const fs = require('fs');

let localesContent = fs.readFileSync('src/data/locales.ts', 'utf8');

const enInsights = `
    insights_articles: {
      sidebar: {
        download: { title: "Download", note: "Read this article offline or share it.", btn: "Download PDF" },
        author: "Author",
        more: "More insights"
      },
      excl_note: "This is a sample article. TAG Group will publish full editions and analyses here; the layout supports read-online and PDF download.",
      cta: {
        title: "Want this kind of analysis regularly?",
        desc: "Subscribe to TAG Group Insights, or talk to the author about your situation.",
        btn1: "Subscribe"
      },
      tags: {
        tp: "Transfer Pricing",
        india: "India Entry",
        gcc: "Global Capability Centre",
        uae: "International Tax"
      },
      tp: {
        title: "Building a defensible multi-country transfer-pricing file",
        meta: "May 2026 · by Gaurav Sharma, Managing Partner",
        body: [
          "Transfer pricing has quietly become a multi-country exercise. A position taken in one jurisdiction is increasingly read alongside the group's Master File, its Local Files elsewhere and its Country-by-Country data — which means inconsistency, not aggression, is the most common cause of adjustment.",
          "A defensible file starts with a single, well-evidenced functional analysis. When the FAR is done once, centrally, and then adapted to local requirements, the story the group tells is coherent everywhere. When each jurisdiction builds its own, small differences compound into contradictions.",
          "Benchmarking is the second pillar. Method selection and comparable sets should be documented with the reasoning visible, so a reviewer can follow why a margin sits where it does. Where local databases differ, the approach — not just the output — should reconcile.",
          "Finally, governance. Intercompany agreements, pricing policies and annual updates keep the file alive. A file that is refreshed on a defined calendar, with a clear owner, is worth more than a perfect one prepared once and left to age.",
          "At TAG Group we prepare this centrally from India — one FAR, consistent benchmarking, and jurisdiction-specific adaptation — for groups directly and as the back-end partner for overseas advisers."
        ]
      },
      gcc: {
        title: "Setting up a Global Capability Centre from India",
        meta: "February 2026 · by K. Vishnu Sharma, Partner",
        body: [
          "The Global Capability Centre model has moved well beyond IT. Finance, accounting and transfer-pricing delivery are increasingly run from India — not to cut corners, but to add reliable, review-ready capacity at a sensible cost.",
          "The question is rarely whether to do it, but how to do it without losing control. The answer is a defined delivery framework: common templates, clear SLAs, review milestones and secure, confidential information handling.",
          "For professional firms, a white-label back-end partner extends the service line without adding headcount. For corporates, a captive-style extension of the in-house team adds surge capacity and consistency.",
          "Quality is a function of partner-led review, not just process. A senior eye on the output is what turns offshore delivery into a genuine capability.",
          "TAG Group runs exactly this as a Global Capability Centre — transfer pricing worldwide, and finance & accounting for clients in the US and UAE — delivered from India with partner-led review."
        ]
      },
      india: {
        title: "India entry in 2026: choosing the right structure",
        meta: "March 2026 · by Gaurav Sharma, Managing Partner",
        body: [
          "Most India-entry mistakes are made in the first month — in the choice of vehicle. The right structure depends on what the business will actually do in India, how profits will move, and how quickly the group needs to be operational.",
          "A wholly-owned subsidiary offers the most operational freedom and the cleanest path to scale, but carries full compliance. An LLP can be efficient for services-led models. Branch, liaison and project offices suit narrower, defined mandates — and each carries distinct tax and FEMA consequences.",
          "Repatriation should be modelled at the outset, not discovered later. How capital comes in, and how returns go out, shapes the structure as much as the activity does.",
          "Speed matters too. Incorporation, PAN/TAN/GST registrations and banking can be sequenced to get a working entity live quickly, with finance, payroll and compliance layered on top.",
          "TAG Group's India Entry practice models these options up front and then runs the setup end to end — one coordinating team across strategy, incorporation, tax, finance, HR, IT and premises."
        ]
      },
      uae: {
        title: "UAE Corporate Tax: what Indian groups must plan for",
        meta: "April 2026 · by Vishal Tayal, Partner — UAE Desk",
        body: [
          "The UAE's Corporate Tax regime has changed the calculus for Indian groups using the UAE as a hub. The headline rate is modest, but the detail — qualifying free-zone income, substance requirements and the treatment of intra-group flows — decides the effective outcome.",
          "The first question is free zone versus mainland. Qualifying free-zone persons can access a 0% rate on qualifying income, but the conditions around adequate substance and non-qualifying revenue thresholds must be met and evidenced, not assumed.",
          "The second is the India side. Dividend, interest and service flows between India and the UAE interact with withholding, treaty positions and India's own anti-avoidance rules. A structure that is efficient in isolation can be inefficient — or exposed — once both sides are read together.",
          "Substance is now the connective tissue: people, premises and decision-making in the right place. Documentation of that substance is as important as the structure itself.",
          "TAG Group's UAE Desk, led by Vishal Tayal through Taxepolis International FZCO, plans these positions on both sides of the corridor — VAT, Corporate Tax, India GST and structuring — as one coordinated exercise."
        ]
      }
    },`;

const koInsights = `
    insights_articles: {
      sidebar: {
        download: { title: "다운로드", note: "이 기사를 오프라인에서 읽거나 공유하십시오.", btn: "PDF 다운로드" },
        author: "저자",
        more: "더 많은 인사이트"
      },
      excl_note: "이것은 샘플 기사입니다. TAG Group은 여기에 전체 판과 분석을 게시합니다. 레이아웃은 온라인 읽기 및 PDF 다운로드를 지원합니다.",
      cta: {
        title: "이러한 분석을 정기적으로 원하십니까?",
        desc: "TAG Group Insights를 구독하거나 저자와 귀하의 상황에 대해 이야기하십시오.",
        btn1: "구독하기"
      },
      tags: {
        tp: "이전 가격",
        india: "인도 진출",
        gcc: "글로벌 역량 센터",
        uae: "국제 세무"
      },
      tp: {
        title: "방어 가능한 다국가 이전 가격 파일 구축",
        meta: "2026년 5월 · 가우라브 샤르마, 대표 파트너",
        body: [
          "이전 가격은 조용히 다국가 활동이 되었습니다. 한 관할 구역에서 취한 입장은 그룹의 마스터 파일, 다른 곳의 로컬 파일 및 국가별 데이터와 함께 읽히는 경우가 점점 더 많아지고 있습니다. 즉, 공격성이 아니라 불일치가 조정의 가장 일반적인 원인입니다.",
          "방어 가능한 파일은 잘 증명된 단일 기능 분석에서 시작됩니다. FAR이 중앙에서 한 번 수행된 다음 지역 요구 사항에 맞게 조정될 때 그룹이 전달하는 이야기는 어디에서나 일관됩니다. 각 관할 구역이 자체 파일을 작성하면 작은 차이가 복합되어 모순이 발생합니다.",
          "벤치마킹은 두 번째 기둥입니다. 방법 선택 및 비교 가능한 집합은 검토자가 마진이 해당 위치에 있는 이유를 따를 수 있도록 이유를 명확하게 문서화해야 합니다. 로컬 데이터베이스가 다른 경우 출력뿐만 아니라 접근 방식도 일치해야 합니다.",
          "마지막으로 거버넌스입니다. 회사 간 계약, 가격 책정 정책 및 연간 업데이트는 파일을 유지합니다. 명확한 소유자와 함께 정의된 달력에서 새로 고쳐지는 파일은 한 번 완벽하게 준비되고 방치되는 파일보다 가치가 있습니다.",
          "TAG Group은 인도에서 중앙 집중식으로 이를 준비합니다. 그룹을 위해 직접 그리고 해외 자문가의 백엔드 파트너로서 하나의 FAR, 일관된 벤치마킹 및 관할 구역별 조정을 제공합니다."
        ]
      },
      gcc: {
        title: "인도에서 글로벌 역량 센터 설립",
        meta: "2026년 2월 · K. 비슈누 샤르마, 파트너",
        body: [
          "글로벌 역량 센터 모델은 IT를 훨씬 넘어섰습니다. 재무, 회계 및 이전 가격 전달은 점점 더 인도에서 실행되고 있습니다. 비용을 줄이기 위해서가 아니라 합리적인 비용으로 신뢰할 수 있고 검토 가능한 용량을 추가하기 위해서입니다.",
          "통제력을 잃지 않고 어떻게 해야 하는지가 문제입니다. 대답은 정의된 전달 프레임워크입니다. 공통 템플릿, 명확한 SLA, 검토 마일스톤 및 안전한 기밀 정보 처리.",
          "전문 회사의 경우 화이트 라벨 백엔드 파트너는 인원을 추가하지 않고 서비스 라인을 확장합니다. 기업의 경우 사내 팀의 캡티브 스타일 확장은 급증 용량과 일관성을 추가합니다.",
          "품질은 프로세스뿐만 아니라 파트너 주도 검토의 기능입니다. 결과물에 대한 고위급 시각이 오프쇼어 전달을 진정한 역량으로 바꾸는 것입니다.",
          "TAG Group은 전 세계의 이전 가격 및 미국 및 UAE 고객을 위한 재무 및 회계를 파트너 주도 검토를 통해 인도에서 전달하는 글로벌 역량 센터로 정확하게 운영합니다."
        ]
      },
      india: {
        title: "2026년 인도 진출: 올바른 구조 선택",
        meta: "2026년 3월 · 가우라브 샤르마, 대표 파트너",
        body: [
          "대부분의 인도 진출 실수는 첫 달, 즉 차량 선택에서 발생합니다. 올바른 구조는 기업이 실제로 인도에서 수행할 작업, 수익 이동 방식 및 그룹이 운영을 시작해야 하는 속도에 따라 다릅니다.",
          "전액 출자 자회사는 가장 운영의 자유와 확장을 위한 가장 명확한 경로를 제공하지만 완전한 규정 준수를 수반합니다. LLP는 서비스 주도 모델에 효율적일 수 있습니다. 지사, 연락 및 프로젝트 사무소는 더 좁고 정의된 권한에 적합하며 각각 별개의 세금 및 FEMA 결과가 수반됩니다.",
          "송금은 나중에 발견하는 것이 아니라 처음에 모델링해야 합니다. 자본이 들어오는 방식과 수익이 나가는 방식은 활동만큼이나 구조를 형성합니다.",
          "속도도 중요합니다. 법인 설립, PAN/TAN/GST 등록 및 은행 업무를 순서대로 진행하여 실제 법인을 빠르게 가동하고 재무, 급여 및 규정 준수를 그 위에 계층화할 수 있습니다.",
          "TAG Group의 인도 진출 부문은 이러한 옵션을 사전에 모델링한 다음 전략, 법인 설립, 세무, 재무, HR, IT 및 건물을 포괄하는 하나의 조정 팀인 엔드 투 엔드 설정을 실행합니다."
        ]
      },
      uae: {
        title: "UAE 법인세: 인도 그룹이 계획해야 할 사항",
        meta: "2026년 4월 · 비샬 타얄, 파트너 — UAE 데스크",
        body: [
          "UAE의 법인세 체제는 UAE를 허브로 사용하는 인도 그룹의 계산법을 변경했습니다. 헤드라인 세율은 적당하지만 적격 자유 구역 소득, 물질 요건 및 그룹 내 흐름의 처리와 같은 세부 사항이 유효한 결과를 결정합니다.",
          "첫 번째 질문은 자유 구역 대 본토입니다. 적격 자유 구역 거주자는 적격 소득에 대해 0%의 세율에 접근할 수 있지만 적절한 물질 및 비적격 수익 임계값에 대한 조건이 충족되고 입증되어야 하며 가정되어서는 안 됩니다.",
          "두 번째는 인도 측입니다. 인도와 UAE 간의 배당, 이자 및 서비스 흐름은 원천 징수, 조약 입장 및 인도 자체의 조세 회피 방지 규칙과 상호 작용합니다. 단독으로 효율적인 구조는 양쪽이 함께 읽혀지면 비효율적이거나 노출될 수 있습니다.",
          "이제 물질은 결합 조직입니다. 올바른 위치에 있는 사람, 건물 및 의사 결정. 이러한 물질에 대한 문서는 구조 자체만큼 중요합니다.",
          "Taxepolis International FZCO를 통해 비샬 타얄이 이끄는 TAG Group의 UAE 데스크는 복도 양쪽에서 이러한 위치 (VAT, 법인세, 인도 GST 및 구조화)를 하나의 조정된 연습으로 계획합니다."
        ]
      }
    },`;

// insert into English block
const enStart = localesContent.indexOf('en: {') + 5;
localesContent = localesContent.slice(0, enStart) + '\\n' + enInsights + localesContent.slice(enStart);

// insert into Korean block
const koStart = localesContent.indexOf('ko: {') + 5;
localesContent = localesContent.slice(0, koStart) + '\\n' + koInsights + localesContent.slice(koStart);

fs.writeFileSync('src/data/locales.ts', localesContent);
console.log('locales patched');
