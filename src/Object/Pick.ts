export type Pick<T, K extends keyof T> = {
  [key in K]: T[key];
}

// interface Test {
//   str: string;
//   numb: number;
//   bool: boolean;
// }

// type Result = Pick<Test, 'str' | 'numb'>;  // { str: string; numb: number };