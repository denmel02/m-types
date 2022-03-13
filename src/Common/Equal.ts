type EqualFunction<T> = <P>() => P extends T ? 1 : 2;

export type Equal<T, K> = EqualFunction<T> extends EqualFunction<K> ? true : false;

// type Result = Equal<'str', 'str'>; // true