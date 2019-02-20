import React from "react";
import { inject } from "mobx-react";
import { Link } from "react-router-dom";
import "./styles.scss";

function MainMenu(props) {
  return (
    <header className="menu">
      <h1 className="title">Chatterbox</h1>
      <nav>
        <Link
          className="menu__button--text"
          to={"/"}
          onClick={props.userStore.signOut}
        >
          Sign Out
        </Link>
      </nav>
    </header>
  );
}

export default inject("userStore")(MainMenu);
