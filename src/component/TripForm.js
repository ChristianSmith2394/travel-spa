import React from "react";
import "./TripForm.css";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { airports } from "../data/airports";

function TripForm() {
  const [alignment, setAlignment] = React.useState("round-trip");

  const [departDate, setDepartDate] = React.useState([null, null]);

  const [returnDate, setReturnDate] = React.useState([null, null]);

  const [searchInput, setSearchInput] = React.useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  if (searchInput.length > 0) {
    airports.filter((airport) => {
      return airport.name.match(searchInput);
    });
  }

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
    console.log(alignment);
  };

  return (
    <div className="formBG">
      <div className="container border rounded" id="form">
        <ToggleButtonGroup
          className="pt-3 px-3"
          color="primary"
          value={alignment}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
        >
          <ToggleButton value="round-trip" variant="outlined" color="success">
            Round-trip
            <SyncAltIcon />
          </ToggleButton>
          <ToggleButton value="one-way" variant="outlined" color="success">
            One way
            <TrendingFlatIcon />
          </ToggleButton>
        </ToggleButtonGroup>

        <div className="row p-3">
          <div className="col px-2 form-floating">
            <input
              type="text"
              className="form-control"
              onChange={handleSearch}
              value={searchInput}
              id="departureInput"
              placeholder="Departure"
            />

            <table>
              <tr>
                <th>Code</th>
                <th>Airport</th>
              </tr>

              {airports.map((airport, index) => {
                <tr>
                  <td>{airport.code}</td>
                  <td>{airport.airport}</td>
                </tr>;
              })}
            </table>
            <label for="departureInput">Departure</label>
          </div>
          <div className="col px-2 form-floating">
            <input
              type="text"
              className="form-control"
              onChange={handleSearch}
              value={searchInput}
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
        <div className="row px-1">
          {alignment === "one-way" ? (
            <div>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  className="col px-2 form-floating"
                  label="Departure Date"
                  value={departDate}
                  onChange={(newValue) => {
                    setDepartDate(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </div>
          ) : (
            <div>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  className="col px-2 form-floating"
                  label="Departure Date"
                  value={departDate}
                  onChange={(newValue) => {
                    setDepartDate(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  className="col px-2 form-floating"
                  label="Return Date"
                  value={returnDate}
                  onChange={(newValue) => {
                    setReturnDate(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </div>
          )}
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
