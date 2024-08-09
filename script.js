let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let message_el = document.getElementById("message_el");
let sum_el = document.getElementById("sum_el");
let card_el = document.getElementById("card_el");

function getRandomCard(){
    let randomNumber = Math.floor(Math.random()*13+1);
    if(randomNumber > 10){
        return 10;
    }
    else if(randomNumber === 1){
        return 11;
    }
    else{
        return randomNumber;
    }
}

function startGame(){
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard,secondCard];
    sum = firstCard + secondCard;
    renderGame();
}


function renderGame(){
    card_el.textContent = "Cards:"
    for(let i = 0;i < cards.length;i++){
        card_el.textContent += cards[i] + " ";
    }
    sum_el.textContent ="Sum:" + sum;
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

    if(isAlive === true && hasBlackJack === false){        
        let card  = getRandomCard();
        cards.push(card);
        sum = sum + card;
        renderGame();
    }
}
