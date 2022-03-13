import { Equal } from "../Common/Equal";

export type Includes<T extends readonly any[], U> = T extends [infer K, ...infer R] ?
  (Equal<K, U> extends true ? true : Includes<R, U>) :
  false;

// type Result = Includes<['str', 1], 'str'>; // true