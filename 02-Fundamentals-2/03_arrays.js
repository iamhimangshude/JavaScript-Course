'use strict';

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