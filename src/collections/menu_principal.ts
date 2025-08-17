// src/collections/menu_principal.ts
import { CollectionConfig } from 'payload/types'

export const MenuPrincipal: CollectionConfig = {
  slug: 'menu_principal',
  labels: {
    singular: 'Menu',
    plural: 'Menus',
  },
  admin: {
    useAsTitle: 'nom',
  },
  access: {
    read: () => true, // 👈 Autorise la lecture publique
  },
  fields: [
    {
      name: 'nom',
      label: 'Nom du menu',
      type: 'text',
      required: true,
    },
    {
      name: 'items',
      label: 'Éléments du menu',
      type: 'array',
      labels: {
        singular: 'Élément',
        plural: 'Éléments',
      },
      fields: [
        {
          name: 'label',
          label: 'Nom du lien',
          type: 'text',
          required: true,
        },
        {
          name: 'url',
          label: 'Lien (URL personnalisé)',
          type: 'text',
          required: false,
        },
        {
          name: 'page',
          label: 'Page liée',
          type: 'relationship',
          relationTo: 'pages',
          required: false,
        },
        {
          name: 'subItems',
          label: 'Sous-menus',
          type: 'array',
          labels: {
            singular: 'Sous-menu',
            plural: 'Sous-menus',
          },
          fields: [
            {
              name: 'label',
              label: 'Nom du sous-lien',
              type: 'text',
              required: true,
            },
            {
              name: 'url',
              label: 'Lien du sous-menu (URL personnalisé)',
              type: 'text',
              required: false,
            },
            {
              name: 'page',
              label: 'Page liée',
              type: 'relationship',
              relationTo: 'pages',
              required: false,
            },
          ],
        },
      ],
    },
  ],
}
