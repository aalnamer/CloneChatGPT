import React, { useState } from "react";
import "./ChatBox.css";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import ClearIcon from "@mui/icons-material/Clear";
import axios from "axios";
import { useContext } from "react";
import { ChatContext } from "./ChatContext";

function ChatBox() {
  const [input, setInput] = useState("");
  const { chatLogs, setChatLog, loading, setLoading } = useContext(ChatContext);

  async function getMessages(e) {
    e.preventDefault();
    await setInput("");
    await setLoading(true);
    const options = {
      method: "POST",
      data: {
        message: input,
      },
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const response = await axios.post(
        "http://localhost:8000/completions",
        options.data,
        { headers: options.headers }
      );
      const data = response.data;

      await setChatLog([
        { user: "me", message: input },
        { user: "gpt", message: data.data.choices[0].text },
      ]);
    } catch (error) {
    } finally {
      await setLoading(false);
    }
  }

  return (
    <div className="chat-input-container">
      <div className="input-container">
        <form onSubmit={getMessages}>
          <input
            className="chat-input-text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <SendOutlinedIcon type="submit" className="send-icon" />
        </form>
      </div>
      <div>
        Please use descriptive sentences as ChatpGPT 3.5 Turbo is an older
        version of ChatGPT-4
      </div>
    </div>
  );
}

export default ChatBox;
