import React from "react";

export default function Clock({ props })
{
  return (
    <div>
      <h3 className="heading">
        <span className="text">Clock: {new Date().toLocaleString(props)}</span>
      </h3>
    </div>
  );
}
