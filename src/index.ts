import "reflect-metadata";

// 控制反转和依赖注入
// injectable
const Injectable = (): ClassDecorator => {
  return (target) => {};
};

type Constructor<T = any> = new (...args: any[]) => T;
class OtherService {
  a = 1;
}
class AnotherService {
  b = 2;
}
@Injectable()
class TestService {
  constructor(
    public readonly otherService: OtherService,
    public readonly anotherService: AnotherService
  ) {}

  testMethod() {
    console.log(this.otherService.a);
    console.log(this.anotherService.b);
  }
}

function Factory<T>(target: Constructor<T>): T {
  const providers = Reflect.getMetadata("design:paramtypes", target);
  console.log(providers, "providers");
  const args = providers.map((provider: Constructor) => new provider());
  return new target(...args);
}

const factory = Factory(TestService);
console.log(factory instanceof Factory, "factory");
Factory(TestService).testMethod();

type Person = {
  name: string;
  age: number;
};

type Foo = {
  a: number;
  b?: string;
  c: boolean;
};

type FP = Person & Foo;

type Simplify<T> = {
  [P in keyof T]: T[P];
};

type SetAllOptional<T> = Partial<T>;

type SetOptional<T, K extends keyof T> = Simplify<
  Partial<Pick<T, K>> & Pick<T, Exclude<keyof T, K>>
>;

type SetRequired<T, K extends keyof T> = Simplify<
  Required<Pick<T, K>> & Pick<T, Exclude<keyof T, K>>
>;
