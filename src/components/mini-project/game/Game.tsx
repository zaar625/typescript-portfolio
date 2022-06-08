import React from 'react';
import Cards from './components/Cards';
import './game.scss';

const Game = () => {
  return (
    <div className="game col-3  col-md-12 cardstyle scrollreveal04">
      <h2>L.O.L Card Game</h2>
      <Cards />
    </div>
  );
};

export default Game;
