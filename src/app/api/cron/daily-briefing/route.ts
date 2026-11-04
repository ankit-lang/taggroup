import { createAdminClient } from '@/lib/supabase/admin'
import { generateBriefing } from '@/lib/briefing/generate'
import { nextRef, saveBriefing, sendBriefing, todayIST, briefingPath } from '@/lib/briefing/service'
import { renderBriefingEmail, siteUrl } from '@/lib/briefing/email-template'
import { sendEmail } from '@/lib/email'

// Research + writing with web search can take several minutes.
export const maxDuration = 800
export const dynamic = 'force-dynamic'

/**
 * Daily automation. Call once each morning (Vercel Cron, GitHub Actions, cron-job.org…):
 *
 *   GET /api/cron/daily-briefing
 *   Authorization: Bearer $CRON_SECRET
 *
 * BRIEFING_AUTO_SEND=true  → generate, publish on the website and e-mail all subscribers.
 * otherwise (default)      → generate as a DRAFT and e-mail ADMIN_EMAIL a preview to
 *                            approve in /admin/briefings (recommended for legal content).
 */
export async function GET(request: Request) {
  const secret = process.env.CRON_SECRET
  if (!secret || request.headers.get('authorization') !== `Bearer ${secret}`) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const supabase = createAdminClient()
  const date = new URL(request.url).searchParams.get('date') || todayIST()

  const { data: existing } = await supabase.from('briefings').select('id, status').eq('slug', date).maybeSingle()
  if (existing) {
    return Response.json({ ok: true, skipped: `Briefing for ${date} already exists (${existing.status})` })
  }

  try {
    const ref = await nextRef(supabase, date)
    const briefing = await generateBriefing({ date, ref })
    const autoSend = process.env.BRIEFING_AUTO_SEND === 'true'
    const row = await saveBriefing(supabase, briefing, { status: autoSend ? 'published' : 'draft', source: 'ai' })

    if (autoSend) {
      const result = await sendBriefing(supabase, row)
      return Response.json({ ok: true, slug: row.slug, status: row.status, ...result })
    }

    const admin = process.env.ADMIN_EMAIL
    if (admin) {
      await sendEmail({
        to: admin,
        subject: `[Review needed] ${row.title}`,
        html:
          `<p style="font-family:Arial,sans-serif;font-size:14px;">Today's briefing has been drafted. ` +
          `Review, publish and send it at <a href="${siteUrl()}/admin/briefings">${siteUrl()}/admin/briefings</a>.</p><hr>` +
          renderBriefingEmail(row.content, { webUrl: `${siteUrl()}${briefingPath(row.slug)}`, unsubscribeUrl: null }),
      })
    }
    return Response.json({ ok: true, slug: row.slug, status: row.status, reviewEmailSentTo: admin ?? null })
  } catch (err) {
    console.error('Daily briefing failed:', err)
    const admin = process.env.ADMIN_EMAIL
    if (admin) {
      await sendEmail({
        to: admin,
        subject: `[Failed] TAG Daily Briefing — ${date}`,
        html: `<p>Automatic generation failed: ${String(err instanceof Error ? err.message : err).replace(/</g, '&lt;')}</p><p>You can retry from ${siteUrl()}/admin/briefings.</p>`,
      })
    }
    return Response.json({ ok: false, error: err instanceof Error ? err.message : String(err) }, { status: 500 })
  }
}
