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

export async function sendEmail({
  to,
  subject,
  html,
}: {
  to: string | string[]
  subject: string
  html: string
}) {
  try {
    const info = await transporter.sendMail({
      from: `"TAG Advisors" <${process.env.EMAIL_USER}>`,
      to: Array.isArray(to) ? to.join(', ') : to,
      subject,
      html,
    })
    return { success: true, info }
  } catch (error) {
    console.error('Error sending email:', error)
    return { success: false, error }
  }
}
