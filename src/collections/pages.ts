// src/collections/pages.ts
import { CollectionConfig } from 'payload'
import { lexicalEditor, UploadFeature, EXPERIMENTAL_TableFeature } from '@payloadcms/richtext-lexical'
import {
  TextColorFeature,
  HighlightColorFeature,
  BgColorFeature,
  YoutubeFeature,
  VimeoFeature,
} from '@nhayhoc/payloadcms-lexical-ext'

export const Pages: CollectionConfig = {
  slug: 'pages',
  labels: { singular: 'Page', plural: 'Pages' },
  admin: { useAsTitle: 'title', defaultColumns: ['title', 'updatedAt'] },
  access: {
    read: () => true,
  },
  fields: [
    { name: 'title', type: 'text', required: true },
    {
      name: 'slug',
      type: 'text', // slug manuel, pas le type 'slug' pour éviter génération auto
      required: true,
      admin: {
        position: 'sidebar',
        description: 'Chemin URL unique, par ex. "a-propos"',
      },
      unique: true, // important pour garantir un slug unique
    },
    {
      name: 'content',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
          ...defaultFeatures,
          TextColorFeature(),
          HighlightColorFeature(),
          BgColorFeature(),
          YoutubeFeature(),
          VimeoFeature(),
          UploadFeature({
            collections: {
              media: { fields: [] },
            },
            maxDepth: 1,
          }),
          EXPERIMENTAL_TableFeature(),
        ],
      }),
    },
  ],
}

export default Pages
