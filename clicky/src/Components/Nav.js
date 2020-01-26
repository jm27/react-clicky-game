import React from "react";

function Nav(props) {
  return (
    <nav className="navbar">
      <a className="navbar-brand" href="/">
        Clicky Memory Game
      </a>
      <div className="float-right">
        Score: {props.score}| Top Score{props.highScore}
      </div>
    </nav>
  );
}

export default Nav;
