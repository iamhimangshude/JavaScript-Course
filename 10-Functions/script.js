'use strict';

/* const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // (ES6) style default parameters
  // Old way of defining default values (ES5)
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);
// createBooking('LH123', 1000);
createBooking('LH123', undefined, 1000);
// console.log(bookings);


////////////////////////////////////
// Passing arguments: Value vs Reference

const flight = 'LH234';
const himangshu = {
  name: 'Himangshu De',
  passport: 12345678,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 12345678) {
    alert('Checked in');
  } else {
    alert('Wrong passport!');
  }
};

// checkIn(flight, himangshu);
// console.log(flight);
// console.log(himangshu);

// Is the same as doing...
// const flightNum = flight;
// const passenger = himangshu;
// Above code is call by reference to the value in the memory heap!

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
};

newPassport(himangshu);
checkIn(flight, himangshu);
*/

//////////////////////////////////////////////
// First Class Functions and Higher Order Functions

const oneWord = function (str) {
  return str.replaceAll(' ', '').toLowerCase();
};
