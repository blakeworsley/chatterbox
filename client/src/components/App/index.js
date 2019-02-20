import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "mobx-react";
import PrivateRoute from "../PrivateRoute";
import Home from "../Home";
import Login from "../Login";
import Register from "../Register";
import UserStore from "../../stores/User";
import RootStore from "../../stores/Root";
import Conversation from "../Conversation";
import Conversations from "../Conversations";
import "./styles.scss";

const userStore = new UserStore();
const rootStore = new RootStore();

class App extends Component {
  componentDidMount() {
    userStore.checkForUser();
    rootStore.connect(message => console.log("connect: ", message));
  }

  render() {
    return (
      <Provider userStore={userStore} rootStore={rootStore}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <PrivateRoute
              exact
              path="/conversations"
              component={Conversations}
            />
            <PrivateRoute path="/conversation/:id" component={Conversation} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
