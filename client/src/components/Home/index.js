import React, { Component } from "react";
import { Link } from "react-router-dom";
import { observer, inject } from "mobx-react";
import "./styles.scss";

class Home extends Component {
  render() {
    return (
      <section className="fullpage--padded-top">
        <h1 className="title">Chatterbox</h1>
        <form className="form--with-space">
          <Link to="/register" className="button" disabled>
            REGISTER
          </Link>
          <Link to="/login" className="button">
            LOGIN
          </Link>
        </form>
      </section>
    );
  }
}

export default inject("userStore")(observer(Home));
