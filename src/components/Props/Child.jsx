import React from "react";

export default function Child({ msgfromParent, sendmsgtoParent }) {
  return (
    <div>
      <p>Message from Parent:{msgfromParent} </p>
      <button onClick={() => sendmsgtoParent("Hi, Parent I got your msg")}>
        Reply to Parent from Child
      </button>
    </div>
  );
}
