type KEY = string;
type VAL = number;

declare function GENERATE(current?: VAL, step?: VAL): Iterator<VAL>;
declare function MAIN(names: KEY[], current?: VAL, step?: VAL): { [key: string] : VAL; };

declare namespace MAIN {
  export const generate: typeof GENERATE;
  export const create: typeof MAIN;
}

export = MAIN
