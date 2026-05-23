import React, { useEffect, useState } from "react";

function App() {

  const [streak, setStreak] = useState(0);
  const [activities, setActivities] = useState([]);
  const [tip, setTip] = useState("");

  const tips = [
    "Drink more water",
    "Sleep on time",
    "Exercise daily",
    "Meditate for 10 minutes",
    "Read something positive"
  ];

  useEffect(() => {
    const randomTip =
      tips[Math.floor(Math.random() * tips.length)];
    setTip(randomTip);
  }, []);

  const trackActivity = (activity) => {

    const time = new Date().toLocaleString();

    const newData = {
      activity: activity,
      time: time
    };

    setActivities([newData, ...activities]);

    if (
      activity === "Meditation" ||
      activity === "Exercise" ||
      activity === "Reading"
    ) {
      setStreak(streak + 1);
    } else {
      setStreak(0);
    }
  };

  return (
    <div>

      <h1>Daily Habit Tracker</h1>

      <h2>Current Streak: {streak}</h2>

      <h3>Today's Tip:</h3>
      <p>{tip}</p>

      <button onClick={() => trackActivity("Meditation")}>Meditation</button>
      <button onClick={() => trackActivity("Exercise")}>Exercise</button>
      <button onClick={() => trackActivity("Reading")}>Reading</button>
      <button onClick={() => trackActivity("Overslept")}>Overslept</button>
      <button onClick={() => trackActivity("Skipped Routine")}>Skipped Routine</button>

      <h2>Activities:</h2>

      <ul>
        {activities.map((item, index) => (
          <li key={index}>
            {item.activity} - {item.time}
          </li>
        ))}
      </ul>

    </div>
  );
}

export default App;