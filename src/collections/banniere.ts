import type { GlobalConfig } from 'payload';

export const Banner: GlobalConfig = {
  slug: 'banniere',
  label: 'Bannière (haut de page)',
  fields: [
    {
      name: 'leftImage',
      label: 'Image gauche',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'centerImage',
      label: 'Image centrale',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'rightImage',
      label: 'Image droite',
      type: 'upload',
      relationTo: 'media',
    },
  ],
};

