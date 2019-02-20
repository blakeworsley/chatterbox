import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import SecondaryMenu from "../SecondaryMenu";
import ChatInputForm from "../ChatInputForm";
import Message from "../Message";
import "./styles.scss";

class Conversation extends Component {
  constructor(props) {
    super(props);
    this.props.rootStore.newConversation("chat");
    this.store = this.props.rootStore.getConversation("chat");
    this.store.updateChat(msg => this.store.messages.push(msg));
  }

  render() {
    return (
      <section className="fullpage">
        <SecondaryMenu />
        <ul className="conversations__list">
          {this.store.messages.map(message => (
            <Message
              key={message.id}
              author={
                message.author.firstName === this.props.userStore.user.firstName
                  ? "Me"
                  : message.author.firstName
              }
              text={message.text}
            />
          ))}
        </ul>
        <ChatInputForm
          author={this.props.userStore.user}
          setCurrentMessage={this.store.setCurrentMessage}
          submitCurrentMessage={this.store.submitCurrentMessage}
          currentMessage={this.store.currentMessage}
        />
      </section>
    );
  }
}

export default inject("userStore", "rootStore")(observer(Conversation));
