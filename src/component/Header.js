import React, { useState } from "react";
import logo from "../assets/logo.png";
import "./Header.css";
import { Modal, Button, Form } from "react-bootstrap";

function InfoModal() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleLogin = () => {
    setShow(true);
  };

  return (
    <>
      <Button className="nextButton btn-ckt" onClick={handleShow}>
        Login
      </Button>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember me?" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="ckt" type="submit" onClick={handleClose}>
            Login
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
            <InfoModal />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
