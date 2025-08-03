import React, { useState } from "react";
import CurrencyConvertor from "./CurrencyConvertor";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
    sayHello();
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const sayHello = () => {
    alert("Hello from increment!");
  };

  const sayWelcome = (message) => {
    alert(message);
  };

  const handleClick = (e) => {
    alert("I was clicked");
  };

  return (
    <div style={{ padding: "20px" }}>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={() => sayWelcome("Welcome")}>Say Welcome</button>
      <button onClick={handleClick}>Click Me (OnPress)</button>

      <br /><br />
      <h2 style={{ color: "green" }}>Currency Convertor!!!</h2>
      <CurrencyConvertor />
    </div>
  );
}

export default App;
