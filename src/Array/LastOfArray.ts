export type LastOfArray<T extends any[]> = T extends [...any, infer P] ? P : never;

// type Result = LastOfArray<[3, 2, 1]>; // 1