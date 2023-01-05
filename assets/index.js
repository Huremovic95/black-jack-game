let firstCard = getRandomCard();
let secondCard = getRandomCard();
let hasBlackJack = false;
let isAlive = true;
let message = ""
let cards = [firstCard, secondCard];

let sum = firstCard + secondCard;
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById ("cards-el");

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
    let newCard = getRandomCard();
    sum += newCard;
    cards.push(newCard);
    runGame();
}
