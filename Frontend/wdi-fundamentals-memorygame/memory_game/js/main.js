//var cards = ["queen","queen", "king", "king"];
var cards = [
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
];

var cardsInPlay = [];
var score = 0;

function checkForMatch(){
  if(cardsInPlay.length === 2){
    if(cardsInPlay[0] === cardsInPlay[1]){
      alert("You found a match!");
      document.getElementById("score").textContent = ++score;
    }else{
      alert("Sorry, try again.");
    }
  }
}

function flipCard(){
  var cardId = this.getAttribute("data-id");
  this.setAttribute("src", cards[cardId].cardImage);

  //console.log("User flipped " + cards[cardId].rank);
  //console.log("Suit: " + cards[cardId].suit);
  //console.log("Card Image Path: " + cards[cardId].cardImage);
  cardsInPlay.push(cards[cardId].rank);
  checkForMatch();
}

function createBoard(){
  for(var i = 0; i < cards.length; i++){
    var cardElement = document.createElement("img");
    cardElement.setAttribute("src", "images/back.png");
    cardElement.setAttribute("data-id", i);

    cardElement.addEventListener("click", flipCard);

    document.getElementById("game-board").appendChild(cardElement);
  }
  console.log(cards.length);
}

function resetState(){
  var parentObject = document.getElementById("game-board");
  if(parentObject.hasChildNodes()){
    var childNodes = parentObject.children;
    //console.log(childNodes.length);
    console.log(childNodes[0]);

    for(var i=0; i < childNodes.length; i++){
      childNodes.item(i).setAttribute("src", "images/back.png");
    }
  }

  cardsInPlay = [];
}




function init(){
  var resetButton = document.getElementById("resetButton");
  resetButton.addEventListener("click", resetState);
}

init();
createBoard();
