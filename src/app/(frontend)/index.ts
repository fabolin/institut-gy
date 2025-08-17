import Menu from '../components/Menu'

export default function Home({ menu }) {
  return (
    <div>
      <Menu menu={menu} />
      <main>
        <h1>Bienvenue</h1>
        <p>Le contenu de ta page d'accueil ici...</p>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/menu_principal?limit=1`)
  const data = await res.json()

  return {
    props: {
      menu: data.docs[0],
    },
    revalidate: 60, // re-générer toutes les 60s
  }
}
