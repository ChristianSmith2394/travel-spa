import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
// import Map from "../component/Map";
import Result from "../component/Result";
import "./Results.css";

function Results() {
  return (
    <div className="results">
      <Header />
      {/* <div className="row mx-0" id="map">
        <Map />
      </div> */}
      <Result />
      <Footer />
    </div>
  );
}

export default Results;
