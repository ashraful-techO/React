import { useState } from "react";
import "./App.css";
import Alert from "./components/Props/Alert";
import Array from "./components/Props/Array";
import Button from "./components/Props/Button";
import Card from "./components/Props/Card";
import Child from "./components/Props/Child";
import User from "./components/Props/User";

function App() {
  const [msg, setMsg] = useState("");

  const handleChange = (msg) => {
    setMsg(msg);
  };

  return (
    <>
      <div>
        <h2>Parent Component</h2>
      </div>

      <Child
        msgfromParent="Hi Child! How are you?"
        sendmsgtoParent={handleChange}
      />

      <p>Child Msg: {msg}</p>
    </>
  );
}

export default App;
