import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import MainMenu from "../MainMenu";
import { Link } from "react-router-dom";
import "./styles.scss";

class Conversations extends Component {
  render() {
    return (
      <section className="fullpage">
        <MainMenu />
        <header className="conversation__list--header">
          <h3 className="text">
            Welcome {this.props.userStore.user.firstName}
          </h3>
          <Link className="menu__button" to={"conversation/new"}>
            NEW
          </Link>
        </header>
        <ul className="conversation__list">
          <Link to="/conversation/chat" className="conversation__list--link">
            Chat
          </Link>
          <Link to="/conversation/room" className="conversation__list--link">
            Room
          </Link>
        </ul>
      </section>
    );
  }
}

export default inject("userStore", "rootStore")(observer(Conversations));
