'use client'

import * as React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Loader2, Sparkles, Send, Save, Eye, Trash2, FilePlus2, ExternalLink, Mail } from 'lucide-react'
import type { BriefingRow } from '@/lib/briefing/schema'
import {
  deleteBriefing,
  generateBriefingDraft,
  getSuggestedRef,
  listBriefings,
  previewBriefingHtml,
  publishAndSendBriefing,
  saveBriefingJson,
  sendTestBriefing,
  setBriefingStatus,
} from '@/actions/briefing.actions'

function todayIST() {
  return new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Kolkata' }).format(new Date())
}

function blankBriefing(date: string, ref: string) {
  return {
    date,
    ref,
    topics: ['Income Tax', 'GST', 'Transactions', 'Growth Capital', 'Global Trade'],
    executive_summary: [''],
    items: [
      {
        section: 'Tax & Regulatory',
        subsection: 'INCOME TAX',
        category: '',
        title: '',
        body: '',
        why_it_matters: '',
        action_point: '',
        source_label: '',
        source_url: null,
      },
    ],
    key_considerations: '',
  }
}

type Msg = { ok: boolean; text: string } | null

export default function BriefingsClient({ initial }: { initial: BriefingRow[] }) {
  const [rows, setRows] = React.useState(initial)
  const [selectedId, setSelectedId] = React.useState<string | null>(initial[0]?.id ?? null)
  const [json, setJson] = React.useState(initial[0] ? JSON.stringify(initial[0].content, null, 2) : '')
  const [previewHtml, setPreviewHtml] = React.useState('')
  const [busy, setBusy] = React.useState<string | null>(null)
  const [msg, setMsg] = React.useState<Msg>(null)
  const [genDate, setGenDate] = React.useState(todayIST())
  const [testTo, setTestTo] = React.useState('')

  const selected = rows.find(r => r.id === selectedId) ?? null

  const refresh = React.useCallback(async (selectId?: string | null) => {
    const list = await listBriefings()
    setRows(list)
    const id = selectId === undefined ? selectedId : selectId
    const row = list.find(r => r.id === id)
    if (row) {
      setSelectedId(row.id)
      setJson(JSON.stringify(row.content, null, 2))
    }
  }, [selectedId])

  // Live preview of the e-mail as the JSON is edited.
  React.useEffect(() => {
    if (!json.trim()) return
    const t = setTimeout(async () => {
      const res = await previewBriefingHtml(json)
      if (res.success && res.data) setPreviewHtml(res.data)
    }, 500)
    return () => clearTimeout(t)
  }, [json])

  async function run<T extends { success: boolean; error?: string; message?: string }>(label: string, fn: () => Promise<T>) {
    setBusy(label)
    setMsg(null)
    try {
      const res = await fn()
      setMsg(res.success ? { ok: true, text: res.message || 'Done.' } : { ok: false, text: res.error || 'Failed.' })
      return res
    } catch (e) {
      setMsg({ ok: false, text: e instanceof Error ? e.message : String(e) })
    } finally {
      setBusy(null)
    }
  }

  function select(row: BriefingRow) {
    setSelectedId(row.id)
    setJson(JSON.stringify(row.content, null, 2))
    setMsg(null)
  }

  async function onGenerate() {
    const res = await run('generate', () => generateBriefingDraft(genDate))
    if (res?.success && 'data' in res && res.data) await refresh((res.data as BriefingRow).id)
  }

  async function onNew() {
    const ref = await getSuggestedRef(genDate)
    setSelectedId(null)
    setJson(JSON.stringify(blankBriefing(genDate, ref), null, 2))
    setMsg({ ok: true, text: 'Blank briefing created. Fill it in (or paste JSON), then Save.' })
  }

  async function onSave() {
    const res = await run('save', () => saveBriefingJson(json, selected?.status ?? 'draft'))
    if (res?.success && 'data' in res && res.data) await refresh((res.data as BriefingRow).id)
  }

  async function onToggle() {
    if (!selected) return
    await run('status', () => setBriefingStatus(selected.id, selected.status === 'published' ? 'draft' : 'published'))
    await refresh()
  }

  async function onSend() {
    if (!selected) return
    if (!confirm(`Publish and e-mail "${selected.title}" to ALL active subscribers? This cannot be undone.`)) return
    await run('send', async () => {
      const saved = await saveBriefingJson(json, selected.status) // make sure latest edits go out
      if (!saved.success) return saved
      return publishAndSendBriefing(selected.id)
    })
    await refresh()
  }

  async function onTest() {
    if (!selected || !testTo) return
    await run('test', async () => {
      const saved = await saveBriefingJson(json, selected.status)
      if (!saved.success) return saved
      return sendTestBriefing(selected.id, testTo)
    })
  }

  async function onDelete() {
    if (!selected || !confirm(`Delete "${selected.title}"?`)) return
    await run('delete', () => deleteBriefing(selected.id))
    await refresh(null)
    setSelectedId(null)
    setJson('')
  }

  return (
    <div className="space-y-6 text-slate-900">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Daily Briefing</h1>
        <p className="text-sm text-slate-500 mt-1">
          The briefing is generated automatically every morning as a draft. Review it here, then publish it on the website and send it to subscribers.
        </p>
      </div>

      <Card className="bg-white border-slate-200 shadow-sm">
        <CardContent className="pt-6 flex flex-wrap items-end gap-3">
          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-600">Briefing date</label>
            <Input type="date" value={genDate} onChange={e => setGenDate(e.target.value)} className="w-44 bg-white" />
          </div>
          <Button onClick={onGenerate} disabled={!!busy} className="bg-amber-500 hover:bg-amber-600 text-white">
            {busy === 'generate' ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Sparkles className="mr-2 h-4 w-4" />}
            {busy === 'generate' ? 'Researching & writing… (can take a few minutes)' : 'Generate with AI'}
          </Button>
          <Button variant="outline" onClick={onNew} disabled={!!busy}>
            <FilePlus2 className="mr-2 h-4 w-4" /> New / paste manually
          </Button>
        </CardContent>
      </Card>

      {msg && (
        <div className={`p-3 rounded-md text-sm border whitespace-pre-wrap ${msg.ok ? 'bg-green-50 border-green-200 text-green-700' : 'bg-rose-50 border-rose-200 text-rose-600'}`}>
          {msg.text}
        </div>
      )}

      <div className="grid grid-cols-1 xl:grid-cols-[260px_1fr] gap-6">
        {/* List */}
        <Card className="bg-white border-slate-200 shadow-sm h-fit">
          <CardHeader className="pb-3 border-b border-slate-100">
            <CardTitle className="text-base">Briefings</CardTitle>
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
                  {r.sent_at && <span className="text-[10px] uppercase tracking-wide px-1.5 py-0.5 rounded bg-blue-100 text-blue-700">sent · {r.sent_count}</span>}
                  {r.source === 'ai' && <span className="text-[10px] uppercase tracking-wide px-1.5 py-0.5 rounded bg-amber-100 text-amber-700">AI</span>}
                </div>
              </button>
            ))}
          </CardContent>
        </Card>

        {/* Editor + preview */}
        {json ? (
          <div className="space-y-4">
            <Card className="bg-white border-slate-200 shadow-sm">
              <CardContent className="pt-6 flex flex-wrap gap-2 items-center">
                <Button onClick={onSave} disabled={!!busy} variant="outline">
                  {busy === 'save' ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Save className="mr-2 h-4 w-4" />} Save
                </Button>
                {selected && (
                  <>
                    <Button onClick={onToggle} disabled={!!busy} variant="outline">
                      <Eye className="mr-2 h-4 w-4" /> {selected.status === 'published' ? 'Unpublish from website' : 'Publish on website'}
                    </Button>
                    <Button onClick={onSend} disabled={!!busy || !!selected.sent_at} className="bg-amber-500 hover:bg-amber-600 text-white">
                      {busy === 'send' ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Send className="mr-2 h-4 w-4" />}
                      {selected.sent_at ? `Sent ${new Date(selected.sent_at).toLocaleString()}` : 'Publish & send to subscribers'}
                    </Button>
                    {selected.status === 'published' && (
                      <a href={`/insights/briefings/${selected.slug}`} target="_blank" rel="noreferrer" className="inline-flex items-center text-sm text-slate-600 hover:text-slate-900 px-2">
                        <ExternalLink className="mr-1 h-4 w-4" /> View on site
                      </a>
                    )}
                    <div className="flex items-center gap-2 ml-auto">
                      <Input type="email" placeholder="test@email.com" value={testTo} onChange={e => setTestTo(e.target.value)} className="w-48 bg-white" />
                      <Button onClick={onTest} disabled={!!busy || !testTo} variant="outline">
                        {busy === 'test' ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Mail className="mr-2 h-4 w-4" />} Send test
                      </Button>
                      <Button onClick={onDelete} disabled={!!busy} variant="destructive" size="icon" title="Delete">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 2xl:grid-cols-2 gap-4">
              <Card className="bg-white border-slate-200 shadow-sm">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Content (JSON)</CardTitle>
                  <CardDescription>Edit any text here; the preview updates live. Set <code>source_url</code> on each item to link the source.</CardDescription>
                </CardHeader>
                <CardContent>
                  <textarea
                    value={json}
                    onChange={e => setJson(e.target.value)}
                    spellCheck={false}
                    data-lenis-prevent
                    className="w-full h-[70vh] font-mono text-xs border border-slate-200 rounded-md p-3 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </CardContent>
              </Card>
              <Card className="bg-white border-slate-200 shadow-sm">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">E-mail preview</CardTitle>
                  <CardDescription>Exactly what subscribers receive.</CardDescription>
                </CardHeader>
                <CardContent>
                  <iframe title="Preview" srcDoc={previewHtml} className="w-full h-[70vh] border border-slate-200 rounded-md bg-white" />
                </CardContent>
              </Card>
            </div>
          </div>
        ) : (
          <Card className="bg-white border-slate-200 shadow-sm">
            <CardContent className="pt-6 text-sm text-slate-500">Select a briefing, generate one with AI, or create one manually.</CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
