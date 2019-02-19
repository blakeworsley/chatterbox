import { extendObservable, action } from "mobx";
import { authenticateUser } from "../api.js";

export default class User {
  constructor() {
    extendObservable(this, {
      username: "blakeworsley",
      password: "12345",
      firstName: "Blake",
      lastName: "Worsley",
      user: null
    });
  }

  checkForUser = () => {
    const user = JSON.parse(window.localStorage.getItem("user"));
    if (user) this.user = user;
  };

  setUser = user => {
    this.user = user;
    window.localStorage.setItem("user", JSON.stringify(user));
  };

  clearUser = () => {
    this.user = null;
    window.localStorage.setItem("user", null);
  };

  signIn = action(async () => {
    const userToPost = {
      username: this.username,
      password: this.password
    };
    // const response = await authenticateUser(userToPost);
    const response = { success: true, result: { username: this.username } };

    if (response.success) {
      this.setUser(response.result);
    }
  });

  signOut = action(() => {
    this.clearUser();
    this.user = null;
  });
}
