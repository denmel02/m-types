export type TupleToObject<T extends readonly PropertyKey[]> = {
  [key in T[number]]: key;
}

// type Test = ['str', 'str1', 'str2'];

// type Result = TupleToObject<Test>; // { str: 'str', str1: 'str1', str2: 'str2' }