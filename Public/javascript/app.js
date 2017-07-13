$(function(){

// Game Setup


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


// Deal a random card
function dealNewGame() {
	var dealCards = GameData.deck[Math.floor(Math.random() * GameData.deck.length)];
	console.log(dealCards);
}
dealNewGame();







// // Game Logic





// // Button Event Listeners
$("#newGame").click(function(){
    console.log("New Game Button Clicked.");
    // call  hit function here
});
$("#hit").click(function(){
    console.log("Hit Button Clicked.");
    // call  hit function here
});
$("#stand").click(function(){
    console.log("Stand Button Clicked.");
 });
    // call stand function here
});
