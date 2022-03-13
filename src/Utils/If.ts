export type If<C extends boolean, T, E> = C extends true ? T : E;

// type ResultTrue = If<true, string, number> // string;

// type ResultFalse = If<false, string, number> // number;
