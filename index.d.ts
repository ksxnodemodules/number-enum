export type Key = string | Symbol;
export type Val = number;

declare function GENERATE(current: Val = 0, step: Val = 1): Iterator<Val>;
declare function MAIN(names: Key[], current: Val = 0, step: Val = 1): { [key: Key] : Val; };

declare namespace MAIN {
  export const generate = GENERATE;
  export const create = MAIN;
}

export = MAIN
