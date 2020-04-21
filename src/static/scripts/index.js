document.addEventListener('DOMContentLoaded', () => {

	//card options
	const cardArray = [
		{
			name: 'CD',
			imgSrc: 'images/CD.png'
		},
		{
			name: 'Dish-Antenna',
			imgSrc: 'images/Dish-Antenna.png'
		},
		{
			name: 'Laptop',
			imgSrc: 'images/Laptop.png'
		},
		{
			name: 'Light-Bulb',
			imgSrc: 'images/Light-Bulb.png'
		},
		{
			name: 'Loud-Speaker',
			imgSrc: 'images/Loud-Speaker.png'
		},
		{
			name: 'Table-Lamp',
			imgSrc: 'images/Table-Lamp.png'
		},
		{
			name: 'Touch',
			imgSrc: 'images/Touch.png'
		},
		{
			name: 'Keyboard',
			imgSrc: 'images/Keyboard.png'
		},

		{
			name: 'Refrigerator',
			imgSrc: 'images/Refrigerator.png'
		},
		{
			name: 'Mixer-Grinder',
			imgSrc: 'images/Mixer-Grinder.png'
		},
		{
			name: 'Memory-Card',
			imgSrc: 'images/Memory-Card.png'
		},
		{
			name: 'Night-Lamp',
			imgSrc: 'images/Night-Lamp.png'
		},
		{
			name: 'PBX',
			imgSrc: 'images/PBX.png'
		},
		{
			name: 'Tape-Recorder',
			imgSrc: 'images/Tape-Recorder.png'
		},
		{
			name: 'Printer',
			imgSrc: 'images/Printer.png'
		},
		{
			name: 'Tools',
			imgSrc: 'images/Tools.png'
		},
	];

	// board
	const grid = document.querySelector('.grid');
	// score: count
	const resultDisplay = document.querySelector('.txt-result');
	// display board: 4x4
	const startNumberOfCards = 8;
	const initialCardArray = cardArray.slice(0, startNumberOfCards);
	const duplicateCardArray = [...initialCardArray];
	const board = [...initialCardArray, ...duplicateCardArray];

	// duplicate search ...
	const cardsPairChosen = {
		cardsChosen: [],
		cardsChosenId: [],
	}

	// final step, all matches
	const cardsWon = [];

	// shuffle cards
	board.sort(() => 0.5 - Math.random());

	// init score value : count
	resultDisplay.innerHTML = `0 / ${board.length / 2}`;

	// create board
	function createBoard() {
		for (let i = 0; i < board.length; i++) {
			const card = document.createElement('img');
			// back images
			card.setAttribute('src', 'images/Wood-Pattern5.png');
			card.setAttribute('data-id', i);
			// cardsChosen
			card.addEventListener('click', flipCard);
			grid.appendChild(card);
		}
	}

	// check for matches
	function checkForMatch() {
		var cards = document.querySelectorAll('img');
		const optionOneId = cardsPairChosen.cardsChosenId[0];
		const optionTwoId = cardsPairChosen.cardsChosenId[1];

		if (cardsPairChosen.cardsChosen[0] === cardsPairChosen.cardsChosen[1]) {
			alert('You find a match');
			cards[optionOneId].setAttribute('src', 'images/Wood-Pattern6.png');
			cards[optionTwoId].setAttribute('src', 'images/Wood-Pattern6.png')

			cardsWon.push(cardsPairChosen.cardsChosen);
		} else {
			cards[optionOneId].setAttribute('src', 'images/Wood-Pattern7.png');
			cards[optionTwoId].setAttribute('src', 'images/Wood-Pattern7.png');
			alert('Попытайтесь ещё раз');
		}
		cardsPairChosen.cardsChosen = [];
		cardsPairChosen.cardsChosenId = [];
		resultDisplay.textContent = `${cardsWon.length} / ${board.length / 2}`;

		if (cardsWon.length === board.length / 2) {
			resultDisplay.textContent = 'все!';
		}
	}

	// flip card - lay a card face down
	function flipCard() {
		const cardId = this.getAttribute('data-id');
		cardsPairChosen.cardsChosen.push(board[cardId].name);
		cardsPairChosen.cardsChosenId.push(cardId);

		this.setAttribute('src', board[cardId].imgSrc);

		if (cardsPairChosen.cardsChosen.length === 2) {
			setTimeout(checkForMatch(), 500)
		}
	}

	// init
	createBoard();
});