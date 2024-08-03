'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    // when there is no input
    displayMessage('🛑 No number!');
  } else if (guess === randomNumber) {
    // when player wins
    displayMessage('🎉 Correct Number!');

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    document.querySelector('.number').textContent = randomNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';
  } else if (guess !== randomNumber) {
    // when guess is wrong
    if (score > 1) {
      displayMessage(guess > randomNumber ? '📈Too High!' : '📉Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = 0;
      displayMessage('💥You lost the game!');
    }
  }
  // else if (guess > randomNumber) {
  //   // when player guess is high
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈Too High!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.score').textContent = 0;
  //     document.querySelector('.message').textContent = '💥You lost the game!';
  //   }
  // } else if (guess < randomNumber) {
  //   // when player guess is low
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉Too Low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.score').textContent = 0;
  //     document.querySelector('.message').textContent = '💥You lost the game!';
  //   }
  // }
});

////////////////////////////////////////////////////////
// Coding Challenge #1

/* 
Implement a game reset functionality so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and  attach a click event handler
2. In the handler function, restore initial values of the score and randomNumber variables.
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15 rem)

GOOD LUCK 😄
 */

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('input').value = '';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
});
