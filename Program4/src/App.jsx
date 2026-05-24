import React, { useState, useEffect } from "react";

function App() {
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [feedback, setFeedback] = useState("");
  const [records, setRecords] = useState([]);
  useEffect(() => {
      const savedData =
      JSON.parse(localStorage.getItem("feedbackData")) || [];
      setRecords(savedData);

  }, []);
  const handleName = (e) => {
    setName(e.target.value);
};
  const handleDepartment = (e) => {
    setDepartment(e.target.value);
  };
  const handleFeedback = (e) => {
    setFeedback(e.target.value);
};
  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecord = {
      name,
      department,
      feedback
    };
    const updatedRecords = [newRecord, ...records];
    setRecords(updatedRecords);
    localStorage.setItem(
      "feedbackData",
      JSON.stringify(updatedRecords)
    );
    alert("Feedback Submitted Successfully");
    setName("");
    setDepartment("");
    setFeedback("");

  };
  return (

    <div>

      <h1>Employee Feedback System</h1>

      <form onSubmit={handleSubmit}>

        <p>Employee Name</p>

        <input
          type="text"
          value={name}
          onChange={handleName}
        />
        <br />
        <br />
        <p>Department</p>
        <input
          type="text"
          value={department}
          onChange={handleDepartment}
        />
      <br />
        <br />

        <p>Feedback</p>

        <textarea
          value={feedback}
          onChange={handleFeedback}
        />

        <br />
        <br />

        <button type="submit">
          Submit Feedback
        </button>

      </form>

      <h2>Submitted Records</h2>

      {
        records.length === 0 ? (

          <p>No Feedback Yet</p>

        ) : (

          records.map((item, index) => (

            <div key={index}>

              <p>Name: {item.name}</p>

              <p>Department: {item.department}</p>

              <p>Feedback: {item.feedback}</p>

              <hr />

            </div>

          ))

        )
      }

    </div>

  );
}

export default App;