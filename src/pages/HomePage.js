import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import TripForm from "../component/TripForm";

function HomePage() {
  return (
    <div className="homepage">
      <img class="bg" src="../assets/background.png" alt="" />
      <Header />
      <TripForm />
      <Footer />
    </div>
  );
}

export default HomePage;
