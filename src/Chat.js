import React from "react";
import "./chat.css";
import { Link } from "react-router-dom";

const Chat = ({ img, name, message, timeStamp }) => {
  return (
    <Link to={`/${name}`} className="removeStyle" style={{ all: "unset" }}>
      <div className="contain" id={name}>
        <img src={img} alt={name} className="img" />
        <div className="mid">
          <h3>{name}</h3>
          <p>{message}</p>
        </div>
        <p className="time">{timeStamp} minutes ago</p>
      </div>
    </Link>
  );
};

export default Chat;
