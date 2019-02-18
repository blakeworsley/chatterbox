import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from 'mobx-react';
import Home from "../Home";
import Login from "../Login";
import Register from "../Register";
import UserStore from '../../stores/User';
import "./styles.scss";

const userStore = new UserStore();

class App extends Component {

  componentDidMount(){
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
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
