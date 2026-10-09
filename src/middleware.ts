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

const localHosts = new Set(['localhost', '127.0.0.1', '[::1]', '::1'])

// Plain-http requests used to fall straight through and answer 200, leaving a
// crawlable http:// duplicate of every page. OpenNext builds the middleware
// URL from the Worker's request URL, which keeps the scheme the browser used;
// x-forwarded-proto is preferred when present. Only an explicit `http` counts
// as insecure, so a missing signal can never cause a redirect loop.
function getHttpsRedirect(request: NextRequest) {
  const host = request.headers.get('host')
  if (!host) return null

  const hostname = host.replace(/:\d+$/, '')
  if (localHosts.has(hostname)) return null

  const forwardedProto = request.headers
    .get('x-forwarded-proto')
    ?.split(',')[0]
    .trim()
  const scheme = forwardedProto || request.nextUrl.protocol.replace(/:$/, '')
  if (scheme !== 'http') return null

  const { pathname, search } = request.nextUrl
  return new URL(`${pathname}${search}`, `https://${hostname}`)
}

export function middleware(request: NextRequest) {
  const httpsUrl = getHttpsRedirect(request)
  if (httpsUrl) return NextResponse.redirect(httpsUrl, 301)

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
  request.nextUrl.pathname =
    pathname === '/' ? `/${locale}` : `/${locale}${pathname}`
  // e.g. incoming request is /products
  // The new URL is now /en/products
  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: [
    // Skip internal paths (_next) and the public folder (".*\\..*" matches
    // "url.extension"). Localized pages must still pass through so plain-http
    // requests for them get the https redirect above.
    // https://github.com/vercel/next.js/discussions/36308#discussioncomment-3758041
    '/((?!api|static|_next|.*\\..*).*)',
  ],
}
