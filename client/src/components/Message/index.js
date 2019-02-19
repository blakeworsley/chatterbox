import React from "react";
import "./styles.scss";

function message(props) {
  const direction = props.author === "Me" ? "--left" : "--right";
  return (
    <li className={"message" + direction}>
      <p className={"message__author" + direction}>{props.author}</p>
      <p className={"message__text" + direction}>{props.text}</p>
    </li>
  );
}

export default message;
