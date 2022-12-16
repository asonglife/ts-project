type Reverse<T extends Array<any>, R extends Array<any> = []> = T extends [
  infer A,
  ...infer B
]
  ? B["length"] extends 0
    ? [A, ...R]
    : Reverse<B, [A, ...R]>
  : T; // 你的实现代码

type R0 = Reverse<[]>; // []
type R1 = Reverse<[1, 2, 3]>; // [3, 2, 1]
export {};
