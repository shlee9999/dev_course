// let foo = 1;

// {
//   console.log(foo); // 2
//   let foo = 2;
// }

// console.log(foo); // 1

// console.log(a); // undefined 출력. reference error가 아님.
// a = 10;
// var a; // 변수 선언
// console.log(a);

// console.log(a); // reference error
// a = 10;
// let a; // 변수 선언
// console.log(a); // 10

// var x = 1; // 전역 변수
// y = 2; // 암묵적 전역
// function foo() {} // 전역 함수
// console.log(window.x);
// console.log(x);
// console.log(window.y);
// console.log(y);
// console.log(window.foo);
// console.log(foo);

// let x = 1;

// console.log(a); // ReferenceError: Cannot access 'a' before initialization
// let a;
// console.log(x);

console.log(foo); // undefined
var foo = function () {
  console.log('foo!');
};
console.log(foo); //ƒ () {
//   console.log('var foo!');
// }

console.log(bar); //  ƒ bar() {
//   console.log('bar!');
// }
function bar() {
  console.log('bar!');
}
