import "./App.css";
import Clock from "./components/Clock";
import Fruits from "./components/Fruits";
import Hello from "./components/Hello";
import Increments from "./components/increments";
import Message from "./components/Message";

function App() {
  return (
    <>
      <Message />

      {/* <Clock locale="bn-BD" />
      <Increments />
      <hr />
      <Fruits />
      <Hello name="Shanto" heroName="Superman">
        <p>This is a Children Props</p>
      </Hello>
      <Hello name={"Pranto"} heroName={"Spiderman"}>
        <button>Action</button>
      </Hello>
      <Hello name={"Asif"} heroName={"Captain America"}/> */}
    </>
  );
}

export default App;
