import React from "react";
import { Redirect, Link } from "react-router-dom";
import { observer, inject } from "mobx-react";
import "./styles.scss";

function Login(props) {
  if (props.userStore.user) {
    const to =
      props.location &&
      props.location.state &&
      props.location.state.from &&
      props.location.state.from.pathname
        ? props.location.state.from.pathname
        : "/conversations";
    return <Redirect to={to} />;
  } else {
    return (
      <section className="fullpage--padded-top">
        <div className="fullpage__header">
          <h1 className="title">Login</h1>
          <Link to="/register" className="fullpage__header--title">
            Register
          </Link>
        </div>

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
