'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);
//document.querySelector('.number').textContent = secretNumber;
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function() {
    const guessNumber = Number(document.querySelector('.guess').value);
    //console.log(typeof guessNumber, guessNumber);
    
    // When there is no input
    if (!guessNumber) {
        document.querySelector('.message').textContent = "⛔ No Number!";
    } 
    // When play wins
    else if(secretNumber === guessNumber) {
        document.querySelector('.message').textContent = "🎉 Correct Number!";
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;

        if(score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    }
    // When high number
    else if(guessNumber > secretNumber) {
        if(score > 1) {
            document.querySelector('.message').textContent = "📈 Too High!";
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            document.querySelector('.message').textContent = "💥 You Lost the game!";
            document.querySelector('.score').textContent = 0;
        }
    } 
    // When low number
    else if(guessNumber < secretNumber) {
        if(score > 1) {
            document.querySelector('.message').textContent = "📉 Too Low!";
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            document.querySelector('.message').textContent = "💥 You Lost the game!";
            document.querySelector('.score').textContent = 0;
        }
    }
});

// Reset game
document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20 + 1);
    document.querySelector('.number').textContent = '?';
    document.querySelector('.message').textContent = "Start guessing...";
    document.querySelector('body').style.backgroundColor = '';
    document.querySelector('.number').style.width = '';
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
});