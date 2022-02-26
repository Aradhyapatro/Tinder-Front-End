import React, { useState } from "react";
import axios from "axios";
import "./post.css";
import TelegramIcon from "@mui/icons-material/Telegram";

const Post = ({ user, messages, setMessages }) => {
  const [val, setVal] = useState("");

  const Updating = (e) => {
    e.preventDefault();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (val === "") {
      return;
    }

    const temp = { message: val };
    setMessages([...messages, temp]);

    try {
      const resp = await axios.put(`/${user}`, { mess: val });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container_input">
      <input
        type="text"
        name="input"
        placeholder="Message"
        value={val}
        onChange={(e) => {
          setVal(e.target.value);
        }}
      />
      <button
        type="submit"
        onClick={(e) => {
          handleSubmit(e);
          Updating(e);
        }}
      >
        <TelegramIcon style={{ color: "white" }} />
      </button>
    </div>
  );
};

export default Post;
