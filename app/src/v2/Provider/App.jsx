import React from 'react';
import Board from '../components/board';

const App = () => {
  const cards = [
    'CD',
    'Dish-Antenna',
    'Laptop',
    'Light-Bulb',
    'Loud-Speaker',
    'Table-Lamp',
    'Touch',
    'Keyboard',
  ];
  return (
    <div className='App'>
      <Board cards={cards} />
    </div>
  );
};

export default App;
