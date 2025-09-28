import "./App.css";
import Alert from "./components/Props/Alert";
import Array from "./components/Props/Array";
import Button from "./components/Props/Button";
import Card from "./components/Props/Card";
import User from "./components/Props/User";

function App() {
  const userData = [
    {
      name: "Shanto",
      email: "abc@gmail.com",
    },
  ];

  const user = {
    name: "jon",
    age: 27,
  };

  // console.log({ user });

  return (
    <>
      <Button text={12} />
    </>
  );
}

export default App;
