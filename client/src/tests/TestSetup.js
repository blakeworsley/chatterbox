import React, { Component } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { Provider } from "mobx-react";

class TestSetup extends Component {
  render() {
    const { userStore, rootStore, children } = this.props;
    return (
      <Provider userStore={userStore} rootStore={rootStore}>
        <BrowserRouter>
          <Switch>{children}</Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default TestSetup;
