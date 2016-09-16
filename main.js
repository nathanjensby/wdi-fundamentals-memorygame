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
		cardElement.addEventListener('click', flipCard);
	};
};

createBoard();

var isMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
}
	else {
		alert("Sorry, try again.")
	}
};

function isTwoCards() {
	cardsInPlay.push(this.getAttribute('data-card'));
	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
		cardsInPlay = [];
	}
};

function flipCard() {
	var cardElement = document.getElementByClass('card');
	if (cardElement.getAttribute('data-card') === 'king') {
		cardElement.innerHTML = 'img src="king.png" alt="king of dorks" />';
	}
		else {
			cardElement.innerHTML = 'img src="queen.png" alt="queen of farts" />';
		}
};