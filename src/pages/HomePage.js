import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import TripForm from "../component/TripForm";
import Map from "../component/Map";
import Results from "../component/Results";

import "./HomePage.css";

function HomePage() {
  const [departCode, setDepartCode] = React.useState("MSP");
  const [arriveCode, setArriveCode] = React.useState("ACY");

  return (
    <div className="homepage">
      <Header />
      <TripForm 
        departCode={departCode} 
        arriveCode={arriveCode}
        setDepartCode={setDepartCode}
        setArriveCode={setArriveCode}
        />
      <Map  
        departCode={departCode} 
        arriveCode={arriveCode}
        setDepartCode={setDepartCode}
        setArriveCode={setArriveCode}
      />
      <Results />
      <Footer />
    </div>
  );
}

export default HomePage;