/**
 * Blog publishing dates & statuses. All admin-facing dates are Asia/Kolkata (IST, UTC+05:30,
 * no daylight saving), regardless of the server's or the admin's browser time zone.
 *
 * Statuses: an article is stored as 'draft' or 'published' with a published_at timestamp.
 * 'Scheduled' = published with a future published_at — it appears on the site automatically
 * when that moment arrives (enforced by the query filters and the database policy).
 */
export const SITE_TIME_ZONE = 'Asia/Kolkata'
const IST_OFFSET = '+05:30'

export type BlogStatus = 'draft' | 'scheduled' | 'published'

export function blogStatus(blog: { status?: string | null; published_at?: string | null }, now = new Date()): BlogStatus {
  if ((blog.status || 'draft').toLowerCase() !== 'published') return 'draft'
  if (blog.published_at && new Date(blog.published_at) > now) return 'scheduled'
  return 'published'
}

/** ISO timestamp → "YYYY-MM-DDTHH:mm" in IST, for <input type="datetime-local">. */
export function toIstInputValue(iso: string | null | undefined): string {
  if (!iso) return ''
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return ''
  const parts = Object.fromEntries(
    new Intl.DateTimeFormat('en-GB', {
      timeZone: SITE_TIME_ZONE,
      year: 'numeric', month: '2-digit', day: '2-digit',
      hour: '2-digit', minute: '2-digit', hourCycle: 'h23',
    }).formatToParts(d).map((p) => [p.type, p.value])
  )
  return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`
}

/** "YYYY-MM-DDTHH:mm" entered as IST → ISO timestamp (UTC). Returns null if invalid. */
export function fromIstInputValue(value: string | null | undefined): string | null {
  if (!value || !/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/.test(value)) return null
  const d = new Date(`${value}:00${IST_OFFSET}`)
  return Number.isNaN(d.getTime()) ? null : d.toISOString()
}

/** Human date in IST, e.g. "21 Apr 2026" (withTime → "21 Apr 2026, 10:30 am IST"). */
export function formatIst(iso: string | null | undefined, opts: { withTime?: boolean; month?: 'short' | 'long' } = {}): string {
  if (!iso) return ''
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return ''
  const date = d.toLocaleDateString('en-IN', { timeZone: SITE_TIME_ZONE, day: 'numeric', month: opts.month || 'short', year: 'numeric' })
  if (!opts.withTime) return date
  const time = d.toLocaleTimeString('en-IN', { timeZone: SITE_TIME_ZONE, hour: 'numeric', minute: '2-digit', hour12: true })
  return `${date}, ${time} IST`
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '')
    .slice(0, 90)
}
