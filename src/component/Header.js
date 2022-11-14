import React from "react";
import logo from "../assets/logo.png";
import "./Header.css";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="jumbotron p-3 mb-0 rounded-0 ">
      <div className="container">
        <div className="row">
          <div className="col-2">
            <img src={logo} alt="logo" className="logo" />
          </div>
          <div className="col"></div>
          <div className="col-2">
            <NavLink to="/" exact activeClassName="active" className="button">
              Flights
            </NavLink>
          </div>
          <div className="col-2">
            <NavLink to="/login" exact activeClassName="active">
              Login
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
