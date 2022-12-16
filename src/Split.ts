type Item = "semlinker,lolo,kakuqo";

type Split<
  S extends string,
  Delimiter extends string,
  Arr extends Array<any> = []
> = S extends `${infer A}${Delimiter}${infer B}`
  ? Split<B, Delimiter, [...Arr, A]>
  : [...Arr, S]; // 你的实现代码

type ElementType = Split<Item, ",">; // ["semlinker", "lolo", "kakuqo"]
type ElementType2 = Split<"dog=1&cat=2&pig=34", "&">;
export {};
