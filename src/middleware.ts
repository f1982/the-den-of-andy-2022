import { localePrefix, locales, pathnames } from './config/i18n/config'
import createMiddleware from 'next-intl/middleware'

export default createMiddleware({
  // A list of all locales that are supported
  locales,

  // Used when no locale matches
  defaultLocale: 'en',
  localePrefix,
  pathnames
})

export const config = {
  // Match only internationalized pathnames
  matcher: [
    '/',
    '/(cn|en)/:path*',
    // Enable redirects that add missing locales
    // (e.g. `/pathnames` -> `/en/pathnames`)
    '/((?!_next|_vercel|.*\\..*).*)'
  ]
}
