import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import TripForm from "../component/TripForm";
import ShowMap from "../component/Map";
import "./HomePage.css";
import background from "../assets/background.png";
// import port1 from "../assets/port1.png";
// import port2 from "../assets/port2.png";
// import port3 from "../assets/port3.png";
// import port4 from "../assets/port4.png";
import port5 from "../assets/port5.png";

function HomePage() {
  return (
    <div className="homepage">
      <Header />
      <TripForm />
        <div className="row p-3"></div>
      <div className="container-fluid bg">
        {/* <ShowMap /> */}
        <div className="row">
          <div className="col">
            <a href="https://google.com">
              <img src={background} alt="random filler" />
            </a>
          </div>
          <div className="col">
            <a href="https://apple.com">
              <img src={port5} alt="random filler" />
            </a>
          </div>
          <div className="col">
            <a href="https://google.com">
              <img src={background} alt="random filler" />
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col px-2">
            <a href="https://google.com">
              <img src={port5} alt="random filler" />
            </a>
          </div>
          <div className="col px-2">
            <a href="https://apple.com">
              <img src={background} alt="random filler" />
            </a>
          </div>
          <div className="col">
            <a href="https://google.com">
              <img src={port5} alt="random filler" />
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
