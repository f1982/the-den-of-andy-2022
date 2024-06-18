import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
import { NextResponse } from 'next/server'

import { defaultLocale, locales } from './config/i18n'

// Get the preferred locale, similar to the above or using a library
function getLocale(request: any) {
  let headers = { 'accept-language': request.headers.get('accept-language') }
  let languages = new Negotiator({ headers }).languages()
  return match(languages, locales, defaultLocale)
}

export function middleware(request) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  )

  if (pathnameHasLocale) return

  // Redirect if there is no locale
  const locale = getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname}`
  // e.g. incoming request is /products
  // The new URL is now /en-US/products
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
