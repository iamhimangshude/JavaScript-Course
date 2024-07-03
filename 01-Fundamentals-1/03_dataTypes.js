/* There are 7 primitive data types

1. Number: Floating point numbers. Used for decimals and integers `let age = 23;`
2. String: Sequence of characters. Used for texts `let firstName = 'John';`
3. Boolean: Logical type that can only be true or false used for taking decisions. `let fullAge = true;`
4. Undefined: Value taken by a variable that is not yet defined(empty value) `let children'`
5. Null: Also means empty value
6. Symbol (ES2015): Value that is unique and cannot be changed [Not useful for now]
7. BigInt (ES2020) Largers integers than the Number type can hold
*/

console.log("------------------------------------")

let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof "Hello");

// reassigning a variable

javascriptIsFun = "YES!";
console.log(javascriptIsFun)
console.log(typeof javascriptIsFun)

let year;
console.log(year);
console.log(typeof year);

year = 2003
console.log(year)
console.log(typeof year)

console.log(typeof null)