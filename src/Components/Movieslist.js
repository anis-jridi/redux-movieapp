import React from "react";
import { Card, Button } from "react-bootstrap";
import { useSelector } from "react-redux";

const Movieslist = () => {
  const data = useSelector((state) => state.data);

  return (
    <div>
      {data.map((el) => (
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={el.image} />
          <Card.Body>
            <Card.Title>{el.name}</Card.Title>
            <Card.Text>{el.rating}</Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Movieslist;
