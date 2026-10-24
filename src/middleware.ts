import { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

import { defaultLocale, locales } from './config/i18n'

const localHosts = new Set(['localhost', '127.0.0.1', '[::1]', '::1'])
const defaultLocalePrefix = `/${defaultLocale}`

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

function hasLocalePrefix(pathname: string, locale: string) {
  return pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
}

export function middleware(request: NextRequest) {
  const httpsUrl = getHttpsRedirect(request)
  if (httpsUrl) return NextResponse.redirect(httpsUrl, 301)

  const { pathname } = request.nextUrl

  // English lives at the site root. `/en` and `/en/*` stay reachable for old
  // links but 301 to the unprefixed URL, so only one URL per page is indexed.
  if (hasLocalePrefix(pathname, defaultLocale)) {
    const url = request.nextUrl.clone()
    url.pathname = pathname.slice(defaultLocalePrefix.length) || '/'
    return NextResponse.redirect(url, 301)
  }

  if (locales.some((locale) => hasLocalePrefix(pathname, locale))) {
    return NextResponse.next()
  }

  // Unprefixed paths render the English pages internally (`/about` →
  // `/en/about`). A rewrite, not a redirect, and decided per path rather than
  // in a layout, so every page still prerenders under `[locale]`.
  const url = request.nextUrl.clone()
  url.pathname = `${defaultLocalePrefix}${pathname === '/' ? '' : pathname}`
  return NextResponse.rewrite(url)
}

export const config = {
  matcher: [
    // Skip internal paths (_next) and the public folder (".*\\..*" matches
    // "url.extension").
    // https://github.com/vercel/next.js/discussions/36308#discussioncomment-3758041
    '/((?!api|static|_next|.*\\..*).*)',
  ],
}
