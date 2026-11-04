import { Briefing, formatBriefingDate, groupItems } from './schema'

const NAVY = '#1a2332'
const GOLD = '#c9a84c'
const INK = '#1f2937'
const MUTED = '#6b7280'
const RULE = '#e5e7eb'
const FONT = "Georgia, 'Times New Roman', serif"
const SANS = "Arial, Helvetica, sans-serif"

function esc(s: string | null | undefined) {
  return (s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function paragraphs(text: string, style: string) {
  return text
    .split(/\n{2,}/)
    .map(p => `<p style="${style}">${esc(p.trim())}</p>`)
    .join('')
}

export function siteUrl() {
  return (process.env.NEXT_PUBLIC_SITE_URL || 'https://taggroup.in').replace(/\/$/, '')
}

/**
 * Renders a briefing as a self-contained, table-based HTML e-mail
 * (inline styles only so it survives Gmail / Outlook).
 * `unsubscribeUrl` is per-recipient; pass null for previews.
 */
export function renderBriefingEmail(b: Briefing, opts: { webUrl: string; unsubscribeUrl: string | null }) {
  const sections = groupItems(b.items)

  const summary = b.executive_summary
    .map(
      (s, i) => `
      <tr>
        <td valign="top" style="width:28px;padding:6px 0;font:700 15px ${SANS};color:${GOLD};">${i + 1}</td>
        <td style="padding:6px 0;font:15px/1.55 ${SANS};color:${INK};">${esc(s)}</td>
      </tr>`
    )
    .join('')

  const body = sections
    .map(section => {
      const groups = section.groups
        .map(group => {
          const sub = group.subsection
            ? `<tr><td style="padding:18px 0 4px;font:700 11px ${SANS};letter-spacing:1.5px;color:${GOLD};text-transform:uppercase;">${esc(group.subsection)}</td></tr>`
            : ''
          const items = group.items
            .map(({ n, item }) => {
              const source = item.source_url
                ? `<a href="${esc(item.source_url)}" style="color:${NAVY};font-weight:700;text-decoration:none;">${esc(item.source_label)} &rarr;</a>`
                : `<span style="color:${NAVY};font-weight:700;">${esc(item.source_label)}</span>`
              return `
              <tr><td style="padding:14px 0 18px;border-bottom:1px solid ${RULE};">
                <div style="font:700 12px ${SANS};color:${MUTED};letter-spacing:.5px;">${String(n).padStart(2, '0')} &nbsp;·&nbsp; ${esc(item.category)}</div>
                <h3 style="margin:6px 0 10px;font:700 19px/1.3 ${FONT};color:${NAVY};">${esc(item.title)}</h3>
                ${paragraphs(item.body, `margin:0 0 12px;font:15px/1.6 ${SANS};color:${INK};`)}
                <p style="margin:0 0 10px;font:15px/1.6 ${SANS};color:${INK};"><strong style="color:${NAVY};">Why It Matters:</strong> ${esc(item.why_it_matters)}</p>
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 10px;"><tr>
                  <td style="background:#faf6ea;border-left:3px solid ${GOLD};padding:10px 14px;font:15px/1.6 ${SANS};color:${INK};">
                    <strong style="color:${NAVY};">TAG Action Point:</strong> ${esc(item.action_point)}
                  </td>
                </tr></table>
                <p style="margin:0;font:13px ${SANS};color:${MUTED};">Source: ${source}</p>
              </td></tr>`
            })
            .join('')
          return sub + items
        })
        .join('')

      return `
      <tr><td style="padding:28px 32px 0;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
          <tr><td style="padding-bottom:6px;border-bottom:2px solid ${NAVY};font:700 20px ${FONT};color:${NAVY};">${esc(section.title)}</td></tr>
          ${groups}
        </table>
      </td></tr>`
    })
    .join('')

  const unsubscribe = opts.unsubscribeUrl
    ? ` &nbsp;|&nbsp; <a href="${esc(opts.unsubscribeUrl)}" style="color:#9ca3af;">Unsubscribe</a>`
    : ''

  return `<!doctype html>
<html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>TAG Daily Briefing</title></head>
<body style="margin:0;padding:0;background:#f3f4f6;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f3f4f6;"><tr><td align="center" style="padding:24px 12px;">
<table role="presentation" width="640" cellpadding="0" cellspacing="0" style="max-width:640px;width:100%;background:#ffffff;">

  <tr><td style="padding:10px 32px;background:#ffffff;font:12px ${SANS};color:${MUTED};text-align:right;">
    <a href="${esc(opts.webUrl)}" style="color:${MUTED};">View in browser</a>
  </td></tr>

  <tr><td style="background:${NAVY};padding:28px 32px;">
    <div style="font:700 13px ${SANS};letter-spacing:3px;color:${GOLD};">TAG</div>
    <div style="margin-top:6px;font:700 30px/1.15 ${FONT};color:#ffffff;">TAG Daily Briefing</div>
    <div style="margin-top:6px;font:700 11px ${SANS};letter-spacing:2px;color:${GOLD};">BOARDROOM BRIEF &nbsp;·&nbsp; GLOBAL CITY NETWORK</div>
    <div style="margin-top:14px;font:13px/1.5 ${SANS};color:#d1d5db;">${esc(formatBriefingDate(b.date))} &nbsp;|&nbsp; ${b.topics.map(esc).join(' · ')}</div>
    <div style="margin-top:4px;font:12px ${SANS};color:#9ca3af;">${esc(b.ref)}</div>
  </td></tr>

  <tr><td style="padding:28px 32px 0;">
    <div style="font:700 20px ${FONT};color:${NAVY};padding-bottom:6px;border-bottom:2px solid ${NAVY};">Executive Summary</div>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:10px;">${summary}</table>
  </td></tr>

  ${body}

  <tr><td style="padding:28px 32px;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr>
      <td style="background:${NAVY};padding:20px 22px;">
        <div style="font:700 16px ${FONT};color:${GOLD};margin-bottom:8px;">Key Business Considerations</div>
        ${paragraphs(b.key_considerations, `margin:0;font:15px/1.6 ${SANS};color:#e5e7eb;`)}
      </td>
    </tr></table>
  </td></tr>

  <tr><td style="padding:0 32px 24px;font:12px/1.6 ${SANS};color:${MUTED};">
    <p style="margin:0 0 12px;font-weight:700;color:${NAVY};">International Presence &nbsp;|&nbsp; UAE &nbsp;|&nbsp; Singapore &nbsp;|&nbsp; Mauritius &nbsp;|&nbsp; Hong Kong</p>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr>
      <td valign="top" style="width:33%;padding-right:10px;font:12px/1.6 ${SANS};color:${MUTED};"><strong style="color:${INK};">Gurgaon — Sector 15</strong><br>745-P, Lower Ground Floor<br>Sector 15-B, Gurgaon – 122001</td>
      <td valign="top" style="width:33%;padding-right:10px;font:12px/1.6 ${SANS};color:${MUTED};"><strong style="color:${INK};">Gurgaon — Digital Greens</strong><br>18-08, Tower B, Emaar Digital Greens<br>Golf Course Extension Road<br>Gurgaon – 122102</td>
      <td valign="top" style="font:12px/1.6 ${SANS};color:${MUTED};"><strong style="color:${INK};">Key Contact</strong><br>Gaurav Sharma, Partner<br>+91 88607 16777<br><a href="mailto:gaurav@tagadvisors.in" style="color:${NAVY};">gaurav@tagadvisors.in</a><br><a href="mailto:info@taggroup.in" style="color:${NAVY};">info@taggroup.in</a></td>
    </tr></table>
    <p style="margin:18px 0 0;padding-top:14px;border-top:1px solid ${RULE};font:11px/1.6 ${SANS};color:#9ca3af;">
      This briefing is prepared from publicly available information for general client knowledge and benefit. It does not constitute legal, tax, regulatory, investment or transaction advice. Facts and implications should be independently assessed against the circumstances of each matter before action is taken.
    </p>
    <p style="margin:10px 0 0;font:11px ${SANS};color:#9ca3af;">You are receiving this because you subscribed to TAG Insights.${unsubscribe}</p>
  </td></tr>

</table>
</td></tr></table>
</body></html>`
}
