import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Course = (props) => {
  return (
    <Link to={`/courses/${props.id}`}>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.img} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
           ${props.price}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default Course;
