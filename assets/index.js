let firstCard = 10;
let secondCard = 8;
let hasBlackJack = false;
let isAlive = true;
let message = ""

let sum = firstCard + secondCard;
let messageEl = document.getElementById("message-el");

function startGame(){
    if (sum <= 20) {
        message = `You have ${sum} points do you want to draw a new card`;
        } else if (sum === 21) {
            hasBlackJack = true;
            message = "Nice, you've got blackjack!";
        }
        else {
            isAlive = false;
            message = "you're out of the game!";
        }
        messageEl.textContent = message;
}
