import React from "react";
import { observer, inject } from "mobx-react";
import "./styles.scss";
import { chat } from "../../api";

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

// import React, { useState } from "react";
// import "./styles.scss";
// import { chat } from "../../api";
//
// function chatInputForm(props) {
//   const [message, setMessage] = useState(0);
//   return (
//     <form className="conversation__form">
//       <input
//         className="conversation__input"
//         onChange={e => setMessage(e.target.value)}
//       />
//       <button
//         onClick={e => {
//           e.preventDefault();
//           chat(props.name, message);
//         }}
//       >
//         enter
//       </button>
//     </form>
//   );
// }
//
// export default chatInputForm;
