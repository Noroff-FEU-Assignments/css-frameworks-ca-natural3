import React, { Children } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function NewsCards(props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>
          <h2>{props.title}</h2>
        </Card.Title>
        <Card.Text>{props.text}</Card.Text>
        <div className="card-button">
          <Button variant="primary">MORE</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default NewsCards;
