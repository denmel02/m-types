export type Pop<T extends any[]> = T extends [...infer R, any] ? R : never;

// type Result = Pop<[1, 2, 3]>; // [1, 2]