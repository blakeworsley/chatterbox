import React from "react";
import ReactDOM from "react-dom";
import Home from "./index";
import TestSetup from "../../tests/TestSetup";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <TestSetup>
      <Home />
    </TestSetup>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
