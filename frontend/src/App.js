import logo from "./logo.svg";
import "./App.css";
import "./normal.css";
import SideBar from "./components/SideBar";
import ChatBox from "./components/ChatBox";
import ChatLog from "./components/ChatLog";
import { ChatContext, ChatProvider } from "./components/ChatContext";
import { useEffect } from "react";
import axios from "axios";
import { useContext } from "react";

function App() {
  return (
    <ChatProvider>
      <div className="App">
        <aside className="side-menu">
          <SideBar />
        </aside>
        <section className="chat-box">
          <ChatLog />
          <ChatBox />{" "}
        </section>
      </div>
    </ChatProvider>
  );
}

export default App;
