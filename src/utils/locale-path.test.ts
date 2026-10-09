import { describe, expect, it } from 'vitest'

import { stripLocalePrefix } from '../config/i18n'
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
