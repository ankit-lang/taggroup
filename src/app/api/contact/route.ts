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
      // ---------------------------------------------------------
      // A. Professional HTML Template for Admin Notification
      // ---------------------------------------------------------
      const adminHtmlContent = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e4e8ee; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
        <div style="background-color: #1a2332; padding: 24px; text-align: center;">
          <h2 style="color: #ffffff; margin: 0; font-size: 20px; font-weight: 600; letter-spacing: 0.5px;">New ${validatedData.type.toUpperCase()} Submission</h2>
        </div>
        <div style="padding: 32px; background-color: #ffffff;">
          <p style="color: #5a6778; font-size: 15px; margin-bottom: 24px;">A new inquiry has been submitted via the TAG Group website.</p>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f0f2f5; width: 140px; color: #7a8898; font-size: 14px; font-weight: 500;">Name</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f0f2f5; color: #1a2332; font-size: 15px; font-weight: 600;">${validatedData.name}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f0f2f5; color: #7a8898; font-size: 14px; font-weight: 500;">Email</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f0f2f5; color: #1a2332; font-size: 15px;">
                <a href="mailto:${validatedData.email}" style="color: #c9a84c; text-decoration: none;">${validatedData.email}</a>
              </td>
            </tr>
            ${validatedData.phone ? `
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f0f2f5; color: #7a8898; font-size: 14px; font-weight: 500;">Phone</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f0f2f5; color: #1a2332; font-size: 15px;">${validatedData.phone}</td>
            </tr>` : ''}
            ${validatedData.company ? `
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f0f2f5; color: #7a8898; font-size: 14px; font-weight: 500;">Company</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f0f2f5; color: #1a2332; font-size: 15px;">${validatedData.company}</td>
            </tr>` : ''}
            ${validatedData.service ? `
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f0f2f5; color: #7a8898; font-size: 14px; font-weight: 500;">Service</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f0f2f5; color: #1a2332; font-size: 15px;">${validatedData.service}</td>
            </tr>` : ''}
            ${validatedData.sourceUrl ? `
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f0f2f5; color: #7a8898; font-size: 14px; font-weight: 500;">Source URL</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f0f2f5; color: #1a2332; font-size: 14px;">
                <a href="${validatedData.sourceUrl}" style="color: #c9a84c; text-decoration: none;">View Page</a>
              </td>
            </tr>` : ''}
          </table>

          ${validatedData.message ? `
          <div style="margin-top: 32px;">
            <h3 style="color: #1a2332; font-size: 16px; margin-bottom: 12px; font-weight: 600;">Message / Details</h3>
            <div style="background-color: #f8fafc; border-left: 4px solid #c9a84c; padding: 16px; border-radius: 0 8px 8px 0; color: #334155; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">
              ${validatedData.message}
            </div>
          </div>` : ''}
          ${validatedData.newsletters && validatedData.newsletters.length > 0 ? `
          <div style="margin-top: 32px;">
            <h3 style="color: #1a2332; font-size: 16px; margin-bottom: 12px; font-weight: 600;">Newsletters requested:</h3>
            <ul style="color: #334155; font-size: 15px;">${validatedData.newsletters.map(n => `<li>${n}</li>`).join('')}</ul>
          </div>` : ''}
        </div>
        <div style="background-color: #f0f2f5; padding: 16px; text-align: center; color: #7a8898; font-size: 12px;">
          This is an automated message from the TAG Group Contact System.
        </div>
      </div>
      `;

      // ---------------------------------------------------------
      // B. Professional HTML Template for User Auto-Reply
      // ---------------------------------------------------------
      const userHtmlContent = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e4e8ee; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
        <div style="background-color: #1a2332; padding: 32px 24px; text-align: center;">
          <h1 style="color: #c9a84c; margin: 0 0 12px 0; font-size: 28px; font-weight: 700; letter-spacing: 1px;">TAG Advisors</h1>
          <h2 style="color: #ffffff; margin: 0; font-size: 18px; font-weight: 400; opacity: 0.9;">Thank you for getting in touch</h2>
        </div>
        <div style="padding: 40px 32px; background-color: #ffffff;">
          <p style="color: #1a2332; font-size: 16px; font-weight: 600; margin-top: 0;">Dear ${validatedData.name},</p>
          
          <p style="color: #475569; font-size: 16px; line-height: 1.6; margin-bottom: 24px;">
            We have successfully received your inquiry ${validatedData.service ? `regarding <strong>${validatedData.service}</strong>` : ''}. 
          </p>

          <p style="color: #475569; font-size: 16px; line-height: 1.6; margin-bottom: 24px;">
            Our team is currently reviewing the details you provided. A relevant partner or specialist from TAG Advisors will personally reach out to you within one business day to discuss your requirements.
          </p>

          <p style="color: #475569; font-size: 16px; line-height: 1.6; margin-bottom: 32px;">
            If you have any immediate questions, feel free to reply directly to this email or reach us at <a href="mailto:info@taggroup.in" style="color: #c9a84c; text-decoration: none; font-weight: 500;">info@taggroup.in</a>.
          </p>
          
          <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 32px 0;" />
          
          <p style="color: #1a2332; font-size: 16px; font-weight: 600; margin-bottom: 4px;">Best regards,</p>
          <p style="color: #64748b; font-size: 15px; margin-top: 0;">The Team at TAG Advisors</p>
        </div>
        <div style="background-color: #f8fafc; padding: 24px; text-align: center; border-top: 1px solid #e2e8f0;">
          <p style="color: #94a3b8; font-size: 13px; margin: 0;">
            TAG Advisors | Corporate Office: Emaar Digital Greens, Gurgaon
          </p>
        </div>
      </div>
      `;

      try {
        // Send email to Admin
        await transporter.sendMail({
          from: process.env.FROM_EMAIL || emailUser,
          to: process.env.ADMIN_EMAIL,
          subject: `New Lead [${validatedData.type}]: ${validatedData.name}`,
          html: adminHtmlContent,
          replyTo: validatedData.email,
        });
        
        // Send auto-reply to User
        await transporter.sendMail({
          from: \`"TAG Advisors" <\${process.env.FROM_EMAIL || emailUser}>\`,
          to: validatedData.email,
          subject: "We received your inquiry - TAG Advisors",
          html: userHtmlContent,
          replyTo: process.env.ADMIN_EMAIL,
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
