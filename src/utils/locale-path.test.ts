import { describe, expect, it } from 'vitest'

import { localizedPath } from './locale-path'

describe('localizedPath', () => {
  it('keeps internal paths in the active locale', () => {
    expect(localizedPath('zh-CN', '/about')).toBe('/zh-CN/about')
  })

  it('supports the localized home path', () => {
    expect(localizedPath('en')).toBe('/en')
  })

  it('leaves external URLs unchanged', () => {
    expect(localizedPath('en', 'https://example.com')).toBe(
      'https://example.com',
    )
  })
})
