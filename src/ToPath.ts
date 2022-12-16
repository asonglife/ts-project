export {};

type ToKey<T> = T extends `${infer A}[${infer B}]` ? [A, B] : [T];

type ToPath<
  S extends string,
  T extends Array<any> = []
> = S extends `${infer A}.${infer B}`
  ? ToPath<B, [...T, ...ToKey<A>]>
  : [...T, ...ToKey<S>]; // 你的实现代码

let a: ToPath<"foo.bar.baz">; //=> ['foo', 'bar', 'baz']
let b: ToPath<"foo[0].bar.baz">; //=> ['foo', '0', 'bar', 'baz']
