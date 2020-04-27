import React from "react";
import PropTypes from "prop-types";

import "./card.scss";

function Card({ id, width, height, flipped, back, front, handleClick }) {
  back = "./assets/images/Wood-Pattern5.png";
  front = "./assets/images/Wood-Pattern6.png";
  return (
    <div
      className={`flip-container ${flipped ? "flipped" : ""}`}
      style={{ width, height }}
      onClick={() => handleClick(id)}
    >
      <div className="flipper">
        <img
          style={{ width, height }}
          className={flipped ? "front" : "back"}
          src={flipped ? front : back}
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
  // front: PropTypes.string.isRequired,
  // back: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};
