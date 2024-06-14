import { expect, test } from 'vitest'

import { getAge } from './date.utils'

test('test gat age', () => {
  const age = getAge('2016-06-01')
  console.log('age', age)
  expect(age).toBe(7)
})
