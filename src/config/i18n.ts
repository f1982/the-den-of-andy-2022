export const defaultLocale = 'en'
export const locales = ['en', 'zh-CN']

export function isLocale(value: string) {
  return locales.includes(value)
}

/**
 * URL prefix for a locale. The default locale (English) lives at the site
 * root, so its prefix is empty; `/en/*` only exists internally — the
 * middleware rewrites `/about` to `/en/about` and 301s `/en/*` to `/*`.
 */
export function getLocalPrefix(locale: string) {
  return isLocale(locale) && locale !== defaultLocale ? `/${locale}` : ''
}

/** Public path of `path` in `locale`, e.g. ('en', '/about') → '/about'. */
export function getLocalizedPathname(locale: string, path = '/') {
  return `${getLocalPrefix(locale)}${path === '/' ? '' : path}` || '/'
}

/**
 * Strip a leading locale segment: '/zh-CN/about' → '/about', '/en' → '/'.
 * Client components see '/en/…' while prerendering and '/…' in the browser
 * (the middleware rewrite), so compare paths after normalising them here.
 */
export function stripLocalePrefix(pathname: string) {
  const [, first = '', ...rest] = pathname.split('/')
  if (isLocale(first)) return `/${rest.join('/')}`
  return pathname || '/'
}

export function getLocalizedAlternates(locale: string, path = '/') {
  return {
    canonical: getLocalizedPathname(locale, path),
    languages: {
      en: getLocalizedPathname('en', path),
      'zh-CN': getLocalizedPathname('zh-CN', path),
      'x-default': getLocalizedPathname(defaultLocale, path),
    },
  }
}
