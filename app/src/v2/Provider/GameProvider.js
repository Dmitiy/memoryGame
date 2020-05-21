import React, { useState, createContext } from 'react';

export const GameContext = createContext();

export const GameProvider = (props) => {
  const [cards, setCards] = useState([
    'CD',
    'Dish-Antenna',
    'Laptop',
    'Light-Bulb',
    'Loud-Speaker',
    'Table-Lamp',
    'Touch',
    'Keyboard',
    //    'Refrigerator',
    //    'Mixer-Grinder',
    //    'Memory-Card',
    //    'Night-Lamp',
    //    'PBX',
    //    'Tape-Recorder',
    //    'Printer',
    //    'Tools',
  ]);
  return (
    <GameContext.Provider value={[cards, setCards]}>
      {props.children}
    </GameContext.Provider>
  );
};
