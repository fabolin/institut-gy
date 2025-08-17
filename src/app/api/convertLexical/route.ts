// src/app/api/convertLexical/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { convertLexicalToHTML, sanitizeServerEditorConfig } from '@payloadcms/richtext-lexical';
import { HTMLConverters } from '@nhayhoc/payloadcms-lexical-ext';

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '1mb',
    },
  },
};

export async function POST(req: NextRequest) {
  try {
    const { editorConfig, jsonEditorContent } = await req.json();

    // Sanitize la configuration de l'éditeur
    const sanitizedEditorConfig = await sanitizeServerEditorConfig(editorConfig);

    // Convertir le contenu JSON en HTML
    const htmlContent = await convertLexicalToHTML({
      converters: [
        ...HTMLConverters,
        ...consolidateHTMLConverters({ editorConfig: sanitizedEditorConfig }),
      ],
      data: jsonEditorContent,
      req,
    });

    return NextResponse.json({ htmlContent });
  } catch (error) {
    return NextResponse.json({ error: 'Erreur lors de la conversion du contenu' }, { status: 500 });
  }
}
