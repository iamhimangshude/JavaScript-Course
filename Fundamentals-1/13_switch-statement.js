const day = "monday";

switch (day) {
    case "monday": // day === 'monday'
        console.log(`Today is ${day}, go to work`);
        break
    case "tuesday":
        console.log(`Today is ${day}, do work`);
        console.log("Chill in the evening!");
        break
    case "wednesday":
    case "thursday":
        console.log(`Today is ${day}`);
        break
    case "friday":
        console.log(`Today is ${day}, week on end`);
        break
    case "saturday":
        console.log(`Today is ${day}, week end`);
        break
    case "sunday":
        console.log(`Today is ${day}, off day`);
        break
    default:
        console.log("Unknown Day!");
}

// Equivalent if-else statement
console.log("--------------------------------");
console.log("If-else alternative for switch-case:");
if (day === 'monday') {
    console.log(`Today is ${day}, go to work`);
}
else if (day === 'tuesday') {
    console.log(`Today is ${day}, do work`);
    console.log("Chill in the evening!");
}
else if (day === 'wednesday' || day === 'thursday') {
    console.log(`Today is ${day}`);
}

else if (day === 'friday') {
    console.log(`Today is ${day}, week on end`);
}
else if (day === 'saturday') {
    console.log(`Today is ${day}, week end`);
}
else if (day === 'sunday') {
    console.log(`Today is ${day}, off day`);
}
else {
    console.log("Unknown Day!");
}