import { defaultLocale, locales } from '../config/i18n'

/** Build an internal URL without losing the language selected by the user. */
export function localizedPath(locale: string, path = '/') {
  if (!path.startsWith('/') || path.startsWith('//')) return path

  const normalizedPath = path === '/' ? '' : path
  return `/${locales.includes(locale) ? locale : defaultLocale}${normalizedPath}`
}
