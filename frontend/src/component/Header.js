import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import "./Header.css";
import { Modal, Button, Form, Dropdown } from "react-bootstrap";
import { auth } from "../firebase";
import { useStateValue } from "./StateProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function InfoModal() {
  // const [{ user }, dispatch] = useStateValue();
  // const handleAuthenticaton = () => {
  //   if (user) {
  //     auth.signOut();
  //   }
  // };
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // const history = useNavigate();

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        handleClose();
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // it successfully created a new user with email and password
        if (auth) {
          handleClose();
        }
      })
      .catch((error) => alert(error.message));
    handleClose();
  };
  // const handleLogin = () => {
  //   setShow(true);
  // };

  return (
    <>
      <Button className="nextButton btn-ckt" onClick={handleShow}>
        {/* <div onClick={handleAuthenticaton}>
          <span>Hello {!user ? "Guest" : user.email}</span>
          <span>{user ? "Sign Out" : "Sign In"}</span> */}
        Login
        {/* </div> */}
      </Button>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                value={email}
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember me?" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="ckt" type="submit" onClick={signIn}>
            Login
          </Button>
          <Button variant="ckt" type="submit" onClick={register}>
            Register
          </Button>
          <Button variant="" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

function Header() {
  return (
    <nav className="navbar navbar-light navbar-expand-sm">
      <div className="container-fluid">
        <a className="col-2 navbar-brand" href="/">
          <img src={logo} alt="logo" id="logo" />
        </a>
        <ul className="navbar-nav offset-6 me-auto">
          <li className="nav-item">
            <a className="nav-link" href="/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about">
              About
            </a>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link" href="/account">
              Account
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/register">
              Register
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/login">
              Login
            </a>
          </li> */}
          <li className="nav-item">
          <Dropdown>
            <Dropdown.Toggle variant="ckt" icon="">Login</Dropdown.Toggle>
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
  );
}

export default Header;
