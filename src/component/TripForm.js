import React from "react";
import "./TripForm.css";

function TripForm() {
  return (
    <div className="formBG">
      <div className="container border rounded" id="form">
        <div className="row p-3 pt-5">
          <div className="col px-2 form-floating">
            <input
              type="text"
              className="form-control"
              id="departureInput"
              placeholder="Departure"
            />
            <label for="departureInput">Departure</label>
          </div>
          <div className="col px-2 form-floating">
            <input
              type="text"
              className="form-control"
              id="destinationInput"
              placeholder="Destination"
            />
            <label for="destinationInput">Destination</label>
          </div>
          <div className="col px-2 form-floating">
            <input
              type="number"
              className="form-control"
              id="passengersInput"
              placeholder="Passengers"
            />
            <label for="passengersInput">Passengers</label>
          </div>
        </div>
        <div className="row p-3">
          <div className="col px-2 form-floating">
            <input
              type="date"
              className="form-control"
              id="departureDate"
              placeholder="Departure Date"
            />
            <label for="departureDate">Departure Date</label>
          </div>
          <div className="col px-2 form-floating">
            <input
              type="date"
              className="form-control form-floating"
              id="returnDate"
              placeholder="Return Date"
            />
            <label for="returnDate">Return Date</label>
          </div>
          <div className="row p-3">
            <div className="btn mt-3">
              <button type="submit" className="btn btn-outline-success">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TripForm;
