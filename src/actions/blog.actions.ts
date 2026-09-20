'use server'

import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'

export async function getBlogs({ search = '', category = '', sort = 'desc' }) {
  const supabase = await createClient()
  
  let query = supabase.from('blogs').select(`*, profiles(role)`).eq('status', 'published')
  
  if (search) {
    query = query.ilike('title', `%${search}%`)
  }
  
  if (category && category !== 'All') {
    query = query.eq('category', category)
  }

  query = query.order('created_at', { ascending: sort === 'asc' })

  const { data, error } = await query
  if (error) {
    console.error('Error fetching blogs:', error.message || error)
    return []
  }
  return data
}

export async function getBlogBySlug(slug: string) {
  const supabase = await createClient()
  const { data, error } = await supabase.from('blogs').select('*').eq('slug', slug).single()
  
  if (error) {
    console.error('Error fetching blog:', error)
    return null
  }
  return data
}

export async function createBlogPost(formData: FormData) {
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
  const status = formData.get('status') as string || 'draft'
  const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '')

  if (!title || !content) return { success: false, error: 'Title and content are required.' }

  // Insert
  const { data, error } = await supabase
    .from('blogs')
    .insert([{ title, slug, content, category, author_id: user.id, status }])
    .select()

  if (error) {
    console.error(error)
    return { success: false, error: error.message }
  }

  revalidatePath('/insights')
  revalidatePath('/admin/blog')
  
  return { success: true, data }
}

export async function deleteBlogPost(id: string) {
  const supabase = await createClient()
  
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return { success: false, error: 'Unauthorized' }
    
  const { data: profile } = await supabase.from('profiles').select('role').eq('id', user.id).single()
  if (profile?.role !== 'admin') return { success: false, error: 'Forbidden' }

  const { error } = await supabase.from('blogs').delete().eq('id', id)
  if (error) return { success: false, error: error.message }

  revalidatePath('/blog')
  revalidatePath('/admin/blog')
  
  return { success: true }
}
