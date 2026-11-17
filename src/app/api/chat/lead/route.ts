import { NextRequest, NextResponse } from 'next/server'
import { randomUUID } from 'crypto'
import { z } from 'zod'
import { createClient } from '@supabase/supabase-js'
import { sendEmail } from '@/lib/email'
import { LEAD_COOKIE, clientIp, rateLimited, signLeadToken } from '@/lib/chatbot/config'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const LeadSchema = z.object({
  name: z.string().trim().min(2, 'Please enter your name').max(120),
  email: z.string().trim().toLowerCase().email('Please enter a valid email'),
  phone: z
    .string()
    .trim()
    .regex(/^\+?[0-9\s\-()]{7,20}$/, 'Please enter a valid phone number'),
  consent: z.literal(true, { message: 'Please accept to continue' }),
  transcript: z
    .array(z.object({ role: z.enum(['user', 'assistant']), content: z.string().max(8000) }))
    .max(100)
    .optional(),
  page: z.string().max(300).optional(),
  _honey: z.string().optional(),
})

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

export async function POST(req: NextRequest) {
  if (rateLimited(`lead:${clientIp(req.headers)}`, 5)) {
    return NextResponse.json({ error: 'Too many attempts. Please try again shortly.' }, { status: 429 })
  }

  const parsed = LeadSchema.safeParse(await req.json().catch(() => ({})))
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.issues[0]?.message || 'Invalid details.' }, { status: 400 })
  }
  const lead = parsed.data
  const id = randomUUID()

  const setCookie = (res: NextResponse) => {
    res.cookies.set(LEAD_COOKIE, signLeadToken(id), {
      httpOnly: true,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
      path: '/',
      maxAge: 60 * 60 * 24 * 30,
    })
    return res
  }

  if (lead._honey) return setCookie(NextResponse.json({ success: true })) // bot — silently accept

  const transcript = (lead.transcript || [])
    .map((m) => `${m.role === 'user' ? 'Visitor' : 'Assistant'}: ${m.content}`)
    .join('\n\n')
    .slice(-8000)
  const sourceUrl = lead.page ? `${process.env.NEXT_PUBLIC_SITE_URL || 'https://taggroup.in'}${lead.page}` : null

  try {
    // Same as the contact form: service-role key when configured, otherwise the anon key
    // (the leads table allows public inserts).
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      { auth: { persistSession: false, autoRefreshToken: false } }
    )
    const { error } = await supabase.from('leads').insert([
      {
        id,
        type: 'chatbot',
        name: lead.name,
        email: lead.email,
        phone: lead.phone,
        service: 'AI Assistant chat',
        message: transcript ? `Chatbot conversation:\n\n${transcript}` : 'Chatbot lead',
        consent: true,
        source_url: sourceUrl,
      },
    ])
    if (error) throw error
  } catch (err) {
    console.error('Chatbot lead insert failed:', err)
    return NextResponse.json({ error: 'Could not save your details. Please try again.' }, { status: 500 })
  }

  if (process.env.ADMIN_EMAIL && process.env.EMAIL_USER) {
    await sendEmail({
      to: process.env.ADMIN_EMAIL,
      subject: `New chatbot lead: ${lead.name}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:640px;margin:0 auto;color:#1a2332">
          <h2 style="margin:0 0 16px">New lead from the website assistant</h2>
          <p><strong>Name:</strong> ${esc(lead.name)}<br/>
             <strong>Email:</strong> <a href="mailto:${esc(lead.email)}">${esc(lead.email)}</a><br/>
             <strong>Phone:</strong> ${esc(lead.phone)}<br/>
             ${sourceUrl ? `<strong>Page:</strong> ${esc(sourceUrl)}` : ''}</p>
          ${transcript ? `<h3>Conversation</h3><div style="white-space:pre-wrap;background:#f8fafc;border-left:4px solid #a8823a;padding:12px 16px;font-size:14px;line-height:1.6">${esc(transcript)}</div>` : ''}
        </div>`,
    }).catch((e) => console.error('Chatbot lead email failed:', e))
  }

  return setCookie(NextResponse.json({ success: true }))
}
