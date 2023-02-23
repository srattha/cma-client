import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Header from "./Components/Header/Header";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="App">
        <Header />
      </div>
    </div>
  );
}

export default App;
