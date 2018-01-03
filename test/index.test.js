'use strict'
const {ProductIterable, RangeIterable} = require('x-iterable')
const main = require('..')
const {generate} = main

describe('Basic assertions', () => {
  describe('Types', () => {
    test('generate should be a function', () => expect(typeof generate).toBe('function'))
  })
})

describe('generate(begin, step)', () => {
  const typeCheckArray = array => array.forEach(
    (x, i) => test(`x = ${x}, i = ${i}`, () => expect(typeof x).toBe('number'))
  )

  ProductIterable.pow(
    RangeIterable
      .range(-10, 10)
      .map(x => x / 4),
    2
  ).forEach(([begin, step]) => describe(`begin = ${begin}, step = ${step}`, () => {
    const [a, b, c, d] = generate(begin, step)
    const array = [a, b, c, d]

    describe('types', () => typeCheckArray(array))

    test('values', () => expect(array).toEqual([
      begin + step * 0,
      begin + step * 1,
      begin + step * 2,
      begin + step * 3
    ]))
  }))
})
