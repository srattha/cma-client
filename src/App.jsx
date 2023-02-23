import React, { useState, Fragment } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import ParticlesBg from "particles-bg";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <ParticlesBg type="circle" bg={true} />
      <Header />
      <section id="home">
        <Home />
      </section>
      <section id="encourage">ข้อพระคัมภีร์หนุนใจ</section>
      <section id="blog">กิจกรรม</section>
    </div>
  );
}

export default App;
