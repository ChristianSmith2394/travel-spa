import React, { useState } from "react";
import "./RegisterPage.css";
import logo from "../assets/logo.png";
import Header from "../component/Header";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useNavigate();

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // it successfully created a new user with email and password
        if (auth) {
          history("/");
        }
      })
      .catch((error) => alert(error.message));
  };

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
        <button onClick={register} className="registerButton">
          Register!
        </button>
      </div>
    </div>
  );
}

export default RegisterPage;
