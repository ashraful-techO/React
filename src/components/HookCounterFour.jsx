import React, { useState } from "react";

function HookCounterFour() {
  const [item, setItems] = useState([]);

  const addItems = () => {
    setItems([
      ...item,
      {
        id: item.length,
        value: Math.floor(Math.random() * 10) + 1,
      },
    ]);
  };
  return (
    <div>
      <button onClick={addItems}>Add Items</button>
      <ul>
        {item.map((items) => (
          <li key={items.id}>{items.value}</li>
        ))}
      </ul>
    </div>
  );
}

export default HookCounterFour;
