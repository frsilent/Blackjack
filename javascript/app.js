$(function(){


// NEED TO FIX HIT CARD FOR PLAYER/DEALER NOT GIVING A NEW RANDOM CARD AFTER THE FIRST HIT
// NEED TO CREATE IF STATEMENTS TO COMPARE VALUE OF HANDS AND DETERMINE WINNER
// THESE STATEMENTS SHOULD CHECK FOR A BUST FIRST THEN CONTINUE IF HAND IS NOT BUSTED AND DETERMINE WINNER
// NEED TO DETERMINE HOW TO CHANGE ACE TO A 1 WHEN NECCESSARY

var playerHand = [];
var dealerHand = [];
var playerHandTotal = 0;
var dealerHandTotal = 0;



// Deck Setup
var GameData = {
	deck: [],
	buildDeck: function() {
		var valueOfCard = ['2', '3', '4', '5', '6', '7', '8', '9', '10', '10_jack', '10_queen', '10_king', '11_ace'];
		var suits = ['hearts','diamonds','spades','clubs'];
	    
	    for( var n = 0; n < valueOfCard.length; n++ ) {
	        for( var s = 0; s < suits.length; s++ ) {
	            GameData.deck.push({
	            	value: parseInt(valueOfCard[n]),
	            	suit: suits[s],
	            	player: null,
	            	image: ("images/" + valueOfCard[n] + "_" + suits[s] + ".jpg"),
	            	
	            });
	        }
	    }

	    console.log(GameData.deck);

	   
	}
}
GameData.buildDeck();




// Deal a new hand
function dealNewPlayerHand() {
	console.log('dealNewPlayerHand function is working');
	for (var i = 0; i <= 1; i++) {
		playerHand.push(GameData.deck[Math.floor(Math.random() * GameData.deck.length)]);
		
	}
	var buildCardImage1 = playerHand[0].image;
	
		var cardLink = document.createElement("a");
		
		cardLink.href = "https://code.google.com/archive/p/vector-playing-cards/";
		cardLink.alt = "playerHand.image isnt linking to card";


		var img = document.createElement("img");
		img.src = buildCardImage1;
		img.onerror= playerHand.imageAlt;
		cardLink.appendChild(img);
		document.getElementById("playerCardsDiv").appendChild(cardLink);
	
	var buildCardImage2 = playerHand[1].image;
	
		var cardLink = document.createElement("a");
		
		cardLink.href = "https://code.google.com/archive/p/vector-playing-cards/";
		cardLink.alt = "playerHand.image isnt linking to card";


		var img = document.createElement("img");
		img.src = buildCardImage2;
		img.onerror = playerHand.imageAlt;
		cardLink.appendChild(img);
		document.getElementById("playerCardsDiv").appendChild(cardLink);

		total = playerHand.reduce( function(cnt,o){ return cnt + o.value; }, 0);
		playerHandTotal = total;
		
		if (total === 21) {
			setTimeout(function (){
				confirm("BlackJack!! You WIN! Play again.");
				window.location.reload();
		}, 1000);
		}
	
	
	console.log(playerHand);
	console.log("The value of playerHand is: " + total);
	console.log("BUILDING CARD IMAGE " + buildCardImage1 + " " + buildCardImage2);
	console.log("playerHandTotal is: " + playerHandTotal);
	
}

function dealNewDealerHand() {
	console.log("dealNewDealerHand function is working");
	for (var i = 0; i <= 1; i++) {
		dealerHand.push(GameData.deck[Math.floor(Math.random() * GameData.deck.length)]);
		
	}
	var buildCardImage1 = dealerHand[0].image;
	
		var cardLink = document.createElement("a");
		
		cardLink.href = "https://code.google.com/archive/p/vector-playing-cards/";
		cardLink.alt = "playerHand.image isnt linking to card";


		var img = document.createElement("img");
		img.src = buildCardImage1;
			
		cardLink.appendChild(img);
		document.getElementById("dealerCardsDiv").appendChild(cardLink);
	
	var buildCardImage2 = dealerHand[1].image;
	
		var cardLink = document.createElement("a");
		
		cardLink.href = "https://code.google.com/archive/p/vector-playing-cards/";
		cardLink.alt = "playerHand.image isnt linking to card";


		var img = document.createElement("img");
		img.src = buildCardImage2;
		
		cardLink.appendChild(img);
		document.getElementById("dealerCardsDiv").appendChild(cardLink);

		total = dealerHand.reduce( function(cnt,o){ return cnt + o.value; }, 0);
		dealerHandTotal = total;
	console.log(dealerHand);
	console.log("The value of dealerHand is: " + total)
		if (dealerHandTotal > 21) {
			confirm("Dealer went over 21, you WIN!.");
			window.location.reload();
		}
	
		dealerHandTotal = total;
		console.log("dealerHandTotal is: " + dealerHandTotal);
		setTimeout(function (){
			if (total === 21) {
			confirm("Dealer BlackJack!! You lose! Play again.");
			window.location.reload();
		}
  		}, 1000);
}

function hitPlayer() {
	
		console.log("hitPlayer function is working via hit button click");
		
		var newCard = GameData.deck[Math.floor(Math.random() * GameData.deck.length)]
		playerHand.push(newCard);
		
		
	
		var cardLink = document.createElement("a");
		
		cardLink.href = "https://code.google.com/archive/p/vector-playing-cards/";
		cardLink.alt = "playerHand.image isnt linking to card";

		var img = document.createElement("img");
		img.src = newCard.image;
		
		cardLink.appendChild(img);
		document.getElementById("playerCardsDiv").appendChild(cardLink);
	
		console.log(playerHand);
		console.log("these are the value of the cards in playerHand")
	
		total = playerHand.reduce( function(cnt,o){ return cnt + o.value; }, 0);
		playerHandTotal = total;

		
		setTimeout(function (){
		if (total > 21) {
			confirm("Bust! You went over 21. Start another game.");
			window.location.reload();
		}
		}, 1000);
		console.log("THIS IS THE PLAYER TOTAL " + playerHandTotal);

	
}
function hitDealer() {
	
		console.log("hitDealer function is working via stand button click");
		
		var newCard = GameData.deck[Math.floor(Math.random() * GameData.deck.length)]
		dealerHand.push(newCard);
		
		console.log("hitDealer picked this hit card " + dealerHand[2].value + " " + dealerHand[2].suit);
		

		var buildCardImage2 = dealerHand[2].image;
	
		var cardLink = document.createElement("a");
			cardLink.href = "https://code.google.com/archive/p/vector-playing-cards/";
			cardLink.alt = "playerHand.image isnt linking to card";
		var img = document.createElement("img");
			img.src = newCard.image;
			cardLink.appendChild(img);
		
		document.getElementById("dealerCardsDiv").appendChild(cardLink);
		
		total = dealerHand.reduce( function(cnt,o){ return cnt + o.value; }, 0);
		dealerHandTotal = total;

		console.log("THIS IS THE DEALER SUM " + total);

		setTimeout(function (){
			if (dealerHandTotal < 17) {
			hitDealer();
		}

  		}, 1000);
		
		setTimeout(function (){
			if (total > 21) {
			confirm("Dealer Bust! You WIN!1");
			window.location.reload();
		}
  		}, 1000);

  		setTimeout(function (){
			if (playerHandTotal === dealerHandTotal) {
			confirm("Hands are tied, noone wins. Play again.")
			window.location.reload();
		}
		else if (playerHandTotal > dealerHandTotal && dealerHandTotal < 21) {
			hitDealer();
		}
		else if (dealerHandTotal > 21) {
			confirm("Dealer Bust! You WIN! Play again.2");
		}
		else if (playerHandTotal === dealerHandTotal) {
			confirm("Hands are tied, noone wins. Play again.");
			window.location.reload();
		}
		else if (playerHandTotal > dealerHandTotal) {
			confirm("You WIN! Play again.3");
		}
		else {
			setTimeout(function (){
			confirm("Dealer WINS! Pay again.3")
			window.location.reload();
			}, 1000);
		}
  		}, 1000);
		

}
// functions new game, hit, stand

function newGameDeal() {
	dealNewPlayerHand();
	dealNewDealerHand();
	console.log("dealer hand is " + dealerHand);
	console.log("player hand is " + playerHand);
}

function hit(){

// 	if (playerHandValue <= 21) {
	

// }
hitPlayer();


// then checking total value of cards against > 21 = bust	
}

function winOrLose() {
	
//  checking total value of cards to see win or lose vs dealerhand
}

function stand() {
	// will hit dealer till >=17, if >21 dealer loses
	
	// while (dealerHandValue < 17) {
	
	// }
	total = dealerHand.reduce( function(cnt,o){ return cnt + o.value; }, 0);
	dealerHandTotal = total;
	setTimeout(function (){
	if (dealerHandTotal < 17) {
	console.log("stand button calling hitDealer function")
	hitDealer();
	}
	}, 1000);
	if (dealerHandTotal >= 17 && playerHandTotal === dealerHandTotal) {
			confirm("Hands are tied, noone wins. Play again.");
			window.location.reload();
	}
	if (dealerHandTotal >= 17 && playerHandTotal > dealerHandTotal) {
			confirm("You WIN! Play again.4");
			window.location.reload();
	}
	setTimeout(function (){
	if (dealerHandTotal >= 17 && playerHandTotal < dealerHandTotal) {
		confirm("Dealer WINS! Play again.4");
		window.location.reload();
	}
	}, 3000);
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
