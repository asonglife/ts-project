type JoinStrArray<
  Arr extends string[],
  Sperator extends string,
  Result extends string = ""
> = Arr extends [infer A, ...infer B]
  ? A extends string
    ? B extends string[]
      ? Result extends ""
        ? JoinStrArray<B, Sperator, A>
        : JoinStrArray<B, Sperator, `${Result}${Sperator}${A}`>
      : Result
    : Result
  : Result;

// 测试用例
type Names = ["Sem", "Lolo", "Kaquko"];
type NamesComma = JoinStrArray<Names, ",">; // "Sem,Lolo,Kaquko"
type NamesSpace = JoinStrArray<Names, " ">; // "Sem Lolo Kaquko"
type NamesStars = JoinStrArray<Names, "⭐️">; // "Sem⭐️Lolo⭐️Kaquko"
export {};
