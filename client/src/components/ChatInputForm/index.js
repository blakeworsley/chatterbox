import React from "react";
import { observer } from "mobx-react";
import "./styles.scss";

function chatInputForm(props) {
  const {
    setCurrentMessage,
    submitCurrentMessage,
    currentMessage,
    author
  } = this.props;
  return (
    <form className="conversation__form">
      <input
        value={currentMessage}
        className="conversation__input"
        onChange={e => setCurrentMessage(e.target.value)}
      />
      <button
        disabled={!currentMessage}
        className='button__send'
        onClick={e => {
          e.preventDefault();
          submitCurrentMessage(currentMessage, author);
        }}
      >
        SEND
      </button>
    </form>
  );
}

export default observer(chatInputForm);
