'use client';

import React from 'react';
import { RichText } from '@payloadcms/richtext-lexical/react';
import { JSXConverters } from 'payloadcms-lexical-ext';
import 'payloadcms-lexical-ext/client/client.css';

const jsxConverters = ({ defaultConverters }: any) => ({
  ...defaultConverters,
  ...JSXConverters,
});

interface RichTextClientProps {
  data: any;
}

export default function RichTextClient({ data }: RichTextClientProps) {
  return <RichText converters={jsxConverters} data={data} />;
}
