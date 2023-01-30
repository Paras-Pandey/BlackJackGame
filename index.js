let player = {
    name: "Paras",
    chips: 9999999
};
let cards = [];
let isAlive = false;
let hasBlackJack = false;
let message = "";
let newCard = 0;
let currentSum = 0;

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.querySelector("#cards-el");
let playerEl = document.querySelector("#player-el");

playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard() {
    let randomCard = Math.floor(Math.random() * 13) + 1;

    if(randomCard > 10) {
        randomCard = 10;
    }
    else if(randomCard === 1) {
        randomCard = 11;
    }

    return randomCard;
}

function startGame() {
    isAlive = true;
    for (let i = 0; i < 2; i++) {
        cards.push(getRandomCard());
        currentSum += cards[i];
    }

    renderGame();
}

function drawCard() {
    if(isAlive == false || hasBlackJack == true)
        return;
    newCard = getRandomCard();
    currentSum += newCard;
    cards.push(newCard);
    renderGame();
}

function renderGame() {
    cardsEl.textContent = "Cards: ";
    sumEl.textContent = "Sum: " + currentSum;
    
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }

    if(currentSum <= 20) {
        message = "Do you want to draw a new card? 🙂";
    }    
    else if(currentSum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳";
        hasBlackJack = true;
    }
    else {
        message = "You're out of the game! 😭";
        isAlive = false;
    }

    messageEl.textContent = message;
}
