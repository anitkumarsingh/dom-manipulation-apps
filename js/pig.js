'use strict';
// Selecting elements
const playerZeroScore = document.querySelector('#score--0');
const playerOneScore = document.querySelector('#score--1');
const currentPlayer1Score = document.getElementById('current--0');
const currentPlayer2Score = document.getElementById('current--1');
const dice = document.querySelector('.dice');
const rollDiceEle = document.querySelector('.btn--roll');

// Starting conditions
playerZeroScore.textContent = 0;
playerOneScore.textContent = 0;
dice.classList.add('hidden');

let currentScore = 0;
// Attaching event on roll-dice btn
rollDiceEle.addEventListener('click', function () {
  const diceRandomNo = Math.trunc(Math.random() * 6) + 1;
  dice.classList.remove('hidden');
  dice.src = `../img/dice-${diceRandomNo}.png`;

  if (diceRandomNo !== 1) {
    currentScore += diceRandomNo;
    currentPlayer1Score.textContent = currentScore;
  } else {
    // switch player
  }
});
