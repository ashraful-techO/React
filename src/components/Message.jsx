import React, { useState } from 'react'

export default function Message() {

    const [msg, setMsg] = useState("");

  return (
    <div>
      <h1>Welcome, visitors</h1>
    </div>
  );
}
