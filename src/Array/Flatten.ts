export type Flatten<T extends any[]> = T extends [infer R, ...infer P] ?
  (R extends any[] ? [...Flatten<R>, ...Flatten<P> ] : [R, ...Flatten<P>]) :
  [];

// type Result = Flatten<[1, [2], [[3]]]>; // [1, 2, 3]
