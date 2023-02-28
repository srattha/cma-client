import React, { useState, Fragment } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Activity from "./Components/Activity/Activity";
import ParticlesBg from "particles-bg";
import Encourage from "./Components/Encourage/Encourage";
import socketIOClient from "socket.io-client";

function App() {
  const [count, setCount] = useState(0);
  const socket = socketIOClient("ws://localhost:3000", {
    reconnectionDelayMax: 10000,
  });
  socket.on("connection", (socket) => {
    console.log("Client connection");
  });
  return (
    <div className="App">
      <ParticlesBg type="circle" bg={true} />
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
      <div id="contact">contact</div>
    </div>
  );
}

export default App;
