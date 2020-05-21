import React from "react";
import PropTypes from "prop-types";

import Card from "../card";

function Board({ disabled, cards, flipped, solution, handleClick }) {
  return (
    <div className="board">
      {cards.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          type={card.type}
          width={100}
          height={100}
          flipped={flipped.includes(card.id)}
          solution={solution.includes(card.id)}
          handleClick={handleClick}
          disabled={disabled || solution.includes(card.id)}
          {...card}
        />
      ))}
    </div>
  );
}

Board.propTypes = {
  disabled: PropTypes.bool.isRequired,
  cards: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  flipped: PropTypes.arrayOf(PropTypes.number).isRequired,
  solution: PropTypes.arrayOf(PropTypes.number).isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Board;
