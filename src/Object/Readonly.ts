export type Readonly<T> = {
  readonly [key in keyof T]: T[key];
}

// interface Test {
//   str: string;
//   numb: number;
//   bool: boolean;
// }

// type Result = Readonly<Test>; // { readonly str: string; readonly numb: number; readonly bool: boolean }