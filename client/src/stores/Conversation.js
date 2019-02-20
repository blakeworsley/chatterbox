import { extendObservable } from "mobx";
import Message from "./Message";

export default class Conversation {
  constructor(options) {
    extendObservable(this, {
      socket: options.socket,
      channel: options.channel,
      currentMessage: "",
      messages: options.messages
    });
    this.socket.on(options.channel + "s", messages =>
      this.messages.replace(messages)
    );
    this.updateChat();
  }

  updateChat = func => {
    this.socket.on(this.channel, msg => this.messages.push(msg));
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
    this.socket.emit(this.channel, message);
  };
}
