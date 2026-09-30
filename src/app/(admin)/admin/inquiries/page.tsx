import React from 'react';
import { createClient } from '@/lib/supabase/server';
import InquiriesClient from './inquiries-client';

export default async function InquiriesPage() {
  const supabase = await createClient();
  
  // Fetch from the leads table
  const { data: leads, error: leadsError } = await supabase
    .from('leads')
    .select('*')
    .order('created_at', { ascending: false });

  if (leadsError) console.error('Error fetching leads:', leadsError);

  // Normalize and merge data
  const normalizedLeads = (leads || []).map((lead: any) => ({
    ...lead,
    source_table: 'leads'
  }));

  const inquiries = [...normalizedLeads].sort((a, b) => 
    new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  );

  return (
    <InquiriesClient initialData={inquiries} />
  );
}
