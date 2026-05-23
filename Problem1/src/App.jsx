import React, { useState, useEffect } from "react";

// App ek functional component hai
function App() {

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [mobile, setMobile] = useState("");

  const [course, setCourse] = useState("");

  const [data, setData] = useState(null);

  // Refresh ke baad localStorage ka data load hoga
  useEffect(() => {

    setName(localStorage.getItem("name") || "");

    setEmail(localStorage.getItem("email") || "");

    setMobile(localStorage.getItem("mobile") || "");

    setCourse(localStorage.getItem("course") || "");

  }, []);

  // Name input handle
  const handleName = (e) => {

    setName(e.target.value);

    localStorage.setItem("name", e.target.value);

  };

  // Email input handle
  const handleEmail = (e) => {

    setEmail(e.target.value);

    localStorage.setItem("email", e.target.value);

  };

  // Mobile input handle
  const handleMobile = (e) => {

    setMobile(e.target.value);

    localStorage.setItem("mobile", e.target.value);

  };

  // Course input handle
  const handleCourse = (e) => {

    setCourse(e.target.value);

    localStorage.setItem("course", e.target.value);

  };

  // Form submit
  const handleSubmit = (e) => {

    e.preventDefault();

    setData({
      name,
      email,
      mobile,
      course
    });

    alert("Student Registered Successfully");

  };

  return (

    <div>

      <h1>Student Registration Portal</h1>

      <form onSubmit={handleSubmit}>

        <p>Student Name</p>

        <input
          type="text"
          value={name}
          onChange={handleName}
        />

        <br />
        <br />

        <p>Email</p>

        <input
          type="email"
          value={email}
          onChange={handleEmail}
        />

        <br />
        <br />

        <p>Mobile Number</p>

        <input
          type="text"
          value={mobile}
          onChange={handleMobile}
        />

        <br />
        <br />

        <p>Course</p>

        <input
          type="text"
          value={course}
          onChange={handleCourse}
        />

        <br />
        <br />

        <button type="submit">
          Register Student
        </button>

      </form>

      {
        data ? (

          <div>

            <h2>Submitted Data</h2>

            <p>Name: {data.name}</p>

            <p>Email: {data.email}</p>

            <p>Mobile: {data.mobile}</p>

            <p>Course: {data.course}</p>

          </div>

        ) : (

          <div>

            <h2>No data submitted yet.</h2>

          </div>

        )
      }

    </div>

  );
}

export default App;