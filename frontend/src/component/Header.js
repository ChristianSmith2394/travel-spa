import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import "./Header.css";
import bg from "../assets/formbg.png";
import { Dropdown } from "react-bootstrap";

function Header() {
  return (
    <div className="header">
      <nav className="navbar navbar-expand-sm">
        <div className="container-fluid">
          <a className="col-2 navbar-brand" href="/">
            <img src={logo} alt="logo" id="logo" />
          </a>
          <ul className="navbar-nav offset-6 me-auto">
            <li className="nav-item headerText">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item headerText">
              <a className="nav-link" href="/about">
                About
              </a>
            </li>
            <li className="nav-item">
              <Dropdown>
                <Dropdown.Toggle variant="ckt" icon="">
                  Login
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="login">Login</Dropdown.Item>
                  <Dropdown.Item href="register">Register</Dropdown.Item>
                  <Dropdown.Item href="account">Account</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
