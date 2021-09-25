import React from "react";
import { Row, Container, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer
      style={{
        width: "100%",
        position: "relative",
        bottom: 0,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Container>
        <Row>
          <Col className="text-center py-3 ">CopyRight &copy; Notes App </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;