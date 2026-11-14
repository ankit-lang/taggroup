/**
 * Articles by TAG people published in external journals/magazines.
 * The website shows a synopsis and links out to the publisher; never the full text.
 */
export type FeaturedPublication = {
  slug: string
  title: string
  publication: string
  issue: string
  url: string
  author: string
  authorRole: string
  authorHref: string
  tag: string
  teaser: string
}

export const NIRC_AI_GCC_ARTICLE: FeaturedPublication = {
  slug: 'ai-gccs-cost-plus-arms-length',
  title: 'Borderless Algorithms, Bounded Margins: Is Cost-Plus Still Arm’s Length for India’s AI-Enabled GCCs?',
  publication: 'NIRC of ICAI E-Newsletter',
  issue: 'September 2026',
  url: 'https://nirc.icai.org/nirc-newsletter/#flipbook-df_8128/20/',
  author: 'CA Gaurav Sharma',
  authorRole: 'Managing Partner, TAG Group',
  authorHref: '/people/gaurav',
  tag: 'Transfer Pricing · GCC',
  teaser:
    'As AI shrinks headcount and moves real decision-making into Indian Global Capability Centres, a simple cost-plus return may no longer reflect what these centres contribute. Gaurav Sharma examines when the standard TNMM answer still holds — and when it does not.',
}
