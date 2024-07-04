'use strict';
/*
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

//////////////////////////////////////////////////////

// Differences

// Function declaration
// We can call this func. before its initi
// alisation
function calcAge1(birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge1(1991);


/////////////////////////////////////////////////////

// Function expression
// We can't call this func. before its initi
// alisation
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1991);

console.log(age1, age2);


////////////////////////////////////////////////////

// Arrow Function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(2003);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 60 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(2003, 'Himangshu'));
console.log(yearsUntilRetirement(1993, 'Sharma'));



////////////////////////////////////////////////////

// functions calling other functions.
function cutFruitPieces(fruit) {
    return fruit * 3;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`
    return juice;
}


console.log(fruitProcessor(2, 3));
*/

/////////////////////////////////////////////////////

// Reviewing Functions
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = 2037 - birthYear;
    const retirement = 60 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    }
    else {
        console.log(`${firstName} has already retired!🎉`)
        return -1
    };
}

console.log(yearsUntilRetirement(1991, "Himangshu"));
console.log(yearsUntilRetirement(1950, "Gupta"));