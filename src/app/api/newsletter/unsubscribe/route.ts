import { createAdminClient } from '@/lib/supabase/admin'

export const dynamic = 'force-dynamic'

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i

async function unsubscribe(token: string | null) {
  if (!token || !UUID.test(token)) return false
  const supabase = createAdminClient()
  const { data, error } = await supabase
    .from('subscribers')
    .update({ status: 'unsubscribed' })
    .eq('unsubscribe_token', token)
    .select('id')
  return !error && !!data?.length
}

function page(ok: boolean) {
  const msg = ok
    ? 'You have been unsubscribed from TAG Insights. You will no longer receive the TAG Daily Briefing.'
    : 'This unsubscribe link is invalid or has already been used.'
  return new Response(
    `<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Unsubscribe — TAG</title></head>
<body style="margin:0;font-family:Arial,sans-serif;background:#f3f4f6;color:#1f2937;">
<div style="max-width:520px;margin:15vh auto;padding:32px;background:#fff;border-top:4px solid #c9a84c;">
<h1 style="margin:0 0 12px;font-family:Georgia,serif;color:#1a2332;font-size:24px;">TAG Advisors</h1>
<p style="line-height:1.6;">${msg}</p>
<p><a href="/" style="color:#1a2332;">Return to taggroup.in</a></p>
</div></body></html>`,
    { status: ok ? 200 : 400, headers: { 'content-type': 'text/html; charset=utf-8' } }
  )
}

// Link clicked in the e-mail
export async function GET(request: Request) {
  return page(await unsubscribe(new URL(request.url).searchParams.get('token')))
}

// RFC 8058 one-click unsubscribe (Gmail / Apple Mail "Unsubscribe" button)
export async function POST(request: Request) {
  const ok = await unsubscribe(new URL(request.url).searchParams.get('token'))
  return new Response(null, { status: ok ? 200 : 400 })
}
