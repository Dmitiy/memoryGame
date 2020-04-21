import './assets/styles/style.scss';


	//card options
	const cardArray = [
		{
			name: 'CD',
			imgSrc: './assets/images/CD.png'
		},
		{
			name: 'Dish-Antenna',
			imgSrc: './assets/images/Dish-Antenna.png'
		},
		{
			name: 'Laptop',
			imgSrc: './assets/images/Laptop.png'
		},
		{
			name: 'Light-Bulb',
			imgSrc: './assets/images/Light-Bulb.png'
		},
		{
			name: 'Loud-Speaker',
			imgSrc: './assets/images/Loud-Speaker.png'
		},
		{
			name: 'Table-Lamp',
			imgSrc: './assets/images/Table-Lamp.png'
		},
		{
			name: 'Touch',
			imgSrc: './assets/images/Touch.png'
		},
		{
			name: 'Keyboard',
			imgSrc: './assets/images/Keyboard.png'
		},

		{
			name: 'Refrigerator',
			imgSrc: './assets/images/Refrigerator.png'
		},
		{
			name: 'Mixer-Grinder',
			imgSrc: './assets/images/Mixer-Grinder.png'
		},
		{
			name: 'Memory-Card',
			imgSrc: './assets/images/Memory-Card.png'
		},
		{
			name: 'Night-Lamp',
			imgSrc: './assets/images/Night-Lamp.png'
		},
		{
			name: 'PBX',
			imgSrc: './assets/images/PBX.png'
		},
		{
			name: 'Tape-Recorder',
			imgSrc: './assets/images/Tape-Recorder.png'
		},
		{
			name: 'Printer',
			imgSrc: './assets/images/Printer.png'
		},
		{
			name: 'Tools',
			imgSrc: './assets/images/Tools.png'
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
	console.log(board);

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
			// back ./assets/images
			card.setAttribute('src', './assets/images/Wood-Pattern5.png');
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
			cards[optionOneId].setAttribute('src', './assets/images/Wood-Pattern6.png');
			cards[optionTwoId].setAttribute('src', './assets/images/Wood-Pattern6.png')

			cardsWon.push(cardsPairChosen.cardsChosen);
		} else {
			cards[optionOneId].setAttribute('src', './assets/images/Wood-Pattern7.png');
			cards[optionTwoId].setAttribute('src', './assets/images/Wood-Pattern7.png');
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
