import React from "react";
import ReactDOM from "react-dom";
import Login from "./index";
import { BrowserRouter } from "react-router-dom";

const userStore = {
  user: { firstName: "Doug" }
};

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <Login userStore={userStore} />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
