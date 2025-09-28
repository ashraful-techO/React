import React from "react";

export default function Props({ name = "Shanto", age = 27 }) {
  return (
    <div>
      <h1>Welcome {name}</h1>
      <p>Your are now {age}</p>
    </div>
  );
}
