import React from "react";
import "./Result.css";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";
import sampleResults from "../data/sampleResults.json";

function Result(departCode, arriveCode, departDate, returnDate, passengers) {
  // const [results, setResults] = React.useState([]);

  // console.log("departCode: " + departCode);
  // console.log("arriveCode: " + arriveCode);
  // console.log("passengers: " + passengers);

  //   console.log(url);

  // GET LIST RESULTS FROM TRIPFORM AND BUILD OUT FLIGHT
  // COMPONENT TO DISPLAY RESULTS

  //   fetch("https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode="+departCode+"&destinationLocationCode="+arriveCode+"&departureDate=2021-11-01&adults="+passengers+"&max=2")
  // .then((res) => res.json())
  // .then(
  //   (result) => {
  //     console.log(result);
  //     setResults(result);
  //     });

  return sampleResults.map((result) => (
    <Row className="result-card mx-auto">
      <Col>
        <Card className="result">
          <Card.Body>
            <Card.Title>{result.airline}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {result.departCode} to {result.arriveCode}
            </Card.Subtitle>
            <Card.Text>
              Departure Flight: {result.departDate} {result.departTimeD}
              {result.arriveTimeD}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card className="result">
          <Card.Body>
            <Card.Title>{result.airline}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
               {result.arriveCode} to {result.departCode}
            </Card.Subtitle>
            <Card.Text>
              Return Flight: {result.returnDate} {result.returnTimeR}
              {result.arriveTimeR}
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
          </Card.Body>
        </Card>
      </Col>
    </Row>
  ));
}

export default Result;
