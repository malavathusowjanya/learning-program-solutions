import React, { useState } from 'react';
import CurrencyConverter from './CurrencyConverter';

function App() {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount(prev => prev + 1);
    sayHello();
  };

  const sayHello = () => {
    alert("Hello! Value incremented.");
  };

  const handleDecrease = () => {
    setCount(prev => prev - 1);
  };

  const sayWelcome = (message) => {
    alert(`Welcome message: ${message}`);
  };

  const handleClickEvent = (event) => {
    alert("I was clicked");
    console.log("Synthetic Event:", event);
  };

  return (
    <div className="App" style={{ padding: "30px", fontFamily: "Arial" }}>
      <h1>React Event Handling Example</h1>
      <h2>Counter: {count}</h2>

      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>

      <br /><br />

      <button onClick={() => sayWelcome("Welcome to React!")}>Say Welcome</button>

      <br /><br />

      <button onClick={handleClickEvent}>OnPress</button>

      <br /><br />
      <CurrencyConverter />
    </div>
  );
}

export default App;
