import { NextRequest, NextResponse } from "next/server";
import pdfmake from "pdfmake";
import path from "path";
import { getLocale } from "@/lib/get-locale";
import { locales } from "@/data/locales";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    let locale = searchParams.get('lang') as keyof typeof locales;
    const service = searchParams.get('service');
    
    if (!locale || !locales[locale]) {
      locale = await getLocale(); // Fallback to cookie
    }
    
    // Setup Fonts
    const fonts = {
      NotoSansKR: {
        normal: path.join(process.cwd(), 'public/fonts/NotoSansKR-Regular.ttf'),
        bold: path.join(process.cwd(), 'public/fonts/NotoSansKR-Regular.ttf'),
        italics: path.join(process.cwd(), 'public/fonts/NotoSansKR-Regular.ttf'),
        bolditalics: path.join(process.cwd(), 'public/fonts/NotoSansKR-Regular.ttf')
      }
    };
    
    pdfmake.setFonts(fonts);

    let docDefinition: any = {
      defaultStyle: { font: 'NotoSansKR', fontSize: 10, color: '#333333' },
      styles: {
        header: { fontSize: 24, bold: true, margin: [0, 0, 0, 10], color: '#1a1a1a' },
        subheader: { fontSize: 14, bold: true, margin: [0, 15, 0, 5], color: '#8c704f' },
        bodyText: { fontSize: 10, margin: [0, 0, 0, 10], lineHeight: 1.5 },
        listItem: { margin: [0, 3, 0, 3] },
        eyebrow: { fontSize: 10, bold: true, color: '#8c704f', margin: [0, 0, 0, 5] },
        hr: { margin: [0, 15, 0, 15] }
      },
      content: []
    };

    if (service === 'tax') {
      const t = (locales[locale] as any).services?.tax;
      if (!t) throw new Error("Translation not found");

      docDefinition.content = [
        { text: t.hero.eyebrow.toUpperCase(), style: 'eyebrow' },
        { text: t.hero.title, style: 'header' },
        { text: t.hero.desc, style: 'bodyText' },
        { canvas: [{ type: 'line', x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 1, lineColor: '#e2e8f0' }], style: 'hr' },
        
        { text: t.prop.title, style: 'subheader' },
        { text: t.prop.desc, style: 'bodyText' },
        
        { text: t.sit.title, style: 'subheader' },
        {
          ul: [
            { text: t.sit.li1, style: 'listItem' },
            { text: t.sit.li2, style: 'listItem' },
            { text: t.sit.li3, style: 'listItem' },
            { text: t.sit.li4, style: 'listItem' },
            { text: t.sit.li5, style: 'listItem' },
            { text: t.sit.li6, style: 'listItem' },
          ]
        },

        { text: t.who.title, style: 'subheader' },
        {
          ul: [
            { text: t.who.li1, style: 'listItem' },
            { text: t.who.li2, style: 'listItem' },
            { text: t.who.li3, style: 'listItem' },
            { text: t.who.li4, style: 'listItem' },
          ]
        },

        { text: t.scope.title, style: 'subheader' },
        { text: t.scope.h1, bold: true, margin: [0, 5, 0, 2] },
        { ul: [ t.scope.h1_l1, t.scope.h1_l2, t.scope.h1_l3 ] },
        
        { text: t.scope.h2, bold: true, margin: [0, 10, 0, 2] },
        { ul: [ t.scope.h2_l1, t.scope.h2_l2, t.scope.h2_l3, t.scope.h2_l4, t.scope.h2_l5, t.scope.h2_l6 ] },
        
        { text: t.scope.h3, bold: true, margin: [0, 10, 0, 2] },
        { ul: [ t.scope.h3_l1, t.scope.h3_l2, t.scope.h3_l3 ] },

        { text: t.scope.h4, bold: true, margin: [0, 10, 0, 2] },
        { ul: [ t.scope.h4_l1, t.scope.h4_l2, t.scope.h4_l3 ] },

        { text: t.scope.h5, bold: true, margin: [0, 10, 0, 2] },
        { ul: [ t.scope.h5_l1, t.scope.h5_l2, t.scope.h5_l3, t.scope.h5_l4 ] },

        { text: t.deliv.title, style: 'subheader' },
        {
          ul: [
            t.deliv.l1, t.deliv.l2, t.deliv.l3, t.deliv.l4, t.deliv.l5, t.deliv.l6
          ]
        }
      ];
    } else if (service === 'gaurav') {
      const t = (locales[locale] as any).people?.gaurav;
      if (!t) throw new Error("Translation not found");

      docDefinition.content = [
        { text: t.title.toUpperCase(), style: 'eyebrow' },
        { text: t.name, style: 'header' },
        { text: t.subtitle, style: 'bodyText' },
        { canvas: [{ type: 'line', x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 1, lineColor: '#e2e8f0' }], style: 'hr' },
        
        { text: t.overview.title, style: 'subheader' },
        { text: t.overview.desc, style: 'bodyText' },

        { text: t.expertise.title, style: 'subheader' },
        { text: t.expertise.h1, bold: true, margin: [0, 5, 0, 2] },
        { ul: [ t.expertise.h1_l1, t.expertise.h1_l2, t.expertise.h1_l3, t.expertise.h1_l4 ] },
        
        { text: t.expertise.h2, bold: true, margin: [0, 10, 0, 2] },
        { ul: [ t.expertise.h2_l1, t.expertise.h2_l2, t.expertise.h2_l3 ] },
        
        { text: t.expertise.h3, bold: true, margin: [0, 10, 0, 2] },
        { ul: [ t.expertise.h3_l1, t.expertise.h3_l2, t.expertise.h3_l3 ] },

        { text: t.expertise.h4, bold: true, margin: [0, 10, 0, 2] },
        { ul: [ t.expertise.h4_l1, t.expertise.h4_l2, t.expertise.h4_l3 ] },

        { text: t.experience.title, style: 'subheader' },
        { ul: [
          `${t.experience.p1} - ${t.experience.r1}`,
          `${t.experience.p2} - ${t.experience.r2}`,
          `${t.experience.p3} - ${t.experience.r3}`,
          `${t.experience.p4} - ${t.experience.r4}`,
          `${t.experience.p5} - ${t.experience.r5}`
        ]},

        { text: t.cred.title, style: 'subheader' },
        {
          ul: [
            t.cred.c1, t.cred.c2, t.cred.c3, t.cred.c4, t.cred.c5, t.cred.c6, t.cred.c7
          ]
        }
      ];
    } else if (service === 'tp') {
      const t = (locales[locale] as any).services?.tp;
      if (!t) throw new Error("Translation not found");

      docDefinition.content = [
        { text: t.hero.eyebrow.toUpperCase(), style: 'eyebrow' },
        { text: t.hero.title, style: 'header' },
        { text: t.hero.desc, style: 'bodyText' },
        { canvas: [{ type: 'line', x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 1, lineColor: '#e2e8f0' }], style: 'hr' },
        
        { text: t.prop.title, style: 'subheader' },
        { text: t.prop.desc, style: 'bodyText' },

        { text: t.lifecycle.title, style: 'subheader' },
        {
          ul: Array.from({length: 8}).map((_, i) => {
            const n = i + 1;
            return { text: `${t.lifecycle[`i${n}_t`]}: ${t.lifecycle[`i${n}_d`]}`, style: 'listItem' };
          })
        },

        { text: t.sit.title, style: 'subheader' },
        {
          ul: [
            { text: t.sit.l1, style: 'listItem' },
            { text: t.sit.l2, style: 'listItem' },
            { text: t.sit.l3, style: 'listItem' },
            { text: t.sit.l4, style: 'listItem' },
            { text: t.sit.l5, style: 'listItem' },
            { text: t.sit.l6, style: 'listItem' },
            { text: t.sit.l7, style: 'listItem' },
          ]
        },

        { text: t.scope.title, style: 'subheader' },
        { text: t.scope.h1, bold: true, margin: [0, 5, 0, 2] },
        { ul: [ t.scope.h1_l1, t.scope.h1_l2, t.scope.h1_l3, t.scope.h1_l4, t.scope.h1_l5 ] },
        
        { text: t.scope.h2, bold: true, margin: [0, 10, 0, 2] },
        { ul: [ t.scope.h2_l1, t.scope.h2_l2, t.scope.h2_l3, t.scope.h2_l4, t.scope.h2_l5 ] },

        { text: t.deliv.title, style: 'subheader' },
        {
          ul: Array.from({length: 8}).map((_, i) => t.deliv[`d${i+1}`])
        }
      ];
    } else if (service === 'cfo') {
      const t = (locales[locale] as any).services?.cfo;
      if (!t) throw new Error("Translation not found");

      docDefinition.content = [
        { text: t.hero.eyebrow.toUpperCase(), style: 'eyebrow' },
        { text: t.hero.title, style: 'header' },
        { text: t.hero.desc, style: 'bodyText' },
        { canvas: [{ type: 'line', x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 1, lineColor: '#e2e8f0' }], style: 'hr' },
        
        { text: t.prop.title, style: 'subheader' },
        { text: t.prop.desc, style: 'bodyText' },

        { text: t.sit.title, style: 'subheader' },
        {
          ul: [
            { text: t.sit.l1, style: 'listItem' },
            { text: t.sit.l2, style: 'listItem' },
            { text: t.sit.l3, style: 'listItem' },
            { text: t.sit.l4, style: 'listItem' },
            { text: t.sit.l5, style: 'listItem' },
            { text: t.sit.l6, style: 'listItem' },
          ]
        },

        { text: t.scope.title, style: 'subheader' },
        { text: t.scope.h1, bold: true, margin: [0, 5, 0, 2] },
        { ul: [ t.scope.h1_l1, t.scope.h1_l2, t.scope.h1_l3 ] },
        
        { text: t.scope.h2, bold: true, margin: [0, 10, 0, 2] },
        { ul: [ t.scope.h2_l1, t.scope.h2_l2, t.scope.h2_l3, t.scope.h2_l4, t.scope.h2_l5 ] },

        { text: t.deliv.title, style: 'subheader' },
        {
          ul: Array.from({length: 6}).map((_, i) => t.deliv[`d${i+1}`])
        }
      ];
    } else if (service === 'india') {
      const t = (locales[locale] as any).services?.india;
      if (!t) throw new Error("Translation not found");

      docDefinition.content = [
        { text: t.hero.eyebrow.toUpperCase(), style: 'eyebrow' },
        { text: t.hero.title, style: 'header' },
        { text: t.hero.desc, style: 'bodyText' },
        { canvas: [{ type: 'line', x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 1, lineColor: '#e2e8f0' }], style: 'hr' },
        
        { text: t.prop.title, style: 'subheader' },
        { text: t.prop.desc, style: 'bodyText' },

        { text: t.sit.title, style: 'subheader' },
        {
          ul: Array.from({length: 6}).map((_, i) => ({ text: t.sit[`l${i+1}`], style: 'listItem' }))
        },

        { text: t.scope.title, style: 'subheader' },
        { text: t.scope.h1, bold: true, margin: [0, 5, 0, 2] },
        { ul: Array.from({length: 6}).map((_, i) => t.scope[`h1_l${i+1}`]) },
        
        { text: t.scope.h2, bold: true, margin: [0, 10, 0, 2] },
        { ul: Array.from({length: 6}).map((_, i) => t.scope[`h2_l${i+1}`]) },

        { text: t.deliv.title, style: 'subheader' },
        {
          ul: Array.from({length: 6}).map((_, i) => t.deliv[`d${i+1}`])
        }
      ];
    } else if (service === 'legal') {
      const t = (locales[locale] as any).services?.legal;
      if (!t) throw new Error("Translation not found");

      docDefinition.content = [
        { text: t.hero.eyebrow.toUpperCase(), style: 'eyebrow' },
        { text: t.hero.title, style: 'header' },
        { text: t.hero.desc, style: 'bodyText' },
        { canvas: [{ type: 'line', x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 1, lineColor: '#e2e8f0' }], style: 'hr' },
        
        { text: t.prop.title, style: 'subheader' },
        { text: t.prop.desc, style: 'bodyText' },

        { text: t.sit.title, style: 'subheader' },
        {
          ul: Array.from({length: 6}).map((_, i) => ({ text: t.sit[`l${i+1}`], style: 'listItem' }))
        },

        { text: t.scope.title, style: 'subheader' },
        { text: t.scope.h1, bold: true, margin: [0, 5, 0, 2] },
        { ul: Array.from({length: 6}).map((_, i) => t.scope[`h1_l${i+1}`]) },
        
        { text: t.scope.h2, bold: true, margin: [0, 10, 0, 2] },
        { ul: Array.from({length: 4}).map((_, i) => t.scope[`h2_l${i+1}`]) },

        { text: t.deliv.title, style: 'subheader' },
        {
          ul: Array.from({length: 6}).map((_, i) => t.deliv[`d${i+1}`])
        }
      ];
    } else if (service === 'gcc') {
      const t = (locales[locale] as any).services?.gcc;
      if (!t) throw new Error("Translation not found");

      docDefinition.content = [
        { text: t.hero.eyebrow.toUpperCase(), style: 'eyebrow' },
        { text: t.hero.title, style: 'header' },
        { text: t.hero.desc, style: 'bodyText' },
        { canvas: [{ type: 'line', x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 1, lineColor: '#e2e8f0' }], style: 'hr' },
        
        { text: t.prop.title, style: 'subheader' },
        { text: t.prop.desc, style: 'bodyText' },

        { text: t.sit.title, style: 'subheader' },
        {
          ul: Array.from({length: 6}).map((_, i) => ({ text: t.sit[`l${i+1}`], style: 'listItem' }))
        },

        { text: t.scope.title, style: 'subheader' },
        { text: t.scope.h1, bold: true, margin: [0, 5, 0, 2] },
        { ul: Array.from({length: 4}).map((_, i) => t.scope[`h1_l${i+1}`]) },
        
        { text: t.scope.h2, bold: true, margin: [0, 10, 0, 2] },
        { ul: Array.from({length: 4}).map((_, i) => t.scope[`h2_l${i+1}`]) },

        { text: t.deliv.title, style: 'subheader' },
        {
          ul: Array.from({length: 8}).map((_, i) => t.deliv[`d${i+1}`])
        }
      ];
    } else {
       // fallback for old basic PDF
       const t = locales[locale]?.pdf || locales.en.pdf;
       docDefinition.content = [
        { text: t.title, style: 'header' },
        { text: t.content, style: 'body' },
        { text: `Language generated: ${locale.toUpperCase()}`, margin: [0, 20, 0, 0] }
      ];
    }

    // Generate PDF
    const pdfDoc = pdfmake.createPdf(docDefinition);
    const pdfBuffer = await pdfDoc.getBuffer();

    return new NextResponse(pdfBuffer as unknown as BodyInit, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="document-${service}-${locale}.pdf"`,
      },
    });

  } catch (error: any) {
    console.error("PDF Generation Error:", error);
    return NextResponse.json({ error: "Failed to generate PDF" }, { status: 500 });
  }
}
