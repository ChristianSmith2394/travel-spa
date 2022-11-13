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
import Data from "../data/airports.json";
import { ReactSearchAutocomplete } from "react-search-autocomplete";

function TripForm() {
  const items = [
    {
      id: 0,
      name: "Cobol",
    },
    {
      id: 1,
      name: "JavaScript",
    },
    {
      id: 2,
      name: "Basic",
    },
    {
      id: 3,
      name: "PHP",
    },
    {
      id: 4,
      name: "Java",
    },
  ];

  const [alignment, setAlignment] = React.useState("round-trip");

  const [departDate, setDepartDate] = React.useState([null, null]);

  const [returnDate, setReturnDate] = React.useState([null, null]);

  const handleOnSearch = (string, results) => {
    // onSearch will have the first callback parameter as
    // the string searched. For the second, the results.
    console.log(string, results);
    return string, results;
  };

  const handleOnHover = (result) => {
    // the item hovered
    console.log(result);
    return result;
  };

  const handleOnSelect = (Data) => {
    // the item selected
    console.log(Data);
    return Data;
  };

  const handleOnFocus = () => {
    console.log("Focused");
  };

  // const formatResult = (Data) => {
  //   return (
  //     <>
  //       <span>
  //         {Data.code} - {Data.airport}
  //         <br />
  //       </span>
  //     </>
  //   );
  // };
  const formatResult = (item) => {
    return (
      <>
        <span style={{ display: "block", textAlign: "left" }}>
          name: {item.name}
        </span>
      </>
    );
  };

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
          <ToggleButton value="one-way" variant="outlined" color="success">
            One way
            <TrendingFlatIcon />
          </ToggleButton>
          <ToggleButton value="round-trip" variant="outlined" color="success">
            Round-trip
            <SyncAltIcon />
          </ToggleButton>
        </ToggleButtonGroup>

        <div className="row p-3">
          <div className="col px-2">
            <div style={{ width: 400 }}>
              <ReactSearchAutocomplete
                items={Data}
                fuseOptions={{ keys: ["code", "airport"] }}
                resultStringKeyName={{ keys: ["code", "airport"] }}
                onSearch={handleOnSearch}
                onHover={handleOnHover}
                onSelect={handleOnSelect}
                onFocus={handleOnFocus}
                autoFocus
                formatResult={formatResult}
                styling={{ zIndex: 3 }}
              />
            </div>
            <ReactSearchAutocomplete
              items={Data}
              // fuseOptions={{ keys: ["code", "airport"] }}
              onSearch={handleOnSearch}
              onHover={handleOnHover}
              onSelect={handleOnSelect}
              onFocus={handleOnFocus}
              placeholder="Departure"
              autoFocus
              formatResult={formatResult}
              styling={{ zIndex: 2 }}
            />
          </div>
          <div className="col px-2">
            <ReactSearchAutocomplete
              items={Data}
              fuseOptions={{ keys: ["code", "airport"] }}
              onSearch={handleOnSearch}
              onHover={handleOnHover}
              onSelect={handleOnSelect}
              onFocus={handleOnFocus}
              placeholder="Departure"
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
            />
          </div>
        </div>
        <div className="row px-2">
          {alignment === "one-way" ? (
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                className="col-6 px-2"
                label="Departure Date"
                value={departDate}
                onChange={(newValue) => {
                  setDepartDate(newValue);
                }}
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
                    setDepartDate(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  className="col px-2"
                  label="Return Date"
                  value={returnDate}
                  onChange={(newValue) => {
                    setReturnDate(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </>
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
