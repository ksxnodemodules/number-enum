import assert from 'static-type-assert'
import { create, generate } from '../index'

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
