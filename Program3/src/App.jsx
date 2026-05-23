import React, { useState } from "react";

function App() {

  const [quantity, setQuantity] = useState(1);

  const price = 200; // fixed food price

  const increase = () => {

    if (quantity < 10) {
      setQuantity(quantity + 1);
    }

  };

  const decrease = () => {

    if (quantity > 1) {
      setQuantity(quantity - 1);
    }

  };

  return (

    <div>

      <h1>QuickBite Order Manager</h1>

      <h2>Food Item: Burger</h2>

      <h3>Price: ₹{price}</h3>

      <h3>Quantity: {quantity}</h3>

      <button onClick={decrease}>-</button>

      <button onClick={increase}>+</button>

      <h2>Total Amount: ₹{price * quantity}</h2>

    </div>

  );
}

export default App;