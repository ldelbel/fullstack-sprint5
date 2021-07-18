import React from "react";
import { IMessageContext } from "../types/interfaces";

const MessageContext = React.createContext<IMessageContext>(
  {} as IMessageContext
);

export default MessageContext;
