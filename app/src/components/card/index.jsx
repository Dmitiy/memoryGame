import React from "react";
import PropTypes from "prop-types";

import "./card.scss";

function Card({ id, disabled, width, height, flipped, solution, type, back, handleClick }) {
  back = "./assets/images/Wood-Pattern5.png";
  // front = "./assets/images/Wood-Pattern6.png";
  return (
    <div
      className={`flip-container ${flipped ? "flipped" : ""}`}
      style={{ width, height }}
      onClick={() => disabled ? null : handleClick(id)}
    >
      <div className="flipper">
        <img
          alt={type}
          style={{ width, height }}
          className={flipped ? "front" : "back"}
          src={flipped || solution ? `./assets/images/${type}.png` : back}
        />
      </div>
    </div>
  );
}

export default Card;
Card.propTypes = {
  id: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  flipped: PropTypes.bool.isRequired,
  solution: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};
