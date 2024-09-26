'use strict';

/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      //creating new variable with same as outer scopes variable
      const firstName = 'Steven'; // this is scoped to the if block

      // Reassigning outer scope's variable
      output = 'NEW OUTPUT!'; // manipulating the existing variable in the parent scope
      // const output = 'NEW OUTPUT!'; // this is block scoped

      const str = `Oh, and you are a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str);
    console.log(millenial); // this is function scoped because of the `var` keyword
    // console.log(add(2, 3)); // logs output if strict mode disabled; and it is block scoped
    console.log(output);
  } // printAge
  printAge();

  return age;
}

const firstName = 'Himangshu';
// calcAge(1991);
// console.log(age);
// printAge();

// KEY TAKEAWAYS:

// 1. `let` and `const` are block scoped
// 2. `var` is function scoped
// 3. `function` is block scoped
// 4. variables that are simply defined like in the line 36 is a global scope and object can access it.
// 5. if the variable on line 36 defined after the function call then it would throw error on line 7 of the function calcAge() scope;

/////////////////////////////////////////////////////////

// Hoisting

// Variables

console.log(me);
// console.log(job); // This is in TDZ
// console.log(year); // This is in TDZ

var me = 'Himangshu'; // This is hoisted
let job = 'teacher'; // This is in TDZ
const year = 1991; // This is in TDZ

//Functions
console.log(addDecl(2, 3)); // This is hoisted
// console.log(addExpr(2, 3)); // This is in TDZ
// console.log(addArrow(2, 3)); // This is in TDZ

function addDecl(a, b) {
  return a + b;
}

// This is hoisted
const addExpr = function (a, b) {
  // var addExpr = function (a, b) { // This will give TypeError bcz it is not a function.
  return a + b;
};

var addArrow = (a, b) => a + b;

// Example

console.log(numProducts);

if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;
console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);


////////////////////////////////////////////////////////

// The THIS keyword

// console.log(this);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  // console.log(this);
};
calcAge(1991);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  // console.log(this);
};
calcAgeArrow(1991);

const himangshu = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
himangshu.calcAge();

const unknwn = {
  year: 2017,
};

unknwn.calcAge = himangshu.calcAge; // this technique is called method borrowing.
unknwn.calcAge();

const f = himangshu.calcAge;
f();


///////////////////////////////////////////////////////
var firstName = 'Anonymous';

const himangshu = {
  firstName: 'Himangshu',
  year: 2003,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);

    // Solution 1
    // const self = this; // self or that
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    //   // console.log(this.year >= 1981 && this.year <= 1996);
    // };

    // Solution 2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
      // console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },
  greet: () => console.log(`Hey, ${this.firstName}`),
};

himangshu.greet();
himangshu.calcAge();

// KEY TAKEAWAYS:

// 1. `this` keyword refers to the object that is executing the function
// 2. `this` keyword is not available in arrow functions, it refers the owner of the function in lexical scope
// 3. `this` keyword is not available in strict mode, it shows undefined

// Arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 5, 8);


let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'Himangshu',
  age: 30,
};

const friend = me;
friend.age = 27;
console.log('Friend:', friend);
console.log('Me:', me);


// Primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

// Reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage:', jessica);
console.log('After marriage:', marriedJessica);

// marriedJessica = {};

// Copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before marriage:', jessica2);
console.log('After marriage:', jessicaCopy);
*/
