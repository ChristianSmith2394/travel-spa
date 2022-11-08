import React from "react";
import "./TripForm.css";
import bg from "../assets/formbg.png";

function TripForm() {
  return (
    <div className="container">
      <div className="row pt-5">
        <form className="schedule__form">
          <div className="col px-2">
            <input
              type="text"
              className="form-control"
              placeholder="Destination"
            />
          </div>
          <div className="col px-2">
            <input
              type="text"
              className="form-control"
              placeholder="Departure date"
            />
          </div>
          <div className="col px-2">
            <input
              type="text"
              className="form-control"
              placeholder="Return date"
            />
          </div>
          <div className="col px-2">
            <input
              type="text"
              className="form-control"
              placeholder="Number of people"
            />
          </div>
        </form>

        <div className="btn mt-3">
          <button type="submit" className="btn btn-light">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default TripForm;
