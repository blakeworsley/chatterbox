import { extendObservable } from "mobx";

export default class Message {
  constructor(message) {
    extendObservable(this, {
      text: message.text,
      author: message.author,
      id: Math.random(),
      created: Date.now()
    });
  }
}
