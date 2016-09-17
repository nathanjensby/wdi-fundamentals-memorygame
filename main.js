var cards = ['queen','king','queen','king'];
var cardsInPlay = [];

var board = document.getElementById('game-board');
var createBoard = function() {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('div');
		cardElement.className = 'card';
		cardElement.setAttribute('data-card', cards[i])
		board.appendChild(cardElement);
		cardElement.addEventListener('click', isTwoCards);
		
	};
};

createBoard();

function isTwoCards() {
	if (this.getAttribute('data-card') === 'king') {
		this.innerHTML = '<img src="king.png" alt="king of dorks" />';
	}
	else {
		this.innerHTML = '<img src="queen.jpg" alt="queen of farts" />';
		};
	cardsInPlay.push(this.getAttribute('data-card'));
	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
		cardsInPlay = [];
	}
};

var isMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
}
	else {
		alert("Sorry, try again.")
	};
	for (var i = 0; i<cardsInPlay.length; i++) {
		cardsInPlay[i].innerHTML= ' ';
	}

};