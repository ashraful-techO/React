import React from "react";

export default function Array({ user }) {
  return (
    <div>
      {user.map((user, idx) => (
        <p key={idx}>
          {user.name} - {user.email}
        </p>
      ))}
    </div>
  );
}
