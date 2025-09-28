import React from "react";
import Prototypes from "prop-types";

export default function Button({ text }) {
  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <div>
      <button onClick={handleClick}>{text}</button>
    </div>
  );
}

Button.Prototypes = {
  text: Prototypes.string.isRequired,
};
