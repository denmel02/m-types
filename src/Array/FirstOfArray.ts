export type FirstOfArray<T extends any[]> = T extends [] ? never : [0];

// type Test = ['a', 'b', 'c'];

// type Result = FirstOfArray<Test>; // 'a'