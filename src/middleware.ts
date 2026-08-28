import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
import { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

import { defaultLocale, locales } from './config/i18n'

// Get the preferred locale, similar to the above or using a library.
// `match` (from @formatjs/intl-localematcher) throws a RangeError when the
// Accept-Language header contains a structurally invalid BCP-47 tag — a common
// occurrence with bots and crawlers. Guard it so a bad header falls back to the
// default locale instead of crashing the middleware with a 500 (server error).
function getLocale(request: NextRequest) {
  try {
    const acceptLanguage = request.headers.get('accept-language')
    if (!acceptLanguage) return defaultLocale

    const headers = { 'accept-language': acceptLanguage }
    const languages = new Negotiator({ headers }).languages()
    return match(languages, locales, defaultLocale)
  } catch {
    return defaultLocale
  }
}

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  )

  if (pathnameHasLocale) return NextResponse.next()

  // Redirect if there is no locale.
  // For the root path, redirect to `/${locale}` (no trailing slash) rather than
  // `/${locale}/`, which Next.js would then redirect again to `/${locale}` —
  // avoiding a redirect chain that Search Console flags under "Page with redirect".
  const locale = getLocale(request)
  request.nextUrl.pathname = pathname === '/' ? `/${locale}` : `/${locale}${pathname}`
  // e.g. incoming request is /products
  // The new URL is now /en/products
  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: [
    // Skip all internal paths (_next) and public folder
    // https://github.com/vercel/next.js/discussions/36308#discussioncomment-3758041
    // .*\\..* matches "url.extension"
    '/((?!api|static|.*\\..*|_next).*)',
    // Optional: only run on root (/) URL
    // '/'
  ],
}
