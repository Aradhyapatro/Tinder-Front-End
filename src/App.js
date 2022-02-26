import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Main";
import Chats from "./Chats";
import ChatsScreen from "./ChatsScreen";
import axios from "axios";

function App() {
  const [people, setpeople] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(
        "https://aradhya-tinder-clone-backend.herokuapp.com/"
      );
      setpeople(data);
    }
    fetchData();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main people={people} />}></Route>
        <Route path="/Chats" element={<Chats people={people} />}></Route>
        <Route path="/:name" element={<ChatsScreen people={people} />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
