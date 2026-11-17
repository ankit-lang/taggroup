/**
 * Speaking engagements & events shown in Insights → Media → "Speaking & events".
 * Newest first. Photos live in /public/assets/photos/media/<folder>/.
 */
export type MediaEvent = {
  id: string
  month: { en: string; ko: string }
  date: string // ISO, used for sorting / <time>
  title: { en: string; ko: string }
  host: { en: string; ko: string }
  summary: { en: string; ko: string }
  speaker: { en: string; ko: string }
  url: string
  photos: { src: string; alt: string }[]
}

const gdGoenka = '/assets/photos/media/gd-goenka-2026-04'

export const MEDIA_EVENTS: MediaEvent[] = [
  {
    id: 'gd-goenka-ftas-capital-flows-2026',
    month: { en: 'April 2026', ko: '2026년 4월' },
    date: '2026-04-21',
    title: {
      en: 'FTAs, Conflicts and Capital Flows: Key Challenges and Opportunities for India',
      ko: 'FTA, 분쟁 및 자본 흐름: 인도의 주요 과제와 기회',
    },
    host: {
      en: 'Roundtable · Finance Club, School of Management, GD Goenka University — UID Auditorium',
      ko: '라운드테이블 · GD 고엔카 대학교 경영대학원 파이낸스 클럽 — UID 강당',
    },
    speaker: {
      en: 'Gaurav Sharma, Partner, TAG Advisors — panellist',
      ko: '가우라브 샤르마, TAG Advisors 파트너 — 패널리스트',
    },
    summary: {
      en: 'Gaurav Sharma joined a panel with Dhruv Matta (Partner, Lakshmikumaran & Sridharan Attorneys), Karan Chopra (Partner, BDO India) and Manoj Kumar Upadhyay (Joint Director, NITI Aayog, Government of India). The discussion covered the India–EU FTA, shifting energy flows, and the impact of global conflicts on inflation, capital markets and economic growth — closing with practical advice for students on navigating uncertainty and building resilient careers.',
      ko: '가우라브 샤르마는 드루브 마타(Lakshmikumaran & Sridharan Attorneys 파트너), 카란 초프라(BDO India 파트너), 마노즈 쿠마르 우파드야이(인도 정부 NITI Aayog 공동 이사)와 함께 패널로 참여했습니다. 인도–EU FTA, 에너지 흐름의 변화, 글로벌 분쟁이 인플레이션·자본시장·경제 성장에 미치는 영향을 논의했으며, 불확실성 속에서 탄력적인 커리어를 쌓기 위한 실질적인 조언으로 마무리되었습니다.',
    },
    url: 'https://www.linkedin.com/posts/gdgoenkauniversity_gdgoenkauniversity-schoolofmanagement-activity-7452221845921021952-F9Cj',
    photos: [6, 2, 3, 4, 5, 1].map((n) => ({
      src: `${gdGoenka}/photo-${n}.jpg`,
      alt: `GD Goenka University roundtable on FTAs, conflicts and capital flows — photo ${n}`,
    })),
  },
]
