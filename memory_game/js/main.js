
let cards = ["Queen","Queen","King","King"];
let cardsInPlay = [];

let cardOne = cards[0];
let cardTwo = cards[2];


cardsInPlay.push(cardOne);console.log()
cardsInPlay.push(cardTwo);



console.log(cardsInPlay);

console.log("User flipped " + cardTwo);
console.log("User flipped " + cardOne);

if(cardsInPlay.length === 2){
    if (cardsInPlay[0]===cardsInPlay[1]){
        alert("A pair was found!");
    }else{
        alert("Sorry try again!");
    }
}