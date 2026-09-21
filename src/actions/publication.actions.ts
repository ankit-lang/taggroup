'use server'

import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'

export async function getPublications({ search = '', category = '', sort = 'desc' }) {
  const supabase = await createClient()
  
  let query = supabase.from('publications').select('*').eq('status', 'published')
  
  if (search) {
    query = query.ilike('title', `%${search}%`)
  }
  
  if (category && category !== 'All') {
    query = query.eq('category', category)
  }

  query = query.order('created_at', { ascending: sort === 'asc' })

  const { data, error } = await query
  if (error) {
    console.error('Error fetching publications:', error.message || error)
    return []
  }
  return data
}

export async function getPublicationBySlug(slug: string) {
  const supabase = await createClient()
  const { data, error } = await supabase.from('publications').select('*').eq('slug', slug).single()
  
  if (error) {
    console.error('Error fetching publication:', error)
    return null
  }
  return data
}

export async function createPublication(formData: FormData) {
  const supabase = await createClient()
  
  // Verify Session & Role
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return { success: false, error: 'Unauthorized' }
    
  const { data: profile } = await supabase.from('profiles').select('role').eq('id', user.id).single()
  if (profile?.role !== 'admin') return { success: false, error: 'Forbidden' }

  // Extract data
  const title = formData.get('title') as string
  const content = formData.get('content') as string
  const category = formData.get('category') as string || 'General'
  const status = formData.get('status') as string || 'published'
  const image_url = formData.get('image_url') as string || null
  const meta_title = formData.get('meta_title') as string || title
  const meta_description = formData.get('meta_description') as string || ''
  const meta_keywords = formData.get('meta_keywords') as string || ''
  const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '')

  if (!title || !content) return { success: false, error: 'Title and content are required.' }

  // Insert
  const { data, error } = await supabase
    .from('publications')
    .insert([{ 
      title, 
      slug, 
      content, 
      category, 
      image_url, 
      meta_title, 
      meta_description, 
      meta_keywords, 
      author_id: user.id, 
      status 
    }])
    .select('*')

  if (error) {
    console.error(error)
    return { success: false, error: error.message }
  }

  revalidatePath('/publications')
  revalidatePath('/admin/publications')
  
  return { success: true, data }
}

export async function deletePublication(id: string) {
  const supabase = await createClient()
  
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return { success: false, error: 'Unauthorized' }
    
  const { data: profile } = await supabase.from('profiles').select('role').eq('id', user.id).single()
  if (profile?.role !== 'admin') return { success: false, error: 'Forbidden' }

  const { error } = await supabase.from('publications').delete().eq('id', id)
  if (error) return { success: false, error: error.message }

  revalidatePath('/publications')
  revalidatePath('/admin/publications')
  
  return { success: true }
}
