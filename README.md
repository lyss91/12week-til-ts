# 타입 호환성

- SuperType : 더 많은 값을 포함하는 타입
- SubType : 특정 값이나 조건을 가진 타입

## 예시

- Animal 은 수퍼타입
- Cat은 서브타입

## 1. any

- 타입스크립트 `최상위 수퍼타입` 입니다.
- 어떤 타입도 any의 `서브타입` 이 됩니다.

```ts
let value: any;
// string 은 any의 서브타입이라서 할당 가능
value = "안녕";
// number 는 any의 서브타입이라서 할당 가능
value = 100;
// boolean 은 any의 서브타입이라서 할당 가능
value = true;
// 함수도 any의 서브타입이라서 할당 가능
value = () => {};
```

## 2. unknown

- unknown은 모든 타입의 수퍼타입니다.
- 하지만 반드시 타입체크를 직접해야 합니다.
- typeof 등등

```ts
let value: unknown;
// string 은 unknown 의 서브타입이라서 할당가능
value = "안녕";
// number 는 unknown 의 서브타입이라서 할당가능
value = 100;
// boolean 는 unknown 의 서브타입이라서 할당가능
value = true;

// 담겨진 unknown 을 활용하려면 타입체크 필요
if (typeof value === "string") {
  value.toUpperCase(); // 대문자로 바꾸기
}
```

- unknown 은 다른 타입의 서브 타입이 아니다.

```ts
// js 를 마이그레이션 하면서 any 조심하다 보니 unknonw 을 사용함.
let value: unknown = "안녕";

// 아래 구문처럼 unknown 타입을 서브 타입으로 타입 캐스팅을 하면 오류발생함.
let word: string = value;
```

## 3. never

- never 는 수퍼타입이 될 수 없다.
- never 는 모든 타입의 서브 타입이다.

```ts
let value: never;
// never 는 어떤 타입도 할당할 수 없고, 수퍼타입이 될 수 없다.
value = 5;
```

## 4. void

- void 는 undefined 의 수퍼타입
- void 는 any 나 unknown 의 서브타입이 될 수 있다.

- index.ts

```ts
let value: void;
let go: undefined = undefined;
// void 는 undefined 의 수퍼 타입이다.
value = go;
value = undefined;
// any 나 unknown 이 아니므로
value = 5; // 오류

function say(_count: number): string {
  return "hello" + _count;
}
let result: void;
// string 은 void 의 서브 타입이 아니라서 호환안됨.
result = say(1000); // 오류
```
