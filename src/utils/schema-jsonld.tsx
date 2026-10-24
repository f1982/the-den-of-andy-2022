/**
 * Emits a `<script type="application/ld+json">` through `dangerouslySetInnerHTML`
 * on a hidden wrapper instead of as a React `<script>` element. React 19 treats
 * a `<script>` element as a hoistable resource and, under `next dev`, can move
 * or duplicate it on the client while the server leaves it in place, which
 * throws a hydration error. React never diffs the wrapper's inner HTML, so the
 * tag ships verbatim in the prerendered HTML. `<` is escaped so a `</script>`
 * in the data cannot close the tag early.
 */
export default function SchemaJsonLd({ jsonLd }: { jsonLd: object }) {
  const serializedJsonLd = JSON.stringify(jsonLd).replace(/</g, '\\u003c')

  return (
    <div
      hidden
      dangerouslySetInnerHTML={{
        __html: `<script type="application/ld+json">${serializedJsonLd}</script>`,
      }}
    />
  )
}
