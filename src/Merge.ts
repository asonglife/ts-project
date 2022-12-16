type Foo = {
  a: number;
  b: string;
};

type Bar = {
  b: number;
  c: number;
};

type Merge<FirstType, SecondType> = {
  [K in keyof (FirstType & SecondType)]: K extends keyof SecondType
    ? SecondType[K]
    : K extends keyof FirstType
    ? FirstType[K]
    : never;
};
// 你的实现代码

const ab: Merge<Foo, Bar> = {
  a: 1,
  b: 1,
  c: 1,
};

export {};
