// const func = function () {
//   console.log(this); // 호출 방법에 따라 다름
//   setTimeout(function () {
//     console.log('callback this : ', this); // 일반 함수로 호출되므로 항상 window
//   }, 100);
// };
// func(); // window

// const obj = { func };
// obj.func(); // {fun: ƒ}

// new func(); // fun {}

// const person = {
//   name: 'Lee',
//   sayHi: () => console.log(`Hi ${this.name}`),
//   sayHello() {
//     console.log(`Hello ${this.name}`);
//   },
//   sayFoo: function () {
//     console.log(`Foo ${this.name}`);
//   },
// };
// person.sayBar = function () {
//   console.log(`Bar ${this.name}`);
// };
// person.sayHi(); // Hi undefined
// person.sayHello();
// person.sayFoo();
// person.sayBar();

// class Person {
//   constructor() {
//     this.name = 'Lee';
//     this.sayHi = () => console.log(`Hi ${this.name}`);
//   }
// }
// const p = new Person();
// p.sayHi();
