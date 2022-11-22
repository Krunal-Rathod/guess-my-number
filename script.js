'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);
//document.querySelector('.number').textContent = secretNumber;
let score = 20;
let highScore = 0;

let displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function() {
    const guessNumber = Number(document.querySelector('.guess').value);
    
    // When there is no input
    if (!guessNumber) {
        displayMessage("⛔ No Number!");
    } 
    // When play wins
    else if(secretNumber === guessNumber) {
        displayMessage("🎉 Correct Number!");
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;

        if(score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    }
    // When guess different
    else if(secretNumber !== guessNumber) {
        if(score > 1) {
            displayMessage(guessNumber > secretNumber ? "📈 Too High!" : "📈 Too Low!");
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            displayMessage( "💥 You Lost the game!");
            document.querySelector('.score').textContent = 0;
        }
    }
});

// Reset game
document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20 + 1);
    document.querySelector('.number').textContent = '?';
    displayMessage("Start guessing...");
    document.querySelector('body').style.backgroundColor = '';
    document.querySelector('.number').style.width = '';
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
});