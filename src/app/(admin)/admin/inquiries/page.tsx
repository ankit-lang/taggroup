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

  // Fetch from the contacts table
  const { data: contacts, error: contactsError } = await supabase
    .from('contacts')
    .select('*')
    .order('created_at', { ascending: false });

  if (leadsError) console.error('Error fetching leads:', leadsError);
  if (contactsError) console.error('Error fetching contacts:', contactsError);

  // Normalize and merge data
  const normalizedLeads = (leads || []).map((lead: any) => ({
    ...lead,
    source_table: 'leads'
  }));

  const normalizedContacts = (contacts || []).map((contact: any) => ({
    ...contact,
    type: 'contact', // Force type to contact for badge
    source_table: 'contacts'
  }));

  const inquiries = [...normalizedLeads, ...normalizedContacts].sort((a, b) => 
    new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  );

  return (
    <InquiriesClient initialData={inquiries} />
  );
}
