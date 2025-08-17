import type { DefaultNodeTypes, SerializedBlockNode, SerializedInlineBlockNode } from '@payloadcms/richtext-lexical';

// Types personnalisés (adapter si besoin)
export type MyColorBlock = { color: string };

export type NodeTypes =
  | DefaultNodeTypes
  | SerializedBlockNode<MyColorBlock>
  | SerializedInlineBlockNode<{ text: string }>;
