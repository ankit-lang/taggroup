'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Heading from '@tiptap/extension-heading'
import TiptapLink from '@tiptap/extension-link'
import Underline from '@tiptap/extension-underline'
import { useEffect, useState, useRef } from 'react'
import {
  Bold, Italic, Underline as UIcon, Strikethrough,
  Heading2, Heading3, List, ListOrdered,
  Quote, Code, Code2, Minus, Link as LinkIcon,
  Undo, Redo,
} from 'lucide-react'

/* Tiny toolbar button */
function TB({ onClick, active, title, children }: {
  onClick: () => void; active?: boolean; title: string; children: React.ReactNode
}) {
  return (
    <button
      type="button"
      title={title}
      onClick={onClick}
      style={{
        width: 28, height: 28,
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        borderRadius: 3, border: 'none',
        cursor: 'pointer',
        background: active ? '#dde2ea' : 'transparent',
        color: active ? '#1a2332' : '#4a5568',
        flexShrink: 0,
      }}
    >
      {children}
    </button>
  )
}

function Div() {
  return <span style={{ width: 1, height: 18, background: '#d1d9e0', display: 'inline-block', margin: '0 2px' }} />
}

/* ProseMirror content styling injected as a <style> tag */
const EDITOR_CSS = `
  .tag-rte { background: #fff !important; color: #1a2332 !important; min-height: 380px; padding: 20px 24px; outline: none; font-size: 15px; line-height: 1.8; font-family: inherit; }
  .tag-rte > * + * { margin-top: .75em; }
  .tag-rte p { margin: 0 0 .85rem; }
  .tag-rte h2 { font-size: 1.4rem; font-weight: 700; margin: 1.3rem 0 .5rem; border-bottom: 2px solid #e4e8ee; padding-bottom: .3rem; color: #0f172a; }
  .tag-rte h3 { font-size: 1.15rem; font-weight: 700; margin: 1.1rem 0 .4rem; color: #0f172a; }
  .tag-rte ul { list-style: disc; padding-left: 1.5rem; margin: .5rem 0 .85rem; }
  .tag-rte ol { list-style: decimal; padding-left: 1.5rem; margin: .5rem 0 .85rem; }
  .tag-rte li { margin-bottom: .3rem; }
  .tag-rte blockquote { border-left: 3px solid #c9a84c; background: #fffdf0; padding: .7rem 1rem; margin: 1rem 0; border-radius: 0 4px 4px 0; font-style: italic; }
  .tag-rte code { font-family: monospace; background: #f1f5f9; color: #c7254e; padding: .1em .4em; border-radius: 3px; font-size: .875em; }
  .tag-rte pre { background: #0f172a; color: #e2e8f0; padding: 1rem 1.25rem; border-radius: 8px; overflow-x: auto; font-size: .875rem; margin: 1rem 0; }
  .tag-rte pre code { background: none; color: inherit; padding: 0; }
  .tag-rte hr { border: none; border-top: 2px solid #e4e8ee; margin: 1.5rem 0; }
  .tag-rte a { color: #c9a84c; text-decoration: underline; }
  .tag-rte strong { font-weight: 700; }
  .tag-rte u { text-decoration: underline; text-underline-offset: 2px; }
  .tag-rte s { text-decoration: line-through; color: #64748b; }
  .tag-rte p.is-editor-empty:first-child::before { content: attr(data-placeholder); color: #94a3b8; float: left; height: 0; pointer-events: none; }
`

export function RichTextEditor({
  content,
  onChange,
}: {
  content: string
  onChange: (val: string) => void
}) {
  const [showHtml, setShowHtml] = useState(false)
  const [rawHtml, setRawHtml] = useState(content || '')
  const [linkUrl, setLinkUrl] = useState('')
  const [showLink, setShowLink] = useState(false)
  const externalUpdate = useRef(false)
  const linkInputRef = useRef<HTMLInputElement>(null)

  const editor = useEditor({
    extensions: [
      StarterKit.configure({ heading: false }),
      Heading.configure({ levels: [2, 3] }),
      TiptapLink.configure({ openOnClick: false }),
      Underline,
    ],
    content: content || '',
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class: 'tag-rte',
        'data-placeholder': 'Start writing your content here…',
      },
    },
    onUpdate({ editor }) {
      if (externalUpdate.current) return
      const html = editor.getHTML()
      setRawHtml(html)
      onChange(html)
    },
  })

  // Sync when content is set externally (e.g. PDF autofill)
  useEffect(() => {
    if (!editor) return
    const incoming = content || ''
    const current = editor.getHTML()
    if (incoming && incoming !== current && incoming !== '<p></p>') {
      externalUpdate.current = true
      editor.commands.setContent(incoming, { emitUpdate: false })
      setRawHtml(incoming)
      setTimeout(() => { externalUpdate.current = false }, 50)
    }
  }, [content]) // eslint-disable-line

  const applyLink = () => {
    if (!editor || !linkUrl.trim()) return
    editor.chain().focus().setLink({ href: linkUrl.trim() }).run()
    setLinkUrl('')
    setShowLink(false)
  }

  const switchToRich = () => {
    if (editor) {
      externalUpdate.current = true
      editor.commands.setContent(rawHtml, { emitUpdate: false })
      setTimeout(() => { externalUpdate.current = false }, 50)
    }
    setShowHtml(false)
  }

  const switchToHtml = () => {
    if (editor) setRawHtml(editor.getHTML())
    setShowHtml(true)
  }

  if (!editor) return (
    <div style={{ border: '1px solid #e4e8ee', borderRadius: 6, height: 440, background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#9aa5b4', fontSize: 13 }}>
      Loading editor…
    </div>
  )

  return (
    <>
      {/* Scoped editor CSS */}
      <style dangerouslySetInnerHTML={{ __html: EDITOR_CSS }} />

      <div style={{ border: '1px solid #e4e8ee', borderRadius: 6, overflow: 'hidden', background: '#fff', boxShadow: '0 1px 3px rgba(0,0,0,.04)' }}>

        {/* Toolbar */}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 1, padding: '5px 8px', background: '#f8fafc', borderBottom: '1px solid #e4e8ee' }}>
          <TB title="Undo" onClick={() => editor.chain().focus().undo().run()}><Undo size={13} /></TB>
          <TB title="Redo" onClick={() => editor.chain().focus().redo().run()}><Redo size={13} /></TB>
          <Div />
          <TB title="Heading 2" active={editor.isActive('heading', { level: 2 })} onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}><Heading2 size={13} /></TB>
          <TB title="Heading 3" active={editor.isActive('heading', { level: 3 })} onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}><Heading3 size={13} /></TB>
          <Div />
          <TB title="Bold" active={editor.isActive('bold')} onClick={() => editor.chain().focus().toggleBold().run()}><Bold size={13} /></TB>
          <TB title="Italic" active={editor.isActive('italic')} onClick={() => editor.chain().focus().toggleItalic().run()}><Italic size={13} /></TB>
          <TB title="Underline" active={editor.isActive('underline')} onClick={() => editor.chain().focus().toggleUnderline().run()}><UIcon size={13} /></TB>
          <TB title="Strikethrough" active={editor.isActive('strike')} onClick={() => editor.chain().focus().toggleStrike().run()}><Strikethrough size={13} /></TB>
          <TB title="Inline Code" active={editor.isActive('code')} onClick={() => editor.chain().focus().toggleCode().run()}><Code size={13} /></TB>
          <Div />
          <TB title="Bullet List" active={editor.isActive('bulletList')} onClick={() => editor.chain().focus().toggleBulletList().run()}><List size={13} /></TB>
          <TB title="Ordered List" active={editor.isActive('orderedList')} onClick={() => editor.chain().focus().toggleOrderedList().run()}><ListOrdered size={13} /></TB>
          <Div />
          <TB title="Blockquote" active={editor.isActive('blockquote')} onClick={() => editor.chain().focus().toggleBlockquote().run()}><Quote size={13} /></TB>
          <TB title="Code Block" active={editor.isActive('codeBlock')} onClick={() => editor.chain().focus().toggleCodeBlock().run()}><Code2 size={13} /></TB>
          <TB title="Horizontal Rule" onClick={() => editor.chain().focus().setHorizontalRule().run()}><Minus size={13} /></TB>
          <Div />
          <TB
            title="Insert / Remove Link"
            active={editor.isActive('link') || showLink}
            onClick={() => { setShowLink(v => !v); setTimeout(() => linkInputRef.current?.focus(), 60) }}
          >
            <LinkIcon size={13} />
          </TB>
          <Div />
          {/* HTML toggle */}
          <button
            type="button"
            onClick={showHtml ? switchToRich : switchToHtml}
            style={{
              height: 24, padding: '0 8px', borderRadius: 3,
              border: '1px solid #d1d9e0',
              background: showHtml ? '#1a2332' : '#fff',
              color: showHtml ? '#fff' : '#4a5568',
              fontSize: 11, fontWeight: 600, cursor: 'pointer',
              display: 'inline-flex', alignItems: 'center', gap: 4,
            }}
          >
            {showHtml ? '← Rich view' : '<> HTML'}
          </button>
        </div>

        {/* Link input bar */}
        {showLink && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '6px 12px', background: '#fffdf0', borderBottom: '1px solid #e4e8ee' }}>
            <LinkIcon size={13} style={{ color: '#c9a84c', flexShrink: 0 }} />
            <input
              ref={linkInputRef}
              type="url"
              value={linkUrl}
              onChange={e => setLinkUrl(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && applyLink()}
              placeholder="https://example.com"
              style={{ flex: 1, height: 28, padding: '0 8px', border: '1px solid #e4e8ee', borderRadius: 4, fontSize: 13, outline: 'none', color: '#1a2332', background: '#fff' }}
            />
            <button type="button" onClick={applyLink} style={{ padding: '3px 12px', borderRadius: 4, background: '#c9a84c', color: '#fff', border: 'none', fontSize: 12, fontWeight: 600, cursor: 'pointer' }}>Insert</button>
            {editor.isActive('link') && (
              <button type="button" onClick={() => { editor.chain().focus().unsetLink().run(); setShowLink(false) }} style={{ padding: '3px 10px', borderRadius: 4, background: '#f1f5f9', color: '#5a6778', border: '1px solid #e4e8ee', fontSize: 12, cursor: 'pointer' }}>Remove</button>
            )}
            <button type="button" onClick={() => setShowLink(false)} style={{ background: 'none', border: 'none', color: '#9aa5b4', cursor: 'pointer', fontSize: 16 }}>✕</button>
          </div>
        )}

        {/* Editor / HTML source */}
        {showHtml ? (
          <textarea
            value={rawHtml}
            onChange={e => { setRawHtml(e.target.value); onChange(e.target.value) }}
            spellCheck={false}
            style={{
              display: 'block', width: '100%', minHeight: 380, boxSizing: 'border-box',
              padding: '20px 24px', fontFamily: 'monospace', fontSize: 13, lineHeight: 1.65,
              color: '#e2e8f0', background: '#0f172a', border: 'none', outline: 'none', resize: 'vertical',
            }}
          />
        ) : (
          <EditorContent editor={editor} />
        )}

        {/* Status bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 12px', background: '#f8fafc', borderTop: '1px solid #e4e8ee' }}>
          <span style={{ fontSize: 11, color: '#94a3b8' }}>
            {showHtml ? '🖊 HTML source mode' : '✦ Rich text mode'}
          </span>
          <span style={{ fontSize: 11, color: '#94a3b8' }}>
            {rawHtml.replace(/<[^>]+>/g, '').trim().length} chars
          </span>
        </div>
      </div>
    </>
  )
}
