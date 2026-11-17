'use client'

import * as React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Loader2, UserPlus, Tag, X, Search, Pencil, Trash2, Plus, Check } from 'lucide-react'
import {
  addEmailsToGroup,
  addIdsToGroup,
  getSubscribersOverview,
  removeFromGroup,
  renameGroup,
  setSubscribersStatus,
  type GroupSummary,
  type Subscriber,
} from '@/actions/subscriber.actions'
import { LANGUAGE_GROUPS, NEWSLETTER_GROUPS, parseEmailList } from '@/lib/subscriber-groups'

type Overview = { subscribers: Subscriber[]; groups: GroupSummary[]; error?: string }
type Msg = { ok: boolean; text: string } | null

const LANGS = new Set(Object.values(LANGUAGE_GROUPS).map(l => l.toLowerCase()))
const NEWSLETTERS = new Set(NEWSLETTER_GROUPS.map(l => l.toLowerCase()))
const isBuiltIn = (g: string) => LANGS.has(g.toLowerCase()) || NEWSLETTERS.has(g.toLowerCase())
const ALL = '__all__'

export default function SubscribersClient({ initial }: { initial: Overview }) {
  const [data, setData] = React.useState<Overview>(initial)
  const [filter, setFilter] = React.useState<string>(ALL)
  const [query, setQuery] = React.useState('')
  const [showInactive, setShowInactive] = React.useState(false)
  const [selected, setSelected] = React.useState<Set<string>>(new Set())
  const [busy, setBusy] = React.useState<string | null>(null)
  const [msg, setMsg] = React.useState<Msg>(initial.error ? { ok: false, text: initial.error } : null)

  // "Add people to a group" panel
  const [pasteEmails, setPasteEmails] = React.useState('')
  const [pasteGroup, setPasteGroup] = React.useState('')
  // bulk action
  const [bulkGroup, setBulkGroup] = React.useState('')
  // per-row "+ group" picker
  const [editingRow, setEditingRow] = React.useState<string | null>(null)
  const [rowGroup, setRowGroup] = React.useState('')

  const groupNames = data.groups.map(g => g.name)
  const visible = data.subscribers.filter(s => {
    if (!showInactive && s.status !== 'active') return false
    if (filter !== ALL && !s.groups.some(g => g.toLowerCase() === filter.toLowerCase())) return false
    if (query && !s.email.toLowerCase().includes(query.toLowerCase())) return false
    return true
  })
  const allVisibleSelected = visible.length > 0 && visible.every(s => selected.has(s.id))
  const activeCount = data.subscribers.filter(s => s.status === 'active').length
  const pasteCount = parseEmailList(pasteEmails).length

  async function reload() {
    const next = await getSubscribersOverview()
    setData(next)
    setSelected(new Set())
  }

  async function run(label: string, fn: () => Promise<{ success: boolean; message?: string; error?: string }>) {
    setBusy(label)
    setMsg(null)
    try {
      const res = await fn()
      setMsg(res.success ? { ok: true, text: res.message || 'Done.' } : { ok: false, text: res.error || 'Failed.' })
      if (res.success) await reload()
      return res.success
    } catch (e) {
      setMsg({ ok: false, text: e instanceof Error ? e.message : String(e) })
      return false
    } finally {
      setBusy(null)
    }
  }

  function toggle(id: string) {
    setSelected(prev => {
      const n = new Set(prev)
      if (n.has(id)) n.delete(id)
      else n.add(id)
      return n
    })
  }

  function toggleAll() {
    setSelected(prev => {
      const n = new Set(prev)
      if (allVisibleSelected) visible.forEach(s => n.delete(s.id))
      else visible.forEach(s => n.add(s.id))
      return n
    })
  }

  return (
    <div className="space-y-6 text-slate-900">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Subscribers & Groups</h1>
        <p className="text-sm text-slate-500 mt-1">
          Group subscribers (by language, newsletter or any custom list) and send newsletters to specific groups from the Newsletters page.
        </p>
      </div>

      {msg && (
        <div className={`p-3 rounded-md text-sm border whitespace-pre-wrap ${msg.ok ? 'bg-green-50 border-green-200 text-green-700' : 'bg-rose-50 border-rose-200 text-rose-600'}`}>
          {msg.text}
        </div>
      )}

      <div className="grid grid-cols-1 xl:grid-cols-[280px_1fr] gap-6">
        {/* Groups */}
        <div className="space-y-6">
          <Card className="bg-white border-slate-200 shadow-sm">
            <CardHeader className="pb-3 border-b border-slate-100">
              <CardTitle className="text-base">Groups</CardTitle>
            </CardHeader>
            <CardContent className="p-2">
              <GroupButton label="All subscribers" count={activeCount} active={filter === ALL} onClick={() => setFilter(ALL)} />
              {data.groups.map(g => (
                <div key={g.name} className="group relative">
                  <GroupButton
                    label={g.name}
                    count={g.active}
                    badge={LANGS.has(g.name.toLowerCase()) ? 'language' : NEWSLETTERS.has(g.name.toLowerCase()) ? 'newsletter' : undefined}
                    active={filter.toLowerCase() === g.name.toLowerCase()}
                    onClick={() => setFilter(g.name)}
                  />
                  {!isBuiltIn(g.name) && (
                    <div className="absolute right-12 top-1/2 -translate-y-1/2 hidden group-hover:flex gap-1">
                      <button
                        title="Rename group"
                        className="p-1 rounded hover:bg-slate-200 text-slate-500"
                        onClick={() => {
                          const n = prompt(`Rename “${g.name}” to:`, g.name)
                          if (n && n.trim() && n !== g.name) run('rename', () => renameGroup(g.name, n)).then(ok => ok && setFilter(n.trim()))
                        }}
                      >
                        <Pencil className="h-3.5 w-3.5" />
                      </button>
                      <button
                        title="Delete group (subscribers are kept)"
                        className="p-1 rounded hover:bg-rose-100 text-rose-500"
                        onClick={() => {
                          if (confirm(`Delete group “${g.name}”? Subscribers are kept; only the group tag is removed.`))
                            run('rename', () => renameGroup(g.name, '')).then(ok => ok && setFilter(ALL))
                        }}
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-white border-slate-200 shadow-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-base flex items-center gap-2"><UserPlus className="h-4 w-4 text-amber-500" /> Add new e-mails</CardTitle>
              <CardDescription>For people who are <strong>not yet</strong> in the list. Paste e-mails in any format and pick a group. To group existing subscribers, use the <strong>+</strong> on their row or tick them in the list.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Input
                list="group-names"
                placeholder="Group, e.g. Korean or Board Members"
                value={pasteGroup}
                onChange={e => setPasteGroup(e.target.value)}
                className="bg-white"
              />
              <datalist id="group-names">{groupNames.map(g => <option key={g} value={g} />)}</datalist>
              <textarea
                value={pasteEmails}
                onChange={e => setPasteEmails(e.target.value)}
                placeholder={'kim@example.com\nlee@example.co.kr, park@example.com'}
                data-lenis-prevent
                className="w-full h-28 text-sm border border-slate-200 rounded-md p-2 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <Button
                className="w-full bg-amber-500 hover:bg-amber-600 text-white"
                disabled={!!busy || !pasteCount || !pasteGroup.trim()}
                onClick={() =>
                  run('paste', () => addEmailsToGroup(pasteEmails, pasteGroup)).then(ok => {
                    if (ok) {
                      setPasteEmails('')
                      setFilter(pasteGroup.trim())
                    }
                  })
                }
              >
                {busy === 'paste' ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <UserPlus className="mr-2 h-4 w-4" />}
                Add {pasteCount || ''} to group
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Subscriber list */}
        <Card className="bg-white border-slate-200 shadow-sm">
          <CardHeader className="pb-3 border-b border-slate-100 space-y-3">
            <div className="flex flex-wrap items-center gap-3">
              <CardTitle className="text-base">
                {filter === ALL ? 'All subscribers' : filter} <span className="text-slate-400 font-normal">({visible.length})</span>
              </CardTitle>
              <div className="relative ml-auto">
                <Search className="h-4 w-4 absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <Input placeholder="Search e-mail" value={query} onChange={e => setQuery(e.target.value)} className="pl-8 w-56 bg-white" />
              </div>
              <label className="text-xs text-slate-500 flex items-center gap-1.5">
                <input type="checkbox" checked={showInactive} onChange={e => setShowInactive(e.target.checked)} /> Show unsubscribed
              </label>
            </div>

            {selected.size === 0 ? (
              <p className="text-xs text-slate-500 bg-slate-50 border border-slate-100 rounded-md px-3 py-2">
                Tip: tick people below to add many to a group at once, or use <strong>+</strong> on a row for one person.
              </p>
            ) : (
              <div className="flex flex-wrap items-center gap-2 bg-amber-50 border border-amber-100 rounded-md p-2">
                <span className="text-sm font-medium px-1">{selected.size} selected</span>
                <Input list="group-names" placeholder="Group name" value={bulkGroup} onChange={e => setBulkGroup(e.target.value)} className="w-48 h-8 bg-white" />
                <Button size="sm" variant="outline" disabled={!!busy || !bulkGroup.trim()} onClick={() => run('bulk', () => addIdsToGroup([...selected], bulkGroup))}>
                  <Tag className="mr-1.5 h-3.5 w-3.5" /> Add to group
                </Button>
                {filter !== ALL && (
                  <Button size="sm" variant="outline" disabled={!!busy} onClick={() => run('bulk', () => removeFromGroup([...selected], filter))}>
                    <X className="mr-1.5 h-3.5 w-3.5" /> Remove from “{filter}”
                  </Button>
                )}
                <Button size="sm" variant="outline" disabled={!!busy} onClick={() => confirm(`Unsubscribe ${selected.size} subscriber(s)?`) && run('bulk', () => setSubscribersStatus([...selected], 'unsubscribed'))}>
                  Unsubscribe
                </Button>
                {showInactive && (
                  <Button size="sm" variant="outline" disabled={!!busy} onClick={() => run('bulk', () => setSubscribersStatus([...selected], 'active'))}>
                    Reactivate
                  </Button>
                )}
                <button className="text-xs text-slate-500 ml-auto px-2" onClick={() => setSelected(new Set())}>Clear</button>
                {busy === 'bulk' && <Loader2 className="h-4 w-4 animate-spin text-amber-500" />}
              </div>
            )}
          </CardHeader>
          <CardContent className="p-0 max-h-[70vh] overflow-y-auto" data-lenis-prevent>
            <table className="w-full text-sm">
              <thead className="sticky top-0 bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
                <tr>
                  <th className="w-10 p-3 text-left"><input type="checkbox" checked={allVisibleSelected} onChange={toggleAll} aria-label="Select all" /></th>
                  <th className="p-3 text-left">E-mail</th>
                  <th className="p-3 text-left">Groups</th>
                  <th className="p-3 text-left hidden md:table-cell">Joined</th>
                </tr>
              </thead>
              <tbody>
                {visible.length === 0 && (
                  <tr><td colSpan={4} className="p-6 text-center text-slate-500">No subscribers here yet.</td></tr>
                )}
                {visible.map(s => (
                  <tr key={s.id} className={`border-t border-slate-100 hover:bg-slate-50 ${selected.has(s.id) ? 'bg-amber-50/60' : ''}`}>
                    <td className="p-3"><input type="checkbox" checked={selected.has(s.id)} onChange={() => toggle(s.id)} aria-label={`Select ${s.email}`} /></td>
                    <td className="p-3">
                      <span className={s.status === 'active' ? '' : 'text-slate-400 line-through'}>{s.email}</span>
                      {s.status !== 'active' && <span className="ml-2 text-[10px] uppercase text-slate-400">{s.status}</span>}
                    </td>
                    <td className="p-3">
                      <div className="flex flex-wrap gap-1">
                        {s.groups.map(g => (
                          <span
                            key={g}
                            className={`inline-flex items-center gap-1 text-[11px] pl-2 pr-1 py-0.5 rounded-full border ${LANGS.has(g.toLowerCase()) ? 'bg-blue-50 border-blue-100 text-blue-700' : NEWSLETTERS.has(g.toLowerCase()) ? 'bg-amber-50 border-amber-200 text-amber-800' : 'bg-slate-50 border-slate-200 text-slate-600'}`}
                          >
                            <button onClick={() => setFilter(g)} title={`Show “${g}”`}>{g}</button>
                            <button
                              title={`Remove from “${g}”`}
                              disabled={!!busy}
                              onClick={() => run('row', () => removeFromGroup([s.id], g))}
                              className="rounded-full hover:bg-rose-100 hover:text-rose-600 p-0.5"
                            >
                              <X className="h-3 w-3" />
                            </button>
                          </span>
                        ))}
                        {editingRow === s.id ? (
                          <form
                            className="inline-flex items-center gap-1"
                            onSubmit={e => {
                              e.preventDefault()
                              if (!rowGroup.trim()) return
                              run('row', () => addIdsToGroup([s.id], rowGroup)).then(() => {
                                setEditingRow(null)
                                setRowGroup('')
                              })
                            }}
                          >
                            <input
                              autoFocus
                              list="group-names"
                              value={rowGroup}
                              onChange={e => setRowGroup(e.target.value)}
                              onKeyDown={e => e.key === 'Escape' && setEditingRow(null)}
                              placeholder="Pick or type group"
                              className="h-6 w-36 text-xs border border-amber-300 rounded px-1.5 focus:outline-none focus:ring-1 focus:ring-amber-500"
                            />
                            <button type="submit" title="Add" disabled={!!busy || !rowGroup.trim()} className="p-0.5 rounded text-green-600 hover:bg-green-50 disabled:opacity-40">
                              <Check className="h-3.5 w-3.5" />
                            </button>
                            <button type="button" title="Cancel" onClick={() => setEditingRow(null)} className="p-0.5 rounded text-slate-400 hover:bg-slate-100">
                              <X className="h-3.5 w-3.5" />
                            </button>
                          </form>
                        ) : (
                          <button
                            title="Add to a group"
                            onClick={() => {
                              setEditingRow(s.id)
                              setRowGroup(filter !== ALL && !s.groups.some(g => g.toLowerCase() === filter.toLowerCase()) ? filter : '')
                            }}
                            className="inline-flex items-center text-[11px] px-1.5 py-0.5 rounded-full border border-dashed border-slate-300 text-slate-500 hover:border-amber-400 hover:text-amber-600"
                          >
                            <Plus className="h-3 w-3" /> group
                          </button>
                        )}
                      </div>
                    </td>
                    <td className="p-3 text-slate-500 hidden md:table-cell whitespace-nowrap">{s.created_at ? new Date(s.created_at).toLocaleDateString() : '—'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function GroupButton({ label, count, active, onClick, badge }: { label: string; count: number; active: boolean; onClick: () => void; badge?: string }) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center justify-between gap-2 px-3 py-2 rounded-md text-sm text-left ${active ? 'bg-amber-50 text-amber-800 font-semibold' : 'hover:bg-slate-50 text-slate-700'}`}
    >
      <span className="truncate">
        {label}
        {badge && <span className={`ml-1.5 text-[10px] uppercase tracking-wide font-normal ${badge === 'language' ? 'text-blue-600' : 'text-amber-600'}`}>{badge}</span>}
      </span>
      <span className="text-xs text-slate-500 tabular-nums">{count}</span>
    </button>
  )
}
