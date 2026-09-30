'use server'

import { createClient } from '@/lib/supabase/server'
import { sendEmail } from '@/lib/email'

export async function dispatchNewsletter(formData: FormData) {
  const supabase = await createClient()
  
  // Verify Admin Access
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return { success: false, error: 'Unauthorized' }
    
  const { data: profile } = await supabase.from('profiles').select('role').eq('id', user.id).single()
  if (profile?.role !== 'admin') return { success: false, error: 'Forbidden' }

  const subject = formData.get('subject') as string
  const content = formData.get('content') as string
  const image_url = formData.get('image_url') as string || null

  if (!subject || !content) return { success: false, error: 'Subject and content are required.' }

  // 1. Fetch all active subscribers
  const { data: subscribers, error: subError } = await supabase
    .from('subscribers')
    .select('email')
    .eq('status', 'active')

  if (subError) return { success: false, error: subError.message }
  if (!subscribers || subscribers.length === 0) return { success: false, error: 'No active subscribers found.' }

  // 2. Format HTML payload
  const htmlPayload = image_url 
    ? `<div style="max-width: 600px; margin: 0 auto; font-family: sans-serif;">
         <img src="${image_url}" alt="Newsletter Header" style="width: 100%; height: auto; border-radius: 8px; margin-bottom: 24px;" />
         ${content}
       </div>`
    : `<div style="max-width: 600px; margin: 0 auto; font-family: sans-serif;">${content}</div>`

  // 3. Dispatch Emails
  const emails = subscribers.map(sub => sub.email)
  const emailResult = await sendEmail({
    to: emails,
    subject,
    html: htmlPayload
  })

  if (!emailResult.success) {
    return { success: false, error: 'Failed to dispatch emails' }
  }

  // 3. Save Newsletter Record
  await supabase
    .from('newsletters')
    .insert([{ subject, body: content, image_url, sent_at: new Date().toISOString() }])

  return { success: true, message: `Dispatched to ${emails.length} subscribers.` }
}

export async function subscribeNewsletter(formData: FormData) {
  const email = formData.get('email') as string
  const categoriesStr = formData.get('categories') as string
  
  if (!email) {
    return { success: false, message: 'Email is required.' }
  }

  let categories = []
  try {
    if (categoriesStr) categories = JSON.parse(categoriesStr)
  } catch (e) {}

  const supabase = await createClient()
  
  // Check if already subscribed
  const { data: existing } = await supabase
    .from('subscribers')
    .select('id')
    .eq('email', email)
    .single()
    
  if (existing) {
    // Update categories if already exists
    await supabase.from('subscribers').update({ categories }).eq('email', email)
    return { success: true, message: 'Your subscription has been updated!' }
  }

  // Insert new
  const { error } = await supabase
    .from('subscribers')
    .insert([{ email, categories, status: 'active' }])

  if (error) {
    console.error('Newsletter Subscribe Error:', error)
    return { success: false, message: error.message || 'Failed to subscribe. Please try again.' }
  }

  return { success: true, message: 'Successfully subscribed to TAG Insights!' }
}

export async function getSubscriberStats() {
  const supabase = await createClient()
  
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return { count: 0, recent: [] }
    
  const { data: profile } = await supabase.from('profiles').select('role').eq('id', user.id).single()
  if (profile?.role !== 'admin') return { count: 0, recent: [] }

  const { count, error: countError } = await supabase
    .from('subscribers')
    .select('*', { count: 'exact', head: true })
    .eq('status', 'active')

  const { data: recent, error: recentError } = await supabase
    .from('subscribers')
    .select('email, created_at')
    .eq('status', 'active')
    .order('created_at', { ascending: false })
    .limit(5)

  if (countError || recentError) {
    return { count: 0, recent: [] }
  }

  return { count: count || 0, recent: recent || [] }
}
