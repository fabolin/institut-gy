import type { GlobalConfig } from 'payload';

export const Footer: GlobalConfig = {
  slug: 'pied-de-page',
  label: 'Pied de page',
  fields: [
    {
      name: 'links',
      label: 'Liens du pied de page',
      type: 'array',
      labels: {
        singular: 'Lien',
        plural: 'Liens',
      },
      fields: [
        {
          name: 'label',
          label: 'Texte du lien',
          type: 'text',
          required: true,
        },
        {
          name: 'url',
          label: 'Adresse du lien (URL)',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
};
