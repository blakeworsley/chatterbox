import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "mobx-react";
import PrivateRoute from "../PrivateRoute";
import Home from "../Home";
import Login from "../Login";
import Register from "../Register";
import UserStore from "../../stores/User";
import Conversation from "../Conversation";
import Conversations from "../Conversations";
import "./styles.scss";

const userStore = new UserStore();

class App extends Component {
  componentDidMount() {
    userStore.checkForUser();
  }

  render() {
    return (
      <Provider userStore={userStore}>
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
