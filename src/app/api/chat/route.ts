import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import {
  CHATBOT,
  LEAD_COOKIE,
  buildSystemPrompt,
  clientIp,
  rateLimited,
  signLeadToken,
  verifyLeadToken,
} from '@/lib/chatbot/config'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const COUNT_COOKIE = 'tag_chat_n'

const BodySchema = z.object({
  messages: z
    .array(
      z.object({
        role: z.enum(['user', 'assistant']),
        content: z.string().min(1).max(8000),
      })
    )
    .min(1)
    .max(100),
  page: z.string().max(300).optional(),
})

/** Signed answer counter, so clearing the chat window doesn't reset the free-answer limit. */
function readCount(token: string | undefined) {
  if (!token || !verifyLeadToken(token)) return 0
  const n = Number(token.slice(0, token.lastIndexOf('.')).replace('n', ''))
  return Number.isFinite(n) ? n : 0
}

async function callModel(messages: { role: string; content: string }[]) {
  // Main model, then fallbacks, then one more pass at the main model after a pause.
  const models = [...new Set([CHATBOT.model, ...CHATBOT.fallbackModels])]
  const attempts = [...models, CHATBOT.model]
  let lastError = ''
  for (let i = 0; i < attempts.length; i++) {
    const model = attempts[i]
    if (i === attempts.length - 1) await new Promise((r) => setTimeout(r, 1500))
    try {
      const res = await fetch(`${CHATBOT.baseUrl}/chat/completions`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${CHATBOT.apiKey}` },
        body: JSON.stringify({
          model,
          messages,
          temperature: CHATBOT.temperature,
          max_tokens: CHATBOT.maxTokens,
          stream: false,
          // GLM flash models "think" before answering by default — slow and can return empty content.
          ...(model.startsWith('glm') ? { thinking: { type: 'disabled' } } : {}),
          // Gemini: keep "thinking" short so answers come back in ~1-3 s.
          ...(model.startsWith('gemini') ? { reasoning_effort: 'low' } : {}),
        }),
        signal: AbortSignal.timeout(CHATBOT.timeoutMs),
      })
      if (res.ok) {
        const data = await res.json()
        const text: string = data?.choices?.[0]?.message?.content?.trim() || ''
        if (text) return text
        lastError = `${model}: empty response`
        continue
      }
      lastError = `${model}: ${res.status} ${await res.text().catch(() => '')}`.slice(0, 500)
      // Bad key / bad request won't be fixed by another model. Overload (429, Zhipu 1305), 5xx and unknown model will.
      if (res.status === 401 || res.status === 403) break
    } catch (err) {
      lastError = `${model}: ${err instanceof Error ? err.message : String(err)}`
    }
  }
  throw new Error(lastError)
}

export async function POST(req: NextRequest) {
  if (!CHATBOT.apiKey) {
    return NextResponse.json({ error: 'The assistant is not configured yet.' }, { status: 503 })
  }
  if (rateLimited(clientIp(req.headers))) {
    return NextResponse.json({ error: 'Too many messages. Please wait a minute and try again.' }, { status: 429 })
  }

  let body: z.infer<typeof BodySchema>
  try {
    body = BodySchema.parse(await req.json())
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 })
  }

  const last = body.messages[body.messages.length - 1]
  if (last.role !== 'user') return NextResponse.json({ error: 'Invalid request.' }, { status: 400 })
  if (last.content.length > CHATBOT.maxMessageChars) {
    return NextResponse.json(
      { error: `Please keep your question under ${CHATBOT.maxMessageChars} characters.` },
      { status: 400 }
    )
  }

  // Gate: after N free answers the visitor must share contact details.
  const answered = Math.max(
    body.messages.filter((m) => m.role === 'assistant').length,
    readCount(req.cookies.get(COUNT_COOKIE)?.value)
  )
  const hasLead = verifyLeadToken(req.cookies.get(LEAD_COOKIE)?.value)
  if (answered >= CHATBOT.freeResponses && !hasLead) {
    return NextResponse.json({ code: 'lead_required' }, { status: 403 })
  }
  if (answered >= CHATBOT.maxResponses) {
    return NextResponse.json({ code: 'limit_reached' }, { status: 403 })
  }

  // Context: system rules + the most recent turns (truncated to keep the prompt small).
  const history = body.messages.slice(-CHATBOT.historyWindow).map((m) => ({
    role: m.role,
    content: m.content.slice(0, 3000),
  }))
  const messages = [{ role: 'system', content: buildSystemPrompt(body.page) }, ...history]

  try {
    const reply = await callModel(messages)
    const res = NextResponse.json({
      reply,
      answered: answered + 1,
      needLead: !hasLead && answered + 1 >= CHATBOT.freeResponses,
    })
    res.cookies.set(COUNT_COOKIE, signLeadToken(`n${answered + 1}`), {
      httpOnly: true,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
      path: '/',
      maxAge: 60 * 60 * 24,
    })
    return res
  } catch (err) {
    console.error('Chatbot model error:', err)
    return NextResponse.json(
      { error: 'The assistant is temporarily unavailable. Please try again or contact contact@taggroup.in.' },
      { status: 502 }
    )
  }
}
