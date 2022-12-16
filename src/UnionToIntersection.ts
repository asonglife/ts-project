type UnionToIntersection<U> = (
  U extends any ? (arg: U) => void : never
) extends (arg: infer T) => void
  ? T
  : never;

// 测试用例
type U0 = UnionToIntersection<string | number>; // never
type U1 = UnionToIntersection<{ name: string } | { age: number }>; // { name: string; } & { age: number; }

type CombineFunction =
  | ((x: { x: string }) => void)
  | ((y: { y: number }) => void) extends (arg: infer A) => void
  ? A
  : never;

type Son = [string | number];

export {};
