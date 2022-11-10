import React from "react";
import "./TripForm.css";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

function TripForm() {
  return (
    <div className="formBG">
      <div className="container border rounded" id="form">
        <Stack className="pt-3 px-3" direction="row" spacing={1}>
          <Button variant="outlined" startIcon={<TrendingFlatIcon />}>
            One way
          </Button>
          <Button variant="outlined" startIcon={<SyncAltIcon />}>
            Round-trip
          </Button>
        </Stack>
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
