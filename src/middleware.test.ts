import { NextRequest } from 'next/server'
import { describe, expect, it } from 'vitest'

import { middleware } from './middleware'

function request(url: string, headers: Record<string, string> = {}) {
  return new NextRequest(url, { headers })
}

describe('middleware https redirect', () => {
  it('301s plain-http page requests to https on the same host', () => {
    const response = middleware(
      request('http://andycao.me/en/blog?page=2', { host: 'andycao.me' }),
    )

    expect(response.status).toBe(301)
    expect(response.headers.get('location')).toBe(
      'https://andycao.me/en/blog?page=2',
    )
  })

  it('trusts x-forwarded-proto over the request URL scheme', () => {
    const response = middleware(
      request('http://andycao.me/en', {
        host: 'andycao.me',
        'x-forwarded-proto': 'https',
      }),
    )

    expect(response.headers.get('location')).toBeNull()
  })

  it('leaves https requests alone', () => {
    const response = middleware(
      request('https://andycao.me/en', { host: 'andycao.me' }),
    )

    expect(response.headers.get('location')).toBeNull()
  })

  it('never redirects local development hosts', () => {
    const response = middleware(
      request('http://localhost:8787/en', { host: 'localhost:8787' }),
    )

    expect(response.headers.get('location')).toBeNull()
  })

  it('still adds a locale to unprefixed https paths', () => {
    const response = middleware(
      request('https://andycao.me/about', { host: 'andycao.me' }),
    )

    expect(response.headers.get('location')).toBe('https://andycao.me/en/about')
  })
})
