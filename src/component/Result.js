import React, { useState } from "react";
import "./Result.css";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import sampleResults from "../data/sampleResults.json";
import Map from "./Map";
import { Modal, Button, Form, Container } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightToBracket,
  faArrowRightFromBracket,
  faPlaneDeparture,
  faPlaneArrival,
  faCalendar,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

function FlightInfo(result) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="nextButton btn-ckt" onClick={handleShow}>
        Details
      </Button>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header>
          <Modal.Title>Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Map
              departCode={result.departCode}
              arriveCode={result.arriveCode}
            />
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="ckt" type="submit" onClick={handleClose}>
            Book
          </Button>

          <Button variant="" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

function Result(departCode, arriveCode, departDate, returnDate, passengers) {
  // const handleOnClick = (result) => {
  //     console.log(result);

  //
  //   };

  return sampleResults.map((result) => (
    <Row className="result-card mx-auto">
      <Col>
        <Card className="result">
          <Card.Body>
            <Card.Title className="text-center">
              <FontAwesomeIcon icon={faArrowRightToBracket} />{" "}
              {result.airlineDeparture}
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {/* Can add Subtitle if you want */}
            </Card.Subtitle>
            <Row>
              <Col>
                <Card.Text>
                  <FontAwesomeIcon icon={faPlaneDeparture} />{" "}
                  {result.departCodeDeparture}{" "}
                </Card.Text>

                <Card.Text>
                  <FontAwesomeIcon icon={faCalendar} />{" "}
                  {result.departDateDeparture}
                </Card.Text>

                <Card.Text>
                  <FontAwesomeIcon icon={faClock} />{" "}
                  {result.departTimeDeparture}
                </Card.Text>
              </Col>
              <Col>
                <Card.Text>
                  <FontAwesomeIcon icon={faPlaneArrival} />{" "}
                  {result.arriveCodeDeparture}{" "}
                </Card.Text>

                <Card.Text>
                  <FontAwesomeIcon icon={faCalendar} />{" "}
                  {result.arriveDateDeparture}
                </Card.Text>

                <Card.Text>
                  <FontAwesomeIcon icon={faClock} />{" "}
                  {result.arriveTimeDeparture}
                </Card.Text>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card className="result">
          <Card.Body>
            <Card.Title className="text-center">
              <FontAwesomeIcon icon={faArrowRightToBracket} />{" "}
              {result.airlineReturn}
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {/* Can add Subtitle if you want */}
            </Card.Subtitle>
            <Row>
              <Col>
                <Card.Text>
                  <FontAwesomeIcon icon={faPlaneDeparture} />{" "}
                  {result.departCodeReturn}{" "}
                </Card.Text>

                <Card.Text>
                  <FontAwesomeIcon icon={faCalendar} />{" "}
                  {result.departDateReturn}
                </Card.Text>

                <Card.Text>
                  <FontAwesomeIcon icon={faClock} />{" "}
                  {result.departTimeReturn}
                </Card.Text>
              </Col>
              <Col>
                <Card.Text>
                  <FontAwesomeIcon icon={faPlaneArrival} />{" "}
                  {result.arriveCodeReturn}{" "}
                </Card.Text>

                <Card.Text>
                  <FontAwesomeIcon icon={faCalendar} />{" "}
                  {result.arriveDateReturn}
                </Card.Text>

                <Card.Text>
                  <FontAwesomeIcon icon={faClock} />{" "}
                  {result.arriveTimeReturn}
                </Card.Text>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
      <Col md={2}>
        <Card className="result">
          <Card.Body>
            <Card.Title>Price</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {result.price}
            </Card.Subtitle>
            <FlightInfo
              departCode={result.departCode}
              arriveCode={result.arriveCode}
            />
          </Card.Body>
        </Card>
      </Col>
    </Row>
  ));
}

export default Result;
