// Type conversion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

// Type coercion
console.log("I am " + 23 + ' years old'); // this is type coercion
console.log("I am " + '23' + ' years old'); // This is also possible
console.log("I am " + String(23) + ' years old'); // if the above did not happen then this the only way

console.log('23' - '10' - 3); // "-" symbol actually performs arithmatic operation not concatenation.
console.log("23" / "2");

let n = "1" + 1;
n = n - 1;
console.log(n);

