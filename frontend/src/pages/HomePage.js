import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import TripForm from "../component/TripForm";
import Map from "../component/Map";
import Result from "../component/Result";

import "./HomePage.css";

function HomePage() {
  const [departCode, setDepartCode] = React.useState("MSP");
  const [arriveCode, setArriveCode] = React.useState("ACY");
  const [departDate, setDepartDate] = React.useState("");
  const [returnDate, setReturnDate] = React.useState("");
  const [passengers, setPassengers] = React.useState("");
  const [flightData, setFlightData] = React.useState([{}]);

  return (
    <div className="homepage">
      <Header />
      <TripForm
        departCode={departCode}
        arriveCode={arriveCode}
        departDate={departDate}
        returnDate={returnDate}
        passengers={passengers}
        flightData={flightData}
        setDepartCode={setDepartCode}
        setArriveCode={setArriveCode}
        setDepartDate={setDepartDate}
        setReturnDate={setReturnDate}
        setPassengers={setPassengers}
        setFlightData={setFlightData}
      />
      <Map departCode={departCode} arriveCode={arriveCode} />
      <Result flightData={flightData} />
      <Footer />
    </div>
  );
}

export default HomePage;
