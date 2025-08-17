'use client';

import dynamic from 'next/dynamic';

const RichTextClient = dynamic(() => import('./RichTextClient'), { ssr: false });

interface RichTextWrapperProps {
  data: any;
}

export default function RichTextWrapper({ data }: RichTextWrapperProps) {
  return <RichTextClient data={data} />;
}
