import React, { useState } from "react";
import "./App.css"

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app-box">
      <h1 className="count">{count}</h1>

      <div className="button-box">
        <button className="btn" onClick={() => setCount(count > 0 ? count - 1 : 0)}>-</button>
        <button className="btn" onClick={() => setCount(0)}>reset</button>
        <button className="btn" onClick={() => setCount(count + 1)}>+</button>
      </div>
    </div>
  );
}

export default App;