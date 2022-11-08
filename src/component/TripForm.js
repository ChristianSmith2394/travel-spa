import React from "react";
import "./TripForm.css";

function TripForm() {
  return (
    <div className="container justify-content-center">
      <div className="row mt-5">
        <form className="schedule__form">
          <div className="col">
            <input type="text" class="form-control" placeholder="Destination" />
          </div>
          <div className="col">
            <input type="text" class="form-control" placeholder="Departure date" />
          </div>
          <div className="col">
            <input type="text" class="form-control" placeholder="Return date" />
          </div>
          <div className="col">
            <input type="text" class="form-control" placeholder="Number of people" />
          </div>
        </form>

        <div className="btn mt-3">
          <button type="button" className="btn btn-light">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default TripForm;
