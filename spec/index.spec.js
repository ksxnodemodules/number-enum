'use strict'
const {create, generate} = require('..')

describe('function create', () => {
  describe('special cases', () => {
    test('create()', () => expect(create()).toEqual(create([])))
    test('create([])', () => expect(create([])).toEqual({}))
    test('create(<String>)', () => expect(create('abcdef')).toEqual(create([...'abcdef'])))
  })

  describe('normal cases', () => {
    test('(∅ ∅)', () => expect(create(['abc', 'def', 'ghi'])).toEqual({abc: 0, def: 1, ghi: 2}))
    test('(4 ∅)', () => expect(create(['abc', 'def', 'ghi'], 4)).toEqual({abc: 4, def: 5, ghi: 6}))
    test('(0 -1)', () => expect(create(['abc', 'def', 'ghi'], 0, -1)).toEqual({abc: 0, def: -1, ghi: -2}))
    test('(0 .1)', () => expect(create(['abc', 'def', 'ghi'], 0, 0.1)).toEqual({abc: 0, def: 0.1, ghi: 0.2}))
  })
})

describe('function generate', () => {
  const getArray = iterable => {
    const [a, b, c, d] = iterable
    return [a, b, c, d]
  }

  describe('special cases', () => {
    test('(∅ ∅)', () => expect(getArray(generate())).toEqual(getArray(generate(0, 1))))
    test('(0 ∅)', () => expect(getArray(generate(0))).toEqual(getArray(generate(0, 1))))
    test('(n ∅)', () => expect(getArray(generate(3))).toEqual(getArray(generate(3, 1))))
    test('(∅ 1)', () => expect(getArray(generate(undefined, 1))).toEqual(getArray(generate(0, 1))))
    test('(∅ n)', () => expect(getArray(generate(undefined, 5))).toEqual(getArray(generate(0, 5))))
  })

  describe('normal cases', () => {
    test('(0 1) → [0 1 2 3]', () => expect(getArray(generate(0, 1))).toEqual([0, 1, 2, 3]))
    test('(0 3) → [0 3 6 9]', () => expect(getArray(generate(0, 3))).toEqual([0, 3, 6, 9]))
    test('(0 -1) → [0 -1 -2 -3]', () => expect(getArray(generate(0, -1))).toEqual([0, -1, -2, -3]))
  })
})
