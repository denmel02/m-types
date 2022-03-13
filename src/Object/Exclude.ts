export type Exclude<T, U> = T extends U ? never : T;

// type Result = Exclude<string | number | boolean | null, boolean | null>; // string | number