'use strict';

function logger() { // function declaration
    // Function Body...
    console.log("My name is Himangshu");
}

// invoking the function / calling / running
logger();
logger();
logger();

function fruitProcessor(
    // declaring parameters... they expect some input for the 
    // function
    apples,
    oranges,
) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

// storing the returned data in a variable
const appleJuice = fruitProcessor(3, 0);
console.log(appleJuice);

// directly logging the returned data in the console.
console.log(fruitProcessor(5, 0));


const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number("23"); // this is also a function, which is built-in
console.log(num);
