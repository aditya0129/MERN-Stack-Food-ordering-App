
import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import axios from "axios"

export default function Foodcard() {
    const [foods,setfoods]= useState([])
  
    let food = localStorage.getItem('food');
    console.log(food)
    const navigate = useNavigate();
    useEffect(() => {
  

        if(food){
            axios.get(`http://localhost:5000/foods/${food}`).then((responce) => { setfoods(responce.data.data) })
    }

    }, [])




    if(food){
       
        
        return (
            <Container>
            <Row className="my-4">
              <Col>
                <h1>foods</h1>
              </Col>
            </Row>
            <Row className="my-4">
              {foods.map(city => (
                <Col md={4} key={city._id}>
                  <Card>
                  <Card.Img variant="top" src={city.img}
                style={{height:"250px"}}
                />
                    <Card.Body>
                      <Card.Title>{city.name}</Card.Title>
                      <Card.Text>
                        {city.description}
                      </Card.Text>
                      <div className="container w-100">
              <select className="m-2 h-100  bg-success rounded">
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  );
                })}
              </select>
              <select className="m-2 h-100  bg-success rounded">
                <option value="half">Half</option>
                <option value="full">Full</option>
              </select>
              <div className="d-inline h-100 fs-5">Total Price</div>
            </div>
                      <Button variant="primary">Add to Cart</Button>
                  
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
            
          </Container>
        )
}}
