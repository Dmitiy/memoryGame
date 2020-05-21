import React from "react";

const Navbar = (props) => (
  <nav className="">
    <ul className="">
      <li className="">
        <div className="restart" onClick={() => props.newGame()}>
          Restart Game
        </div>
      </li>
      <li className="nav-item">
        <div className="score">Score: {props.score}/8</div>
      </li>
    </ul>
  </nav>
);

export default Navbar;
