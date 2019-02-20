import { extendObservable, action, decorate } from "mobx";
import Message from "./Message";

export default class Conversation {
  constructor(options) {
    extendObservable(this, {
      socket: options.socket,
      channel: 'chat',
      currentMessage: "",
      messages: []
    });
  }

  chat = (user, val) => {
    this.socket.emit(this.channel, user, val);
  };

  updateChat = func => {
    this.socket.on(this.channel, func);
  };

  setCurrentMessage = value => {
    this.currentMessage = value;
  };

  submitCurrentMessage = (text, author) => {
    this.addMessage({ text, author });
    this.setCurrentMessage("");
  };

  addMessage = msg => {
    const message = new Message(msg);
    this.chat(message);
  };
}

decorate(Conversation, {
  addMessage: action
});
