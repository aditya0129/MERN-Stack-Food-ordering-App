import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

import axios from "axios";
// import { Card } from 'react-bootstrap';

function CityCard2() {
  const [city, setcity] = useState([]);
  const [Restaurant, setRestaurant] = useState([]);
  const { name } = useParams();
  let token = localStorage.getItem("token");
  //console.log(bookId)
  const navigate = useNavigate();
  useEffect(() => {
    if (name) {
      axios.get(`http://localhost:5000/restaurant/${name}`).then((responce) => {
        setRestaurant(responce.data.data);
      });
    } else {
      axios.get("http://localhost:5000/city").then((responce) => {
        setcity(responce.data.data);
      });
    }
  }, []);

  if (name) {
    return (
      <Container>
        <Row className="my-4">
          <Col>
            <h1>Restaurant</h1>
          </Col>
        </Row>
        <Row className="my-4">
          {Restaurant.map((city) => (
            <Col md={4} key={city._id}>
              <Card>
                <Card.Img
                  variant="top"
                  src={city.img}
                  style={{ height: "250px" }}
                />
                <Card.Body>
                  <Card.Title>{city.restaurant}</Card.Title>
                  <Card.Text>{city.location}</Card.Text>
                  <Button
                    variant="primary"
                    onClick={localStorage.setItem("food", city._id)}
                    href="/food"
                  >
                    find foods
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  } else {
    return (
      <Container>
        <Row className="my-4">
          <Col>
            <h1>City</h1>
          </Col>
        </Row>
        <Row className="my-4">
          {city.map((city) => (
            <Col md={4} key={city.name}>
              <Card>
                <Card.Img
                  variant="top"
                  src={city.img}
                  style={{ height: "250px" }}
                />
                <Card.Body>
                  <Card.Title>{city.city}</Card.Title>
                  <Card.Text>{city.state}</Card.Text>
                  <Button variant="primary" href={city._id}>
                    find Restaurant
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}



export default CityCard2;
