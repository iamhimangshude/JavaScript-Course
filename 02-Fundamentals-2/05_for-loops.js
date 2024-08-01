'use strict';
/*
// console.log("Lifting weights repetition 1 🏋️");
// console.log("Lifting weights repetition 2 🏋️");
// console.log("Lifting weights repetition 3 🏋️");
// console.log("Lifting weights repetition 4 🏋️");
// console.log("Lifting weights repetition 5 🏋️");
// console.log("Lifting weights repetition 6 🏋️");
// console.log("Lifting weights repetition 7 🏋️");
// console.log("Lifting weights repetition 8 🏋️");
// console.log("Lifting weights repetition 9 🏋️");
// console.log("Lifting weights repetition 10 🏋️");

// 💡 for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep} 🏋️`);
}


const himangshu = [
    "Himangshu",
    'De',
    2037 - 2003,
    'student',
    ["Michael", "Steven", "Peter"],
    true,
];

const types = [];

// console.log(himangshu[0]);
// console.log(himangshu[1]);
// ...
// console.log(himangshu[4]);
// ❌ himangshu[5] does not exist

for (let i = 0; i < himangshu.length; i++) {
    console.log(himangshu[i], typeof himangshu[i]);
    // types[i] = typeof himangshu[i]
    types.push(typeof himangshu[i])
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}

console.log(ages);


// 💡 continue and break

console.log("---------------- ONLY STRINGS ---------------");
for (let i = 0; i < himangshu.length; i++) {
    if (typeof himangshu[i] !== 'string') continue;

    console.log(himangshu[i], typeof himangshu[i]);
}


console.log("------------- BREAK WITH NUMBER -------------");
for (let i = 0; i < himangshu.length; i++) {
    if (typeof himangshu[i] !== 'number') break;

    console.log(himangshu[i], typeof himangshu[i]);
}



const himangshu = [
    "Himangshu",
    'De',
    2037 - 2003,
    'student',
    ["Michael", "Steven", "Peter"],
    true,
];

for (let i = himangshu.length - 1; i >= 0; i--) {
    console.log(himangshu[i]);
}

for (let exercise = 1; exercise <= 4; exercise++) {
    console.log(`------------- Starting exercise ${exercise}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋🏻`);
    }
}

*/