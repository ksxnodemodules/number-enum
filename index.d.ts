type Key = string | number | symbol
type Value = number
type Return<Keys extends Key> = { readonly [k in Keys]: number }
type Generate = (current?: Value, step?: Value) => IterableIterator<Value>
type Create = <Name extends Key>(names: Name[], current?: Value, step?: Value) => Return<Name>

declare namespace AllFunctions {
  export const generate: Generate
  export const create: Create
}

declare const main: Create & typeof AllFunctions
export = main
