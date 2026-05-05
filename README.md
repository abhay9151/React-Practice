⚛️ React Fundamentals – Learning Documentation

This repository contains my learning and practice of core React concepts.
Below are the topics I have covered so far along with brief explanations.

📌 Topics Covered
🔹 1. JSX & Basic React Structure
JSX allows writing HTML-like syntax inside JavaScript.
Components are the building blocks of a React application.
Functional components are simple JavaScript functions that return JSX.
🔹 2. useState Hook
useState is a React Hook used to manage state in functional components.
It allows components to be dynamic and interactive.
const [count, setCount] = useState(0);
count → current state
setCount → function to update state
🔹 3. Counter Application
A basic project to understand state updates.
Implemented increment, decrement, and reset functionality.

Concepts Used:

useState
Event handling
Re-rendering
🔹 4. Props (Properties)
Props are used to pass data from parent to child components.
<Child name="Abhay" />
Props are read-only.
Help in making reusable components.
🔹 5. Conditional Rendering
Used to display UI based on certain conditions.
{isLoggedIn ? <Dashboard /> : <Login />}
Helps in controlling what users see based on state or data.
🔹 6. State Lifting (Lifting State Up)
When multiple components need the same data, state is moved to their common parent.

Why?

To keep components in sync

Example:

Multiple input fields sharing the same value
🚀 Key Learnings
Understanding component-based architecture
Managing state effectively using hooks
Passing and handling data using props
Writing clean and reusable UI logic
Synchronizing components using state lifting
🛠️ Tech Stack
React.js
JavaScript (ES6+)
HTML & CSS
