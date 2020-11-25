import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

function header() {
  return (
    <Container>
      <Row className="justify-content-md-center mt-3">
        <Col md="auto">
          <h1 className="mt-5 title-text">Star Wars Character API</h1>
        </Col>
      </Row>
    </Container>
  );
}

export default header;
