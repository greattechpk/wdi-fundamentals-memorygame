
let cards = ["Queen","Queen","King","King"];
let cardsInPlay = [];

function checkForMatch(){
   
    if(cardsInPlay.length === 2){ 
        
        if (cardsInPlay[0]===cardsInPlay[1]){
            alert("A pair was found!");
        }else{
            alert("Sorry try again!");
        }
    }
}

function flipCard(cardId){

    console.log("User flipped " + cards[cardId]);

    cardsInPlay.push(cards[cardId]);

    checkForMatch();
}

flipCard(0);

flipCard(1);



console.log(cardsInPlay);


