import React from "react";

export default function Clock({ props }) {
  return (
    <div>
      <span>Clock: {new Date().toLocaleString(props)}</span>
    </div>
  );
}
