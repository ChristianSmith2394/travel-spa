import React from "react";
import logo from "../assets/logo.png";
import "./Header.css";

function Header() {
  return (
    <nav class="navbar navbar-light navbar-expand-sm">
      <div class="container">
        <a class="col-3 navbar-brand" href="#">
          <img src={logo} alt="logo" />
        </a>
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#">
              Home
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/results">
              Results
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/about">
              About
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/login">
              Login
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
