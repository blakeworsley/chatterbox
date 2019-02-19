import React from "react";
import { inject } from "mobx-react";
import { Link } from "react-router-dom";
import "./styles.scss";

function SecondaryMenu(props) {
  return (
    <header className="menu">
      <h1 className="title">New</h1>
      <nav>
        <Link
          className="menu__button--text"
          to={"/"}
          onClick={props.userStore.clearUser}
        >
          Sign Out
        </Link>
      </nav>
    </header>
  );
}

export default inject("userStore")(SecondaryMenu);
