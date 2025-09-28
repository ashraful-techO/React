import React from "react";

export default function Card({ children }) {
  return (
    <div style={{ border: "1px solid black", padding: "10px" }}>{children}</div>
  );
}
