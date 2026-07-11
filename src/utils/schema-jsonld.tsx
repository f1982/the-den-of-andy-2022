export default function SchemaJsonLd({ jsonLd }: { jsonLd: object }) {
  const serializedJsonLd = JSON.stringify(jsonLd).replace(/</g, '\\u003c')

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializedJsonLd }}
    />
  )
}
