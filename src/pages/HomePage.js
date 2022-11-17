import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import TripForm from "../component/TripForm";
import ShowMap from "../component/Map";
import Map from "../component/test";

import "./HomePage.css";

function HomePage() {
  return (
    <div className="homepage">
      <Header />
      <TripForm />
      {/* <ShowMap /> */}
      <Map />
      <Footer />
    </div>
  );
}

export default HomePage;