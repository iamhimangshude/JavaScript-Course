'use strict';

const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never do this ❌
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
};

const himangshu = new Person('Himangshu', 2003);
console.log(himangshu);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 2015);
console.log(matilda, jack);

console.log(himangshu instanceof Person);

// Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

himangshu.calcAge();
matilda.calcAge();

console.log(himangshu.__proto__);
console.log(himangshu.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(himangshu));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person));

// .prototypeOfLinkedObjects

Person.prototype.species = 'Homo Sapiens';
console.log(himangshu.species, matilda.species);

console.log(himangshu.hasOwnProperty('firstName'));
console.log(himangshu.hasOwnProperty('species'));

console.log(himangshu.__proto__);
console.log(himangshu.__proto__.__proto__);
console.log(himangshu.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3, 6, 6, 5, 6, 9, 9]; // new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ == Array.prototype);
console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(x => x + 1);
