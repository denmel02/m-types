export type AnyOf<T extends readonly any[]> = T[number] extends 0 | '' | false | [] | Record<string, never> ? false : true;

// type ResultTrue = AnyOf<['1']>; // true

// type ResultFalse = AnyOf<[0, '', false, [], {}]>; // false