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
import items from "../data/airports.json";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import moment from 'moment';

function TripForm({
  departCode,
  arriveCode,
  departDate,
  returnDate,
  passengers,
  setDepartCode,
  setArriveCode,
  setDepartDate,
  setReturnDate,
  setPassengers,
}) {
  const [alignment, setAlignment] = React.useState("round-trip");

  const handleOnSearch = (string, results) => {
    // onSearch will have the first callback parameter as
    // the string searched. For the second, the results.
    console.log(string, results);
    return string, results;
  };

  const handleOnHover = (result) => {
    // the item hovered
    // console.log(result);
    return result;
  };

  const handleOnSelectDepart = (item) => {
    // the item selected
    setDepartCode(item.code);
    console.log(item.code);
    // return item;
  };

  const handleOnSelectArrive = (item) => {
    // the item selected
    setArriveCode(item.code);
    console.log(item.code);
    // return item;
  };

  const handleOnFocus = () => {
    // console.log("Focused");
  };

  const formatDate = (date) => {
    // wihout moment.js
    const day = date["$D"];
    const month = date["$M"] + 1;
    const year = date["$y"];
    return `${year}-${month}-${day}`;
  };

  const handleOnSubmit = () => {

    console.log("departCode: " + departCode);
    console.log("arriveCode: " + arriveCode);
    console.log("passengers: " + passengers);
    console.log(departDate);
    console.log(returnDate);
    
  };


  const formatResult = (item) => {
    return (
      <>
        <span>
          {item.code} - {item.name1}
        </span>
      </>
    );
  };

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
    console.log(alignment);
  };

  return (
    <div className="container formBG">
      <div className="col"></div>
      <div className="col-10">
        <div className="container-fluid border rounded" id="form">
          <div className="row pt-3 px-3">
            <ToggleButtonGroup
              color="primary"
              value={alignment}
              exclusive
              onChange={handleChange}
              aria-label="Platform"
            >
              <ToggleButton value="one-way" variant="outlined" color="success">
                One way
                <TrendingFlatIcon />
              </ToggleButton>
              <ToggleButton
                value="round-trip"
                variant="outlined"
                color="success"
              >
                Round-trip
                <SyncAltIcon />
              </ToggleButton>
            </ToggleButtonGroup>
          </div>
          <div className="row p-3">
            <div className="col px-2">
              <ReactSearchAutocomplete
                items={items}
                fuseOptions={{ keys: ["code", "name"] }}
                onSearch={handleOnSearch}
                onHover={handleOnHover}
                onSelect={handleOnSelectDepart}
                onFocus={handleOnFocus}
                placeholder="Departure"
                autoFocus
                formatResult={formatResult}
                styling={{ zIndex: 2 }}
              />
            </div>
            <div className="col px-2">
              <ReactSearchAutocomplete
                items={items}
                fuseOptions={{ keys: ["code", "name"] }}
                onSearch={handleOnSearch}
                onHover={handleOnHover}
                onSelect={handleOnSelectArrive}
                onFocus={handleOnFocus}
                placeholder="Destination"
                autoFocus
                formatResult={formatResult}
                styling={{ zIndex: 2 }}
              />
            </div>
            <div className="col px-2">
              <input
                type="number"
                className="form-control"
                id="passengersInput"
                placeholder="     Passengers"
                style={{
                  height: "44px",
                  border: "1px solid #dfe1e5",
                  borderRadius: "24px",
                  backgroundColor: "white",
                  boxShadow: "rgba(32, 33, 36, 0.28) 0px 1px 6px 0px",
                  hoverBackgroundColor: "#eee",
                  color: "#212121",
                  fontSize: "16px",
                  fontFamily: "Arial",
                  iconColor: "grey",
                  lineColor: "rgb(232, 234, 237)",
                  placeholderColor: "grey",
                }}
                value={passengers}
                onChange={(e) => setPassengers(e.target.value)}
              />
            </div>
          </div>
          <div className="row px-2">
            {alignment === "one-way" ? (
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  className="col-6 px-2"
                  label="Departure Date"
                  onChange={(newValue) => {
                    setDepartDate(formatDate(newValue));
                  }}
                  value={departDate}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            ) : (
              <>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    className="col px-2"
                    label="Departure Date"
                    value={departDate}
                    onChange={(newValue) => {
                      setDepartDate(formatDate(newValue));
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    className="col px-2"
                    label="Return Date"
                    onChange={(newValue) => {
                      setReturnDate(formatDate(newValue));
                    }}
                    value={returnDate}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </>
            )}
          </div>
          <div className="row p-3">
            <div className="col"></div>
            <button
              type="submit"
              className="col-6 btn btn-ckt"
              onClick={handleOnSubmit}
            >
              Search
            </button>
            <div className="col"></div>
          </div>
        </div>
      </div>
      <div className="col"></div>
    </div>
  );
}

export default TripForm;
