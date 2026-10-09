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
      request('http://andycao.me/zh-CN', {
        host: 'andycao.me',
        'x-forwarded-proto': 'https',
      }),
    )

    expect(response.headers.get('location')).toBeNull()
  })

  it('leaves https requests alone', () => {
    const response = middleware(
      request('https://andycao.me/zh-CN', { host: 'andycao.me' }),
    )

    expect(response.headers.get('location')).toBeNull()
  })

  it('never redirects local development hosts', () => {
    const response = middleware(
      request('http://localhost:8787/zh-CN', { host: 'localhost:8787' }),
    )

    expect(response.headers.get('location')).toBeNull()
  })
})

describe('middleware locale routing', () => {
  const https = (path: string) =>
    middleware(request(`https://andycao.me${path}`, { host: 'andycao.me' }))

  it('renders unprefixed paths as English via an internal rewrite', () => {
    const response = https('/about')

    expect(response.headers.get('location')).toBeNull()
    expect(response.headers.get('x-middleware-rewrite')).toBe(
      'https://andycao.me/en/about',
    )
  })

  it('renders the root as the English home page', () => {
    expect(https('/').headers.get('x-middleware-rewrite')).toBe(
      'https://andycao.me/en',
    )
  })

  it('301s /en/* to the unprefixed URL, keeping the query', () => {
    const response = https('/en/blog?page=2')

    expect(response.status).toBe(301)
    expect(response.headers.get('location')).toBe(
      'https://andycao.me/blog?page=2',
    )
  })

  it('301s /en to the root', () => {
    expect(https('/en').headers.get('location')).toBe('https://andycao.me/')
  })

  it('does not treat a path that merely starts with "en" as English', () => {
    expect(https('/english').headers.get('x-middleware-rewrite')).toBe(
      'https://andycao.me/en/english',
    )
  })

  it('passes zh-CN paths through untouched', () => {
    const response = https('/zh-CN/about')

    expect(response.headers.get('location')).toBeNull()
    expect(response.headers.get('x-middleware-rewrite')).toBeNull()
  })
})
