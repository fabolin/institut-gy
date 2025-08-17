import React from 'react';
import type { JSXConvertersFunction } from '@payloadcms/richtext-lexical';
import type { NodeTypes } from './lexicalTypes';

export const jsxConverters: JSXConvertersFunction<NodeTypes> = ({ defaultConverters }) => ({
  ...defaultConverters,
  blocks: {
    ...defaultConverters.blocks,
    myColorBlock: ({ node, children }) => (
      <div style={{ color: node.fields.color || 'inherit' }}>
        {children}
      </div>
    ),
    table: ({ node, children }) => <table><tbody>{children}</tbody></table>,
    tableRow: ({ node, children }) => <tr>{children}</tr>,
    tableCell: ({ node, children }) => <td>{children}</td>,
  },
});
