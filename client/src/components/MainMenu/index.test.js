import React from "react";
import ReactDOM from "react-dom";
import MainMenu from "./index";
import { BrowserRouter } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <MainMenu userStore={{ signOut: () => {} }} />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
