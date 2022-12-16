declare const config: Chainable;

type Chainable<T extends any = {}> = {
  option<S extends string, V>(
    key: S,
    value: V
  ): Chainable<{
    [K in keyof (T & {
      [P in keyof { S: S } as `${S}`]: V;
    })]: (T & {
      [P in keyof { S: S } as `${S}`]: V;
    })[K];
  }>;
  get(): T;
};

const result = config
  .option("age", 7)
  .option("name", "lolo")
  .option("address", { value: "XiaMen" })
  .get();

type ResultType = typeof result;
// 期望 ResultType 的类型是：
// {
//   age: number
//   name: string
//   address: {
//     value: string
//   }
// }
export {};

const TestFunction = <T extends string>(
  x: T extends infer K ? T : never
): void => {
  console.log(x);
};

TestFunction("1w212");

type X = keyof "age";
