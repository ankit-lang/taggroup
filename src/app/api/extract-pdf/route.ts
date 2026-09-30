import { NextRequest, NextResponse } from 'next/server';
import { extractText, getDocumentProxy } from 'unpdf';

export const runtime = 'nodejs';
export const maxDuration = 60; // Allow sufficient processing time

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get('file') as File | null;

    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }

    if (file.type !== 'application/pdf' && !file.name.endsWith('.pdf')) {
      return NextResponse.json({ error: 'Uploaded file is not a valid PDF' }, { status: 400 });
    }

    // Check size limit (e.g., 20MB)
    if (file.size > 20 * 1024 * 1024) {
      return NextResponse.json({ error: 'File exceeds 20MB size limit' }, { status: 400 });
    }

    // Convert File -> ArrayBuffer -> Uint8Array
    const arrayBuffer = await file.arrayBuffer();
    const buffer = new Uint8Array(arrayBuffer);

    // Extract document metadata & text
    let pdf;
    try {
      pdf = await getDocumentProxy(buffer);
    } catch (docErr: any) {
      if (docErr.name === 'PasswordException' || docErr.message.includes('Password')) {
        return NextResponse.json({ error: 'The PDF file is password protected.' }, { status: 400 });
      }
      throw docErr;
    }
    
    const { text, totalPages } = await extractText(pdf, { mergePages: true });

    // Clean up extracted text
    const cleanedText = (Array.isArray(text) ? text.join('\n') : String(text))
      .replace(/\r\n/g, '\n')
      .replace(/\t/g, ' ')
      .trim();

    // Check for scanned / image-only PDFs
    if (!cleanedText || cleanedText.length < 20) {
      return NextResponse.json({
        warning: 'Scanned document detected. No embedded text layer found.',
        isScanned: true,
        totalPages,
        text: '',
      }, { status: 200 });
    }

    return NextResponse.json({
      success: true,
      totalPages,
      text: cleanedText,
    });
  } catch (error: any) {
    console.error('PDF Extraction Error:', error);
    return NextResponse.json(
      { error: 'Failed to extract text from PDF: ' + (error.message || 'Unknown error') },
      { status: 500 }
    );
  }
}
