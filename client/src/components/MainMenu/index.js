import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

function MainMenu(props) {
  return (
    <header className="header-container">
      <h1>Chatterbox</h1>
      <Link className="header-button" to={"/new"}>
        NEW
      </Link>
    </header>
  );
}

export default MainMenu;
