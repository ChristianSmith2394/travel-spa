import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import TripForm from "../component/TripForm";
import "./HomePage.css";
import background from "../assets/background.png";

function HomePage() {
  return (
    <div className="homepage">
      <Header />
      <TripForm />
      <div className="bg">
        <img src={background} alt="random filler" />
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
