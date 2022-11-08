import React from "react";
import "./TripForm.css";

function TripForm() {
  return (
    <div className="schedule__form">
      <form>
        <input placeholder="Destination" />
        <input placeholder="Departure date" />
        <input placeholder="Return date" />
        <input placeholder="Number of people" />
      </form>
    </div>
  );
}

export default TripForm;
