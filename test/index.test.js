'use strict'
const {ProductIterable, RangeIterable, ConcatIterable} = require('x-iterable')
const main = require('..')
const {generate, create} = main

const represent = x => {
  if (!x) return String(x)

  switch (typeof x) {
    case 'string':
    case 'number':
    case 'boolean':
      return JSON.stringify(x)
    case 'object':
      return x instanceof Array
        ? `[${
          x.map(represent).join(', ')
        }]`
        : `{${
          Object
            .entries(x)
            .filter(([key]) => typeof key === 'string')
            .map(([key, val]) => key + ': ' + represent(val))
            .join(', ')
        }}`
    default:
      throw new TypeError('Cannot represent this type of value')
  }
}

describe('Basic assertions', () => {
  describe('Types', () => {
    test('generate should be a function', () => expect(typeof generate).toBe('function'))
    test('create should be a function', () => expect(typeof create).toBe('function'))
  })

  test('create.create === create', () => expect(main).toBe(create))
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

describe('create(names, begin, step)', () => {
  const typeCheckObject = object => Object.entries(object).forEach(
    ([key, val]) =>
      test(`val = ${val}, key = ${key}`, () => expect(typeof val).toBe('number'))
  )

  new ProductIterable(
    [undefined, [], 'abc', ['def', 'ghi', 'jkl']],
    ...ConcatIterable.times(
      [new ConcatIterable(
        [undefined],
        RangeIterable
          .range(-10, 10)
          .map(x => x / 4)
      )],
      2
    )
  ).forEach(([names, begin, step]) => {
    const result = create(names, begin, step)
    const actualNames = names || []

    describe('types', () => typeCheckObject(result))

    describe(
      `names = ${represent(names)}, begin = ${begin}, step = ${step}, result = ${represent(result)}`,
      () => {
        const keys = Object.keys(result)
        expect(keys.length).toBe(actualNames.length)
      }
    )
  })
})
