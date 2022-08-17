'use strict';
// Selecting elements
const playerZeroScore = document.querySelector('#score--0');
const playerOneScore = document.querySelector('#score--1');
const dice = document.querySelector('.dice');
const rollDiceEle = document.querySelector('.btn--roll');

// Starting conditions
playerZeroScore.textContent = 0;
playerOneScore.textContent = 0;
dice.classList.add('hidden');

// Attaching event on roll-dice btn
rollDiceEle.addEventListener('click', function () {
  const diceRandomNo = Math.trunc(Math.random() * 6) + 1;
  dice.classList.remove('hidden');

  switch (diceRandomNo) {
    case 1:
      dice.src = `../img/dice-1.png`;
      break;
    case 2:
      dice.src = `../img/dice-2.png`;
      break;
    case 3:
      dice.src = `../img/dice-3.png`;
      break;
    case 4:
      dice.src = `../img/dice-4.png`;
      break;
    case 5:
      dice.src = `../img/dice-5.png`;
      break;
    case 6:
      dice.src = `../img/dice-6.png`;
      break;
  }
});
