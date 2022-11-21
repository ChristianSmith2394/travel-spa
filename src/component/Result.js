import React, { useState } from "react";
import "./Result.css";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import sampleResults from "../data/sampleResults.json";
import Map from "./Map";
import { Modal, Button, Form, Container } from "react-bootstrap";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightToBracket, faArrowRightFromBracket, faPlaneDeparture, faPlaneArrival } from '@fortawesome/free-solid-svg-icons';


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
        <Map departCode={result.departCode} arriveCode={result.arriveCode} />
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
            <Card.Title><FontAwesomeIcon icon={faArrowRightToBracket} /> {result.airlineDeparture}</Card.Title> 
            <Card.Subtitle className="mb-2 text-muted">
              {result.departCodeDeparture} to {result.arriveCodeDeparture}
            </Card.Subtitle>
            <Card.Text>
            <FontAwesomeIcon icon={faPlaneDeparture} /> {result.departDateDeparture} - {result.departTimeDeparture}
            </Card.Text>
            <Card.Text>
            <FontAwesomeIcon icon={faPlaneArrival} />  {result.arriveDateDeparture} - {result.arriveTimeDeparture}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card className="result">
          <Card.Body>
            <Card.Title><FontAwesomeIcon icon={faArrowRightFromBracket} /> {result.airlineReturn}</Card.Title>
            
            <Card.Subtitle className="mb-2 text-muted">
               {result.arriveCode} to {result.departCode}
            </Card.Subtitle>
            <Card.Text>
               {result.returnDate} - {result.returnTimeR}
            </Card.Text>
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
