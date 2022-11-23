import React, { useState, useEffect } from "react";
import "./Result.css";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import sampleResults from "../data/sampleResults.json";
import Map from "./Map";
import { Modal, Button, Container, Accordion, ScrollView } from "react-bootstrap";
import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightToBracket,
  faArrowRightFromBracket,
  faPlaneDeparture,
  faPlaneArrival,
  faCalendar,
  faClock,
  faMoneyBill1,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";

function Test(flightData) {
  flightData = flightData.flightData;
  // if (flightData.length === 0) {
  //   return <div></div>;
  // }

  return sampleResults.map((result) => (
    <Row className="result-card mx-auto">
      <Col>
        <Card className="result">
          <Card.Body>
            <Card.Title className="text-center">
              {result.airlineDestination}{" "}
              <FontAwesomeIcon icon={faArrowRightToBracket} />
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {/* Can add Subtitle if you want */}
            </Card.Subtitle>
            <Row>
              <Col>
                <Card.Text>
                  <FontAwesomeIcon icon={faPlaneDeparture} />{" "}
                  {result.departCodeDestination}{" "}
                </Card.Text>

                <Card.Text>
                  <FontAwesomeIcon icon={faCalendar} />{" "}
                  {result.departDateDestination}
                </Card.Text>

                <Card.Text>
                  <FontAwesomeIcon icon={faClock} />{" "}
                  {result.departTimeDestination}
                </Card.Text>
              </Col>
              <Col>
                <Card.Text>
                  <FontAwesomeIcon icon={faPlaneArrival} />{" "}
                  {result.arriveCodeDestination}{" "}
                </Card.Text>

                <Card.Text>
                  <FontAwesomeIcon icon={faCalendar} />{" "}
                  {result.arriveDateDestination}
                </Card.Text>

                <Card.Text>
                  <FontAwesomeIcon icon={faClock} />{" "}
                  {result.arriveTimeDestination}
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
              <FontAwesomeIcon icon={faArrowRightFromBracket} />{" "}
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
                  <FontAwesomeIcon icon={faClock} /> {result.departTimeReturn}
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
                  <FontAwesomeIcon icon={faClock} /> {result.arriveTimeReturn}
                </Card.Text>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
      <Col md={2}>
        <Card className="result">
          <Card.Body>
            <Card.Title>
              <FontAwesomeIcon icon={faMoneyBill1} /> Price
            </Card.Title>
            <Card.Text>
              <FontAwesomeIcon icon={faDollarSign} /> {result.price}
            </Card.Text>
            <Button className="nextButton btn-ckt" onClick={console.log("Deets clicked")}>
        Details
      </Button>

          </Card.Body>
        </Card>
      </Col>
    </Row>
  ));
}

function Result() {
  return (
    <Container fluid className="result-container">
      <Test />
    </Container>
  );
}


export default Result;
