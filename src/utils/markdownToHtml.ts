import { remark } from 'remark'
import html from 'remark-html'

function addImageAltText(markdown: string) {
  return markdown.replace(
    /!\[\]\(([^)\s]+)\)/g,
    (_match, source: string) => {
      const fileName = decodeURIComponent(source.split('/').pop() ?? 'image')
      const alt = fileName
        .replace(/\.[^.]+$/, '')
        .replace(/[-_]+/g, ' ')
        .replace(/\s+/g, ' ')
        .trim()

      return `![${alt || 'Article image'}](${source})`
    },
  )
}

export default async function markdownToHtml(markdown: string) {
  const result = await remark()
    .use(html, { sanitize: true })
    .process(addImageAltText(markdown))
  return result.toString()
}
