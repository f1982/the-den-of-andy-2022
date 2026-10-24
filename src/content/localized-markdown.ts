import content from '@/generated/content.json'

// Pre-rendered to HTML at build time by scripts/build-content.mjs.
export function getLocalizedHtml(
  key: keyof typeof content.pages,
  locale: string,
) {
  return content.pages[key][locale === 'zh-CN' ? 'zh-CN' : 'en']
}
