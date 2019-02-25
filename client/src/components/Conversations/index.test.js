import React from "react";
import ReactDOM from "react-dom";
import Conversations from "./index";
import TestSetup from '../../tests/TestSetup';

const rootStore = { getConversation: () => {}, conversations: [] };

const userStore = { user: { firstName: "Douglas" } };

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <TestSetup userStore={userStore} rootStore={rootStore}>
      <Conversations
        userStore={userStore}
        rootStore={rootStore}
        match={{ params: { id: "123" } }}
      />
    </TestSetup>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
