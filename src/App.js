
import React from "react";
import EventRegistration from "./EventRegistration";

function App() {
  return (
    <div>
      <h1>Welcome to Our College</h1>
      <h2>Upcoming Events</h2>

      <ul>
        <li>Technical Fest</li>
        <li>Cultural Fest</li>
        <li>Sports Meet</li>
        <li>Hackathon</li>
      </ul>

      <EventRegistration />
    </div>
  );
}

export default App;
