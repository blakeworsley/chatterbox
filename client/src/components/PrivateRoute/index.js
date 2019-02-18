import React from "react";
import { observer, inject } from "mobx-react";
import { Route, Redirect } from "react-router-dom";

function privateRoute({ component: Component, userStore, ...rest }) {
  return (
    <Route
      {...rest}
      render={props => {
        if (userStore.user) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{ pathname: "/login", state: { from: props.location } }}
            />
          );
        }
      }}
    />
  );
}

export default inject("userStore")(observer(privateRoute));
