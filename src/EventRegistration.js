
import React from "react";

function EventRegistration() {
  return (
    <div>
      <h1>College Event Registration</h1>

      <h2>Register for an Event</h2>

      <form>
        <input type="text" placeholder="Student Name" required />
        <br /><br />

        <input type="text" placeholder="Roll Number" required />
        <br /><br />

        <select required defaultValue="">
          <option value="" disabled>Select Branch</option>
          <option>CSE</option>
          <option>ECE</option>
          <option>EEE</option>
          <option>MECH</option>
        </select>
        <br /><br />

        <select required defaultValue="">
          <option value="" disabled>Select Event</option>
          <option>Technical Fest</option>
          <option>Cultural Fest</option>
          <option>Sports Meet</option>
          <option>Hackathon</option>
        </select>
        <br /><br />

        <input type="email" placeholder="Email" required />
        <br /><br />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default EventRegistration;
