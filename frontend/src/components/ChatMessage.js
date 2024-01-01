import React from "react";
import "./ChatMessage.css";
import SmartToyOutlinedIcon from "@mui/icons-material/SmartToyOutlined";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

function ChatMessage({ message }) {
  return (
    <div className={`chat-message ${message.user === "gpt" && "chatgpt"}`}>
      <div className="chat-message-container">
        <div className={`avatar ${message.user === "gpt" && "chatgpt"}`}>
          {message.user === "gpt" ? (
            <SmartToyOutlinedIcon />
          ) : (
            <AccountBoxIcon />
          )}
        </div>
        <div className="message">{message.message}</div>
      </div>
    </div>
  );
}

export default ChatMessage;
