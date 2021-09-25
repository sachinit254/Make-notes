import React from "react";
import {
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();
  return (
    <Navbar bg="primary" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          <Link to="/">Notes App</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="m-auto">
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="mr-2"
                aria-label="Search"
              />
            </Form>
          </Nav>
          <Nav style={{ maxHeight: "100px" }} navbarScroll>
            <Nav.Link href="#action1">
              <Link to="/mynotes">My Notes</Link>
            </Nav.Link>
            <NavDropdown title="Sachin" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">My Profile</NavDropdown.Item>

              <NavDropdown.Divider />
              <NavDropdown.Item
                onClick={() => {
                  localStorage.removeItem("userInfo");
                  history.push("/");
                }}
              >
                logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
