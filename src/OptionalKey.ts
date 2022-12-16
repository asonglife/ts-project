type Person = {
  id: string;
  name: string;
  age: number;
  from?: string;
  speak?: string;
};

type OptionalKeys<T> = keyof {
  [K in keyof T as undefined extends T[K] ? K : never]: T[K];
}; // 你的实现代码
type PersonOptionalKeys = OptionalKeys<Person>; // "from" | "speak"

export {};
