import React, { useState } from "react";

export default function HookCounterTwo() {
  const initialValue = 0;
  const [value, setValue] = useState(initialValue);

  const increaseFive = () => {
    for (let i = 1; i <= 5; i++) {
      setValue((pre) => pre + 1);
    }
  };

  return (
    <div>
      Count: {value}
      <button onClick={() => setValue(initialValue)}>Reset</button>
      <button onClick={() => setValue((pre) => pre + 1)}>Increment</button>
      <button onClick={() => setValue((pre) => pre - 1)}>Decrement</button>
      <button onClick={increaseFive}>Increase 5</button>
    </div>
  );
}
