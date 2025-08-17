import React from 'react';
import { JSXConverter } from '@payloadcms/richtext-lexical/react';

// Parse style CSS string en objet React.CSSProperties
function parseStyle(styleString = ''): React.CSSProperties {
  return styleString.split(';').reduce((acc, rule) => {
    const [property, value] = rule.split(':').map(s => s?.trim());
    if (property && value) {
      const camelCaseProperty = property.replace(/-([a-z])/g, g => g[1].toUpperCase());
      acc[camelCaseProperty] = value;
    }
    return acc;
  }, {} as React.CSSProperties);
}

export const jsxConverters: JSXConverter = ({ defaultConverters }) => ({
  ...defaultConverters,

  blocks: {
    ...defaultConverters.blocks,

    'custom-paragraph': ({ node, children }) => {
      const Tag = node.tag || 'p';
      const style = parseStyle(node.style);
      return <Tag style={style}>{children}</Tag>;
    },

    // Ajoute d'autres types si nécessaire (table, tablerow, etc.)
  },

  fallback: ({ node }) => {
    console.warn('Unknown node type:', node.type);
    return <div style={{ color: 'red' }}>Unknown node type: {node.type}</div>;
  },
});
