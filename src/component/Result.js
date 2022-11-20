import React from "react";
import "./Result.css";

function Result(departCode, arriveCode, departDate, returnDate, passengers) {
  // const [results, setResults] = React.useState([]);

  // console.log("departCode: " + departCode);
  // console.log("arriveCode: " + arriveCode);
  // console.log("passengers: " + passengers);

  //   console.log(url);

  // GET LIST RESULTS FROM TRIPFORM AND BUILD OUT FLIGHT
  // COMPONENT TO DISPLAY RESULTS

  //   fetch("https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode="+departCode+"&destinationLocationCode="+arriveCode+"&departureDate=2021-11-01&adults="+passengers+"&max=2")
  // .then((res) => res.json())
  // .then(
  //   (result) => {
  //     console.log(result);
  //     setResults(result);
  //     });

  return (
    <div className="result">
      <h1>Your flight results are in!</h1>
      <div className="result-card">
        <h6>Airline:</h6>
        <h6>From:</h6>
        <h6>To:</h6>
        <h6>Price:</h6>
      </div>
      <div className="result-card">
        <h6>Airline:</h6>
        <h6>From:</h6>
        <h6>To:</h6>
        <h6>Price:</h6>
      </div>
      <div className="result-card">
        <h6>Airline:</h6>
        <h6>From:</h6>
        <h6>To:</h6>
        <h6>Price:</h6>
      </div>
      <div className="result-card">
        <h6>Airline:</h6>
        <h6>From:</h6>
        <h6>To:</h6>
        <h6>Price:</h6>
      </div>
      {/* <ul>
        {results.map((result) => (
          <li key={result.id}>
            {result.name} {result.price}
          </li>
        ))}
      </ul> */}
    </div>
  );
}

export default Result;
