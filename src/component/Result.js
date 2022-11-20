import React from "react";
import "./Result.css";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
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
    <Row>
      <Col>
        <Card>
          <Card.Body>
            <Card.Title>{result.airline}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {result.departCode} to {result.arriveCode}
            </Card.Subtitle>
            <Card.Text>
              Depart: {result.departDate} {result.departTimeD} -{" "}
              {result.arriveTimeD}
            </Card.Text>
            <Card.Text>
              Return: {result.returnDate} {result.returnTimeR} -{" "}
              {result.arriveTimeR}
            </Card.Text>
            <Card.Text>Price: {result.price}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  ));
}

export default Result;
