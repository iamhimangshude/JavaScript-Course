const age = "18";
if (age === 18) console.log("You just became an adult (strict)");

if (age == 18) console.log("You just became an adult (loose)");

/*
Note:
* Don't use loose (==) equality operator, this may lead to bugs in your code!
* Always use strict (===) equality operator, this is the general rule for writing code and 
  does not lead to any bugs!
*/

const favorite = Number(prompt("What's your favorite number?"));
console.log(favorite);
console.log(typeof favorite);

// if (favorite == 23) { // "23" == 23
//     console.log("Cool! 23 is an amazing number!");
//}
if (favorite === 23) { // 23 === 23
    console.log("Cool! 23 is an amazing number!");
} else if (favorite === 7) {
    console.log("7 is also a cool number!");
} else {
    console.log("Number is not 23 or 7");
}

if (favorite !== 23) console.log('Why not 23?');