import React from "react";
import ReactDOM from "react-dom";
import Register from "./index";
import TestSetup from "../../tests/TestSetup";

const rootStore = { getConversation: () => {} };

const userStore = {};

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <TestSetup userStore={userStore} rootStore={rootStore}>
      <Register
        userStore={userStore}
        rootStore={rootStore}
      />
    </TestSetup>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
