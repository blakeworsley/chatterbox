import React from "react";
import { Redirect } from "react-router-dom";
import { observer, inject } from "mobx-react";

function Login(props) {
  if (props.userStore.user) {
    return <Redirect to={"/conversations"} />;
  } else {
    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          props.userStore.signIn();
        }}
      >
        <h1>Login</h1>
        <label>
          email
          <input placeholder="blakeworsley@gmail.com" />
        </label>
        <label>
          password
          <input placeholder="**********" />
        </label>
        <button>Submit</button>
      </form>
    );
  }
}

export default inject("userStore")(observer(Login));
