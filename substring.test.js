import { substring } from "./substring";


test('Find sub string in string', () => {
  expect(substring('Siddharth', 'Sid')).toBeGreaterThanOrEqual(0)
})

test('No sub string in string', () => {
  expect(substring('Siddharth', 'Sids')).toBe(-1)
})

test('mulple word as substring in string', () => {
  expect(substring('My name is Siddharth', 'name is')).toBeGreaterThanOrEqual(0)
})