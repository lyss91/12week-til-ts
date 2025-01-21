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
