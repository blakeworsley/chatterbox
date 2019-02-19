import { extendObservable, action, decorate } from "mobx";
import { chat } from "../api.js";
import Message from "./Message";

export default class Conversation {
  constructor() {
    extendObservable(this, {
      currentMessage: "",
      messages: []
    });
  }

  setCurrentMessage = value => {
    this.currentMessage = value;
  };

  submitCurrentMessage = (text, author) => {
    this.addMessage({ text, author });
    this.setCurrentMessage("");
  };

  addMessage = msg => {
    const message = new Message(msg);
    chat(message);
  };
}

decorate(Conversation, {
  addMessage: action
});
