let playerChips = 200;
let playerBet = 10;
let hasBlackJack = false;
let isAlive = false;
let winLoseMessage = "";
let message = "";
let cards = [];
let sum = 0;
let dealerCards = [];
let dealerSum = 0;

let messageEl = document.getElementById("message-el");
let winLoseEL = document.getElementById ("winlose-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById ("cards-el");
let playerChipsEl = document.getElementById ("playerchips-el");
let playerBetEl = document.getElementById ("playerbet-el");
let dealerCardsEl = document.getElementById ("dealer-el");
let dealerSumEl = document.getElementById ("dealer-sum");

playerChipsEl.textContent = "Your Chips: $" + playerChips;
playerBetEl.textContent = "Your Bet: $" + playerBet;

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

function betMore(){
    
    if (isAlive === false){
        playerBet += 10;
        playerBetEl.textContent = "Your Bet: $" + playerBet;

    }
}

function startGame(){

    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    let firstDealerCard = getRandomCard();
    dealerCards = [firstDealerCard];
    dealerSum = dealerCards[0];
    cards = [firstCard, secondCard];
    sum = cards[0] + cards[1];
    isAlive = true;

    runGame();
    runDealercard();
}

function runGame(){

    playerChips = playerChips - playerBet;
    playerChipsEl.textContent = "Your Chips: $" + playerChips;

    sumEl.textContent = "Your Sum: " + sum;
    cardsEl.textContent = "Your Cards: ";
    winLoseMessage = "";
    winLoseEL.textContent = winLoseMessage;

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
            playerLost();
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

function runDealercard(){

    dealerCardsEl.textContent = "Dealer Cards: ";
    dealerSumEl.textContent = "Dealer Sum: " + dealerSum;

    for (i = 0; i < dealerCards.length; i++){
       dealerCardsEl.textContent += dealerCards[i] + ", " ;
    }
}

function showResult(){

    if (isAlive === false){
        playerLost();
    }
    else {
        let newDealerCard = getRandomCard();
        dealerSum += newDealerCard;
        dealerCards.push(newDealerCard);

        runDealercard();
        if (dealerSum < 17){
            showResult();
        }
        else {
            whoWins();
        }
    }
}

function whoWins(){
    
    if (dealerSum > 21){
        playerWon();
    } else if (sum > dealerSum){
        playerWon();
    } else {
        playerLost();
    }
}

function playerLost(){

    winLoseMessage = `You Lost: ${playerBet}$ `;
    winLoseEL.textContent = winLoseMessage;
    endGame();
}

function playerWon(){

    winLoseMessage = `You Won: ${playerBet}$ `;
    winLoseEL.textContent = winLoseMessage;
    if (hasBlackJack){
        playerChips = playerChips + playerBet * 2;
    }
    else{
        playerChips = playerChips + playerBet * 2;
    }
    playerChipsEl.textContent = "Your Chips: $" + playerChips;
    endGame();
}

function endGame(){

    playerBet = 10;
    playerBetEl.textContent = "Your Bet: $" + playerBet;
    isAlive = false;
    hasBlackJack = false;
}