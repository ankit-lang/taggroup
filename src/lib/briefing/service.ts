import type { SupabaseClient } from '@supabase/supabase-js'
import { sendEmail } from '@/lib/email'
import { renderBriefingEmail, siteUrl } from './email-template'
import { Briefing, BriefingRow, BriefingSchema, BriefingStatus, briefingTitle } from './schema'

/** Public URL path of a briefing. */
export function briefingPath(slug: string) {
  return `/insights/briefings/${slug}`
}

/** Today's date in India (YYYY-MM-DD), regardless of server timezone. */
export function todayIST() {
  return new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Kolkata' }).format(new Date())
}

/** Next sequential reference, e.g. TAG/DB/2026/063 after TAG/DB/2026/062. */
export async function nextRef(supabase: SupabaseClient, date: string) {
  const year = date.slice(0, 4)
  const prefix = `TAG/DB/${year}/`
  const { data } = await supabase
    .from('briefings')
    .select('ref')
    .like('ref', `${prefix}%`)
    .order('ref', { ascending: false })
    .limit(1)
  const last = data?.[0]?.ref ? parseInt(String(data[0].ref).slice(prefix.length), 10) : 0
  return `${prefix}${String((Number.isFinite(last) ? last : 0) + 1).padStart(3, '0')}`
}

/** Inserts or replaces the briefing for its date (slug = date). */
export async function saveBriefing(
  supabase: SupabaseClient,
  briefing: Briefing,
  opts: { status: BriefingStatus; source: 'ai' | 'manual' }
): Promise<BriefingRow> {
  const content = BriefingSchema.parse(briefing)
  const { data, error } = await supabase
    .from('briefings')
    .upsert(
      {
        slug: content.date,
        ref: content.ref,
        briefing_date: content.date,
        title: briefingTitle(content.date),
        content,
        status: opts.status,
        source: opts.source,
      },
      { onConflict: 'slug' }
    )
    .select('*')
    .single()
  if (error) throw new Error(error.message)
  return data as BriefingRow
}

/**
 * E-mails a briefing to every active subscriber, one message per recipient
 * (so addresses are never exposed to each other and each gets their own
 * unsubscribe link). Refuses to send the same briefing twice unless `force`.
 */
export async function sendBriefing(supabase: SupabaseClient, row: BriefingRow, opts: { force?: boolean } = {}) {
  if (row.sent_at && !opts.force) {
    return { sent: 0, failed: 0, skipped: true as const }
  }

  const { data: subscribers, error } = await supabase
    .from('subscribers')
    .select('email, unsubscribe_token')
    .eq('status', 'active')
  if (error) throw new Error(error.message)
  if (!subscribers?.length) return { sent: 0, failed: 0, skipped: false as const }

  const base = siteUrl()
  const webUrl = `${base}${briefingPath(row.slug)}`
  let sent = 0
  let failed = 0

  // Small concurrency so SMTP providers don't throttle us.
  const queue = [...subscribers]
  const worker = async () => {
    for (let sub = queue.shift(); sub; sub = queue.shift()) {
      const unsubscribeUrl = sub.unsubscribe_token
        ? `${base}/api/newsletter/unsubscribe?token=${encodeURIComponent(sub.unsubscribe_token)}`
        : null
      const res = await sendEmail({
        to: sub.email,
        subject: row.title,
        html: renderBriefingEmail(row.content, { webUrl, unsubscribeUrl }),
        headers: unsubscribeUrl
          ? { 'List-Unsubscribe': `<${unsubscribeUrl}>`, 'List-Unsubscribe-Post': 'List-Unsubscribe=One-Click' }
          : undefined,
      })
      if (res.success) sent++
      else failed++
    }
  }
  await Promise.all(Array.from({ length: 4 }, worker))

  await supabase
    .from('briefings')
    .update({ sent_at: new Date().toISOString(), sent_count: sent })
    .eq('id', row.id)

  return { sent, failed, skipped: false as const }
}
