import { describe, expect, it } from 'vitest'

import { getLocalizedAlternates, stripLocalePrefix } from '../config/i18n'
import { localizedPath } from './locale-path'

describe('localizedPath', () => {
  it('keeps internal paths in the active locale', () => {
    expect(localizedPath('zh-CN', '/about')).toBe('/zh-CN/about')
  })

  it('serves English at the site root without a prefix', () => {
    expect(localizedPath('en')).toBe('/')
    expect(localizedPath('en', '/about')).toBe('/about')
  })

  it('keeps the prefix for the localized home path', () => {
    expect(localizedPath('zh-CN')).toBe('/zh-CN')
  })

  it('leaves external URLs unchanged', () => {
    expect(localizedPath('en', 'https://example.com')).toBe(
      'https://example.com',
    )
  })
})

describe('stripLocalePrefix', () => {
  it('removes a known locale segment', () => {
    expect(stripLocalePrefix('/en/about')).toBe('/about')
    expect(stripLocalePrefix('/zh-CN/blog/post')).toBe('/blog/post')
    expect(stripLocalePrefix('/en')).toBe('/')
    expect(stripLocalePrefix('/zh-CN')).toBe('/')
  })

  it('leaves unprefixed paths alone', () => {
    expect(stripLocalePrefix('/about')).toBe('/about')
    expect(stripLocalePrefix('/')).toBe('/')
    expect(stripLocalePrefix('/english')).toBe('/english')
  })
})

describe('getLocalizedAlternates', () => {
  it('lists every locale by default', () => {
    expect(getLocalizedAlternates('zh-CN', '/about')).toEqual({
      canonical: '/zh-CN/about',
      languages: {
        en: '/about',
        'zh-CN': '/zh-CN/about',
        'x-default': '/about',
      },
    })
  })

  it('canonicalises an untranslated page to the default locale', () => {
    expect(getLocalizedAlternates('zh-CN', '/blog/post', ['en'])).toEqual({
      canonical: '/blog/post',
      languages: { en: '/blog/post', 'x-default': '/blog/post' },
    })
  })

  it('keeps a self canonical on the default locale', () => {
    expect(getLocalizedAlternates('en', '/blog/post', ['en']).canonical).toBe(
      '/blog/post',
    )
  })
})
