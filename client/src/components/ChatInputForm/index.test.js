import React from "react";
import ReactDOM from "react-dom";
import ChatInputForm from "./index";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ChatInputForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});
