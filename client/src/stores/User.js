import { extendObservable, action } from "mobx";

export default class User {
  constructor() {
    extendObservable(this, {
      user: null
    });
  }

  checkForUser = () => {
    const user = JSON.parse(window.localStorage.getItem("user"));
    if (user) this.user = user;
  };

  setUser = user => {
    window.localStorage.setItem("user", JSON.stringify(user));
  };

  clearUser = user => {
    window.localStorage.setItem("user", null);
  };

  signIn = action(() => {
    const user = { userId: "23j4i23j42hzfguzk", name: "blake" };
    this.setUser(user);
    this.user = user;
  });

  signOut = action(() => {
    this.clearUser();
    this.user = null;
  });
}
