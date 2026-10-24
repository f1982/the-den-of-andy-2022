import { describe, expect, it } from 'vitest'

import { fillTemplate } from './fill-template'

describe('fillTemplate', () => {
  it('fills known placeholders and keeps unknown ones', () => {
    expect(fillTemplate('{a} of {b} {c}', { a: 1, b: 'two' })).toBe(
      '1 of two {c}',
    )
  })
})
