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
	let startNumberOfCards = 4;
	const initialCardArray = cardArray.slice(0, startNumberOfCards);
	const duplicateCardArray = [...initialCardArray];
	const board = [...initialCardArray, ...duplicateCardArray];

	// init score value : count
	resultDisplay.innerHTML = '0';

	// create board
	function createBoard() {
		for (let i = 0; i < board.length; i++) {
			const card = document.createElement('img');
			card.setAttribute('src', 'images/Wood-Pattern5.png');
			card.setAttribute('data-id', i);
			grid.appendChild(card);
		}
	}
	createBoard();
});