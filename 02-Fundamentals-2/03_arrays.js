'use strict';
/*
const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

// const years = [1991, 1984, 2008, 2024];
// Alternate way: (literal Syntax)
const y = new Array(1991, 1984, 2008, 2024);

// the first element of the array is 
// always counted as 0th position
console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length); // 3
console.log(y.length); // 4

console.log(friends[friends.length - 1]); // 3


friends[2] = 'Jack';
console.log(friends);
// friends = ["Bob", "Oggy"]; // this raises error

const firstName = 'Himangshu';
const himangshu = [firstName, 'De', 2037 - 2003, 'student', friends];
console.log(himangshu);
console.log(himangshu.length);


// Exercise
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);


///////////////////////////////////////////

// Basic Array Methods
const friends = ["Michael", "Steven", "Peter"];
const newLength = friends.push("Jay");

// Push
// Appends the element at the end of an array and returns new length

console.log(friends);
console.log(newLength);


//unshift
//Inserts the element at the start of an array and returns new length

friends.unshift('John');
console.log(friends);


// Remove elements from...
friends.pop(); // last
const popped = friends.pop();
console.log(popped);
console.log(friends);


friends.shift();// first
console.log(friends);


// Getting the positions of elements in an array
console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Michale'));

//`indexOf` returns the position of an element, if not 
//found returns -1.


// ----------------
// checking whether an element is present in an array 
// or not

//`includes` checks for a given value (uses ===) and
//returns a boolean value.

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes('23'));
console.log(friends.includes(23));

if (friends.includes('Steven')) {
    console.log("You have a friend called Steven");
}
/////////////////////////////////////////////

*/