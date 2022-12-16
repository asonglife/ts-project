type Foo = {
  a?: number;
  b?: string;
  c?: boolean;
};

type Mutable<T, Keys extends keyof T = keyof T> = {
  [K in Keys]-?: T[K];
} & Pick<T, Exclude<keyof T, Keys>>; // 你的实现代码

const mutableFoo: Mutable<Foo, "a"> = { a: 1, b: "2", c: true };

mutableFoo.a = 3; // OK
mutableFoo.b = "6"; // Cannot assign to 'b' because it is a read-only property.

export {};
