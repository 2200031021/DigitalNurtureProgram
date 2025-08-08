import React, { useState } from "react";
import CurrencyConvertor from "./CurrencyConvertor";

function App() {
  
  const [counter, setCounter] = useState(0);

  
  const handleIncrement = () => {
    sayHello();
    increaseCounter();
  };

  const increaseCounter = () => {
    setCounter(counter + 1);
  };

  const sayHello = () => {
    alert("Hello! You clicked the Increment button!");
  };

  const handleDecrement = () => {
    setCounter(counter - 1);
  };
  const sayWelcome = (msg) => {
    alert(`Welcome Message: ${msg}`);
  };

  const handlePress = (e) => {
    alert("I was clicked (Synthetic Event)");
    console.log("Synthetic Event:", e);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>React Event Handling Example</h1>

      {/* Counter display */}
      <h2>Counter: {counter}</h2>

      {/* Increment and Decrement */}
      <button onClick={handleIncrement}>Increment</button>{" "}
      <button onClick={handleDecrement}>Decrement</button>

      <hr />

      {/* Say Welcome with argument */}
      <button onClick={() => sayWelcome("Welcome to React Event Handling!")}>
        Say Welcome
      </button>

      <hr />

      {/* Synthetic Event */}
      <button onClick={handlePress}>Click Me (Synthetic Event)</button>

      <hr />

      {/* Currency Convertor Component */}
      <CurrencyConvertor />
    </div>
  );
}

export default App;
