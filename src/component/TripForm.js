import React from "react";
import "./TripForm.css";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";

function TripForm() {
  return (
    <div className="formBG">
      <div className="container border rounded" id="form">
        <div className="trip-container">
          <div className="trip-btn btn-ckt">
            <button type="radio">
              <TrendingFlatIcon />
              <p>One way</p>
            </button>
          </div>
          <div className="trip-btn btn-ckt">
            <button type="radio">
              <SyncAltIcon />
              <p>Round-trip</p>
            </button>
          </div>
        </div>
        <div className="row p-3">
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
        </div>
        <div className="row p-3">
          <button type="submit" className="btn btn-ckt">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default TripForm;
