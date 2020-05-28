import React, { useState, useEffect } from 'react';
import Board from './components/board';
import loadCards from './db';

function App() {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const [solution, setSolution] = useState([]);
  const [score, setScore] = useState(0);
  const [wins, setWins] = useState(0);

  useEffect(() => {
    setCards(loadCards());
    preloadImages();
  }, []);

  useEffect(() => {
    checkScore();
  }, [score]);

  const handleClick = (id) => {
    setDisabled(true);
    if (flipped.length === 0) {
      setFlipped([id]);
      setDisabled(false);
    } else {
      if (sameCardClicked(id)) {
        return;
      }
      setFlipped([flipped[0], id]);

      if (isMatch(id)) {
        setSolution([...solution, flipped[0], id]);
        resetCards();
        updateScore(score, checkScore);
      } else {
        noMatch();
      }
    }
  };

  const preloadImages = () => {
    cards.map((card) => {
      const src = `./assets/images/${card.type}.png`;
      new Image().src = src;
    });
  };
  const noMatch = () => {
    setTimeout(resetCards, 1200);
  };

  const resetCards = () => {
    setFlipped([]);
    setDisabled(false);
  };
  const sameCardClicked = (id) => flipped.includes(id);

  const isMatch = (id) => {
    const clickedCard = cards.find((card) => card.id === id);
    const flippedCard = cards.find((card) => flipped[0] === card.id);
    return flippedCard.type === clickedCard.type;
  };

  const checkScore = (score) => {
    if (score > 7) {
      setWins(wins + 1);
      setTimeout(newGame, 1000);
    }
  };

  const newGame = () => {
    setSolution([]);
    setCards(loadCards());
    setScore(0);
  };

  function updateScore(score, callback) {
    var newScore = score + 1;
    setScore(score + 1);
    callback(newScore);
  }
  return (
    <div className='container'>
      <h1 className='title'>
        Memory Game -&nbsp;
        <small className='score'>
          [ score: {`${score}/${cards.length / 2}`}]
        </small>
      </h1>
      <br />
      <Board
        cards={cards}
        flipped={flipped}
        handleClick={handleClick}
        disabled={disabled}
        solution={solution}
      />
      <br />
      <button
        type='button'
        className='mui-btn mui-btn--primary btn-restart'
        onClick={() => newGame()}
      >
        Restart Game
      </button>
    </div>
  );
}

export default App;
