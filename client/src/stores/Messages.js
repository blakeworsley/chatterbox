import { observable, computed, action } from "mobx";
import Message from "./Message";
export default class Messages {
  @observable messages = [];

  @computed
  get unreadMesages() {
    return this.messages.filter(todo => !todo.unread).length;
  }

  @action
  addMesage(message) {
    this.messages.push(new Message(message));
  }
}
