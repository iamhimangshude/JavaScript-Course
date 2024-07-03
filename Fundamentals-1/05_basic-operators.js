const now = 2037;
const ageMe = now - 2003;
const ageOtherMe = now - 2018;

console.log(ageMe, ageOtherMe);

console.log(ageMe * 2, ageOtherMe / 2, 2 ** 3);
// 2 ** 3 means 2 to the power of 3, i.e. 2 * 2 * 2 = 8

const firstName = 'Himangshu';
const lastName = 'De';

console.log(firstName + ' ' + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10
x *= 4; // x = x * 4
x++; // x = x + 1
x--; // x = x - 1
x--;
console.log(x);

// Comparison operators
console.log(ageMe > ageOtherMe); // >, <, >=, <=
console.log(ageOtherMe >= 18);

const isFullAge = ageOtherMe >= 18;

console.log(now - 1991 > now - 2018);