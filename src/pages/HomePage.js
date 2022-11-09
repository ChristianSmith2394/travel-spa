import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import TripForm from "../component/TripForm";
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
      <div className="bg">
        <div className="row-1">
          <a href="https://google.com">
            <img src={background} alt="random filler" />
          </a>
          <a href="https://apple.com">
            <img src={port5} alt="random filler" />
          </a>
          <a href="https://google.com">
            <img src={background} alt="random filler" />
          </a>
        </div>
        <div className="row-2">
          <a href="https://google.com">
            <img src={port5} alt="random filler" />
          </a>
          <a href="https://apple.com">
            <img src={background} alt="random filler" />
          </a>
          <a href="https://google.com">
            <img src={port5} alt="random filler" />
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
