// app/layout.tsx
import { getPayload } from 'payload'
import config from '@/payload.config'

export const metadata = {
  title: 'Mon site avec Payload',
  description: 'Site avec layout partagé bannière, menu et footer',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const payload = await getPayload({ config })

  // Charger bannière
  const bannerResult = await payload.find({
    collection: 'banniere',
    limit: 1,
    depth: 1,
  })
  const banner = bannerResult.docs[0]

  // Charger menu principal
  const menuResult = await payload.find({
    collection: 'menu_principal',
    limit: 1,
    depth: 2,
  })
  const items = menuResult.docs[0]?.items || []

  // Charger footer
  const footerResult = await payload.find({
    collection: 'pied-de-page',
    limit: 1,
    depth: 1,
  })
  const footer = footerResult.docs[0]

  return (
    <html lang="fr">
      <body>
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {banner?.leftImage && (
            <img src={(banner.leftImage as any)?.url} alt="Image gauche" style={{ maxWidth: '30%' }} />
          )}
          {banner?.centerImage && (
            <img src={(banner.centerImage as any)?.url} alt="Image centre" style={{ maxWidth: '30%' }} />
          )}
          {banner?.rightImage && (
            <img src={(banner.rightImage as any)?.url} alt="Image droite" style={{ maxWidth: '30%' }} />
          )}
        </header>

        <nav>
          <ul>
            {items.map((item: any, i: number) => (
              <li key={i}>
                <a href={`/${item.page?.slug}`}>{item.label}</a>
                {item.subItems?.length > 0 && (
                  <ul>
                    {item.subItems.map((sub: any, j: number) => (
                      <li key={j}>
                        <a href={`/${sub.page?.slug}`}>{sub.label}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <main>{children}</main>

        <footer>
          {footer?.links?.length ? (
            <ul>
              {footer.links.map((link: any, index: number) => (
                <li key={index}>
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p>Aucun lien dans le pied de page.</p>
          )}
        </footer>
      </body>
    </html>
  )
}
