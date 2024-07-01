// 5 false values : 0, "", undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Himangshu'));
console.log(Boolean({}));

const money = 100; // type Number, but in logical concept it is a `false`
if (money) {
    console.log("Don't spend it all!");
} else {
    console.log("You should get a job!");
}

let height = 0;

if (height) {
    console.log("YAY! height is defined!");
} else {
    console.log("height is UNDEFINED!");
}