import React, { useState } from "react";

function App() {

  // Expense title store karne ke liye
  const [title, setTitle] = useState("");

  // Expense amount store karne ke liye
  const [amount, setAmount] = useState("");

  // Sare expenses ko array me store karenge
  const [expenses, setExpenses] = useState([]);

  // Expense add karne ka function
  function addExpense() {

    // Agar input empty hai to kuch mat karo
    if (title === "" || amount === "") {
      alert("Please enter title and amount");
      return;
    }

    // Naya expense object
    const newExpense = {
      title: title,
      amount: amount
    };

    // Purane expenses + new expense
    setExpenses([...expenses, newExpense]);

    // Input fields empty kar do
    setTitle("");
    setAmount("");
  }

  // Total expense calculate karne ke liye
  let total = 0;

  for (let i = 0; i < expenses.length; i++) {
    total = total + Number(expenses[i].amount);
  }

  // Reset function
  function resetData() {
    setExpenses([]);
    setTitle("");
    setAmount("");
  }

  return (
    <div style={{ padding: "20px" }}>

      <h1>Expense Tracker Dashboard</h1>

      {/* Input Field for Title */}
      <input
        type="text"
        placeholder="Enter Expense Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <br /><br />

      {/* Input Field for Amount */}
      <input
        type="number"
        placeholder="Enter Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <br /><br />

      {/* Add Button */}
      <button onClick={addExpense}>
        Add Expense
      </button>

      {/* Reset Button */}
      <button onClick={resetData} style={{ marginLeft: "10px" }}>
        Reset
      </button>

      <hr />

      {/* Total Expense */}
      <h2>Total Expenses: ₹{total}</h2>

      {/* Recent Expenses */}
      <h2>Recent Expenses</h2>

      {
        expenses.length === 0 ? (
          <p>No Expenses Added</p>
        ) : (
          <ul>
            {
              expenses.map((item, index) => (
                <li key={index}>
                  {item.title} - ₹{item.amount}
                </li>
              ))
            }
          </ul>
        )
      }

    </div>
  );
}

export default App;