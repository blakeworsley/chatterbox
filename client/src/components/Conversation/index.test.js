import React from "react";
import ReactDOM from "react-dom";
import Conversation from "./index";
import TestSetup from "../../tests/TestSetup";

const rootStore = { getConversation: () => {} };

const userStore = {};

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <TestSetup userStore={userStore} rootStore={rootStore}>
      <Conversation
        userStore={userStore}
        rootStore={rootStore}
        match={{ params: { id: "123" } }}
      />
    </TestSetup>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
