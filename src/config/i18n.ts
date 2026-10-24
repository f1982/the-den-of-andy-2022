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

/**
 * Canonical + hreflang for `path`. `available` lists the locales that really
 * have this content (default: all). A page in a locale outside that list is a
 * fallback copy of the default-locale text, so its canonical points there and
 * hreflang only advertises real translations. The default locale must always
 * be available, since `x-default` points at it.
 */
export function getLocalizedAlternates(
  locale: string,
  path = '/',
  available: readonly string[] = locales,
) {
  const canonicalLocale = available.includes(locale) ? locale : defaultLocale
  return {
    canonical: getLocalizedPathname(canonicalLocale, path),
    languages: {
      ...Object.fromEntries(
        available.map((code) => [code, getLocalizedPathname(code, path)]),
      ),
      'x-default': getLocalizedPathname(defaultLocale, path),
    },
  }
}
