import React from 'react';
import { useContext } from 'react';
import { GameContext } from '../../Provider/GameProvider';
import Card from '../card';

const Board = () => {
  const [cards, setCards] = useContext(GameContext);

  return (
    <ul>
      {cards.map((item) => (
        <Card card={item} />
      ))}
    </ul>
  );
};

export default Board;
