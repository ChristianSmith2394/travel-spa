import React from "react";
import "./RegisterPage.css";
import logo from "../assets/logo.png";
import Header from "../component/Header";

function RegisterPage() {
  return (
    <div>
      <Header />
      <div className="registration">
        <img src={logo} alt="CKT logo" className="reg-logo" />
        <h1>CKT, find all your travel needs!</h1>
        <form className="registerForm">
          <input
            className="registerInput"
            type="text"
            placeholder="First name"
            name="fName"
            required
          />
          <input
            className="registerInput"
            type="text"
            placeholder="Last name"
            name="lName"
            required
          />
          <input
            className="registerInput"
            type="email"
            placeholder="Email"
            name="email"
            required
          />
          <input
            className="registerInput"
            type="password"
            placeholder="Password"
            name="password"
            required
          />
          <input
            className="registerInput"
            type="password"
            placeholder="Confirm Password"
            name="password"
            required
          />
          <input
            className="registerInput"
            type="text"
            placeholder="Home airport (3 letter airport code)"
            name="airport"
          />
        </form>
        <button className="registerButton">Register!</button>
      </div>
    </div>
  );
}

export default RegisterPage;
