import assert from 'static-type-assert'
import main, { create, generate } from '../..'

namespace sym {
  export const a = Symbol()
  export const b = Symbol()
}

assert<typeof create>(main)

const object = { create, generate }
assert<typeof object>(main)

assert<{
  readonly a: number
  readonly b: number
  readonly [sym.a]: number
  readonly [sym.b]: number
}>(create(['a', 'b', sym.a, sym.b]))

assert<{
  readonly [key: string]: number
}>(create(Array<string>()))

assert<{
  readonly [sym.a]: number
  readonly [sym.b]: number
}>(create(Array<typeof sym.a | typeof sym.b>()))

assert<
  IterableIterator<number>
>(generate())
