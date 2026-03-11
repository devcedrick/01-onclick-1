import React, { useState } from "react";
import "./Counter.css";

const Counter = () => {
  // --- STATE(s) ---
  const [count, setCount] = useState(0);

  // --- EVENT HANDLERS ---
  // [TASK]: Implement two event handlers: handleIncrement and handleDecrement. Implement below this line.

  // [TASK]: After implementation, wire up event handlers to the buttons
  // NOTE: Understand the behaviour between:
  //        - onClick(handleClick()),
  //        - onClick(handleClick)   -- Without parentheses
  //        - onClick(() => handleClick())  -- uses ARROW FUNCTION
  return (
    <div className="counter-container">
      <button className="counter-button">+</button>
      <div className="counter-value">{count}</div>
      <button className="counter-button">-</button>
    </div>
  );
};

export default Counter;
