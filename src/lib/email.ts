import nodemailer from 'nodemailer'

const port = parseInt(process.env.EMAIL_PORT || '465')
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || 'smtp.gmail.com',
  port: port,
  secure: port === 465, // true for 465, false for other ports like 587
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
})

function htmlToText(html: string) {
  return html
    .replace(/<(style|script|head|title)[^>]*>[\s\S]*?<\/\1>/gi, '')
    .replace(/<a [^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi, '$2 ($1)')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/(p|div|h[1-6]|li|tr|table)>/gi, '\n')
    .replace(/<li[^>]*>/gi, '• ')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&rarr;/g, '→')
    .replace(/[ \t]+\n/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim()
}

export async function sendEmail({
  to,
  subject,
  html,
  bcc,
  headers,
}: {
  to: string | string[]
  subject: string
  html: string
  bcc?: string[]
  headers?: Record<string, string>
}) {
  try {
    // Some strict SMTP servers reject emails with 'bare CR' (\r without \n)
    const safeHtml = html.replace(/\r\n/g, '\n').replace(/\r/g, '\n')
    const safeSubject = subject.replace(/\r\n/g, '\n').replace(/\r/g, '\n')

    const info = await transporter.sendMail({
      from: `"TAG Advisors" <${process.env.EMAIL_USER}>`,
      to: Array.isArray(to) ? to.join(', ') : to,
      subject: safeSubject,
      html: safeHtml,
      // Plain-text alternative: HTML-only mail scores worse with spam filters.
      text: htmlToText(safeHtml),
      replyTo: process.env.REPLY_TO_EMAIL || 'contact@taggroup.in',
      ...(bcc?.length ? { bcc: bcc.join(', ') } : {}),
      ...(headers ? { headers } : {}),
    })
    return { success: true, info }
  } catch (error) {
    console.error('Error sending email:', error)
    return { success: false, error }
  }
}
