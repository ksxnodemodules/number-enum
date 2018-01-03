'use strict'
const {ProductIterable, RangeIterable, ConcatIterable} = require('x-iterable')
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
    new ConcatIterable(
      [undefined],
      RangeIterable
        .range(-10, 10)
        .map(x => x / 4)
    ),
    2
  ).forEach(([begin, step]) => describe(`begin = ${begin}, step = ${step}`, () => {
    const [a, b, c, d] = generate(begin, step)
    const array = [a, b, c, d]
    const [actualBegin = 0, actualStep = 1] = [begin, step]

    describe('types', () => typeCheckArray(array))

    test('values', () => expect(array).toEqual([
      actualBegin + actualStep * 0,
      actualBegin + actualStep * 1,
      actualBegin + actualStep * 2,
      actualBegin + actualStep * 3
    ]))
  }))
})
