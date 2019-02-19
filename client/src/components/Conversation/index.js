import React from "react";
import { observer, inject } from "mobx-react";
import SecondaryMenu from "../SecondaryMenu";
import ChatInputForm from "../ChatInputForm";
import ConversationStore from "../../stores/Conversation";
import { updateChat } from "../../api.js";
import "./styles.scss";


const store = new ConversationStore();
updateChat(msg => store.messages.push(msg));

function conversation(props) {

  return (
    <section className="fullpage">
      <SecondaryMenu />
      <ul className="conversation__list">
        {store.messages.map(message => (
          <div key={message.id}>{message.text}</div>
        ))}
      </ul>
      <ChatInputForm
        author={props.userStore.user}
        setCurrentMessage={store.setCurrentMessage}
        submitCurrentMessage={store.submitCurrentMessage}
        currentMessage={store.currentMessage}
      />
    </section>
  );
}

export default inject("userStore")(observer(conversation));
