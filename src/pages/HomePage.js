import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import TripForm from "../component/TripForm";
import Map from "../component/Map";
import Results from "../component/Results";

import "./HomePage.css";
import { parseNonNullablePickerDate } from "@mui/x-date-pickers/internals";

function HomePage() {
  const [departCode, setDepartCode] = React.useState("MSP");
  const [arriveCode, setArriveCode] = React.useState("ACY");
  const [departDate, setDepartDate] = React.useState(null);
  const [returnDate, setReturnDate] = React.useState(null);
  const [passengers, setPassengers] = React.useState(null);

  return (
    <div className="homepage">
      <Header />
      <TripForm
        departDate={departDate} 
        returnDate={returnDate}
        passengers={passengers}
        setDepartCode={setDepartCode}
        setArriveCode={setArriveCode}
        setDepartDate={setDepartDate}
        setReturnDate={setReturnDate}
        setPassengers={setPassengers}
        />
      <Map  
        departCode={departCode} 
        arriveCode={arriveCode}
        />
      <Results         
        departCode={departCode} 
        arriveCode={arriveCode}
        departDate={departDate} 
        returnDate={returnDate}
        passengers={passengers}
        />
      <Footer />
    </div>
  );
}

export default HomePage;