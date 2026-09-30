-- Create leads table
CREATE TABLE IF NOT EXISTS public.leads (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    type VARCHAR(50) NOT NULL, -- 'contact', 'newsletter', 'enquiry'
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    company VARCHAR(255),
    designation VARCHAR(255),
    service VARCHAR(255),
    message TEXT,
    newsletters TEXT[],
    consent BOOLEAN DEFAULT false,
    source_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Secure the table by enabling RLS and keeping it disabled for public access, 
-- since we use the Service Role Key on the backend to insert leads.
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Optional: If you want admins to view leads from the Supabase dashboard
CREATE POLICY "Enable read access for authenticated users only"
    ON public.leads FOR SELECT
    TO authenticated
    USING (true);
