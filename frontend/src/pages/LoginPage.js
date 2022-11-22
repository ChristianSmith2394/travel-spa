import React from "react";
import "./LoginPage.css";
import port3 from "../assets/port3.png";
import logo from "../assets/logo.png";

function LoginPage() {
  return (
    <div className="login">
      <div className="left-side">
        <img src={logo} alt="CKT logo" />
        <h1>CKT, find all your travel needs!</h1>
        <p>Please login to your account</p>
        <form>
          <input type="text" placeholder="Email" name="email" required></input>
          <input
            type="password"
            placeholder="Password"
            name="password"
            required
          ></input>
        </form>
        <button>Login!</button>
        <a href="#">Forgot password?</a>
        <div className="create-new">
          <p>Don't have an account yet?</p>
          <a href="/register">Create one!</a>
        </div>
      </div>
      <div className="right-side">
        <img src={port3} alt="login banner" />
      </div>
    </div>
  );
}

export default LoginPage;
