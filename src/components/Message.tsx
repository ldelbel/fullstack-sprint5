import React, { ReactElement, useContext } from "react";
import MessageContext from "../contexts/MessageContext";
import { IMessageContext } from "../types/interfaces";
import "./Message.css";

function Message(): ReactElement<React.FC> {
  const { message, setMessage } = useContext<IMessageContext>(MessageContext);

  return message ? (
    <div className="alert">
      <span
        data-testid="close"
        className="closebtn"
        onClick={() => setMessage("")}
      >
        &times;
      </span>
      {message}
    </div>
  ) : (
    <div data-testid="empty"></div>
  );
}

export default Message;
