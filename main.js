var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "queen";

/*var cards = ['queen', 'queen','king','king'];*/
/*if (cardOne === cardFour) {
	alert("You found a match!");
}
	else {
		alert("Sorry, try again.")
	}
console.log("JS file is connected to HTML! Woo!")*/

var board = document.getElementById("game-board");
for (var i = 0; i < cards.length; i++) {
	var cardElement = document.createElement('div');
	cardElement.className = 'card';
	cardElement.appendChild(.board);
}