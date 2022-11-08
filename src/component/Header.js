import React from "react";
import logo from "../assets/logo.png";
import "./Header.css";

function Header() {
  return (
    <header>
      <img src={logo} alt="logo" className="logo" />
      <nav>
        <a href="#">Flights</a>
        <a href="#">Cars</a>
        <a href="#">Hotels</a>
        <a href="#">Login</a>
      </nav>
    </header>
  );
}

export default Header;
