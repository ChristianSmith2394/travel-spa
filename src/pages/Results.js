import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import ShowMap from "../component/Map";

function Map() {
  return (
    <>
      <Header />
      <div className="row mx-0" id="map">
        <ShowMap />
      </div>
     {/* ADD RESULTS FOR FLIGHT SEARCH HERE */}
    <h1>RESULTS</h1>
      <Footer />
    </>
  );
}

export default Map;
