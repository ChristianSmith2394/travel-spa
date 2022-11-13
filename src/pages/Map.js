import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import ShowMap from "../component/Map";
import "./Map.css";

function Map() {
  return (
    <div className="map">
      <Header />
      <ShowMap />
      <Footer />
    </div>
  );
}

export default Map;
