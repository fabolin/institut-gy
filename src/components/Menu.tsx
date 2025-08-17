// src/components/Menu.jsx
import Link from 'next/link'

export default function Menu({ menu }) {
  if (!menu || !Array.isArray(menu.items)) {
    return <p>Pas de menu disponible</p>
  }

  return (
    <nav>
      <ul>
        {menu.items.map(item => (
          <li key={item.label}>
            {item.page && typeof item.page.slug === 'string' && item.page.slug.trim() !== '' ? (
              <Link href={`/${item.page.slug}`}>
                <a>{item.label}</a>
              </Link>
            ) : item.url ? (
              <a href={item.url}>{item.label}</a>
            ) : (
              <span>{item.label}</span>
            )}

            {Array.isArray(item.subItems) && item.subItems.length > 0 && (
              <ul>
                {item.subItems.map(sub => (
                  <li key={sub.label}>
                    {sub.page && typeof sub.page.slug === 'string' && sub.page.slug.trim() !== '' ? (
                      <Link href={`/${sub.page.slug}`}>
                        <a>{sub.label}</a>
                      </Link>
                    ) : sub.url ? (
                      <a href={sub.url}>{sub.label}</a>
                    ) : (
                      <span>{sub.label}</span>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}
