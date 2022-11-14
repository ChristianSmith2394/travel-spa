import React from "react";
import logo from "../assets/logo.png";
import "./Header.css";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="jumbotron jumbotron-fluid mb-0 pt-3 pb-3 rounded-0 ">
      <div className="container-fluid">
        <div className="row">
          <a className="col-3 logo" href="/">
            <img src={logo} alt="logo" />
          </a>
          <div className="col"></div>
          <div className="col-4">
            <nav className="navbar">
              <li className="nav-item">
                <a className="navbar-brand" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="navbar-brand" href="/map">
                  Map
                </a>
              </li>
              <li className="nav-item">
                <a className="navbar-brand" href="/login">
                  Login
                </a>
              </li>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
