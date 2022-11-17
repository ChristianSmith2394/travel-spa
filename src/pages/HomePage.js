import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import TripForm from "../component/TripForm";
import Map from "../component/Map";

import "./HomePage.css";

function HomePage() {
  return (
    <div className="homepage">
      <Header />
      <TripForm />
      <Map />
      <Footer />
    </div>
  );
}

export default HomePage;