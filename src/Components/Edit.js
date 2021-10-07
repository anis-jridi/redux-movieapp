import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { handelEdit } from "../redux/action";

const Edit = ({ movie }) => {
  const [name, setName] = useState(movie.name);
  const [date, setDate] = useState(movie.date);
  const [image, setImage] = useState(movie.image);
  const [rating, setRating] = useState(movie.rating);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();

  const handelSubmit = (e) => {
    e.preventDefault();
    let newaddmovie = {
      id: movie.id,
      image: image,
      name: name,
      rating: rating,
      date: date,
    };
    dispatch(handelEdit(newaddmovie));
    handleClose();
  };

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Edit Movie
      </Button>

      <Modal
        style={{
          width: "400px",
          height: "600px",
          position: "absolute",
          left: "40%",
        }}
        show={show}
        onHide={handleClose}
      >
        <Modal.Header style={{ backgroundColor: "#E50914" }} closeButton>
          <Modal.Title>Edit Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p> Name</p>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <p> Date</p>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <p> Image</p>
          <input
            type="url"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <p> Rating</p>
          <ReactStars
            count={5}
            size={24}
            isHalf={true}
            onChange={handelRating}
            value={rating}
            activeColor="#ffd700"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handelSubmit}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Edit;
