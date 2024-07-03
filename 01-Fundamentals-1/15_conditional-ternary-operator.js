const age = 16;
const drink = age >= 18
    ? "cola🍹" // executes if true
    : "water💧"; // executes if false

console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = "cola🍹";
} else {
    drink2 = "water💧";
}

console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "cola🍹" : "water💧"}`);