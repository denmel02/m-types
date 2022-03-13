export type Awaited<T extends Promise<any>> = T extends Promise<infer K> ? (K extends Promise<any> ? Awaited<K> : K) : never;

// type Result = Awaited<Promise<number | string>>; // number | string