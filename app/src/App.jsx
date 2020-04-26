import React, {useState} from 'react';
import Card from './components/card';


const cardArray = [
  {
    id: 1,
    name: 'CD',
    imgSrc: './assets/images/CD.png'
  },
  {
    id: 2,
    name: 'Dish-Antenna',
    imgSrc: './assets/images/Dish-Antenna.png'
  },
  {
    id: 3,
    name: 'Laptop',
    imgSrc: './assets/images/Laptop.png'
  },
  {
    id: 4,
    name: 'Light-Bulb',
    imgSrc: './assets/images/Light-Bulb.png'
  },
  {
    id: 5,
    name: 'Loud-Speaker',
    imgSrc: './assets/images/Loud-Speaker.png'
  },
  {
    id: 6,
    name: 'Table-Lamp',
    imgSrc: './assets/images/Table-Lamp.png'
  },
  {
    id: 7,
    name: 'Touch',
    imgSrc: './assets/images/Touch.png'
  },
  {
    id: 8,
    name: 'Keyboard',
    imgSrc: './assets/images/Keyboard.png'
  },

  {
    id: 9,
    name: 'Refrigerator',
    imgSrc: './assets/images/Refrigerator.png'
  },
  {
    id: 10,
    name: 'Mixer-Grinder',
    imgSrc: './assets/images/Mixer-Grinder.png'
  },
  {
    id: 11,
    name: 'Memory-Card',
    imgSrc: './assets/images/Memory-Card.png'
  },
  {
    id: 12,
    name: 'Night-Lamp',
    imgSrc: './assets/images/Night-Lamp.png'
  },
  {
    id: 13,
    name: 'PBX',
    imgSrc: './assets/images/PBX.png'
  },
  {
    id: 14,
    name: 'Tape-Recorder',
    imgSrc: './assets/images/Tape-Recorder.png'
  },
  {
    id: 15,
    name: 'Printer',
    imgSrc: './assets/images/Printer.png'
  },
  {
    id: 16,
    name: 'Tools',
    imgSrc: './assets/images/Tools.png'
  },
];

function App() {
  const [flipped, setFlipped] = useState([])
  const handleClick = (id) => setFlipped([...flipped, id])
  return (
    <div>
      <h2>Количество найденных совпадений:
      </h2>
      <Card 
        id={1}
        width={100}
        height={100}
        back={'./assets/images/Wood-Pattern5.png'}
        front={'./assets/images/Wood-Pattern6.png'}
        flipped={flipped.includes(1)}
        handleClick={() => handleClick(1)}
      />
    </div>
  );
}

export default App;
