import { useState } from "react";
import './App.css';

export default function CounterApp() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="container">
      <div className="counter-card">
        <h2>Counter App</h2>
        <p>Count: {count}</p>
        <div className="buttons">
          <button onClick={increment} className="increment">Increment</button>
          <button onClick={decrement} className="decrement">Decrement</button>
          <button onClick={reset} className="reset">Reset</button>
        </div>
      </div>
    </div>
  );
}
