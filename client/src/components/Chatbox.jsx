import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import OpenAI from "openai";
import "../styles/chatbot.css";

const API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

const openai = new OpenAI({
  apiKey: `${API_KEY}`,
  dangerouslyAllowBrowser: true,
});

const Chatbot = () => {
  const [message, setMessage] = useState(""); // holds input sent to AI
  const [chats, setChats] = useState([]); // keeps track of conversation(s)
  const [isTyping, setIsTyping] = useState(false);

  const sendMessageToAI = async (e, message) => {
    e.preventDefault();

    if (!message) return;
    setIsTyping(true);

    let msgs = chats;
    msgs.push({ role: "user", content: message });
    setChats(msgs);
    setMessage("");

    await openai.chat.completions
      .create({
        model: "gpt-3.5-turbo",
        messages: [{ role: "system", content: "Nice to meet you!" }, ...chats],
      })
      .then((res) => {
        msgs.push(res.choices[0].message);
        setChats(msgs);
        console.log("chats", chats);
        setIsTyping(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="Chatbot">
      <div className="chatbox">
        <p>How Can I Help You?</p>
        {chats && chats.length
          ? chats.map((chat, index) => (
              <p key={index} className={chat.role === "user" ? "user_msg" : ""}>
                <span>
                  <b>{chat.role.toUpperCase()}</b>
                </span>
                <span>: </span>
                <span>{chat.content}</span>
              </p>
            ))
          : ""}
      </div>
      <form action="" onSubmit={(e) => sendMessageToAI(e, message)}>
        <textarea
          className="input-box"
          type="text"
          name="message"
          value={message}
          placeholder="Type your prompt here..."
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className="submit-btn">Submit</button>
      </form>
      <div className={isTyping ? "" : "hide"}>
        <p>
          <i className="isTyping">{isTyping ? "Typing..." : ""}</i>
        </p>
      </div>
      <div className="settings">
        <a href="#info" className="option">
          <FontAwesomeIcon icon="fa-solid fa-circle-info" />
        </a>
        <a href="#help" className="option">
          <FontAwesomeIcon icon="fa-solid fa-terminal" />
        </a>
        <a href="#download" className="option">
          <FontAwesomeIcon icon="fa-solid fa-download" />
        </a>
        <a href="#export" className="option">
          <FontAwesomeIcon icon="fa-solid fa-file-export" />
        </a>
      </div>
      <div className="author">
        <p>
          built by <span className="name">Chris Kakos</span>
        </p>
      </div>
    </div>
  );
};

export default Chatbot;
