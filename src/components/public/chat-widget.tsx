'use client'

import React, { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'

type Msg = { role: 'user' | 'assistant'; content: string }

const STORAGE_KEY = 'tag_chat_v1'
const FREE_RESPONSES = 5
const DISCLAIMER = 'General information only — not professional tax or legal advice.'
const WELCOME =
  "Hello! I'm the TAG Assistant. Ask me about Indian & international tax, GST, transfer pricing, FEMA, company law or setting up in India."
const SUGGESTIONS = [
  'How is a foreign company taxed in India?',
  'When is transfer pricing documentation required?',
  'Subsidiary vs branch office in India?',
  'What is UAE Corporate Tax for Indian groups?',
]

/** Light, safe rendering: **bold**, "- " bullets and line breaks — no HTML injection. */
function renderText(text: string) {
  const inline = (line: string, key: string) =>
    line.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
      part.startsWith('**') && part.endsWith('**') ? (
        <strong key={`${key}-${i}`}>{part.slice(2, -2)}</strong>
      ) : (
        <React.Fragment key={`${key}-${i}`}>{part.replace(/^#+\s*/, '')}</React.Fragment>
      )
    )
  const blocks: React.ReactNode[] = []
  let list: React.ReactNode[] = []
  const flush = () => {
    if (list.length) blocks.push(<ul key={`ul-${blocks.length}`}>{list}</ul>)
    list = []
  }
  text.split('\n').forEach((raw, i) => {
    const line = raw.trim()
    const bullet = line.match(/^(?:[-*•]|\d+[.)])\s+(.*)$/)
    if (bullet) list.push(<li key={i}>{inline(bullet[1], `l${i}`)}</li>)
    else {
      flush()
      if (line) blocks.push(<p key={i}>{inline(line, `p${i}`)}</p>)
    }
  })
  flush()
  return blocks
}

export function ChatWidget() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Msg[]>([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [needLead, setNeedLead] = useState(false)
  const [leadDone, setLeadDone] = useState(false)
  const [limitReached, setLimitReached] = useState(false)
  const [pending, setPending] = useState<string | null>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)

  const restored = useRef(false)

  // Restore this tab's conversation the first time the panel opens.
  function toggle() {
    if (!restored.current) {
      restored.current = true
      try {
        const saved = JSON.parse(sessionStorage.getItem(STORAGE_KEY) || 'null')
        if (saved?.messages?.length) {
          setMessages(saved.messages)
          setLeadDone(!!saved.leadDone)
          setNeedLead(!!saved.needLead && !saved.leadDone)
        }
      } catch {}
    }
    setOpen((o) => !o)
  }

  useEffect(() => {
    if (!restored.current) return
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify({ messages, leadDone, needLead }))
    } catch {}
  }, [messages, leadDone, needLead])

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages, loading, needLead, open])

  useEffect(() => {
    if (open && !needLead) inputRef.current?.focus()
  }, [open, needLead])

  async function ask(question: string, history: Msg[]) {
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: history, page: pathname }),
      })
      const data = await res.json().catch(() => ({}))
      if (res.status === 403 && data.code === 'lead_required') {
        setPending(question)
        setNeedLead(true)
        return
      }
      if (res.status === 403 && data.code === 'limit_reached') {
        setLimitReached(true)
        return
      }
      if (!res.ok) throw new Error(data.error || 'Something went wrong. Please try again.')
      setMessages([...history, { role: 'assistant', content: data.reply }])
      if (data.needLead && !leadDone) setNeedLead(true)
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Something went wrong.')
      setPending(question)
    } finally {
      setLoading(false)
    }
  }

  function send(text?: string) {
    const q = (text ?? input).trim()
    if (!q || loading || needLead || limitReached) return
    const history: Msg[] = [...messages, { role: 'user', content: q }]
    setMessages(history)
    setInput('')
    setPending(null)
    ask(q, history)
  }

  function retry() {
    if (!pending || loading) return
    const last = messages[messages.length - 1]
    const history = last?.role === 'user' ? messages : [...messages, { role: 'user' as const, content: pending }]
    setMessages(history)
    ask(pending, history)
  }

  function onLeadSaved() {
    setLeadDone(true)
    setNeedLead(false)
    // Answer the question that was blocked by the form, if any.
    const last = messages[messages.length - 1]
    if (last?.role === 'user') ask(last.content, messages)
  }

  function reset() {
    setMessages([])
    setError('')
    setPending(null)
    setLimitReached(false)
  }

  const answered = messages.filter((m) => m.role === 'assistant').length
  const remaining = Math.max(0, FREE_RESPONSES - answered)

  return (
    <div className={`tagbot ${open ? 'is-open' : ''}`}>
      {open && (
        <section className="tagbot-panel" role="dialog" aria-label="TAG Assistant" data-lenis-prevent>
          <header className="tagbot-head">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="tagbot-avatar" src="/assets/img/chatbot-icon.jpg" alt="" aria-hidden width={36} height={36} />
            <div className="tagbot-title">
              <strong>TAG Assistant</strong>
              <span>Tax &amp; legal information</span>
            </div>
            {messages.length > 0 && (
              <button type="button" className="tagbot-icon" onClick={reset} title="New conversation" aria-label="New conversation">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 1 0 3-6.7L3 8" /><path d="M3 3v5h5" /></svg>
              </button>
            )}
            <button type="button" className="tagbot-icon" onClick={() => setOpen(false)} aria-label="Close">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12" /></svg>
            </button>
          </header>

          <div className="tagbot-disclaimer">
            {DISCLAIMER} Consult a qualified TAG advisor before acting.
          </div>

          <div className="tagbot-body" ref={scrollRef}>
            <div className="tagbot-msg is-bot">
              <div className="tagbot-bubble"><p>{WELCOME}</p></div>
            </div>

            {messages.length === 0 && (
              <div className="tagbot-suggest">
                {SUGGESTIONS.map((s) => (
                  <button key={s} type="button" onClick={() => send(s)}>{s}</button>
                ))}
              </div>
            )}

            {messages.map((m, i) => (
              <div key={i} className={`tagbot-msg ${m.role === 'user' ? 'is-user' : 'is-bot'}`}>
                <div className="tagbot-bubble">{m.role === 'user' ? <p>{m.content}</p> : renderText(m.content)}</div>
                {m.role === 'assistant' && <div className="tagbot-caveat">{DISCLAIMER}</div>}
              </div>
            ))}

            {loading && (
              <div className="tagbot-msg is-bot">
                <div className="tagbot-bubble tagbot-typing" aria-label="Assistant is typing"><i /><i /><i /></div>
              </div>
            )}

            {error && (
              <div className="tagbot-error">
                {error} {pending && <button type="button" onClick={retry}>Retry</button>}
              </div>
            )}

            {needLead && !leadDone && <LeadForm messages={messages} page={pathname} onSaved={onLeadSaved} />}

            {limitReached && (
              <div className="tagbot-error">
                You&apos;ve reached the limit for this conversation. For detailed advice, please{' '}
                <a href="/contact">contact our team</a>.
              </div>
            )}
          </div>

          <form
            className="tagbot-input"
            onSubmit={(e) => {
              e.preventDefault()
              send()
            }}
          >
            <textarea
              ref={inputRef}
              rows={1}
              value={input}
              maxLength={1500}
              disabled={needLead || limitReached}
              placeholder={needLead ? 'Please share your details above to continue' : 'Ask a tax or legal question…'}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault()
                  send()
                }
              }}
            />
            <button type="submit" disabled={!input.trim() || loading || needLead || limitReached} aria-label="Send">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2 11 13M22 2l-7 20-4-9-9-4z" /></svg>
            </button>
          </form>
          {!leadDone && answered > 0 && remaining > 0 && (
            <div className="tagbot-foot">{remaining} free answer{remaining === 1 ? '' : 's'} left before we ask for your contact details</div>
          )}
        </section>
      )}

      <button
        type="button"
        className={`tagbot-launcher ${open ? '' : 'has-img'}`}
        onClick={toggle}
        aria-label={open ? 'Close TAG Assistant' : 'Open TAG Assistant'}
      >
        {open ? (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12" /></svg>
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img src="/assets/img/chatbot-icon.jpg" alt="" width={58} height={58} />
        )}
      </button>
    </div>
  )
}

function LeadForm({ messages, page, onSaved }: { messages: Msg[]; page: string; onSaved: () => void }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [consent, setConsent] = useState(false)
  const [saving, setSaving] = useState(false)
  const [err, setErr] = useState('')

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSaving(true)
    setErr('')
    try {
      const honey = (new FormData(e.currentTarget).get('_honey') as string) || ''
      const res = await fetch('/api/chat/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone, consent, transcript: messages, page, _honey: honey }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(data.error || 'Could not save your details.')
      onSaved()
    } catch (e) {
      setErr(e instanceof Error ? e.message : 'Could not save your details.')
    } finally {
      setSaving(false)
    }
  }

  return (
    <form className="tagbot-lead" onSubmit={submit}>
      <strong>Continue the conversation</strong>
      <p>Share your details to keep chatting. A TAG advisor may follow up if your matter needs expert review.</p>
      <input required placeholder="Full name" value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" />
      <input required type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" />
      <input required type="tel" placeholder="Phone (with country code)" value={phone} onChange={(e) => setPhone(e.target.value)} autoComplete="tel" />
      <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="tagbot-honey" aria-hidden />
      <label>
        <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} required />
        <span>I agree that TAG Advisors may contact me about my query. I understand the assistant&apos;s answers are not professional advice.</span>
      </label>
      {err && <div className="tagbot-lead-err">{err}</div>}
      <button type="submit" disabled={saving}>{saving ? 'Saving…' : 'Continue'}</button>
    </form>
  )
}
