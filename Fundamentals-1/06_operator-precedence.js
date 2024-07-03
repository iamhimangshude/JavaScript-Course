const now = 2037;
const ageOfMe = now - 2003;
const ageOfOtherMe = now - 2018;

console.log(now - 2003 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

// const averageAge = ageOfMe + ageOfOtherMe / 2; // = 43.5 not possible
const averageAge = (ageOfMe + ageOfOtherMe) / 2; // = 26.5 possible answer

console.log(ageOfMe, ageOfOtherMe);
console.log(averageAge);
