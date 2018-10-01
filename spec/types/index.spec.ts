import assert from 'static-type-assert'
import main, { create, generate } from '../..'

assert<typeof create>(main)

const object = { create, generate }
assert<typeof object>(main)

assert<{
  readonly 0: number,
  readonly 1: number,
  readonly 2: number,
  readonly a: number,
  readonly b: number
}>(create([0, 1, 2, 'a', 'b']))

assert<{
  readonly [key: number]: number
}>(create(Array<number>()))

assert<{
  readonly [key: string]: number
}>(create(Array<string>()))

assert<
  IterableIterator<number>
>(generate())
