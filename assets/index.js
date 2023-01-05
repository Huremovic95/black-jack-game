let player = {
    nameP: "Emir" ,
    chips: 100
}
let hasBlackJack = false;
let isAlive = false;
let message = ""
let cards = [];
let sum = 0;

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById ("cards-el");
let playerEl = document.getElementById ("player-el");

playerEl.textContent = player.nameP + ": $" + player.chips;

function getRandomCard(){

    let randomNumber = Math.floor(Math.random() *13) + 1;

    if (randomNumber > 10){
        return 10;
    } else if (randomNumber === 1){
        return 11;
    } else {
        return randomNumber;
    }
}

function startGame(){

    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = cards[0] + cards[1];
    isAlive = true;

    runGame();
}

function runGame(){

    sumEl.textContent = "sum: " + sum;
    cardsEl.textContent = "Cards: ";
    for (i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + ", " ;
    }
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

function newCards(){

    if (isAlive === true && hasBlackJack === false){
    let newCard = getRandomCard();
    sum += newCard;
    cards.push(newCard);
    runGame();
    }
}
