type Fn = (a: number, b: string) => number;
type AppendArgument<F, A> = F extends (...args: infer T) => any
  ? (x: A, ...args: T) => ReturnType<F>
  : never; // 你的实现代码

type FinalFn = AppendArgument<Fn, boolean>;
// (x: boolean, a: number, b: string) => number
export {};
