import React from "react";
import { Redirect } from "react-router-dom";
import { observer, inject } from "mobx-react";
import "./styles.scss";

function Login(props) {
  if (props.userStore.user) {
    return <Redirect to={"/conversations"} />;
  } else {
    return (
      <section className="fullpage--padded-top">
        <h1 className="title">Login</h1>
        <form
          className="form--with-space"
          onSubmit={e => {
            e.preventDefault();
            props.userStore.signIn();
          }}
        >
          <label className="label">
            USERNAME
            <input
              className="input"
              defaultValue={props.userStore.username}
              onChange={e => (props.userStore.username = e.target.value)}
              placeholder="blakeworsley@gmail.com"
            />
          </label>
          <label className="label">
            PASSWORD
            <input
              className="input"
              defaultValue={props.userStore.password}
              onChange={e => (props.userStore.password = e.target.value)}
              placeholder="**********"
            />
          </label>
          <button className="button">SUBMIT</button>
        </form>
      </section>
    );
  }
}

export default inject("userStore")(observer(Login));
