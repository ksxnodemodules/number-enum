type KEY = string | number | symbol;
type VAL = number;
type SEQ<X> = Iterator<X> | Iterable<X>;

type RETURN<Keys extends KEY> = { readonly [k in Keys]: number };

declare namespace RETURN {
  interface DEFAULT {
    [key: string]: VAL;
    [key: number]: VAL;
  }
}

declare function GENERATE(current?: VAL, step?: VAL): IterableIterator<VAL>;
declare function MAIN<Name extends KEY>(names: Name[], current?: VAL, step?: VAL): RETURN<Name>

declare namespace MAIN {
  export type Key = KEY;
  export type Val = VAL;
  export type Seq<X> = SEQ<X>;
  export const generate: typeof GENERATE;
  export const create: typeof MAIN;
}

export = MAIN
