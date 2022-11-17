import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Map from "../component/Map";

function Results() {
  return (
    <>
      <Header />
      <div className="row mx-0" id="map">
        <Map />
      </div>
    <h1>RESULTS</h1>
      <Footer />
    </>
  );
}

export default Results;
