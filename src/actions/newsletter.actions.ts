'use server'

import { createClient, getServerUser } from '@/lib/supabase/server'
import { sendEmail } from '@/lib/email'
import { getLocale } from '@/lib/get-locale'
import { hasGroup, languageGroup, mergeGroups } from '@/lib/subscriber-groups'

export async function dispatchNewsletter(formData: FormData) {
  const supabase = await createClient()
  
  // Verify Admin Access
  const user = await getServerUser(supabase)
  if (!user) return { success: false, error: 'Your session has expired. Please sign out and sign in again.' }
    
  const { data: profile } = await supabase.from('profiles').select('role').eq('id', user.id).maybeSingle()
  if (profile && profile.role?.toLowerCase() === 'user') return { success: false, error: 'Forbidden' }

  const subject = formData.get('subject') as string
  const content = formData.get('content') as string
  const image_url = formData.get('image_url') as string || null

  if (!subject || !content) return { success: false, error: 'Subject and content are required.' }

  // Audience: empty = everyone; otherwise subscribers in ANY of the chosen groups.
  let groups: string[] = []
  try { groups = JSON.parse((formData.get('groups') as string) || '[]') } catch {}

  // 1. Fetch active subscribers (filtered by group in code so it works whether
  //    `categories` is stored as text[] or json)
  const { data: allActive, error: subError } = await supabase
    .from('subscribers')
    .select('email, categories')
    .eq('status', 'active')

  if (subError) return { success: false, error: subError.message }
  const subscribers = groups.length
    ? (allActive || []).filter(s => groups.some(g => hasGroup(s.categories, g)))
    : allActive || []
  if (subscribers.length === 0) {
    return { success: false, error: groups.length ? `No active subscribers in: ${groups.join(', ')}.` : 'No active subscribers found.' }
  }

  // 2. Format HTML payload
  const htmlPayload = image_url 
    ? `<div style="max-width: 600px; margin: 0 auto; font-family: sans-serif;">
         <img src="${image_url}" alt="Newsletter Header" style="width: 100%; height: auto; border-radius: 8px; margin-bottom: 24px;" />
         ${content}
       </div>`
    : `<div style="max-width: 600px; margin: 0 auto; font-family: sans-serif;">${content}</div>`

  // 3. Dispatch Emails — one message per subscriber, addressed To: them.
  // (A single BCC blast is often spam-filtered, and one bad address could
  // fail the whole send without telling us who missed out.)
  const emails = [...new Set(subscribers.map(sub => sub.email).filter(Boolean))]
  const failed: string[] = []
  const queue = [...emails]
  await Promise.all(
    Array.from({ length: 3 }, async () => {
      for (let to = queue.shift(); to; to = queue.shift()) {
        const res = await sendEmail({ to, subject, html: htmlPayload })
        if (!res.success) failed.push(to)
      }
    })
  )
  const sent = emails.length - failed.length

  if (sent === 0) {
    return { success: false, error: `Failed to send to all ${emails.length} subscriber(s). Check the SMTP settings (EMAIL_HOST / EMAIL_USER / EMAIL_PASS).` }
  }

  // 3. Save Newsletter Record
  await supabase
    .from('newsletters')
    .insert([{ subject, body: content, image_url, sent_at: new Date().toISOString() }])

  return {
    success: true,
    message: failed.length
      ? `Sent to ${sent} of ${emails.length} subscribers${groups.length ? ` in ${groups.join(', ')}` : ''}. Failed: ${failed.join(', ')}`
      : `Sent to ${sent} subscriber(s)${groups.length ? ` in ${groups.join(', ')}` : ''}: ${emails.join(', ')}`,
  }
}

export async function subscribeNewsletter(formData: FormData) {
  const email = (formData.get('email') as string || '').trim().toLowerCase()
  const categoriesStr = formData.get('categories') as string

  if (!email) {
    return { success: false, message: 'Email is required.' }
  }

  let categories: string[] = []
  try {
    if (categoriesStr) categories = JSON.parse(categoriesStr)
  } catch {}
  // Tag the site language they subscribed in (English / Korean)
  categories = [...categories, languageGroup(await getLocale())]

  const supabase = await createClient()

  const { data: existing } = await supabase
    .from('subscribers')
    .select('id, categories')
    .eq('email', email)
    .maybeSingle()

  if (existing) {
    // Merge so groups an admin assigned are kept
    await supabase.from('subscribers').update({ categories: mergeGroups(existing.categories, categories), status: 'active' }).eq('id', existing.id)
    return { success: true, message: 'Your subscription has been updated!' }
  }

  const { error } = await supabase
    .from('subscribers')
    .insert([{ email, categories: mergeGroups([], categories), status: 'active' }])

  if (error) {
    console.error('Newsletter Subscribe Error:', error)
    return { success: false, message: error.message || 'Failed to subscribe. Please try again.' }
  }

  return { success: true, message: 'Successfully subscribed to TAG Insights!' }
}

export async function getSubscriberStats() {
  const supabase = await createClient()
  
  const user = await getServerUser(supabase)
  if (!user) return { count: 0, recent: [] }
    
  const { data: profile } = await supabase.from('profiles').select('role').eq('id', user.id).maybeSingle()
  if (profile && profile.role?.toLowerCase() === 'user') return { count: 0, recent: [] }

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
