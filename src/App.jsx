import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Increments from "./components/increments";
import Fruits from "./components/Fruits";
import Clock from "./components/Clock";

function App() {
  return (
    <>
      <Clock locale="bn-BD" />
      <Increments />
      <hr />
      <Fruits />
    </>
  );
}

export default App;
