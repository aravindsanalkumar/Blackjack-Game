let firstCard = 14;
let secondCard = 7;
let cards = [firstCard,secondCard];
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";

let message_el = document.getElementById("message_el");
let sum_el = document.getElementById("sum_el");
let card_el = document.getElementById("card_el");

function startGame(){
    renderGame();
}


function renderGame(){
    sum_el.textContent = "Cards:"
    for(let i = 0;i < cards.length;i++){
        sum_el.textContent += cards[i] + " ";
    }
    if(sum <= 20){
    message = "Do you want to draw a new card? 🙂";
    }
    else if(sum === 21){
        hasBlackJack = true;
        message = "Wohoo! You've got Blackjack! 🥳";
    }
    else{
        isAlive = false;
        message = "You're out of the game! 😭";
    }
    message_el.textContent = message;
}

function newCard(){
    let card  = 6;
    cards.push(card);
    sum = sum + card;
    renderGame();
}
