import { extendObservable } from "mobx";
import openSocket from "socket.io-client";
import Conversation from "./Conversation";

export default class Root {
  constructor() {
    extendObservable(this, {
      isConnected: false,
      conversations: [],
      socket: openSocket("http://localhost:5000/")
    });
  }

  newConversation = (channel = "chat", messages = []) => {
    const conversation = new Conversation({
      socket: this.socket,
      channel: channel,
      messages: messages
    });
    this.conversations.push(conversation);
    return conversation;
  };

  getConversation = channel => {
    const conversation = this.conversations.filter(
      convo => convo.channel === channel
    );
    return conversation.length ? conversation[0] : null;
  };

  connect = callback => {
    this.socket.on("chat", message => {
      return callback(message);
    });

    this.socket.on("connected", channels => {
      if (this.conversations.length === 0) {
        channels.forEach(channel => {
          return this.newConversation(channel.name, channel.messages);
        });
      }
    });
  };
}
