import React, { useState, useEffect } from "react";
import Board from "./components/board";
import loadCards from "./db";

function App() {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  useEffect(() => {
    setCards(loadCards());
  }, []);

  const handleClick = (id) => setFlipped([...flipped, id]);
  return (
    <div>
      <h2>Количество найденных совпадений:</h2>
      <Board cards={cards} flipped={flipped} handleClick={handleClick} />
    </div>
  );
}

export default App;
