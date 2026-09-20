'use server'

import { createClient } from '@/lib/supabase/server'
import { sendEmail } from '@/lib/email'

export async function submitContactForm(formData: FormData) {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const phone = formData.get('phone') as string
  const company = formData.get('company') as string
  const message = formData.get('message') as string

  if (!name || !message) {
    return { success: false, error: 'Name and Message are required.' }
  }

  if (!email && !phone) {
    return { success: false, error: 'Please provide either an Email address or a Phone number.' }
  }

  const supabase = await createClient()

  // Insert into DB
  const { error: dbError } = await supabase
    .from('contacts')
    // Ensure the DB table is updated to handle 'phone' and 'company' if necessary.
    .insert([{ name, email: email || null, phone: phone || null, company: company || null, message, status: 'pending' }])

  if (dbError) {
    console.error('Contact DB Insert Error:', dbError)
    return { success: false, error: dbError.message || 'Failed to save contact.' }
  }

  // Dispatch Email Notification to Admin
  const adminEmail = process.env.ADMIN_EMAIL || 'info@taggroup.in'
  
  try {
    await sendEmail({
      to: adminEmail,
      subject: `New Contact Submission from ${name}`,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email || 'Not provided'}</p>
             <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
             <p><strong>Company:</strong> ${company || 'Not provided'}</p>
             <p><strong>Message:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>`,
    })
  } catch (emailErr) {
    console.error('Email send error:', emailErr)
    // Don't fail the whole submission just because email failed (useful for dev environments without SMTP)
    return { success: true, message: 'Message saved, but email notification failed to send.' }
  }

  return { success: true, message: 'Message sent successfully!' }
}
