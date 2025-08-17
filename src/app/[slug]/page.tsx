import RichTextRenderer from '@/components/RichTextRenderer'

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/pages?where[slug][equals]=${slug}`,
    { cache: 'no-store' }
  );
  
  if (!res.ok) {
    return <div>Erreur {res.status}</div>;
  }
  
  const data = await res.json();
  const page = data?.docs?.[0];
  
  if (!page) {
    return <div>Page non trouvée</div>;
  }
  
  return (
    <article>
      <h1>{page.title}</h1>
      <RichTextRenderer data={page.content} />
    </article>
  );
}
