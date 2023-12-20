import { useState } from "react";
import OpenAI from "openai";

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
      <section>
        {chats && chats.length
          ? chats.map((chat, index) => (
              <p key={index} className={chat.role === "user" ? "user_msg" : ""}>
                <span>
                  <b>{chat.role.toUpperCase()}</b>
                </span>
                <span>:</span>
                <span>{chat.content}</span>
              </p>
            ))
          : ""}
      </section>
      <form action="" onSubmit={(e) => sendMessageToAI(e, message)}>
        <input
          type="text"
          name="message"
          value={message}
          placeholder="Type your message here..."
          onChange={(e) => setMessage(e.target.value)}
        />
      </form>
      <div className={isTyping ? "" : "hide"}>
        <p>
          <i>{isTyping ? "Typing" : ""}</i>
        </p>
      </div>
    </div>
  );
};

export default Chatbot;
