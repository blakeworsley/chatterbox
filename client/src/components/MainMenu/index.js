import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

function MainMenu(props) {
  return (
    <header className="menu">
      <h1>Chatterbox</h1>
      <nav>
        <Link className="menu__button" to={"conversation/new"}>
          Sign Out
        </Link>
        <Link className="menu__button" to={"conversation/new"}>
          NEW
        </Link>
      </nav>
    </header>
  );
}

export default MainMenu;
