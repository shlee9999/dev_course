// class Counter {
//   #count;
//   constructor(count) {
//     this.#count = count;
//   }
//   increase() {
//     this.#count++;
//   }
//   display() {
//     console.log(this.count);
//   }
// }
// const counter = new Counter(0);
// counter.increase();
// counter.increase();
// counter.increase();
// counter.increase();
// counter.display();

class Employee {
  constructor(name, depart, hour, wage) {
    this.name = name;
    this.depart = depart;
    this.hour = hour;
    this.wage = wage;
  }
  getPay() {
    return this.hour * this.wage;
  }
}
class FullTime extends Employee {
  static #WAGE = 30000;
  constructor(name, depart, hour) {
    super(name, depart, hour, FullTime.#WAGE);
  }
}

class PartTime extends Employee {
  static #WAGE = 25000;
  constructor(name, depart, hour) {
    super(name, depart, hour, PartTime.#WAGE);
  }
}
var employee = new FullTime('소미', '개발', 30);
var semy = new PartTime('세미', '디자인', 20);
console.log(employee.getPay());
console.log(semy.getPay());
