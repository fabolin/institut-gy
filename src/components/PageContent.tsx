// components/PageContent.tsx
'use client'

import React from 'react'
import RichTextRenderer from './RichTextRenderer'

interface PageContentProps {
  title: string
  content: any
}

const PageContent: React.FC<PageContentProps> = ({ title, content }) => {
  return (
    <>
      <h1>{title}</h1>
      <RichTextRenderer data={content} />
    </>
  )
}

export default PageContent