import { describe, expect, it } from 'vitest'

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
