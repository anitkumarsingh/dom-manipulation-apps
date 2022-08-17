'use strict';
// Selecting elements
const playerZeroScore = document.querySelector('#score--0');
const playerOneScore = document.querySelector('#score--1');
const currentPlayer1Score = document.getElementById('current--0');
const currentPlayer2Score = document.getElementById('current--1');
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');

const dice = document.querySelector('.dice');
const rollDiceEle = document.querySelector('.btn--roll');
const newGame = document.querySelector('.btn--new');
const holdGame = document.querySelector('.btn--hold');

// Starting conditions
playerZeroScore.textContent = 0;
playerOneScore.textContent = 0;
dice.classList.add('hidden');

let currentScore = 0;
let activePlayer = 0;
const scores = [0, 0];
let isPlaying = true;

const switchPlayer = () => {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;

  //Better option
  player1.classList.toggle('player--active');
  player2.classList.toggle('player--active');
};
// Attaching event on roll-dice btn
rollDiceEle.addEventListener('click', function () {
  if (isPlaying) {
    const diceRandomNo = Math.trunc(Math.random() * 6) + 1;
    dice.classList.remove('hidden');
    dice.src = `../img/dice-${diceRandomNo}.png`;

    if (diceRandomNo !== 1) {
      currentScore += diceRandomNo;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // switch player
      switchPlayer();

      /*
    if(activePlayer === 0){
      player1.classList.remove('player--active');
      player2.classList.add('player--active');
    }else{
      player2.classList.remove('player--active');
      player1.classList.add('player--active');
    }
    */
    }
  }
});

holdGame.addEventListener('click', function () {
  if (isPlaying) {
    //1. adding score to active player
    scores[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent =
      scores[activePlayer];

    //2. check if active player has score of >=100, if then end game
    if (scores[activePlayer] >= 10) {
      isPlaying = false;
      dice.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      //3. Switching player
      switchPlayer();
    }
  }
});
