'use client'

import * as React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Loader2, Send, Save, Eye, Trash2, ExternalLink, Mail, Copy, Check, ClipboardPaste } from 'lucide-react'
import type { BriefingRow } from '@/lib/briefing/schema'
import { LLM_FORMAT_INSTRUCTIONS, parseLlmBriefing } from '@/lib/briefing/llm-format'
import {
  deleteBriefing,
  listBriefings,
  previewBriefingHtml,
  publishAndSendBriefing,
  saveBriefingJson,
  sendTestBriefing,
  setBriefingStatus,
} from '@/actions/briefing.actions'

type Msg = { ok: boolean; text: string } | null
type Res = { success: boolean; error?: string; message?: string; data?: unknown }

export default function BriefingsClient({ initial }: { initial: BriefingRow[] }) {
  const [rows, setRows] = React.useState(initial)
  const [selectedId, setSelectedId] = React.useState<string | null>(null)
  const [json, setJson] = React.useState('')
  const [pasted, setPasted] = React.useState('')
  const [previewHtml, setPreviewHtml] = React.useState('')
  const [busy, setBusy] = React.useState<string | null>(null)
  const [msg, setMsg] = React.useState<Msg>(null)
  const [testTo, setTestTo] = React.useState('')
  const [copied, setCopied] = React.useState(false)
  const [showFormat, setShowFormat] = React.useState(false)

  const selected = rows.find(r => r.id === selectedId) ?? null
  const locked = !!selected?.sent_at // already e-mailed: read-only

  // Live preview of the e-mail as the JSON is edited.
  React.useEffect(() => {
    if (!json.trim()) return
    const t = setTimeout(async () => {
      const res = await previewBriefingHtml(json)
      if (res.success && res.data) setPreviewHtml(res.data)
    }, 400)
    return () => clearTimeout(t)
  }, [json])

  async function refresh(selectId: string | null) {
    const list = await listBriefings()
    setRows(list)
    const row = list.find(r => r.id === selectId)
    setSelectedId(row?.id ?? null)
    if (row) setJson(JSON.stringify(row.content, null, 2))
  }

  async function run(label: string, fn: () => Promise<Res>) {
    setBusy(label)
    setMsg(null)
    try {
      const res = await fn()
      setMsg(res.success ? { ok: true, text: res.message || 'Done.' } : { ok: false, text: res.error || 'Failed.' })
      return res
    } catch (e) {
      setMsg({ ok: false, text: e instanceof Error ? e.message : String(e) })
      return { success: false } as Res
    } finally {
      setBusy(null)
    }
  }

  async function copyFormat() {
    try {
      await navigator.clipboard.writeText(LLM_FORMAT_INSTRUCTIONS)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      setShowFormat(true)
    }
  }

  function loadPasted() {
    const parsed = parseLlmBriefing(pasted)
    if (!parsed.ok) return setMsg({ ok: false, text: parsed.error })
    const existing = rows.find(r => r.slug === parsed.briefing.date)
    if (existing?.sent_at) {
      return setMsg({ ok: false, text: `The briefing for ${parsed.briefing.date} was already e-mailed on ${new Date(existing.sent_at).toLocaleString()}. Check the date in the LLM output.` })
    }
    setSelectedId(existing?.id ?? null)
    setJson(JSON.stringify(parsed.briefing, null, 2))
    setPasted('')
    setMsg({
      ok: true,
      text: `Loaded briefing for ${parsed.briefing.date} (${parsed.briefing.items.length} items).${existing ? ' It will replace the existing draft for that date.' : ''} Check the preview, then Save or Publish & send.`,
    })
  }

  function select(row: BriefingRow) {
    setSelectedId(row.id)
    setJson(JSON.stringify(row.content, null, 2))
    setMsg(null)
  }

  /** Saves the editor content and returns the saved row id. */
  async function saveCurrent(status: 'draft' | 'published'): Promise<string | null> {
    const res = await saveBriefingJson(json, status)
    if (!res.success) {
      setMsg({ ok: false, text: res.error || 'Save failed.' })
      return null
    }
    return (res.data as BriefingRow).id
  }

  async function onSave() {
    const res = await run('save', () => saveBriefingJson(json, selected?.status ?? 'draft'))
    if (res.success && res.data) await refresh((res.data as BriefingRow).id)
  }

  async function onTogglePublish() {
    const publish = selected?.status !== 'published'
    setBusy('status')
    const id = locked ? selected!.id : await saveCurrent(publish ? 'published' : 'draft')
    setBusy(null)
    if (!id) return
    if (locked) await run('status', () => setBriefingStatus(id, publish ? 'published' : 'draft'))
    else setMsg({ ok: true, text: publish ? 'Published on the website.' : 'Unpublished.' })
    await refresh(id)
  }

  async function onSend() {
    const date = (() => { try { return JSON.parse(json).date } catch { return '' } })()
    if (!confirm(`Publish the ${date} briefing on the website and e-mail it to ALL active subscribers?\n\nThis cannot be undone.`)) return
    let id: string | null = null
    await run('send', async () => {
      id = await saveCurrent('published')
      if (!id) return { success: false, error: 'Fix the errors above, then try again.' }
      return publishAndSendBriefing(id)
    })
    if (id) await refresh(id)
  }

  async function onTest() {
    if (!testTo) return
    await run('test', async () => {
      const id = locked ? selected!.id : await saveCurrent(selected?.status ?? 'draft')
      if (!id) return { success: false, error: 'Fix the errors above, then try again.' }
      await refresh(id)
      return sendTestBriefing(id, testTo)
    })
  }

  async function onDelete() {
    if (!selected || !confirm(`Delete "${selected.title}"?`)) return
    await run('delete', () => deleteBriefing(selected.id))
    setJson('')
    setPreviewHtml('')
    await refresh(null)
  }

  return (
    <div className="space-y-6 text-slate-900">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Daily Briefing</h1>
        <p className="text-sm text-slate-500 mt-1">Run the briefing prompt in any LLM, paste the reply here, check the preview, then publish & send.</p>
      </div>

      {/* Step 1 + 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-white border-slate-200 shadow-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-base">1. Add this to the end of your prompt</CardTitle>
            <CardDescription>
              Paste it after the client’s prompt in ChatGPT / Gemini / Claude. It makes the LLM reply in the format the website and e-mail need. Change the date and ref in it if needed.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex gap-2">
              <Button onClick={copyFormat} className="bg-amber-500 hover:bg-amber-600 text-white">
                {copied ? <Check className="mr-2 h-4 w-4" /> : <Copy className="mr-2 h-4 w-4" />}
                {copied ? 'Copied' : 'Copy format instructions'}
              </Button>
              <Button variant="outline" onClick={() => setShowFormat(s => !s)}>{showFormat ? 'Hide' : 'Show'}</Button>
            </div>
            {showFormat && (
              <pre data-lenis-prevent className="text-xs bg-slate-50 border border-slate-200 rounded-md p-3 max-h-72 overflow-auto whitespace-pre-wrap">
                {LLM_FORMAT_INSTRUCTIONS}
              </pre>
            )}
          </CardContent>
        </Card>

        <Card className="bg-white border-slate-200 shadow-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-base">2. Paste the LLM’s reply</CardTitle>
            <CardDescription>Paste the whole reply, including the ```json block.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <textarea
              value={pasted}
              onChange={e => setPasted(e.target.value)}
              placeholder="Paste here…"
              spellCheck={false}
              data-lenis-prevent
              className="w-full h-32 font-mono text-xs border border-slate-200 rounded-md p-3 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            <Button onClick={loadPasted} disabled={!pasted.trim() || !!busy} variant="outline">
              <ClipboardPaste className="mr-2 h-4 w-4" /> Load & preview
            </Button>
          </CardContent>
        </Card>
      </div>

      {msg && (
        <div className={`p-3 rounded-md text-sm border whitespace-pre-wrap ${msg.ok ? 'bg-green-50 border-green-200 text-green-700' : 'bg-rose-50 border-rose-200 text-rose-600'}`}>
          {msg.text}
        </div>
      )}

      <div className="grid grid-cols-1 xl:grid-cols-[240px_1fr] gap-6">
        {/* History */}
        <Card className="bg-white border-slate-200 shadow-sm h-fit">
          <CardHeader className="pb-3 border-b border-slate-100">
            <CardTitle className="text-base">Saved briefings</CardTitle>
          </CardHeader>
          <CardContent className="p-0 max-h-[70vh] overflow-y-auto" data-lenis-prevent>
            {rows.length === 0 && <p className="p-4 text-sm text-slate-500">None yet.</p>}
            {rows.map(r => (
              <button
                key={r.id}
                onClick={() => select(r)}
                className={`w-full text-left px-4 py-3 border-b border-slate-100 hover:bg-slate-50 ${r.id === selectedId ? 'bg-amber-50' : ''}`}
              >
                <div className="text-sm font-semibold">{r.briefing_date}</div>
                <div className="text-xs text-slate-500">{r.ref}</div>
                <div className="mt-1 flex gap-1 flex-wrap">
                  <span className={`text-[10px] uppercase tracking-wide px-1.5 py-0.5 rounded ${r.status === 'published' ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-600'}`}>{r.status}</span>
                  {r.sent_at && <span className="text-[10px] uppercase tracking-wide px-1.5 py-0.5 rounded bg-blue-100 text-blue-700">e-mailed{r.sent_count ? ` · ${r.sent_count}` : ''}</span>}
                </div>
              </button>
            ))}
          </CardContent>
        </Card>

        {/* 3. Review + actions */}
        {json ? (
          <div className="space-y-4">
            <Card className="bg-white border-slate-200 shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-base">3. Review, then publish & send</CardTitle>
                {locked && <CardDescription>This briefing has already been e-mailed, so its content is locked.</CardDescription>}
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2 items-center">
                {!locked && (
                  <Button onClick={onSave} disabled={!!busy} variant="outline">
                    {busy === 'save' ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Save className="mr-2 h-4 w-4" />} Save draft
                  </Button>
                )}
                <Button onClick={onTogglePublish} disabled={!!busy} variant="outline">
                  {busy === 'status' ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Eye className="mr-2 h-4 w-4" />}
                  {selected?.status === 'published' ? 'Unpublish from website' : 'Publish on website only'}
                </Button>
                <Button onClick={onSend} disabled={!!busy || locked} className="bg-amber-500 hover:bg-amber-600 text-white">
                  {busy === 'send' ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Send className="mr-2 h-4 w-4" />}
                  {locked ? `E-mailed ${new Date(selected!.sent_at!).toLocaleString()}` : 'Publish & send to subscribers'}
                </Button>
                {selected?.status === 'published' && (
                  <a href={`/insights/briefings/${selected.slug}`} target="_blank" rel="noreferrer" className="inline-flex items-center text-sm text-slate-600 hover:text-slate-900 px-2">
                    <ExternalLink className="mr-1 h-4 w-4" /> View on site
                  </a>
                )}
                <div className="flex items-center gap-2 ml-auto">
                  <Input type="email" placeholder="test@email.com" value={testTo} onChange={e => setTestTo(e.target.value)} className="w-48 bg-white" />
                  <Button onClick={onTest} disabled={!!busy || !testTo} variant="outline">
                    {busy === 'test' ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Mail className="mr-2 h-4 w-4" />} Send test
                  </Button>
                  {selected && (
                    <Button onClick={onDelete} disabled={!!busy} variant="destructive" size="icon" title="Delete">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 2xl:grid-cols-2 gap-4">
              <Card className="bg-white border-slate-200 shadow-sm">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Content</CardTitle>
                  <CardDescription>Fix any text here; the preview updates live. Add a missing source link in <code>source_url</code>.</CardDescription>
                </CardHeader>
                <CardContent>
                  <textarea
                    value={json}
                    onChange={e => setJson(e.target.value)}
                    readOnly={locked}
                    spellCheck={false}
                    data-lenis-prevent
                    className="w-full h-[70vh] font-mono text-xs border border-slate-200 rounded-md p-3 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </CardContent>
              </Card>
              <Card className="bg-white border-slate-200 shadow-sm">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">E-mail preview</CardTitle>
                  <CardDescription>Exactly what subscribers receive. The website page uses the same content.</CardDescription>
                </CardHeader>
                <CardContent>
                  <iframe title="Preview" srcDoc={previewHtml} className="w-full h-[70vh] border border-slate-200 rounded-md bg-white" />
                </CardContent>
              </Card>
            </div>
          </div>
        ) : (
          <Card className="bg-white border-slate-200 shadow-sm">
            <CardContent className="pt-6 text-sm text-slate-500">Paste an LLM reply above, or pick a saved briefing.</CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
