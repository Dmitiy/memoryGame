import React from 'react';

const cardArray = [
  {
    name: 'CD',
    imgSrc: 'assets/images/CD.png'
  },
  {
    name: 'Dish-Antenna',
    imgSrc: 'assets/images/Dish-Antenna.png'
  },
  {
    name: 'Laptop',
    imgSrc: 'assets/images/Laptop.png'
  },
  {
    name: 'Light-Bulb',
    imgSrc: 'assets/images/Light-Bulb.png'
  },
  {
    name: 'Loud-Speaker',
    imgSrc: 'assets/images/Loud-Speaker.png'
  },
  {
    name: 'Table-Lamp',
    imgSrc: 'assets/images/Table-Lamp.png'
  },
  {
    name: 'Touch',
    imgSrc: 'assets/images/Touch.png'
  },
  {
    name: 'Keyboard',
    imgSrc: 'assets/images/Keyboard.png'
  },

  {
    name: 'Refrigerator',
    imgSrc: 'assets/images/Refrigerator.png'
  },
  {
    name: 'Mixer-Grinder',
    imgSrc: 'assets/images/Mixer-Grinder.png'
  },
  {
    name: 'Memory-Card',
    imgSrc: 'assets/images/Memory-Card.png'
  },
  {
    name: 'Night-Lamp',
    imgSrc: 'assets/images/Night-Lamp.png'
  },
  {
    name: 'PBX',
    imgSrc: 'assets/images/PBX.png'
  },
  {
    name: 'Tape-Recorder',
    imgSrc: 'assets/images/Tape-Recorder.png'
  },
  {
    name: 'Printer',
    imgSrc: 'assets/images/Printer.png'
  },
  {
    name: 'Tools',
    imgSrc: 'assets/images/Tools.png'
  },
];

// create board: 4x4
function CreateBoardSize(size) {
  const startNumberOfCards = size;
  const initialCardArray = cardArray.slice(0, startNumberOfCards);
  const duplicateCardArray = [...initialCardArray];
  const setBoardSize = [...initialCardArray, ...duplicateCardArray];
  return setBoardSize;
}

const board = CreateBoardSize(8);

function CardItem(props) {
  function flipCard(item) {
    console.log(item)
  }
  return (
    <img
      src={props.imgSrc}
      alt={props.name}
      onClick={flipCard(props)}
    />
  );
}

function DisplayBoard(props) {
  const cards = props.size;
  const listCards = cards.map((card, idx) =>
    <CardItem key = { idx - Math.random() } picture={ card } />
  );
  return (
    <div className="grid">
      { listCards }
    </div>
  );
}

// shuffle cards
board.sort(() => 0.5 - Math.random());

// score: matches
function Count(props) {
  return(
    <span className="txt-result"> {props.count} / {board.length/2}</span>
  )
}

function App() {
  return (
    <>
      <h1>Количество найденных совпадений:
				<Count count={ 0 } />
      </h1>
      <DisplayBoard size={ board } />
    </>
  );
}

export default App;
