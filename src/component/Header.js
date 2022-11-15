import React from "react";
import logo from "../assets/logo.png";
import "./Header.css";

function Header() {
  return (
    <nav class="navbar navbar-light navbar-expand-sm">
      <div class="container-fluid">
        <a class="col-2 ml-auto navbar-brand" href="#">
          <img src={logo} alt="logo" id="logo" />
        </a>
        <ul class="navbar-nav offset-7 mr-auto">
          <li class="nav-item">
            <a class="nav-link" href="/">
              Home
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
