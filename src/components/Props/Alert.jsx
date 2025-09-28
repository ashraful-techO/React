import React from "react";

export default function Alert({ type, message }) {
  return <p style={{ color: type === "error" ? "red" : "green" }}>{message}</p>;
}
