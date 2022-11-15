import React from "react";
import logo from "../assets/logo.png";
import "./Header.css";


function Header() {
  return (
    <nav class="navbar navbar-light navbar-expand-sm">
      <div class="container-fluid">
        <a class="col-2 navbar-brand" href="#">
          <img src={logo} alt="logo" id="logo" />
        </a>
        <ul class="navbar-nav offset-6 me-auto">
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
              <button type="button" class="btn btn-ckt" data-bs-toggle="modal" data-bs-target="#login">
              Login
            </button>
            <div class="modal fade" id="login" tabindex="-1" aria-labelledby="loginLabel" aria-hidden="false">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="loginLabel">Modal TITLE</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    Modal BODY
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                  </div>
                </div>
              </div>
            </div>
            </li>
        </ul>

      </div>
    </nav>
  );
}

export default Header;
