import React from "react";
import logo from "../assets/logo.png";
import "./Header.css";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <img src={logo} alt="logo" className="logo" />
      <nav>
        <NavLink to="/" exact activeClassName="active">
          Flights
        </NavLink>
        <NavLink to="/cars" exact activeClassName="active">
          Cars
        </NavLink>
        <NavLink to="/hotels" exact activeClassName="active">
          Hotels
        </NavLink>
        <NavLink to="/login" exact activeClassName="active">
          Login
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
