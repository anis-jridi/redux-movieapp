import React from "react";
import { Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { handelDelete } from "../redux/action";
import ReactStars from "react-rating-stars-component";
import Edit from "./Edit";

const Movieslist = () => {
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();

  return (
    <div className="moviecard">
      {data.map((el) => (
        <Card style={{ width: "20rem" }}>
          <Card.Img
            style={{ width: "300px", height: "450px" }}
            variant="top"
            src={el.image}
          />
          <Card.Title>
            <ReactStars
              count={5}
              size={24}
              onChange={null}
              edit={false}
              value={el.rating}
            />
          </Card.Title>
          <Card.Body>
            <Card.Title>{el.name}</Card.Title>
            <span>
              <Button
                onClick={() => dispatch(handelDelete(el.id))}
                variant="primary"
              >
                DELETE
              </Button>
              <Edit movie={data} />
            </span>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Movieslist;
