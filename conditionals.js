const age = 20;


if (age >= 18) {
    console.log("You can start driving license 🚙");
} else {
    const yearsLeft = 18 - age;
    console.log(`You are too young. Wait another ${yearsLeft} years :)`);
}


const birthYear = 2003;
let century;

if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century);