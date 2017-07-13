$(function(){

var blackJackController = {
	playerCardsValue: 0,
	dealerCardsValue: 0,
	dealerTurn: false,

}

// Need to build card values and link images and store them

var playerHand = [];
var dealerHand = [];
var playerHandValue = [];
var dealerHandValue = [];

// Deck Setup
var GameData = {
	deck: [],
	buildDeck: function() {
		var names = ['2', '3', '4', '5', '6', '7', '8', '9', '10', '10 J', '10 Q', '10 K', '11 A'];
		var suits = ['Hearts','Diamonds','Spades','Clubs'];
	    
	    for( var n = 0; n < names.length; n++ ) {
	        for( var s = 0; s < suits.length; s++ ) {
	            this.deck.push(names[n] + " " + suits[s]);
	        }
	    }

	   
	}
}
GameData.buildDeck();



// Deal a new hand
function dealNewPlayerHand() {
	var dealCards = GameData.deck[Math.floor(Math.random() * GameData.deck.length)];
	console.log('dealNewPlayerHand working');
	for (var i = 0; i <= 1; i++) {
		playerHand.push(GameData.deck[Math.floor(Math.random() * GameData.deck.length)]);
		
	playerHandValue.push(parseInt(playerHand[i]));
	}
	
	console.log(playerHandValue);
	return dealCards;
}

function dealNewDealerHand() {
	var dealCards = GameData.deck[Math.floor(Math.random() * GameData.deck.length)];
	console.log("dealNewDealerHand function is working");
	for (var i = 0; i <= 1; i++) {
		dealerHand.push(GameData.deck[Math.floor(Math.random() * GameData.deck.length)]);
		
	dealerHandValue.push(parseInt(dealerHand[i]));
	}
	
	console.log(dealerHandValue);
	return dealCards;
}

function hitPlayer() {
	var dealCards = GameData.deck[Math.floor(Math.random() * GameData.deck.length)];
	console.log("hitPlayer function is working");
	for (var i = 0; i <= 0; i++) {
		playerHand.push(GameData.deck[Math.floor(Math.random() * GameData.deck.length)]);
	}
	
}



// User, dealer hands, deal hand function, hit function to check for 21, stand function, check for blackjack or check for win



// functions new game, hit, stand

function newGameDeal() {
	dealNewPlayerHand();
	dealNewDealerHand();
	console.log("dealer hand is " + dealerHand);
	console.log("player hand is " + playerHand);

}

function hit(){
// checking total value of cards against other 21
	
	hitPlayer();
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
    newGameDeal();
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
