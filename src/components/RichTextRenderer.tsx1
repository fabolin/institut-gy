'use client'

import React from 'react'
import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'
import type {
  DefaultNodeTypes,
  SerializedBlockNode,
  SerializedInlineBlockNode,
} from '@payloadcms/richtext-lexical'
import type { JSXConvertersFunction } from '@payloadcms/richtext-lexical/react'
import { RichText } from '@payloadcms/richtext-lexical/react'

// Si tu as des types personnalisés, importe-les ici ou définis-les
// Par exemple, ici je mets des exemples vides, adapte si besoin :
type MyNumberBlock = { number: number }
type MyTextBlock = { text: string }
type MyInlineBlock = { text: string }

// Définition du type des nodes avec tes blocks personnalisés
type NodeTypes =
  | DefaultNodeTypes
  | SerializedBlockNode<MyNumberBlock | MyTextBlock>
  | SerializedInlineBlockNode<MyInlineBlock>

// JSX converters personnalisés pour tes blocks
const jsxConverters: JSXConvertersFunction<NodeTypes> = ({ defaultConverters }) => ({
  ...defaultConverters,
  blocks: {
    myNumberBlock: ({ node }) => <div>{node.fields.number}</div>,
    myTextBlock: ({ node }) => (
      <div style={{ backgroundColor: 'red' }}>{node.fields.text}</div>
    ),
  },
  inlineBlocks: {
    myInlineBlock: ({ node }) => <span>{node.fields.text}</span>,
  },
})

interface RichTextRendererProps {
  data: SerializedEditorState
}

const RichTextRenderer: React.FC<RichTextRendererProps> = ({ data }) => {
  return <RichText converters={jsxConverters} data={data} />
}

export default RichTextRenderer
