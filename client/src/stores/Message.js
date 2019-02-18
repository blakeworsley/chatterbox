import { observable } from "mobx";

export default class Message {
  id = Math.random();
  @observable message;
  @observable unread = false;

  constructor(message) {
    this.message = message;
  }
}
