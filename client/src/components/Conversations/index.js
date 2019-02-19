import React from "react";
import { observer, inject } from "mobx-react";
import MainMenu from "../MainMenu";
import ConversationStore from "../../stores/Conversation";
import "./styles.scss";

const store = new ConversationStore();

function conversations(props) {
  return (
    <section className="fullpage">
      <MainMenu />
      <ul className="conversation__list">
        <h3 className="text">Welcome {props.userStore.user.firstName}</h3>
        {store.messages.map(message => (
          <li key={message.id}>{message.text}</li>
        ))}
      </ul>
    </section>
  );
}

export default inject("userStore")(observer(conversations));
