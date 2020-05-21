import React from 'react';
import { GameProvider } from './Provider/GameProvider';
import Board from './components/board';

const App = () => {
  return (
    <GameProvider>
      <div className='App'>
        <Board />
      </div>
    </GameProvider>
  );
};

export default App;
