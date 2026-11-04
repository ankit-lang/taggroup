import { BriefingRow, BriefingSchema, briefingTitle } from '@/lib/briefing/schema'
import b20261102 from './2026-11-02.json'
import b20261103 from './2026-11-03.json'

/**
 * Briefings shipped with the site (the issues the client sent by hand).
 * They are always shown on the website; a row in the `briefings` table with
 * the same date overrides the bundled copy. New daily issues live in the DB.
 */
export const BUNDLED_BRIEFINGS: BriefingRow[] = [b20261103, b20261102].map(raw => {
  const content = BriefingSchema.parse(raw)
  return {
    id: `bundled-${content.date}`,
    slug: content.date,
    ref: content.ref,
    briefing_date: content.date,
    title: briefingTitle(content.date),
    content,
    status: 'published',
    source: 'manual',
    sent_at: `${content.date}T06:37:00Z`,
    sent_count: 0,
    created_at: `${content.date}T06:37:00Z`,
  }
})
