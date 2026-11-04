import { z } from 'zod'

/**
 * Structured shape of one "TAG Daily Briefing".
 *
 * The same object drives the website page, the e-mail and the AI generator,
 * so the layout stays identical everywhere. Items are a flat list: each item
 * carries its section ("Tax & Regulatory") and optional sub-section
 * ("INCOME TAX"); renderers group consecutive items under shared headings.
 */
export const BriefingItemSchema = z.object({
  section: z.string().describe('Top-level section heading, e.g. "Tax & Regulatory", "M&A, Transactions & Investment", "Geopolitics & Global Trade"'),
  subsection: z.string().nullable().describe('Optional sub-heading inside the section in capitals, e.g. "INCOME TAX" or "GST & INDIRECT TAX"; null if none'),
  category: z.string().describe('Short topic label shown next to the item number, e.g. "Reassessment", "Export of Services"'),
  title: z.string().describe('Headline of the item'),
  body: z.string().describe('Main paragraph: facts, case names, dates, amounts'),
  why_it_matters: z.string().describe('The "Why It Matters" paragraph'),
  action_point: z.string().describe('The "TAG Action Point" paragraph'),
  source_label: z.string().describe('Link text for the source, e.g. "Supreme Court order"'),
  source_url: z.string().nullable().describe('Absolute URL of the primary source, or null if unknown'),
})

export const BriefingSchema = z.object({
  date: z.string().describe('Briefing date in ISO format YYYY-MM-DD'),
  ref: z.string().describe('Reference number, e.g. "TAG/DB/2026/062"'),
  topics: z.array(z.string()).describe('Topic strip shown under the date, e.g. ["Income Tax","GST","Transactions"]'),
  executive_summary: z.array(z.string()).describe('3-5 one-sentence executive summary points'),
  items: z.array(BriefingItemSchema).describe('The numbered briefing items in display order'),
  key_considerations: z.string().describe('Closing "Key Business Considerations" paragraph'),
})

export type BriefingItem = z.infer<typeof BriefingItemSchema>
export type Briefing = z.infer<typeof BriefingSchema>

export type BriefingStatus = 'draft' | 'published'

/** Row in the `briefings` table. */
export type BriefingRow = {
  id: string
  slug: string
  ref: string
  briefing_date: string
  title: string
  content: Briefing
  status: BriefingStatus
  source: 'ai' | 'manual'
  sent_at: string | null
  sent_count: number
  created_at: string
}

export function briefingTitle(date: string) {
  return `TAG Daily Briefing — ${formatBriefingDate(date)}`
}

export function formatBriefingDate(date: string) {
  // Parse as a calendar date (no timezone shift).
  const [y, m, d] = date.split('-').map(Number)
  return new Date(Date.UTC(y, m - 1, d)).toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  })
}

/** Groups consecutive items by section → subsection, keeping order and global numbering. */
export function groupItems(items: BriefingItem[]) {
  const sections: { title: string; groups: { subsection: string | null; items: { n: number; item: BriefingItem }[] }[] }[] = []
  items.forEach((item, i) => {
    let section = sections[sections.length - 1]
    if (!section || section.title !== item.section) {
      section = { title: item.section, groups: [] }
      sections.push(section)
    }
    let group = section.groups[section.groups.length - 1]
    if (!group || group.subsection !== item.subsection) {
      group = { subsection: item.subsection, items: [] }
      section.groups.push(group)
    }
    group.items.push({ n: i + 1, item })
  })
  return sections
}
