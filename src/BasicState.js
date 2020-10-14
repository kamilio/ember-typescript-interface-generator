import React, { useState } from 'react';

export default function BasicState() {
  const [count, setCount] = useState(3);

  return (
    <div>
      <h1>My app</h1>
      <p role="main">You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}