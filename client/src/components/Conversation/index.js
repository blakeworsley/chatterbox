import React from "react";
import { observer, inject } from "mobx-react";
import MainMenu from "../MainMenu";

function conversations(props) {
  return (
    <div className="container">
      <MainMenu />
    </div>
  );
}

export default inject("userStore")(observer(conversations));
