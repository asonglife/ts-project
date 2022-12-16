type IsUnion<T, U = T> = T extends any
  ? [U] extends [T]
    ? false
    : true
  : never; // 你的实现代码

// type I0 = IsUnion<string | number>; // true
// type I1 = IsUnion<string | never>; // false
// type I2 = IsUnion<string | unknown>; // false

type X1 = [string | unknown];
const x: X1 = [1];

type IsNever<T> = [T] extends [never] ? true : false;
type I0 = IsNever<never>; // true
type I1 = IsNever<never | string>; // false
type I2 = IsNever<null>; // false

export {};
