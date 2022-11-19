import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import TripForm from "../component/TripForm";
import Map from "../component/Map";

import "./HomePage.css";

function HomePage() {
  const [departCode, setDepartCode] = React.useState("AAA");
  const [arriveCode, setArriveCode] = React.useState("AAA");

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
      <Footer />
    </div>
  );
}

export default HomePage;