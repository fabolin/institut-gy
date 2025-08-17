// storage-adapter-import-placeholder
import { postgresAdapter } from '@payloadcms/db-postgres'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import {
  TextColorFeature,
  HighlightColorFeature,
  BgColorFeature,
  YoutubeFeature,
  VimeoFeature,
} from '@nhayhoc/payloadcms-lexical-ext'				
import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Pages } from './collections/pages'
import { MenuPrincipal } from './collections/menu_principal'
import { Banner } from './collections/banniere'
import { Footer } from './collections/pied_de_page'


import { en } from '@payloadcms/translations/languages/en'
import { fr } from '@payloadcms/translations/languages/fr'
import '@nhayhoc/payloadcms-lexical-ext/client/client.css'														  
const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  i18n: { supportedLanguages: { fr, en }, fallback: 'fr' },
  collections: [
	Users,
	Media,
	Pages,
	MenuPrincipal,
	Banner,
	Footer,
		],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    // storage-adapter-placeholder
  ],
})
