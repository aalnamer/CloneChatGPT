import React from "react";
import "./ChatLog.css";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import SmartToyOutlinedIcon from "@mui/icons-material/SmartToyOutlined";
import ChatMessage from "./ChatMessage";
import { useContext } from "react";
import { ChatContext } from "./ChatContext";

function ChatLog() {
  const { chatLogs, loading } = useContext(ChatContext);

  return (
    <div className="chat-log">
      {chatLogs.map((message, index) => (
        <ChatMessage key={index} message={message} />
      ))}
      {loading && (
        <div className="loading-indicator">
          <span>Loading...</span>
        </div>
      )}
      <div className="chat-message chatgpt">
        <div className="chat-message-container"></div>
      </div>
    </div>
  );
}

export default ChatLog;
