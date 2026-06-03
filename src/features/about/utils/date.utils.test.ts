import { afterEach, beforeEach, expect, test, vi } from 'vitest'

import { getAge } from './date.utils'

beforeEach(() => {
  vi.useFakeTimers()
  vi.setSystemTime(new Date('2023-08-15'))
})

afterEach(() => {
  vi.useRealTimers()
})

test('test get age', () => {
  const age = getAge('2016-06-01')
  expect(age).toBe(7)
})
