'use strict';

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
calcAge(1991);
// console.log(age);
// printAge();

// KEY TAKEAWAYS:

// 1. `let` and `const` are block scoped
// 2. `var` is function scoped
// 3. `function` is block scoped
// 4. variables that are simply defined like in the line 36 is a global scope and object can access it.
// 5. if the variable on line 36 defined after the function call then it would throw error on line 7 of the function calcAge() scope;

// Happy Coding!
