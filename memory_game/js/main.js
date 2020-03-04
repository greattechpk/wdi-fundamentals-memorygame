
//objects starts here for now

const cards = [

    {
        rank: "queen",
        suit: "hearts",
        cardImage: "images/queen-of-hearts.png"
    },
    {
        rank: "queen",
        suit: "diamonds",
        cardImage: "images/queen-of-diamonds.png"
    },
    {
        rank: "king",
        suit: "hearts",
        cardImage: "images/king-of-hearts.png"
    },
    {
        rank: "king",
        suit: "diamonds",
        cardImage: "images/king-of-diamonds.png"
    }
]

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

function flipCard(){

    let cardId = this.getAttribute('data-id');
    
    console.log("User flipped " + cards[cardId].rank);

    cardsInPlay.push(cards[cardId].rank);

    this.setAttribute('src', cards[cardId].cardImage);

    checkForMatch();
}

function createBoard(){
    for(let i = 0; i< cards.length; i++){
        let cardElement = document.createElement('img');
        cardElement.setAttribute('src','images/back.png');
        cardElement.setAttribute('data-Id', i);
        cardElement.addEventListener('click',flipCard);
        document.getElementById("game-board").appendChild(cardElement);
    }
};

createBoard();


// console.log(cards[0].cardImage +" " + cards[0].suit)

// console.log(cards[1].cardImage +" " + cards[1].suit)


// console.log(cardsInPlay);

