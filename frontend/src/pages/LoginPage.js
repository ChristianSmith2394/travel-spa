import React, { useState } from "react";
import "./LoginPage.css";
import port3 from "../assets/port3.png";
import logo from "../assets/logo.png";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history("/");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="left-side">
        <img src={logo} alt="CKT logo" />
        <h1>CKT, find all your travel needs!</h1>
        <h5>Please login to your account</h5>
        <form className="loginForm">
          <input
            className="loginInput"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            name="email"
            required
          />
          <input
            className="loginInput"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            name="password"
            required
          />
        </form>
        <button onClick={signIn} className="loginButton">
          Login!
        </button>
        <a href="#">Forgot password?</a>
        <div className="create-new">
          <p>Don't have an account yet? &nbsp;</p>
          <a href="/register" className="page-up">
            Create one!
          </a>
        </div>
      </div>
      <div className="right-side">
        <img src={port3} alt="login banner" className='right-banner'/>
        <div className="img-text">
          Find the best flights for your budget We help you find the cheapest
          flights by comparing prices from hundreds of airlines and travel
          agencies. Whether you're looking for a last-minute deal or want to
          plan ahead, we'll always give you the best possible price for your
          budget.
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
