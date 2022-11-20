import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Map from "../component/Map";
import Result from "../component/Result";

function Results() {
  return (
    <>
      <Header />
      {/* <div className="row mx-0" id="map">
        <Map />
      </div> */}
      <Result />
      <Footer />
    </>
  );
}

export default Results;
