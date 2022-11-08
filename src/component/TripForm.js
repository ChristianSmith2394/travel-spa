import React from "react";
import "./TripForm.css";

function TripForm() {
  return (
    <div>
      <div className="stack">
        <form className="schedule__form">
          <input placeholder="Destination" />
          <input placeholder="Departure date" />
          <input placeholder="Return date" />
          <input placeholder="Number of people" />
        </form>

        <div className="btn">
          <button>Search</button>
        </div>
      </div>
    </div>
  );
}

export default TripForm;
