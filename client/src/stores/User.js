import { extendObservable, action } from "mobx";

export default class User {
  constructor() {
    extendObservable(this, {
      username: "",
      password: "",
      firstName: "",
      lastName: "",
      user: null
    });
  }

  checkForUser = () => {
    const user = JSON.parse(window.localStorage.getItem("currentUser"));
    if (user) this.user = user;
  };

  setUser = user => {
    this.user = user;
    const users = JSON.parse(window.localStorage.getItem("users"));
    if (users) {
      users.push(user);
      window.localStorage.setItem("users", JSON.stringify(users));
      window.localStorage.setItem("currentUser", JSON.stringify(user));
    } else {
      window.localStorage.setItem("users", JSON.stringify([user]));
      window.localStorage.setItem("currentUser", JSON.stringify(user));
    }
  };

  signOut = () => {
    this.user = null;
    window.localStorage.setItem("currentUser", null);
  };

  register = e => {
    e.preventDefault();
    if (this.username && this.password && this.firstName && this.lastName) {
      return this.setUser({
        username: this.username,
        password: this.password,
        firstName: this.firstName,
        lastName: this.lastName
      });
    }
  };

  signIn = action(async () => {
    const users = JSON.parse(window.localStorage.getItem("users"));
    const correctUser = users.filter(
      user => user.username === this.username && user.password === this.password
    );
    if (correctUser.length) {
      this.user = correctUser[0];
    }
  });

  signOut = action(() => {
    this.signOut();
    this.user = null;
  });
}
