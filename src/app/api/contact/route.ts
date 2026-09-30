import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import nodemailer from 'nodemailer';
import { createClient } from '@supabase/supabase-js';

const ContactSchema = z.object({
  type: z.enum(['contact', 'newsletter', 'enquiry']),
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional().nullable(),
  company: z.string().optional().nullable(),
  designation: z.string().optional().nullable(),
  service: z.string().optional().nullable(),
  message: z.string().optional().nullable(),
  newsletters: z.array(z.string()).optional().nullable(),
  consent: z.boolean().optional().nullable(),
  sourceUrl: z.string().optional().nullable(),
});

// Configure Nodemailer transporter
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || process.env.SMTP_HOST || 'smtp.gmail.com',
  port: Number(process.env.EMAIL_PORT || process.env.SMTP_PORT) || 587,
  secure: Number(process.env.EMAIL_PORT) === 465 || process.env.SMTP_SECURE === 'true', 
  auth: {
    user: process.env.EMAIL_USER || process.env.SMTP_USER,
    pass: process.env.EMAIL_PASS || process.env.SMTP_PASS,
  },
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    
    // Validate request body
    const validatedData = ContactSchema.parse(body);
    
    // Basic honeypot check (you can pass a hidden field like `_honey` from the client if needed)
    if (body._honey) {
      return NextResponse.json({ success: true, message: 'Received' }, { status: 200 }); // silently ignore bots
    }

    // 1. Dual Write: Supabase Ingestion
    let supabaseSuccess = false;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    
    if (process.env.NEXT_PUBLIC_SUPABASE_URL && supabaseKey) {
      const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL,
        supabaseKey
      );
      
      const { error: dbError } = await supabase.from('leads').insert([{
        type: validatedData.type,
        name: validatedData.name,
        email: validatedData.email,
        phone: validatedData.phone || null,
        company: validatedData.company || null,
        designation: validatedData.designation || null,
        service: validatedData.service || null,
        message: validatedData.message || null,
        newsletters: validatedData.newsletters || [],
        consent: validatedData.consent || false,
        source_url: validatedData.sourceUrl || null,
      }]);
      
      if (dbError) {
        console.error('Supabase write error:', dbError);
      } else {
        supabaseSuccess = true;
      }

      // Also add to active subscribers if they requested newsletters
      if (validatedData.newsletters && validatedData.newsletters.length > 0) {
        const { data: existing } = await supabase.from('subscribers').select('id').eq('email', validatedData.email).single();
        if (existing) {
          await supabase.from('subscribers').update({ categories: validatedData.newsletters }).eq('email', validatedData.email);
        } else {
          await supabase.from('subscribers').insert([{ email: validatedData.email, categories: validatedData.newsletters, status: 'active' }]);
        }
      }
    } else {
      console.warn('Supabase credentials missing. Skipping DB insert.');
    }

    // 2. Email Dispatch
    let emailSuccess = false;
    const emailUser = process.env.EMAIL_USER || process.env.SMTP_USER;
    
    if (emailUser && process.env.ADMIN_EMAIL) {
      const htmlContent = `
        <h2>New ${validatedData.type.toUpperCase()} Submission</h2>
        <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
          <tr><td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Name:</strong></td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${validatedData.name}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Email:</strong></td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${validatedData.email}</td></tr>
          ${validatedData.phone ? `<tr><td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Phone:</strong></td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${validatedData.phone}</td></tr>` : ''}
          ${validatedData.company ? `<tr><td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Company:</strong></td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${validatedData.company}</td></tr>` : ''}
          ${validatedData.designation ? `<tr><td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Designation:</strong></td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${validatedData.designation}</td></tr>` : ''}
          ${validatedData.service ? `<tr><td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Service:</strong></td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${validatedData.service}</td></tr>` : ''}
          ${validatedData.sourceUrl ? `<tr><td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Source URL:</strong></td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${validatedData.sourceUrl}</td></tr>` : ''}
        </table>
        ${validatedData.message ? `<div style="margin-top: 16px;"><strong>Message:</strong><p style="white-space: pre-wrap; background: #f9f9f9; padding: 12px; border-radius: 4px;">${validatedData.message}</p></div>` : ''}
        ${validatedData.newsletters && validatedData.newsletters.length > 0 ? `<div style="margin-top: 16px;"><strong>Newsletters requested:</strong><ul>${validatedData.newsletters.map(n => `<li>${n}</li>`).join('')}</ul></div>` : ''}
      `;

      try {
        await transporter.sendMail({
          from: process.env.FROM_EMAIL || emailUser,
          to: process.env.ADMIN_EMAIL,
          subject: `New Lead [${validatedData.type}]: ${validatedData.name}`,
          html: htmlContent,
          replyTo: validatedData.email,
        });
        emailSuccess = true;
      } catch (err) {
        console.error('Email send error:', err);
      }
    } else {
      console.warn('SMTP credentials missing. Skipping email dispatch.');
      // Simulate success for local testing if env is missing
      emailSuccess = true;
    }

    if (!supabaseSuccess && !emailSuccess && (process.env.NEXT_PUBLIC_SUPABASE_URL || emailUser)) {
      return NextResponse.json({ success: false, error: 'Failed to process submission' }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: 'Your inquiry has been received.' }, { status: 200 });
  } catch (error) {
    console.error('Contact API Error:', error);
    if (error instanceof z.ZodError) {
      return NextResponse.json({ success: false, error: (error as any).errors.map((e: any) => e.message).join(', ') }, { status: 400 });
    }
    return NextResponse.json({ success: false, error: 'An unexpected error occurred' }, { status: 500 });
  }
}
