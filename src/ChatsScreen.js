import React, { useState } from "react";
import Header from "./Header";
import "./chatsscreen.css";
import Post from "./Post";
import { useParams } from "react-router-dom";

const ChatsScreen = ({ people }) => {
  const { name } = useParams();
  const data = people.filter((person) => {
    if (person.name === name) {
      return person;
    }
  });

  const user = name;
  const [messages, setMessages] = useState(data[0].messages);

  return (
    <div>
      <Header />
      <article>
        {messages.map((message, index) => {
          return message.name ? (
            <div key={index} className="contains">
              <img src={message.img} alt="" />
              <h1>{message.message}</h1>
            </div>
          ) : (
            <div key={index} className="contains">
              <h2 className="left">{message.message}</h2>
            </div>
          );
        })}
      </article>
      <Post messages={messages} setMessages={setMessages} user={user} />
    </div>
  );
};

export default ChatsScreen;
