import React, { useEffect, useState } from "react";
import "./SideBar.css";
import AddIcon from "@mui/icons-material/Add";
import { useContext } from "react";
import { ChatContext } from "./ChatContext";
import axios from "axios";

function SideBar() {
  const { chatLogs, setChatLog, clearChatLogs, loading } =
    useContext(ChatContext);

  const handleNewChat = () => {
    clearChatLogs();
  };

  return (
    <div className="side-bar-container">
      <div className="side-menu-button" onClick={handleNewChat}>
        <span>
          <AddIcon />
        </span>
        New Chat
      </div>
    </div>
  );
}

export default SideBar;
