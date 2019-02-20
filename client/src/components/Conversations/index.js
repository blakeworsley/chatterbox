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
          {this.props.rootStore.conversations.map( convo => {
            return (
              <Link key={convo.channel} to={`conversation/${convo.channel}`} className="conversation__list--link">
                {convo.channel.toUpperCase()}
              </Link>
            )
          })}
        </ul>
      </section>
    );
  }
}

export default inject("userStore", "rootStore")(observer(Conversations));
