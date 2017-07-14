$(function(){
// Might not need a controller
// var blackJackController = {
// 	playerCardsValue: 0,
// 	dealerCardsValue: 0,
// 	dealerTurn: false,

// }

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
	console.log('dealNewPlayerHand function is working');
	for (var i = 0; i <= 1; i++) {
		playerHand.push(GameData.deck[Math.floor(Math.random() * GameData.deck.length)]);
		playerHandValue.push(parseInt(playerHand[i]));
	}
	console.log(playerHandValue);
	console.log("these are the value of the cards in playerHandValue")
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
	console.log("these are the value of the cards in dealerHandValue")
	return dealCards;
}

function hitPlayer() {
	var dealCards = GameData.deck[Math.floor(Math.random() * GameData.deck.length)];
	console.log("hitPlayer function is working");
	for (var i = 2; i < 3; i++) {
		playerHand.push(GameData.deck[Math.floor(Math.random() * GameData.deck.length)]);
		playerHandValue.push(parseInt(playerHand[i]));
		
		console.log(playerHandValue);
	}

	
}
function sumPlayerHandValue(array) {
	console.log("sumPlayerHandValue working")
	var sum = 0;
	for (var i = 0; i < playerHandValue.length; i++) {
	
	sum = sum + array[i];
	}
	
	console.log("Player total is: " + sum);	
}
function sumDealerHandValue(array) {
	console.log("sumDealerHandValue working")
	var sum = 0;
	for (var i = 0; i < dealerHandValue.length; i++) {
	
	sum = sum + array[i];
	}
	console.log("Dealer total is: " + sum);	
}




// Need: User/dealer hands, deal hand function, hit function to check for 21, stand function, check for blackjack or check for win



// functions new game, hit, stand

function newGameDeal() {
	dealNewPlayerHand();
	dealNewDealerHand();
	console.log("dealer hand is " + dealerHand);
	console.log("player hand is " + playerHand);

}

function hit(){
// need to create a single card hit function to add to the playerHand and playerHandValue arrays

// then checking total value of cards against > 21 = bust
	
	hitPlayer();
}

function winOrLose() {
	
//  checking total value of cards to see win or lose vs dealerhand
}

function stand() {
	// will hit dealer till >=17, if >21 dealer loses

	console.log("stand button calling stand function working")
	sumPlayerHandValue(playerHandValue);
	sumDealerHandValue(dealerHandValue);

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
    stand();
 });
    // call stand function here
});
