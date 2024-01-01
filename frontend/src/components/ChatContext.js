import React, { createContext, useState } from "react";

const ChatContext = createContext();

const ChatProvider = ({ children }) => {
  const [chatLogs, setChatLogs] = useState([
    { user: "gpt", message: "How can I help you today?" },
  ]);

  const setChatLog = (log) => {
    setChatLogs((prevLogs) => [...prevLogs, ...log]);
  };
  const clearChatLogs = () => {
    setChatLogs([{ user: "gpt", message: "How can I help you today?" }]);
  };
  const [loading, setLoading] = useState(false);
  const [model, setModel] = useState("text-davinci-003");
  const chatContextValue = {
    chatLogs,
    setChatLog,
    loading,
    setLoading,
    clearChatLogs,
    model,
    setModel,
  };

  return (
    <ChatContext.Provider value={chatContextValue}>
      {children}
    </ChatContext.Provider>
  );
};

export { ChatContext, ChatProvider };
