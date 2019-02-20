import React from "react";
import { Redirect, Link } from "react-router-dom";
import { observer, inject } from "mobx-react";

function Register(props) {
  if (props.userStore.user) {
    return <Redirect to={"/conversations"} />;
  } else {
    return (
      <section className="fullpage--padded-top">
        <div className="fullpage__header">
          <Link to="/login" className="fullpage__header--title">
            Login
          </Link>
          <h1 className="title">Register</h1>
        </div>
        <form
          className="form--with-space"
          onSubmit={e => {
            e.preventDefault();
            props.userStore.signIn();
          }}
        >
          <label className="label">
            FIRST NAME
            <input
              className="input"
              defaultValue={props.userStore.firstName}
              onChange={e => (props.userStore.firstName = e.target.value)}
              placeholder="Blake"
            />
          </label>
          <label className="label">
            LAST NAME
            <input
              className="input"
              defaultValue={props.userStore.lastName}
              onChange={e => (props.userStore.lastName = e.target.value)}
              placeholder="Worsley"
            />
          </label>
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
          <button className="button" onClick={props.userStore.register}>
            SUBMIT
          </button>
        </form>
      </section>
    );
  }
}
export default inject("userStore")(observer(Register));
