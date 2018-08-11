type KEY = string | number | Symbol;
type VAL = number;
type SEQ<X> = Iterator<X> | Iterable<X>;

declare function GENERATE(current?: VAL, step?: VAL): IterableIterator<VAL>;
declare function MAIN(names: SEQ<KEY>, current?: VAL, step?: VAL): { [key: string] : VAL; };

declare namespace MAIN {
  export type Key = KEY;
  export type Val = VAL;
  export type Seq<X> = SEQ<X>;
  export const generate: typeof GENERATE;
  export const create: typeof MAIN;
}

export = MAIN
