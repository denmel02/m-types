export type Shift<T extends any[]> = T extends [any, ...infer R] ? R : [];

// type Result = Shift<[1, 2, 3]>; // [2, 3]