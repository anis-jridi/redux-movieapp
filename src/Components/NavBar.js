import React, { useState } from "react";
import {
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  Button,
} from "react-bootstrap";
import reactStars from "react-rating-stars-component";
import { useDispatch } from "react-redux";
import { handelFilter } from "../redux/action";

const NavBar = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const [rate, setRate] = useState("");
  return (
    <div>
      <Navbar className="Navbar" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">
            <img
              className="image-nav"
              src="https://play-lh.googleusercontent.com/Ycc-R0q781DA7aLqFcb6qQ7w8qTXrH50TTwBS5ZXDaj6u8NA18_WJLJb6--qLq2duQM"
              alt=""
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            {/* <span>
              <reactStars
                count={5}
                onChange={setRate}
                size={24}
                activeColor="#ffd700"
              />
            </span> */}
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={(e) => {
                  setSearch(e.target.value);
                  dispatch(handelFilter(e.target.value));
                }}
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
