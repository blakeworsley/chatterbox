import React from "react";

function Login(props) {
  return (
    <form>
      <h1>Login</h1>
      <label>
        email
        <input placeholder="blakeworsley@gmail.com" />
      </label>
      <label>
        password
        <input placeholder="**********" />
      </label>
    </form>
  );
}

export default Login;
