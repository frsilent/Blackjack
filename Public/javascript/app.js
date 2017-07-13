$(function(){

var playerHand = [];
var dealerHand = [];

// Deck Setup
const GameData = {
	deck: [],
	buildDeck: function() {
		var names = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
		var suits = ['Hearts','Diamonds','Spades','Clubs'];
	    
	    for( var s = 0; s < suits.length; s++ ) {
	        for( var n = 0; n < names.length; n++ ) {
	            this.deck.push(suits[s] + names[n]);
	        }
	    }
	}
}

GameData.buildDeck();
// console.log(GameData.deck);


// Deal a new hand
function dealNewPlayerHand() {
	var dealCards = GameData.deck[Math.floor(Math.random() * GameData.deck.length)];
	console.log("dealNewPlayerHand is working");
	for (var i = 0; i <= 1; i++) {
		playerHand.push(GameData.deck[Math.floor(Math.random() * GameData.deck.length)]);
	}
	
	return dealCards;
	

	
}

function dealNewDealerHand() {
	var dealCards = GameData.deck[Math.floor(Math.random() * GameData.deck.length)];
	console.log("dealNewDealerHand is working");
	for (var i = 0; i <= 1; i++) {
		dealerHand.push(GameData.deck[Math.floor(Math.random() * GameData.deck.length)]);
	}
	
	return dealCards;
	

	
}


// User, dealer hands, deal hand function, hit function to check for 21, stand function, check for blackjack or check for win



// functions new game, hit, stand

function newGameReset() {
	dealNewPlayerHand();
	dealNewDealerHand();
	console.log("dealer hand is " + dealerHand);
	console.log("player hand is " + playerHand);

}

function hit(){
// checking total value of cards against other 21
}

function winOrLose() {
//  checking total value of cards to see win or lose vs dealerhand
}

function stand() {
	// 
}

// Generate card function: pulling from the player/dealer hands and creating the dom version of the card/
function createCardsOnBoard() {
	
}










// // Button Event Listeners
$("#newGame").click(function(){
    console.log("New Game Button Clicked.");
    newGameReset();
    // call  hit function here
});
$("#hit").click(function(){
    console.log("Hit Button Clicked.");
    hit();
});
$("#stand").click(function(){
    console.log("Stand Button Clicked.");
 });
    // call stand function here
});

var randomRating = (Math.random()* 10);
