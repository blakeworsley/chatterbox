import React from "react";
import { inject } from "mobx-react";
import { Link } from "react-router-dom";
import "./styles.scss";

function SecondaryMenu(props) {
  return (
    <header className="menu">
      <div className='menu__title-container'>
        <Link to={'/conversations'} className='button__back'>back</Link>
        <h1 className="title">New</h1>
      </div>
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

export default inject("userStore")(SecondaryMenu);
