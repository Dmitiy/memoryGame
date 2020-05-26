import React from 'react';

const Card = ({ card, onClick, selected }) => {
  return (
    <li
      className='card'
      onClick={() => {
        onClick(card);
      }}
    >
      {selected ? <div>{card}</div> : <div />}
    </li>
  );
};

export default Card;
