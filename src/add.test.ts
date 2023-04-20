import { add } from './add'

describe('add', () => {
  test('Add two numbers', () => expect(add(1, 1)).toEqual(2))
})
