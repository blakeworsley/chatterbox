import React from "react";
import { observer, inject } from "mobx-react";
import SecondaryMenu from "../SecondaryMenu";
import ChatInputForm from "../ChatInputForm";
import Message from "../Message";
import ConversationStore from "../../stores/Conversation";
import { updateChat } from "../../api.js";
import "./styles.scss";

const store = new ConversationStore();
updateChat(msg => store.messages.push(msg));

function conversation(props) {
  return (
    <section className="fullpage">
      <SecondaryMenu />
      <ul className="conversations__list">
        {store.messages.map(message => (
          <Message
            key={message.id}
            author={
              message.author.firstName == props.userStore.user.firstName
                ? "Me"
                : message.author.firstName
            }
            text={message.text}
          />
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
