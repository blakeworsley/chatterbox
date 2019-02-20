import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import SecondaryMenu from "../SecondaryMenu";
import ChatInputForm from "../ChatInputForm";
import Message from "../Message";
import "./styles.scss";

class Conversation extends Component {
  constructor(props) {
    super(props);
    this.channel = this.props.match.params.id;
  }

  render() {
    const store = this.props.rootStore.getConversation(this.channel);
    if (store) {
      return (
        <section className="fullpage">
          <SecondaryMenu channel={this.channel} />
          <ul className="conversations__list">
            {store.messages.map(message => (
              <Message
                key={message.id}
                author={
                  message.author.firstName ===
                  this.props.userStore.user.firstName
                    ? "Me"
                    : message.author.firstName
                }
                text={message.text}
              />
            ))}
          </ul>
          <ChatInputForm
            author={this.props.userStore.user}
            setCurrentMessage={store.setCurrentMessage}
            submitCurrentMessage={store.submitCurrentMessage}
            currentMessage={store.currentMessage}
          />
        </section>
      );
    } else {
      return <div>loading</div>;
    }
  }
}

export default inject("userStore", "rootStore")(observer(Conversation));
