import React from "react";
import "./RegisterPage.css";
import logo from "../assets/logo.png";

function RegisterPage() {
  return (
    <div className="registration">
      <img src={logo} alt="CKT logo" className="reg-logo" />
      <h1>CKT, find all your travel needs!</h1>
      <form className="loginForm">
        <input
          className="registerInput"
          type="text"
          placeholder="Email"
          name="email"
          required
        ></input>
        <input
          className="registerInput"
          type="password"
          placeholder="Password"
          name="password"
          required
        ></input>
      </form>
      <button className="registerButton">Register!</button>
      <div className="create-new"></div>
    </div>
  );
}

export default RegisterPage;
