import React, { useRef, useState, Fragment, useEffect } from "react";
import bg from "./assets/images/bg.jpg";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Activity from "./Components/Activity/Activity";
import ParticlesBg from "particles-bg";
import Encourage from "./Components/Encourage/Encourage";
import Contact from "./Components/Contact/Contact";

import io from "socket.io-client";
const socket = io("https://cma-api.vercel.app");

function App() {
  const [count, setCount] = useState(0);
  const inputRef = useRef(null);

  const [updated, setUpdated] = useState("");

  const handleClick = () => {
    setUpdated(inputRef.current.value);
    console.log(updated);
    socket.emit("new_message", { message: inputRef.current.value });
    socket.on("message", (data) => {
      console.log(data);
    });
  };

  useEffect(() => {}, []);

  return (
    <div className="App" style={{ fontFamily: "cma-fonts" }}>
      <Header />
      <div id="home">
        <Home />
      </div>
      <div id="encourage">
        <Encourage />
      </div>
      <div id="activity">
        <Activity />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}

export default App;
