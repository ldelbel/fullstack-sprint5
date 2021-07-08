import React, { useContext } from "react";
import MessageContext from "../contexts/MessageContext";
import { IMessageContext } from "../types/interfaces";
import './Message.css';

function Message() {
    const { message, setMessage } = useContext<IMessageContext>(MessageContext);

    return (
        message ? (
            <div className="alert">
                <span className="closebtn" onClick={() => setMessage("")} >&times;</span>
                {message}
            </div>
        ) : (
            <div></div>
        )
    );
}

export default Message;