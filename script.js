let firstCard = 4;
let secondCard = 3;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;

console.log(sum);

if(sum <= 20){
    console.log("Do you want to draw a new card? 🙂")
}
else if(sum === 21){
    hasBlackJack = true;
    console.log("Wohoo! You've got Blackjack! 🥳");
}
else{
    isAlive = false;
    console.log("You're out of the game! 😭")
}