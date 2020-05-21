import React from 'react';
import { useContext } from 'react';
import { GameContext } from '../../Provider/GameProvider';

const Board = () => {
  const [cards, setCards] = useContext(GameContext);

  return (
    <ul>
      {cards.map((card) => (
        <li>{card}</li>
      ))}
    </ul>
  );
};

export default Board;
