export const defaultLocale = 'en'
// Before add new language, need to check the accept-language
export const locales = ['en', 'zh-CN']

export function getLocalPrefix(locale: string) {
  return `/${locales.includes(locale) ? locale : defaultLocale}`
}

export function getLocalizedAlternates(locale: string, path = '/') {
  const localizedPath = `${getLocalPrefix(locale)}${path === '/' ? '' : path}`

  return {
    canonical: localizedPath,
    languages: {
      en: `/en${path === '/' ? '' : path}`,
      'zh-CN': `/zh-CN${path === '/' ? '' : path}`,
      'x-default': `/en${path === '/' ? '' : path}`,
    },
  }
}
