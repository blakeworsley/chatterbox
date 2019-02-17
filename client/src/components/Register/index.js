import React from "react";

function Register(props) {
  return (
    <form>
      <h1>Register</h1>
      <label>
        name
        <input placeholder="Blake" />
      </label>
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

export default Register;
