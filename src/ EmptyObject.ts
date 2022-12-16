type EmptyObject = {
  [K in PropertyKey]: never;
};

// 测试用例
const shouldPass: EmptyObject = {}; // 可以正常赋值
// const shouldFail: EmptyObject = {
//   // 将出现编译错误
//   prop: "TS",
// };

type SomeType = {
  prop: string;
};

type StrictType<T1 extends T2, T2> = {
  [K in keyof T1]: K extends keyof T2 ? T1[K] : never;
};

// 更改以下函数的类型定义，让它的参数只允许严格SomeType类型的值
function takeSomeTypeOnly<T extends SomeType>(x: StrictType<T, SomeType>) {
  return x;
}

// 测试用例：
const x = { prop: "a" };
takeSomeTypeOnly(x); // 可以正常调用

const y = { prop: "a", addditionalProp: "x" };
// takeSomeTypeOnly(y); // 将出现编译错误

export {};
