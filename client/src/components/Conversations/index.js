import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import MainMenu from "../MainMenu";
import "./styles.scss";

class Conversations extends Component {
  constructor(props) {
    super(props);
    this.props.rootStore.connect(message => console.log("connect: ", message));
  }
  render() {
    return (
      <section className="fullpage">
        <MainMenu />
        <ul className="conversation__list">
          <h3 className="text">
            Welcome {this.props.userStore.user.firstName}
          </h3>
        </ul>
      </section>
    );
  }
}

export default inject("userStore", "rootStore")(observer(Conversations));
