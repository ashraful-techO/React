import React, { useState } from "react";

function HookCounterThree() {
  const [name, setName] = useState({ fisrtName: "", lastName: "" });

  return (
    <div>
      <form action="#">
        <input
          type="text"
          value={name.fisrtName}
          onChange={(e) => setName({ ...name, fisrtName: e.target.value })}
        />
        <input
          type="text"
          value={name.lastName}
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
        />
      </form>

      <h2>Your Fisrt Name: {name.fisrtName}</h2>
      <h2>Your Last Name: {name.lastName}</h2>
    </div>
  );
}

export default HookCounterThree;
